'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  LogOut, 
  Settings, 
  BarChart3,
  Trash2,
} from 'lucide-react';
import styles from './admin.module.css';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const role = session?.user?.role || 'admin';

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'All Posts', href: '/admin/posts', icon: FileText },
    { name: 'Add New Post', href: '/admin/posts/new', icon: PlusCircle },
    { name: 'Trash', href: '/admin/posts/trash', icon: Trash2 },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const visibleMenu = menuItems.filter((item) => {
    if (item.name === 'Settings' && role !== 'admin') return false;
    if ((item.name === 'All Posts' || item.name === 'Add New Post' || item.name === 'Trash') && role === 'manager') return false;
    return true;
  });

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <Link href="/admin" className={styles.brandLink}>
            <div className={styles.brandLogo}>
              <span className={styles.brandLogoText}>M</span>
            </div>
            <span className={styles.brandText}>Maredia<span>Admin</span></span>
          </Link>
          <div className="mt-4 text-sm text-slate-500">
            Role: <span className="font-semibold text-slate-900">{role}</span>
          </div>
        </div>

        <nav className={styles.sidebarNav}>
          {visibleMenu.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === '/admin/posts' && pathname?.startsWith('/admin/posts/') && pathname !== '/admin/posts/trash') ||
              (item.href === '/admin/posts/trash' && pathname?.startsWith('/admin/posts/trash'));
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.activeNavItem : ''}`}
              >
                <Icon className={styles.navItemIcon} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.logoutSection}>
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className={styles.logoutButton}
          >
            <LogOut className={styles.navItemIcon} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Background Accents */}
        <div className={styles.bgAccentTop} />
        <div className={styles.bgAccentBottom} />

        <div className={styles.contentWrapper}>
          {children}
        </div>
      </main>
    </div>
  );
}
