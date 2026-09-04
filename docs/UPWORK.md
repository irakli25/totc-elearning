# Upwork portfolio entry

Paste-ready copy for the portfolio item. Nothing here is used by the site.

---

## Title

> E-Learning Platform UI — Next.js 16, TypeScript, Tailwind v4

Alternative, if you want the product name to lead:

> TOTC — E-Learning Platform Front End

## Role

Front-end developer. Sole developer on the build.

## Project URL

https://totc-elearning.vercel.app

## Repository

https://github.com/irakli25/totc-elearning

---

## Short description

For a tight field, or the summary line on the card.

> A nine-route e-learning site built from a Figma design: landing page, course
> catalogue with detail pages, membership and pricing, a blog with article
> pages, and login and register screens. Next.js 16, TypeScript and Tailwind
> v4, with four runtime dependencies and no animation or carousel library.
> Every route prerenders. Live demo and full source linked.

---

## Full description

> A complete front-end implementation of an e-learning product design, taken
> from Figma frames to a deployed, statically rendered site.
>
> **What is in it**
>
> Nine routes, all prerendered at build time. A landing page of ten sections, a
> course catalogue with per-course detail pages, a membership and pricing page
> with an FAQ accordion, a blog index with article pages, and login and register
> screens backed by server actions with shared client and server validation.
>
> **Decisions worth describing**
>
> The hero is the piece that needed real thought. At large widths it is a single
> container-query canvas, with the floating cards sized in em against a
> container-relative font size, so the whole composition scales as one unit
> instead of drifting apart at intermediate widths. Below that breakpoint the
> same components stack at a readable fixed size.
>
> There is no carousel library. The course shelves and card rows scroll natively
> with CSS scroll snapping, which is the main reason the dependency list is four
> packages rather than fifteen.
>
> The teal band in the design ends partway down the frame and bows out at the
> centre. One component reproduces that path and is reused everywhere a coloured
> band meets the page, rather than the shape being redrawn per section.
>
> Every string and list lives in a single content module, so a copy change never
> touches a component and the site could be rebranded without editing JSX.
>
> Forms use react-hook-form with Zod schemas shared between the client fields
> and the server action, so validation is defined once rather than twice.
>
> **Where I departed from the design, and why**
>
> The source file is typeset in Lorem Ipsum, repeats one photo across all four
> course cards, and carries several spelling mistakes. Reproducing that
> faithfully would have shipped something that reads as unfinished. I wrote real
> copy throughout, gave every card its own imagery and data, and corrected the
> spelling. Each departure is listed in the repository README, so the decisions
> are auditable rather than silent.
>
> **Stack**
>
> Next.js 16 (App Router, React 19), TypeScript in strict mode, Tailwind CSS v4
> with design tokens, react-hook-form, Zod. Deployed on Vercel.
>
> **On the design**
>
> The design is not mine. It is the "E-Learning Site" file published to the
> Figma Community by its author. What I am showing is the implementation: the
> components, the responsive behaviour, the content layer and the copy.

---

## Skills to tag

Next.js · React · TypeScript · Tailwind CSS · JavaScript · HTML5 · CSS ·
Responsive Web Design · Front-End Development · Figma · UI/UX Design ·
Web Development

Pick the ones Upwork offers; the first four matter most for search.

---

## Images, in upload order

The first image becomes the card thumbnail, so the hero leads.

| # | File | Why it is here |
| --- | --- | --- |
| 1 | `screenshot-hero.png` | Strongest single frame, and the thumbnail |
| 2 | `screenshot-courses.png` | Catalogue with real per-card data |
| 3 | `screenshot-features.png` | Five alternating feature rows |
| 4 | `screenshot-membership.png` | Pricing tiers |
| 5 | `screenshot-blog.png` | Blog index |
| 6 | `screenshot-course-detail.png` | Detail page |
| 7 | `screenshot-login.png` | Form work |
| 8 | `screenshot-faq.png` | Accordion and testimonials |
| 9 | `screenshot-shelves.png` | The scroll-snapping shelves |
| 10 | `screenshot-mobile.png` | Mobile layout |

All of them are in this folder.

---

## If a client asks

**"Did you design this?"**
No. The design is a Figma Community file by another author. I built the front
end from it. If you want design and build together, I can do that too, but this
piece is being shown for the implementation.

**"Is it a real product?"**
No. TOTC is not a real company and every figure on the page is invented. It is a
self-directed build to show how I take a design to production.

**"Is there a backend?"**
Not for this. Sign-in is a server action that validates with Zod and sets an
httpOnly cookie standing in for a session, so the pending and error states are
real and demonstrable. Log in with the username `blocked` or register with
`taken@totc.dev` to see the error path; anything else succeeds.
