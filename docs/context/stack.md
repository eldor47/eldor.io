# Stack

- Framework: Next.js `^13.4.2` (pages router)
- Language: TypeScript `^5.0.4`
- UI: React `18.2.0`, Tailwind CSS `^3.3.0`
- Animation: Framer Motion `^12.5.0`
- 3D: `@react-three/fiber` `^8.13.6`, `@react-three/drei` `^9.80.1`, `three` `^0.155.0`
- Env validation: `@t3-oss/env-nextjs` + `zod`
- Linting: ESLint `^8.40.0` + `@typescript-eslint` rules, `eslint-config-next`
- Formatting: Prettier `^2.8.8` + `prettier-plugin-tailwindcss`
- Fonts: `next/font/local` for `RedHatDisplay` (loaded from `public/fonts`)

Config files

- `.eslintrc.cjs`: Type-aware linting, stylistic rules enabled
- `prettier.config.cjs`: Tailwind plugin enabled
- `tailwind.config.ts`: scans `./src/**/*.{js,ts,jsx,tsx}`
- `tsconfig.json`: strict, path alias `~/*` → `src/*`
- `next.config.mjs`: `reactStrictMode`, i18n `{ locales: ["en"], defaultLocale: "en" }`

Node version: not pinned in repo; use a modern LTS (e.g., 18+).
