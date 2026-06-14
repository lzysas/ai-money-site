import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Money Maker Blog - Tips to Earn with AI in 2026",
  description: "Learn how to make money with AI tools. SEO strategies, AI headshot tips, side hustle ideas, and passive income guides.",
  keywords: "make money with AI, AI side hustle, passive income AI, AI headshot business, SEO content tips",
};

const BLOG_POSTS = [
  {
    slug: "best-ai-headshot-generator-2026",
    title: "Best AI Headshot Generator 2026: Professional Photos for $19",
    excerpt: "Compare the top AI headshot generators of 2026. See why AI Money Maker offers the best quality at the lowest price with instant delivery.",
    date: "2026-06-14",
    category: "Reviews",
    readTime: "6 min read",
  },
  {
    slug: "how-to-make-money-online-with-ai-no-skills",
    title: "How to Make Money Online with AI in 2026 (Zero Skills Needed)",
    excerpt: "No coding, no design, no writing skills? No problem. Learn 7 proven ways to make real money online using AI tools anyone can use.",
    date: "2026-06-13",
    category: "Make Money",
    readTime: "10 min read",
  },
  {
    slug: "ai-small-business-tools-free",
    title: "15 Free & Cheap AI Tools Every Small Business Needs in 2026",
    excerpt: "Cut costs and boost productivity with these AI tools for small business. From marketing to customer service, AI handles it all.",
    date: "2026-06-12",
    category: "Business",
    readTime: "8 min read",
  },
  {
    slug: "how-to-get-customers-from-social-media",
    title: "How to Get 100+ Customers from Social Media (AI-Powered Strategy)",
    excerpt: "Use AI to automate your social media marketing. Post-consistently, engage automatically, and convert followers into paying customers.",
    date: "2026-06-11",
    category: "Marketing",
    readTime: "7 min read",
  },
  {
    slug: "make-money-with-ai-headshots",
    title: "How to Make $1000+/Month Selling AI Headshots in 2026",
    excerpt: "AI headshots are the perfect side hustle. Learn how to set up, market, and scale your AI headshot business with zero photography skills.",
    date: "2026-06-10",
    category: "Side Hustle",
    readTime: "5 min read",
  },
  {
    slug: "seo-content-that-ranks",
    title: "AI SEO Content: Rank #1 on Google Without Writing a Word",
    excerpt: "Discover how AI-powered SEO content creation can get your blog to page 1 of Google. Keywords, structure, and strategy revealed.",
    date: "2026-06-08",
    category: "SEO",
    readTime: "7 min read",
  },
  {
    slug: "passive-income-ai-tools-2026",
    title: "Top 10 AI Tools for Passive Income in 2026",
    excerpt: "From AI headshot generators to content factories, these are the best AI tools to build passive income streams this year.",
    date: "2026-06-05",
    category: "Passive Income",
    readTime: "6 min read",
  },
  {
    slug: "sell-digital-products-ai",
    title: "How to Sell AI-Generated Digital Products on Etsy & Gumroad",
    excerpt: "AI-generated headshots, templates, and content are hot sellers. Learn the exact strategy to list and sell AI products on major marketplaces.",
    date: "2026-06-01",
    category: "E-commerce",
    readTime: "8 min read",
  },
  {
    slug: "ai-automation-24-7-income",
    title: "Build a 24/7 Income Stream with AI Automation",
    excerpt: "Set up an automated AI business that makes money while you sleep. From chatbots to content generation, here is the complete blueprint.",
    date: "2026-05-28",
    category: "Automation",
    readTime: "6 min read",
  },
  {
    slug: "linkedin-headshot-tips",
    title: "Why Professional Headshots Increase Your LinkedIn Profile Views by 14x",
    excerpt: "Data shows professional headshots dramatically boost LinkedIn engagement. Here's why AI headshots are the affordable solution.",
    date: "2026-05-25",
    category: "Career",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">AI Money Maker Blog</h1>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Tips, strategies, and guides to earn money with AI in 2026
      </p>

      <div className="grid gap-6">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="bg-white rounded-2xl p-6 shadow-sm border hover:border-purple-300 transition group">
            <Link href={"/blog/" + post.slug}>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.date}</span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/" className="text-purple-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

