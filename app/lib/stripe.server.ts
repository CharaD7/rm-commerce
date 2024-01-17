import Stripe from "stripe";

import { ProductId } from "./interface";

export function getDomainUrl(request: Request) {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");

  if (!host) {
    throw new Error("Could not find the url");
  }

  const protocol = host.includes("localhost") ? "http" : "https";

  return `${protocol}://${host}`;
}

export const getStripeSession = async (
  items: string,
  domainUrl: string,
): Promise<string> => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
    typescript: true,
  });

  const dataObject = JSON.parse(items);

  const lineItems = dataObject.map((product: ProductId) => {
    return {
      price: product.stripeProductId,
      quantity: product.quantity,
      adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 },
    };
  });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: lineItems,
    success_url: `${domainUrl}/payment/success`,
    // success_url: `${domainUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainUrl}/payment/canceled`,
  });

  return session.url as string;
};
