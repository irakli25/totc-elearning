"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/** The question list on the membership page — Figma node 126:283. Rows are
 *  separated by a hairline and the open row reveals its body underneath. */
export function Accordion({
  items,
  defaultOpen = 3,
}: {
  items: { question: string; answer: string }[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <ul className="w-full">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <li key={`${item.question}-${index}`} className="border-b border-black/10">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-5 py-5 text-left"
              >
                <span
                  aria-hidden
                  className={cn(
                    "size-5 shrink-0 rounded-[4px] transition-colors",
                    isOpen ? "bg-orange" : "bg-teal-400",
                  )}
                />
                <span className="flex-1 text-lg font-medium text-ink lg:text-2xl">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "text-2xl leading-none text-body transition-transform",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div hidden={!isOpen} className="pb-6 pl-10">
              <p className="max-w-[1624px] text-base leading-[1.8] text-body lg:text-xl">
                {item.answer}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
