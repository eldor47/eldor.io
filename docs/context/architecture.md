# Architecture

Overview

- Routing: Next.js pages router (`src/pages`) with a single route `/`.
- Composition: One top-level page (`index.tsx`) delegates to `src/components/Home`.
- Sections: Home contains hero, projects grid, contact, and footer; internal anchors `#home`, `#projects`, `#contact`.
- 3D: Previously included a R3F scene (`ThreeScene`, `EldorModel`); these were removed as unused to simplify the project.

Key Files

- `src/pages/_app.tsx`: imports global styles and renders the current page.
- `src/pages/index.tsx`: renders the `Home` component.
- `src/components/Navbar.tsx`: fixed top nav linking to section anchors.
- `src/components/Home.tsx`: page sections, Framer Motion animations; renders projects from `src/data/projects`.
- `src/components/ProjectCard.tsx`: project item with image, title, description, animated hover.
- Removed components: `src/components/ThreeScene.tsx` and `src/components/EldorModel.tsx` (cleaned up as unused).
- `src/styles/globals.css`: Tailwind base + CSS variables, font face, scrollbar styling.
- `src/styles/globals.css`: Tailwind base + CSS variables, scrollbar styling; font provided via `next/font`.

Data Flow

- Static content: Projects list is hardcoded in `Home.tsx`.
- No external data fetching or server APIs.

Environment

- `src/env.mjs`: env schema using `@t3-oss/env-nextjs` and `zod`.
- `next.config.mjs`: imports env validation at startup, sets locale config.

Styling

- Tailwind utility classes dominate component styling.
- Global CSS variables (purple/dark theme) defined in `globals.css`.

Assets

- Images: `public/images/*.png` used by `ProjectCard`.
- Fonts: `public/fonts/RedHatDisplay.ttf` via `@font-face` in globals.
- Assets cleanup: Removed `public/eldorgltf.gltf` and `public/eldorgltf.bin` since 3D is not in use.

Notes / Opportunities

- If 3D is reintroduced later, decide where/how to mount it and manage performance; document asset source (local vs remote) to avoid duplication.
- Consider moving the projects list to a JSON/YAML file or CMS if it will grow.
