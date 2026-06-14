"use client";
import Link from "next/link";

const POSTS = {
  twitter: [
    {
      title: "Professional Headshot (Short)",
      text: "Get 40 professional AI headshots for $19. No photographer needed. Upload selfies, get LinkedIn-ready photos in 3 minutes. https://tall-fans-rhyme.loca.lt/landing #AI #Headshots #LinkedIn",
    },
    {
      title: "Side Hustle Angle",
      text: "I make $1,000+/month selling AI headshots. Here is how: 1) Set up at aimoneymaker.com 2) Share on LinkedIn/Twitter 3) AI handles everything 4) Collect PayPal payments. Zero inventory. Zero shipping. 24/7 automated. #SideHustle #PassiveIncome",
    },
    {
      title: "SEO Content Pitch",
      text: "Need blog posts that rank on Google? Our AI writes 2,000+ word SEO-optimized articles in 30 seconds. Meta tags, keywords, perfect structure. $29 per article. https://tall-fans-rhyme.loca.lt/seo",
    },
  ],
  facebook: [
    {
      title: "Product Launch Post",
      text: "Professional AI Headshots - Only $19! Get 40 stunning LinkedIn-ready headshots without hiring a photographer. Try it now: https://tall-fans-rhyme.loca.lt/landing PayPal accepted. Instant delivery. 7-day money-back guarantee.",
    },
    {
      title: "Before/After Post Idea",
      text: "From selfie to professional headshot in 3 minutes! Our AI transforms your casual photos into studio-quality headshots. 100+ styles, instant download. Only $19: https://tall-fans-rhyme.loca.lt/checkout?product=headshots&amount=19 Share with a friend who needs a new LinkedIn photo!",
    },
  ],
  reddit: [
    {
      title: "r/sidehustle",
      text: "How I Built a $1K/Month AI Headshot Side Hustle (Zero Skills Required). I wanted to share my experience selling AI-generated headshots online. Here is the breakdown: Setup took 1 hour using the platform. Marketing is just posting on LinkedIn and Twitter. The AI handles all generation automatically. I collect payments via PayPal. Revenue: $19 per customer, about 2-3 sales per day. Happy to answer questions! https://tall-fans-rhyme.loca.lt",
    },
    {
      title: "r/LinkedIn",
      text: "PSA: You can now get professional headshots for $19 using AI. I was skeptical but tried it and got 40 incredible headshots in 3 minutes. They look better than the $300 photographer I used last year. Sharing because everyone on LinkedIn needs a great profile photo. https://tall-fans-rhyme.loca.lt/landing",
    },
  ],
  linkedin: [
    {
      title: "Professional Post",
      text: "Your LinkedIn photo is your first impression. Studies show profiles with professional headshots get 14x more views. But professional photographers charge $200-$500. I found a solution: AI-generated headshots for just $19. Upload a few selfies, get 40 professional headshots in 3 minutes. I tried it myself and the results are incredible. Check it out: https://tall-fans-rhyme.loca.lt/landing",
    },
  ],
};

export default function SharePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-4">Share & Earn</h1>
      <p className="text-center text-gray-600 mb-12">
        Copy these posts. Paste on social media. Drive traffic to your site. Make sales.
      </p>

      <div className="mb-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200 text-center">
        <div className="text-2xl font-bold mb-2">Your Site URL</div>
        <div className="text-lg font-mono bg-white rounded-xl p-3 inline-block mb-2">
          https://tall-fans-rhyme.loca.lt
        </div>
        <p className="text-sm text-gray-500">Share this link everywhere!</p>
      </div>

      {Object.entries(POSTS).map(([platform, posts]) => (
        <div key={platform} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 capitalize">
            {platform === "twitter" ? "Twitter / X" : platform === "facebook" ? "Facebook" : platform === "reddit" ? "Reddit" : "LinkedIn"}
          </h2>
          <div className="space-y-6">
            {posts.map((post, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-purple-600">{post.title}</h3>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(post.text);
                    }}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
                  {post.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-16 p-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Pro Marketing Tips</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div>
            <h3 className="font-bold mb-2">1. Consistency</h3>
            <p className="text-sm text-purple-100">Post 2-3 times per day across platforms. The algorithm rewards consistency. Use these templates on rotation.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">2. Engage</h3>
            <p className="text-sm text-purple-100">Reply to comments. Join LinkedIn groups. Answer questions on Reddit. Every interaction drives traffic.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">3. SEO Blog</h3>
            <p className="text-sm text-purple-100">Your site already has 6 SEO blog posts. Share them on social media. They rank on Google and bring organic traffic.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-purple-600 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
}
