import { prisma } from '@/lib/db';
import PostEditor from '../../PostEditor';
import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Edit Post | Marediasoft Admin',
};

export default async function EditPostPage({ params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  if (session.user?.role === 'manager') {
    redirect('/admin');
  }

  const { id } = params;

  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    notFound();
  }

  return <PostEditor post={post} />;
}
