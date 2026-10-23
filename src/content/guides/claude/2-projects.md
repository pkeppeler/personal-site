---
title: "When a chat is not enough: projects"
description: "Three shapes of project (living state, reference library, plan with constraints), Matt Pocock's grilling skill for hard decisions, and a builder prompt that interviews you and hands back a ready-made project."
draft: false
pubDate: 2026-10-23
authorship: ai-drafted
---

By the end of this episode you can tell when a piece of work deserves a project instead of a chat, and which of three shapes yours is. You also have one prompt that interviews you and hands back a ready-made project, and the grilling technique I teased in [Episode 0](/guides/claude/), in full, for making hard decisions with Claude.

[Episode 1](/guides/claude/1-set-up-your-account/) is assumed: your account, your model and your Instructions for Claude are set.

Locations in the app are as of the day I wrote this, and the app moves, so one fallback covers every menu path on this page: if it is not there, the app has moved it; ask Claude "where do I find X now?" If your Projects page looks different from what I describe, Anthropic is rolling out a new version; the ideas carry over.

## A project holds what you would otherwise re-explain in every chat

A chat is one conversation, and a new chat does not start from the last one. Memory ([Episode 1](/guides/claude/1-set-up-your-account/)) carries small things across, and on paid plans Claude can search your past chats when you ask, but the detail of what you decided last Tuesday is not in the new chat's head. So you re-explain. Every time I began a fresh chat on the same work I typed the same paragraph: who I am, what I had decided, what I did not want.

A project is where that paragraph lives: a workspace around one body of work, with instructions Claude follows in every chat inside it, files it can read, and the chats themselves, kept together.

Memory is not a substitute. Claude saves memories on its own (you can also say "remember this"), and a note it chose is not the version you wrote. When something has to be exact, like which stage an application is in, you want a file you wrote and can read.

## Most projects are one of three shapes

To write this episode I asked Claude to summarize ten of my own projects and tell me what the ones that lasted had in common. They looked nothing alike, but each durable one was one of three shapes, and the shape tells you what belongs in it.

### Living state: decisions pile up and have to stay settled

My health project and my job search are this shape. The work is a picture that keeps changing: this month's program, where each application stands. Every durable project of this kind converged on one living file, a document that holds the current picture and is replaced as it changes. Decisions accumulate, and once I have settled one I do not want to argue it again in chat fourteen because Claude never heard of it. The constraints are stable but non-obvious, like what a home gym can and cannot do, and they are cheap to write down once and tiresome to explain forty times.

### Reference library: upload once, ask many times

A new job's paperwork is the example: contracts, a handbook, benefits documents. Little in it changes, and you will have questions for months. The project is a shelf and a clerk who has read every page, so six weeks in you ask "what does the handbook say about this?" and get an answer from the document itself. Project files can be up to 30MB each. Name your files so you can tell which version is current.

### Plan with constraints: each commitment limits the next

An event I was organizing is the example. A booked venue fixes the date, the date fixes what is available, the headcount fixes the budget per head. The project holds what is fixed, what is decided and what depends on what, and the question worth asking is always "what does this change?" My Iceland trip was the same shape taken further, with the record kept outside the project; [Episode 3](/guides/claude/3-hand-off-the-job/) walks through it.

### A one-off question stays a chat

Not everything earns a project. What to cook for six on Saturday, how to word one email, what a clause means: ask in a chat and move on, because a project costs setup and upkeep. If a chat keeps growing, move it in later: the arrow next to the chat's name has an "Add to project" option.

## Instructions should grow with the project

Instructions are the text Claude reads at the start of every chat in the project. The mistake is writing a manual on day one. My four projects sit on a ladder, and the ladder is the advice:

- **None.** Iceland had no instructions and still worked.
- **A preference list.** My job search: who I am, what I want and do not want, how I like to be helped. A page at most.
- **A role, principles and anti-patterns.** Health: a role for Claude, operating principles, a rule to read the files before recommending anything, and a list of things to stop doing.
- **An operating system.** My finances run on a full protocol for interviews, decisions and facts. The template two sections down is that protocol, shrunk.

To climb, start with nothing, or with what the builder prompt below writes for you, and add one line every time you catch yourself explaining the same thing again.

