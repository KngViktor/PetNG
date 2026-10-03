"use client";

import { useState } from "react";
import { CheckIcon } from "./Icons";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const input = "w-full rounded-xl border border-forest/10 bg-mint px-4 py-3 outline-none focus:border-forest/40";

  if (sent)
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] bg-white p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-leaf text-forest">
          <CheckIcon className="h-8 w-8" />
        </span>
        <p className="mt-5 font-display text-3xl text-forest">Message sent!</p>
        <p className="mt-2 text-muted">Thanks for reaching out — we&apos;ll get back to you shortly.</p>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-[2rem] bg-white p-6 md:p-10"
    >
      <h2 className="font-display text-3xl font-medium text-forest">Send us a message</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5">
          <span className="text-sm font-medium text-forest">Your name</span>
          <input required name="name" className={input} autoComplete="name" />
        </label>
        <label className="space-y-1.5">
          <span className="text-sm font-medium text-forest">Email</span>
          <input required type="email" name="email" className={input} autoComplete="email" />
        </label>
        <label className="space-y-1.5">
          <span className="text-sm font-medium text-forest">Pet</span>
          <select name="pet" className={input}>
            <option>Dog</option>
            <option>Cat</option>
            <option>Both</option>
            <option>Other</option>
          </select>
        </label>
        <label className="space-y-1.5">
          <span className="text-sm font-medium text-forest">Topic</span>
          <select name="topic" className={input}>
            <option>Order &amp; delivery</option>
            <option>Product advice</option>
            <option>Returns</option>
            <option>Partnerships</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium text-forest">Message</span>
          <textarea required name="message" rows={6} className={input} />
        </label>
      </div>
      <button className="mt-6 rounded-full bg-tangerine px-8 py-4 font-semibold text-white transition hover:bg-tangerine-2">Send message</button>
    </form>
  );
}
