---
title: "Building Personal Web Tools From My Phone, Starting With an Offline Markdown Viewer"
description: "AI tools like Claude Code make it cheap enough to hand-roll your own small web tools instead of relying on potentially sketchy third-party sites. I built a markdown viewer, then turned it into an installable PWA that works offline — entirely from my phone."
pubDate: 2026-04-17
---

This week I built a markdown viewer for my phone, then made it an installable PWA that works offline. The viewer took an afternoon. The offline conversion took another. Both were built in 15- and 30-minute sessions on the couch, on the bus, and waiting for the kettle.

The real thing I built, though, is the pattern: AI tools like Claude Code make it cheap enough to hand-roll your own small web tools that "find a third-party site for this" shouldn't be the default anymore. Combined with a stack built for short mobile iteration, "I wish a tool existed" becomes "the tool is on my home screen and works on a plane" in one evening, from a phone.

This post is about that pattern. The markdown viewer is just Exhibit A.

## The motivating case

A few days ago my brother sent me a markdown file — a Claude-generated plan for a project we're starting to ideate on together. I tried to open it on my phone. My phone couldn't render it.

The workarounds I considered:

- **Open it as plain text.** Fine, but I wanted it rendered.
- **Paste it into Claude and ask it to render.** Works, but it's a heavy workflow for something this trivial, and it requires a network connection.
- **Use a third-party markdown viewer site or app.** Likely works, but I have no idea what any of them do with my files or data.
- **Convert it to a PDF first.** This is what I do when I send artifacts to non-technical collaborators. But markdown is increasingly the AI-native artifact format — lightweight, easy to parse, easy to edit. If my brother and I are going to work on AI-heavy projects together, we should just be able to send each other `.md` files.

I'm sure there are reputable markdown viewers out there, or ones built into platforms I already use. The point here wasn't that none exist — it was doing the project as an exercise in rolling my own.

So I did. It's at [/tools/viewer](/tools/viewer/). One Claude Code session, one PR reviewed on the bus, one push-to-deploy.

## Offline is a principle, not a feature

Then I wanted to use it on a plane.

Offline isn't something I bolt on. Every app I depend on has some subset of functionality that quietly falls over when the network does, and it's almost always worse than it needs to be. Spotify's "offline mode" leaves much to be desired — if my phone is on airplane mode but Spotify isn't explicitly set offline, the app spins forever instead of short-circuiting to a better behavior. The Claude mobile app re-fetches my current conversation over the network every time I switch back in. None of this is a hard problem. It's just not prioritized.

When I build my own tools, it's going to be prioritized. A client-side markdown viewer has no business being online-only.

That's what a PWA gives you: a home-screen icon, a service worker doing the offline work, one codebase behind all of it. I only want to maintain one thing.

## Per-tool PWAs, not site-wide

Only `/tools/*` pages are installable. The blog and homepage aren't.

One site-wide service worker (tools inherit offline caching for free), no root manifest. Each tool gets its own `manifest.webmanifest` at `/tools/<slug>/` and opts in with a single `<link>` tag in its head.

Per-tool from the start, for optionality. If I build a heavier tool later that deserves its own identity, it can be its own installed app without un-gluing from a monolith. Per-tool-now is the same work as monolithic-now; per-tool-later is hard.

## The stack that makes this fast

The viewer went from "annoyance on my phone" to "installable offline app" in two short sessions because every piece of the stack is optimized for a short mobile loop:

- **Claude Code in the mobile app.** Real terminal, remote. Reads the repo, writes files, runs commands.
- **Astro.** Static output, zero JS by default, file-based routing. A new tool is a new `.astro` page.
- **Cloudflare Pages.** Free hosting. Push to `main`, live in a minute.
- **GitHub mobile.** PR diffs are genuinely readable on a phone when files are small.
- **`@vite-pwa/astro`.** Service worker generation, per-tool manifests, offline caching — one config block.

AI is what makes this loop close. I'm a backend engineer; the frontend bits I don't know (service workers, CSS, PWA minutiae) I ask Claude about and review as we go. A year ago this would have been a half-day of reading docs on a phone screen. Now it's a conversation I can have while the bus moves.

## What surprised me

Chrome's "Install app" is a genuinely good first-class experience on mobile. Tap a button, app on your home screen. I expected it to feel more obscure. Given how polished the experience is, I don't fully understand why more lightweight tools and reading apps aren't installable.

## Still no laptop

Like the [last post](/posts/i-built-this-site-entirely-from-my-phone/), this was built on a Galaxy S26. Couch, bus, bed, the margins of a day. I've started treating it as a rule: whatever this site needs, I should be able to do from my phone. That rule is part of the reason I built the tool this way. Giving myself a laptop would have meant a bigger tool, a fancier build system, more dependencies, probably a service I don't need. Phone-only keeps the scope honest.

One caveat: I did open Chrome DevTools on a laptop exactly once, to sanity-check that the "Application" tab was detecting the PWA correctly. I haven't found a mobile-only way to inspect service-worker state and installability yet.

The project took three sessions: Claude Code to build the viewer, a Claude chat to figure out what a PWA even is, a second Claude Code session to implement the PWA layer. The middle chat was the eng-review-planning phase — it let me hand Claude Code a clean, informed prompt the second time instead of making architecture decisions on the fly.

## The approach, if you want to copy it

The useful takeaway isn't my specific config. It's that a browser-based, client-side JS tool can become an installable, offline-capable, app-like thing with surprisingly little effort. You don't need native frameworks, app store accounts, or a backend. The ingredients:

- **A static site host that deploys on push.** Cloudflare Pages is free and fast. Vercel, Netlify, or GitHub Pages work too.
- **A PWA wrapper that generates a service worker and per-tool manifests.** I use `@vite-pwa/astro`, but any Workbox-based setup does the same job.
- **An AI coding assistant that runs on your phone.** Claude Code in the mobile app lets me ship code from wherever. The parts of the stack I don't want to become an expert in (service workers, CSS, PWA minutiae) are a conversation away.

That's most of the leverage. The result is a tool that loads and iterates as fast as a webpage, installs to your phone like an app, and works offline like it was always meant to.

The per-tool checklist I use — exact file layout, manifest fields, icon generation — is in my [`CLAUDE.md`](https://github.com/pkeppeler/personal-site/blob/main/CLAUDE.md) if you want the specifics.

## What's next

The heuristic going forward: every time I reach for a random third-party web tool and feel weird about it, that's a candidate to roll my own. The shortlist:

- **Markdown-to-PDF** converter, for non-technical collaborators.
- **YouTube-to-mp3** downloader, because every existing one is sketchy.
- **RSS aggregator**, so I can follow blogs without an algorithm choosing for me.

The barrier used to be "this is a whole weekend project on a laptop." Now it's an evening on the couch with my phone.
