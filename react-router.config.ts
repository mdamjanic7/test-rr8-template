import type { Config } from "@react-router/dev/config";

export default {
  // Server-side render by default; set to `false` for SPA mode.
  ssr: true,
  // Oxygen + the Hydrogen CLI expect the worker build output under `dist/`
  // (the CLI hardcodes `dist` as the Oxygen build directory). React Router's
  // default is `build/`, so set this explicitly or `shopify hydrogen build`
  // fails looking for `dist/index.js`.
  buildDirectory: "dist",
  // No `future` flags needed. Route-module `middleware` exports (the root
  // layout's request-scoped Storefront client / cart context) are stable and
  // enabled by default in React Router 8 — the v7 `future.v8_middleware` gate
  // is gone in v8 (passing it now is an unknown, no-op config key).
} satisfies Config;
