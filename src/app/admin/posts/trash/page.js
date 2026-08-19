import { prisma } from '@/lib/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { ArrowLeft, Trash2 } from 'lucide-react';
import TrashPostActions from '../TrashPostActions';
import styles from '../../admin.module.css';

export const dynamic = 'force-dynamic';

function formatDate(dateValue) {
  if (!dateValue) return '--';
  return new Date(dateValue).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default async function TrashPostsPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  if (session.user?.role === 'manager') {
    redirect('/admin');
  }

  const trashedPosts = await prisma.post.findMany({
    where: { status: 'trash' },
    orderBy: [
      { updatedAt: 'desc' },
      { createdAt: 'desc' },
    ],
    select: {
      id: true,
      title: true,
      slug: true,
      authorName: true,
      categories: true,
      updatedAt: true,
      createdAt: true,
    },
  });

  return (
    <div className={styles.pageSection}>
      <div className={styles.pageHead}>
        <div>
          <h1 className={styles.pageTitle}>Trash</h1>
          <p className={styles.pageSubtitle}>Restore posts you still need or delete them permanently from here.</p>
        </div>
        <Link href="/admin/posts" className={styles.buttonSecondary}>
          <ArrowLeft size={16} />
          Back to All Posts
        </Link>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div>
            <h2 className={styles.panelTitle}>Trashed Posts</h2>
            <p className={styles.statusDate}>{trashedPosts.length} item(s) in trash</p>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHeader}>
                <th className={styles.tableCell}>Title</th>
                <th className={styles.tableCell}>Author</th>
                <th className={styles.tableCell}>Categories</th>
                <th className={styles.tableCell}>Moved</th>
                <th className={styles.tableCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {trashedPosts.map((post) => {
                const categories = post.categories
                  ? post.categories.split(',').map((item) => item.trim()).filter(Boolean)
                  : [];

                return (
                  <tr key={post.id} className={styles.tableRow}>
                    <td className={styles.tableCell}>
                      <div className={styles.titleCell}>
                        <div className={styles.titleAvatar}>
                          {(post.title || 'P').trim().charAt(0).toUpperCase()}
                        </div>
                        <div className={styles.titleMeta}>
                          <p className={styles.titleText}>{post.title}</p>
                          <p className={styles.slugText}>/{post.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={styles.statusDate}>{post.authorName || 'Admin'}</span>
                    </td>
                    <td className={styles.tableCell}>
                      <div className={styles.categoryCell}>
                        <span className={styles.categoryBadge}>{categories[0] || 'Uncategorized'}</span>
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={styles.statusDate}>{formatDate(post.updatedAt || post.createdAt)}</span>
                    </td>
                    <td className={styles.tableCell}>
                      <TrashPostActions id={post.id} />
                    </td>
                  </tr>
                );
              })}
              {trashedPosts.length === 0 && (
                <tr>
                  <td colSpan="5" className={styles.tableCell}>
                    <div className={styles.emptyState}>
                      <p className={styles.emptyStateTitle}>Trash is empty.</p>
                      <p className={styles.statusDate}>Posts moved from the main list will appear here.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.trashHelpCard}>
        <div className={styles.trashHelpIcon}>
          <Trash2 size={18} />
        </div>
        <div>
          <p className={styles.trashHelpTitle}>Trash workflow</p>
          <p className={styles.statusDate}>
            Restore sends a post back as `draft`. Delete permanently removes it from the database.
          </p>
        </div>
      </div>
    </div>
  );
}
