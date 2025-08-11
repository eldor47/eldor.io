# Dev Guide

Prereqs

- Node.js 18+ recommended
- npm (using `package-lock.json`)

Commands

- `npm run dev`: start Next.js dev server at http://localhost:3000
- `npm run lint`: run ESLint with Next.js config
- `npm run build`: create production build
- `npm start`: run production server from `.next`
- `npm run format` / `format:check`: Prettier write/check

Environment

- Env schema: `src/env.mjs` (server vars only by default). Use `SKIP_ENV_VALIDATION=1` to bypass during builds if needed.
- Local env: `.env` (example in `.env.example`).

Formatting & Linting

- Prettier with Tailwind plugin standardizes class ordering. Most editors auto-format on save if configured.
- ESLint is type-aware; fix warnings regularly to keep code quality high.

Git hooks (optional)

- Pre-commit hooks are configured via Husky + lint-staged. After installing deps, run:
  - `npm run prepare` (initializes Husky)
  - `npx husky add .husky/pre-commit "npx lint-staged"`

Typical Flow

1) Edit components in `src/components/*`
2) Style with Tailwind + globals
3) Verify in browser; iterate
4) Keep docs in `docs/context/*` updated alongside changes
