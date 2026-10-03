"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/components/StoreProvider";
import { ProductVisual } from "@/components/ProductArt";
import { CheckIcon } from "@/components/Icons";
import { PillLink } from "@/components/ui";
import { formatPrice, pets } from "@/lib/site";
import { orderTotals, shippingMethods, type ShippingId } from "@/lib/checkout";

const payMethods = ["Card", "PayPal / Wallet", "Bank transfer", "Pay on delivery"];

export default function CheckoutPage() {
  const { cart, ready, clearCart } = useStore();
  const [method, setMethod] = useState<ShippingId>("standard");
  const [pay, setPay] = useState(payMethods[0]);
  const [order, setOrder] = useState<{ id: string; total: number; name: string } | null>(null);
  const { subtotal, shipping, total } = orderTotals(cart, method);

  if (order)
    return (
      <section className="container-px mt-10">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center overflow-hidden rounded-[2rem] bg-forest px-6 pt-14 text-center text-white">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-leaf text-forest">
            <CheckIcon className="h-8 w-8" />
          </span>
          <h1 className="mt-6 font-display text-5xl font-medium">Thank you, {order.name}!</h1>
          <p className="mt-3 max-w-md text-white/70">
            Order <span className="font-semibold text-white">#{order.id}</span> for {formatPrice(order.total)} is confirmed. We&apos;ve sent the details to your email.
          </p>
          <div className="mt-8">
            <PillLink href="/shop">Keep shopping</PillLink>
          </div>
          <div className="peek relative mt-10 h-60 w-72">
            <div className="absolute inset-x-0 top-0 h-[150%]">
              <Image src={pets.goldenPuppy} alt="Happy golden retriever puppy" fill sizes="288px" className="object-contain object-top" />
            </div>
          </div>
        </div>
      </section>
    );

  if (ready && cart.length === 0)
    return (
      <section className="container-px mt-10 text-center">
        <h1 className="font-display text-4xl text-forest">Nothing to check out yet</h1>
        <Link href="/shop" className="mt-6 inline-block rounded-full bg-tangerine px-6 py-3 font-semibold text-white">
          Go to shop
        </Link>
      </section>
    );

  const input = "w-full rounded-xl border border-forest/10 bg-mint px-4 py-3 outline-none focus:border-forest/40";

  return (
    <section className="container-px mt-10">
      <h1 className="font-display text-5xl font-medium tracking-tight text-forest md:text-6xl">Checkout</h1>
      <form
        className="mt-8 grid gap-6 lg:grid-cols-[1fr_400px]"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setOrder({
            id: `PNG-${Math.floor(100000 + Math.random() * 900000)}`,
            total,
            name: String(fd.get("first") || "friend"),
          });
          clearCart();
          window.scrollTo({ top: 0 });
        }}
      >
        <div className="space-y-6">
          <fieldset className="rounded-[1.75rem] bg-white p-6">
            <legend className="float-left mb-5 font-display text-2xl font-semibold text-forest">1. Contact</legend>
            <div className="clear-both grid gap-4 sm:grid-cols-2">
              <input name="first" required placeholder="First name" className={input} autoComplete="given-name" />
              <input name="last" required placeholder="Last name" className={input} autoComplete="family-name" />
              <input name="email" type="email" required placeholder="Email" className={input} autoComplete="email" />
              <input name="phone" type="tel" required placeholder="Phone" className={input} autoComplete="tel" />
            </div>
          </fieldset>

          <fieldset className="rounded-[1.75rem] bg-white p-6">
            <legend className="float-left mb-5 font-display text-2xl font-semibold text-forest">2. Delivery</legend>
            <div className="clear-both grid gap-3 sm:grid-cols-3">
              {shippingMethods.map((m) => {
                const price = orderTotals(cart, m.id).shipping;
                return (
                  <label key={m.id} className={`cursor-pointer rounded-2xl border-2 p-4 transition ${method === m.id ? "border-forest bg-leaf/40" : "border-transparent bg-mint"}`}>
                    <input type="radio" name="shipping" value={m.id} checked={method === m.id} onChange={() => setMethod(m.id)} className="sr-only" />
                    <p className="font-semibold text-forest">{m.label}</p>
                    <p className="text-sm text-muted">{price === 0 ? "Free" : formatPrice(price)}</p>
                  </label>
                );
              })}
            </div>
            {method !== "pickup" && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input name="address" required placeholder="Street address" className={`${input} sm:col-span-2`} autoComplete="street-address" />
                <input name="city" required placeholder="City" className={input} autoComplete="address-level2" />
                <input name="zip" placeholder="Postal code" className={input} autoComplete="postal-code" />
                <textarea name="notes" placeholder="Delivery notes (optional)" rows={2} className={`${input} sm:col-span-2`} />
              </div>
            )}
          </fieldset>

          <fieldset className="rounded-[1.75rem] bg-white p-6">
            <legend className="float-left mb-5 font-display text-2xl font-semibold text-forest">3. Payment</legend>
            <div className="clear-both flex flex-wrap gap-2">
              {payMethods.map((m) => (
                <button
                  type="button"
                  key={m}
                  onClick={() => setPay(m)}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${pay === m ? "bg-forest text-white" : "bg-mint text-forest"}`}
                >
                  {m}
                </button>
              ))}
            </div>
            {pay === "Card" ? (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input required placeholder="Card number" inputMode="numeric" className={`${input} sm:col-span-2`} autoComplete="cc-number" />
                <input required placeholder="MM / YY" className={input} autoComplete="cc-exp" />
                <input required placeholder="CVC" inputMode="numeric" className={input} autoComplete="cc-csc" />
              </div>
            ) : (
              <p className="mt-4 rounded-xl bg-mint p-4 text-sm text-muted">
                {pay === "Bank transfer"
                  ? "You'll receive our bank details by email. Your order ships once payment clears."
                  : pay === "Pay on delivery"
                    ? "Pay by cash or card when your order arrives."
                    : "You'll be redirected to complete payment securely."}
              </p>
            )}
            <p className="mt-4 text-xs text-muted">This is a demo store — no real payment is taken.</p>
          </fieldset>
        </div>

        <aside className="h-fit rounded-[1.75rem] bg-white p-6 lg:sticky lg:top-24">
          <h2 className="font-display text-2xl font-semibold text-forest">Your order</h2>
          <ul className="mt-5 space-y-3">
            {cart.map(({ product: p, qty }) => (
              <li key={p.slug} className="flex items-center gap-3">
                <span className="relative rounded-xl bg-mint p-1">
                  <ProductVisual product={p} className="h-12 w-12" sizes="48px" />
                  <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-forest px-1 text-[10px] font-bold text-white">{qty}</span>
                </span>
                <span className="flex-1 text-sm font-medium">{p.name}</span>
                <span className="font-semibold">{formatPrice(p.price * qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-6 space-y-2 border-t border-forest/10 pt-4 text-muted">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt>Delivery</dt><dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd></div>
            <div className="flex justify-between pt-2 text-xl font-semibold text-forest"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
          </dl>
          <button className="mt-6 w-full rounded-full bg-tangerine py-4 font-semibold text-white transition hover:bg-tangerine-2">
            Place order · {formatPrice(total)}
          </button>
        </aside>
      </form>
    </section>
  );
}
