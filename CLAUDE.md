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
- `src/layouts/` — shared page layouts (e.g. `Base.astro`) meant to be wrapped around page content via `<slot />`.
- `astro.config.mjs` — Astro config, currently default/empty.
- `tsconfig.json` defines path aliases `@components/*` → `src/components/*` and `@layout/*` → `src/layouts/*`. Note: the current mapping points at `./src/latouts/*` (typo) instead of `./src/layouts/*`, and `src/components/` doesn't exist yet — fix the typo before relying on the `@layout/*` alias.
- Content language: page content is being written in Spanish (`lang="es"` in layouts), though not yet consistently applied across files.
