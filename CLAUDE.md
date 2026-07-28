# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Astro site ("liderazgo-imperfecto") for a leadership program/book by Jose Echeverri. Currently a single landing page (`src/pages/index.astro`) built out section by section; several sections still have placeholder/commented-out content (e.g. FAQ list, empty video `src`, single sample "pilar" list item with the rest left as a comment). Package manager is pnpm (`packageManager: pnpm@10.33.1`).

## Commands

- `pnpm dev` — start the Astro dev server
- `pnpm build` — build the production site
- `pnpm preview` — preview the production build locally

There are no lint, typecheck, or test scripts configured yet.

## Architecture

- `src/pages/` — file-based routing; each `.astro` file here becomes a route (e.g. `src/pages/index.astro` → `/`).
- `src/layouts/Base.astro` — shared page layout wrapped around page content via `<slot />`. Takes `title`/`description` props, renders `<Seo>` in the head, imports `../styles/global.css` globally, and inlines the site header/footer directly (nav links and footer text are still placeholders).
- `src/components/atoms/common/` — shared components: `Section.astro` (generic section wrapper — spreads `HTMLAttributes<'section'>` onto the `<section>` and wraps `<slot />` in a `.container` div for consistent max-width/padding) and `Seo.astro` (title/meta/canonical, Open Graph, Twitter Card, and JSON-LD structured data for the `Person` (Jose Echeverri) and `Book` (Liderazgo Imperfecto) entities).
- `src/components/atoms/organims/` — empty directory, part of the intended atomic-design component tree (note: "organims" is a typo for "organisms", still present in the path).
- `src/assets/` — static assets imported directly into components (e.g. `import Check from '@assets/check.svg'`, images passed to Astro's `<Image>` from `astro:assets`).
- `src/styles/global.css` — single global stylesheet: `@import "tailwindcss";` plus a hand-rolled `.container` class with responsive `max-width` breakpoints (used by `Section.astro`).
- Styling is Tailwind CSS v4, wired in via the `@tailwindcss/vite` Vite plugin in `astro.config.mjs` (not the older `@astrojs/tailwind` integration). No `tailwind.config.*` file — v4 is configured via CSS (`@import`/`@theme` in `global.css`) rather than a JS config file.
- `astro.config.mjs` sets `site: 'https://liderazgoimperfecto.com'`, which `Seo.astro` relies on to build absolute canonical/OG URLs.
- `tsconfig.json` defines path aliases `@components/*` → `src/components/*`, `@assets/*` → `src/assets/*`, and `@layout/*` → `src/layouts/*`. Note: the current mapping still points at `./src/latouts/*` (typo) instead of `./src/layouts/*` — fix the typo before relying on the `@layout/*` alias.
- Content language: page content is written in Spanish (`lang="es"` in `Base.astro`).
