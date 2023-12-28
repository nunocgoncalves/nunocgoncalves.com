import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://nunocgoncalves.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/work', '/blog'].map((route) => ({
    url: `https://nunocgoncalves.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
