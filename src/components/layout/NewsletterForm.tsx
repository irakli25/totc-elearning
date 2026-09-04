"use client";

import { useState } from "react";

/** Pill field plus teal Subscribe button, matching the footer in the Figma
 *  file. The glow behind the button is a blurred #545AE8 ellipse. */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setStatus(valid ? "done" : "error");
        if (valid) setEmail("");
      }}
      className="flex w-full max-w-[600px] flex-col items-center gap-4 sm:flex-row sm:justify-center"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Your email
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setStatus("idle");
        }}
        placeholder="Your Email"
        aria-describedby="newsletter-status"
        className="h-[60px] w-full rounded-pill border border-[#83839a] bg-transparent px-8 text-center text-lg text-white placeholder:text-[#83839a] sm:max-w-[400px] sm:text-left sm:text-xl"
      />
      <span className="relative shrink-0">
        <span
          aria-hidden
          className="absolute inset-x-3 bottom-0 h-[29px] rounded-full bg-[#545ae8] opacity-50 blur-[27px]"
        />
        <button
          type="submit"
          className="relative h-[60px] w-[179px] rounded-pill bg-teal-400 text-[22px] font-medium text-white transition-colors hover:bg-teal-600"
        >
          Subscribe
        </button>
      </span>
      <p
        id="newsletter-status"
        role="status"
        className="text-base text-[#b2b3cf] sm:sr-only"
      >
        {status === "done"
          ? "Thanks, you are on the list."
          : status === "error"
            ? "Enter a valid email address."
            : ""}
      </p>
    </form>
  );
}
