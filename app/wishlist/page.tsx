"use client";

import Image from "next/image";
import { useStore } from "@/components/StoreProvider";
import { ProductCard } from "@/components/ProductCard";
import { PillLink } from "@/components/ui";
import { getProduct } from "@/lib/products";
import { pets } from "@/lib/site";

export default function WishlistPage() {
  const { wishlist, ready, addToCart } = useStore();
  const items = wishlist.map(getProduct).filter((p) => p !== undefined);

  return (
    <section className="container-px mt-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="font-display text-5xl font-medium tracking-tight text-forest md:text-6xl">Favourites</h1>
          <p className="mt-2 text-muted">Products you&apos;ve starred for later.</p>
        </div>
        {items.length > 1 && (
          <button onClick={() => items.forEach((p) => addToCart(p.slug))} className="w-fit rounded-full bg-forest px-6 py-3 font-semibold text-white hover:bg-forest-2">
            Add all to cart
          </button>
        )}
      </div>

      {ready && items.length === 0 ? (
        <div className="relative mt-8 flex flex-col items-center overflow-hidden rounded-[2rem] bg-white px-6 pt-14 text-center">
          <p className="font-display text-3xl text-forest">No favourites yet</p>
          <p className="mt-2 text-muted">Tap the heart on any product to save it here.</p>
          <div className="mt-8">
            <PillLink href="/shop">Explore Products</PillLink>
          </div>
          <div className="peek relative mt-10 h-52 w-64">
            <div className="absolute inset-x-0 top-0 h-[170%]">
              <Image src={pets.catFluffy} alt="White fluffy cat" fill sizes="256px" className="object-contain object-top" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
