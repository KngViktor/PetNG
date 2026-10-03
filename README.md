# PetNG — Everything Your Pets Love

A pet store website for dogs and cats, built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**. It deploys to Vercel as-is.

## Pages

| Route | What's there |
| --- | --- |
| `/` | Hero with pets peeking over the cards, perks strip, shop by pet, categories, new arrivals, PetNG TV and why-us section, bestsellers, testimonials and pet gallery, brands, blog preview |
| `/shop` | Full catalogue with filters (pet, category, max price, brand), search and sorting. Filters live in the URL, e.g. `/shop?pet=cat&category=toys` |
| `/shop/[slug]` | Product page: gallery, quantity, add to cart, favourites, description, specs, delivery info, reviews, related products |
| `/delivery` | Delivery options and prices, how it works, payment methods, returns (`#returns`) and FAQ (`#faq`) |
| `/brands` | Brand profiles with origin, specialty, values and a link to each brand's products |
| `/blog`, `/blog/[slug]` | Pet-care articles with tips and the products each article mentions |
| `/about`, `/contact` | Story, values and team; contact details and a contact form |
| `/cart`, `/checkout`, `/wishlist` | Cart with free-delivery progress, demo checkout (no real payment), saved favourites |

The cart and favourites are saved in the visitor's browser (localStorage).

## Editing content

All content lives in `lib/`:

- `lib/site.ts` — store name, contact details, social links, stats, **currency symbol**, free-delivery threshold, image paths
- `lib/products.ts` — products and categories
- `lib/brands.ts` — brands
- `lib/posts.ts` — blog articles

### Images

- `public/pets/*.webp` — pet photos with the **background removed** (transparent), used where pets peek over cards
- `public/photos/*.jpg` — the same photos with their original backgrounds, used for blog covers and galleries
- Products are drawn as illustrations for now. To use a real product photo, put it in `public/products/` and add `image: "/products/your-photo.png"` to that product in `lib/products.ts`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```
