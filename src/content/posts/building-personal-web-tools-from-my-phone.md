---
title: "Building Personal Web Tools From My Phone, Starting With an Offline Markdown Viewer"
description: "Why I stopped reaching for sketchy third-party markdown renderers and built my own — a PWA that installs to my home screen and works on a plane. Built entirely from my phone."
pubDate: 2026-04-17
---

A few weeks ago my brother sent me a markdown file — a Claude-generated plan for a project we're starting to ideate on together. I opened it on my phone. My phone couldn't render it.

I had options, all of them dumb:

- **Open it as plain text.** I wanted it rendered. That's the whole point of markdown.
- **Paste it into Claude and ask it to render.** Using an LLM as a markdown viewer is a pretty dumb workflow. Also requires internet.
- **Use some third-party "markdown viewer" app or site.** Who knows what those are doing with my data, my files, or my attention.
- **Convert it to a PDF first.** This is what I do when sending artifacts to non-technical people. But markdown is increasingly the AI-native artifact format — lightweight, easy to parse, easy to edit. If my brother and I are going to collaborate on AI-heavy projects, we should just be able to pass each other .md files.

Safest, cleanest bet was to roll my own. It lives at [/tools/viewer](/tools/viewer/). Paste or drop a .md file, see it rendered in the same typography as the rest of the site.

## Then I wanted it offline

One of my pet peeves with modern software is how much of it silently dies without a network connection. Spotify's "offline mode" leaves much to be desired. If my phone is on airplane mode but Spotify isn't explicitly set to offline, the app spins forever instead of noticing there's no internet and short-circuiting to a better end-user behavior. The Claude mobile app re-fetches my current conversation over the network every time I switch back to it — how is that not cached? Plane about to take off, subway with intermittent signal, anywhere with flaky wifi: half the apps I depend on quietly fall over.

None of this is a hard problem. It's just not prioritized.

My markdown viewer had no business being online-only. Once the page has loaded once, there's no server it needs to talk to. So: make it work fully offline, and make it feel like an app on my phone.

## Why a PWA

Three choices I considered:

1. **Native app.** Too heavy. App Store registration, platform-specific packaging, a whole new deployment story.
2. **Bookmarked webpage.** Doesn't stay available offline without a service worker — which is basically a PWA.
3. **PWA.** One codebase on my existing Astro + Cloudflare Pages setup. Installs to the home screen. Works offline.

I only want to maintain one thing. A PWA is a website you can "save offline as an app." Exactly what I needed.

## Per-tool, not site-wide

The unusual part: the blog and homepage are **not** installable. Only tools are.

The site gets one site-wide auto-generated service worker (so every tool inherits offline caching for free), but no root manifest. Each tool gets its own manifest under `/tools/<slug>/manifest.webmanifest` with its own name, icons, and scope. A tool opts in by adding one `<link>` tag.

I could have made the whole site one big PWA, but I wanted the optionality. If I build a heavier tool later — something that really earns its own identity — I want it to be its own app without having to un-glue it from a monolith. Per-tool now, per-tool forever. Cheap to start that way; expensive to migrate to later.

This also keeps the blog honest. Blog visitors ship zero client JS and never see an install prompt. The tools section is the only place on the site where any of this machinery is visible.

## A few surprises

- **Chrome's "Install app" is a first-class experience on mobile.** Tap a button, app on your home screen. I expected it to be more obscure. The UX is genuinely good.
- **PWAs aren't more common.** Given how nice the tech is for lightweight tools and reading apps, I don't understand why more sites aren't installable.
- **Chrome's "Universal Install" fallback bit me.** If a page has a service worker but no manifest, Chrome still offers to install it — which is how my homepage briefly became installable. Fix: only register the service worker on tool pages.
- **Precache scope and manifest scope are independent.** The service worker caches whatever files you tell it to (I told it to cache the whole site); the manifest `scope` is just the "app boundary" for the installed experience. Two separate knobs. Took me a minute.

## Built from my phone (again)

Like the [last post](/posts/i-built-this-site-entirely-from-my-phone/), this was built entirely from a Galaxy S26 — Claude Code in the mobile app, PR review in the GitHub app, deploys on push to Cloudflare Pages. Couch, bus, bed. The same micro-session workflow, filling the gaps.

One caveat: I did open Chrome DevTools on a laptop exactly once, to sanity-check that the "Application" tab was detecting the PWA correctly. I couldn't find an equivalent on mobile. If you know one, let me know.

The project took three sessions: a Claude Code session to build the viewer, an exploratory Claude chat to figure out what a PWA even was and what architecture fit, and a second Claude Code session to implement the PWA layer. The middle chat was the eng-review-planning phase — it let me hand Claude Code a clean, informed prompt the second time instead of making architecture decisions on the fly. In retrospect I could have done the same exploration inside Claude Code from the start, but separating "learn the problem space" from "build the thing" made the build session much tighter.

## How to do this yourself

The shortest version of the recipe, for an Astro site:

1. One site-wide service worker via `@vite-pwa/astro`. `manifest: false` — no root manifest.
2. Per-tool `manifest.webmanifest` under `public/tools/<slug>/`, with `start_url` and `scope` both set to `/tools/<slug>/`.
3. On the tool page only, link the manifest and register the service worker (via a named `<head>` slot in your layout).
4. Generate 192 / 512 / 512-maskable PNG icons. I wrote a small `scripts/generate-tool-icons.mjs` on top of `sharp`.
5. Verify in Chrome DevTools → Application.

Non-installable tools skip steps 2–4 and are just `.astro` pages. The full checklist lives in my [`CLAUDE.md`](https://github.com/pkeppeler/personal-site/blob/main/CLAUDE.md) if you want to steal the pattern.

## What's next

Now that I have a working pattern for offline-first single-purpose tools, I'll probably do this more. Every time I reach for some random third-party web tool and feel weird about it, that's a candidate to roll my own. Some ideas on the shortlist:

- A **markdown-to-PDF** converter, for when I'm sending artifacts to non-technical people.
- A **YouTube-to-mp3** downloader, because every existing one is sketchy.
- An **RSS aggregator**, because I keep meaning to follow more blogs without letting an algorithm choose for me.

The barrier used to be "this is a whole weekend project." With this pattern, it's more like an evening on the couch with my phone.
