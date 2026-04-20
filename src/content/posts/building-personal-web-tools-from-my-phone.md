---
title: "Building Personal Web Tools From My Phone, Starting With an Offline Markdown Viewer"
description: "AI tools like Claude Code make it cheap enough to hand-roll your own small web tools instead of relying on potentially sketchy third-party sites. I built a markdown viewer, then turned it into an installable PWA that works offline, entirely from my phone."
pubDate: 2026-04-18
updatedDate: 2026-04-20
authorship: ai-drafted
---

> _Editor's note, April 2026: Cloudflare now recommends Workers Static Assets for new static sites, so I migrated this site off Pages. The post below describes the stack as it was at the time of writing._

This week I built a markdown viewer for my phone, then turned it into an installable PWA that works offline. I did it in two short evenings, broken into 15- and 30-minute sessions during a trip to Milan: on a train into the city, in the back of a taxi, waiting at my gate for a flight, and over a solo espresso at a cafe.

The real thing I built, though, is the pattern. AI tools like Claude Code make it cheap enough to hand-roll your own small web tools that "find a third-party site for this" shouldn't be the default anymore. And the classic "write program, deploy, try using the thing" dev loop now runs entirely on a phone. "I wish a tool existed" becomes "the tool is on my home screen and works on a plane."

This post is about that pattern. The markdown viewer is just Exhibit A.

## The motivating case

A few days ago my brother sent me a markdown file, a Claude-generated plan for a project we're starting to ideate on together. I tried to open it on my phone. My phone couldn't render it.

The workarounds I considered:

- **Open it as plain text.** Fine, but I wanted it rendered.
- **Paste it into Claude and ask it to render.** Works, but it's a wasteful use of a powerful tool for what's ultimately a trivial text transformation. Also requires a network connection.
- **Use a third-party markdown viewer site or app.** Likely works, but I have no idea what any of them do with my files or data.
- **Convert it to a PDF first** (usually by asking Claude). Same wastefulness, same network requirement. It's what I've been doing when I send artifacts to non-technical collaborators, but for two people sharing notes on an AI-heavy project, markdown is increasingly the natural artifact format: lightweight, easy to parse, easy to edit. If my brother and I are going to work on something together, we should just be able to send each other `.md` files.

I'm sure there are reputable markdown viewers out there, or ones built into platforms I already use. The point here wasn't that none exist. It was doing the project as an exercise in rolling my own.

So I did. It's at [/tools/viewer](/tools/viewer/). One Claude Code session, one PR reviewed on the bus, one push-to-deploy.

## Offline is a principle, not a feature

Then I wanted to use it on a plane.

Offline isn't something I bolt on. Some functionality genuinely requires the network, and that's fine: I can't stream new music or start a fresh Claude conversation with the plane's wifi off. But that requirement gets pushed onto everything, including things that have no reason to need a connection. Every app I depend on has some subset of functionality that quietly falls over when the network does, and it's almost always worse than it needs to be. Spotify's "offline mode" leaves much to be desired. If my phone is on airplane mode but Spotify isn't explicitly set offline, the app spins forever instead of short-circuiting to a better behavior. The Claude mobile app re-fetches my current conversation over the network every time I switch back in. None of this is a hard problem. It's just not prioritized.

When I build my own tools, it's going to be prioritized. A client-side markdown viewer has no business being online-only, and a PWA is exactly the shape of the fix: a home-screen icon, a service worker doing the offline work, one codebase behind all of it. I only want to maintain one thing.

## Per-tool PWAs, not site-wide

Only `/tools/*` pages are installable. The blog and homepage aren't.

One site-wide service worker (tools inherit offline caching for free), no root manifest. Each tool gets its own `manifest.webmanifest` at `/tools/<slug>/` and opts in with a single `<link>` tag in its head.

Per-tool from the start, for optionality. If I build a heavier tool later that deserves its own identity, it can be its own installed app without un-gluing from a monolith. Per-tool-now is the same work as monolithic-now; per-tool-later is hard.

## The stack that makes this fast

I went from "annoyance on my phone" to "installable offline app" in two short sessions because every piece of the stack is optimized for a short mobile loop:

- **Claude Code in the mobile app.** Real terminal, remote. Reads the repo, writes files, runs commands.
- **Astro.** Static output, zero JS by default, file-based routing. A new tool is a new `.astro` page.
- **Cloudflare Pages.** Free hosting. Push to `main`, live in a minute.
- **GitHub mobile.** PR diffs are genuinely readable on a phone when files are small.
- **`@vite-pwa/astro`.** Service worker generation, per-tool manifests, offline caching, all in one config block.

AI is what makes this loop close. I'm a backend engineer; the frontend bits I don't know (service workers, CSS, PWA minutiae) I ask Claude about and review as we go. A year ago this would have been a half-day of reading docs on a phone screen. Now it's a conversation I can have while the bus moves.

If you want to copy the pattern, the per-tool checklist I use (exact file layout, manifest fields, icon generation) is in my [`CLAUDE.md`](https://github.com/pkeppeler/personal-site/blob/main/CLAUDE.md).

## What surprised me

Chrome's "Install app" is a genuinely good first-class experience on mobile. Tap a button, app on your home screen. I expected it to feel more obscure. Given how polished the experience is, I don't fully understand why more lightweight tools and reading apps aren't installable.

## Still no laptop

Like the [last post](/posts/i-built-this-site-entirely-from-my-phone/), this was built on a Galaxy S26. Not because I've made phone-only a rule, but because I've realized I can. What's been clicking for me lately is that the actual dev loop, not just writing code but the full "write program, deploy, try using the thing" cycle, works entirely on a phone now. I can run it from a train, a taxi, a gate at the airport, a cafe. The same loop I'd run at a desk, just spread across smaller windows of time.

And that changes what I'm willing to build. When a project doesn't require blocking out time at a desk, I don't have to save it for a dedicated session. I can pick it up in the in-between moments of a day and still ship, which probably means I'll pick it up more.

One caveat: I did open Chrome DevTools on a laptop exactly once, to sanity-check that the "Application" tab was detecting the PWA correctly. I haven't found a mobile-only way to inspect service-worker state and installability yet.

The project took three sessions: Claude Code to build the viewer, a Claude chat to figure out what a PWA even is, a second Claude Code session to implement the PWA layer. The middle chat was the eng-review-planning phase. It let me hand Claude Code a clean, informed prompt the second time instead of making architecture decisions on the fly.

## What's next

The heuristic going forward: every time I reach for a random third-party web tool and feel weird about it, that's a candidate to roll my own. The shortlist:

- **Markdown-to-PDF** converter, for non-technical collaborators.
- **YouTube-to-mp3** downloader, because every existing one is sketchy.
- **RSS aggregator**, so I can follow blogs without an algorithm choosing for me.

The barrier used to be "this is a whole weekend project on a laptop." Now it's an evening on the couch with my phone.
