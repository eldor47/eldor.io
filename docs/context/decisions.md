# Decisions (ADR-lite)

Status: living list of notable choices and rationale.

1) Pages Router over App Router
   - Context: Bootstrapped via create-t3-app with pages structure.
   - Rationale: Simplicity; minimal routes.

2) Tailwind + Global CSS variables
   - Rationale: Fast iteration, dark-purple theme with CSS variables for consistency.

3) Framer Motion for subtle animations
   - Rationale: Declarative, great ergonomics for entrance/hover effects.

4) Removed React Three Fiber scene
   - Context: `ThreeScene` + `EldorModel` were present but unused; removed to simplify the codebase.
   - Rationale: Reduce bundle size and complexity; revisit only if 3D is a requirement.

5) Env validation with `@t3-oss/env-nextjs`
   - Rationale: Type-safe env handling during builds/runtime.

Open Questions

- Add image optimization (Next/Image) and metadata component?
