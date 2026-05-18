/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly APPLICATIONS_RECEIVER_BASE_URL: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
