const fs = require('fs');
const { parseStringPromise } = require('xml2js');
const { PrismaClient } = require('@prisma/client');
const path = require('path');

const prisma = new PrismaClient();

async function importWP() {
  const xmlPath = path.resolve(__dirname, '../public/insightsamptrendsmarediasoftdigitalmarketingblog.WordPress.2026-04-04.xml');
  if (!fs.existsSync(xmlPath)) {
    console.error(`XML file not found at ${xmlPath}`);
    return;
  }
  
  const xml = fs.readFileSync(xmlPath, 'utf8');
  console.log('Parsing XML...');
  const result = await parseStringPromise(xml);
  const items = result.rss.channel[0].item;

  console.log(`Found ${items.length} total items in XML.`);

  let importedCount = 0;
  for (const item of items) {
    const postType = item['wp:post_type'] ? item['wp:post_type'][0] : 'post';
    
    // Only import actual blog posts
    if (postType !== 'post') continue;

    const title = item.title ? item.title[0] : 'Untitled';
    const slug = item['wp:post_name'] ? item['wp:post_name'][0] : `post-${Date.now()}`;
    const content = item['content:encoded'] ? item['content:encoded'][0] : '';
    const excerpt = item['excerpt:encoded'] ? item['excerpt:encoded'][0] : '';
    const status = item['wp:status'] ? item['wp:status'][0] : 'draft';
    const authorName = item['dc:creator'] ? item['dc:creator'][0] : 'Admin';
    
    let publishedAt = null;
    if (item.pubDate && item.pubDate[0] && item.pubDate[0] !== '0000-00-00 00:00:00') {
        const dateStr = item.pubDate[0];
        const parsedDate = new Date(dateStr);
        if (!isNaN(parsedDate.getTime())) {
            publishedAt = parsedDate;
        }
    }

    // Categories and Tags
    let categoriesArr = [];
    if (item.category) {
        categoriesArr = item.category.map(cat => {
            if (typeof cat === 'string') return cat;
            return cat._ || (typeof cat === 'object' ? JSON.stringify(cat) : cat);
        }).filter(Boolean);
    }
    const categories = categoriesArr.join(', ');

    // Featured Image
    let featuredImage = null;
    const postMeta = item['wp:postmeta'];
    if (postMeta) {
      const thumbIdMeta = postMeta.find(meta => meta['wp:meta_key'] && meta['wp:meta_key'][0] === '_thumbnail_id');
      if (thumbIdMeta) {
        featuredImage = String(thumbIdMeta['wp:meta_value'][0]);
      }
    }

    try {
      if (!slug) {
          console.warn(`Skipping post with no slug: ${title}`);
          continue;
      }
      
      await prisma.post.upsert({
        where: { slug: slug },
        update: {
          title,
          content,
          excerpt,
          status,
          authorName,
          categories,
          publishedAt,
          featuredImage,
        },
        create: {
          title,
          slug,
          content,
          excerpt,
          status,
          authorName,
          categories,
          publishedAt,
          featuredImage,
        },
      });
      importedCount++;
      if (importedCount % 10 === 0) {
          console.log(`Imported ${importedCount} posts...`);
      }
    } catch (error) {
      console.error(`Error importing post "${title}" (slug: ${slug}):`, error.message);
    }
  }

  console.log(`Import completed. Total posts imported/updated: ${importedCount}`);
}

importWP()
  .catch(e => console.error('Import failed:', e))
  .finally(async () => await prisma.$disconnect());
