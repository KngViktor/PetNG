"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/site";
import type { Product } from "@/lib/products";
import { ProductVisual } from "./ProductArt";
import { HeartIcon, PlusIcon } from "./Icons";
import { useStore } from "./StoreProvider";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWished } = useStore();
  const wished = isWished(product.slug);
  return (
    <article className="group relative flex flex-col rounded-[1.75rem] bg-white p-4 shadow-[0_1px_0_rgba(5,59,6,0.06)] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10">
      <div className="relative">
        <Link href={`/shop/${product.slug}`} className="block rounded-2xl bg-mint" aria-label={product.name}>
          <ProductVisual product={product} className="mx-auto aspect-square w-full p-4 transition duration-500 group-hover:scale-[1.04]" />
        </Link>
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
              product.badge === "Sale" ? "bg-tangerine text-white" : product.badge === "New" ? "bg-leaf text-forest" : "bg-forest text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
        <button
          onClick={() => toggleWishlist(product.slug)}
          aria-label={wished ? `Remove ${product.name} from favourites` : `Save ${product.name} to favourites`}
          aria-pressed={wished}
          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 transition hover:scale-110 ${
            wished ? "text-tangerine" : "text-forest"
          }`}
        >
          <HeartIcon filled={wished} className="h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-1 items-end justify-between gap-3 px-2 pb-1 pt-4">
        <div>
          <Link href={`/shop/${product.slug}`} className="font-medium text-forest/80 hover:text-forest">
            {product.name}
          </Link>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-forest">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-sm text-muted line-through">{formatPrice(product.oldPrice)}</span>}
          </p>
        </div>
        <button
          onClick={() => addToCart(product.slug)}
          aria-label={`Add ${product.name} to cart`}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-white transition hover:rotate-90 hover:bg-tangerine"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
    </article>
  );
}
