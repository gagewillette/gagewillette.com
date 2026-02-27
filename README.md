# Gage Willette Portfolio

Personal portfolio website for Gage Willette, built with Next.js (App Router) and deployed on Vercel.

## Overview

This site showcases:

- Hero intro and quick navigation
- About section with animated tech stack visualization
- Recent work/project highlights
- Contact section with EmailJS-powered contact form

## Tech Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion (UI animation)
- Lenis (smooth scrolling)
- EmailJS (contact form delivery)
- Vercel Analytics

## Local Development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run start` - Run production build locally
- `npm run lint` - Run ESLint

## Project Structure

- `app/page.tsx` - Landing page composition
- `app/components/sections/*` - Hero, About, Work, Contact sections
- `app/components/navbar.tsx` - Floating nav with active section state
- `app/components/lenis_provider.tsx` - Global smooth scroll setup
- `lib/smooth-scroll.ts` - Shared scroll helper

## Deployment and CI/CD

This project is deployed on Vercel with Git-based CI/CD:

- Pushes/PRs trigger automatic Vercel builds
- Preview deployments are created for pull requests
- Production deploys update when changes are merged to the production branch

## Contact Form Notes

The contact form currently sends mail through EmailJS in `app/components/sections/contact.tsx`. If you fork/reuse this repo, update the EmailJS service/template/public key values to your own.
