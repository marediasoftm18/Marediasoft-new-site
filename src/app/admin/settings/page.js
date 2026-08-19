import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { createUser, deleteUser } from '@/app/actions/user';
import { UserPlus, Trash2, ShieldCheck } from 'lucide-react';
import styles from '../admin.module.css';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Settings | Marediasoft',
};

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }

  if (session.user.role !== 'admin') {
    redirect('/admin');
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return (
    <div className={styles.pageSection}>
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div>
            <h1 className={styles.pageTitle}>Settings</h1>
            <p className={styles.pageSubtitle}>Manage admin users, roles, and access levels.</p>
          </div>
          <div className={styles.headerBadge}>
            <ShieldCheck size={16} />
            Admin only
          </div>
        </div>
      </div>

      <div className={styles.settingsGrid}>
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <h2 className={styles.panelTitle}>Team Members</h2>
              <p className={styles.statusDate}>Add or remove user accounts and assign roles.</p>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {users.map((user) => (
              <div key={user.id} className={styles.userCard}>
                <div>
                  <p className={styles.titleText}>{user.name || 'Unnamed user'}</p>
                  <p className={styles.statusDate}>{user.email}</p>
                  <span className={styles.roleBadge}>{user.role}</span>
                </div>
                <div>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button type="submit" className={styles.buttonDestructive}>
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div className={styles.iconWrapper}>
              <UserPlus size={20} className={styles.textBlue} />
            </div>
            <h2 className={styles.panelTitle}>Add New User</h2>
          </div>
          <form action={createUser} className={styles.formGrid}>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="User name"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="user@example.com"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Choose a secure password"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Role</label>
              <select
                name="role"
                className={styles.formSelect}
                defaultValue="editor"
              >
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <button
              type="submit"
              className={styles.buttonPrimary}
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
