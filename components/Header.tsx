"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { formatPrice, nav } from "@/lib/site";
import { products } from "@/lib/products";
import { posts } from "@/lib/posts";
import { useStore } from "./StoreProvider";
import { CartIcon, CloseIcon, MenuIcon, SearchIcon, StarIcon } from "./Icons";
import { ProductVisual } from "./ProductArt";
import { Logo } from "./ui";

export function Header() {
  const pathname = usePathname();
  const { cartCount, cartTotal, wishlist, ready } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-mint/85 backdrop-blur-md">
      <div className="container-px flex h-20 items-center justify-between gap-4">
        <button
          className="grid h-12 w-12 place-items-center rounded-full bg-white lg:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
        <div className="hidden sm:block">
          <Logo />
        </div>

        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative text-[17px] transition hover:text-forest ${
                isActive(n.href) ? "font-semibold text-forest" : "text-forest/80"
              }`}
            >
              {n.label}
              {isActive(n.href) && <span className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-tangerine" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="hidden h-12 w-12 place-items-center rounded-full bg-white transition hover:scale-105 sm:grid"
            aria-label="Search"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
          <Link
            href="/wishlist"
            className="relative grid h-12 w-12 place-items-center rounded-full bg-white transition hover:scale-105"
            aria-label={`Favourites (${wishlist.length})`}
          >
            <StarIcon className="h-8 w-8 text-tangerine" />
            <span className="absolute text-[11px] font-bold text-white">{ready ? wishlist.length : 0}</span>
          </Link>
          <Link
            href="/cart"
            className="flex h-12 items-center gap-3 rounded-full bg-white pl-4 pr-5 transition hover:scale-105"
            aria-label={`Cart, ${cartCount} items`}
          >
            <span className="relative">
              <CartIcon className="h-6 w-6" />
              <span className="absolute -bottom-1 -right-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-forest px-1 text-[10px] font-bold text-white">
                {ready ? cartCount : 0}
              </span>
            </span>
            <span className="font-semibold">{formatPrice(ready ? cartTotal : 0).replace(/\.00$/, "")}</span>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-forest/40 transition lg:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`h-full w-[86%] max-w-sm bg-mint p-6 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button className="grid h-11 w-11 place-items-center rounded-full bg-white" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <button
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(true);
            }}
            className="mt-8 flex w-full items-center gap-3 rounded-full bg-white px-5 py-3 text-left text-muted"
          >
            <SearchIcon className="h-5 w-5" /> Search products…
          </button>
          <nav aria-label="Mobile" className="mt-6 flex flex-col">
            {[...nav, { href: "/about", label: "About us" }, { href: "/contact", label: "Contact" }].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`border-b border-forest/10 py-4 font-display text-2xl ${isActive(n.href) ? "text-tangerine" : "text-forest"}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    input.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const term = q.trim().toLowerCase();
  const productHits = term
    ? products.filter((p) => `${p.name} ${p.short} ${p.category} ${p.pet}`.toLowerCase().includes(term)).slice(0, 5)
    : products.filter((p) => p.badge === "Bestseller").slice(0, 3);
  const postHits = term ? posts.filter((p) => `${p.title} ${p.excerpt}`.toLowerCase().includes(term)).slice(0, 3) : [];

  return (
    <div className="fixed inset-0 z-[55] bg-forest/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="mx-auto mt-16 max-w-2xl rounded-[2rem] bg-mint p-5 shadow-2xl md:p-8" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/shop?q=${encodeURIComponent(q)}`);
            onClose();
          }}
          className="flex items-center gap-3 rounded-full bg-white px-5"
        >
          <SearchIcon className="h-5 w-5 text-muted" />
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search food, toys, bowls, guides…"
            className="h-14 flex-1 bg-transparent text-lg outline-none"
            aria-label="Search"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="text-muted hover:text-forest">
            <CloseIcon className="h-5 w-5" />
          </button>
        </form>

        <div className="mt-6 space-y-2">
          <p className="px-2 text-xs font-semibold uppercase tracking-widest text-muted">{term ? "Products" : "Popular right now"}</p>
          {productHits.length === 0 && <p className="px-2 py-3 text-muted">No products match “{q}”.</p>}
          {productHits.map((p) => (
            <Link key={p.slug} href={`/shop/${p.slug}`} onClick={onClose} className="flex items-center gap-4 rounded-2xl p-2 hover:bg-white">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-white">
                <ProductVisual product={p} className="h-12 w-12" sizes="48px" />
              </span>
              <span className="flex-1 font-medium">{p.name}</span>
              <span className="font-display font-bold text-forest">{formatPrice(p.price)}</span>
            </Link>
          ))}
          {postHits.length > 0 && (
            <>
              <p className="px-2 pt-4 text-xs font-semibold uppercase tracking-widest text-muted">From the blog</p>
              {postHits.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} onClick={onClose} className="block rounded-2xl p-3 hover:bg-white">
                  {p.title}
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
