# React Router storefront example

A React Router 7 (framework mode, SSR) storefront built on
[`@shopify/hydrogen`](https://www.npmjs.com/package/@shopify/hydrogen) and the
classic Hydrogen/Oxygen runtime. It's a starting point you can clone and build
your store on top of — five pages on a shared layout, with a real cart,
analytics, and a consent banner wired up.

## Pages

- `/` — home (editorial hero, best sellers, shop by category)
- `/products/:handle` — product detail (gallery, variants, add to cart)
- `/collections` — all collections
- `/collections/:handle` — collection with filters, sort, and pagination
- `/search` — product search with the same filtering
- `/cart` — cart (also the no-JS fallback for the cart drawer)

## What it demonstrates

- Server `loader`s as the data path; each route owns its GraphQL query (typed via
  `gql.tada`).
- A real cart: storefront client + request handlers + `/api/cart` + an accessible
  cart drawer wired to Shopify Standard Actions.
- A shared layout (header with mobile nav, footer, announcement bar).
- Analytics + a consent banner.
- The design tokens in `app/tokens.css` and SVG icons in `public/icons/`.

## Run it

```bash
pnpm install
```

**Zero-config demo** — runs against `mock.shop` (a public mock Storefront API, no
account or token needed):

```bash
cp .env.example .env
# uncomment MOCK_SHOP=1 in .env
pnpm dev
```

**Against a real store** — set your store domain (in `app/lib/shop.ts`) and a
**private** Storefront API token, then run normally:

```bash
cp .env.example .env   # add your PRIVATE_STOREFRONT_API_TOKEN
pnpm dev               # the Hydrogen CLI loads .env into the worker environment
```

The store coordinates in `app/lib/shop.ts` point at Shopify's public **Hydrogen
Preview** store as a placeholder — **replace them with your own store**. Real
(non-mock) mode requires a private Storefront API token for *your* store; the
zero-config `MOCK_SHOP=1` demo above needs none. (`mock.shop` and the Hydrogen
Preview store are different data sources.)

## Scripts

| Script | Does |
| --- | --- |
| `pnpm dev` | Start the Hydrogen/Oxygen dev server. |
| `pnpm build` | Production Oxygen build (`shopify hydrogen build`). |
| `pnpm preview` | Preview the production build locally with mini-oxygen. |
| `pnpm typecheck` | React Router typegen + `tsc` + `gql.tada check`. |

> **Note:** `patch-hydrogen-exports.mjs` runs on `postinstall` as a temporary
> shim — it adds the missing `"./package.json"` export to `@shopify/hydrogen` so
> `shopify hydrogen deploy` builds under npm. Remove it (and the `postinstall`)
> once `@shopify/hydrogen` ships that export.

## Where to start

- Swap the store in `app/lib/shop.ts` + `.env`.
- Routes live in `app/routes/`; shared UI in `app/components/`; data/query helpers
  in `app/lib/`.
- The design is yours to change — `app/tokens.css` holds the design tokens; the
  components use them via semantic classes.

## License

MIT — see [LICENSE](./LICENSE).
