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

Astro static site with Tailwind CSS v4. Content is stored in TypeScript data files and rendered via Astro components. All content is in Slovenian.

### Pages & routing

File-based routing under `src/pages/`:
- `/` — home page (`index.astro`) — uses `site.ts`, `modeli.ts`, and `ModelComparator`
- `/model` — full proposal article (`model.astro`) — from `src/data/predlog.ts`
- `/zakon` — law proposal article (`zakon.astro`) — from `src/data/zakon.ts`

### Content model

All site content lives in `src/data/` as TypeScript objects with HTML string values rendered via Astro's `set:html` directive. When adding or editing content, edit the data files — do not hardcode content in `.astro` files.

Data files:
- `site.ts` — site metadata, nav, and homepage highlights/sections
- `modeli.ts` — policy model comparator data (4 models: kriminalizacija → piratski model)
- `predlog.ts` — proposal article sections (`ArticleSection[]`), references HTML, updated timestamp
- `zakon.ts` — law article intro HTML and sections (`ArticleSection[]`)

### Component hierarchy

```
BaseLayout.astro           ← wraps every page (head, fonts, header, footer)
  SiteHeader.astro         ← sticky nav with mobile hamburger menu
  SiteFooter.astro         ← copyright, links
  ArticleShell.astro       ← two-column article template (model.astro, zakon.astro)
    slot "aside"           ← sidebar content (PDF links, cross-links)
  ModelComparator.astro    ← interactive 4-model policy comparison widget (index.astro)
```

### Design system

CSS variables are defined in `src/styles/global.css`. Key values:
- Background: `#fcf8f1`, Text: `#1f1a14`, Accent brown: `#3d3830`
- Fonts: "Manrope" (body), "Space Grotesk" (display/headers) via Google Fonts
- Utility classes: `.button-primary`, `.button-secondary`, `.surface-panel`, `.surface-sheet`, `.eyebrow`, `.article-content`, `.font-display`

Tailwind v4 is integrated via the Vite plugin (`@tailwindcss/vite`) in `astro.config.mjs`, not as a PostCSS plugin. No `tailwind.config.*` file — configuration is CSS-first.

### ArticleShell props

```typescript
{
  eyebrow: string;           // small label above title
  title: string;
  lede: string;              // intro paragraph
  description?: string;
  toc: TocItem[];            // table of contents items
  links?: HeroLink[];        // CTA buttons
  renderHighlights?: boolean // show stat cards (used on /model)
}
```

Named slot `"aside"` renders in the sticky sidebar.
