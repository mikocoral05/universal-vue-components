# Publishing

1. Run `pnpm install`, `pnpm check`, and `pnpm build`.
2. Run `pnpm test:packed` to pack the public packages and build all six clean consumer fixtures against the generated tarballs.
3. Push to GitHub and configure npm trusted publishing for each public package.
4. Create a GitHub release or run the release workflow manually.
5. Publish scoped packages with public access and provenance.

The repository root is private and must never be published.
