"use client";

import { useState } from "react";
import Link from "next/link";

const STYLES = [
  { id: "professional", label: "👔 Professional", desc: "LinkedIn & corporate" },
  { id: "casual", label: "👕 Casual", desc: "Everyday natural look" },
  { id: "creative", label: "🎨 Creative", desc: "Artistic & bold" },
  { id: "studio", label: "📸 Studio", desc: "High-end photography" },
];

export default function HeadshotsPage() {
  const [step, setStep] = useState<"select" | "generating" | "done">("select");
  const [style, setStyle] = useState("professional");
  const [gender, setGender] = useState("any");
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleGenerate = async () => {
    setStep("generating");
    setError("");

    try {
      const res = await fetch("/api/generate-headshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ style, gender }),
      });
      const data = await res.json();
      if (data.success) {
        setImages(data.images);
      } else {
        setError(data.error || "Generation failed. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setStep("done");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-3">🔥 AI-POWERED · REAL GENERATION</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">AI Professional Headshots</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Generate photorealistic AI headshots in seconds. Choose your style, click generate. Real AI, real results.
        </p>
      </div>

      {/* Pricing Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-10 text-white text-center">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="text-2xl font-bold"></span>
          <span className="text-purple-200">for 40 AI headshots · 5 styles · instant download</span>
          <Link href="/checkout?product=headshots&amount=19" className="inline-block px-6 py-2.5 bg-white text-purple-600 rounded-full font-bold hover:bg-purple-50 transition">
            Buy Now →
          </Link>
        </div>
      </div>

      {(step === "select" || step === "done") && (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
          {/* Style Selection */}
          <h3 className="text-lg font-bold mb-4">1. Choose Your Style</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {STYLES.map((s) => (
              <button key={s.id} onClick={() => setStyle(s.id)}
                className={"p-3 rounded-xl border-2 text-left transition text-sm " + (style === s.id ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-purple-200")}>
                <div className="font-semibold">{s.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.desc}</div>
              </button>
            ))}
          </div>

          {/* Gender */}
          <h3 className="text-lg font-bold mb-4">2. Appearance (Optional)</h3>
          <select value={gender} onChange={(e) => setGender(e.target.value)}
            className="w-full md:w-64 border-2 rounded-xl p-3 mb-8 text-sm">
            <option value="any">Any ethnicity</option>
            <option value="East Asian">East Asian</option>
            <option value="South Asian">South Asian</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Hispanic">Hispanic</option>
          </select>

          {/* Generate Button */}
          <button onClick={handleGenerate}
            className="w-full py-4 bg-purple-600 text-white rounded-xl text-lg font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-200">
            🪄 Generate Free Preview
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">Free preview uses AI generation. Purchase for full 40 images.</p>
        </div>
      )}

      {/* Generating State */}
      {step === "generating" && (
        <div className="bg-white rounded-2xl p-12 shadow-sm border text-center">
          <div className="animate-spin w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-6" />
          <h3 className="text-xl font-bold mb-2">AI is generating your headshots...</h3>
          <p className="text-gray-500">Creating 4 unique professional headshots using {STYLES.find(s => s.id === style)?.label}</p>
        </div>
      )}

      {/* Results */}
      {step === "done" && (
        <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
          {error ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">😔</div>
              <p className="text-red-500 mb-4">{error}</p>
              <button onClick={() => setStep("select")} className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700">Try Again</button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Your AI Headshots</h3>
                <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full font-semibold">✨ AI Generated</span>
              </div>
              
              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {images.map((url, i) => (
                  <div key={i} onClick={() => setSelectedIdx(i)}
                    className={"relative group cursor-pointer rounded-xl overflow-hidden border-2 transition " + (selectedIdx === i ? "border-purple-500 ring-2 ring-purple-200" : "border-transparent hover:border-gray-300")}>
                    <img src={url} alt={"AI Headshot " + (i + 1)} className="w-full aspect-square object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                      <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition">View</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Image Preview */}
              {selectedIdx !== null && (
                <div className="mb-6 p-4 bg-gray-50 rounded-xl text-center">
                  <img src={images[selectedIdx]} alt="Selected headshot" className="max-h-96 mx-auto rounded-lg shadow-md" />
                  <a href={images[selectedIdx]} download target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
                    📥 Download This Image
                  </a>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 justify-center flex-wrap">
                <button onClick={handleGenerate}
                  className="px-6 py-2.5 bg-gray-100 rounded-full font-semibold hover:bg-gray-200 transition text-sm">
                  🔄 Regenerate
                </button>
                <button onClick={() => { setStep("select"); setImages([]); setSelectedIdx(null); }}
                  className="px-6 py-2.5 bg-gray-100 rounded-full font-semibold hover:bg-gray-200 transition text-sm">
                  🎨 Change Style
                </button>
              </div>

              {/* Upsell */}
              <div className="mt-8 pt-6 border-t text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6">
                <p className="text-sm font-semibold text-purple-800 mb-1">Want 40 unique headshots + 5 styles?</p>
                <p className="text-xs text-purple-600 mb-4">Perfect for LinkedIn, resumes, dating apps, company websites</p>
                <Link href="/checkout?product=headshots&amount=19"
                  className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition shadow-lg text-sm">
                  🔓 Unlock Full Version — 
                </Link>
              </div>
            </>
          )}
        </div>
      )}

      {/* FAQ */}
      <div className="mt-16 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-center mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {[
            { q: "Are these real AI-generated images?", a: "Yes! Each preview is freshly generated by AI. No stock photos are used." },
            { q: "How many images do I get for ", a: "40 unique AI headshots across 5 professional styles. High-res JPG & PNG." },
            { q: "Is payment secure?", a: "Yes — payments go through PayPal with buyer protection." },
            { q: "Can I use these on LinkedIn?", a: "Absolutely! They're designed specifically for professional profiles." },
          ].map((faq, i) => (
            <details key={i} className="bg-white rounded-xl p-4 shadow-sm border group">
              <summary className="font-semibold cursor-pointer text-sm">{faq.q}</summary>
              <p className="text-gray-600 text-sm mt-2">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
