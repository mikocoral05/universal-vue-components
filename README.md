# Universal Vue Components

A free, open-source Vue 3 component system delivered in three forms:

- `@universal-vue/vue` — native Vue 3 components
- `@universal-vue/elements` — framework-independent Custom Elements
- CDN bundles from the published `@universal-vue/elements` package

The monorepo also contains the Nuxt documentation website, typed component metadata, design tokens, shared utilities, framework examples, tests, and release automation.

## Start on Windows

```bat
cd /d "C:\My NPMJS\universal-vue-components"
pnpm install
pnpm check
pnpm dev
```

Open `http://localhost:3000`.

## Build everything

```bat
pnpm build
```

## Project status

The complete local alpha foundation is implemented, including 25 production-oriented components and all planned integration infrastructure. The GitHub foundation release is published; npm publication, branch protection, domain deployment, and external service credentials remain repository-owner actions.

## Implemented catalog

The current catalog contains 25 components. The first expansion batch adds:

- `UvDivider`
- `UvSkeleton`
- `UvSlider`
- `UvPopover`
- `UvDropdownMenu`

Each component is exported through the native Vue package and registered as a corresponding `uv-*` Custom Element.

## Release validation

```bat
pnpm check
pnpm build
pnpm test:e2e
pnpm test:a11y
pnpm test:packed
pnpm validate:links
pnpm validate:sizes
```
