'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Edit2, ExternalLink, Trash2 } from 'lucide-react';
import { movePostToTrash } from '@/app/actions/post';
import styles from '../admin.module.css';

export default function PostActionButtons({ id, slug }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleMoveToTrash = () => {
    const confirmed = window.confirm('Move this post to trash? You can restore it later from the Trash page.');
    if (!confirmed) return;

    startTransition(async () => {
      try {
        await movePostToTrash(id);
        router.push('/admin/posts/trash');
        router.refresh();
      } catch (error) {
        console.error(error);
        window.alert('Failed to move the post to trash. Please try again.');
      }
    });
  };

  return (
    <div className={styles.actionGroup}>
      <Link href={`/admin/posts/${id}/edit`} className={styles.iconButton} title="Edit post">
        <Edit2 size={16} />
      </Link>
      <Link href={`/blog/${slug}`} target="_blank" className={styles.iconButton} title="View live">
        <ExternalLink size={16} />
      </Link>
      <button
        type="button"
        onClick={handleMoveToTrash}
        className={styles.iconButtonDanger}
        title="Move to trash"
        disabled={isPending}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
