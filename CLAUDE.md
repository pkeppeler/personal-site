# CLAUDE.md

Project constraints and conventions for this repo. Read this before making
changes. These decisions were made deliberately; don't undo them without a
good reason and a discussion with the owner.

## Purpose

This is Peter Keppeler's personal site and technical blog. Its job is to be
the canonical public presence: a short bio, links, and a place to publish
long-form technical writing. Text-first. Built to last years without
maintenance. Readable on a slow connection.

## Tech stack (chosen, don't change without discussion)

- **Astro** — static site generator. Markdown content, `.astro` templates.
- **pnpm** — package manager, via Corepack. Version pinned in `package.json`.
- **Shiki** — syntax highlighting (bundled with Astro, build-time, no client JS).
- **@astrojs/rss** and **@astrojs/sitemap** — official integrations only.
- **Cloudflare Pages** — hosting.
- **One hand-written `global.css`**. No Tailwind, no CSS framework, no
  component library.

## Hard rules (don't break these)

### Zero client-side JavaScript by default

The output of `pnpm build` should contain **no `<script>` tags** on any page
unless a specific page explicitly opts in to an interactive React island (and
there are none right now). If you add a `<script>` to the base layout, you're
doing the wrong thing. This is a text site; the browser's job is to render
HTML and stop.

### No themes, no CSS frameworks

Do not install Tailwind, DaisyUI, UnoCSS, Bootstrap, Pico, or any other CSS
framework or utility-class library. Do not install an Astro theme. The site's
distinctiveness comes from hand-written CSS and hand-written `.astro`
templates. There is exactly one CSS file (`src/styles/global.css`) and it
stays that way unless there's a compelling reason to split it.

### No design flourishes without sign-off

The user is in charge of the site's look and feel. Do not add design
flourishes unilaterally — not because flourishes are forbidden, but because
the user wants to be in the loop on aesthetic decisions. If you think a
visual element would improve the site, propose it and wait for an explicit
yes before implementing it. This includes (non-exhaustively) animations,
page transitions, scroll effects, progress bars, reading-time estimates,
related-posts widgets, share buttons, comments, view counts, social-embed
cards, custom cursors, and parallax anything.

Things the user has literally said no to — do not propose these again
without a compelling new reason:

- Dark-mode toggles
- Hamburger menus
- Tailwind or any CSS framework
- Client-side JavaScript on default pages
- Analytics, cookies, or tracking
- Web fonts / external font loading
- Templates that look like every other developer blog

### No cookies or client-side tracking

The site does not set cookies. It does not load any third-party scripts,
fonts, or resources. It does not ship any JavaScript to visitors for
tracking or analytics.

Cloudflare server-side Web Analytics is enabled. It counts aggregate page
views from the CDN request logs Cloudflare already keeps to serve the
site. No cookies. No client-side JavaScript. No personal data collection.
If you change this setup, keep those three properties intact: no cookies,
no client JS, no personal data. Do not add any other analytics tool.

### Content portability

Posts are the canonical data; the generator is a swappable implementation.
Keep posts portable across markdown-based static site generators:

- **Only standard markdown in post bodies.** No Astro-specific `.mdx`
  components embedded in posts. No shortcodes. No JSX inside markdown. If a
  post needs something markdown can't express, write raw HTML in the markdown
  file — every SSG passes raw HTML through.
- Frontmatter fields (`title`, `description`, `pubDate`, `updatedDate`,
  `draft`) are the stable interface. Don't add generator-specific frontmatter
  fields to posts without updating `src/content.config.ts` and thinking about
  whether the new field is portable.
- Do not put logic in `src/content/`. It's data, not code.

## Security / supply chain hygiene

### Package manager

- **pnpm only.** Do not add `package-lock.json`, `yarn.lock`, or `bun.lockb`.
- pnpm version is pinned via the `packageManager` field in `package.json` and
  managed through Corepack.
- **Lockfile (`pnpm-lock.yaml`) is committed** and is the source of truth.
  Review lockfile diffs in PRs — large unexplained changes are a red flag.
- **Always install with `pnpm install --frozen-lockfile`** locally and in CI.
  Never use plain `pnpm install` in automated contexts. Plain `pnpm install`
  is only acceptable when deliberately adding or updating a dependency.

### Lifecycle scripts

- `package.json` contains a `pnpm.onlyBuiltDependencies` allow-list. It
  **starts empty** and stays as small as possible. Lifecycle scripts
  (install/postinstall) are the most common supply-chain attack vector.
- If an install fails because a package wants to run scripts, investigate
  before adding it to the allow-list:
  1. Check what the script does (read the package source).
  2. Check if there's a way to use the package without the script.
  3. Only add to `onlyBuiltDependencies` if the script is necessary and
     understood.
- When you add a package to the allow-list, add a brief comment in a
  commit message or nearby explaining why it's necessary.

### Dependency updates

- **Dependabot opens weekly grouped PRs** (see `.github/dependabot.yml`).
- **No auto-merge. Ever.** Every dependency update is reviewed by a human,
  including patch bumps. The point of having Dependabot is to surface
  updates, not to automate merging.
- When reviewing a Dependabot PR: read the changelogs of bumped packages,
  skim the lockfile diff for anything unexpected (new transitive deps,
  packages from unfamiliar authors), and run `pnpm build` locally before
  merging.
- Major version bumps get their own PR and careful review.

### Deliberate dependencies

