"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/site";
import { useStore } from "./StoreProvider";
import { CartIcon, HeartIcon, MinusIcon, PlusIcon } from "./Icons";

export function ProductActions({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWished, cart } = useStore();
  const [qty, setQty] = useState(1);
  const wished = isWished(product.slug);
  const inCart = cart.find((i) => i.product.slug === product.slug)?.qty ?? 0;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full bg-white p-1.5">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center rounded-full hover:bg-mint" aria-label="Decrease quantity">
            <MinusIcon className="h-5 w-5" />
          </button>
          <span className="w-10 text-center font-display text-xl font-semibold" aria-live="polite">
            {qty}
          </span>
          <button onClick={() => setQty((q) => q + 1)} className="grid h-11 w-11 place-items-center rounded-full hover:bg-mint" aria-label="Increase quantity">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
        <button
          onClick={() => addToCart(product.slug, qty)}
          className="flex flex-1 items-center justify-center gap-3 rounded-full bg-tangerine px-8 py-4 font-semibold text-white transition hover:bg-tangerine-2"
        >
          <CartIcon className="h-5 w-5" /> Add to cart · {formatPrice(product.price * qty)}
        </button>
        <button
          onClick={() => toggleWishlist(product.slug)}
          aria-pressed={wished}
          aria-label={wished ? "Remove from favourites" : "Save to favourites"}
          className={`grid h-14 w-14 place-items-center rounded-full bg-white transition hover:scale-105 ${wished ? "text-tangerine" : "text-forest"}`}
        >
          <HeartIcon filled={wished} className="h-6 w-6" />
        </button>
      </div>
      {inCart > 0 && (
        <p className="mt-3 text-sm text-muted">
          {inCart} in your cart ·{" "}
          <Link href="/cart" className="font-semibold text-forest underline underline-offset-4">
            View cart
          </Link>
        </p>
      )}
    </div>
  );
}
