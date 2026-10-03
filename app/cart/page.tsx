"use client";

import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/components/StoreProvider";
import { ProductVisual } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { MinusIcon, PlusIcon, TrashIcon, TruckIcon } from "@/components/Icons";
import { PillLink } from "@/components/ui";
import { formatPrice, pets, site } from "@/lib/site";
import { products } from "@/lib/products";
import { orderTotals } from "@/lib/checkout";

export default function CartPage() {
  const { cart, ready, setQty, removeFromCart } = useStore();
  const { subtotal, shipping, total, toFree } = orderTotals(cart);

  if (!ready) return <div className="container-px mt-10 h-96 animate-pulse rounded-[2rem] bg-white" />;

  if (cart.length === 0)
    return (
      <section className="container-px mt-10">
        <div className="relative flex flex-col items-center overflow-hidden rounded-[2rem] bg-white px-6 pt-14 text-center">
          <h1 className="font-display text-5xl font-medium text-forest">Your cart is empty</h1>
          <p className="mt-3 max-w-md text-muted">Looks like someone hasn&apos;t picked their treats yet. Let&apos;s fix that.</p>
          <div className="mt-8">
            <PillLink href="/shop">Explore Products</PillLink>
          </div>
          <div className="peek relative mt-10 h-56 w-72">
            <div className="absolute inset-x-0 top-0 h-[160%]">
              <Image src={pets.huskyRedPuppy} alt="Husky puppy" fill sizes="288px" className="object-contain object-top" />
            </div>
          </div>
        </div>
        <h2 className="mb-6 mt-16 font-display text-3xl font-medium text-forest">Popular right now</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.filter((p) => p.badge === "Bestseller" || p.badge === "Sale").slice(0, 4).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    );

  return (
    <section className="container-px mt-10">
      <h1 className="font-display text-5xl font-medium tracking-tight text-forest md:text-6xl">Your cart</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {toFree > 0 ? (
            <div className="rounded-[1.5rem] bg-leaf p-5">
              <p className="flex items-center gap-2 font-medium text-forest">
                <TruckIcon className="h-5 w-5" /> Add {formatPrice(toFree)} more for free delivery
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/70">
                <div className="h-full rounded-full bg-forest transition-all" style={{ width: `${Math.min(100, (subtotal / site.freeShippingFrom) * 100)}%` }} />
              </div>
            </div>
          ) : (
            <p className="flex items-center gap-2 rounded-[1.5rem] bg-leaf p-5 font-medium text-forest">
              <TruckIcon className="h-5 w-5" /> Nice! Your order ships free.
            </p>
          )}
          {cart.map(({ product: p, qty }) => (
            <div key={p.slug} className="flex items-center gap-4 rounded-[1.5rem] bg-white p-4">
              <Link href={`/shop/${p.slug}`} className="shrink-0 rounded-2xl bg-mint p-2">
                <ProductVisual product={p} className="h-20 w-20 md:h-24 md:w-24" sizes="96px" />
              </Link>
              <div className="min-w-0 flex-1">
                <Link href={`/shop/${p.slug}`} className="font-display text-lg font-semibold text-forest hover:text-tangerine">
                  {p.name}
                </Link>
                <p className="text-sm text-muted">{formatPrice(p.price)} each</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center rounded-full bg-mint p-1">
                    <button onClick={() => setQty(p.slug, qty - 1)} className="grid h-8 w-8 place-items-center rounded-full hover:bg-white" aria-label="Decrease quantity">
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{qty}</span>
                    <button onClick={() => setQty(p.slug, qty + 1)} className="grid h-8 w-8 place-items-center rounded-full hover:bg-white" aria-label="Increase quantity">
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(p.slug)} className="grid h-9 w-9 place-items-center rounded-full text-muted hover:bg-mint hover:text-tangerine" aria-label={`Remove ${p.name}`}>
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="font-display text-xl font-bold text-forest">{formatPrice(p.price * qty)}</p>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-[1.75rem] bg-forest p-6 text-white lg:sticky lg:top-24">
          <h2 className="font-display text-2xl font-semibold">Order summary</h2>
          <dl className="mt-6 space-y-3 text-white/80">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt>Delivery</dt><dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd></div>
            <div className="flex justify-between border-t border-white/15 pt-3 text-lg font-semibold text-white"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
          </dl>
          <Link href="/checkout" className="mt-6 block rounded-full bg-tangerine py-4 text-center font-semibold transition hover:bg-tangerine-2">
            Proceed to checkout
          </Link>
          <Link href="/shop" className="mt-3 block text-center text-sm text-white/70 hover:text-white">
            Continue shopping
          </Link>
          <p className="mt-6 text-xs text-white/50">Taxes included. Delivery options can be changed at checkout.</p>
        </aside>
      </div>
    </section>
  );
}