Every dependency should earn its keep. The goal is _deliberate_ dependencies,
not _minimal_ dependencies — don't reinvent a mature library for a non-trivial
problem, but don't add a package for a five-line problem either. Before
adding a dependency, walk through these questions:

1. **Is it a well-defined, non-trivial problem** that a mature library
   solves better than you could (markdown parsing, RSS/XML generation,
   date/time parsing, cryptography, URL handling, image processing)? If
   yes, take the library.
2. **Is it a tiny one-off** you could write in ~20 lines (string formatting,
   one-shot array helpers, a single date format)? If yes, write the 20
   lines. Don't pull in `left-pad`.
3. **Is it first-party to something you already depend on** (e.g.
   `@astrojs/*` when Astro is already installed)? The marginal cost is
   small; trust is largely inherited from the parent. Prefer these over
   third-party alternatives that do the same thing.
4. **Is it a random community package** with a handful of stars, one
   maintainer, and no recent commits? High supply-chain risk regardless of
   size. Avoid, or vendor the relevant code directly into the repo.
5. **How much transitive fanout** does it bring? A package with 3 deps is
   very different from one with 300. Check `pnpm why <pkg>` or skim the
   lockfile diff before merging.
6. **Is there a zero-dep alternative** in the Node standard library or
   modern JS (`Intl.DateTimeFormat`, `crypto`, `url`, `path`, `fetch`,
   `Date`, `URL`)? If yes, prefer it.

Do not install anything "for later." Add dependencies the day you actually
use them, not the day you think you might.

### Node version

- Pinned to Node 22.x via three mechanisms working together:
  - `engines.node` in `package.json` (enforced by `engine-strict=true`)
  - `.nvmrc` (for local version managers and Cloudflare Pages)
  - `packageManager` field (for pnpm via Corepack)
- Bumping Node means updating all three in the same commit.

## Style and UX rules

- **Typography-first.** The site is optimized for reading prose and code.
- **Max content width is constrained** (`--measure` in `global.css`). Do not
  make lines longer. Long line lengths are bad for reading.
- **Mobile-first responsive via one `@media` query.** Do not add more
  breakpoints unless genuinely necessary.
- **Serif font for body text, monospace for code and nav.** Charter with
  system serif fallbacks. Do not pull in web fonts — no external requests.
- **Minimal color palette.** The CSS variables at the top of `global.css`
  are the full palette. Don't introduce new colors outside them.

## Build and deploy

- `pnpm dev` — dev server with hot reload at <http://localhost:4321>
- `pnpm build` — static build to `dist/`
- `pnpm preview` — preview built output
- Cloudflare Pages builds on push to `main`. Build command:
  `pnpm install --frozen-lockfile && pnpm build`. Output: `dist/`.

## When in doubt

Prefer less. Fewer dependencies, fewer lines, fewer features, fewer files.
The user is a backend/infra engineer who values simplicity and correctness
over cleverness. If a change adds complexity without clearly earning its
keep, don't make the change.

## Adding an installable (PWA) tool

The site uses a single auto-generated service worker (@vite-pwa/astro)
plus per-tool manifests. Installability is opt-in per tool. The
service worker is only registered on pages that opt in, so blog and
homepage visitors never see any install prompt (not even Chrome's
fallback "install this site" option) and ship zero client-side JS.

The SW is built to `/tools/sw.js` with browser scope `/tools/`
(see `astro.config.mjs`). Browser scope is the enforcement: the SW
physically cannot intercept requests outside `/tools/`, so the
homepage and blog stay SW-free even for visitors who previously
installed a tool. Do not move the SW back to the site root; doing
so would silently make every page SW-controlled and re-introduce
stale-content bugs on the homepage.

`public/sw.js` is a self-destroying migration shim left over from
the period when the SW was at site root. It unregisters itself and
clears caches on first activation. Once you're confident every prior
visitor has loaded the site at least once, delete it.

To add a new installable tool:

1. Create the page: `src/pages/tools/<slug>.astro` (flat, single-file;
   do not create a subdirectory).
2. Create the manifest: `public/tools/<slug>/manifest.webmanifest` with
   `start_url` and `scope` both set to `/tools/<slug>/`.
3. Generate icons: `npm run icons -- <slug>` (uses
   scripts/generate-tool-icons.mjs to produce 192, 512, and
   512-maskable PNGs from favicon.svg; pass a custom SVG path as
   the second arg if needed).
4. Link the manifest and the service-worker registration script in
   the tool's page head, via the BaseLayout named `head` slot:
     <link slot="head" rel="manifest" href="/tools/<slug>/manifest.webmanifest">
     <script slot="head" is:inline src="/registerSW.js"></script>
5. Build and verify in Chrome DevTools > Application that the page
   is installable and works offline after first load.

To add a non-installable tool, do only step 1. It stays pure static
HTML with no service worker and no install affordance.

The top nav is hidden inside installed PWAs via a
`@media (display-mode: standalone)` rule in global.css. Installed
tools feel self-contained; regular browser tabs are unaffected.

Do not add a root-level manifest. Do not link any manifest or the
register script from shared layouts. Either would make non-tool
pages installable (Chrome offers a fallback install for any page
with a service worker), which is not the intent.

## Writing blog posts

Before writing, editing, or reviewing any post in
`src/content/posts/`, read `blog-post-guidelines.md` in full. It
covers the pre-writing interview approach, the interview questions
to ask the author, tone and structure conventions, length targets,
and formatting rules (including the em-dash ban). Do not skip it or
try to infer the rules from context; the conventions have been
iterated on based on reader feedback.
