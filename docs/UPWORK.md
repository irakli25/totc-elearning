# Upwork portfolio entry

Copy for the portfolio item. Nothing here is used by the site.

---

## Title

TOTC — E-Learning Platform UI (Next.js 16, TypeScript, Tailwind v4)

## Short description

A nine-route e-learning site built from a Figma design: landing page, course
catalogue with detail pages, membership and pricing, a blog with article pages,
and login and register screens. Built with Next.js 16 and Tailwind v4, with four
runtime dependencies and no animation or carousel library.

## Full description

A complete front-end implementation of an e-learning product design, taken from
Figma frames to a deployed, statically rendered site.

**What is in it**

Nine routes, all prerendered. A marketing landing page with ten sections, a
course catalogue with per-course detail pages, a membership and pricing page
with an FAQ accordion, a blog index with article pages, and login and register
screens backed by server actions.

**Decisions worth mentioning**

- **The hero.** At large widths the hero visual is a single container-query
  canvas. The floating cards are sized in `em` against a container-relative font
  size, so the whole composition scales as one unit instead of drifting apart at
  intermediate widths. Below that breakpoint the same components stack at a
  readable fixed size.
- **No carousel library.** The course shelves and card rows scroll natively with
  CSS scroll snapping. That is the main reason the dependency list is four
  packages rather than fifteen.
- **The curve.** The teal band in the design ends partway down the frame and
  bows out at the centre. One `CurveDivider` component reproduces that path and
  is reused everywhere a coloured band meets the page.
- **A content layer.** Every string and list lives in one module, so a copy
  change never touches a component and the whole site could be rebranded without
  editing JSX.
- **Forms.** react-hook-form with Zod schemas shared between the client fields
  and the server action, so validation is defined once.

**Where I departed from the design, and why**

The source file is typeset in Lorem Ipsum, repeats a single photo across all
four course cards, and carries several spelling mistakes. Reproducing that
faithfully would have produced a build that looks unfinished. I wrote real copy
throughout, gave each card its own imagery and data, and corrected the spelling.
Every departure is listed in the repository README, so the decisions are
auditable rather than silent.

**Stack**

Next.js 16 (App Router, React 19), TypeScript in strict mode, Tailwind CSS v4
with design tokens, react-hook-form, Zod. Deployed on Vercel.

## Provenance — include this

The design is not mine. It is the "E-Learning Site" file published to the Figma
Community by its author. What I am showing is the implementation: the
components, the responsive behaviour, the content layer and the copy. I list
this explicitly because a client should know which part of the work is mine.

## Links

- Live site: https://totc-elearning.vercel.app
- Source: https://github.com/irakli25/totc-elearning

## Screenshot upload order

Upwork shows the first image as the card thumbnail, so lead with the hero.

1. `screenshot-hero.png` — landing hero, the strongest single frame
2. `screenshot-courses.png` — catalogue, shows real cards with distinct data
3. `screenshot-features.png` — the five alternating feature rows
4. `screenshot-membership.png` — pricing tiers
5. `screenshot-blog.png` — blog index
6. `screenshot-course-detail.png` — course detail page
7. `screenshot-login.png` — auth screen, shows form work
8. `screenshot-faq.png` — accordion and testimonials
9. `screenshot-shelves.png` — the scroll-snapping shelves
10. `screenshot-mobile.png` — mobile, last but worth including
