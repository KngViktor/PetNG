import Image from "next/image";
import Link from "next/link";
import { formatPrice, pets, photos, site } from "@/lib/site";
import { categories, getProduct, products } from "@/lib/products";
import { brands } from "@/lib/brands";
import { formatDate, posts } from "@/lib/posts";
import { ProductCard } from "@/components/ProductCard";
import { ProductArt } from "@/components/ProductArt";
import { Marquee, PillLink, SectionHeading, Stars } from "@/components/ui";
import { CountUp, Parallax, Reveal } from "@/components/Motion";
import {
  ArrowRight,
  ArrowUpRight,
  PawIcon,
  PlayIcon,
  PlusIcon,
  ReturnIcon,
  ShieldIcon,
  StarIcon,
  TikTokIcon,
  TruckIcon,
  YouTubeIcon,
} from "@/components/Icons";

export default function HomePage() {
  const featured = getProduct("cozy-cat-house")!;
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const bestsellers = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 4);

  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="container-px relative pt-6 lg:pt-10">
        {/* Floating featured product (desktop) */}
        <Link
          href={`/shop/${featured.slug}`}
          className="group absolute left-6 top-14 z-20 hidden w-52 text-center animate-fade-up lg:block xl:left-12"
          style={{ animationDelay: "650ms" }}
        >
          <div className="relative mx-auto w-44 animate-float">
            <ProductArt art={featured.art} label={featured.name} className="w-full" />
            <span className="absolute bottom-6 right-0 grid h-16 w-16 place-items-center rounded-full bg-forest text-white transition group-hover:rotate-45">
              <ArrowUpRight className="h-6 w-6" />
            </span>
          </div>
          <p className="mt-1 text-lg text-forest">{featured.name}</p>
          <p className="font-display text-3xl font-bold text-forest">{formatPrice(featured.price)}</p>
        </Link>

        {/* Floating video card (desktop) */}
        <a
          href={site.social.tiktok}
          target="_blank"
          rel="noreferrer"
          className="group absolute right-6 top-14 z-20 hidden w-48 overflow-hidden rounded-2xl bg-white shadow-lg shadow-forest/5 transition hover:-translate-y-1 hover:shadow-xl animate-fade-up lg:block xl:right-12"
          style={{ animationDelay: "800ms" }}
        >
          <div className="relative h-36">
            <Image src={photos.borderCollie} alt="Border collie in a PetNG product review" fill sizes="224px" className="object-cover object-top transition duration-700 group-hover:scale-110" />
          </div>
          <span className="absolute left-1/2 top-36 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-forest text-white ring-4 ring-white transition group-hover:scale-110">
            <PlayIcon className="ml-0.5 h-5 w-5" />
          </span>
          <p className="px-4 pb-5 pt-9 text-center leading-snug text-forest">Watch Product Reviews on TikTok and YouTube</p>
        </a>

        <h1 className="relative z-0 text-center font-display text-[clamp(3.2rem,9vw,5.5rem)] lg:text-[clamp(5.5rem,7.6vw,8.4rem)] font-medium leading-[0.88] tracking-[-0.055em] text-forest">
          {["Everything", null, "Your", "Pets", "Love"].map((w, i) =>
            w === null ? (
              <br key={i} />
            ) : (
              <span key={i} className="word" style={{ animationDelay: `${i * 110}ms` }}>
                {w}
                {i > 1 && i < 4 ? "\u00a0" : ""}
              </span>
            ),
          )}
        </h1>

        {/* Pets + cards band */}
        <div className="relative z-10 mt-6 grid gap-4 lg:-mt-14 lg:grid-cols-[1fr_1.25fr_1fr] lg:items-end lg:gap-0">
          {/* Center: big dog + CTA (first on mobile) */}
          <div className="lg:order-2">
            <div className="peek relative mx-auto h-[300px] max-w-md sm:h-[380px] lg:h-[400px] lg:max-w-none">
              <Parallax speed={0.06} className="absolute inset-0">
              <div className="rise absolute inset-x-0 top-0 h-[150%]" style={{ animationDelay: "250ms" }}>
                <Image
                  src={pets.goldenPuppy}
                  alt="Golden retriever puppy"
                  fill
                  priority
                  sizes="(min-width:1024px) 520px, 90vw"
                  className="object-contain object-top drop-shadow-[0_20px_30px_rgba(5,59,6,0.25)]"
                />
              </div>
              </Parallax>
            </div>
            <div className="flex flex-col items-center rounded-[2rem] bg-forest px-6 py-10 text-center text-white lg:min-h-[300px] lg:justify-center lg:rounded-none">
              <p className="font-display text-3xl leading-tight md:text-4xl">
                Best Products
                <br />
                for Your Pet
              </p>
              <div className="mt-7">
                <PillLink href="/shop">Explore Products</PillLink>
              </div>
            </div>
          </div>

          {/* Left: stat + puppy */}
          <div className="lg:order-1">
            <div className="peek relative mx-auto h-[220px] max-w-xs lg:h-[230px] lg:max-w-[300px]">
              <Parallax speed={0.14} className="absolute inset-0">
                <div className="rise absolute inset-x-0 top-0 h-[175%]" style={{ animationDelay: "450ms" }}>
                  <Image src={pets.labPuppy} alt="Chocolate Labrador puppy" fill sizes="340px" className="object-contain object-top" />
                </div>
              </Parallax>
            </div>
            <div className="flex flex-col items-center rounded-[2rem] bg-leaf px-6 py-10 text-center lg:min-h-[300px] lg:justify-center lg:rounded-none lg:rounded-l-[2rem]">
              <div className="flex items-center gap-4">
                <span className="font-display text-6xl font-semibold tracking-tight text-forest">
                  <CountUp to={98} suffix="K+" />
                </span>
                <div className="flex -space-x-3">
                  <span className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-leaf bg-white">
                    <Image src={photos.catCalico} alt="" fill sizes="56px" className="object-cover" />
                  </span>
                  <Link href="/about" aria-label="About our community" className="grid h-14 w-14 place-items-center rounded-full border-2 border-leaf bg-forest text-white transition hover:rotate-90 hover:bg-tangerine">
                    <PlusIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
              <p className="mt-4 max-w-[16rem] text-lg leading-snug text-forest/80">Happy Clients and Their Pets Who Love Our Products</p>
            </div>
          </div>

          {/* Right: rating + cat */}
          <div className="lg:order-3">
            <div className="peek relative mx-auto h-[220px] max-w-xs lg:h-[230px] lg:max-w-[280px]">
              <Parallax speed={0.14} className="absolute inset-0">
                <div className="rise absolute inset-x-0 top-0 h-[190%]" style={{ animationDelay: "600ms" }}>
                  <Image src={pets.catGinger} alt="Ginger tabby cat" fill sizes="320px" className="object-contain object-top" />
                </div>
              </Parallax>
            </div>
            <div className="flex flex-col items-center rounded-[2rem] bg-leaf px-6 py-10 text-center lg:min-h-[300px] lg:justify-center lg:rounded-none lg:rounded-r-[2rem]">
              <p className="flex items-center gap-2 font-display text-6xl font-semibold tracking-tight text-forest">
                <CountUp to={site.stats.rating} decimals={1} /> <StarIcon className="h-12 w-12 animate-[spin_6s_linear_infinite] text-tangerine" />
              </p>
              <p className="mt-4 max-w-[17rem] text-lg leading-snug text-forest/80">Based on Reviews from Happy Pet Owners Worldwide</p>
            </div>
          </div>
        </div>

        {/* Mobile versions of the floating cards */}
        <div className="mt-4 grid grid-cols-2 gap-4 lg:hidden">
          <Link href={`/shop/${featured.slug}`} className="rounded-[1.5rem] bg-white p-4 text-center">
            <ProductArt art={featured.art} label={featured.name} className="mx-auto w-32" />
            <p className="text-sm text-forest">{featured.name}</p>
            <p className="font-display text-xl font-bold text-forest">{formatPrice(featured.price)}</p>
          </Link>
          <a href={site.social.tiktok} target="_blank" rel="noreferrer" className="overflow-hidden rounded-[1.5rem] bg-white text-center">
            <div className="relative h-32">
              <Image src={photos.borderCollie} alt="" fill sizes="50vw" className="object-cover object-top" />
              <span className="absolute bottom-2 left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-forest text-white">
                <PlayIcon className="ml-0.5 h-4 w-4" />
              </span>
            </div>
            <p className="p-3 text-sm leading-snug text-forest">Watch Product Reviews on TikTok &amp; YouTube</p>
          </a>
        </div>
      </section>

      {/* ───────────────────────── TICKER ───────────────────────── */}
      <div className="mt-16 -rotate-1 bg-tangerine py-4 text-white">
        <Marquee duration={30} rowClassName="gap-8 pr-8">
          {[
            `Free delivery over ${formatPrice(site.freeShippingFrom)}`,
            "30-day returns",
            "Vet approved products",
            "Same-day dispatch before 2pm",
            `${site.stats.happyClients} happy pets`,
            "Earn paw points on every order",
          ].map((t) => (
            <span key={t} className="flex items-center gap-8 whitespace-nowrap font-display text-2xl font-medium">
              {t}
              <PawIcon className="h-6 w-6 text-forest" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* ───────────────────────── PERKS STRIP ───────────────────────── */}
      <section className="container-px mt-16">
        <Reveal stagger className="grid gap-4 rounded-[2rem] bg-white p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {[
            { icon: TruckIcon, title: "Free delivery", text: `On every order over ${formatPrice(site.freeShippingFrom)}` },
            { icon: ReturnIcon, title: "30-day returns", text: "Not a fan? Send it back, free" },
            { icon: ShieldIcon, title: "Vet approved", text: "Every product safety-checked" },
            { icon: PawIcon, title: "Paw points", text: "Earn 5% back on every purchase" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-mint text-forest transition duration-500 hover:rotate-12 hover:bg-leaf">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-forest">{title}</p>
                <p className="text-sm text-muted">{text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ───────────────────────── SHOP BY PET ───────────────────────── */}
      <section className="container-px mt-24">
        <SectionHeading eyebrow="Shop by pet" title="Who are we spoiling today?" />
        <Reveal stagger className="grid gap-6 md:grid-cols-2">
          {[
            {
              href: "/shop?pet=dog",
              title: "For Dogs",
              text: "Food, chews, beds, leashes and toys that survive the zoomies.",
              img: pets.germanShepherd,
              bg: "bg-forest text-white",
              count: products.filter((p) => p.pet !== "cat").length,
            },
            {
              href: "/shop?pet=cat",
              title: "For Cats",
              text: "Towers, hideaways, whisker-friendly bowls and toys to hunt.",
              img: pets.catWhite,
              bg: "bg-tangerine text-white",
              count: products.filter((p) => p.pet !== "dog").length,
            },
          ].map((c) => (
            <Link key={c.href} href={c.href} className={`group relative flex min-h-[340px] overflow-hidden rounded-[2rem] p-8 md:p-10 ${c.bg}`}>
              <div className="relative z-10 flex max-w-[55%] flex-col">
                <h3 className="font-display text-5xl font-medium tracking-tight">{c.title}</h3>
                <p className="mt-3 text-white/80">{c.text}</p>
                <span className="mt-auto inline-flex items-center gap-3 pt-6 font-semibold">
                  {c.count} products
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-forest transition group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </span>
              </div>
              <div className="absolute -bottom-6 right-0 top-6 w-[50%] transition duration-700 group-hover:-translate-y-3 group-hover:scale-105">
                <Image src={c.img} alt="" fill sizes="(min-width:768px) 320px, 50vw" className="object-contain object-bottom drop-shadow-2xl" />
              </div>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* ───────────────────────── CATEGORIES ───────────────────────── */}
      <section className="container-px mt-24">
        <SectionHeading eyebrow="Categories" title="Find exactly what they need" action={{ href: "/shop", label: "View all" }} />
        <Reveal stagger className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:px-0 lg:grid-cols-5">
          {categories
            .filter((c) => ["food", "toys", "bowls", "furniture", "walking"].includes(c.slug))
            .map((c) => {
              const sample = products.find((p) => p.category === c.slug)!;
              const count = products.filter((p) => p.category === c.slug).length;
              return (
                <Link
                  key={c.slug}
                  href={`/shop?category=${c.slug}`}
                  className="group w-56 shrink-0 snap-start rounded-[1.75rem] bg-white p-5 transition hover:bg-leaf md:w-auto"
                >
                  <div className="rounded-2xl bg-mint p-3 transition group-hover:bg-white/70">
                    <ProductArt art={sample.art} label="" className="mx-auto h-32 w-32 transition duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                  </div>
                  <p className="mt-4 font-display text-xl font-semibold text-forest">{c.label}</p>
                  <p className="text-sm text-muted">
                    {c.blurb} · {count}
                  </p>
                </Link>
              );
            })}
        </Reveal>
      </section>

      {/* ───────────────────────── NEW ARRIVALS ───────────────────────── */}
      <section className="container-px mt-24">
        <Reveal variant="scale" className="rounded-[2rem] bg-leaf p-6 md:p-12">
          <SectionHeading
            eyebrow="Just landed"
            title="New Arrivals"
            text="Fresh picks our team (and their pets) have been testing all month."
            action={{ href: "/shop?sort=new", label: "Shop new" }}
          />
          <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </Reveal>
        </Reveal>
      </section>

      {/* ───────────────────────── VIDEO + WHY ───────────────────────── */}
      <section className="container-px mt-24 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal variant="left" className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-forest">
          <Image src={photos.huskyRedPuppy} alt="Husky puppy playing on the grass" fill sizes="(min-width:1024px) 640px, 100vw" className="object-cover opacity-80 transition duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf">PetNG TV</p>
            <h3 className="mt-2 max-w-md font-display text-4xl font-medium leading-tight">Real pets. Real reviews. Zero filters.</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.social.tiktok} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-forest hover:bg-leaf">
                <TikTokIcon className="h-5 w-5" /> TikTok
              </a>
              <a href={site.social.youtube} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-tangerine px-5 py-3 font-semibold text-white hover:bg-tangerine-2">
                <YouTubeIcon className="h-5 w-5" /> YouTube
              </a>
            </div>
          </div>
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="Play review video"
            className="absolute left-1/2 top-1/3 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-forest ring-8 ring-white/30 transition hover:scale-110"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
            <PlayIcon className="relative ml-1 h-7 w-7" />
          </a>
        </Reveal>
        <Reveal variant="right" delay={120} className="flex flex-col justify-between gap-6 rounded-[2rem] bg-white p-8 md:p-10">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-tangerine">
              <PawIcon className="h-4 w-4" /> Why PetNG
            </p>
            <h3 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-forest">Tested by pets, trusted by owners</h3>
          </div>
          <ul className="space-y-5">
            {[
              ["Pet-tested picks", "Every product is trialled by our panel of 60+ dogs and cats before it reaches the shop."],
              ["Honest guidance", "Our care team includes vet nurses and trainers — ask anything, any time."],
              ["Fast, careful delivery", "Same-day dispatch on orders before 2pm and eco-friendly packaging."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-leaf font-display font-bold text-forest">0{i + 1}</span>
                <div>
                  <p className="font-display text-lg font-semibold text-forest">{t}</p>
                  <p className="text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ul>
          <PillLink href="/about" variant="dark">
            Our story
          </PillLink>
        </Reveal>
      </section>

      {/* ───────────────────────── BESTSELLERS ───────────────────────── */}
      <section className="container-px mt-24">
        <SectionHeading eyebrow="Most loved" title="Bestsellers" action={{ href: "/shop?sort=popular", label: "See all" }} />
        <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </Reveal>
      </section>

      {/* ───────────────────────── COMMUNITY / TESTIMONIALS ───────────────────────── */}
      <section className="container-px mt-24">
        <SectionHeading
          center
          eyebrow="#PetNGFamily"
          title="Meet the pack"
          text={`Over ${site.stats.happyClients} pets and their humans shop with us. Here's what a few of them say.`}
        />
        <Reveal stagger className="grid gap-6 md:grid-cols-3">
          {[
            {
              pet: pets.huskyPuppy,
              name: "Luna",
              breed: "Husky puppy",
              owner: "Chidi A.",
              quote: "The rope tug has survived three weeks with Luna, which is a world record in our house. Delivery came the next morning!",
              bg: "bg-leaf",
            },
            {
              pet: pets.catFluffy,
              name: "Snowball",
              breed: "Persian mix",
              owner: "Grace O.",
              quote: "Snowball refused every bed we bought — until the Cozy Cat House. She hasn't left the top lounger since.",
              bg: "bg-forest text-white",
            },
            {
              pet: pets.borderCollie,
              name: "Rex",
              breed: "Border collie",
              owner: "Tunde B.",
              quote: "Great quality leash and super helpful support. They even helped me pick the right size collar over chat.",
              bg: "bg-tangerine text-white",
            },
          ].map((t) => (
            <figure key={t.name} className={`group relative flex flex-col overflow-hidden rounded-[2rem] p-8 transition duration-500 hover:-translate-y-2 ${t.bg}`}>
              <Stars value={5} />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-end justify-between">
                <div>
                  <p className="font-display text-2xl font-semibold">{t.name}</p>
                  <p className="text-sm opacity-75">
                    {t.breed} · with {t.owner}
                  </p>
                </div>
                <div className="peek relative -mb-8 h-32 w-28">
                  <div className="absolute inset-x-0 top-0 h-[150%]">
                    <Image src={t.pet} alt={`${t.name} the ${t.breed}`} fill sizes="112px" className="object-contain object-top transition duration-500 group-hover:-translate-y-3" />
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <Marquee reverse duration={45} className="mt-8 py-2" rowClassName="gap-4 pr-4">
          {[photos.goldenPuppy, photos.catCalico, photos.germanShepherd, photos.maltipoo, photos.catGinger, photos.huskyBrown, photos.labPuppy, photos.catWhite, photos.huskyPuppy, photos.catFluffy].map(
            (src, i) => (
              <div key={src} className={`relative h-56 w-44 shrink-0 overflow-hidden rounded-[1.5rem] ${i % 2 ? "translate-y-4" : "-translate-y-2"}`}>
                <Image src={src} alt="A PetNG customer's pet" fill sizes="176px" className="object-cover transition duration-500 hover:scale-110" />
              </div>
            ),
          )}
        </Marquee>
      </section>

      {/* ───────────────────────── BRANDS ───────────────────────── */}
      <section className="container-px mt-24">
        <Reveal className="flex flex-col items-center gap-6 rounded-[2rem] bg-white px-6 py-8 md:flex-row md:px-10">
          <p className="shrink-0 font-display text-xl font-semibold text-forest">Brands we trust</p>
          <Marquee duration={28} className="w-full min-w-0 flex-1" rowClassName="gap-12 pr-12">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/brands#${b.slug}`}
                className="flex items-center gap-3 whitespace-nowrap font-display text-2xl font-semibold text-forest/50 transition hover:text-forest"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full text-base text-white" style={{ background: b.color }}>
                  {b.name[0]}
                </span>
                {b.name}
              </Link>
            ))}
          </Marquee>
        </Reveal>
      </section>

      {/* ───────────────────────── BLOG ───────────────────────── */}
      <section className="container-px mt-24">
        <SectionHeading eyebrow="From the blog" title="Pet care, made simple" action={{ href: "/blog", label: "All articles" }} />
        <Reveal stagger className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-[2rem] bg-white transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-forest/10">
              <div className="relative h-60 overflow-hidden">
                <Image src={p.cover} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover object-[center_25%] transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-forest">{p.category}</span>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted">
                  {formatDate(p.date)} · {p.readMinutes} min read
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-forest group-hover:text-tangerine">{p.title}</h3>
              </div>
            </Link>
          ))}
        </Reveal>
      </section>
    </>
  );
}
