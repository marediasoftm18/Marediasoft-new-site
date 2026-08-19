import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { FileText, Users, Eye, Clock } from 'lucide-react';
import styles from '../admin.module.css';

export const dynamic = 'force-dynamic';

export default async function AnalyticsPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 6,
  });

  const postCount = await prisma.post.count();
  const publishedCount = await prisma.post.count({ where: { status: 'publish' } });
  const draftCount = await prisma.post.count({ where: { status: 'draft' } });
  const trashCount = await prisma.post.count({ where: { status: 'trash' } });
  const userCount = await prisma.user.count();

  const stats = [
    { name: 'Total Posts', value: postCount, icon: FileText, iconColor: 'textBlue', iconBg: 'iconBlueBg' },
    { name: 'Published', value: publishedCount, icon: Eye, iconColor: 'textEmerald', iconBg: 'iconEmeraldBg' },
    { name: 'Drafts', value: draftCount, icon: Clock, iconColor: 'textAmber', iconBg: 'iconAmberBg' },
    { name: 'Team Members', value: userCount, icon: Users, iconColor: 'textPurple', iconBg: 'iconPurpleBg' },
  ];

  return (
    <div className={styles.pageSection}>
      <div className={styles.pageHead}>
        <div>
          <h1 className={styles.pageTitle}>Analytics</h1>
          <p className={styles.pageSubtitle}>Live admin metrics updated from the database.</p>
        </div>
        <div className={`${styles.panelCard} ${styles.statusCard}`}>
          <p className={styles.statusDate}>Current role</p>
          <p className={styles.statusRoleTitle}>{session.user.role ?? 'admin'}</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.name} className={styles.statCard}>
            <div className={`${styles.iconWrapper} ${styles[stat.iconBg]}`}>
              <stat.icon size={20} className={styles[stat.iconColor]} />
            </div>
            <p className={styles.statLabel}>{stat.name}</p>
            <p className={styles.statValue}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <h2 className={styles.panelTitle}>Recent Posts</h2>
              <p className={styles.statusDate}>Newest published or draft posts from your blog.</p>
            </div>
            <span className={styles.filterTab}>{posts.length} items</span>
          </div>

          <div className={styles.cardGrid}>
            {posts.map((post) => (
              <div key={post.id} className={styles.userRow}>
                <div className={styles.userRowInner}>
                  <div>
                    <p className={styles.titleText}>{post.title}</p>
                    <p className={styles.statusDate}>{post.slug}</p>
                  </div>
                  <span className={styles.statusTag}>{post.status}</span>
                </div>
                <div className={styles.statusDate}>
                  Published: {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Not published'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.panel}>
          <h2 className={styles.panelTitle}>Status Breakdown</h2>
          <div className={styles.compactSection}>
            <div className={styles.statusRow}>
              <span>Published</span>
              <span className={styles.statSummaryValue}>{publishedCount}</span>
            </div>
            <div className={styles.statusRow}>
              <span>Draft</span>
              <span className={styles.statSummaryValue}>{draftCount}</span>
            </div>
            <div className={styles.statusRow}>
              <span>Trash</span>
              <span className={styles.statSummaryValue}>{trashCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
