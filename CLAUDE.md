# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # dev server at localhost:4321
pnpm build     # production build → ./dist/
pnpm preview   # preview built site
```

No test runner is configured. Linting uses ESLint flat config — run via `npx eslint .` if needed.

## Architecture

Astro static site with Tailwind CSS. Content is stored in TypeScript data files and rendered via Astro components.

### Pages & routing

File-based routing under `src/pages/`:
- `/` — home page (`index.astro`) pulling from `src/data/site.ts`
- `/model` — full proposal article (`model.astro`) from `src/data/predlog.ts`
- `/zakon` — law proposal article (`zakon.astro`) from `src/data/zakon.ts`

### Content model

All site content lives in `src/data/` as TypeScript objects with HTML string values rendered via Astro's `set:html` directive. When adding or editing content, edit the data files — do not hardcode content in `.astro` files.

### Component hierarchy

```
BaseLayout.astro          ← wraps every page (header, footer, global styles)
  SiteHeader.astro        ← sticky nav with mobile menu
  SiteFooter.astro
  ArticleShell.astro      ← article page template (used by predlog & zakon)
```

### Design system

CSS variables are defined in `src/styles/global.css`. Key values:
- Background: `#fcf8f1`, Accent: `#f0a000`, Text: `#1f1a14`
- Fonts: "Manrope" (body), "Space Grotesk" (display/headers) via Google Fonts
- Utility classes: `.button-primary`, `.button-secondary`, `.surface-panel`, `.surface-panel-soft`, `.surface-sheet`, `.eyebrow`, `.article-content`

Tailwind is integrated via the Vite plugin (`astro.config.mjs`), not as a PostCSS plugin.
