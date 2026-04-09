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

### No design flourishes the user didn't ask for

Do not add a dark-mode toggle. Do not add a hamburger menu. Do not add
animations, page transitions, scroll effects, progress bars, reading-time
estimates, related-posts widgets, "share on Twitter" buttons, comments, view
counts, or social-embed cards. The user explicitly said no to this class of
thing. If you think something is a good idea anyway, ask first.

### No analytics, cookies, or tracking

The site does not include any analytics. It does not set any cookies. It does
not load any third-party scripts, fonts, or resources. If the user eventually
wants analytics, it will be something privacy-respecting like Plausible,
added deliberately — don't pre-empt that.

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

### Dependency minimalism

- Prefer zero-dependency solutions. Every dependency is attack surface and
  future maintenance burden.
- Prefer official `@astrojs/*` integrations over third-party Astro plugins.
- Before adding any new dependency, ask: can this be solved in 20 lines of
  hand-written code? If yes, write the 20 lines.
- Do not install anything "for later." YAGNI. Add dependencies the day you
  need them.

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

## Branch

Development happens on `claude/minimal-tech-blog-fmbwZ` until the initial
scaffold is merged to `main`. After that, use short-lived feature branches
off `main`.

## When in doubt

Prefer less. Fewer dependencies, fewer lines, fewer features, fewer files.
The user is a backend/infra engineer who values simplicity and correctness
over cleverness. If a change adds complexity without clearly earning its
keep, don't make the change.
