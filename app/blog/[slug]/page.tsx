import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, posts } from "@/lib/posts";
import { getProduct } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { PawIcon } from "@/components/Icons";
import { Reveal } from "@/components/Motion";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPost((await params).slug);
  return p ? { title: p.title, description: p.excerpt, openGraph: { images: [p.cover] } } : {};
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const related = post.related.map(getProduct).filter((p) => p !== undefined);
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <header className="container-px pt-8">
        <div className="mx-auto max-w-3xl text-center">
          <nav aria-label="Breadcrumb" className="flex justify-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-forest">Home</Link>/<Link href="/blog" className="hover:text-forest">Blog</Link>/
            <span className="text-forest">{post.category}</span>
          </nav>
          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-forest md:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg text-muted">{post.excerpt}</p>
          <p className="mt-6 text-sm text-muted">
            By <span className="font-semibold text-forest">{post.author}</span> · {formatDate(post.date)} · {post.readMinutes} min read
          </p>
        </div>
        <div className="relative mx-auto mt-10 h-[320px] max-w-5xl overflow-hidden rounded-[2rem] md:h-[520px]">
          <Image src={post.cover} alt="" fill priority sizes="(min-width:1024px) 1024px, 100vw" className="object-cover object-[center_25%]" />
        </div>
      </header>

      <div className="container-px">
        <div className="prose-pet mx-auto max-w-2xl pt-10 text-lg">
          {post.body.map((b, i) => {
            if (b.type === "p") return <p key={i}>{b.text}</p>;
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "ul")
              return (
                <ul key={i}>
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            return (
              <aside key={i} className="my-8 flex gap-4 rounded-[1.5rem] bg-leaf p-6">
                <PawIcon className="h-7 w-7 shrink-0 text-forest" />
                <div>
                  <p className="font-display font-semibold text-forest">PetNG tip</p>
                  <p className="!my-1 !text-forest/80">{b.text}</p>
                </div>
              </aside>
            );
          })}
        </div>
      </div>

      {related.length > 0 && (
        <section className="container-px mt-16">
          <div className="rounded-[2rem] bg-leaf p-6 md:p-10">
            <h2 className="mb-6 font-display text-3xl font-medium text-forest">Products mentioned in this article</h2>
            <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section className="container-px mt-16">
        <h2 className="mb-6 font-display text-3xl font-medium text-forest">Keep reading</h2>
        <Reveal stagger className="grid gap-6 md:grid-cols-3">
          {more.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-[2rem] bg-white">
              <div className="relative h-48 overflow-hidden">
                <Image src={p.cover} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover object-[center_25%] transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-sm text-muted">{p.category}</p>
                <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-forest group-hover:text-tangerine">{p.title}</h3>
              </div>
            </Link>
          ))}
        </Reveal>
      </section>
    </article>
  );
}
