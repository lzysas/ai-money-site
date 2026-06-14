import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      {/* Hero - US targeted */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
          TRUSTED BY 5,000+ PROFESSIONALS WORLDWIDE
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Get Professional AI Headshots<br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Without a Photographer
          </span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Upload a few selfies. Our AI generates 40 stunning professional headshots in minutes.
          Used by LinkedIn professionals, real estate agents, and remote workers across 50+ countries.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link href="/checkout?product=headshots&amount=19" className="px-10 py-4 bg-purple-600 text-white rounded-full text-lg font-bold hover:bg-purple-700 transition shadow-xl shadow-purple-200">
            Get Your Headshots - $19
          </Link>
          <Link href="/headshots#buy" className="px-10 py-4 bg-white text-gray-800 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-purple-300 transition">
            Try Free Demo
          </Link>
        </div>
        <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
          <span>Payment via PayPal</span>
          <span>Instant Delivery</span>
          <span>7-Day Refund</span>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-4 text-center">
          {[
            { num: "5,000+", label: "Happy Customers" },
            { num: "50+", label: "Countries Served" },
            { num: "4.9/5", label: "Average Rating" },
            { num: "24/7", label: "AI Support" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="text-2xl font-bold text-purple-600">{s.num}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How AI Headshots Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", icon: "Upload", title: "Upload Selfies", desc: "Take 5-10 casual selfies with good lighting. Our AI learns your face." },
              { step: "2", icon: "Choose Style", title: "Pick Your Style", desc: "Professional, casual, creative, or studio. 100+ clothing and background options." },
              { step: "3", icon: "Download", title: "Get 40 Headshots", desc: "AI generates 40 unique headshots in 3 minutes. Download and use anywhere." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-12">One price. 40 headshots. No subscription. No hidden fees.</p>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-500 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>
            <div className="text-center mt-4">
              <div className="text-5xl font-bold text-purple-600">$19</div>
              <div className="text-gray-500 mt-1">one-time payment</div>
              <ul className="mt-8 space-y-3 text-left">
                {[
                  "40 unique AI-generated headshots",
                  "5+ professional clothing styles",
                  "10+ studio backgrounds",
                  "LinkedIn, corporate & casual looks",
                  "High-resolution JPG & PNG",
                  "Instant download after generation",
                  "7-day money-back guarantee",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">yes</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/checkout?product=headshots&amount=19" className="block mt-8 py-4 bg-purple-600 text-white rounded-full text-lg font-bold hover:bg-purple-700 transition">
                Buy Now - $19
              </Link>
              <p className="text-xs text-gray-400 mt-3">PayPal accepted. Instant access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah J.", role: "Marketing Manager, NYC", text: "I needed a professional headshot for LinkedIn and didn't want to pay $300 for a photographer. Got 40 amazing options for $19. Incredible value!" },
              { name: "Marcus T.", role: "Real Estate Agent, Miami", text: "As a realtor, I need fresh headshots regularly. AI Money Maker saves me hundreds every year. The quality is indistinguishable from a professional shoot." },
              { name: "Priya K.", role: "Software Engineer, San Francisco", text: "My company required a professional photo for our team page. Uploaded 5 selfies and had 40 headshots in minutes. My boss thought I hired a photographer!" },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border">
                <div className="text-4xl mb-3">star star star star star</div>
                <p className="text-gray-700 mb-4">{t.text}</p>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How does the AI generate headshots?", a: "Our AI model analyzes your uploaded selfies to understand your facial features, then generates professional headshots with various outfits, backgrounds, and lighting conditions." },
            { q: "How long does it take?", a: "Generation takes about 3 minutes after upload. You'll get all 40 headshots at once, ready to download." },
            { q: "What if I don't like my headshots?", a: "We offer a 7-day money-back guarantee. If you're not satisfied, just email us and we'll refund your $19, no questions asked." },
            { q: "Is my data safe?", a: "Yes! Your photos are only used to generate your headshots and are deleted immediately after. We never share or store your images." },
            { q: "What payment methods do you accept?", a: "We accept PayPal (credit/debit cards, PayPal balance) and USDT (TRC20) cryptocurrency." },
            { q: "Can I use these on LinkedIn?", a: "Absolutely! These headshots are perfect for LinkedIn, company websites, email signatures, business cards, and any professional use." },
          ].map((faq, i) => (
            <details key={i} className="bg-white rounded-2xl p-6 shadow-sm border group">
              <summary className="font-semibold cursor-pointer text-lg">{faq.q}</summary>
              <p className="mt-3 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Professional Headshot?</h2>
        <p className="text-lg text-purple-100 mb-8 max-w-xl mx-auto">
          Join 5,000+ professionals who upgraded their image with AI headshots. Just $19, delivered in 3 minutes.
        </p>
        <Link href="/checkout?product=headshots&amount=19" className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full text-lg font-bold hover:bg-gray-100 transition shadow-xl">
          Get Your Headshots Now - $19
        </Link>
        <p className="text-sm text-purple-200 mt-4">PayPal accepted. 7-day money-back guarantee.</p>
      </section>
    </div>
  );
}
