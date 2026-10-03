import type { Metadata } from "next";
import Image from "next/image";
import { pets, photos, site } from "@/lib/site";
import { PageHero, PillLink, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "About us",
  description: "The story behind PetNG, our values and the team (and pets) that make it happen.",
};

const team = [
  { name: "Amara Okafor", role: "Founder & CEO", pet: pets.goldenPuppy, petName: "Sunny" },
  { name: "Dr. Lena Brooks", role: "Head vet advisor", pet: pets.catWhite, petName: "Pearl" },
  { name: "Marco Silva", role: "Trainer & content lead", pet: pets.huskyBrown, petName: "Koda" },
  { name: "Ngozi Eze", role: "Customer care lead", pet: pets.maltipoo, petName: "Biscuit" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Made by pet people, for pet people"
        text="PetNG started in a tiny apartment with one very picky golden retriever and a simple idea: pet shopping should be easy, honest and joyful."
        pet={pets.redLab}
        petAlt="Red Labrador"
        crumbs={[{ href: "/about", label: "About us" }]}
      />

      <section className="container-px mt-16 grid items-center gap-10 lg:grid-cols-2">
        <Reveal variant="left" className="grid grid-cols-2 gap-4">
          <div className="relative h-80 overflow-hidden rounded-[2rem]">
            <Image src={photos.goldenPuppy} alt="Golden retriever puppy" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
          </div>
          <div className="relative mt-12 h-80 overflow-hidden rounded-[2rem]">
            <Image src={photos.catGinger} alt="Ginger cat" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover" />
          </div>
        </Reveal>
        <div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-forest md:text-5xl">From one picky pup to {site.stats.happyClients} happy clients</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              When our founder Amara adopted Sunny, she spent weeks trying food after food, bed after bed — reading reviews that never
              seemed to come from real pet owners. So she started testing products herself, with friends and their pets.
            </p>
            <p>
              That little testing group became PetNG. Today, every product in our shop is tried by a panel of more than 60 dogs and cats
              before we stock it, and our team includes vet nurses, trainers and groomers who are always happy to help.
            </p>
          </div>
          <div className="mt-8">
            <PillLink href="/shop" variant="dark">
              Shop the collection
            </PillLink>
          </div>
        </div>
      </section>

      <section className="container-px mt-20">
        <Reveal stagger className="grid gap-4 rounded-[2rem] bg-forest p-8 text-white sm:grid-cols-2 md:p-12 lg:grid-cols-4">
          {[
            [site.stats.happyClients, "Happy clients"],
            [`${site.stats.rating}★`, "Average rating"],
            [site.stats.brands, "Trusted brands"],
            ["60+", "Pet product testers"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-5xl font-semibold text-leaf">{n}</p>
              <p className="mt-1 text-white/70">{l}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="container-px mt-20">
        <SectionHeading eyebrow="What we believe" title="Our values" />
        <Reveal stagger className="grid gap-4 md:grid-cols-3">
          {[
            ["Pets first", "If our testers don't love it, we don't sell it. Simple as that."],
            ["Radical honesty", "Real reviews, clear ingredients and advice that puts your pet's wellbeing before a sale."],
            ["Kind to the planet", "Recyclable packaging, carbon-neutral delivery and brands that source responsibly."],
          ].map(([t, d], i) => (
            <div key={t} className={`rounded-[1.75rem] p-8 ${i === 1 ? "bg-tangerine text-white" : "bg-white"}`}>
              <p className={`font-display text-5xl font-semibold ${i === 1 ? "text-white/40" : "text-leaf"}`}>0{i + 1}</p>
              <h3 className={`mt-4 font-display text-2xl font-semibold ${i === 1 ? "" : "text-forest"}`}>{t}</h3>
              <p className={`mt-2 ${i === 1 ? "text-white/85" : "text-muted"}`}>{d}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="container-px mt-20">
        <SectionHeading eyebrow="The team" title="Humans (and their bosses)" />
        <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="overflow-hidden rounded-[2rem] bg-white">
              <div className="peek relative h-56 bg-leaf">
                <div className="absolute inset-x-6 top-6 h-[140%]">
                  <Image src={m.pet} alt={`${m.petName}, ${m.name}'s pet`} fill sizes="280px" className="object-contain object-top" />
                </div>
              </div>
              <div className="p-6">
                <p className="font-display text-xl font-semibold text-forest">{m.name}</p>
                <p className="text-muted">{m.role}</p>
                <p className="mt-3 text-sm text-tangerine">Boss: {m.petName}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>
    </>
  );
}
