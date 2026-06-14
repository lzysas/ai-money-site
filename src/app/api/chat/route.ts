import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an AI sales and support assistant for AI Money Maker (aimoneymaker.com). Your job is to:
1. Answer questions about our products (AI Headshots $19, SEO Content $29)
2. Help customers choose the right product for their needs
3. Explain how the AI headshot generation works (upload selfies, get 40 professional headshots)
4. Explain how the SEO content factory works (enter keyword, get rank-ready article)
5. Guide customers to the checkout page: /checkout?product=headshots&amount=19 or /checkout?product=seo&amount=29
6. Answer payment questions (PayPal and USDT TRC20 crypto accepted)
7. Reassure about refunds (7-day money-back guarantee)
8. Keep responses friendly, concise, under 150 words
9. If asked something you cannot answer, say the team will follow up via email
10. Always end with soft encouragement to try our products.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reply: "I'm currently in offline mode. Please email support@aimoneymaker.com and our team will get back to you within 2 hours!",
      });
    }

    const isDeepSeek = !!process.env.DEEPSEEK_API_KEY;
    const baseURL = isDeepSeek
      ? "https://api.deepseek.com"
      : "https://api.openai.com/v1";
    const model = isDeepSeek ? "deepseek-chat" : "gpt-4o";

    const response = await fetch(baseURL + "/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-10),
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "API error");

    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (error: any) {
    return NextResponse.json({
      reply: "I'm having a brief technical issue. Please try again in a moment, or email support@aimoneymaker.com for immediate help!",
    });
  }
}
