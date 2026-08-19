'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { RotateCcw, Trash2 } from 'lucide-react';
import { permanentlyDeletePost, restorePost } from '@/app/actions/post';
import styles from '../admin.module.css';

export default function TrashPostActions({ id }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleRestore = () => {
    startTransition(async () => {
      try {
        await restorePost(id);
        router.refresh();
      } catch (error) {
        console.error(error);
        window.alert('Failed to restore the post. Please try again.');
      }
    });
  };

  const handlePermanentDelete = () => {
    const confirmed = window.confirm('Delete this post permanently? This action cannot be undone.');
    if (!confirmed) return;

    startTransition(async () => {
      try {
        await permanentlyDeletePost(id);
        router.refresh();
      } catch (error) {
        console.error(error);
        window.alert('Failed to delete the post permanently. Please try again.');
      }
    });
  };

  return (
    <div className={styles.actionGroup}>
      <button
        type="button"
        onClick={handleRestore}
        className={styles.iconButton}
        disabled={isPending}
        title="Restore post"
      >
        <RotateCcw size={16} />
      </button>
      <button
        type="button"
        onClick={handlePermanentDelete}
        className={styles.iconButtonDanger}
        disabled={isPending}
        title="Delete permanently"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
