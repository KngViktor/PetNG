"use client";

import { useState } from "react";
import { ArrowRight, CheckIcon } from "./Icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done)
    return (
      <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-forest">
        <CheckIcon className="h-5 w-5 text-pine" /> You&apos;re in! Check your inbox for your code.
      </p>
    );

  return (
    <form
      className="mt-6 flex max-w-md items-center rounded-full bg-white p-1.5"
      onSubmit={(e) => {
        e.preventDefault();
        if (/\S+@\S+\.\S+/.test(email)) setDone(true);
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        aria-label="Email address"
        className="min-w-0 flex-1 bg-transparent px-4 outline-none"
      />
      <button className="inline-flex items-center gap-2 rounded-full bg-tangerine px-5 py-3 font-semibold text-white transition hover:bg-tangerine-2">
        Subscribe <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
