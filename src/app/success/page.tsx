"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "headshots";

  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <div className="text-7xl mb-8">🎉</div>
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-gray-600 mb-8 text-lg">
        Thank you for your purchase! Your order has been confirmed.
      </p>

      <div className="bg-white rounded-2xl p-6 shadow-sm border mb-8">
        <div className="text-sm text-gray-500 mb-2">Order Details</div>
        <div className="font-bold text-lg">
          {product === "headshots" ? "AI Headshots Package" : "SEO Content Article"}
        </div>
        <div className="text-2xl font-bold text-purple-600 mt-2">
          ${product === "headshots" ? "19" : "29"} USD
        </div>
        <div className="text-xs text-green-600 mt-3">✅ Payment Confirmed</div>
      </div>

      <div className="space-y-4">
        {product === "headshots" ? (
          <Link
            href="/headshots"
            className="block w-full py-4 bg-purple-600 text-white rounded-full text-lg font-bold hover:bg-purple-700 transition"
          >
            Generate Your Headshots Now →
          </Link>
        ) : (
          <Link
            href="/seo"
            className="block w-full py-4 bg-blue-600 text-white rounded-full text-lg font-bold hover:bg-blue-700 transition"
          >
            Generate Your SEO Content Now →
          </Link>
        )}
        <Link
          href="/"
          className="block w-full py-3 text-gray-600 text-sm hover:text-purple-600 transition"
        >
          Back to Home
        </Link>
      </div>

      <div className="mt-12 p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
        <h3 className="font-bold text-lg mb-2">⚠️ Important for PayPal Users</h3>
        <p className="text-sm text-gray-600">
          PayPal payments may take a few minutes to process. If you do not receive
          your content within 10 minutes, please email us at{" "}
          <strong>support@aimoneymaker.com</strong> with your PayPal transaction ID.
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-lg mx-auto px-4 py-32 text-center">
          <div className="animate-spin text-5xl mb-4">🔄</div>
          <p>Loading order details...</p>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
