import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Turn AI Into{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            24/7 Income
          </span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Professional AI headshots that sell for $19. SEO blog posts that rank on Google. 
          Fully automated. Zero human effort. Earn while you sleep.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link href="/headshots#buy" className="px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition shadow-lg shadow-purple-200">
            Try AI Headshots → $19
          </Link>
          <Link href="/seo#buy" className="px-8 py-4 bg-white text-gray-800 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-purple-300 transition">
            SEO Writer → $29
          </Link>
        </div>
      </section>

      {/* Payment & Support */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
            <div className="text-4xl mb-3">💸</div>
            <h3 className="font-bold mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600">PayPal · USDT Crypto</p>
            <p className="text-xs text-green-600 mt-2">🔒 SSL Encrypted</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold mb-2">Instant Delivery</h3>
            <p className="text-sm text-gray-600">Headshots in 3 min</p>
            <p className="text-xs text-green-600 mt-2">Articles in 30 sec</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">Email us anytime</p>
            <p className="text-xs text-green-600 mt-2">support@aimoneymaker.com</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-20" id="pricing">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Two Products. Infinite Revenue.</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Headshots */}
            <div className="border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-2">AI Headshots</h3>
              <p className="text-gray-600 mb-4">Professional profile photos in 100+ styles.</p>
              <div className="text-4xl font-bold text-purple-600 mb-2">$19</div>
              <div className="text-gray-500 text-sm mb-6">per set of 40 headshots</div>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li>✅ 40 unique headshots</li>
                <li>✅ 5+ clothing styles</li>
                <li>✅ 10+ backgrounds</li>
                <li>✅ LinkedIn, corporate, casual</li>
              </ul>
              <Link href="/checkout?product=headshots&amount=19" className="block text-center py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
                Buy Now - $19
              </Link>
            </div>
            {/* SEO */}
            <div className="border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-400 transition">
              <div className="text-5xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold mb-2">SEO Content Factory</h3>
              <p className="text-gray-600 mb-4">Rank-worthy blog posts optimized for Google.</p>
              <div className="text-4xl font-bold text-blue-600 mb-2">$29</div>
              <div className="text-gray-500 text-sm mb-6">per 2000-word article</div>
              <ul className="space-y-2 text-sm text-gray-600 mb-8">
                <li>✅ 2000+ word articles</li>
                <li>✅ SEO meta titles & descriptions</li>
                <li>✅ Keyword-optimized headings</li>
                <li>✅ Ready to publish</li>
              </ul>
              <Link href="/checkout?product=seo&amount=29" className="block text-center py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
                Buy Now - $29
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Pay / FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { step: "1", title: "Choose", desc: "Pick headshots or SEO content" },
            { step: "2", title: "Pay", desc: "PayPal, Stripe, or crypto" },
            { step: "3", title: "AI Works", desc: "Your content is generated instantly" },
            { step: "4", title: "Download", desc: "Get your files immediately" },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">{item.step}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Income Stream?</h2>
        <p className="text-lg text-purple-100 mb-8 max-w-xl mx-auto">
          No inventory. No shipping. No customer support. Just pure AI-powered revenue.
        </p>
        <Link href="/checkout?product=headshots&amount=19" className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full text-lg font-bold hover:bg-gray-100 transition">
          Start Earning Now →
        </Link>
      </section>
    </div>
  );
}