Anti-patterns are the most underrated rung. A stop-list ("no filler encouragement, no softening a point I need to hear") is easier to write, because every annoyance hands you a line, and easier to check, because either Claude still does the thing or it does not.

**Project instructions** are what is true in every chat of the project: who I am, how Claude should work, the rules for the living file. A **first-chat prompt** is a one-off kickoff for what I am doing now. If it will still be true in a month, it goes in the instructions; if it is about today, it goes in the chat. The account-wide field from [Episode 1](/guides/claude/1-set-up-your-account/), Instructions for Claude, is the third layer, for how you want Claude to behave everywhere.

To make a project, hover over the left side of your account and click Projects (or go to claude.ai/projects), then click "+ New Project" in the upper right. Instructions go in "Set project instructions" on the project page ("Save instructions" when done). Files go in with the "+" in the knowledge area on the right (the label may be "Files"). A first-chat prompt goes in a new chat inside the project. Projects exist on every plan; Free is capped at five.

## Grilling makes Claude interview you until nothing is left assumed

Grilling is Matt Pocock's technique, not mine. It is a skill (a saved set of instructions Claude loads when a task calls for it) that he open-sourced under the MIT license. The write-up is [his page on grilling](https://www.aihero.dev/skills-grilling) and the text lives in [his skills repository](https://github.com/mattpocock/skills). I teased it in Episode 0: I designed this series by running a session with it, and my finance project was designed the same way.

**What it does.** You tell Claude about a plan, a decision or an idea. Instead of answering, Claude maps it as a tree, where every decision branches into the decisions that hang off it. It asks every question it can ask right now (the skill calls that set the frontier) in one numbered round, each with its own recommended answer. Your answers settle some branches and unblock others, and Claude runs the next round. It stops when every branch has been visited and nothing is silently assumed, and it does not act on any of it until you confirm that you both understand the same thing.

**Why it works.** You react to a recommendation instead of facing a blank page, which is the lesson of Episode 0 applied to a decision. The numbering makes a round quick to answer, and the tree surfaces questions you would not have known to ask, because they only exist once an earlier decision is made. Finding facts is Claude's job, never yours, so your time goes into the decisions.

**When to reach for it.** Before anything where a wrong assumption is expensive or where you do not know what you do not know: a decision with many parts, a plan you suspect has holes, a project you are about to set up. Not for a quick question; a numbered round is a heavy answer to a light need.

