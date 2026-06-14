import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
          TRUSTED BY 5,000+ PROFESSIONALS WORLDWIDE
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Turn AI Into{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            24/7 Income
          </span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Professional AI headshots that sell for $19. SEO blog posts that rank on Google.
          Fully automated. Zero human effort. Earn while you sleep with our 24/7 AI chatbot handling sales and support.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link
            href="/checkout?product=headshots&amount=19"
            className="px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition shadow-lg shadow-purple-200"
          >
            AI Headshots - $19
          </Link>
          <Link
            href="/checkout?product=seo&amount=29"
            className="px-8 py-4 bg-white text-gray-800 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-purple-300 transition"
          >
            SEO Writer - $29
          </Link>
        </div>
        <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
          <span>Payment via PayPal</span>
          <span>Instant AI Delivery</span>
          <span>24/7 Chat Support</span>
          <span>7-Day Refund</span>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border text-center hover:shadow-md transition">
            <div className="text-4xl mb-3">Secure</div>
            <h3 className="font-bold mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600">PayPal - SSL Encrypted</p>
            <p className="text-xs text-green-600 mt-2">liuziwu16@gmail.com | paypal.me/5542jg</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border text-center hover:shadow-md transition">
            <div className="text-4xl mb-3">Fast</div>
            <h3 className="font-bold mb-2">Instant Delivery</h3>
            <p className="text-sm text-gray-600">Headshots in 3 min</p>
            <p className="text-xs text-green-600 mt-2">Articles in 30 sec</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border text-center hover:shadow-md transition">
            <div className="text-4xl mb-3">Robot</div>
            <h3 className="font-bold mb-2">24/7 AI Chat Support</h3>
            <p className="text-sm text-gray-600">Instant answers, any time</p>
            <p className="text-xs text-green-600 mt-2">Try the chat bubble!</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-20" id="pricing">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Two Products. Infinite Revenue.</h2>
          <p className="text-center text-gray-600 mb-16">One-time payment. No subscription. Instant delivery.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Headshots */}
            <div className="border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition hover:shadow-lg">
              <div className="text-5xl mb-4">Camera</div>
              <h3 className="text-2xl font-bold mb-2">AI Headshots</h3>
              <p className="text-gray-600 mb-4">Professional profile photos in 100+ styles. Perfect for LinkedIn, resumes, and company websites.</p>
              <div className="text-4xl font-bold text-purple-600 mb-2">$19</div>
              <div className="text-gray-500 text-sm mb-6">per set of 40 headshots</div>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li>40 unique AI-generated headshots</li>
                <li>5+ professional clothing styles</li>
                <li>10+ studio backgrounds</li>
                <li>LinkedIn, corporate, casual looks</li>
                <li>High-res JPG & PNG download</li>
              </ul>
              <Link
                href="/checkout?product=headshots&amount=19"
                className="block text-center py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
              >
                Buy Now - $19
              </Link>
            </div>
            {/* SEO */}
            <div className="border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition hover:shadow-lg">
              <div className="text-5xl mb-4">Writing</div>
              <h3 className="text-2xl font-bold mb-2">SEO Content Factory</h3>
              <p className="text-gray-600 mb-4">Rank-worthy blog posts. Optimized for Google with meta tags, keywords, and perfect structure.</p>
              <div className="text-4xl font-bold text-blue-600 mb-2">$29</div>
              <div className="text-gray-500 text-sm mb-6">per 2000-word article</div>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li>2000+ word comprehensive articles</li>
                <li>SEO meta titles & descriptions</li>
                <li>Keyword-optimized H2/H3 headings</li>
                <li>Internal link suggestions</li>
                <li>Ready to publish immediately</li>
              </ul>
              <Link
                href="/checkout?product=seo&amount=29"
                className="block text-center py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Buy Now - $29
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { step: "1", title: "Choose Product", desc: "Pick AI Headshots or SEO content" },
            { step: "2", title: "Secure Payment", desc: "PayPal or USDT crypto accepted" },
            { step: "3", title: "AI Generates", desc: "Content delivered in minutes" },
            { step: "4", title: "Download & Use", desc: "Get files immediately. Start earning!" },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <EmailCapture />
      </section>

      {/* US Landing Page CTA */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <Link href="/landing" className="inline-block px-8 py-3 bg-white border-2 border-purple-200 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition">
          View Full Product Page with Testimonials & FAQ
        </Link>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Income Stream?</h2>
        <p className="text-lg text-purple-100 mb-8 max-w-xl mx-auto">
          No inventory. No shipping. No 9-5 customer support. Our AI chatbot handles everything 24/7. Just collect payments.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/checkout?product=headshots&amount=19"
            className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full text-lg font-bold hover:bg-gray-100 transition"
          >
            Buy AI Headshots - $19
          </Link>
          <Link
            href="/checkout?product=seo&amount=29"
            className="inline-block px-10 py-4 bg-purple-500 text-white rounded-full text-lg font-bold hover:bg-purple-400 transition border-2 border-purple-300"
          >
            Buy SEO Content - $29
          </Link>
        </div>
        <p className="text-sm text-purple-200 mt-6">Questions? Click the chat bubble at bottom-right for instant AI support!</p>
      </section>
    </div>
  );
}

