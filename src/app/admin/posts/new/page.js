import PostEditor from '../PostEditor';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Add New Post | Marediasoft Admin',
};

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  if (session.user?.role === 'manager') {
    redirect('/admin');
  }

  return <PostEditor />;
}
