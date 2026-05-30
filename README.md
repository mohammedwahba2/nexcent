# Nexcent

A modern, minimal landing page for a membership management platform — built with Next.js 16, Tailwind CSS v4, and TypeScript.

## Live Demo

[nexcent-ochre.vercel.app](https://nexcent-ochre.vercel.app)

![Nexcent Preview](https://nexcent-ochre.vercel.app/images/preview.png)

## Design

[Figma Design](https://www.figma.com/design/ljHuDyDTKT8LloJbcAXSrg/Minimal-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design--Community-?node-id=0-1&t=6pOMzJn2JHZ8QJNA-0)


## Tech Stack

- **Next.js 16** — App Router
- **Tailwind CSS v4** — with custom design tokens
- **TypeScript**
- **next/font** — Inter font
- **next/image** — optimized images

## Project Structure

```
app/
├── layout.tsx
├── page.tsx
├── loading.tsx
├── not-found.tsx
├── opengraph-image.tsx
├── sitemap.ts
└── components/
    ├── layout/
    │   ├── Navbar.tsx
    │   ├── NavLinks.tsx
    │   ├── MobileMenu.tsx
    │   └── Footer.tsx
    └── sections/
        ├── Hero.tsx
        ├── Clients.tsx
        ├── Features.tsx
        ├── TextImageSection.tsx
        ├── Stats.tsx
        ├── Testimonial.tsx
        ├── Blog.tsx
        └── CTA.tsx
hooks/
└── useInView.ts
```

## Features

- Responsive design — mobile, tablet, desktop
- Scroll-triggered animations via `IntersectionObserver`
- Countdown stats animation
- Sticky navbar with scroll effect
- Right-side mobile drawer menu
- SEO optimized — metadata, OG image, sitemap, robots.txt
- JSON-LD structured data

## Getting Started

```bash
git clone https://github.com/mohammedwahba2/nexcent.git
cd nexcent
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy

Deployed on [Vercel](https://vercel.com).