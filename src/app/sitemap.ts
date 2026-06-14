import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-money-site.vercel.app";
  
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: baseUrl + "/landing", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: baseUrl + "/headshots", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: baseUrl + "/seo", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: baseUrl + "/checkout", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: baseUrl + "/blog/best-ai-headshot-generator-2026", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: baseUrl + "/blog/how-to-make-money-online-with-ai-no-skills", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: baseUrl + "/blog/ai-small-business-tools-free", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: baseUrl + "/blog/how-to-get-customers-from-social-media", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: baseUrl + "/blog", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: baseUrl + "/share", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: baseUrl + "/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}

