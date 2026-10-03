import { site } from "./site";
import type { Product } from "./products";

export const STANDARD_SHIPPING = 3500;

export const shippingMethods = [
  { id: "standard", label: "Standard (2–4 days)", price: STANDARD_SHIPPING },
  { id: "express", label: "Express (next day)", price: 7500 },
  { id: "pickup", label: "Click & collect", price: 0 },
] as const;

export type ShippingId = (typeof shippingMethods)[number]["id"];

export function orderTotals(cart: { product: Product; qty: number }[], method: ShippingId = "standard") {
  const subtotal = cart.reduce((n, i) => n + i.qty * i.product.price, 0);
  const base = shippingMethods.find((m) => m.id === method)!.price;
  const shipping = method === "standard" && subtotal >= site.freeShippingFrom ? 0 : base;
  return {
    subtotal,
    shipping,
    total: subtotal + shipping,
    toFree: Math.max(0, site.freeShippingFrom - subtotal),
  };
}
