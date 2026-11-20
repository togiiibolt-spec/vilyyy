# VILY — Next.js project

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000

## Project structure

- `app/page.js` — Next.js App Router page.
- `app/layout.js` — app metadata and root layout.
- `app/globals.css` — full-screen shell styling.
- `public/vily.html` — original VILY interface and its existing browser-side logic.

## Important implementation note

This is a Next.js App Router project that hosts the supplied original HTML app in a full-screen iframe. This compatibility approach preserves the original DOM-based JavaScript, styling, and interactions instead of pretending that the entire 1,865-line app has been rewritten into native React components. It gives you a runnable Next.js project now; a full component-by-component React migration can be done as a separate refactor.

The supplied HTML includes a TMDB API key in client-side JavaScript. Treat it as public once deployed; rotate it if it is private or restricted, and use a server-side API route with an environment variable for production.
