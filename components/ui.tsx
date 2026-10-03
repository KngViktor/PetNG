import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PawIcon, StarIcon } from "./Icons";
import { Reveal } from "./Motion";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="PetNG home">
      <PawIcon className="h-8 w-8 text-tangerine" />
      <span className={`font-display text-2xl font-semibold tracking-tight ${light ? "text-white" : "text-forest"}`}>
        Pet<span className="text-tangerine">NG</span>
      </span>
    </Link>
  );
}

export function Stars({ value, size = "h-4 w-4" }: { value: number; size?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} className={`${size} ${i <= Math.round(value) ? "text-tangerine" : "text-forest/15"}`} />
      ))}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  action,
  center,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  action?: { href: string; label: string };
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-10 flex flex-col gap-4 ${center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}>
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-tangerine">
            <PawIcon className="wiggle h-4 w-4" /> {eyebrow}
          </p>
        )}
        <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-forest md:text-5xl">{title}</h2>
        {text && <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>}
      </div>
      {action && <PillLink href={action.href}>{action.label}</PillLink>}
    </Reveal>
  );
}

export function PillLink({
  href,
  children,
  variant = "orange",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "orange" | "dark" | "light";
}) {
  const styles = {
    orange: "bg-tangerine text-white hover:bg-tangerine-2",
    dark: "bg-forest text-white hover:bg-forest-2",
    light: "bg-white text-forest hover:bg-mint",
  }[variant];
  const dot = {
    orange: "bg-white text-tangerine",
    dark: "bg-tangerine text-white",
    light: "bg-forest text-white",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex shrink-0 items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 font-semibold transition ${styles}`}
    >
      {children}
      <span className={`grid h-10 w-10 place-items-center rounded-full transition group-hover:translate-x-0.5 ${dot}`}>
        <ArrowRight className="h-5 w-5" />
      </span>
    </Link>
  );
}

/** Inner-page banner with a pet peeking over the bottom edge. */
export function PageHero({
  eyebrow,
  title,
  text,
  pet,
  petAlt,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  pet: string;
  petAlt: string;
  crumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="container-px pt-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 pb-10 pt-10 text-white md:px-14 md:pb-14 md:pt-14">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-pine/40 blur-3xl" />
        <div className="relative grid items-end gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="animate-fade-up">
            {crumbs && (
              <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                {crumbs.map((c) => (
                  <span key={c.href} className="flex items-center gap-2">
                    <span>/</span>
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  </span>
                ))}
              </nav>
            )}
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-leaf">{eyebrow}</p>}
            <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">{title}</h1>
            {text && <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{text}</p>}
          </div>
          <div className="relative hidden h-64 md:block">
            <div className="peek absolute inset-x-0 -bottom-14 top-0">
              <div className="rise absolute inset-0" style={{ animationDelay: "200ms" }}>
                <Image src={pet} alt={petAlt} fill sizes="400px" className="object-contain object-bottom drop-shadow-2xl" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Infinitely scrolling row. Content is rendered twice so the loop is seamless. */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className = "",
  rowClassName = "gap-10 pr-10",
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  /** Must include a right padding equal to the gap so both halves line up. */
  rowClassName?: string;
}) {
  return (
    <div className={`marquee overflow-hidden ${className}`} style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}>
      <div className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}>
        <div className={`flex shrink-0 items-center ${rowClassName}`}>{children}</div>
        <div className={`flex shrink-0 items-center ${rowClassName}`} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
