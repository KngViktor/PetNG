import type { Metadata } from "next";
import { pets, site } from "@/lib/site";
import { PageHero } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { ChatIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the PetNG care team by phone, email or visit our store.",
};

export default function ContactPage() {
  const cards = [
    { icon: PhoneIcon, title: "Call us", text: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
    { icon: MailIcon, title: "Email", text: site.email, href: `mailto:${site.email}` },
    { icon: PinIcon, title: "Visit the store", text: site.address },
    { icon: ClockIcon, title: "Opening hours", text: site.hours },
  ];
  return (
    <>
      <PageHero
        eyebrow="We're here to help"
        title="Contact us"
        text="Questions about an order, sizing or which food is right for your pet? Our care team — including vet nurses — usually replies within an hour."
        pet={pets.huskyPuppy}
        petAlt="Husky puppy"
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="container-px mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          {cards.map(({ icon: Icon, title, text, href }) => {
            const body = (
              <>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-leaf text-forest">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-muted">{title}</p>
                  <p className="font-display text-xl font-semibold text-forest">{text}</p>
                </div>
              </>
            );
            return href ? (
              <a key={title} href={href} className="flex items-center gap-4 rounded-[1.5rem] bg-white p-5 transition hover:bg-leaf/40">
                {body}
              </a>
            ) : (
              <div key={title} className="flex items-center gap-4 rounded-[1.5rem] bg-white p-5">
                {body}
              </div>
            );
          })}
          <div className="flex items-start gap-4 rounded-[1.5rem] bg-forest p-6 text-white">
            <ChatIcon className="h-7 w-7 shrink-0 text-leaf" />
            <p>
              <span className="font-semibold">Need help choosing?</span> Tell us your pet&apos;s age, breed and habits and we&apos;ll send
              personalised recommendations — free.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
