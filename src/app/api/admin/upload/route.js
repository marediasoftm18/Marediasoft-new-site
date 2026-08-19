import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const role = session.user?.role ?? 'admin';
  if (!['admin', 'editor'].includes(role)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const formData = await request.formData();
  const file = formData.get('file');

  if (!file || typeof file === 'string' || file.size === 0) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const mimeType = file.type || '';
  if (!mimeType.startsWith('image/')) {
    return NextResponse.json({ error: 'Only image uploads are allowed' }, { status: 400 });
  }

  const publicDir = path.join(process.cwd(), 'public');
  const uploadsDir = path.join(publicDir, 'uploads');
  await fs.mkdir(uploadsDir, { recursive: true });

  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '-');
  const timestamp = Date.now();
  const filename = `${timestamp}-${safeName}`;
  const filePath = path.join(uploadsDir, filename);
  const data = Buffer.from(await file.arrayBuffer());

  await fs.writeFile(filePath, data);

  return NextResponse.json({ url: `/uploads/${filename}` });
}
