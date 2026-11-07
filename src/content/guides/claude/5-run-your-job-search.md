---
title: "Run your job search with Claude"
description: "Use Claude across a whole job search: decide what you are aiming at, vet companies, tailor every application from one honest file, keep the tracker current from your inbox, and judge offers by a yardstick you set before the first one."
draft: true
---

<!--
DRAFT NOTES FOR PJ (delete this comment before publishing):
- Every "TODO(PJ)" block below needs a real moment from your search, in shape only (no company names, no comp numbers). I did not invent any.
- The inbox section is framed as "what I would do now" because it is not settled that you ran it during your search. If you did, say so and I will switch it to first person.
- Product facts come from docs/guides/claude/VERIFIED.md rows 12, 14, 97, 127, 129, 132, 136, 137 and 146, all last checked 2026-10-23. Re-verify them before flipping draft to false.
- When this ships, add a link to it from the job search section of Episode 2.
-->

This series started as a job-search guide I emailed to friends. [Episode 2](/guides/claude/2-projects/) kept a short version of it as an example of a project. This episode is the full version, rebuilt around what Claude can do now: read your inbox, research a company properly, and write straight into a Google Doc.

> **TODO(PJ):** One or two sentences on your own search, in shape only: how long it ran, roughly how many companies, and that it ended with an offer accepted. This is the provenance the rest of the episode leans on.

By the end you will have a project that holds your search, an experience file that every resume claim has to come from, a pipeline file that Claude keeps current from your email, and an offer yardstick written before you need it. Each section stands on its own, so start with whichever stage you are in.

Menu paths here are as of the day I wrote this, and the app moves, so every one carries the same fallback: if it is not there, the app has moved it; ask Claude "where do I find X now?" This episode assumes the Pro plan from [Episode 1](/guides/claude/1-set-up-your-account/). Two things in it, Research and Claude working through your email, are on paid plans only.

## Three rules carry the whole search

Most of what goes wrong when people use AI for a job search comes from breaking one of these. Every prompt below has them built in.

1. **Claude never invents.** Every claim about you comes from your experience file or from something you confirm in the chat. A resume bullet that sounds polished and is not quite true is the failure you will not catch, because it reads well. It surfaces in the interview, where it costs the most.
2. **Claude drafts, you send.** Claude can draft every email and message in the search. You read each one and send it yourself. Nothing goes out under your name that you have not read.
3. **Write the offer yardstick before the first offer.** What you want, what you will trade and what rules a job out, written down while you are calm. When an offer arrives you judge it against that, not against how flattered you feel that week.

## Set it up once: one project, two files

A job search runs for weeks, comes back to the same facts every day, and piles up decisions you do not want to argue again. That is the shape a project is for. A project is a workspace in Claude that keeps instructions, files and chats together, so every chat in it starts already knowing your situation. [Episode 2](/guides/claude/2-projects/) explains projects properly; this is the short version.

Create a project (Projects in the left sidebar, then "+ New Project"; if it is not there, ask Claude "where do I create a project now?"). It holds two files:

- **experience.md: what you have done.** Your three to five biggest wins, each written up with the situation, what you did, what made it hard and the result, plus your roles, dates and skills. This is the only allowed source for anything Claude writes about you.
- **pipeline.md: where the search stands.** One entry per company: the role, the stage, the next step and its date, how well it fits, and the best case for and against.

The ".md" means markdown: a plain-text file where a line starting with "#" is a heading and a line starting with "-" is a bullet. You never have to write it by hand. Claude writes these files, and you save what it gives you into the project. When a file changes, Claude gives you the complete new version and you replace the old one in the project. A project chat cannot edit its own files, so replacing the whole file every time is what keeps it current.

Paste this into the project's instructions ("Set project instructions" on the project page):

```text
I am [role and background in two sentences]. I am looking for [kind of role]. I am not interested in [sectors, roles or conditions that are out]. Fixed constraints: [location, pay floor, timing, anything else].

Rules for this whole search:
- Never invent. Anything you write about me comes from experience.md or from something I confirm in this chat. If you need a fact that is not there, ask me.
- You draft, I send. Never send, reply to or forward an email, and never submit an application.
- Judge every offer against the offer yardstick in pipeline.md, not against how the offer is framed.

How to help:
- Evaluating a company: be rigorous and defensible, and say what fits and what does not, with sources.
- Interview prep: assume I am competent, go deep, and push back on weak answers.
- Writing: plain, specific and in my voice. No buzzwords.

Style: skip surface summaries, do not sugarcoat, and state the assumptions you are making.

Living files: pipeline.md is the current state of the search and experience.md is the record of what I have done. Read them first and never re-ask what they say. If the chat or your memory disagrees with them, flag the conflict and ask which is current. Propose changes as a short list before applying them. When a file changes, give me the complete replacement file, never a partial edit. Date every fact and flag stale ones. Settled decisions live in the files, and reopening one is explicit.
```

