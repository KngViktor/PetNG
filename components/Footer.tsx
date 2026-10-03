import Image from "next/image";
import Link from "next/link";
import { pets, site } from "@/lib/site";
import { categories } from "@/lib/products";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, TikTokIcon, YouTubeIcon } from "./Icons";
import { Logo } from "./ui";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="container-px">
        <div className="relative grid overflow-hidden rounded-[2rem] bg-leaf px-6 py-10 md:grid-cols-[1fr_auto] md:items-center md:px-14 md:py-14">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-forest md:text-5xl">
              Join the pack &amp; get 10% off your first order
            </h2>
            <p className="mt-3 text-muted">Pet care tips, new arrivals and members-only deals. No spam — just good boys and girls.</p>
            <Newsletter />
          </div>
          <div className="peek pointer-events-none relative -mb-14 mt-6 hidden h-72 w-80 md:block">
            <Image src={pets.maltipoo} alt="" fill sizes="320px" className="object-contain object-bottom" />
          </div>
        </div>
      </div>

      <div className="mt-16 bg-forest text-white">
        <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-white/70">{site.description}</p>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.social.tiktok, icon: TikTokIcon, label: "TikTok" },
                { href: site.social.youtube, icon: YouTubeIcon, label: "YouTube" },
                { href: site.social.instagram, icon: InstagramIcon, label: "Instagram" },
                { href: site.social.facebook, icon: FacebookIcon, label: "Facebook" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-tangerine"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Shop</h3>
            <ul className="mt-4 space-y-3 text-white/70">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/shop?category=${c.slug}`} className="hover:text-white">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Help</h3>
            <ul className="mt-4 space-y-3 text-white/70">
              <li><Link href="/delivery" className="hover:text-white">Delivery &amp; payment</Link></li>
              <li><Link href="/delivery#returns" className="hover:text-white">Returns</Link></li>
              <li><Link href="/delivery#faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Get in touch</h3>
            <ul className="mt-4 space-y-4 text-white/70">
              <li className="flex gap-3"><PinIcon className="h-5 w-5 shrink-0 text-leaf" />{site.address}</li>
              <li className="flex gap-3"><PhoneIcon className="h-5 w-5 shrink-0 text-leaf" /><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">{site.phone}</a></li>
              <li className="flex gap-3"><MailIcon className="h-5 w-5 shrink-0 text-leaf" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/50 md:flex-row">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>Made with love for every paw.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
