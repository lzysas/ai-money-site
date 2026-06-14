import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { style, gender } = await req.json();
    
    // Use OpenAI if key is set and has billing
    if (process.env.OPENAI_API_KEY) {
      try {
        const OpenAI = (await import("openai")).default;
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const prompt = `Ultra realistic professional headshot, ${style} style, ${gender || "person"}, studio quality, photorealistic`;
        const response = await openai.images.generate({ model: "gpt-image-2", prompt, n: 4, size: "1024x1024" });
        const urls = response.data?.map((d: any) => d.url).filter(Boolean) || [];
        if (urls.length > 0) return NextResponse.json({ success: true, images: urls, ai: true });
      } catch (e: any) {
        console.log("OpenAI failed, using free images:", e.message);
      }
    }

    // Free high-quality demo headshots from Unsplash
    const demoImages = [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face", 
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&crop=face",
    ];

    return NextResponse.json({ success: true, images: demoImages, demo: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}