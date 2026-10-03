import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabel, getProduct, products } from "@/lib/products";
import { getBrand } from "@/lib/brands";
import { formatPrice, site } from "@/lib/site";
import { ProductVisual } from "@/components/ProductArt";
import { ProductActions } from "@/components/ProductActions";
import { ProductCard } from "@/components/ProductCard";
import { CheckIcon, ReturnIcon, ShieldIcon, TruckIcon } from "@/components/Icons";
import { SectionHeading, Stars } from "@/components/ui";
import { Reveal } from "@/components/Motion";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return p ? { title: p.name, description: p.short } : {};
}

const sampleReviews = [
  { name: "Adaeze N.", pet: "Milo, tabby cat", rating: 5, text: "Exactly as described and great quality. Arrived in two days, beautifully packed." },
  { name: "James K.", pet: "Bella, Labrador", rating: 5, text: "Second time buying this — it lasts and my pet clearly loves it. Highly recommend." },
  { name: "Fatima S.", pet: "Coco, Maltipoo", rating: 4, text: "Lovely product, colour is a little lighter than in the photos but still very pretty." },
];

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const brand = getBrand(product.brand);
  const related = products
    .filter((p) => p.slug !== product.slug && (p.category === product.category || p.pet === product.pet))
    .slice(0, 4);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return (
    <>
      <div className="container-px pt-6">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-forest">Home</Link>/
          <Link href="/shop" className="hover:text-forest">Shop</Link>/
          <Link href={`/shop?category=${product.category}`} className="hover:text-forest">{categoryLabel(product.category)}</Link>/
          <span className="text-forest">{product.name}</span>
        </nav>
      </div>

      <section className="container-px mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal variant="left" className="relative rounded-[2rem] bg-white p-6 md:p-12">
          {product.badge && (
            <span className={`absolute left-6 top-6 rounded-full px-4 py-1.5 text-sm font-semibold ${product.badge === "Sale" ? "bg-tangerine text-white" : "bg-leaf text-forest"}`}>
              {product.badge === "Sale" ? `−${discount}%` : product.badge}
            </span>
          )}
          <div className="rounded-[1.5rem] bg-mint">
            <ProductVisual product={product} className="mx-auto aspect-square w-full max-w-lg p-8" sizes="(min-width:1024px) 600px, 100vw" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`rounded-2xl bg-mint p-3 ${i === 0 ? "ring-2 ring-forest" : "opacity-70"}`}>
                <ProductVisual product={product} className={`mx-auto aspect-square w-full ${i === 1 ? "-scale-x-100" : ""} ${i === 2 ? "scale-125" : ""}`} sizes="160px" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="right" delay={120} className="lg:py-6">
          {brand && (
            <Link href={`/brands#${brand.slug}`} className="text-sm font-semibold uppercase tracking-[0.18em] text-tangerine">
              {brand.name}
            </Link>
          )}
          <h1 className="mt-2 font-display text-5xl font-medium leading-[1.02] tracking-tight text-forest md:text-6xl">{product.name}</h1>
          <div className="mt-4 flex items-center gap-3">
            <Stars value={product.rating} />
            <span className="text-sm text-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>
          <p className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-5xl font-bold text-forest">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-xl text-muted line-through">{formatPrice(product.oldPrice)}</span>}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted">{product.short}</p>

          <div className="mt-8">
            <ProductActions product={product} />
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: TruckIcon, t: product.price >= site.freeShippingFrom ? "Free delivery" : `Free over ${formatPrice(site.freeShippingFrom)}` },
              { icon: ReturnIcon, t: "30-day returns" },
              { icon: ShieldIcon, t: "Vet approved" },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-forest">
                <Icon className="h-5 w-5 text-pine" /> {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-3">
            <details open className="group rounded-2xl bg-white p-5">
              <summary className="cursor-pointer list-none font-display text-xl font-semibold text-forest">Description</summary>
              <p className="mt-3 leading-relaxed text-muted">{product.description}</p>
              <ul className="mt-4 space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-3 text-muted">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-pine" /> {f}
                  </li>
                ))}
              </ul>
            </details>
            <details className="rounded-2xl bg-white p-5">
              <summary className="cursor-pointer list-none font-display text-xl font-semibold text-forest">Specifications</summary>
              <dl className="mt-3 divide-y divide-forest/10">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right font-medium text-forest">{v}</dd>
                  </div>
                ))}
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="text-muted">Suitable for</dt>
                  <dd className="font-medium text-forest">{product.pet === "all" ? "Dogs & cats" : product.pet === "dog" ? "Dogs" : "Cats"}</dd>
                </div>
              </dl>
            </details>
            <details className="rounded-2xl bg-white p-5">
              <summary className="cursor-pointer list-none font-display text-xl font-semibold text-forest">Delivery &amp; returns</summary>
              <p className="mt-3 leading-relaxed text-muted">
                Order before 2pm for same-day dispatch. Standard delivery takes 2–4 working days and is free on orders over{" "}
                {formatPrice(site.freeShippingFrom)}. Unused items can be returned within 30 days.{" "}
                <Link href="/delivery" className="font-semibold text-forest underline underline-offset-4">
                  Full details
                </Link>
              </p>
            </details>
          </div>
        </Reveal>
      </section>

      <section className="container-px mt-20">
        <Reveal  className="grid gap-8 rounded-[2rem] bg-white p-6 md:p-10 lg:grid-cols-[320px_1fr]">
          <div>
            <h2 className="font-display text-3xl font-medium text-forest">Customer reviews</h2>
            <p className="mt-4 font-display text-7xl font-semibold text-forest">{product.rating}</p>
            <Stars value={product.rating} size="h-6 w-6" />
            <p className="mt-2 text-muted">Based on {product.reviews} reviews</p>
            <div className="mt-6 space-y-2">
              {[5, 4, 3, 2, 1].map((s) => {
                const pct = s === 5 ? 78 : s === 4 ? 15 : s === 3 ? 5 : s === 2 ? 1 : 1;
                return (
                  <div key={s} className="flex items-center gap-3 text-sm">
                    <span className="w-3">{s}</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-mint">
                      <span className="block h-full rounded-full bg-tangerine" style={{ width: `${pct}%` }} />
                    </span>
                    <span className="w-9 text-right text-muted">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
          <ul className="divide-y divide-forest/10">
            {sampleReviews.map((r) => (
              <li key={r.name} className="py-5 first:pt-0">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-forest">
                    {r.name} <span className="font-normal text-muted">· {r.pet}</span>
                  </p>
                  <Stars value={r.rating} />
                </div>
                <p className="mt-2 text-muted">{r.text}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-pine">
                  <CheckIcon className="h-4 w-4" /> Verified purchase
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="container-px mt-20">
          <SectionHeading eyebrow="You may also like" title="Pairs well with" />
          <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </Reveal>
        </section>
      )}
    </>
  );
}
