import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/* "What Is TOTC" — Figma node 10:886. Two 600x400 photo cards under a
 * #171B41 wash, each with a centred label and pill. */
const panels = [
  {
    label: "FOR INSTRUCTORS",
    cta: "Start a class today",
    href: "/register",
    image: "/images/home/for-instructors.jpg",
    alt: "An instructor presenting to a class",
    filled: false,
  },
  {
    label: "FOR STUDENTS",
    cta: "Enter access code",
    href: "/login",
    image: "/images/home/for-students.jpg",
    alt: "Three students working together at a laptop",
    filled: true,
  },
];

export function WhatIsTotc() {
  return (
    <section id="about" className="scroll-mt-24 py-16 lg:py-[100px]">
      <Container className="flex flex-col items-center">
        <h2 className="text-center text-[32px] leading-[1.8] font-semibold text-ink lg:text-[44px]">
          What is <span className="text-[#00cbb8]">TOTC?</span>
        </h2>
        <p className="mt-4 max-w-[1101px] text-center text-lg leading-[1.8] tracking-[0.02em] text-body lg:text-2xl">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>

        <div className="mt-12 grid w-full max-w-[1300px] gap-8 lg:mt-[100px] lg:grid-cols-2 lg:gap-[100px]">
          {panels.map((panel) => (
            <div
              key={panel.label}
              className="relative flex aspect-[600/400] flex-col items-center justify-center gap-6 overflow-hidden rounded-card"
            >
              <Image
                src={panel.image}
                alt={panel.alt}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
              <span aria-hidden className="absolute inset-0 bg-[#171b41]/30" />
              <p className="relative text-2xl font-semibold text-white lg:text-[32px]">
                {panel.label}
              </p>
              <Link
                href={panel.href}
                className={`relative grid h-[60px] w-[240px] place-items-center rounded-pill text-lg font-medium text-white transition-colors lg:h-20 lg:w-[283px] lg:text-[22px] ${
                  panel.filled
                    ? "bg-[#23bdee]/90 hover:bg-[#23bdee]"
                    : "border border-white hover:bg-white/15"
                }`}
              >
                {panel.cta}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
