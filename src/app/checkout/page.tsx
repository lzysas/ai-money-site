"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "headshots";
  const amount = Number(searchParams.get("amount")) || 19;
  const [method, setMethod] = useState<"paypal" | "crypto" | null>(null);
  const [paid, setPaid] = useState(false);

  const productName =
    product === "headshots" ? "AI Headshots Package" : "SEO Content Article";
  const productDesc =
    product === "headshots"
      ? "40 professional AI-generated headshots"
      : "2000+ word SEO-optimized blog article";

  const USDT_ADDRESS = "TBA6jGkGETZnDgFvHFJpLGwKQBqMkqZybP";

  const handlePayPalCheckout = () => {
    const businessEmail = "lzysin@qq.com";
    const returnUrl = window.location.origin + "/success?product=" + product;
    const cancelUrl = window.location.origin + "/checkout?product=" + product + "&amount=" + amount;
    const paypalUrl =
      "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick" +
      "&business=" + encodeURIComponent(businessEmail) +
      "&item_name=" + encodeURIComponent(productName) +
      "&amount=" + amount +
      "&currency_code=USD" +
      "&return=" + encodeURIComponent(returnUrl) +
      "&cancel_return=" + encodeURIComponent(cancelUrl);
    window.location.href = paypalUrl;
  };

  const handleCryptoConfirm = () => {
    setPaid(true);
    setTimeout(() => {
      window.location.href = "/success?product=" + product;
    }, 2000);
  };

  if (paid) {
    return (
      <div className="max-w-lg mx-auto px-4 py-32 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h2 className="text-2xl font-bold mb-4">Payment Confirmed!</h2>
        <p className="text-gray-600 mb-8">Redirecting to your download...</p>
        <div className="animate-spin text-3xl inline-block">🔄</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">💳 Checkout</h1>
      <p className="text-center text-gray-600 mb-12">Secure payment via PayPal or Crypto</p>

      <div className="bg-white rounded-2xl p-6 shadow-sm border mb-8">
        <h3 className="font-bold text-lg mb-4">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">{productName}</span>
          <span className="font-semibold">${amount}</span>
        </div>
        <div className="text-sm text-gray-500">{productDesc}</div>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${amount} USD</span>
        </div>
      </div>

      <div className="space-y-4">
        <div
          onClick={() => setMethod("paypal")}
          className={`bg-white rounded-2xl p-6 shadow-sm border-2 cursor-pointer transition ${
            method === "paypal"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 hover:border-blue-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🅿️</span>
              <div>
                <div className="font-bold text-lg">PayPal</div>
                <div className="text-sm text-gray-500">
                  Credit/Debit Card · PayPal Balance · 180+ countries
                </div>
              </div>
            </div>
            <span className="text-blue-600 text-sm font-semibold">Recommended</span>
          </div>

          {method === "paypal" && (
            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-gray-600 mb-4">
                You will be redirected to PayPal to complete payment securely.
              </p>
              <button
                onClick={handlePayPalCheckout}
                className="px-10 py-3 bg-[#0070ba] text-white rounded-full text-lg font-bold hover:bg-[#003087] transition"
              >
                Pay with PayPal
              </button>
              <p className="text-xs text-gray-400 mt-3">
                🔒 SSL Encrypted · No card details stored on our servers
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => setMethod("crypto")}
          className={`bg-white rounded-2xl p-6 shadow-sm border-2 cursor-pointer transition ${
            method === "crypto"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200 hover:border-orange-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🪙</span>
            <div>
              <div className="font-bold text-lg">USDT (TRC20)</div>
              <div className="text-sm text-gray-500">
                Crypto · Low fees · Instant · Borderless
              </div>
            </div>
          </div>

          {method === "crypto" && (
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600 mb-4 text-center">
                Send <strong>{amount} USDT</strong> via TRC20 network to:
              </p>
              <div className="bg-gray-100 rounded-xl p-4 break-all text-sm font-mono text-center mb-4">
                {USDT_ADDRESS}
              </div>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(USDT_ADDRESS)
                  }
                  className="px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold hover:bg-gray-300"
                >
                  📋 Copy Address
                </button>
                <button
                  onClick={handleCryptoConfirm}
                  className="px-8 py-2 bg-orange-500 text-white rounded-full text-sm font-bold hover:bg-orange-600"
                >
                  I've Sent USDT
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">
                ⚠️ Only send USDT on TRC20 (TRON) network. Other networks will
                result in lost funds.
              </p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 opacity-60">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💳</span>
            <div>
              <div className="font-bold text-lg">
                Credit Card (Coming Soon)
              </div>
              <div className="text-sm text-gray-500">
                Visa · Mastercard · Stripe
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500">
        <span>🔒 SSL Encrypted</span>
        <span>🔄 Instant Delivery</span>
        <span>💬 24/7 Support</span>
      </div>
    </div>
  );
}
