import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: "Shreehari R Acharya",
    description:
      "Building scalable systems, developer tooling, Agentic and real-world applications.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blogs/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
