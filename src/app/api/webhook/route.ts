import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") || "";

  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ received: true });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("Payment successful:", session.id);
      // Here you would trigger AI generation automatically
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
