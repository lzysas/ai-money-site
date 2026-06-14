"use client";

import { useState } from "react";
import Link from "next/link";

export default function SEOPage() {
  const [keyword, setKeyword] = useState("");
  const [tone, setTone] = useState("professional");
  const [length, setLength] = useState("2000");
  const [generating, setGenerating] = useState(false);
  const [content, setContent] = useState("");

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch("/api/generate-seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, tone, length }),
      });
      const data = await res.json();
      if (data.success) {
        setContent(data.content);
      } else {
        setContent("Error generating content. Please try again.");
      }
    } catch {
      setContent("Error: API unavailable. Please try again later.");
    }
    setGenerating(false);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = keyword ? keyword.replace(/\s+/g, "-").toLowerCase() + "-article.md" : "article.md";
    a.click();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">✍️ AI SEO Content Factory</h1>
      <p className="text-center text-gray-600 mb-4">Enter a keyword. Get a rank-ready 2000+ word article with full SEO optimization.</p>

      {/* Buy Section */}
      <div id="buy" className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 text-center border border-blue-200">
        <h2 className="text-2xl font-bold mb-2">💰 Get Full SEO Articles — $29</h2>
        <p className="text-gray-600 mb-6">2000+ words · Keyword optimized · Meta tags included · Ready to publish</p>
        <Link href="/checkout?product=seo&amount=29" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-lg">
          Buy Now $29 →
        </Link>
        <p className="text-xs text-gray-400 mt-3">Or try demo below for free</p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border mb-8">
        <div className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">🎯 Target Keyword</label>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g., remote work productivity tips"
              className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg focus:border-blue-400 outline-none transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2">🎭 Tone</label>
              <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full border-2 border-gray-200 rounded-xl p-4 outline-none">
                <option value="professional">Professional</option>
                <option value="casual">Casual / Conversational</option>
                <option value="authoritative">Authoritative / Expert</option>
                <option value="friendly">Friendly / Approachable</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2">📏 Length</label>
              <select value={length} onChange={(e) => setLength(e.target.value)} className="w-full border-2 border-gray-200 rounded-xl p-4 outline-none">
                <option value="1000">~1000 words (Free Demo)</option>
                <option value="2000">~2000 words ($29)</option>
                <option value="3000">~3000 words ($39)</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!keyword || generating}
            className="w-full py-4 bg-blue-600 text-white rounded-full text-lg font-bold hover:bg-blue-700 disabled:bg-gray-300 transition"
          >
            {generating ? "⏳ Generating..." : "Generate Free Demo"}
          </button>
        </div>
      </div>

      {generating && (
        <div className="bg-white rounded-2xl p-12 shadow-sm border text-center">
          <div className="animate-spin text-5xl mb-4">✍️</div>
          <p className="text-gray-600">AI is crafting your SEO-optimized article...</p>
        </div>
      )}

      {content && !generating && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">📄 Generated Content</h3>
            <button
              onClick={() => navigator.clipboard.writeText(content)}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold hover:bg-gray-200"
            >
              📋 Copy All
            </button>
          </div>
          <div className="prose max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed bg-gray-50 p-6 rounded-xl text-sm">{content}</pre>
          </div>
          <div className="mt-6 flex gap-4">
            <button onClick={handleDownload} className="flex-1 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700">📥 Download as Markdown</button>
            <button onClick={() => { setContent(""); setKeyword(""); }} className="flex-1 py-3 bg-gray-100 rounded-full font-bold hover:bg-gray-200">Generate Another</button>
          </div>

          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-sm text-gray-500">Want 2000+ word full articles with DeepSeek AI?</p>
            <Link href="/checkout?product=seo&amount=29" className="inline-block mt-3 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 shadow-lg">
              Unlock Full Version — $29
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
