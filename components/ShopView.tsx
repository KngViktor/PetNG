"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { brands } from "@/lib/brands";
import { categories, priceBounds, products, type Category, type Pet } from "@/lib/products";
import { formatPrice } from "@/lib/site";
import { ProductCard } from "./ProductCard";
import { CloseIcon, FilterIcon, SearchIcon } from "./Icons";
import { Reveal } from "./Motion";

const sorts = {
  featured: "Featured",
  popular: "Most popular",
  new: "Newest",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
  rating: "Top rated",
} as const;
type Sort = keyof typeof sorts;

export function ShopView() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const q = params.get("q") ?? "";
  const pet = (params.get("pet") ?? "") as Pet | "";
  const category = (params.get("category") ?? "") as Category | "";
  const brand = params.get("brand") ?? "";
  const max = Number(params.get("max") ?? priceBounds.max);
  const sort = ((params.get("sort") as Sort) in sorts ? params.get("sort") : "featured") as Sort;

  function update(next: Record<string, string | null>) {
    const sp = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(next)) {
      if (v === null || v === "") sp.delete(k);
      else sp.set(k, v);
    }
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = products.filter(
      (p) =>
        (!pet || p.pet === pet || p.pet === "all") &&
        (!category || p.category === category) &&
        (!brand || p.brand === brand) &&
        p.price <= max &&
        (!term || `${p.name} ${p.short} ${p.category}`.toLowerCase().includes(term)),
    );
    const sorted = [...list];
    if (sort === "popular") sorted.sort((a, b) => b.reviews - a.reviews);
    if (sort === "new") sorted.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [q, pet, category, brand, max, sort]);

  const active = [
    pet && { key: "pet", label: pet === "dog" ? "Dogs" : "Cats" },
    category && { key: "category", label: categories.find((c) => c.slug === category)?.label ?? category },
    brand && { key: "brand", label: brands.find((b) => b.slug === brand)?.name ?? brand },
    max < priceBounds.max && { key: "max", label: `Under ${formatPrice(max)}` },
    q && { key: "q", label: `“${q}”` },
  ].filter(Boolean) as { key: string; label: string }[];

  const filters = (
    <div className="space-y-8">
      <div>
        <p className="mb-3 font-display text-lg font-semibold text-forest">Pet</p>
        <div className="flex flex-wrap gap-2">
          {[
            ["", "All pets"],
            ["dog", "Dogs"],
            ["cat", "Cats"],
          ].map(([v, l]) => (
            <button
              key={v}
              onClick={() => update({ pet: v })}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${pet === v ? "bg-forest text-white" : "bg-mint text-forest hover:bg-leaf"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 font-display text-lg font-semibold text-forest">Category</p>
        <ul className="space-y-1">
          <li>
            <button onClick={() => update({ category: null })} className={`w-full rounded-xl px-3 py-2 text-left ${!category ? "bg-leaf font-semibold text-forest" : "text-muted hover:bg-mint"}`}>
              All categories
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <button
                onClick={() => update({ category: c.slug })}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left ${
                  category === c.slug ? "bg-leaf font-semibold text-forest" : "text-muted hover:bg-mint"
                }`}
              >
                {c.label}
                <span className="text-xs">{products.filter((p) => p.category === c.slug).length}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-3 flex items-center justify-between font-display text-lg font-semibold text-forest">
          Max price <span className="font-sans text-base text-tangerine">{formatPrice(max)}</span>
        </p>
        <input
          type="range"
          min={priceBounds.min}
          max={priceBounds.max}
          step={1000}
          value={max}
          onChange={(e) => update({ max: Number(e.target.value) >= priceBounds.max ? null : e.target.value })}
          className="w-full accent-tangerine"
          aria-label="Maximum price"
        />
        <div className="mt-1 flex justify-between text-xs text-muted">
          <span>{formatPrice(priceBounds.min)}</span>
          <span>{formatPrice(priceBounds.max)}</span>
        </div>
      </div>
      <div>
        <p className="mb-3 font-display text-lg font-semibold text-forest">Brand</p>
        <select
          value={brand}
          onChange={(e) => update({ brand: e.target.value })}
          className="w-full rounded-xl border border-forest/10 bg-mint px-3 py-2.5 outline-none"
          aria-label="Brand"
        >
          <option value="">All brands</option>
          {brands.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <div className="container-px mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-[1.75rem] bg-white p-6">{filters}</div>
      </aside>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[55] bg-forest/40 lg:hidden ${filtersOpen ? "" : "hidden"}`} onClick={() => setFiltersOpen(false)}>
        <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-[2rem] bg-white p-6" onClick={(e) => e.stopPropagation()}>
          <div className="mb-6 flex items-center justify-between">
            <p className="font-display text-2xl font-semibold text-forest">Filters</p>
            <button onClick={() => setFiltersOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-mint" aria-label="Close filters">
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          {filters}
          <button onClick={() => setFiltersOpen(false)} className="mt-8 w-full rounded-full bg-tangerine py-4 font-semibold text-white">
            Show {results.length} products
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <label className="flex flex-1 items-center gap-3 rounded-full bg-white px-5">
            <SearchIcon className="h-5 w-5 text-muted" />
            <input
              defaultValue={q}
              key={q}
              onKeyDown={(e) => e.key === "Enter" && update({ q: (e.target as HTMLInputElement).value })}
              onBlur={(e) => e.target.value !== q && update({ q: e.target.value })}
              placeholder="Search products…"
              className="h-12 flex-1 bg-transparent outline-none"
              aria-label="Search products"
            />
          </label>
          <div className="flex gap-3">
            <button onClick={() => setFiltersOpen(true)} className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium lg:hidden">
              <FilterIcon className="h-5 w-5" /> Filters
            </button>
            <select
              value={sort}
              onChange={(e) => update({ sort: e.target.value === "featured" ? null : e.target.value })}
              className="flex-1 rounded-full bg-white px-5 py-3 font-medium outline-none md:flex-none"
              aria-label="Sort by"
            >
              {Object.entries(sorts).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <p className="mr-2 text-muted">
            <span className="font-semibold text-forest">{results.length}</span> {results.length === 1 ? "product" : "products"}
          </p>
          {active.map((a) => (
            <button key={a.key} onClick={() => update({ [a.key]: null })} className="inline-flex items-center gap-1.5 rounded-full bg-leaf px-3 py-1.5 text-sm font-medium text-forest">
              {a.label} <CloseIcon className="h-3.5 w-3.5" />
            </button>
          ))}
          {active.length > 1 && (
            <button onClick={() => router.replace(pathname, { scroll: false })} className="text-sm font-medium text-tangerine underline-offset-4 hover:underline">
              Clear all
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <Reveal stagger className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </Reveal>
        ) : (
          <div className="mt-6 rounded-[2rem] bg-white p-12 text-center">
            <p className="font-display text-2xl text-forest">No products found</p>
            <p className="mt-2 text-muted">Try removing a filter or searching for something else.</p>
            <button onClick={() => router.replace(pathname)} className="mt-6 rounded-full bg-forest px-6 py-3 font-semibold text-white">
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
