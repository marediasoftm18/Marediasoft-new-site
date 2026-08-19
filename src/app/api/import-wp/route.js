import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parseStringPromise } from "xml2js";

export async function GET() {
  try {
    const xmlPath = path.resolve(process.cwd(), "public/insightsamptrendsmarediasoftdigitalmarketingblog.WordPress.2026-04-04.xml");
    if (!fs.existsSync(xmlPath)) {
      return NextResponse.json({ message: "XML file not found" }, { status: 404 });
    }

    const xml = fs.readFileSync(xmlPath, "utf8");
    const result = await parseStringPromise(xml);
    const items = result.rss.channel[0].item;
    const attachmentMap = new Map();

    for (const item of items) {
      const postType = item["wp:post_type"] ? item["wp:post_type"][0] : "post";
      const attachmentId = item["wp:post_id"] ? item["wp:post_id"][0] : null;
      const attachmentUrl = item["wp:attachment_url"] ? item["wp:attachment_url"][0] : null;

      if (postType === "attachment" && attachmentId && attachmentUrl) {
        attachmentMap.set(String(attachmentId), String(attachmentUrl));
      }
    }

    let importedCount = 0;
    for (const item of items) {
      const postType = item["wp:post_type"] ? item["wp:post_type"][0] : "post";
      
      if (postType !== "post") continue;

      const title = item.title ? item.title[0] : "Untitled";
      const slug = item["wp:post_name"] ? item["wp:post_name"][0] : `post-${Date.now()}`;
      const content = item["content:encoded"] ? item["content:encoded"][0] : "";
      const excerpt = item["excerpt:encoded"] ? item["excerpt:encoded"][0] : "";
      const status = item["wp:status"] ? item["wp:status"][0] : "draft";
      const authorName = item["dc:creator"] ? item["dc:creator"][0] : "Admin";
      
      let publishedAt = null;
      if (item.pubDate && item.pubDate[0] && item.pubDate[0] !== "0000-00-00 00:00:00") {
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
          if (typeof cat === "string") return cat;
          return cat._ || (typeof cat === "object" ? JSON.stringify(cat) : cat);
        }).filter(Boolean);
      }
      const categories = categoriesArr.join(", ");

      // Featured Image
      let featuredImage = null;
      const postMeta = item["wp:postmeta"];
      if (postMeta) {
        const thumbIdMeta = postMeta.find(meta => meta["wp:meta_key"] && meta["wp:meta_key"][0] === "_thumbnail_id");
        if (thumbIdMeta) {
          const thumbId = String(thumbIdMeta["wp:meta_value"][0]);
          featuredImage = attachmentMap.get(thumbId) || null;
        }
      }

      if (!slug) continue;

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
    }

    return NextResponse.json({ message: "Import completed", total: importedCount });
  } catch (error) {
    return NextResponse.json({ message: "Import failed", error: error.message }, { status: 500 });
  }
}
