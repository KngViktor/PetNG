import type { Metadata } from "next";
import { Suspense } from "react";
import { formatPrice, pets, site } from "@/lib/site";
import { products } from "@/lib/products";
import { PageHero } from "@/components/ui";
import { ShopView } from "@/components/ShopView";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop food, treats, toys, bowls, beds, leashes, grooming and travel gear for dogs and cats.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow={`${products.length} products`}
        title="Shop everything for your pet"
        text={`Food, toys, bowls, beds and more — every product tested by our pet panel. Free delivery on orders over ${formatPrice(site.freeShippingFrom)}.`}
        pet={pets.huskyPuppy}
        petAlt="Husky puppy"
        crumbs={[{ href: "/shop", label: "Shop" }]}
      />
      <Suspense fallback={<div className="container-px mt-10 h-96 animate-pulse rounded-[2rem] bg-white" />}>
        <ShopView />
      </Suspense>
    </>
  );
}
