# Nexcent — Claude Guidelines

## Project
Minimal landing page built with Next.js 16 App Router, Tailwind CSS v4, TypeScript.

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint

## Architecture
- `app/components/layout/` — Navbar, Footer
- `app/components/sections/` — page sections
- `hooks/useInView.ts` — scroll animation hook
- `app/globals.css` — Tailwind v4 + custom tokens

## Rules
- All colors via `@theme` tokens in `globals.css`
- Animations via `useInView` hook only
- `"use client"` only when needed
- Images in `public/images/`