# VisionX — Official Website

**See Beyond. Build the Future.**

VisionX is a student-led innovation and startup ecosystem platform built with Next.js. The website serves as the digital presence for the organization, showcasing its mission, team, services, events, workshops, and more — all wrapped in a premium dark-themed, glassmorphism-driven UI.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Orbitron (logo), Inter (body), Space Grotesk (headings) |

## Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero with particle background, feature cards, impact counters |
| `/about` | About — Story, Mission, Vision, Core Values, Journey Timeline |
| `/team` | Team — Founding Council & Team Leads with profile photos |
| `/services` | Services — 5 service offerings with detailed breakdowns |
| `/workshops` | Workshops — Workshop & Bootcamp listings with registration |
| `/workshops/[id]` | Workshop Detail — Full description, capacity status, registration CTA |
| `/workshops/[id]/register` | Registration Form — 8-field form with validation & confirmation |
| `/workshops/admin` | Admin Dashboard — Workshop CRUD, participant search & management |
| `/events` | Events — Upcoming & past events with filter toggle |
| `/blog` | Blog — Articles with category filters |
| `/apply` | Apply — Membership application form |
| `/incubate` | Incubate — Startup incubation application form |
| `/contact` | Contact — Social links & contact form |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
npm start
```

All pages are statically generated for optimal performance.

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # Reusable UI components
├── data/          # Static data files (team, events, workshops, etc.)
└── lib/           # Utility functions
```

## Design System

- **Background:** `#050816` (deep navy/black)
- **Primary accent:** `#00A3FF` (neon blue)
- **Secondary accent:** `#3BB8FF` (electric blue)
- **UI pattern:** Glassmorphism with backdrop blur, neon glow effects, gradient borders
- **Responsive:** Fully responsive across mobile, tablet, and desktop

## Deployment

The site is fully static and can be deployed to any static hosting platform (Vercel, Netlify, GitHub Pages, etc.).
