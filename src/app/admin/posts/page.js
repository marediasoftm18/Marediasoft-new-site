import { prisma } from '@/lib/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { updatePostStatus } from '@/app/actions/post';
import PostActionButtons from './PostActionButtons';
import {
  Plus,
  Search,
} from 'lucide-react';
import styles from '../admin.module.css';

export const dynamic = 'force-dynamic';

const POSTS_PER_PAGE = 10;
const FILTERS = ['all', 'publish', 'pending', 'draft', 'trash'];

function formatDate(dateValue) {
  if (!dateValue) return '--';
  return new Date(dateValue).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function buildQueryString(params) {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      search.set(key, String(value));
    }
  });

  const query = search.toString();
  return query ? `?${query}` : '';
}

export default async function PostsPage(props) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  if (session.user?.role === 'manager') {
    redirect('/admin');
  }

  const searchParams = props.searchParams ?? {};
  const rawStatus = searchParams.status || 'all';
  const status = FILTERS.includes(rawStatus) ? rawStatus : 'all';
  const query = typeof searchParams.q === 'string' ? searchParams.q.trim() : '';
  const currentPage = Math.max(1, Number.parseInt(searchParams.page || '1', 10) || 1);

  const where = {
    ...(status !== 'all' ? { status } : {}),
    ...(query
      ? {
          OR: [
            { title: { contains: query } },
            { slug: { contains: query } },
            { excerpt: { contains: query } },
            { categories: { contains: query } },
          ],
        }
      : {}),
  };

  const [posts, totalPosts, statusCounts] = await Promise.all([
    prisma.post.findMany({
      where,
      orderBy: [
        { updatedAt: 'desc' },
        { createdAt: 'desc' },
      ],
      skip: (currentPage - 1) * POSTS_PER_PAGE,
      take: POSTS_PER_PAGE,
      select: {
        id: true,
        title: true,
        slug: true,
        status: true,
        categories: true,
        authorName: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
    prisma.post.count({ where }),
    prisma.post.groupBy({
      by: ['status'],
      _count: { status: true },
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = totalPosts === 0 ? 0 : (safeCurrentPage - 1) * POSTS_PER_PAGE + 1;
  const endIndex = Math.min(safeCurrentPage * POSTS_PER_PAGE, totalPosts);

  const statusCountMap = statusCounts.reduce(
    (acc, item) => ({ ...acc, [item.status]: item._count.status }),
    { all: 0, publish: 0, pending: 0, draft: 0, trash: 0 }
  );
  statusCountMap.all = Object.values(statusCountMap).reduce(
    (sum, value) => sum + (typeof value === 'number' ? value : 0),
    0
  ) - (statusCountMap.all || 0);

  const paginationBase = {
    status: status === 'all' ? undefined : status,
    q: query || undefined,
  };

  return (
    <div className={styles.pageSection}>
      <div className={styles.pageHead}>
        <div>
          <h1 className={styles.pageTitle}>Posts</h1>
          <p className={styles.pageSubtitle}>Manage, review, and publish your blog content.</p>
        </div>
        <Link href="/admin/posts/new" className={styles.buttonPrimary}>
          <Plus size={16} />
          Add New Post
        </Link>
      </div>

      <form method="GET" className={styles.searchCard}>
        <div className={styles.searchInputWrapper}>
          <div className={styles.searchInputGroup}>
            <Search size={16} />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search by title, slug, excerpt, or category..."
              className={styles.searchInputField}
            />
          </div>
        </div>
        <input type="hidden" name="status" value={status} />
        <button type="submit" className={styles.buttonSecondary}>
          Search
        </button>
      </form>

      <div className={styles.filterTabs}>
        {FILTERS.map((filterName) => (
          <Link
            key={filterName}
            href={`/admin/posts${buildQueryString({
              status: filterName === 'all' ? undefined : filterName,
              q: query || undefined,
              page: 1,
            })}`}
            className={`${styles.filterTab} ${status === filterName ? styles.filterTabActive : ''}`}
          >
            <span>{filterName}</span>
            <span className={styles.filterTabCount}>
              {filterName === 'all' ? statusCountMap.all : statusCountMap[filterName] || 0}
            </span>
          </Link>
        ))}
      </div>

      <div className={styles.panel}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHeader}>
                <th className={styles.tableCell}>Title</th>
                <th className={styles.tableCell}>Author</th>
                <th className={styles.tableCell}>Categories</th>
                <th className={styles.tableCell}>Status</th>
                <th className={styles.tableCell}>Updated</th>
                <th className={styles.tableCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                const categoryList = post.categories
                  ? post.categories.split(',').map((item) => item.trim()).filter(Boolean)
                  : [];
                const primaryCategory = categoryList[0] || 'Uncategorized';
                const statusClassName =
                  post.status === 'publish'
                    ? styles.statusPublish
                    : post.status === 'pending'
                      ? styles.statusPending
                      : post.status === 'trash'
                        ? styles.statusTrash
                        : styles.statusDraft;

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
                        <span className={styles.categoryBadge}>{primaryCategory}</span>
                        {categoryList.length > 1 && (
                          <span className={styles.statusDate}>+{categoryList.length - 1} more</span>
                        )}
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={`${styles.statusBadge} ${statusClassName}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={styles.statusDate}>{formatDate(post.updatedAt || post.createdAt)}</span>
                    </td>
                    <td className={styles.tableCell}>
                      <div className={styles.rowActions}>
                        <PostActionButtons id={post.id} slug={post.slug} />
                        <div className={styles.statusActionRow}>
                          {['draft', 'pending', 'publish', 'trash'].map((nextStatus) => (
                            <form key={nextStatus} action={updatePostStatus}>
                              <input type="hidden" name="id" value={post.id} />
                              <input type="hidden" name="status" value={nextStatus} />
                              <button
                                type="submit"
                                className={`${styles.statusActionButton} ${post.status === nextStatus ? styles.statusActionButtonActive : ''}`}
                              >
                                {nextStatus}
                              </button>
                            </form>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {posts.length === 0 && (
                <tr>
                  <td colSpan="6" className={styles.tableCell}>
                    <div className={styles.emptyState}>
                      <p className={styles.emptyStateTitle}>No posts matched your filters.</p>
                      <p className={styles.statusDate}>
                        Try changing the search query or switch to another status.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={`${styles.panelHeader} ${styles.paginationBar}`}>
          <p className={styles.statusDate}>
            Showing {startIndex}-{endIndex} of {totalPosts} posts
          </p>
          <div className={styles.paginationControls}>
            <Link
              href={`/admin/posts${buildQueryString({
                ...paginationBase,
                page: Math.max(1, safeCurrentPage - 1),
              })}`}
              className={`${styles.paginationButton} ${safeCurrentPage === 1 ? styles.paginationButtonDisabled : ''}`}
              aria-disabled={safeCurrentPage === 1}
            >
              Previous
            </Link>
            <div className={styles.paginationNumbers}>
              {Array.from({ length: totalPages }, (_, index) => index + 1)
                .filter((pageNumber) => {
                  if (totalPages <= 7) return true;
                  return (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    Math.abs(pageNumber - safeCurrentPage) <= 1
                  );
                })
                .map((pageNumber, index, visiblePages) => {
                  const previous = visiblePages[index - 1];
                  const shouldShowGap = previous && pageNumber - previous > 1;

                  return (
                    <span key={pageNumber} className={styles.paginationNumberWrap}>
                      {shouldShowGap && <span className={styles.paginationGap}>...</span>}
                      <Link
                        href={`/admin/posts${buildQueryString({
                          ...paginationBase,
                          page: pageNumber,
                        })}`}
                        className={`${styles.paginationNumber} ${pageNumber === safeCurrentPage ? styles.paginationNumberActive : ''}`}
                      >
                        {pageNumber}
                      </Link>
                    </span>
                  );
                })}
            </div>
            <Link
              href={`/admin/posts${buildQueryString({
                ...paginationBase,
                page: Math.min(totalPages, safeCurrentPage + 1),
              })}`}
              className={`${styles.paginationButton} ${safeCurrentPage === totalPages ? styles.paginationButtonDisabled : ''}`}
              aria-disabled={safeCurrentPage === totalPages}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
