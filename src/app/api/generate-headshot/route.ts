import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { style, gender } = await req.json();
    
    const ethnicity = gender && gender !== "any" ? gender + " " : "";
    const stylePrompts: Record<string, string> = {
      professional: "professional corporate headshot, business suit, studio lighting, clean white background, linkedin profile photo, photorealistic",
      casual: "casual outdoor portrait, natural lighting, jeans and shirt, park background, friendly smile, photorealistic",
      creative: "creative artistic portrait, bold colorful lighting, modern fashion, gallery quality, photorealistic",
      studio: "high-end studio portrait, dramatic lighting, luxury fashion, magazine quality, photorealistic",
    };

    const basePrompt = stylePrompts[style] || stylePrompts.professional;
    const fullPrompt = "ultra realistic " + ethnicity + "person, " + basePrompt + ", 8k quality, sharp focus, professional photography";
    const encoded = encodeURIComponent(fullPrompt);

    // Generate 4 unique images with Pollinations.ai (free, no API key needed)
    const images = [
      "https://image.pollinations.ai/prompt/" + encoded + "?width=1024&height=1024&seed=" + Math.floor(Math.random() * 100000) + "&nologo=true",
      "https://image.pollinations.ai/prompt/" + encoded + "?width=1024&height=1024&seed=" + Math.floor(Math.random() * 100000) + "&nologo=true",
      "https://image.pollinations.ai/prompt/" + encoded + "?width=1024&height=1024&seed=" + Math.floor(Math.random() * 100000) + "&nologo=true",
      "https://image.pollinations.ai/prompt/" + encoded + "?width=1024&height=1024&seed=" + Math.floor(Math.random() * 100000) + "&nologo=true",
    ];

    return NextResponse.json({ success: true, images, ai: true, prompt: fullPrompt });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
