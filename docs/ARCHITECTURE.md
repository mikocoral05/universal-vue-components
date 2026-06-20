# Architecture

The public component source exists once in `packages/components`. The native Vue package and Custom Element package consume the same source.

```text
packages/components  -> packages/vue       -> Vue, Nuxt, Quasar
                    -> packages/elements  -> React, Angular, Svelte, HTML, Laravel, WordPress, CDN
```

`packages/metadata` is the typed source of truth used by the Nuxt website for catalog and API pages. `packages/tokens` contains the theming contract. Website-only shell components remain inside `apps/website`.
