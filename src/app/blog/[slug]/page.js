import { prisma } from '@/lib/db';
import { resolveFeaturedImage } from '@/lib/wpMedia';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog Post | Marediasoft',
  description: 'Read our latest insights on UI UX Design, Web Design, SaaS, and Digital Solutions.',
};

function formatDate(dateValue) {
  if (!dateValue) return '';
  return new Date(dateValue).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post || post.status !== 'publish') {
    notFound();
  }

  const primaryCategory = post.categories?.split(',')[0]?.trim();
  const [latestPosts, trendingPosts] = await Promise.all([
    prisma.post.findMany({
      where: {
        status: 'publish',
        slug: { not: slug },
      },
      orderBy: [
        { publishedAt: 'desc' },
        { createdAt: 'desc' },
      ],
      take: 4,
      select: {
        title: true,
        slug: true,
        categories: true,
        publishedAt: true,
        createdAt: true,
      },
    }),
    prisma.post.findMany({
      where: {
        status: 'publish',
        slug: { not: slug },
        ...(primaryCategory ? { categories: { contains: primaryCategory } } : {}),
      },
      orderBy: [
        { publishedAt: 'desc' },
        { createdAt: 'desc' },
      ],
      take: 4,
      select: {
        title: true,
        slug: true,
        categories: true,
        publishedAt: true,
        createdAt: true,
      },
    }),
  ]);

  const featuredImage = await resolveFeaturedImage(post.featuredImage);
  const publishDate = post.publishedAt || post.createdAt;
  const formattedDate = publishDate
    ? new Date(publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';
  const sidebarTrendingPosts = trendingPosts.length > 0 ? trendingPosts : latestPosts;

  return (
    <main className={styles.page}>
      <article className={`container ${styles.article}`}>
        <div className={styles.layout}>
          <div className={styles.mainColumn}>
            <nav>
              <Link href="/blog" className={styles.backLink}>
                <span aria-hidden="true">←</span>
                <span>Back to Blog</span>
              </Link>
            </nav>

            <header className={styles.hero}>
              <h1 className={styles.title}>{post.title}</h1>

              <div className={styles.metaRow}>
                <span className={styles.dateLabel}>{formattedDate}</span>
                {primaryCategory && (
                  <span className={styles.badge}>{primaryCategory}</span>
                )}
              </div>

              {featuredImage && (
                <div className={styles.imageWrap}>
                  <img
                    src={featuredImage}
                    alt={post.title}
                  />
                </div>
              )}

              {post.excerpt && (
                <p className={styles.excerpt}>{post.excerpt}</p>
              )}
            </header>

            <section className={styles.contentCard}>
              <div className={styles.content}>
                {post.content && typeof post.content === 'string' && post.content.includes('<') ? (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                  <p>{post.content}</p>
                )}
              </div>
            </section>

            <footer className={styles.footer}>
              <Link href="/blog" className={styles.footerButton}>
                Back to Blog
              </Link>
            </footer>
          </div>

          <aside className={styles.sidebar}>
            <section className={styles.sidebarCard}>
              <h2 className={styles.sidebarTitle}>Latest Updates</h2>
              <div className={styles.sidebarList}>
                {latestPosts.map((sidebarPost) => (
                  <div key={sidebarPost.slug} className={styles.sidebarItem}>
                    <Link href={`/blog/${sidebarPost.slug}`} className={styles.sidebarLink}>
                      <div className={styles.sidebarMeta}>
                        <span>{formatDate(sidebarPost.publishedAt || sidebarPost.createdAt)}</span>
                        {sidebarPost.categories && (
                          <span>{sidebarPost.categories.split(',')[0].trim()}</span>
                        )}
                      </div>
                      <p className={styles.sidebarPostTitle}>{sidebarPost.title}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.sidebarCard}>
              <h2 className={styles.sidebarTitle}>Top Trending Blogs</h2>
              <div className={styles.sidebarList}>
                {sidebarTrendingPosts.map((sidebarPost) => (
                  <div key={sidebarPost.slug} className={styles.sidebarItem}>
                    <Link href={`/blog/${sidebarPost.slug}`} className={styles.sidebarLink}>
                      <div className={styles.sidebarMeta}>
                        <span>{formatDate(sidebarPost.publishedAt || sidebarPost.createdAt)}</span>
                        {sidebarPost.categories && (
                          <span>{sidebarPost.categories.split(',')[0].trim()}</span>
                        )}
                      </div>
                      <p className={styles.sidebarPostTitle}>{sidebarPost.title}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </article>
    </main>
  );
}
