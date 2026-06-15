import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          AI GENERATION LIVE — TRY IT NOW
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Professional AI<br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Headshots in Seconds
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Get 40 photorealistic AI-generated headshots for LinkedIn, resumes, and social media.
          No photographer. No studio. Just upload or describe, and AI does the rest.
        </p>

        {/* Demo Image Strip */}
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          <img src="https://image.pollinations.ai/prompt/ultra+realistic+professional+corporate+headshot+woman+studio+lighting+photorealistic?width=200&height=200&seed=42&nologo=true" alt="AI headshot demo" className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-md border-2 border-white hover:scale-105 transition" />
          <img src="https://image.pollinations.ai/prompt/ultra+realistic+professional+headshot+man+business+suit+photorealistic?width=200&height=200&seed=99&nologo=true" alt="AI headshot demo" className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-md border-2 border-white hover:scale-105 transition" />
          <img src="https://image.pollinations.ai/prompt/ultra+realistic+casual+portrait+woman+outdoor+photorealistic?width=200&height=200&seed=77&nologo=true" alt="AI headshot demo" className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-md border-2 border-white hover:scale-105 transition" />
          <img src="https://image.pollinations.ai/prompt/ultra+realistic+studio+portrait+man+dramatic+lighting+photorealistic?width=200&height=200&seed=55&nologo=true" alt="AI headshot demo" className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-md border-2 border-white hover:scale-105 transition" />
        </div>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link href="/headshots"
            className="px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-200">
            🪄 Try Free Demo
          </Link>
          <Link href="/checkout?product=headshots&amount=19"
            className="px-8 py-4 bg-white text-gray-800 rounded-full text-lg font-bold border-2 border-gray-200 hover:border-purple-300 transition">
            Buy Now — 
          </Link>
        </div>
        <div className="mt-5 flex justify-center gap-6 text-sm text-gray-400">
          <span>✓ Real AI Generation</span>
          <span>✓ PayPal Secure</span>
          <span>✓ Instant Download</span>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-20" id="pricing">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">One Product. Real AI.</h2>
          <p className="text-center text-gray-500 mb-16">Pay once. No subscription. AI delivers instantly.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Headshots */}
            <div className="border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition hover:shadow-lg bg-gradient-to-b from-purple-50/50">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-2">AI Headshots</h3>
              <p className="text-gray-500 mb-4 text-sm">Photorealistic professional profile photos. Perfect for LinkedIn, resumes, company sites, dating apps.</p>
              <div className="text-4xl font-bold text-purple-600 mb-1"></div>
              <div className="text-gray-400 text-sm mb-6">40 headshots · 5 styles · instant download</div>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li>✓ 40 unique AI-generated photos</li>
                <li>✓ Professional, casual, studio, creative</li>
                <li>✓ High-res JPG & PNG</li>
                <li>✓ Real AI, no stock photos</li>
                <li>✓ Instant delivery after payment</li>
              </ul>
              <Link href="/headshots" className="block text-center py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition text-sm">
                Try Free Preview →
              </Link>
            </div>
            {/* SEO */}
            <div className="border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition hover:shadow-lg bg-gradient-to-b from-blue-50/50">
              <div className="text-5xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold mb-2">SEO Blog Posts</h3>
              <p className="text-gray-500 mb-4 text-sm">Rank on Google. 2000+ word articles with meta tags, keywords, and H2/H3 structure. Ready to publish.</p>
              <div className="text-4xl font-bold text-blue-600 mb-1"></div>
              <div className="text-gray-400 text-sm mb-6">2000+ words · SEO optimized · instant</div>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li>✓ 2000+ word comprehensive article</li>
                <li>✓ SEO title, meta, keywords</li>
                <li>✓ H2/H3 heading structure</li>
                <li>✓ Internal link suggestions</li>
                <li>✓ Publish-ready immediately</li>
              </ul>
              <Link href="/checkout?product=seo&amount=29" className="block text-center py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition text-sm">
                Buy Now —  →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-gray-500 mb-12">Four simple steps to your professional AI headshots</p>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { step: "01", title: "Choose Style", desc: "Pick from professional, casual, creative, or studio" },
            { step: "02", title: "Pay Securely", desc: "One-time  via PayPal with buyer protection" },
            { step: "03", title: "AI Generates", desc: "Real AI creates 40 unique headshots in minutes" },
            { step: "04", title: "Download & Use", desc: "Get high-res files instantly. Use anywhere!" },
          ].map((item) => (
            <div key={item.step} className="group">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center font-bold mx-auto mb-3 group-hover:bg-purple-600 group-hover:text-white transition text-sm">
                {item.step}
              </div>
              <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Secure & Trusted</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-1">🔒</div>
              <div className="font-semibold">SSL Encrypted</div>
              <div className="text-gray-400 text-xs">256-bit security</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-1">🛡️</div>
              <div className="font-semibold">Buyer Protection</div>
              <div className="text-gray-400 text-xs">PayPal guaranteed</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-1">⚡</div>
              <div className="font-semibold">Instant Delivery</div>
              <div className="text-gray-400 text-xs">Results in minutes</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-2xl mb-1">🤖</div>
              <div className="font-semibold">Real AI</div>
              <div className="text-gray-400 text-xs">No stock photos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <EmailCapture />
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Professional AI Headshots?</h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          No photographer. No expensive studio. Just real AI generating professional photos you can use anywhere.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/headshots"
            className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full text-lg font-bold hover:bg-gray-100 transition">
            🪄 Try Free Demo
          </Link>
          <Link href="/checkout?product=headshots&amount=19"
            className="inline-block px-10 py-4 bg-purple-700 text-white rounded-full text-lg font-bold hover:bg-purple-800 transition border-2 border-white/30">
            Buy Now — 
          </Link>
        </div>
        <p className="text-sm text-white/60 mt-6">Questions? Click the chat bubble at bottom-right for instant AI support 24/7!</p>
      </section>
    </div>
  );
}