Not sure what to write? Ask Claude: "Here are project instructions for a job search: [paste the block above]. Fill in the brackets from these notes about me: [your background, what you want, what you do not]. Keep the rules and the last paragraph word for word."

Then build the experience file by interview, in the project's first chat. Being asked works better than writing from a blank page, because a good question pulls out the detail you would have left out:

```text
Interview me to build experience.md. Ask about one accomplishment at a time, and ask follow-up questions until you have the situation, what I specifically did (not my team), what made it hard, and a concrete result, with a number where one honestly exists. Push back when I am vague. After three to five accomplishments, ask about my roles, dates and skills. Then write experience.md in markdown. Mark anything I was unsure about as "(confirm)" instead of smoothing it over.
```

If you have a resume, attach it to that chat (the "+" button at the lower left of the message box) and tell Claude to use it as a starting point, not as the truth. Older resumes carry old inflation.

> **TODO(PJ):** A moment from building your own experience file: something the interview pulled out that you would not have written yourself, or a claim it made you take back.

## Decide what you are aiming at before you look at a listing

Listings are designed to make you want them. If you start there, you end up applying to whatever was well written. So the first real job is deciding what you are aiming at and writing it down, and Claude is a good partner for that because it has no stake in the answer.

```text
Using experience.md, help me decide what I am aiming at. Work through it as questions, a few at a time, and give me your recommended answer to each.

By the end I want four things, written as one section I can add to pipeline.md:
1. Two or three target roles, each with one sentence on why my record supports it.
2. What I will not take: sectors, role types, conditions.
3. The offer yardstick: what I am optimizing for, ranked; what I would trade for what; and the lines that rule an offer out regardless of pay.
4. The two or three things that make me stand out for these roles, each traced to an entry in experience.md.

Challenge me where my stated goals and my record point in different directions.
```

Not sure about your answers? That is the point of the prompt. Say "I don't know, what would you recommend and why?" to any question and argue with the answer.

The yardstick is rule three in practice. It feels premature to write it before you have a single interview, and that is exactly why it works: at this point you have no offer to flatter you.

## Vet companies against your criteria, not against their pitch

A company's own site tells you what it wants you to believe. What you want to know is whether it fits your yardstick, and what could go wrong. Research is the tool for a deep look at one company: Claude searches widely, reads what it finds and writes a report. Ask for a source on every claim, as the prompt below does, so you can check the ones that matter. Start it from the "+" button below the message box, then "Research" (or type /deep-research). Web search has to be on for it to work. If it is not there, ask Claude "how do I start Research now?"

```text
Research [company] as a possible employer for me, for the role of [role]. Read pipeline.md first and judge the company against my target roles, my "will not take" list and my offer yardstick.

Cover: what the company actually sells and to whom; how it makes money and whether that looks durable; recent news, leadership changes and layoffs; what current and former employees say, with the caveat that reviews skew negative; and what the role likely involves day to day.

End with: the best case for joining, the best case against, the open questions I should ask in an interview, and a one-line verdict. Cite a source for every factual claim, and mark anything you could not confirm as unconfirmed.
```

Not sure it fits? Ask Claude: "Here is a prompt for researching a company as an employer: [paste it]. Rewrite it for [a nonprofit / a public agency / a small private firm] and keep the case for and against."

When the report comes back, ask Claude for the updated pipeline.md with this company's entry added or changed, and replace the file. Two minutes of filing now saves re-running the research when the recruiter calls back in three weeks.

> **TODO(PJ):** A company Claude helped you rule out, or rule in, that you would have misjudged on your own. In shape only: what you believed going in, what the research surfaced, and what you decided.

## Tailor each application from the experience file, and make Claude show its sources

Tailoring is where rule one matters most. Claude is very good at making you sound like a perfect fit for a listing, and that is the danger: the easiest way to fit a listing perfectly is to drift from what you did. The fix is to make Claude show where every line came from.

