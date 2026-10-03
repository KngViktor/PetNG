import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/lib/brands";
import { products } from "@/lib/products";
import { pets, site } from "@/lib/site";
import { ProductArt } from "@/components/ProductArt";
import { PageHero } from "@/components/ui";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Brands",
  description: "The pet brands we stock and why we trust them.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow={`${site.stats.brands} partners`}
        title="Brands we trust"
        text="We only stock makers who share our standards: safe materials, honest ingredients and products that pets genuinely love."
        pet={pets.borderCollie}
        petAlt="Border collie"
        crumbs={[{ href: "/brands", label: "Brands" }]}
      />

      <section className="container-px mt-10">
        <Reveal stagger className="grid gap-4 rounded-[2rem] bg-white p-6 md:grid-cols-3 md:p-8">
          {[
            ["Safety first", "Independent lab testing for materials and ingredients."],
            ["Pet-panel approved", "Every new brand is trialled by our 60+ pet testers."],
            ["Responsible sourcing", "We prioritise sustainable and ethical production."],
          ].map(([t, d]) => (
            <div key={t} className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-leaf text-forest">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-forest">{t}</p>
                <p className="text-sm text-muted">{d}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="container-px mt-12">
        <Reveal stagger className="grid gap-6 lg:grid-cols-2">
        {brands.map((b) => {
          const items = products.filter((p) => p.brand === b.slug);
          return (
            <article key={b.slug} id={b.slug} className="flex scroll-mt-24 flex-col rounded-[2rem] bg-white p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl font-display text-3xl font-bold text-white" style={{ background: b.color }}>
                  {b.name[0]}
                </span>
                <div>
                  <h2 className="font-display text-3xl font-semibold text-forest">{b.name}</h2>
                  <p className="text-tangerine">{b.tagline}</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted">{b.description}</p>
              <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
                {[
                  ["Origin", b.origin],
                  ["Founded", String(b.founded)],
                  ["Specialty", b.specialty],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl bg-mint p-3">
                    <dt className="text-muted">{k}</dt>
                    <dd className="font-semibold text-forest">{v}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-5 flex flex-wrap gap-2">
                {b.values.map((v) => (
                  <li key={v} className="rounded-full bg-leaf/60 px-3 py-1 text-sm font-medium text-forest">
                    {v}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3 border-t border-forest/10 pt-6">
                <div className="flex -space-x-3">
                  {items.slice(0, 4).map((p) => (
                    <span key={p.slug} className="grid h-14 w-14 place-items-center rounded-full border-2 border-white bg-mint">
                      <ProductArt art={p.art} label={p.name} className="h-10 w-10" />
                    </span>
                  ))}
                </div>
                <Link href={`/shop?brand=${b.slug}`} className="group ml-auto inline-flex items-center gap-2 font-semibold text-forest">
                  Shop {items.length} {items.length === 1 ? "product" : "products"}
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-white transition group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
        </Reveal>
      </section>

      <section className="container-px mt-12">
        <Reveal variant="scale" className="rounded-[2rem] bg-forest p-8 text-center text-white md:p-12">
          <h2 className="font-display text-3xl font-medium md:text-4xl">Are you a pet brand?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            We&apos;re always looking for makers who care as much as we do. Tell us about your products and we&apos;ll be in touch.
          </p>
          <a href={`mailto:${site.email}?subject=Brand partnership`} className="mt-6 inline-flex rounded-full bg-tangerine px-7 py-3.5 font-semibold text-white hover:bg-tangerine-2">
            Become a partner
          </a>
        </Reveal>
      </section>
    </>
  );
}
