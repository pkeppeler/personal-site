---
title: "Replacing doomscrolling with building: shipping a personal site entirely from my phone"
description: "A backend engineer with no frontend experience builds and deploys a personal site to Cloudflare Pages — without ever opening a laptop."
pubDate: 2026-04-10
---

A few months ago I deleted all the scrolling apps from my phone. No Twitter, no Instagram, no YouTube, no Reddit. The idea was simple: if I'm going to pull out my phone during dead moments in my day, I'd rather do something that compounds.

Last weekend I tested what that actually looks like in practice. I built this site — the one you're reading — from start to deployed, entirely from my phone. I never opened a laptop. The whole thing was done in 10+ micro-sessions over about a day and a half, using [Claude Code](https://claude.ai/code) in the Claude mobile app.

This post is about how that went: what worked, what was painful, and what I learned along the way.

## Why

I'm a backend engineer with about 7 years of experience. I've spent most of my career in infrastructure, systems, and server-side code. I've never built a personal site, and my frontend experience is basically zero.

I wanted three things:

1. A personal site to start documenting projects and writing.
2. To learn some frontend fundamentals by actually building something.
3. To test a theory: if I replaced idle phone time with building, could I actually ship something meaningful?

## The setup

The entire workflow was the Claude app on my phone, using Claude Code (remote sessions that give Claude access to a terminal, filesystem, and git). I'd describe what I wanted, review what Claude built, ask questions about the code to understand it, give feedback, and iterate. Rapid-fire conversations, mostly in short bursts — waiting in line, on the couch, between other things.

The stack I landed on:

