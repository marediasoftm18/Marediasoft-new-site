'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

async function checkAuth(allowedRoles = ['admin', 'editor']) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error('Unauthorized');

  const role = session.user?.role ?? 'admin';
  if (!allowedRoles.includes(role)) {
    throw new Error('Unauthorized');
  }

  return session;
}

function normalizeStatus(status) {
  const allowedStatuses = new Set(['draft', 'pending', 'publish', 'trash']);
  return allowedStatuses.has(status) ? status : 'draft';
}

function normalizeDeleteInput(input) {
  if (typeof input === 'string') return input;
  if (input?.get) return input.get('id');
  return input?.id ?? null;
}

export async function savePost(data) {
  const session = await checkAuth(['admin', 'editor']);

  const {
    id,
    title,
    content,
    slug,
    status,
    excerpt,
    categories,
    featuredImage,
  } = data;
  const normalizedStatus = normalizeStatus(status);
  const existingPost = id
    ? await prisma.post.findUnique({
        where: { id },
        select: { publishedAt: true },
      })
    : null;
  const publishedAt = normalizedStatus === 'publish'
    ? existingPost?.publishedAt ?? new Date()
    : null;

  const postData = {
    title,
    content,
    slug,
    status: normalizedStatus,
    excerpt,
    categories,
    featuredImage,
    authorName: session.user?.name || session.user?.email || 'Admin',
    updatedAt: new Date(),
    publishedAt,
  };

  if (id) {
    await prisma.post.update({
      where: { id },
      data: postData,
    });
  } else {
    await prisma.post.create({
      data: postData,
    });
  }

  revalidatePath('/admin/posts');
  revalidatePath('/admin/posts/trash');
  revalidatePath('/blog');
  return { success: true };
}

export async function updatePostStatus(formData) {
  await checkAuth(['admin', 'editor']);

  const id = formData.get('id');
  const nextStatus = normalizeStatus(formData.get('status'));

  if (!id) {
    throw new Error('Post id is required');
  }

  const existingPost = await prisma.post.findUnique({
    where: { id },
    select: { publishedAt: true, slug: true },
  });

  if (!existingPost) {
    throw new Error('Post not found');
  }

  await prisma.post.update({
    where: { id },
    data: {
      status: nextStatus,
      publishedAt: nextStatus === 'publish'
        ? existingPost.publishedAt ?? new Date()
        : null,
      updatedAt: new Date(),
    },
  });

  revalidatePath('/admin/posts');
  revalidatePath('/admin/posts/trash');
  revalidatePath('/admin');
  revalidatePath('/blog');
  if (existingPost.slug) {
    revalidatePath(`/blog/${existingPost.slug}`);
  }
  return { success: true };
}

export async function movePostToTrash(input) {
  await checkAuth(['admin', 'editor']);
  const id = normalizeDeleteInput(input);
  if (!id) {
    throw new Error('Post id is required');
  }

  const existingPost = await prisma.post.findUnique({
    where: { id },
    select: { slug: true, status: true },
  });

  if (!existingPost) {
    throw new Error('Post not found');
  }

  if (existingPost.status !== 'trash') {
    await prisma.post.update({
      where: { id },
      data: {
        status: 'trash',
        publishedAt: null,
        updatedAt: new Date(),
      },
    });
  }

  revalidatePath('/admin/posts');
  revalidatePath('/admin/posts/trash');
  revalidatePath('/admin');
  revalidatePath('/blog');
  if (existingPost?.slug) {
    revalidatePath(`/blog/${existingPost.slug}`);
  }
  return { success: true };
}

export async function restorePost(input) {
  await checkAuth(['admin', 'editor']);
  const id = normalizeDeleteInput(input);
  if (!id) {
    throw new Error('Post id is required');
  }

  const existingPost = await prisma.post.findUnique({
    where: { id },
    select: { slug: true },
  });

  if (!existingPost) {
    throw new Error('Post not found');
  }

  await prisma.post.update({
    where: { id },
    data: {
      status: 'draft',
      updatedAt: new Date(),
    },
  });

  revalidatePath('/admin/posts');
  revalidatePath('/admin/posts/trash');
  revalidatePath('/admin');
  revalidatePath('/blog');
  if (existingPost?.slug) {
    revalidatePath(`/blog/${existingPost.slug}`);
  }
  return { success: true };
}

export async function permanentlyDeletePost(input) {
  await checkAuth(['admin', 'editor']);
  const id = normalizeDeleteInput(input);
  if (!id) {
    throw new Error('Post id is required');
  }

  const existingPost = await prisma.post.findUnique({
    where: { id },
    select: { slug: true },
  });

  await prisma.post.delete({
    where: { id },
  });
  revalidatePath('/admin/posts');
  revalidatePath('/admin/posts/trash');
  revalidatePath('/admin');
  revalidatePath('/blog');
  if (existingPost?.slug) {
    revalidatePath(`/blog/${existingPost.slug}`);
  }
  return { success: true };
}
