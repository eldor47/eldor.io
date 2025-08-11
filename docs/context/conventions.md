# Conventions

Code

- TypeScript strict mode; prefer explicit types for props and module exports.
- Use named exports for reusable pieces; default export acceptable for page-level or single-use components.
- Keep components small and focused; colocate styles and logic.

Imports

- Use path alias `~/*` for `src/*` when convenient.
- Prefer type-only imports where appropriate (lint rule enforces this).

Styling

- Tailwind for layout/spacing/typography; avoid ad-hoc inline styles unless necessary.
- Keep global CSS minimal and thematic (variables, fonts, resets).

UI/UX

- Use Framer Motion for entrance/hover animations; keep durations subtle (0.3–0.6s).
- Ensure sufficient color contrast; current theme is dark purple.

3D

- `@react-three/fiber` with `@react-three/drei` helpers.
- Manage performance: conditionally mount heavy scenes, consider reduced effects on low-end devices.

Accessibility & SEO

- Provide descriptive `alt` text for images.
- Use Next.js `<Head>` for titles/metadata per route.

