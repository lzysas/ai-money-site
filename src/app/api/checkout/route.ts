import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { product, amount } = await req.json();

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({
        url: "/demo-success?product=" + product,
        demo: true,
      });
    }

    const stripe = (await import("stripe")).default;
    const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product === "headshots" ? "AI Headshots Package" : "SEO Content Article",
              description: product === "headshots" ? "40 professional AI headshots" : "SEO-optimized blog post",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success?product=${product}`,
      cancel_url: `${req.headers.get("origin")}/${product}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
