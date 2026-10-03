import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatDate, posts } from "@/lib/posts";
import { pets } from "@/lib/site";
import { PageHero } from "@/components/ui";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Blog",
  description: "Pet care guides, nutrition advice and training tips from the PetNG team and our vets.",
};

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="The PetNG Journal"
        title="Pet care, made simple"
        text="Practical guides on nutrition, training, grooming and health — written by our team of vet nurses, trainers and lifelong pet parents."
        pet={pets.maltipoo}
        petAlt="Maltipoo puppy"
        crumbs={[{ href: "/blog", label: "Blog" }]}
      />

      <section className="container-px mt-10">
        <Link href={`/blog/${lead.slug}`} className="group grid overflow-hidden rounded-[2rem] bg-white md:grid-cols-2">
          <div className="relative min-h-[300px] overflow-hidden">
            <Image src={lead.cover} alt="" fill priority sizes="(min-width:768px) 50vw, 100vw" className="object-cover object-[center_25%] transition duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="w-fit rounded-full bg-leaf px-3 py-1 text-xs font-semibold text-forest">Featured · {lead.category}</span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-forest group-hover:text-tangerine md:text-4xl">{lead.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{lead.excerpt}</p>
            <p className="mt-6 text-sm text-muted">
              {lead.author} · {formatDate(lead.date)} · {lead.readMinutes} min read
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-forest">
              Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </section>

      <section className="container-px mt-6">
        <Reveal stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-[2rem] bg-white">
            <div className="relative h-60 overflow-hidden">
              <Image src={p.cover} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover object-[center_25%] transition duration-500 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-forest">{p.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-muted">
                {formatDate(p.date)} · {p.readMinutes} min read
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-forest group-hover:text-tangerine">{p.title}</h3>
              <p className="mt-3 line-clamp-3 text-muted">{p.excerpt}</p>
              <p className="mt-auto pt-5 text-sm font-medium text-forest">By {p.author}</p>
            </div>
          </Link>
        ))}
        </Reveal>
      </section>
    </>
  );
}
