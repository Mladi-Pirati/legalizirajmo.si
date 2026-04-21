/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NEWSLETTER_SUBSCRIBE_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
