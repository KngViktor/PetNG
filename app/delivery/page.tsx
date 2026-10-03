import type { Metadata } from "next";
import Image from "next/image";
import { formatPrice, pets, site } from "@/lib/site";
import { PageHero, PillLink, SectionHeading } from "@/components/ui";
import { BankIcon, CardIcon, CashIcon, ChevronDown, ClockIcon, PhoneIcon, PinIcon, ReturnIcon, ShieldIcon, TruckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Delivery and payment",
  description: "Delivery options, prices and times, accepted payment methods, returns policy and frequently asked questions.",
};

const options = [
  { icon: TruckIcon, name: "Standard delivery", time: "2–4 working days", price: 4.99, note: `Free on orders over ${formatPrice(site.freeShippingFrom)}` },
  { icon: ClockIcon, name: "Express delivery", time: "Next working day", price: 9.99, note: "Order before 2pm, Mon–Fri" },
  { icon: TruckIcon, name: "Same-day courier", time: "Within 4 hours", price: 14.99, note: "Selected city areas, order before 12pm" },
  { icon: PinIcon, name: "Click & collect", time: "Ready in 2 hours", price: 0, note: `From our store at ${site.address}` },
];

const payments = [
  { icon: CardIcon, name: "Credit & debit cards", text: "Visa, Mastercard, American Express and Verve. Payments are processed securely with 3-D Secure." },
  { icon: PhoneIcon, name: "Digital wallets", text: "Apple Pay, Google Pay and PayPal for one-tap checkout on mobile." },
  { icon: BankIcon, name: "Bank transfer", text: "Pay directly from your bank. Your order ships as soon as the transfer clears (usually within 1 hour)." },
  { icon: CashIcon, name: "Pay on delivery", text: "Cash or card on delivery for orders up to $200 within our courier zones." },
];

const faqs = [
  ["How can I track my order?", "As soon as your order ships you'll receive an email and SMS with a tracking link. You can also contact us with your order number and we'll update you right away."],
  ["Do you deliver on weekends?", "Standard and express deliveries run Monday to Friday. Same-day courier and click & collect are also available on Saturdays."],
  ["What if I'm not home when my parcel arrives?", "The courier will leave it in a safe place if you've specified one, try a neighbour, or leave a card with options to rebook or collect from a local pickup point."],
  ["Is my payment information safe?", "Yes. We never store full card details. All payments are handled by PCI-DSS Level 1 certified payment providers over an encrypted connection."],
  ["Can I change or cancel my order?", "Orders can be changed or cancelled free of charge until they are packed — usually within 1 hour of ordering. Just call or email us."],
  ["Can I return opened food?", "For hygiene reasons we can't accept opened food or treats — unless your pet simply won't eat it. In that case, our Picky Eater Promise gives you a one-time full refund."],
  ["Do you ship internationally?", "We currently ship within the country only. International shipping is coming soon — subscribe to our newsletter to be the first to know."],
];

export default function DeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Help centre"
        title="Delivery and payment"
        text="Fast, careful delivery and flexible ways to pay. Here's everything you need to know before you check out."
        pet={pets.germanShepherd}
        petAlt="German shepherd"
        crumbs={[{ href: "/delivery", label: "Delivery and payment" }]}
      />

      {/* Free shipping banner */}
      <section className="container-px mt-10">
        <div className="flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-tangerine px-8 py-7 text-white md:flex-row md:items-center">
          <p className="font-display text-2xl md:text-3xl">
            Free standard delivery on every order over <span className="font-bold">{formatPrice(site.freeShippingFrom)}</span>
          </p>
          <PillLink href="/shop" variant="light">
            Start shopping
          </PillLink>
        </div>
      </section>

      {/* Delivery options */}
      <section className="container-px mt-20">
        <SectionHeading eyebrow="Delivery" title="Choose how it gets to you" text="Orders placed before 2pm on working days are packed and dispatched the same day." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {options.map(({ icon: Icon, ...o }) => (
            <div key={o.name} className="flex flex-col rounded-[1.75rem] bg-white p-6">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-leaf text-forest">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-forest">{o.name}</h3>
              <p className="mt-1 text-muted">{o.time}</p>
              <p className="mt-auto pt-5 font-display text-3xl font-bold text-forest">{o.price === 0 ? "Free" : formatPrice(o.price)}</p>
              <p className="mt-1 text-sm text-muted">{o.note}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-6 grid gap-6 rounded-[2rem] bg-forest p-8 text-white md:grid-cols-4 md:p-10">
          {[
            ["Place your order", "Online or by phone, 24/7."],
            ["We pack it", "With care, in recyclable packaging."],
            ["It ships", "You get a tracking link by SMS & email."],
            ["Happy pet", "Unbox, play, repeat!"],
          ].map(([t, d], i) => (
            <div key={t} className="relative">
              <span className="font-display text-5xl font-semibold text-leaf/40">0{i + 1}</span>
              <p className="mt-2 font-display text-xl font-semibold">{t}</p>
              <p className="text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payment */}
      <section className="container-px mt-20">
        <SectionHeading eyebrow="Payment" title="Pay the way you like" text="All prices include VAT. You're only charged once your order is confirmed." />
        <div className="grid gap-4 md:grid-cols-2">
          {payments.map(({ icon: Icon, ...p }) => (
            <div key={p.name} className="flex gap-5 rounded-[1.75rem] bg-white p-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-mint text-forest">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-forest">{p.name}</h3>
                <p className="mt-1 text-muted">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 flex items-center gap-2 text-sm text-muted">
          <ShieldIcon className="h-5 w-5 text-pine" /> 256-bit SSL encryption on every page. We never store your full card details.
        </p>
      </section>

      {/* Returns */}
      <section id="returns" className="container-px mt-20 scroll-mt-24">
        <div className="relative grid overflow-hidden rounded-[2rem] bg-leaf p-8 md:grid-cols-[1.3fr_1fr] md:p-12">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-forest/70">
              <ReturnIcon className="h-5 w-5" /> Returns
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-forest md:text-5xl">30-day hassle-free returns</h2>
            <ol className="mt-6 space-y-4 text-forest/80">
              {[
                "Contact us within 30 days of delivery with your order number.",
                "We email you a free prepaid return label.",
                "Pack the unused item in its original packaging and drop it off.",
                "Your refund is issued within 3–5 working days of us receiving it.",
              ].map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-sm font-bold text-white">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div className="peek relative -mb-12 mt-8 hidden h-80 md:block">
            <div className="absolute inset-x-0 top-0 h-[130%]">
              <Image src={pets.catCalico} alt="Calico cat" fill sizes="400px" className="object-contain object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-px mt-20 scroll-mt-24">
        <SectionHeading center eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl bg-white p-5 open:pb-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-forest">
                {q}
                <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-muted">
          Still have questions?{" "}
          <a href="/contact" className="font-semibold text-forest underline underline-offset-4">
            Contact our care team
          </a>
        </p>
      </section>
    </>
  );
}
