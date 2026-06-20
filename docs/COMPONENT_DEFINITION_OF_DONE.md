# Component definition of done

A component is not complete until all of the following are true:

- Vue implementation exists in `packages/components/src/<component>`
- Public props and defaults are typed
- Events are typed and documented
- Slots and exposed methods are documented
- Keyboard interaction matches the expected accessibility pattern
- Focus behavior is verified
- Disabled, loading, error, read-only, and responsive states are considered where applicable
- Light and dark themes work through tokens
- CSS custom properties are documented
- Native Vue export works
- Custom Element export and event behavior work
- Unit tests pass
- Browser interaction tests pass
- Accessibility checks pass
- Metadata is generated or updated
- Nuxt documentation uses the real package export
- Packed `.tgz` installation works in at least one clean consumer fixture
- A changeset is included for public API changes
