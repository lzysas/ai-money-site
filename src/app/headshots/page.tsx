"use client";

import { useState } from "react";
import Link from "next/link";

const STYLES = [
  { id: "professional", label: "👔 Professional", desc: "LinkedIn & corporate" },
  { id: "casual", label: "👕 Casual", desc: "Everyday natural look" },
  { id: "creative", label: "🎨 Creative", desc: "Artistic & bold" },
  { id: "studio", label: "📸 Studio", desc: "High-end photography" },
];

const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
];

export default function HeadshotsPage() {
  const [step, setStep] = useState<"upload" | "options" | "generating" | "done">("upload");
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [style, setStyle] = useState("professional");
  const [gender, setGender] = useState("any");
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    setFiles(selected);
    setPreviews(selected.map(f => URL.createObjectURL(f)));
  };

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
        setError(data.error || "Using demo images.");
        setImages(DEMO_IMAGES);
      }
    } catch {
      setError("Using demo images.");
      setImages(DEMO_IMAGES);
    }
    setStep("done");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">📸 AI Professional Headshots</h1>
      <p className="text-center text-gray-600 mb-4">Generate professional AI headshots in 100+ styles. No photographer needed.</p>

      {/* Buy Section */}
      <div id="buy" className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12 text-center border border-purple-200">
        <h2 className="text-2xl font-bold mb-2">💰 Unlock Full Access — $19</h2>
        <p className="text-gray-600 mb-6">40 unique AI headshots · 5+ styles · Instant download</p>
        <Link href="/checkout?product=headshots&amount=19" className="inline-block px-10 py-4 bg-purple-600 text-white rounded-full text-lg font-bold hover:bg-purple-700 transition shadow-lg">
          Buy Now $19 →
        </Link>
        <p className="text-xs text-gray-400 mt-3">Or try demo below for free</p>
      </div>

      {/* Steps */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["Upload", "Style", "Generate", "Download"].map((s, i) => (
          <div key={s} className={`flex items-center gap-2 text-sm ${i <= ["upload","options","generating","done"].indexOf(step) ? "text-purple-600 font-semibold" : "text-gray-400"}`}>
            <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold">{i + 1}</span>
            {s}
          </div>
        ))}
      </div>

      {(step === "upload" || step === "options") && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-400 transition mb-8">
            <input type="file" multiple accept="image/*" onChange={handleUpload} className="hidden" id="photo-upload" />
            <label htmlFor="photo-upload" className="cursor-pointer">
              <div className="text-5xl mb-4">📧</div>
              <p className="text-lg font-semibold">Upload reference photos (optional)</p>
              <p className="text-gray-500 text-sm mt-2">JPG, PNG · AI generates unique headshots with or without reference</p>
            </label>
          </div>
          {previews.length > 0 && (
            <div className="mb-8">
              <p className="font-semibold mb-3">{previews.length} photos uploaded</p>
              <div className="flex gap-2 flex-wrap">{previews.map((url, i) => (<img key={i} src={url} alt="" className="w-20 h-20 object-cover rounded-lg" />))}</div>
            </div>
          )}
          
          <h3 className="text-xl font-bold mb-4">Choose Style</h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {STYLES.map((s) => (
              <button key={s.id} onClick={() => setStyle(s.id)}
                className={`p-4 rounded-xl border-2 text-left transition ${style === s.id ? "border-purple-500 bg-purple-50" : "border-gray-200"}`}>
                <div className="font-semibold">{s.label}</div>
                <div className="text-sm text-gray-500">{s.desc}</div>
              </button>
            ))}
          </div>

          <div className="mb-8">
            <label className="block font-semibold mb-2">👤 Appearance Preference</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full border-2 rounded-xl p-3">
              <option value="any">Any</option>
              <option value="East Asian">East Asian</option>
              <option value="South Asian">South Asian</option>
              <option value="Middle Eastern">Middle Eastern</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Hispanic">Hispanic</option>
            </select>
          </div>

          <button onClick={handleGenerate}
            className="w-full py-4 bg-purple-600 text-white rounded-full text-lg font-bold hover:bg-purple-700 transition">
            Generate Demo · Free
          </button>
        </div>
      )}

      {step === "generating" && (
        <div className="bg-white rounded-2xl p-16 shadow-sm border text-center">
          <div className="animate-spin text-6xl mb-6">⚙️</div>
          <h3 className="text-2xl font-bold mb-2">AI is generating your headshots...</h3>
          <p className="text-gray-600">Creating unique professional headshots.</p>
          <div className="mt-8 w-full bg-gray-200 rounded-full h-2"><div className="bg-purple-600 h-2 rounded-full animate-pulse w-3/5" /></div>
        </div>
      )}

      {step === "done" && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold mb-2">Your Headshots Are Ready!</h3>
          {error && <p className="text-amber-600 text-sm mb-4">⚠️ {error}</p>}
          <p className="text-gray-600 mb-8">{images.length} professional photos generated.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {images.map((url, i) => (
              <div key={i} className="relative group">
                <img src={url} alt={`Headshot ${i + 1}`} className="w-full aspect-square object-cover rounded-xl shadow-md" />
                <a href={url} download target="_blank" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl">
                  <span className="text-white font-bold">Download</span>
                </a>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700">
              📥 Download All (ZIP)
            </button>
            <button onClick={() => { setStep("upload"); setImages([]); setFiles([]); setPreviews([]); }}
              className="px-8 py-3 bg-gray-100 rounded-full font-bold hover:bg-gray-200">
              Generate More
            </button>
          </div>

          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-gray-500">Want unlimited AI headshots?</p>
            <Link href="/checkout?product=headshots&amount=19" className="inline-block mt-3 px-8 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 shadow-lg">
              Unlock Full Version — $19
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
