"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call - in production, connect to Mailchimp/Beehiiv
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200">
        <div className="text-5xl mb-4">Check your inbox!!</div>
        <h3 className="text-xl font-bold mb-2">You are In!</h3>
        <p className="text-gray-600">
          We have sent you a confirmation email. Get ready for exclusive AI tips and offers!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
      <h3 className="text-2xl font-bold text-center mb-2">Get Free AI Tips Weekly</h3>
      <p className="text-center text-gray-600 mb-6">
        Join 10,000+ creators earning with AI. Tips, strategies, and exclusive offers.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-full outline-none focus:border-purple-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 disabled:bg-gray-400 transition whitespace-nowrap"
        >
          {loading ? "Sending..." : "Subscribe"}
        </button>
      </form>
      <p className="text-xs text-gray-400 text-center mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
