import Link from "next/link";
import { notFound } from "next/navigation";

const BLOG_DATA: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  "make-money-with-ai-headshots": {
    title: "How to Make $" + "1000+/Month Selling AI Headshots in 2026",
    date: "2026-06-10",
    category: "Side Hustle",
    readTime: "5 min read",
    content: "# How to Make $" + "1000+/Month Selling AI Headshots in 2026\n\nAI headshots are one of the fastest-growing digital products in 2026. With remote work becoming permanent, everyone needs a great headshot. But professional photographers charge $" + "200-$" + "500 per session.\n\n## Why AI Headshots Are a Goldmine\n\n1. Massive Market: 900+ million LinkedIn users\n2. Low Cost, High Margin: AI generation costs pennies. Sell for $" + "19-$" + "49.\n3. No Skills Required: The AI does all the work.\n4. Scalable: One AI can generate thousands per day.\n5. Recurring Demand: People need fresh headshots regularly.\n\n## Get Started\n\nReady to build your AI headshot business? Try our free demo at ai-money-site.vercel.app/headshots or buy the full package for $" + "19.",
  },
  "seo-content-that-ranks": {
    title: "AI SEO Content: Rank on Google Without Writing a Word",
    date: "2026-06-08",
    category: "SEO",
    readTime: "7 min read",
    content: "# AI SEO Content: Rank on Google\n\nContent is king, but writing it is a grind. AI SEO content generators write 2000+ word articles optimized for Google in 30 seconds.\n\n## Why AI-Generated Content Ranks\n\nGoogle cares about quality, EEAT signals, structure, and keywords. Our AI generates content that checks all boxes.\n\n## The AI SEO Strategy\n\n1. Find keywords with free tools\n2. Generate content in 30 seconds\n3. Add images and links\n4. Publish and build backlinks\n\n## Get Your SEO Content\n\nTry our AI SEO Content Factory at ai-money-site.vercel.app. One-time $" + "29 for a 2000+ word article.",
  },
  "best-ai-tools-for-side-hustle": {
    title: "15 Best AI Tools for Side Hustles in 2026",
    date: "2026-06-12",
    category: "AI Tools",
    readTime: "6 min read",
    content: "# 15 Best AI Tools for Side Hustles\n\n## Content & Writing\n\n1. AI Money Maker - AI headshots and SEO content\n2. ChatGPT - General AI assistant\n3. Claude - Long-form writing\n4. Jasper - Marketing copy\n\n## Design & Media\n\n5. DALL-E - AI image generation\n6. Midjourney - Creative images\n7. RunwayML - AI video editing\n\n## Business\n\n8. Notion AI - Project management\n9. HubSpot - CRM\n10. Mailchimp - Email marketing\n\nStart your AI side hustle today at ai-money-site.vercel.app.",
  },
  "how-to-get-customers-from-social-media": {
    title: "How to Get 100+ Customers from Social Media",
    date: "2026-06-11",
    category: "Marketing",
    readTime: "5 min read",
    content: "# How to Get Customers from Social Media\n\nSocial media has 5+ billion users. Here is the AI-powered strategy.\n\n## The 3-Platform Strategy\n\nFocus on: LinkedIn (professionals), Twitter/X (entrepreneurs), Reddit (communities).\n\n## Daily Schedule\n\n- Morning: Educational tip\n- Afternoon: Success story\n- Evening: Direct offer\n\n## Hashtags\n\nUse: #AIHeadshots #SideHustle #PassiveIncome #MakeMoneyOnline\n\n## Start Today\n\nVisit ai-money-site.vercel.app/share for ready-to-use posts.",
  },
  "ai-passive-income-guide": {
    title: "The Ultimate AI Passive Income Guide 2026",
    date: "2026-06-14",
    category: "Passive Income",
    readTime: "8 min read",
    content: "# AI Passive Income Guide\n\n## What is AI Passive Income?\n\nEarning money with minimal ongoing effort using AI automation.\n\n## Top 5 AI Income Streams\n\n1. AI Headshots - Sell professional photos for $" + "19 each\n2. SEO Content - Write articles for $" + "29 each\n3. Digital Products - Create once, sell forever\n4. Affiliate Marketing - Promote AI tools\n5. Print on Demand - AI-designed merchandise\n\n## Start with AI Headshots\n\nThe easiest entry point. No inventory, no shipping, no customer support (AI chatbot handles it).\n\nGet started: ai-money-site.vercel.app",
  },
  "linkedin-headshot-tips": {
    title: "10 LinkedIn Headshot Tips That Get You Hired",
    date: "2026-06-13",
    category: "Career",
    readTime: "4 min read",
    content: "# 10 LinkedIn Headshot Tips\n\nYour LinkedIn photo is your first impression. Make it count.\n\n1. Professional attire\n2. Clean background\n3. Good lighting\n4. Face takes 60% of frame\n5. Natural smile\n6. Recent photo\n7. High resolution\n8. Eye contact\n9. No filters\n10. Consistent across platforms\n\nGet AI-generated professional headshots at ai-money-site.vercel.app/headshots for $" + "19.",
  },
  "digital-product-ideas": {
    title: "20 Digital Products You Can Sell Online in 2026",
    date: "2026-06-09",
    category: "Digital Products",
    readTime: "6 min read",
    content: "# 20 Digital Products to Sell\n\n1. AI Headshots\n2. SEO Articles\n3. Social Media Templates\n4. Resume Templates\n5. E-books\n6. Online Courses\n7. Stock Photos\n8. Website Themes\n9. Mobile Apps\n10. Printables\n11. Music/Audio\n12. Video Templates\n13. Spreadsheets\n14. Email Templates\n15. Planners\n16. Fonts\n17. Icons\n18. Mockups\n19. Chatbots\n20. API Access\n\nStart with AI headshots at ai-money-site.vercel.app. Lowest barrier to entry.",
  },
  "twitter-marketing-strategy": {
    title: "Twitter/X Marketing Strategy for AI Products",
    date: "2026-06-07",
    category: "Marketing",
    readTime: "5 min read",
    content: "# Twitter/X Marketing Strategy\n\nX is perfect for promoting AI products like headshots.\n\n## Strategy\n\n1. Post 3x daily (morning, noon, evening)\n2. Use relevant hashtags\n3. Engage with replies quickly\n4. Share before/after transformations\n5. Thread about AI income journey\n\n## What to Post\n\n- Educational AI content\n- Income reports\n- Customer results\n- Behind the scenes\n- Direct offers\n\nGet ready-to-post content at ai-money-site.vercel.app/share.",
  },
  "ai-side-hustle-mistakes": {
    title: "7 AI Side Hustle Mistakes Beginners Make",
    date: "2026-06-06",
    category: "Side Hustle",
    readTime: "5 min read",
    content: "# 7 AI Side Hustle Mistakes\n\n1. Trying to do everything manually - Use AI automation\n2. Overcomplicating the offer - Keep it simple\n3. Not having a sales funnel - Capture emails\n4. Ignoring customer support - Use AI chatbot\n5. Pricing too low - Value your work\n6. No social proof - Collect testimonials\n7. Giving up too early - Consistency wins\n\nAvoid these mistakes. Start at ai-money-site.vercel.app.",
  },
  "passive-income-myths": {
    title: "10 Passive Income Myths Debunked",
    date: "2026-06-05",
    category: "Passive Income",
    readTime: "6 min read",
    content: "# 10 Passive Income Myths\n\nMyth 1: Passive income is completely hands-off\nTruth: It requires initial effort, then minimal maintenance.\n\nMyth 2: You need lots of money to start\nTruth: AI tools like ours start at $" + "19.\n\nMyth 3: It is too saturated\nTruth: AI headshots are still an emerging market.\n\nMyth 4: You need technical skills\nTruth: Our platform handles all the tech.\n\nStart building passive income today: ai-money-site.vercel.app.",
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_DATA[params.slug];
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
          {post.category}
        </span>
        <span className="text-xs text-gray-400">{post.date}</span>
        <span className="text-xs text-gray-400">{post.readTime}</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose max-w-none bg-white rounded-2xl p-8 shadow-sm border whitespace-pre-wrap text-gray-800 leading-relaxed">
        {post.content}
      </div>
      <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200 text-center">
        <h3 className="text-xl font-bold mb-2">Ready to Start Earning?</h3>
        <p className="text-gray-600 mb-4">Try our AI tools today. One-time payment, instant delivery.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/checkout?product=headshots&amount=19" className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
            AI Headshots $" + "19
          </Link>
          <Link href="/checkout?product=seo&amount=29" className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
            SEO Content $" + "29
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/blog" className="text-purple-600 hover:underline">Back to Blog</Link>
      </div>
    </div>
  );
}