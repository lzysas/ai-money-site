import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Money Maker | AI Headshots & SEO Content - 24/7 Automated Income",
  description: "Generate professional AI headshots ($19) and SEO-optimized blog content ($29). PayPal & Crypto accepted. Fully automated 24/7 customer support. Start earning today.",
  keywords: "AI headshots, AI headshot generator, AI blog writer, SEO content, AI content generator, professional headshots, make money online, AI passive income, AI side hustle",
  openGraph: {
    title: "AI Money Maker - AI Headshots & SEO Content",
    description: "Professional AI headshots in minutes. SEO blog posts that rank. 24/7 AI chatbot support. PayPal accepted. $19 headshots, $29 SEO content.",
    type: "website",
    siteName: "AI Money Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Money Maker - 24/7 Automated Income",
    description: "AI headshots & SEO content. PayPal accepted. 24/7 AI support. Start earning today.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://ai-money-site.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
        <nav className="bg-white border-b sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              AI Money Maker
            </a>
            <div className="flex gap-4 text-sm font-medium items-center">
              <a href="/landing" className="hover:text-purple-600 transition hidden md:inline">Home</a>
              <a href="/headshots" className="hover:text-purple-600 transition hidden sm:inline">Headshots</a>
              <a href="/seo" className="hover:text-purple-600 transition hidden sm:inline">SEO</a>
              <a href="/blog" className="hover:text-purple-600 transition hidden md:inline">Blog</a>
              <a href="/share" className="hover:text-purple-600 transition hidden md:inline">Share</a>
              <a href="/contact" className="hover:text-purple-600 transition">Support</a>
              <a href="/checkout?product=headshots&amount=19" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                Buy $19
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <ChatBot />

        <footer className="bg-gray-900 text-gray-400 text-sm py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-white font-bold mb-3">AI Money Maker</h4>
                <p>AI-powered headshots and SEO content. Built for global creators to earn 24/7.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Products</h4>
                <a href="/checkout?product=headshots&amount=19" className="block hover:text-white transition mb-1">AI Headshots - $19</a>
                <a href="/checkout?product=seo&amount=29" className="block hover:text-white transition mb-1">SEO Content - $29</a>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Company</h4>
                <a href="/blog" className="block hover:text-white transition mb-1">Blog</a>
                <a href="/share" className="block hover:text-white transition mb-1">Share & Earn</a>
                <a href="/contact" className="block hover:text-white transition mb-1">Contact</a>
                <a href="/landing" className="block hover:text-white transition mb-1">About</a>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3">Support</h4>
                <p className="mb-1">support@ai-money-site.vercel.app</p>
                <p>7-day money-back guarantee</p>
                <p className="mt-2 text-green-400">24/7 AI Chat Available</p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p>2026 AI Money Maker. All rights reserved.</p>
              <p className="mt-2">Automated 24/7 | Powered by AI | Earn While You Sleep</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

