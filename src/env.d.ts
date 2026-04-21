/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NEWSLETTER_SUBSCRIBE_ENDPOINT: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
