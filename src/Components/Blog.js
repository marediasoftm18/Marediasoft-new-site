'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Blog.module.css';

const categories = ['All blogs', 'UI UX', 'Webflow', 'SaaS', 'MVP'];

const formatPostDate = (post) => {
  const dateValue = post.publishedAt || post.createdAt;
  if (!dateValue) return '';
  return new Date(dateValue).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export default function Blog({ posts = [], currentPage = 1, totalPages = 1 }) {
  const [category, setCategory] = useState('All blogs');
  const router = useRouter();

  const filteredPosts = category === 'All blogs'
    ? posts
    : posts.filter(post =>
        post.categories
          ?.split(',')
          .map(c => c.trim())
          .includes(category)
      );

  const handleCategoryChange = (cat) => {
    if (cat === category) return;
    setCategory(cat);
    router.push('/blog?page=1');
  };

  const handlePageChange = (newPage) => {
    router.push(`/blog?page=${newPage}`);
  };

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <>
      <section className={`py-4 ${styles.tabSection}`}>
        <div className="container">
          <ul className={styles.tabList} role="tablist">
            {categories.map(cat => (
              <li key={cat} className={styles.tabItem}>
                <button
                  type="button"
                  className={`${styles.tabButton} ${cat === category ? styles.tabButtonActive : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                  aria-pressed={cat === category}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className="container">
          <h1 className={`h1 fw-bold ${styles.heroTitle}`}>Marediasoft Blog</h1>

          {filteredPosts.length === 0 ? (
            <div className={`${styles.alertNotice} mt-4`}>
              <p className="m-0">No blog posts found in this category.</p>
            </div>
          ) : (
            <>
              {featuredPost && (
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className={styles.featuredLink}
                  aria-label={`Read featured post ${featuredPost.title}`}
                >
                  <article className={styles.featuredCard}>
                    <div className={styles.featuredImage}>
                      {featuredPost.featuredImage ? (
                        <img
                          src={featuredPost.featuredImage}
                          alt={featuredPost.title}
                        />
                      ) : (
                        <div className="d-flex align-items-center justify-content-center h-100">
                          <span className="text-white">No image</span>
                        </div>
                      )}
                    </div>
                    <div className={styles.featuredContent}>
                      <div className={styles.featuredBadgeRow}>
                        <span className={styles.dateLabel}>{formatPostDate(featuredPost)}</span>
                        {featuredPost.categories && (
                          <span className={styles.badgePrimary}>
                            {featuredPost.categories.split(',')[0].trim()}
                          </span>
                        )}
                      </div>
                      <h2>{featuredPost.title}</h2>
                      <p className="m-0 text-muted">
                        {featuredPost.excerpt || featuredPost.content?.substring(0, 200)}...
                      </p>
                    </div>
                  </article>
                </Link>
              )}

              {gridPosts.length > 0 && (
                <div className={styles.postGrid}>
                  {gridPosts.map(post => (
                    <Link
                      className={styles.postLink}
                      href={`/blog/${post.slug}`}
                      key={post.id}
                      aria-label={`Read ${post.title}`}
                    >
                      <article className={styles.postCard}>
                        <div className={styles.postImage}>
                          {post.featuredImage ? (
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                            />
                          ) : (
                            <div className={styles.imageFallback}>
                              No image
                            </div>
                          )}
                        </div>
                        <div className={styles.postBody}>
                          <div className={styles.cardHeader}>
                            <span className={styles.dateLabel}>{formatPostDate(post)}</span>
                            {post.categories && (
                              <span className={styles.badgePrimary}>
                                {post.categories.split(',')[0].trim()}
                              </span>
                            )}
                          </div>
                          <h3 className={styles.cardTitle}>{post.title}</h3>
                          <p className={styles.cardExcerpt}>
                            {post.excerpt || post.content?.substring(0, 120)}...
                          </p>
                          <div className={styles.cardFooter}>
                            <small>Continue reading →</small>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className={styles.paginationWrapper}>
                  <nav aria-label="Blog pagination">
                    <ul className="pagination justify-content-center">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>
                      </li>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                        <li
                          key={pageNum}
                          className={`page-item ${currentPage === pageNum ? 'active' : ''}`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(pageNum)}
                          >
                            {pageNum}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
