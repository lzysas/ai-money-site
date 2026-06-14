import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Money Maker | AI Headshots & SEO Content Factory - 24/7 Automated Income",
  description: "Generate professional AI headshots ($19) and SEO-optimized blog content ($29). PayPal & Crypto accepted. Fully automated 24/7. Start earning today.",
  keywords: "AI headshots, AI headshot generator, AI blog writer, SEO content, AI content generator, professional headshots, make money online, AI income",
  openGraph: {
    title: "AI Money Maker - AI Headshots & SEO Content",
    description: "Professional AI headshots in minutes. SEO blog posts that rank. Fully automated 24/7. PayPal accepted.",
    type: "website",
    siteName: "AI Money Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Money Maker - 24/7 Automated Income",
    description: "AI headshots & SEO content. PayPal accepted. Start earning today.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
        <nav className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              ✦ AI Money Maker
            </a>
            <div className="flex gap-4 text-sm font-medium">
              <a href="/headshots" className="hover:text-purple-600 transition hidden sm:inline">Headshots</a>
              <a href="/seo" className="hover:text-purple-600 transition hidden sm:inline">SEO Writer</a>
              <a href="/contact" className="hover:text-purple-600 transition">Support</a>
              <a href="/checkout?product=headshots&amount=19" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                Buy Now
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-400 text-sm py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>© 2026 AI Money Maker. Built for global creators.</p>
            <p className="mt-2">Automated 24/7 · Powered by AI · Earn While You Sleep</p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="/contact" className="hover:text-white transition">Contact</a>
              <a href="/contact" className="hover:text-white transition">Refund Policy</a>
              <a href="/checkout?product=headshots&amount=19" className="hover:text-white transition">Buy Headshots $19</a>
              <a href="/checkout?product=seo&amount=29" className="hover:text-white transition">Buy SEO $29</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