- **[Astro](https://astro.build)** — static site generator. Outputs plain HTML, zero client-side JavaScript by default.
- **Hand-written CSS** — one file, no frameworks. Charter serif for body text, system monospace for code and nav.
- **Markdown** for blog posts, with build-time syntax highlighting via Shiki.
- **Cloudflare Pages** for hosting, with auto-deploy on push to `main`.
- **pnpm** as the package manager, pinned via Corepack.

The entire site is 19 files. The CSS is 172 lines. There are 4 dependencies in `package.json` (Astro and three official Astro integrations). The built output has no `<script>` tags. I'm proud of that.

## How I worked

The workflow was conversational. I'd tell Claude what I wanted at a high level — "scaffold a minimal Astro blog with an index page, a post list, and an RSS feed" — and it would write the code, commit it, and push to a branch. I'd review the code on GitHub (mobile), ask questions about anything I didn't understand, request changes, and keep going.

Most sessions were 5–15 minutes. Some were longer when I got into a flow. The key insight is that this isn't pair programming in the traditional sense — it's more like having a senior frontend engineer on call who can implement things instantly while you focus on the decisions and the learning.

A typical loop looked like:

1. Open the Claude app, pick up where I left off.
2. Describe what I want next, or ask a question about something in the code.
3. Claude makes the changes, explains what it did and why.
4. I check the diff on GitHub, ask follow-up questions.
5. Repeat, or close the app and come back later.

The CLAUDE.md file in the repo became important. It's a set of project constraints and conventions — no client-side JS, no CSS frameworks, no design flourishes without sign-off, no analytics or tracking. It acts as a constitution for the project, so Claude doesn't drift from the intent even across multiple sessions. Writing it forced me to articulate what I actually wanted the site to be, which was valuable on its own.

## The Cloudflare Pages saga

Setting up Cloudflare Pages for auto-deploy was the hardest part, and it had nothing to do with code.

The plan was straightforward: use the Cloudflare API to create a Pages project connected to GitHub, add custom domains, done. Here's what actually happened:

**Attempt 1:** Create the project with a GitHub source via the API. Fails with error 8000011 — "internal issue with your Cloudflare Pages Git installation." Turns out, even though the Cloudflare GitHub App was installed on my GitHub account, my Cloudflare account had never completed a one-time OAuth handshake through the Cloudflare dashboard. The API can't do this part for you.

**Attempt 2:** Fall back to creating the project as a direct-upload (no GitHub), build locally, and deploy with `wrangler pages deploy`. This works — site goes live. Custom domains added, CNAME records set.

**Attempt 3:** Complete the OAuth flow in the Cloudflare dashboard on my phone. Chrome's desktop mode doesn't work. The OAuth redirect just... doesn't redirect. Switch to Firefox. Firefox's desktop mode is better. The OAuth flow completes.

**Attempt 4:** Try to PATCH the existing project to add a GitHub source. Error 8000069 — "You cannot update the `source` object in a Direct Uploads project." You literally cannot convert a direct-upload project to a git-connected one.

**Attempt 5:** Delete the custom domains, delete the project, recreate it from scratch with the GitHub source block. This time it works. Re-add the custom domains. Done.

The whole sequence took about an hour and required two differently-scoped API tokens (the first one only had DNS permissions, not the `Account > Cloudflare Pages > Edit` scope needed for project management). None of this is documented in one place. I pieced it together from the API docs, community forum posts, and trial and error.

Lessons from this:
- Error 8000011 = your Cloudflare account hasn't completed the GitHub OAuth flow (browser required, one-time).
- Error 8000069 = you can't add a git source to a direct-upload project. Delete and recreate.
- Your API token needs `Account > Cloudflare Pages > Edit`, not just zone-level DNS permissions.
- Firefox on mobile has a better desktop mode than Chrome. Matters for OAuth flows that break on mobile viewports.

## Mobile pain points

Two things about the Claude mobile app made this harder than it needed to be:

**Lost input.** Midway through writing a long message — detailed feedback, multiple paragraphs of context — I accidentally swiped back. When I reopened the chat, everything I'd typed was gone. No draft saved, no undo. I had to reconstruct it from memory. This happened once but it was demoralizing enough that I started being more careful about long messages, which slowed me down.

**Scroll position resets.** When Claude gives a long response — a full file, a detailed explanation — I'd read part of it, switch to the GitHub app to cross-reference the code, then switch back. Every time I came back to the Claude app, it reset my scroll position. I'd have to scroll back through the response to find where I left off. This happened dozens of times over the course of the project. It's a small friction that compounds into a real annoyance when you're working in short sessions and constantly switching between apps.

Neither of these is a dealbreaker, but they're the kind of thing that makes mobile-first development feel like a second-class experience when it doesn't have to be.

## What I learned

This was my first real frontend project. High-level things that clicked:

- How static site generators work — content as data, templates as functions over that data, build step that produces plain HTML.
- The Astro content layer and how it handles typed collections of markdown files.
- CSS layout fundamentals — box model, flexbox, responsive design with media queries.
- How `system-ui` font stacks work and why you'd avoid web fonts for performance and privacy.
- The relationship between DNS records, CNAME flattening, SSL certificates, and CDN edge serving on Cloudflare.
- How Cloudflare Pages builds work — git push triggers clone, install, build, deploy to edge.
- RSS feed generation and sitemap generation as build-time concerns.
- The value of a `CLAUDE.md` file as a living project constitution that keeps AI assistants aligned with your intent across sessions.
- Supply chain hygiene for JavaScript projects — lockfiles, lifecycle script allow-lists, dependency review discipline.

## Was it worth it?

Yes. The site is live. It took about a day and a half of phone time. I learned a meaningful amount about frontend development, DNS, and deployment infrastructure. And I proved to myself that the "replace scrolling with building" idea actually works — not as a productivity hack, but as a way to make dead time feel like it matters.

The site is intentionally minimal. No dark mode toggle, no hamburger menu, no animations, no analytics, no cookies. Just text, served fast. I'll add to it over time, but the foundation is exactly what I wanted: something simple enough that I understand every line, and durable enough that it won't need maintenance.

If you're thinking about trying something similar — building from your phone, using AI as a collaborator, or just shipping a personal site — the barrier is lower than you think. The tooling is there. The main obstacle is the same one it's always been: deciding to start.
