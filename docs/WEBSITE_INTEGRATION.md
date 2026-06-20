# Website integration

The Nuxt website is implemented in `apps/website` and consumes the real workspace package outputs.

## Local flow

1. `pnpm install`
2. `pnpm build:packages`
3. `pnpm dev:website`

The root `pnpm dev` command performs steps 2 and 3 automatically.

## Separation rule

Website navigation, search, documentation tables, and project pages remain private to the Nuxt application. Reusable controls live in `packages/components` and are delivered by `@universal-vue/vue` and `@universal-vue/elements`.

## Source-of-truth rule

The catalog and API tables read `@universal-vue/metadata`; live previews import the native Vue package; the Custom Element preview registers `@universal-vue/elements`. No duplicate fake documentation components are used.
