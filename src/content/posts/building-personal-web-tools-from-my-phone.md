---
title: "Building Personal Web Tools From My Phone, Starting With an Offline Markdown Viewer"
description: "I built a markdown viewer, then turned it into an installable PWA that works offline. The real thing I built is the pattern — Claude Code, Astro, Cloudflare Pages, and GitHub on mobile — for shipping personal tools from my phone in an evening."
pubDate: 2026-04-17
---

I built a markdown viewer for my phone last week, then made it work offline. The viewer took an afternoon. The offline conversion took another. The real thing I built, though, is the pattern: a stack that turns "I wish a tool existed" into "the tool is on my home screen and works on a plane" in the span of an evening — entirely from my phone, entirely through a terminal running in a chat window.

This post is about that pattern. The markdown viewer is just Exhibit A.

## The motivating case

A few weeks ago my brother sent me a markdown file — a Claude-generated plan for a project we're starting to ideate on together. I opened it on my phone. My phone couldn't render it.

The options, all bad:

- **Open it as plain text.** Defeats the point. I wanted it rendered.
- **Paste it into Claude and ask it to render.** Requires the network. Also, using an LLM as a markdown viewer is a pretty dumb workflow.
- **Third-party "markdown viewer" website or app.** Who knows what they're doing with my files, my attention, or my data.
- **Convert to PDF first.** This is what I've been doing when I send artifacts to non-technical people. But markdown is increasingly the AI-native artifact format — lightweight, easy to parse, easy to edit. If my brother and I are going to collaborate on AI-heavy projects, we should just be able to send each other .md files.

Safest, cleanest bet was to roll my own. It's at [/tools/viewer](/tools/viewer/) — paste or drop a .md file, see it rendered in the same typography as the rest of the site.

One Claude Code session, one PR, one deploy. Done.

## Offline is a principle, not a feature

Then I wanted it to work on a plane.

Offline isn't something I bolt on. It's a principle. Every app I depend on has some subset of functionality that quietly falls over when the network does, and it's almost always worse than it needs to be. Spotify's "offline mode" leaves much to be desired — if my phone is on airplane mode but Spotify isn't explicitly set offline, the app spins forever instead of noticing there's no internet and short-circuiting to a better behavior. The Claude mobile app re-fetches my current conversation over the network every time I switch back into it. How is that not cached?

None of this is a hard problem. It's just not prioritized. When I build my own tools, it's going to be prioritized.

A client-side markdown viewer has no business being online-only. Once the page has loaded once, there's no server it needs to talk to. So the requirement was simple: installable on my phone like a native app, works in airplane mode, behaves the way I want because I built it.

That's what a PWA is. One codebase, one deployment, a home-screen icon, and a service worker doing the offline work.

## Per-tool PWAs, not site-wide

The blog and homepage are **not** installable. Only tools are.

The site gets one site-wide auto-generated service worker (every tool inherits offline caching for free), but no root manifest. Each tool gets its own `manifest.webmanifest` at `/tools/<slug>/`, with its own name, icons, and scope. A tool opts in by adding one `<link>` tag.

I chose per-tool from the start to preserve optionality. If I build a heavier tool later — something that really deserves its own identity — it can be its own installed app without having to un-glue it from a monolith. Per-tool-now is the same work as monolithic-now; per-tool-later is hard.

It also keeps the blog honest. Blog visitors ship zero client JS and never see an install prompt. The `/tools` section is the only place on the site where any of this PWA machinery is visible.

## The stack that makes this fast

Here's the part I actually want to talk about. The reason the viewer went from "annoyance on my phone" to "installable offline app" in two short sessions is that every piece of the stack is optimized for a short mobile iteration loop:

- **Claude Code in the mobile app.** A real terminal, remote. Reads my repo, writes files, runs commands. I can ship code without ever touching a laptop.
- **Astro.** Static output, zero JS by default, file-based routing. Adding a tool is adding an `.astro` page. No build config to touch, no framework to argue with.
- **Cloudflare Pages.** Free hosting. Push to `main`, live in a minute. No staging dance, no deploy pipeline, no infra to maintain.
- **GitHub mobile app.** PR diffs are genuinely readable on a phone when files are small. Every Claude Code change goes through a PR I can review from the couch.
- **`@vite-pwa/astro`.** Service worker auto-generation, per-tool manifests, offline caching — one config block.

Any client-side JS tool that fits in a single page can be built and shipped through this loop. Idea → deployed → installed on my phone → in use. Minutes, not hours. None of it requires a desktop.

AI is the missing piece that makes this actually work. A year ago, a project like this would have been a half-day of fighting CSS and reading service-worker docs on a phone screen. With Claude Code, it's a conversation. The frontend bits I don't know — and I'm a backend engineer, so that's most of them — I can ask about and review as we go. Claude writes, I read every diff, I learn the parts I want to learn, and the tool ships.

## A few surprises

- **Chrome's "Install app" is a first-class experience on mobile.** Tap a button, app on your home screen. I expected it to feel more obscure. The UX is genuinely good.
- **PWAs aren't more common than they are.** Given how nice this tech is for lightweight tools and reading apps, I don't understand why more sites aren't installable.
- **Chrome's "Universal Install" fallback bit me.** If a page has a service worker but no manifest, Chrome still offers to install it — which is how my homepage briefly became installable. Fix: only register the service worker on tool pages.
- **Precache scope and manifest scope are independent.** The service worker caches whatever files you tell it to (I told it to cache the whole site); the manifest `scope` is just the app boundary for the installed experience. Two separate knobs. Took me a minute.

## Built from my phone (again)

Like the [last post](/posts/i-built-this-site-entirely-from-my-phone/), this was built entirely on a Galaxy S26. Couch, bus, bed, in the margins.

One caveat: I did open Chrome DevTools on a laptop exactly once, to sanity-check that the "Application" tab was detecting the PWA correctly. I couldn't find an equivalent on mobile. If you know one, tell me.

The project took three sessions: a Claude Code session to build the viewer, a Claude chat to figure out what a PWA even is and what architecture fit, and a second Claude Code session to implement the PWA layer. The middle chat was the eng-review-planning phase — it let me hand Claude Code a tight, informed prompt the second time instead of making architecture decisions on the fly.

## How to do this yourself

Short version for an Astro site:

1. One site-wide service worker via `@vite-pwa/astro`. Set `manifest: false` — no root manifest.
2. Per-tool `manifest.webmanifest` at `public/tools/<slug>/`, with `start_url` and `scope` both set to `/tools/<slug>/`.
3. On the tool page only, link the manifest and register the service worker (via a named `<head>` slot in your layout).
4. Generate 192 / 512 / 512-maskable PNG icons. I wrote a small `scripts/generate-tool-icons.mjs` on top of `sharp`.
5. Verify in Chrome DevTools → Application.

Non-installable tools skip 2–4 and stay plain `.astro` pages. The full checklist lives in my [`CLAUDE.md`](https://github.com/pkeppeler/personal-site/blob/main/CLAUDE.md) if you want to steal the pattern.

## What's next

The point of having a stack is using it. My heuristic going forward: every time I reach for some random third-party web tool and feel weird about it, that's a candidate to roll my own. The shortlist:

- A **markdown-to-PDF** converter, for the non-technical-collaborator case.
- A **YouTube-to-mp3** downloader, because every existing one is sketchy.
- An **RSS aggregator**, so I can follow blogs without an algorithm choosing for me.

The barrier used to be "this is a whole weekend project on a laptop." Now it's an evening on the couch with my phone.
