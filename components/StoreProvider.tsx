"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProduct, type Product } from "@/lib/products";

type CartLine = { slug: string; qty: number };
type CartItem = { product: Product; qty: number };

type Store = {
  ready: boolean;
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  wishlist: string[];
  toggleWishlist: (slug: string) => void;
  isWished: (slug: string) => boolean;
  toast: string | null;
};

const StoreContext = createContext<Store | null>(null);

const CART_KEY = "petng.cart";
const WISH_KEY = "petng.wishlist";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    setLines(read<CartLine[]>(CART_KEY, []).filter((l) => getProduct(l.slug)));
    setWishlist(read<string[]>(WISH_KEY, []).filter((s) => getProduct(s)));
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) write(CART_KEY, lines);
  }, [lines, ready]);

  useEffect(() => {
    if (ready) write(WISH_KEY, wishlist);
  }, [wishlist, ready]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const value = useMemo<Store>(() => {
    const cart = lines
      .map((l) => ({ product: getProduct(l.slug)!, qty: l.qty }))
      .filter((i) => i.product);
    return {
      ready,
      cart,
      cartCount: cart.reduce((n, i) => n + i.qty, 0),
      cartTotal: cart.reduce((n, i) => n + i.qty * i.product.price, 0),
      addToCart(slug, qty = 1) {
        setLines((prev) => {
          const found = prev.find((l) => l.slug === slug);
          if (found) return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l));
          return [...prev, { slug, qty }];
        });
        setToast(`${getProduct(slug)?.name ?? "Item"} added to cart`);
      },
      setQty(slug, qty) {
        setLines((prev) =>
          qty <= 0 ? prev.filter((l) => l.slug !== slug) : prev.map((l) => (l.slug === slug ? { ...l, qty } : l)),
        );
      },
      removeFromCart(slug) {
        setLines((prev) => prev.filter((l) => l.slug !== slug));
      },
      clearCart() {
        setLines([]);
      },
      wishlist,
      toggleWishlist(slug) {
        const has = wishlist.includes(slug);
        setToast(has ? "Removed from favourites" : "Saved to favourites");
        setWishlist((prev) => (has ? prev.filter((s) => s !== slug) : [...prev, slug]));
      },
      isWished: (slug) => wishlist.includes(slug),
      toast,
    };
  }, [lines, wishlist, ready, toast]);

  return (
    <StoreContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-300 ${
          toast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {toast && (
          <div className="rounded-full bg-forest px-5 py-3 text-sm font-medium text-white shadow-xl">{toast}</div>
        )}
      </div>
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
