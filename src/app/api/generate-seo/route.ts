import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { keyword, tone, length } = await req.json();
    const apiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        success: true,
        content: generateDemoContent(keyword, tone, length),
        demo: true,
      });
    }

    const isDeepSeek = !!process.env.DEEPSEEK_API_KEY;
    const baseURL = isDeepSeek ? "https://api.deepseek.com" : "https://api.openai.com/v1";
    const model = isDeepSeek ? "deepseek-chat" : "gpt-4o";

    const response = await fetch(`${baseURL}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: `You are an expert SEO content writer. Write a ${length}-word blog post. Tone: ${tone}. Include SEO meta title (under 60 chars), meta description (under 160 chars), and 5 target keywords. Format as clean Markdown with H1, H2, H3 headings.`,
          },
          { role: "user", content: `Write an SEO-optimized blog post about: ${keyword}` },
        ],
        temperature: 0.8,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "API error");

    return NextResponse.json({ success: true, content: data.choices[0].message.content });
  } catch (error: any) {
    return NextResponse.json({
      success: true,
      content: generateDemoContent("your topic", "professional", "2000"),
      demo: true,
      warning: error.message,
    });
  }
}

function generateDemoContent(keyword: string, tone: string, length: string) {
  return `# The Ultimate Guide to ${keyword} in 2026

## Introduction
In today's rapidly evolving digital landscape, mastering ${keyword} has never been more critical...

[Demo Mode - Add DeepSeek API key for real AI content]

## Key Strategies
1. Start with a solid foundation
2. Leverage data-driven insights  
3. Stay ahead of industry trends

## Conclusion
Success with ${keyword} requires consistent effort and the right strategies.

---
**Meta Title:** ${keyword}: The Complete 2026 Guide (${length} words)
**Meta Description:** Master ${keyword} with our comprehensive guide. Expert strategies, proven tips, and actionable insights.
**Keywords:** ${keyword}, ${keyword} guide, ${keyword} tips, ${keyword} strategies, ${keyword} 2026`;
}