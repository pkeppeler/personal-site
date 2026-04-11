---
title: "What Three Engineers Actually Think About AI Coding"
description: "A 90-minute group chat between three backend engineers about AI coding tools, frontend vs. backend, and what's actually legitimate for serious work."
pubDate: 2026-04-11
---

I built this site from my phone over two days while on a trip in Singapore. Seven hours of micro-sessions in hotel rooms, on buses, on the couch, using Claude Code in the Claude mobile app. Then I sent the link to two of my closest friends from college at 1:39 AM and asked them to tell me if it was AI slop.

What followed was a 90-minute group chat that I think captures something real about where software engineers' heads are at right now. Not the polished LinkedIn version. The unfiltered version, typos and all.

## Who's Talking

Three backend-leaning engineers. Combined about 15 years of industry experience across Palantir, Microsoft, Netflix, and Meta. None of us write frontend code for a living. All of us have opinions about AI coding tools.

**Jason** is a distributed systems engineer at Netflix. He builds the kind of infrastructure where a bad deploy can knock out streaming for millions of people. His instinct is conservatism, and it's well-earned.

**Ben** did almost three years at Meta and is now pursuing a doctorate in data science. He thinks in terms of cost functions and pragmatism. His default mode is cutting through nonsense.

**Me.** Backend and data, five years at Palantir, a year at a defense tech startup, now joining an early-stage AI company. I built the site you're reading because AI tooling finally made it possible to ship personal projects I'd never have bothered hand-rolling. The whole thing was done from my phone in Singapore without ever opening a laptop. [I wrote about the full process and workflow here.](/posts/i-built-this-site-entirely-from-my-phone/)

## The Two Arguments

The conversation split into two real debates.

### Is AI-assisted coding legitimate for serious work?

Jason drew the line at proof-of-concept. His position: vibe coding with Claude is great for POC, but anything enterprise with actual requirements is a no. His reasoning was straightforward. False positives are expensive and unavoidable. You'd better know what the agent is printing and why.

Ben pushed back immediately. He agreed that review is non-negotiable: "it's a given, even if the stakes are low but non-zero, you review every line." But he rejected the binary framing entirely. Code is cheap. The expensive part is human context. Understanding what the business needs, what the system constraints are, what the users actually want. AI handles the cheap part. You still handle the expensive part.

I landed somewhere between them. I still manually refactored large changes at my last job. But I also think Jason's "not for enterprise" line is aging fast. It's a limitation of current model and harness quality, not some permanent architectural constraint. The gap is closing. It's closing quickly.

The irony is that Jason, who works at the company with arguably the most sophisticated engineering culture of the three of us, is also the most categorically skeptical. His conservatism is well-calibrated for Netflix-scale distributed systems. But it's not clear that it generalizes. Not every codebase has Netflix's correctness requirements, and treating AI coding as a binary (toy projects vs. real work) misses the entire middle ground where most software actually lives.

### Is frontend actually hard?

I mentioned that building this site had been a huge learning experience for frontend concepts. Jason's response: "bro just have agent shit it out." Ben's: "FE can be pretty hard sometimes."

This split into a real debate. Jason's position: frontend is one thing that will become trivial. Commodity work that agents will handle. You can afford mistakes and bugs in frontend in a way you can't in backend infrastructure. Ben pushed back. Frontend can be genuinely hard, and the difficulty isn't always where backend engineers assume it is. Jason held firm: in general, backend is harder than frontend, but incredible frontend can make a huge difference to the business.

I pointed out that Jason and I are both backend engineers who don't write frontend, so maybe we should be less confident about dismissing it.

My actual position: I don't think I'll ever hand-write much frontend myself. But spending seven hours reviewing every line Claude wrote and asking "why?" at each step left me far more literate in a domain I'd previously been ignorant about. That felt worth it, regardless of whether agents eventually commoditize the implementation layer.

## The Subtext

Ben made a sharp observation about the "mobile dev" framing of my first post: "I don't even think mobile dev exists and the post didn't convince me it exists at all. You're tending to tabs of Claude Code with your phone. It's not mobile-first dev." He's right. I wasn't writing code on my phone. I was supervising an agent from a constrained interface. The more interesting observation isn't that phone-based development is a good idea, but that the set of tasks requiring a full laptop is shrinking fast. Two years ago, what I did from Singapore wouldn't have been feasible. Two years from now, it'll be unremarkable.

There's also a question I raised in the chat that nobody really engaged with. I said it felt philosophically disingenuous to have AI write my blog posts. Ben said the site looked fine. Jason said the blog was a bit cringe. The conversation moved on to frontend vs. backend difficulty and whether Netflix rejected me for forgetting the CAP theorem (they did). I still don't have a clean answer to the authenticity question. But the fact that I'm writing about the tension at all probably says something about where I've landed: use the tools, be transparent about the process, and let readers decide how much they care.

## What This Actually Shows

The person who's most skeptical (Jason) has the least direct experience building with these tools outside of work. The person with the sharpest technical read (Ben) cut through both the "mobile dev" framing and the purity posturing in the same conversation. And I'm the one who built something, shipped it, and then immediately started interrogating whether it was authentic.

I don't think any of us is wrong exactly. We're just calibrated by different experiences. Jason's conservatism is the right prior for high-stakes distributed infrastructure. Ben's pragmatism is the right lens for evaluating where the actual value lies. And my willingness to just build the thing and figure out the philosophy later is probably the right bias for someone trying to develop intuitions about tools that are changing monthly.

If there's a takeaway, it might be this: the engineers who are actually using AI coding tools have better-calibrated intuitions about them than the engineers who are theorizing. But the builders are also the ones most likely to overfit to their own positive experience. You need both perspectives. Ideally in the same group chat, at 1 AM, with no filter.