Here is the file, exactly as Matt published it on [7 October 2026](https://github.com/mattpocock/skills/commit/95249b0b49782349740fd9b8c6ce32b4e59e497a). It is written for Claude to follow, so it sounds like instructions to a colleague. I have not changed a word, so paste it as it is.

````text
---
name: grilling
description: Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases.
---

Interview the user relentlessly until you reach a shared understanding. Map this as a **design tree**: every decision branches into the decisions that hang off it.

Work the tree in **rounds**. The **frontier** is every decision whose prerequisites are already settled: the questions you can ask _now_ without guessing at answers you haven't heard yet. Ask the whole frontier in one round: number each question and give your recommended answer. Then wait for the user's answers before the next round.

Format a round like so:

```
❓ **Q1** - **<question title>**: <question body, might be multiple paragraphs, including multiple choices>

➡️ <your recommended answer>

---

❓ **Q2** - **<question title>**: <question body, might be multiple paragraphs, including multiple choices>

➡️ <your recommended answer>
```

Word each question so "yes" accepts your recommended answer.

Each round the user answers reshapes the tree: settled decisions push the frontier outward and unblock questions that depended on them. Recompute the frontier and ask the next round. A question whose answer depends on another question still open in this round belongs to a _later_ round, not this one.

Finding _facts_ is your job, never the user's. When a frontier question needs a fact from the environment (filesystem, tools, etc.), dispatch a sub-agent to find it; don't ask the user for anything you could look up yourself. Don't block on it: a running exploration is an unsettled prerequisite, so only the questions downstream of it wait for the sub-agent to report; ask the rest of the frontier now. The _decisions_ are the user's: put each to them and wait.

The session is done when the frontier is empty: every branch of the design tree visited, nothing left silently assumed. Do not act on it until the user confirms you have reached a shared understanding.
````

The skill says to send a helper (a sub-agent) to look facts up. In a chat, if Claude says it cannot, tell it to look things up itself, as long as [web search](/guides/claude/1-set-up-your-account/#web-search) is available.

If rounds are too much for you, Matt supports going back to one question at a time with a single line, which also goes in as it is:

```text
When grilling, ask one question at a time.
```

He suggests adding it to a file called CLAUDE.md, which you do not have in a chat. My own suggestion is to put the line in the message that starts the grilling, or in Instructions for Claude, or in a project's instructions. If you stay with rounds, answer by number. Matt's example from his docs is `1 yes, 2 the second option, 3 no, here's why`.

### Paste it to try, upload it to keep, bake it in for one project

**Paste it into one chat.** The quickest way to try it, and it needs nothing set up. Paste the whole grilling text into a new chat, then send this:

```text
Grill me about [the plan, decision or idea]. Follow the instructions above.
```

A rough description is enough; the first round is Claude finding out what you meant. If you would rather start from a draft, ask Claude: "Help me put [the decision] into two sentences for a grilling session."

**Upload it as a Skill.** Grilling is then available in every chat. A project is background knowledge that is always loaded; a skill is a procedure Claude picks up when a task calls for it, in any chat. The route, as Anthropic documents it:

1. Check that the "Run code in the cloud" switch is on (Settings > Capabilities, under "Code execution and file creation"). It is on by default, and the audit prompt in [Episode 1](/guides/claude/1-set-up-your-account/) had you confirm it. Skills need it.
2. Make a folder named `grilling`, and inside it a plain text file named `SKILL.md` containing the grilling text above.
3. Zip the folder so the ZIP contains the `grilling` folder with `SKILL.md` inside it. A ZIP with `SKILL.md` loose at the top is not recognized as a skill.
4. In the left sidebar choose Customize, then Skills. Click the "+" button, then "+ Create skill", choose "Upload a skill" and pick the ZIP. It appears in your skills list.
5. Check the switch next to it is on. Then, in any chat: "Use my grilling skill to work through [the decision]." If Claude does not reach for it, be more explicit in your request.

Never made a ZIP, or not sure how to create a file with an exact name? Ask Claude: "I use a [Mac / Windows] computer. How do I put some text in a file called SKILL.md inside a folder called grilling, and zip the folder?"

Anthropic's advice for any skill you upload is to install only from sources you trust and to read the file before you switch it on, since uploaded skills are not reviewed by Anthropic. You have just read this one.

**Bake it into a project's instructions.** That makes one project run this way from its first message.

## Any big decision can run as a grilling project

For a big, multi-part decision (estate planning, a renovation, choosing a school, a career change), a project built on grilling is the setup I trust most. My finance project is the original, about three times the length of what follows; this template keeps the parts that generalize. It is built on Matt Pocock's grilling skill (the grilling bullets in block one are my own wording of his method). It comes as two blocks: project instructions, true in every chat, and a first-chat prompt, used once, to start round one.

Block one, the project instructions:

```text
This project is where I work through [the decision, e.g. a kitchen renovation] with you. Treat it like a design review: every decision branches into the decisions that depend on it.

How to work:
- Grill me. Each round, ask every question that can be asked now, numbered, each with your recommended answer and a one-line reason, worded so that "yes" accepts your recommendation. Then stop and wait. After my answers, work out what can now be asked and run the next round.
- End every round with a decision ledger: settled, open, and blocked on what.
- Finding facts is your job, never mine. Verify anything that changes year to year (rates, limits, prices, rules) with a web search, never from memory. Ask me only for what is in my head or my accounts.
- Survey the whole option space, including the lesser-known options and the default most people drift into. Give the tradeoffs: cost, flexibility, complexity, how reversible. Flag decisions that are hard to undo.
- Push back on vague or contradictory answers. Name what I may not know, with a short explanation.
- Flag what needs a professional, and tell me what to ask them so they carry out an informed decision. Give me the full analysis anyway.
- Do not produce deliverables or call anything done until I confirm we share an understanding.

Living file: [decision].md is the single source of truth.
1. Read it first in every chat, and never re-ask what it says.
2. If the chat or your memory disagrees with it, flag the conflict and ask which is current.
3. Propose changes as a short list (added, changed, removed) before applying them.
4. When the state changes, give me the complete replacement file, never a partial edit.
5. Date every fact. Flag any older than 90 days as stale.
6. Settled decisions live in the file. Reopening one is explicit: name it, give the old answer and why it changed.
If there is no file yet, start with the root questions, the ones every other decision depends on, and when they are settled give me version one.
```

Block two, the first-chat prompt, sent as the first message of a new chat in the project:

```text
Start round one. The decision: [what I am deciding, in a sentence or two]. Already fixed: [deadlines, budget, people involved, anything non-negotiable]. What worries me: [the thing I keep circling].
There is no living file yet, so open with an empty decision ledger and ask the root questions, with your recommended answers.
```

Tailor both blocks before you use them. Not sure what goes in the brackets, or whether the template fits? Ask Claude: "Here is a decision-project template. I am deciding [what]. Fill in the brackets from what I tell you, and cut anything that does not apply." When the first rounds settle, Claude hands you version one of the living file; save it and add it to the project's files.

## One prompt builds the whole project for you

The sentence that matters most in this series is that AI is really good at writing prompts, instructions and configurations for AI. The builder prompt is that sentence turned into a tool: paste it into an ordinary new chat, outside any project, and Claude asks what the project is for, interviews you, works out which of the three shapes you have, and hands back project instructions, version one of the living file, and a first-chat prompt.

The living file comes back in markdown, plain text with a few conventions (a line starting with `#` is a heading, a line starting with a dash is a bullet), so any text editor opens it.

```text
I want to set up a Claude project, and I want you to build it with me. Start by asking what the project is for. Offer these as examples, and take anything else I say: health or training; a job search; a trip; an event I am organizing; the paperwork for a new job; teaching or sermon preparation; a home project.

Then interview me about it. If I have the grilling skill installed or pasted in this chat, use it. If not, interview me yourself, one question at a time, with your recommended answer to each so I can say "yes" or correct you. Find out: what I am trying to get done; what is already decided; what is fixed or limited; who I am, as far as it matters here; how I want you to work with me; what I want you to stop doing; and what I would otherwise have to explain again in every new chat. Look up any fact you can find yourself instead of asking me. Push back if my answers are vague or contradict each other.

When you understand the project, tell me which shape it is, and why:
- living state: decisions pile up and must stay settled (a health plan, a job search). It needs one file that holds the current state.
- reference library: documents I upload once and ask about many times (a new job's paperwork). It needs short instructions and well-named files.
- plan with constraints: each commitment limits the rest (an event, a trip). It needs a file of what is fixed and what is decided.
If it is really a one-off question, say so and tell me to keep it as a chat.

Then hand me these, each in its own block I can copy:
1. Project instructions, under 300 words: who I am, what the project is for, how you should work with me, and what you should stop doing. Add these living-file rules in compact form: read the file first and never re-ask what it says; if chat or memory disagrees with the file, flag the conflict and ask which is current; propose changes as a short list before applying them; when the state changes, give me the complete replacement file, never a partial edit; date every fact and flag stale ones; settled decisions live in the file, and reopening one is explicit. Keep everything short, because a long set of instructions is harder for you to follow and harder for me to maintain.
2. Version one of the living file, in markdown. Give it to me as a file to download if you can; if not, as text I can copy into a file ending in .md. Fill in what I told you, mark what is still unknown, and date every fact.
3. A first-chat prompt: the message I send to start the project's first chat, about what I am doing now rather than what is always true.

Finish by telling me in short steps where each of them goes, and ask what I want to change.
```

Not sure what to write? This block is the ask: it is the request "build me a project" written out so you never face the blank page. To bend it, tell Claude how in one line, for example: "Run the project builder, but I already know this is a reference library, so skip the shape question."

Answer it messily; a rough answer gets a sharper next question. Read what comes back before you paste anything: it is a draft, and the instructions are the part most worth editing. Never made a markdown file? Ask Claude: "How do I save text as a file ending in .md on my [Mac / Windows] computer?"

## Two worked examples show the file doing the remembering: health and job search

### Health

**What it holds.** The plan a doctor or coach has given you, your goals, your logs and the baseline you work from. Claude's job is to help you understand what they tell you, keep the records in order and prepare questions for the next appointment; the decisions stay with them. That keeps the project on the safe side of the subject, and it covers most of what you need between appointments.

**Memory will not carry it.** Claude's memory leaves out health and other sensitive topics unless you turn on "Include sensitive topics in memory" (Settings > Memory, covered in [Episode 1](/guides/claude/1-set-up-your-account/)), so in a health project the file does the remembering. The project's own memory is different: with memory on, it can show up in chats outside the project. For a health project, turn off "Use account memory" on the project's page; Anthropic says that keeps the project's memory "fully separate", though it does not say exactly what that covers.

**The instructions.** Mine was a role, principles and a stop-list, with no rules for its files. I had four files, replaced by hand. Nothing in those instructions said which version wins when the file and the chat disagree, and in my other projects that gap is exactly where drift crept in. The six living-file rules close it; here is the shape, short, with them added:

```text
I am [one line on who I am, only what matters here]. This project is where I keep my health and training organized alongside my doctor and my coach. Your job is to help me understand what they tell me, keep my records and logs in order, and prepare questions for my appointments. Decisions about treatment, medication and dosage stay with them.

How to work:
- Read the files before you answer, and tell me where my logs differ from the plan.
- Be direct. Say what the evidence supports, what is a guess, and what we would need to measure to know.
- When you suggest a change, give the expected effect, the tradeoff, and how we will check it.

Stop doing: filler encouragement, softening something I need to hear, and repeating what I already know.

Living file: current-program.md is the current state. Read it first and never re-ask what it says. If the chat or your memory disagrees with it, flag the conflict and ask which is current. Propose changes as a short list before applying them. When the state changes, give me the complete replacement file, never a partial edit. Date every fact and flag stale ones. Settled decisions live in the file, and reopening one is explicit.
```

Not sure what to write? Ask Claude: "Here are project instructions for a health project: [paste the block above]. Rewrite the first paragraph and the How to work list from these notes about me: [your situation]. Keep the last paragraph word for word." The builder prompt does the same from an interview.

**The first chat.** Upload what you have (the plan, recent records, a few weeks of logs) and ask Claude for version one of the file, what is missing, and what to ask at the next appointment. The file holds the plan as it stands, the latest numbers with dates, what has been settled and why (so a bad week does not reopen it), and the open questions. Later chats start from it.

### Job search

This series started as a job-search guide I emailed to friends, and the project it described is still the clearest example of living state.

**What it holds.** A pipeline tracker and an experience file. The tracker has one entry per company: stage, fit, watch-outs, and the best case for and against. The experience file is the only allowed source for resume claims: nothing goes on a resume unless it is there or I confirm it in the chat. That removes the quiet failure of a bullet that is plausible, polished and not quite true.

**The instructions.** A short preference list, with the living-file rules attached to the tracker:

```text
I am [role and background in two sentences]. I am looking for [kind of role]. I am not interested in [sectors, roles or conditions that are out]. Fixed constraints: [location, pay floor, anything else].

How to help:
- Evaluating a company: be rigorous and defensible, and say what signals fit and what does not.
- Interview prep: assume I am fluent, go deep, ask sharp questions.
- Resumes and cover letters: use only what is in experience.md or what I confirm in the chat. If it is not there, ask me. Never invent.

Style: skip surface summaries, do not sugarcoat, and state the assumptions you are making.

Living file: pipeline.md is the current state of the search. Read it first and never re-ask what it says. If the chat or your memory disagrees with it, flag the conflict and ask which is current. Propose changes as a short list before applying them. When the state changes, give me the complete replacement file, never a partial edit. Date every fact and flag stale ones. Settled decisions live in the file, and reopening one is explicit.
```

Not sure what to write? Ask Claude: "Here are project instructions for a job search: [paste the block above]. Fill in the brackets and the How to help list from these notes: [what you want, what you do not, how you like to be helped]. Keep the last paragraph word for word."

**The first chat.** Build the experience file by interview: ask Claude to interview you about your three to five biggest wins, one at a time, and write each up (the situation, what you did, what made it hard, the result). Then add your resume and start the tracker with the companies you have in mind. For a deep look at one company, Research ([Episode 1](/guides/claude/1-set-up-your-account/)) is the tool.

**Why a file earns its place here.** When offers arrive weeks apart, the framework you judged the first one by is in the file, so the second is held to the same standard, however you felt that week. Mine ended with an offer accepted.

## A living file stays current because you replace it every time it changes

In my projects, Claude can read the files but cannot change them. So the loop is yours to run, and it has four beats:

1. Something changes: a new number, a decision, a stage moves. Claude proposes the change as a short list of what was added, changed and removed.
2. You approve it or correct it.
3. Claude gives you the complete replacement file.
4. You remove the old file from the project and add the new one.

That fourth beat is the main cost of projects, and it is also why they work. The file passes through your hands every time, so you read it every time. A file that changed behind your back is one you stop trusting.

The six living-file rules in the blocks above are what make the loop reliable:

1. **Read the file first and never re-ask what is in it.**
2. **If chat or memory disagrees with the file, flag the conflict and ask which is current.** Otherwise a file, a memory and a chat each hold a different version and nobody notices.
3. **Propose changes as a short list before applying them.** You see what is about to change while it is still cheap to say no.
4. **Give the complete replacement file, never a partial edit.** A partial edit means patching by hand, and that is where mistakes enter.
5. **Date every fact and flag stale ones.** A number without a date is a rumor.
6. **Settled decisions live in the file, and reopening one is explicit.** That stops the same argument coming back in chat fourteen.

**The upgrade: a Google Doc.** If you live in Google Docs, the living file can be a Doc: you paste Claude's replacement into it instead of removing and re-adding a file. Connect the Google Drive connector once (Customize > Connectors), then in the project's files click "+", choose "Drive" and pick the Doc. It works only in a project you have not shared, Claude reads the text but not the images, and the project's copy can lag behind the Doc, so check a number before relying on it. Having Claude edit the Doc itself is a separate setup that [Episode 3](/guides/claude/3-hand-off-the-job/) covers, and the lesson from Iceland, where the itinerary was a Doc, comes with it: tell Claude to edit the Doc only when you ask.

If you have Anthropic's new version of projects (in beta), Claude keeps a project's memory files itself and can change the project's instructions when you ask, so part of this loop may fall away: ask Claude "how do I keep this project current now?" And if the re-upload loop starts to annoy you, that is a signal. The work wants tools that touch your files and apps directly, and that is Episode 3.

## Two questions decide whether you need a project, and one sign says you have outgrown it

**Will I come back to this, reuse the material, or keep getting tasks from it?** If yes, make a project. If no, a chat.

**Do I want an answer or a finished thing?** An answer, an explanation, a draft you will rework yourself: a chat or a project chat does it. A finished thing, like a reconciled itinerary, a drafted document or an organized folder: ask for it, with the tools to make it. That is [Hand Claude the whole job](/guides/claude/3-hand-off-the-job/), Episode 3.

The sign you have outgrown a project: the data and files are the work. My finances were a project first, built on grilling, with a living file. They are now a folder on my computer that I work in with Claude Code (Anthropic's coding tool), because dropping PDFs into a folder is easier than uploading them one at a time. Episode 5 will cover it; it is not published yet.

## Checklist

Locations are as of the day I wrote this. If one is not there, the app has moved it; ask Claude "where do I find X now?"

- [ ] Project shape is decided (living state, reference library, plan with constraints), or it stays a chat
- [ ] The project exists (claude.ai/projects, then "+ New Project")
- [ ] Project instructions are short and saved ("Set project instructions" on the project page), with the six living-file rules if the project has a living file
- [ ] Version one of the living file is in the project (the "+" in the project's files area)
- [ ] The first-chat prompt is the first message of a new chat in the project; the instructions hold what stays true in every chat
- [ ] After every change to the state: a change list, a full replacement file, the old file replaced
- [ ] Grilling is set up one way: uploaded (Customize > Skills, with "Run code in the cloud" on and the skill switched on), pasted into a chat, or in a project's instructions
- [ ] For one question at a time, the opt-out line is in the first message, Instructions for Claude, or the project's instructions
- [ ] For a health project, "Use account memory" is off on the project's page
- [ ] If the living file is a Google Doc: the Drive connector is connected, the project has not been shared, and "edit the Doc only when I ask" is in the instructions

Matt Pocock's grilling skill, quoted above, is published under the MIT license. Its notice:

```text
MIT License

Copyright (c) 2026 Matt Pocock

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
