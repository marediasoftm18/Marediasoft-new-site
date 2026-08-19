import Link from 'next/link';
import { prisma } from '@/lib/db';
import { 
  FileText, 
  Users, 
  Eye, 
  Clock,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';
import styles from './admin.module.css';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const postCount = await prisma.post.count();
  const publishedCount = await prisma.post.count({ where: { status: 'publish' } });
  const draftCount = await prisma.post.count({ where: { status: 'draft' } });
  const trashCount = await prisma.post.count({ where: { status: 'trash' } });
  const userCount = await prisma.user.count();
  
  // Recent posts
  const recentPosts = await prisma.post.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
  });

  const stats = [
    { name: 'Total Posts', value: postCount, icon: FileText, iconBg: 'iconBlueBg', iconColor: 'textBlue' },
    { name: 'Published', value: publishedCount, icon: Eye, iconBg: 'iconEmeraldBg', iconColor: 'textEmerald' },
    { name: 'Drafts', value: draftCount, icon: Clock, iconBg: 'iconAmberBg', iconColor: 'textAmber' },
    { name: 'Team Members', value: userCount, icon: Users, iconBg: 'iconPurpleBg', iconColor: 'textPurple' },
  ];

  return (
    <div className={styles.contentWrapper}>
      <div>
        <h1 className={styles.dashboardTitle}>Dashboard Overview</h1>
        <p className={styles.dashboardDescription}>Welcome back! Here is what is happening with your blog today.</p>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.name} className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={`${styles.iconWrapper} ${styles[stat.iconBg]}`}>
                <stat.icon className={styles[stat.iconColor]} />
              </div>
              <div className={styles.statTrend}>
                <TrendingUp className={styles.textEmerald} />
                <span>+12%</span>
              </div>
            </div>
            <div>
              <p className={styles.statLabel}>{stat.name}</p>
              <h3 className={styles.statValue}>{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.contentGrid}>
        {/* Recent Posts Table */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>Recent Posts</h2>
            <button className={styles.viewAllButton}>View All</button>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.tableHeader}>
                  <th className={styles.tableCell}>Title</th>
                  <th className={styles.tableCell}>Status</th>
                  <th className={styles.tableCell}>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentPosts.map((post) => (
                  <tr key={post.id} className={styles.tableRow}>
                    <td className={styles.tableCell}>
                      <div className={styles.titleCell}>
                        <div className={styles.titleAvatar} />
                        <p className={styles.titleText}>{post.title}</p>
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.statusBadge} ${
                          post.status === 'publish' ? styles.statusPublish : styles.statusDraft
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className={`${styles.tableCell} ${styles.statusDate}`}>
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Feed / Tips */}
        <div className={styles.actionsPanel}>
          <h2 className={styles.actionsTitle}>
            <ArrowUpRight className={styles.textBlue} />
            Quick Actions
          </h2>
          <div className={styles.actionsGrid}>
              <Link href="/admin/posts/new" className={styles.actionButton}>
              <p className={styles.actionTitle}>Create New Post</p>
              <p className={styles.actionSubtitle}>Draft your next masterpiece</p>
            </Link>
            <Link href="/admin/settings" className={styles.actionButton}>
              <p className={styles.actionTitle}>Manage Users</p>
              <p className={styles.actionSubtitle}>View and edit contributors</p>
            </Link>
            <Link href="/admin/analytics" className={styles.actionButton}>
              <p className={styles.actionTitle}>View Analytics</p>
              <p className={styles.actionSubtitle}>See live admin metrics</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
