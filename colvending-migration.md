# Colvending — Static Migration Guide
## TanStack Start → Vite SPA → GitHub Pages

---

## Overview

The project is a pure landing page accidentally scaffolded on an SSR framework (TanStack Start + Nitro). There is no server-side logic anywhere in `src/`. The goal is to strip the SSR layer and produce a standard Vite SPA that builds to a single `dist/` folder deployable on GitHub Pages. All UI, animations, and assets are preserved without modification.

---

## Step 1 — Uninstall SSR packages

```bash
npm uninstall @tanstack/react-start @lovable.dev/vite-tanstack-config @tanstack/router-plugin nitro
```

---

## Step 2 — Replace `vite.config.ts`

Delete the entire file and replace with:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/colvending/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
```

> If you use a custom domain, remove `base: "/colvending/"` entirely.

---

## Step 3 — Add `index.html` at project root

TanStack Start generates this file dynamically at runtime. For a static SPA it must exist as a file. Create it at the project root:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Colvending</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## Step 4 — Fix `src/router.tsx`

Remove any TanStack Start imports (`createStartRouter`, `StartClient`, etc.) and replace with pure client-side router:

```tsx
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
```

---

## Step 5 — Fix `src/main.tsx`

Remove `hydrateRoot` or any SSR hydration call. Use standard `createRoot`:

```tsx
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

---

## Step 6 — Update `package.json` scripts

Replace the `scripts` block with:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "lint": "eslint .",
  "deploy": "gh-pages -d dist"
}
```

---

## Step 7 — Delete obsolete files

```bash
rm vercel.json wrangler.toml bunfig.toml
```

---

## Step 8 — Verify the build

```bash
npm run build
```

The `dist/` folder must contain **only**:
- `index.html`
- `assets/` (JS bundles, CSS, images)

If a `dist/server/` folder appears, Step 2 was not applied correctly.

```bash
npm run preview
```

Open `http://localhost:4173/colvending/` and confirm the site loads fully.

---

## Step 9 — Deploy to GitHub Pages

**Option A — manual (one-time)**

```bash
npm run deploy
```

Then in GitHub: **Settings → Pages → Source → `gh-pages` branch → Save**.

---

**Option B — automated via GitHub Actions**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Every push to `main` triggers a new deployment automatically.

---

## What is NOT touched

| Area | Status |
|---|---|
| `src/components/` | Unchanged — all React components are pure client-side |
| `src/styles.css` | Unchanged — Tailwind 4 config |
| `components.json` | Unchanged — shadcn/ui config |
| `tsconfig.json` | Unchanged |
| Machine images (JPG) | Unchanged — already in `src/assets/` or referenced correctly |
| All UI libraries | Unchanged — shadcn/ui, framer-motion, recharts, lucide all work in SPA mode |

---

## Final checklist

```
[ ] npm uninstall completed — no @tanstack/react-start in node_modules
[ ] vite.config.ts replaced — no reference to @lovable.dev or nitro
[ ] index.html exists at project root
[ ] src/router.tsx uses createRouter from @tanstack/react-router only
[ ] src/main.tsx uses ReactDOM.createRoot (not hydrateRoot)
[ ] package.json scripts updated
[ ] vercel.json, wrangler.toml, bunfig.toml deleted
[ ] npm run build produces dist/ with no dist/server/ subfolder
[ ] npm run preview loads site at /colvending/
[ ] GitHub Pages source set to gh-pages branch
[ ] Live URL confirmed: https://<username>.github.io/colvending/
```
