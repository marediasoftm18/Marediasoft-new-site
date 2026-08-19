'use server';

import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

async function checkAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error('Unauthorized');

  const role = session.user?.role ?? 'admin';
  if (role !== 'admin') {
    throw new Error('Unauthorized');
  }

  return session;
}

export async function createUser(formData) {
  await checkAdmin();

  const email = formData.get('email')?.toString().trim();
  const name = formData.get('name')?.toString().trim() || '';
  const password = formData.get('password')?.toString();
  const role = formData.get('role')?.toString() || 'editor';

  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role,
    },
  });

  revalidatePath('/admin/settings');
  return { success: true };
}

export async function deleteUser(id) {
  const session = await checkAdmin();
  if (!id) {
    throw new Error('Invalid user id');
  }

  if (session.user.id === id) {
    throw new Error('You cannot delete your own account from here');
  }

  await prisma.user.delete({
    where: { id },
  });

  revalidatePath('/admin/settings');
  return { success: true };
}
