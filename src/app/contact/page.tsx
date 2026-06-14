import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-4">💬 24/7 Support</h1>
      <p className="text-center text-gray-600 mb-12">We are here to help. Reach out anytime.</p>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-4xl mb-3">📧</div>
          <h3 className="font-bold text-lg mb-2">Email Support</h3>
          <p className="text-gray-600 mb-3">We respond within 2 hours</p>
          <a href="mailto:support@aimoneymaker.com" className="text-purple-600 font-bold hover:underline">
            support@aimoneymaker.com
          </a>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-4xl mb-3">🔄</div>
          <h3 className="font-bold text-lg mb-2">Refund Policy</h3>
          <p className="text-gray-600 text-sm">
            Not satisfied? We offer a 7-day money-back guarantee on all purchases.
            Simply email us with your order details.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-4xl mb-3">❓</div>
          <h3 className="font-bold text-lg mb-2">FAQ</h3>
          <div className="text-left text-sm text-gray-600 space-y-3 mt-4">
            <div>
              <p className="font-semibold">How long does it take to generate headshots?</p>
              <p>AI headshots are generated in 2-3 minutes after payment.</p>
            </div>
            <div>
              <p className="font-semibold">What payment methods do you accept?</p>
              <p>We accept PayPal and USDT (TRC20) cryptocurrency.</p>
            </div>
            <div>
              <p className="font-semibold">Can I get a refund?</p>
              <p>Yes! 7-day money-back guarantee. Just email us.</p>
            </div>
            <div>
              <p className="font-semibold">Is the content SEO-optimized?</p>
              <p>Yes, all articles include meta titles, descriptions, keyword-optimized headings, and internal link suggestions.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-purple-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
}
