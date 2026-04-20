# personal-site

Peter Keppeler's personal site and technical blog.

## What this is

A minimal static site: a short bio, links, a reverse-chronological blog, and
a small collection of standalone browser tools. Posts are written in markdown
and rendered to static HTML at build time. There is no database, no CMS, no
server-side code, and no client-side JavaScript on the default pages. Tools
under `/tools/` opt in to client-side JS and a service worker so they can be
installed and used offline. The HTML that reaches your browser is the HTML
that was built on push.

## Tech stack

- **[Astro](https://astro.build)** — static site generator. Markdown content,
  `.astro` templates, zero client-side JavaScript by default.
- **[pnpm](https://pnpm.io)** — package manager (managed via
  [Corepack](https://nodejs.org/api/corepack.html), version pinned in
  `package.json`).
- **[Shiki](https://shiki.style)** — build-time syntax highlighting for code
  blocks (bundled with Astro).
- **[@astrojs/rss](https://docs.astro.build/en/recipes/rss/)** — RSS feed
  generation.
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**
  — sitemap generation.
- **[Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)**
  — hosting. Global edge network, automatic SSL. Deployed via
  [Wrangler](https://developers.cloudflare.com/workers/wrangler/) from a
  GitHub Actions workflow on push to `main`.

One hand-written `global.css` file. No Tailwind, no CSS-in-JS, no component
library. No dark-mode toggle, no hamburger menu.

## Local development

Requires Node 22.x. Use `nvm`, `fnm`, or `asdf` to match `.nvmrc`:

```sh
nvm use   # or: fnm use
```

Enable Corepack (once per machine) so `pnpm` is available at the version
pinned in `package.json`:

```sh
corepack enable
```

Install dependencies:

```sh
pnpm install --frozen-lockfile
```

Run the dev server (hot reload, preview at <http://localhost:4321>):

```sh
pnpm dev
```

Build the production site to `dist/`:

```sh
pnpm build
```

Preview the production build locally:

```sh
pnpm preview
```

## Writing a post

1. Create a new file in `src/content/posts/`, e.g.
   `src/content/posts/my-new-post.md`.
2. Add frontmatter:

   ```markdown
   ---
   title: "My new post"
   description: "One-sentence summary used for SEO and the post list."
   pubDate: 2026-04-10
   draft: false
   ---

   Post body in standard markdown.
   ```

3. Write the body in plain markdown. Code fences with a language tag
   (` ```python `, ` ```go `, etc.) are syntax-highlighted at build time.
4. Preview with `pnpm dev`.
5. Commit and push to `main`. The GitHub Actions deploy workflow builds
   and deploys to Cloudflare Workers automatically.

Set `draft: true` to exclude a post from builds while you're still writing
it. Drafts are hidden from the index, individual pages, and the RSS feed.

## Project layout

```
.
├── astro.config.mjs         # Astro config (site URL, integrations, Shiki theme)
├── wrangler.jsonc           # Cloudflare Workers config (Static Assets)
├── public/                  # Static assets copied as-is to dist/
│   └── favicon.svg
├── src/
│   ├── content.config.ts    # Posts collection schema (frontmatter types)
│   ├── content/
│   │   └── posts/           # Markdown posts go here
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML skeleton: head, meta, OG tags, nav, footer
│   ├── pages/
│   │   ├── index.astro      # Home page (bio + recent posts)
│   │   ├── posts/
│   │   │   ├── index.astro  # Blog index (all posts)
│   │   │   └── [...slug].astro  # Individual post page
│   │   └── rss.xml.js       # RSS feed
│   └── styles/
│       └── global.css       # The only CSS file
├── .github/
│   ├── dependabot.yml       # Weekly grouped dependency updates
│   └── workflows/
│       └── deploy.yml       # Build + deploy to Cloudflare Workers on push to main
├── .nvmrc                   # Node version pin
├── .npmrc                   # engine-strict enforcement
├── package.json             # Deps, scripts, Node + pnpm version pins
├── pnpm-lock.yaml           # Committed, frozen lockfile
├── tsconfig.json
├── CLAUDE.md                # Project constraints and hygiene rules
└── README.md                # This file
```

## Deployment (Cloudflare Workers Static Assets)

The site is deployed as a Cloudflare Worker serving static assets directly
from `dist/`. There is no server-side code; the Worker config in
`wrangler.jsonc` points Cloudflare at the built output and nothing more.

Deploys happen automatically via `.github/workflows/deploy.yml` on push to
`main`. The workflow installs deps with `--frozen-lockfile`, runs
`pnpm build`, and then `pnpm exec wrangler deploy`.

Required GitHub Actions repository secrets:

- `CLOUDFLARE_API_TOKEN` — scoped token with `Account · Workers Scripts ·
  Edit` and `Account · Account Settings · Read`. See
  [Cloudflare's API token docs](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/).
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account ID (visible in the
  dashboard right sidebar under "API").

Custom domains (`pkepps.com`, `www.pkepps.com`) are attached to the Worker
via the Cloudflare dashboard under **Workers & Pages → personal-site →
Settings → Domains & Routes**. DNS and SSL are managed automatically.

Manual deploy from a local checkout (requires `wrangler login` or the env
vars above):

```sh
pnpm build
pnpm deploy
```

Before the first deploy to a new domain, update `site` in `astro.config.mjs`
to the real production domain (it's used for absolute URLs in the RSS feed,
sitemap, and Open Graph tags).

## Offline tools (PWA)

Client-side tools under `/tools/` can be installed as standalone
PWAs on supported devices. A site-wide service worker caches assets
for offline use. The site itself has no root manifest by design —
install prompts are scoped to individual tools that opt in. See
CLAUDE.md for the pattern.

## Security hygiene

See `CLAUDE.md` for the full list of project constraints. Short version:

- pnpm default-deny on lifecycle scripts (`onlyBuiltDependencies` allow-list).
- `pnpm install --frozen-lockfile` locally and in CI. Lockfile is committed.
- Node 22.x pinned via `engines` + `.nvmrc` + `engine-strict=true`.
- pnpm version pinned via `packageManager` field (Corepack).
- Dependabot opens weekly grouped PRs. **No auto-merge.** Review lockfile
  diffs before merging.
- Minimum dependencies. Prefer official `@astrojs/*` integrations over
  third-party.
