# TeamBeez — Proposal Website

A single-page Next.js (App Router) proposal site for the TeamBeez EdTech & HR Consulting
dual-wing platform. Built to be handed to a client or investor as the pitch itself, structured
around the requirements gathered in the discovery chat.

## Sections

1. **Hero** — the "one hive, two wings" thesis, with a honeycomb visual split amber (Education
   wing) / navy (HR wing).
2. **Dual-Wing Model** — side-by-side breakdown of the Education wing (work-linked degrees,
   career roadmap, NBFC loan checker, partner universities) and the HR wing (corporate hiring,
   8.33% placement fee, manpower staffing, candidate screening).
3. **Market landscape** — how TeamBeez differs from Career Makers, Internshala/UpGrad, and
   TeamLease.
4. **Execution roadmap** — the three real build phases: Basic (lead-gen MVP), Advanced (dynamic
   PHP/MySQL portal), Large-Scale (SaaS with OpenAI + ATS scoring + mobile app).
5. **Contact / lead form** — a working client-side form (validation, wing-tagging, success
   state) that mirrors how lead capture should behave once wired to a real backend.

## Design system

- **Palette**: warm honeycomb "wax" background (`#F7EEDA`), ink text (`#1B1A17`), amber for the
  Education wing (`#F2A93B` / `#C97A1A`), navy for the HR wing (`#21324A` / `#131E2E`).
- **Type**: Space Grotesk (display), Inter (body), IBM Plex Mono (labels/eyebrows/stats).
- **Signature element**: the hexagon "cell" — used as the hero's honeycomb grid, as feature-list
  bullets, and as the numbered markers in the roadmap — because TeamBeez's own name is a hive
  metaphor, and the business itself is two combs in one hive.

## Getting started

Requires Node 18.18+ and internet access for `npm install` (fonts are fetched at build time via
`next/font/google`, and packages come from the npm registry).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Where to plug in a backend later

The contact form in `app/components/ContactCta.tsx` currently validates and shows a success
state client-side only — there's a comment at the point where a forms API route, email service,
or CRM webhook should be wired in. The Advanced Plan phase (career-roadmap filtering, loan
checker, candidate screening) is scaffolded structurally in the Roadmap section but intentionally
left as a phase-two build, per the client's own staged-funding strategy.
