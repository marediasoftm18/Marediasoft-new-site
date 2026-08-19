import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';

let attachmentMapPromise;

function getXmlPath() {
  return path.resolve(
    process.cwd(),
    'public/insightsamptrendsmarediasoftdigitalmarketingblog.WordPress.2026-04-04.xml'
  );
}

async function loadAttachmentMap() {
  const xmlPath = getXmlPath();

  if (!fs.existsSync(xmlPath)) {
    return new Map();
  }

  const xml = fs.readFileSync(xmlPath, 'utf8');
  const result = await parseStringPromise(xml);
  const items = result?.rss?.channel?.[0]?.item ?? [];
  const map = new Map();

  for (const item of items) {
    const postType = item?.['wp:post_type']?.[0];
    const attachmentId = item?.['wp:post_id']?.[0];
    const attachmentUrl = item?.['wp:attachment_url']?.[0];

    if (postType === 'attachment' && attachmentId && attachmentUrl) {
      map.set(String(attachmentId), String(attachmentUrl));
    }
  }

  return map;
}

async function getAttachmentMap() {
  if (!attachmentMapPromise) {
    attachmentMapPromise = loadAttachmentMap();
  }

  return attachmentMapPromise;
}

export async function resolveFeaturedImage(featuredImage) {
  if (!featuredImage) return null;

  const normalizedValue = String(featuredImage).trim();
  if (!normalizedValue) return null;

  if (
    normalizedValue.startsWith('http://') ||
    normalizedValue.startsWith('https://') ||
    normalizedValue.startsWith('/')
  ) {
    return normalizedValue;
  }

  if (/^\d+$/.test(normalizedValue)) {
    const attachmentMap = await getAttachmentMap();
    return attachmentMap.get(normalizedValue) ?? null;
  }

  return normalizedValue;
}

export async function resolvePostsFeaturedImages(posts = []) {
  return Promise.all(
    posts.map(async (post) => ({
      ...post,
      featuredImage: await resolveFeaturedImage(post.featuredImage),
    }))
  );
}
