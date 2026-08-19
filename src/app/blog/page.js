import { prisma } from '@/lib/db';
import { resolvePostsFeaturedImages } from '@/lib/wpMedia';
import Blog from '@/Components/Blog';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog | Marediasoft',
  description: 'Read our latest insights on UI UX Design, Web Design, SaaS, and Digital Solutions.',
};

const POSTS_PER_PAGE = 9;

export default async function BlogPage({ searchParams }) {
  const page = parseInt(searchParams?.page || '1', 10);
  const skip = (page - 1) * POSTS_PER_PAGE;

  const [posts, totalCount] = await Promise.all([
    prisma.post.findMany({
      where: { status: 'publish' },
      orderBy: { publishedAt: 'desc' },
      skip,
      take: POSTS_PER_PAGE,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        featuredImage: true,
        content: true,
        categories: true,
        publishedAt: true,
        createdAt: true,
      },
    }),
    prisma.post.count({ where: { status: 'publish' } }),
  ]);

  const resolvedPosts = await resolvePostsFeaturedImages(posts);
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <>
      <Blog posts={resolvedPosts} currentPage={page} totalPages={totalPages} />
    </>
  );
}
