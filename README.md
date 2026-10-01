# Personal site: Opakrwoth Byron Peter

Portfolio for a frontend developer working in React and TypeScript.
Built with Vite, React 19, TypeScript and Tailwind CSS v4.

## Why it is built this way

**Content is data, not markup.** Everything the page says lives in
[`src/data/content.ts`](src/data/content.ts) as typed objects. Components render that
data and nothing else, so adding a project or a contribution is an edit to one file,
and a typo in a field name is a build error rather than a missing section.

**Colour is semantic.** No component names a hex value. Each one references a token
(`bg-surface`, `text-muted`, `border-line`) that resolves through a CSS variable, so a
theme is one block of overrides in [`src/index.css`](src/index.css) rather than a sweep
through every file.

**The theme is resolved before first paint.** An inline script in `index.html` reads the
stored preference and sets `data-theme` on `<html>` before React mounts, so there is no
flash of the wrong theme on load. `useTheme` reads that as its initial state instead of
deciding again.

**Accessibility is checked, not claimed.** Every text/background pair meets WCAG AA, and
most meet AAA. Semantic landmarks, a skip link, one visible focus treatment for every
interactive element, and `prefers-reduced-motion` honoured throughout.

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # typecheck + production build to dist/
pnpm preview      # serve the build
```

## Structure

```
src/
  data/content.ts     all copy and links, typed
  components/         one file per section
  hooks/useTheme.ts   theme state, persisted to localStorage
  index.css           design tokens and both themes
```
