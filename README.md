# legalizirajmo.si

Static website for the Mladi Pirati cannabis legalization initiative in Slovenia. Built with Astro and Tailwind CSS.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — via Vite plugin
- [pnpm](https://pnpm.io) — package manager
- Node.js ≥ 22.12.0

## Commands

```sh
pnpm install   # install dependencies
pnpm dev       # dev server at localhost:4321
pnpm build     # production build → ./dist/
pnpm preview   # preview built site
```

## Project structure

```
src/
├── components/
│   ├── ArticleShell.astro   # article page template
│   ├── SiteFooter.astro
│   └── SiteHeader.astro     # sticky nav with mobile menu
├── data/
│   ├── site.ts              # home page content
│   ├── predlog.ts           # model proposal content (/model)
│   └── zakon.ts             # law proposal content (/zakon)
├── layouts/
│   └── BaseLayout.astro     # wraps every page
├── pages/
│   ├── index.astro          # home page
│   ├── model.astro          # full model proposal article
│   └── zakon.astro          # law proposal article
└── styles/
    └── global.css           # CSS variables and utility classes
```

## Deployment

Includes a multi-stage `Dockerfile` that builds the site and serves it via nginx on port 80.

```sh
docker build -t legalizirajmo-si .
docker run -p 8080:80 legalizirajmo-si
```

## Linting

ESLint with TypeScript and Astro plugins:

```sh
pnpm dlx eslint .
```
