# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Astro site ("liderazgo-imperfecto"), currently in early scaffolding stage. Package manager is pnpm (`packageManager: pnpm@10.33.1`).

## Commands

- `pnpm dev` — start the Astro dev server
- `pnpm build` — build the production site
- `pnpm preview` — preview the production build locally

There are no lint, typecheck, or test scripts configured yet.

## Architecture

- `src/pages/` — file-based routing; each `.astro` file here becomes a route (e.g. `src/pages/index.astro` → `/`).
- `src/layouts/` — shared page layouts (e.g. `Base.astro`) meant to be wrapped around page content via `<slot />`. `Base.astro` imports `../styles/global.css` globally.
- `src/components/` — component tree is being organized atomic-design style, e.g. `src/components/atoms/organims/common/Header.astro` (note: "organims" is a typo for "organisms", still present in the path). Components here aren't wired into any page yet.
- `src/styles/global.css` — single global stylesheet; just `@import "tailwindcss";` for now.
- Styling is Tailwind CSS v4, wired in via the `@tailwindcss/vite` Vite plugin in `astro.config.mjs` (not the older `@astrojs/tailwind` integration). No `tailwind.config.*` file — v4 is configured via CSS (`@import`/`@theme` in `global.css`) rather than a JS config file.
- `tsconfig.json` defines path aliases `@components/*` → `src/components/*` and `@layout/*` → `src/layouts/*`. Note: the current mapping still points at `./src/latouts/*` (typo) instead of `./src/layouts/*` — fix the typo before relying on the `@layout/*` alias.
- Content language: page content is being written in Spanish (`lang="es"` in layouts), though not yet consistently applied across files (e.g. `Base.astro`'s `<title>` is still the placeholder "Document").
