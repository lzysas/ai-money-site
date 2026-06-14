import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-4">24/7 Support</h1>
      <p className="text-center text-gray-600 mb-12">We're here to help. Try our AI chatbot first for instant answers!</p>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-8 border border-purple-200 text-center">
        <div className="text-5xl mb-4">Robot</div>
        <h3 className="text-xl font-bold mb-2">Try Our AI Chatbot First!</h3>
        <p className="text-gray-600 mb-4">
          Click the chat bubble at the bottom-right corner for instant 24/7 AI support. 
          Our AI can help with product questions, payment issues, and more.
        </p>
        <p className="text-xs text-purple-600">Available 24/7 - Instant Response</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-4xl mb-3">Email</div>
          <h3 className="font-bold text-lg mb-2">Email Support</h3>
          <p className="text-gray-600 mb-3">We respond within 2 hours</p>
          <a href="mailto:support@aimoneymaker.com" className="text-purple-600 font-bold hover:underline">
            support@aimoneymaker.com
          </a>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-4xl mb-3">Refresh</div>
          <h3 className="font-bold text-lg mb-2">Refund Policy</h3>
          <p className="text-gray-600 text-sm">
            Not satisfied? We offer a 7-day money-back guarantee on all purchases.
            Simply email us with your PayPal transaction ID and we'll process your refund within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h3 className="font-bold text-lg mb-4 text-center">FAQ</h3>
          <div className="text-left text-sm text-gray-600 space-y-4">
            {[
              { q: "How long does it take to generate headshots?", a: "AI headshots are generated in 2-3 minutes after payment confirmation." },
              { q: "What payment methods do you accept?", a: "We accept PayPal (credit/debit cards, PayPal balance) and USDT (TRC20) cryptocurrency." },
              { q: "Can I get a refund?", a: "Yes! 7-day money-back guarantee. Just email us with your transaction ID." },
              { q: "Is the SEO content actually optimized for Google?", a: "Yes, all articles include meta titles, descriptions, keyword-optimized headings, and internal link suggestions designed to rank." },
              { q: "How do I receive my headshots?", a: "Headshots are generated in your browser and available for immediate download as high-res JPG/PNG files." },
              { q: "Can I resell the AI headshots to my own clients?", a: "Absolutely! Many of our customers use our AI to run their own headshot businesses." },
            ].map((faq, i) => (
              <details key={i} className="group">
                <summary className="font-semibold cursor-pointer hover:text-purple-600 transition">{faq.q}</summary>
                <p className="mt-2 text-gray-500">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center space-y-4">
        <Link href="/" className="text-purple-600 hover:underline">Back to Home</Link>
        <div className="text-xs text-gray-400">
          AI Money Maker | support@aimoneymaker.com | PayPal: liuziwu16@gmail.com
        </div>
      </div>
    </div>
  );
}