Ask for the resume as a Google Doc, so it lands in your Drive ready to edit and export. Name Google when you ask: a request for just a "doc" makes a different kind of file. Creating a Google Doc uses the Google Docs connector; [Episode 3](/guides/claude/3-hand-off-the-job/#connect-gmail-drive-and-google-docs-in-manual-the-first-time) walks through connecting it.

```text
Here is the listing for [role] at [company]: [paste the listing].

First, in the chat: list what this listing actually screens for, most important first. For each, say which entry in experience.md is my best evidence, or say plainly that I have none.

Then create a Google Doc called "[My name] resume, [company]" with a resume tailored to this role. Every bullet must come from experience.md. After each bullet, add a bracketed note naming the experience.md entry it came from; I will delete the notes before sending. Do not add any skill, number, title or result that is not in experience.md. If a stronger bullet would need a fact you do not have, ask me in the chat instead of writing it.

Finally, in the chat, list the gaps between the listing and my record, and how I could honestly address each one in a cover letter or interview.
```

Not sure it fits? Ask Claude: "Here is a prompt for tailoring a resume: [paste it]. Rewrite it for a cover letter, keep the rule that every claim comes from experience.md, and keep the gap list."

Read the source notes before you delete them. Any bullet whose note does not hold up comes out or gets fixed. If you confirm a new fact in the chat, ask Claude to add it to experience.md and replace the file, so the next application starts from it.

## Outreach: Claude drafts, you send

Outreach is the part people put off, so it is where a drafting partner pays off most: a warm note to someone you used to work with, a reply to a recruiter, a follow-up after an interview, a thank-you that says something specific. Claude drafts. You read, change what does not sound like you, and send.

```text
Draft a message to [name], [who they are and how I know them]. I want to [the ask: an introduction to someone at a company, a conversation about their field, a reply to their recruiting message]. Use pipeline.md for context on the company and experience.md for anything about me.

Keep it short enough to read on a phone. Make the ask specific and easy to say no to. Write it in plain language, the way I would write to this person, with no flattery and no buzzwords. Give me two versions: one warmer, one more direct.
```

Not sure it fits? Ask Claude: "Here is a prompt for drafting outreach: [paste it]. Rewrite it for [a follow-up after an interview / declining an offer politely / asking a former manager for a reference]."

If Gmail is connected (see the next section), Claude can also draft the message through it. It can send, reply and forward, and by default it asks for your approval before each of those. My rule is simpler than that safeguard: I do not ask it to send. A message that goes out in your name should be one you read in full, and sending it yourself makes sure that happens.

## Let Claude read your inbox and keep the tracker honest

> **TODO(PJ):** Decide the framing of this section. If you ran this during your search, replace this block with what happened. If not, keep the "what I would do now" framing below.

A tracker is only useful if it is current, and keeping it current is the chore everyone drops in week three. Meanwhile the real record of your search is already sitting in your inbox: confirmations, recruiter replies, scheduling emails, rejections. This is the kind of job [Episode 3](/guides/claude/3-hand-off-the-job/) is about: you describe the result, and Claude does the searching and reading. If I were starting a search today, this is the first job I would hand over.

You need the Gmail connector, which lets Claude search and read your email and draft messages. Connect it at Customize > Connectors in the left sidebar (if it is not there, ask Claude "how do I connect Gmail now?"). [Episode 3](/guides/claude/3-hand-off-the-job/#connect-gmail-drive-and-google-docs-in-manual-the-first-time) walks through it step by step. For the first run, set the permission mode to Manual, so Claude asks before each action and you see what it does in your inbox. Permission mode is the control in the message box, in the row with the model picker ([Episode 1](/guides/claude/1-set-up-your-account/#permission-mode) shows where). Once you have watched it work, Auto is fine for searching and reading.

Run this in your job search project, so Claude has pipeline.md in front of it:

```text
Search my Gmail for everything related to my job search since [date]: applications, confirmations, recruiter messages, scheduling, interview invitations, assessments, rejections and offers. Search by company name for every company in pipeline.md, and by words like "application", "interview", "recruiter", "next steps" and "unfortunately".

Then compare what you found with pipeline.md and give me, in the chat:
1. Every place where my email shows a different stage or a newer next step than pipeline.md, with a link to the email.
2. Companies in my email that are not in pipeline.md at all.
3. Anything waiting on me: an email I have not answered, a scheduling request, an assessment with a deadline. Oldest first.
4. Threads that have gone quiet for more than two weeks, where a follow-up might make sense.

Do not guess any value. If two emails disagree, show both. This is read-only: do not send, reply, delete, label or move anything. After I confirm the changes, give me the complete replacement pipeline.md.
```

Not sure it fits? Ask Claude: "Here is a prompt for reconciling a job search tracker with my email: [paste it]. Rewrite it for [how I track my search: a spreadsheet / a notes file / nothing yet], and keep the read-only line."

Check two or three of the linked emails before you accept the changes, then replace pipeline.md with the new version. Run it once a week, or whenever you have lost track. Each run uses more of your plan's limits than a quick question does, so once a week is a sensible rhythm.

Item 3 is where this earns its keep. The scheduling request you missed because it came from an address you did not recognize is the one that costs you.

## Prepare for interviews by being questioned, not by reading

Reading about a company feels like preparing. Being questioned is preparing. Claude can play the interviewer, and it is good at it if you tell it not to be nice.

Start with a brief, in a new chat in the project:

```text
I have a [type of interview, e.g. hiring manager, technical, panel] interview with [company] for [role] on [date]. Using pipeline.md, the research we have done on them and experience.md, give me:
1. What this interview is most likely testing, and why.
2. The ten questions I am most likely to get, hardest first, each with the experience.md entry I should draw on.
3. The two or three weakest spots in my record for this role, and an honest way to address each.
4. Five questions I should ask them, built from the open questions in pipeline.md.
```

Then run the mock interview:

```text
Now be the interviewer. Ask me one question at a time and wait for my answer. After each answer, tell me in two or three sentences what was weak: too long, too vague, no result, not actually answering the question. Then ask a follow-up the way a skeptical interviewer would. Do not tell me an answer was good unless it was. After eight questions, stop and give me the three things to fix before the real interview.
```

Not sure it fits? Ask Claude: "Here is a prompt for a mock interview: [paste it]. Rewrite it for [a case interview / a board interview / a conversation with a founder] and keep the skeptical follow-ups."

After the real interview, while it is fresh, tell Claude how it went: what they asked, what landed, what you fumbled, what you learned about the role. Ask for the updated pipeline.md with a short debrief in that company's entry. The next round, often weeks later, starts from it.

> **TODO(PJ):** A moment from your own interview prep: a mock question or a piece of pushback that turned out to matter in the real interview, or a weak answer it caught.

## Judge each offer by the yardstick you wrote before you wanted one

An offer is the point of the search where your judgment is worst. You are relieved, someone has told you they want you, and there is usually a deadline. This is why rule three exists. The yardstick is already in pipeline.md, written weeks ago by a calmer version of you.

```text
I have an offer from [company]. Here are the terms: [paste them, or attach the offer letter].

Judge it against the offer yardstick in pipeline.md, point by point. Do not re-weigh the yardstick because of how this offer is framed. Then tell me:
1. Where it meets the yardstick, where it falls short, and whether it crosses any line that rules it out.
2. What is missing from the terms that I should ask about before deciding.
3. If I am comparing it with another offer or with staying where I am, the same comparison for each, side by side.
4. Which terms are worth negotiating, given what matters most to me, and what I could reasonably trade.

If you use any market data, such as pay ranges, cite the source and say how current it is. Otherwise say you do not know.
```

If you decide to negotiate, ask Claude to play the recruiter: "Play the recruiter for [company]. I am going to ask for [the change]. Push back the way a recruiter plausibly would, one response at a time, and after five exchanges tell me where I gave ground I did not need to." Practising the conversation twice makes the real one much calmer.

When offers arrive weeks apart, the yardstick also keeps them comparable: the second is held to the same standard as the first, however you felt that week.

> **TODO(PJ):** How the yardstick played out in your search, in shape only: an offer it made easier to turn down, a trade it clarified, or the moment it settled a decision.

## Checklist

The fallback from the top of the page applies to every path below.

- [ ] A job search project exists, with the instructions above (Projects > "+ New Project", then "Set project instructions")
- [ ] experience.md is in the project, built by interview, with every "(confirm)" resolved
- [ ] pipeline.md is in the project, with target roles, a "will not take" list and the offer yardstick at the top
- [ ] Every tailored resume was checked against its source notes before the notes were deleted
- [ ] Gmail is connected (Customize > Connectors), and the first run was in Manual (message box, in the row with the model picker)
- [ ] The inbox reconciliation runs weekly, and pipeline.md is replaced after each run
- [ ] Nothing has gone out in your name that you did not read and send yourself
