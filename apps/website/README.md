# Documentation website

Nuxt 4 public documentation, catalog, playground, project pages, and live previews.

Run from the monorepo root so public workspace packages are built first:

```bash
pnpm dev
```

The website deliberately imports `@universal-vue/vue`, `@universal-vue/elements`, and `@universal-vue/metadata` as workspace dependencies. Website-only shell components stay in this application and are not exported by the npm library.
