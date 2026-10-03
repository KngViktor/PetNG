import Image from "next/image";
import { pets } from "@/lib/site";
import { PillLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-px mt-10">
      <div className="relative flex flex-col items-center overflow-hidden rounded-[2rem] bg-forest px-6 pt-16 text-center text-white">
        <p className="font-display text-[8rem] font-semibold leading-none tracking-tighter text-leaf md:text-[12rem]">404</p>
        <h1 className="font-display text-3xl md:text-4xl">This page went chasing squirrels</h1>
        <p className="mt-3 max-w-md text-white/70">We couldn&apos;t find what you were looking for. Let&apos;s get you back on the trail.</p>
        <div className="mt-8">
          <PillLink href="/">Back home</PillLink>
        </div>
        <div className="peek relative mt-10 h-56 w-72">
          <div className="absolute inset-x-0 top-0 h-[150%]">
            <Image src={pets.labPuppy} alt="Confused Labrador puppy" fill sizes="288px" className="object-contain object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
