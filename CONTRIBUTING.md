# Contributing

All work should use a feature branch and keep package boundaries intact.

Before opening a pull request:

```bash
pnpm validate:workspace
pnpm lint
pnpm typecheck
pnpm test
pnpm build:packages
```

Component changes must follow `docs/COMPONENT_DEFINITION_OF_DONE.md` and include a changeset once public packages are release-enabled.
