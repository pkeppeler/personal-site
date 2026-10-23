---
title: "When a chat is not enough: projects"
description: "Three shapes of project (living state, reference library, plan with constraints), Matt Pocock's grilling skill for hard decisions, and a builder prompt that interviews you and hands back a ready-made project."
draft: false
pubDate: 2026-10-23
authorship: ai-drafted
---

By the end of this episode you can tell when a piece of work deserves a project instead of a chat, you know which of three shapes your project is, and you have one prompt that interviews you and hands back everything the project needs: its instructions, the first version of the file it lives on, and the message that starts its first chat. You also leave with the grilling technique I teased in [Episode 0](/guides/claude/0-start-here/), in full, for making hard decisions with Claude.

[Episode 1](/guides/claude/1-set-up-your-account/) is assumed: your account, your model and your Instructions for Claude are set. Where a setting from there comes up, I give it one line and a link instead of a second walkthrough.

Where things live in the app is stated as of the day I wrote this, and the app moves. So every menu path on this page carries the same fallback, stated once here: if it is not there, the app has moved it; ask Claude "where do I find X now?" Projects in particular are in motion. Anthropic has a new version of projects in beta, rolling out in stages, in which a project is one conversation and Claude breaks the work into parallel threads. Its help page says chat will follow, with no date. If your Projects look different from what I describe, the ideas carry over; ask Claude "where do I set project instructions now?" and keep going.

## A project holds what you would otherwise re-explain in every chat

A chat is one conversation. A new chat does not start from the last one: memory ([Episode 1](/guides/claude/1-set-up-your-account/)) carries small things across, and on paid plans Claude can search your past chats when you ask, but the detail of what you decided last Tuesday is not in the new chat's head. So you re-explain. Every time I began a fresh chat about the same piece of work I typed the same paragraph: who I am, what I had already decided, what I did not want.

A project is where that paragraph lives. It is a workspace around one body of work, with three parts: instructions that apply to every chat inside it (Anthropic's help page says Claude "will use these instructions for all the chats within the project"), files Claude can read, and the chats themselves, kept together.

Memory is not a substitute. Memory is Claude deciding what is worth keeping; a project is you deciding. When something has to be exactly right, like which stage an application is in or what this month's numbers are, you want the version you wrote and can read, not a note Claude chose to take.

## Most projects are one of three shapes

To write this episode I asked Claude to summarize ten of my own projects and tell me what the ones that lasted had in common. On the surface they were nothing alike. Underneath, each durable one was one of three shapes, and the shape tells you what belongs in it.

### Living state: decisions pile up and have to stay settled

My health project and my job search are this shape. The work is a picture that keeps changing: this month's program, where each application stands. Every durable project of this kind converged on one canonical file that holds the current picture: a current program, a current state, a pipeline tracker. Two things make a project beat a chat here. Decisions accumulate, and once I have settled one I do not want to argue it again in chat fourteen because Claude never heard of it. And the constraints are stable but non-obvious, like what a home gym can and cannot do or the quirks of your own kitchen. They are cheap to write down once and tiresome to explain forty times.

### Reference library: upload once, ask many times

A new job's paperwork is the example: contracts, a handbook, benefits documents. Little in it changes, and you will have questions for months. The project is a shelf and a clerk who has read every page, so six weeks in you ask "what does the handbook say about this?" and get an answer from the document, not from anyone's memory. Project files can be up to 30MB each, and on paid plans a feature Anthropic calls enhanced project knowledge expands a project's capacity by up to 10x, switching on automatically when needed. Name your files so you can tell which version is current.

### Plan with constraints: each commitment limits the next

An event I was organizing is the example. A booked venue fixes the date, the date fixes what is available, the headcount fixes the budget per head. The project holds what is fixed, what is decided and what depends on what, and the question worth asking is always "what does this change?" My Iceland trip was the same shape taken further, with the record kept outside the project; [Episode 3](/guides/claude/3-hand-off-the-job/) walks through it.

### A one-off question stays a chat

Not everything earns a project. What to cook for six on Saturday, how to word one email, what a clause means: ask in a chat and move on. A project costs setup and upkeep, and you only get that back from work you return to. When in doubt, start in a chat. If it keeps growing, move it in later: the arrow next to the chat's name has an "Add to project" option.

## Instructions should grow with the project

Instructions are the text Claude reads at the start of every chat in the project. The mistake is writing a manual on day one. My four projects sit on a ladder, and the ladder is the advice:

- **None.** Iceland has no instructions at all. It still worked. Starting with nothing is legitimate.
- **A preference list.** My job search is a short list: who I am, what I want and do not want, how I like to be helped for each kind of task, a line of style. A page at most.
- **A role, principles and anti-patterns.** Health opens with a role for Claude, then operating principles, a rule to read the files before recommending anything, a list of responsibilities and a list of things to stop doing.
- **An operating system.** My finances run on a full protocol: how to run the interview, how to track decisions, how to keep the state file, how to find facts. The template two sections down is that protocol, shrunk.

To climb, start with nothing, or with what the builder prompt below writes for you, and add one line every time you catch yourself explaining the same thing again.

Anti-patterns are the most underrated rung. We write what we want ("be direct", "be thorough") and skip what we hate: filler encouragement, softening a point I need to hear, repeating back what I just said. A stop-list is easier to write, because every annoyance hands you a line, and easier to check, because either Claude still does the thing or it does not.

One distinction the next sections lean on. **Project instructions** are what is true in every chat of the project: who I am, how Claude should work, the rules for the files. A **first-chat prompt** is a one-off kickoff for what I am doing now. If it will still be true in a month, it goes in the instructions; if it is about today, it goes in the chat. The account-wide field from [Episode 1](/guides/claude/1-set-up-your-account/), Instructions for Claude, is the third layer, for how you want Claude to behave everywhere.

## Grilling makes Claude interview you until nothing is left assumed

Grilling is Matt Pocock's technique, not mine. It is a skill (a saved set of instructions Claude loads when a task calls for it) that he open-sourced under the MIT license (copyright 2026 Matt Pocock). The write-up is [his page on grilling](https://www.aihero.dev/skills-grilling) and the text lives in [his skills repository](https://github.com/mattpocock/skills). I teased it in Episode 0: I designed this series by running a session with it, and my finance project was designed the same way.

**What it does.** You tell Claude about a plan, a decision or an idea. Instead of answering, Claude maps it as a tree, where every decision branches into the decisions that hang off it. It asks every question it can ask right now (the skill calls that set the frontier), all in one numbered round, each with its own recommended answer. You answer; your answers settle some branches and unblock others; Claude works out what it can now ask and runs the next round. It stops when every branch has been visited and nothing is silently assumed, and it does not act on any of it until you confirm that you both understand the same thing.

**Why it works.** You react to a recommendation instead of facing a blank page, which is the lesson of Episode 0 applied to a decision. The numbering makes a round quick to answer. The tree surfaces questions you would not have known to ask, because they only exist once an earlier decision is made. And finding facts is Claude's job, never yours, so your time goes into the decisions, the one part only you can do.

**When to reach for it.** Before anything where a wrong assumption is expensive or where you do not know what you do not know: a decision with many parts, a plan you suspect has holes, a project you are about to set up. Not for a quick question; a numbered round is a heavy answer to a light need.

Here is the file, exactly as Matt publishes it (`skills/productivity/grilling/SKILL.md`, commit `95249b0`, 7 October 2026). It is written for Claude to follow, not for you to read, so it sounds like instructions to a colleague. I have not changed a word, and you should paste it exactly as it is. The repository has the latest version if it has moved.

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

A few things in it, in plain words. The line about dispatching a sub-agent assumes Claude can send a helper out to find things, and Anthropic's page on plugins says sub-agents run in Cowork and Claude Code, not in chat. Whether or not yours sends a helper, the sentence that matters is the one beside it: do not ask me for anything you could look up yourself. In a chat, expect Claude to do that looking itself, with web search on ([Episode 1](/guides/claude/1-set-up-your-account/) shows how). The format in the middle is the shape of one question: a title, a body, then the recommendation, worded so that a plain "yes" accepts it. And older write-ups of this technique describe Claude asking one question at a time. It has asked in rounds since the end of July; the text above is what the repository says today.

If rounds are too much for you, Matt supports going back to one question at a time with a single line. This one also goes in as it is:

```text
When grilling, ask one question at a time.
```

He suggests adding it to a file called CLAUDE.md, which you do not have in a chat. My suggestion, mine and not his, is to put the line in the message that starts the grilling, or in Instructions for Claude, or in a project's instructions. If you stay with rounds, answer by number. Matt's example from his docs is `1 yes, 2 the second option, 3 no, here's why`.

### Three ways to put grilling to work

**Upload it as a Skill.** Grilling then works in every chat. Anthropic's one-line difference from a project: a project is background knowledge that is always loaded, while a skill is a procedure that activates when needed and works everywhere across Claude. The route, as Anthropic documents it:

1. Check that "Code execution and file creation" is on (Settings > Capabilities). It is on by default, and the audit prompt in [Episode 1](/guides/claude/1-set-up-your-account/) had you confirm it. Skills need it.
2. Make a folder named `grilling`, and inside it a plain text file named `SKILL.md` containing the block above.
3. Zip the folder, so the ZIP contains the `grilling` folder with `SKILL.md` inside it, not `SKILL.md` loose in the ZIP.
4. In the left sidebar choose Customize, then Skills. Click the "+" button, then "+ Create skill", choose "Upload a skill" and pick the ZIP. It appears in your skills list.
5. Check the switch next to it is on. Then, in any chat: "Use my grilling skill to work through [the decision]." Claude can reach for a skill on its own; if it does not, Anthropic's advice is to name it in your request.

Never made a ZIP, or not sure how to create a file with an exact name? Ask Claude: "I use a [Mac / Windows] computer. How do I put some text in a file called SKILL.md inside a folder called grilling, and zip the folder?"

Anthropic's advice for any skill you upload is to install only from sources you trust and to read the file before you switch it on, since uploaded skills are not reviewed by Anthropic. You have just read this one.

**Paste it into one chat.** The quickest way to try it, and it needs nothing set up. Paste the whole block into a new chat, then send this:

```text
Grill me about [the plan, decision or idea]. Follow the instructions above.
```

Not sure how to describe it? Ask Claude: "I have pasted a grilling skill. Help me describe the decision I want grilled in two sentences." Make sure web search is available in that chat, because finding facts is Claude's job here.

**Bake it into a project's instructions.** That makes one project run this way from its first message; it is the next section. My advice: paste it to try it today, upload it if you will keep using it, and bake it in when a project should always run this way.

## Any big decision can run as a grilling project

For a big, multi-part decision (estate planning, a renovation, choosing a school, a career change), a project built on grilling is the setup I trust most. My finance project is the original, about three times the length of what follows; this template keeps the parts that generalize. It is built on Matt Pocock's grilling skill, and it comes as two separate blocks, for the reason given earlier: the first is project instructions, true in every chat; the second is a first-chat prompt, used once, to start round one.

Block one, the project instructions:

```text
This project is where I work through [the decision, e.g. a kitchen renovation] with you. Treat it like a design review: every decision branches into the decisions that depend on it.

How to work:
- Grill me. Each round, ask every question that can be asked now, numbered, each with your recommended answer and a one-line reason, worded so that "yes" accepts your recommendation. Then stop and wait. After my answers, work out what can now be asked and run the next round.
- End every round with a decision ledger: settled, open, and blocked on what.
- Finding facts is your job, never mine. Verify anything that changes year to year (rates, limits, prices, rules) with a web search, never from memory. Ask me only for what is in my head or my accounts.
- Survey the whole option space, including the lesser-known options and the default most people drift into. Give the tradeoffs: cost, flexibility, complexity, how reversible. Flag one-way doors.
- Push back on vague or contradictory answers. Name what I may not know, with a short explanation.
- Flag what needs a professional, and tell me what to ask them so they carry out an informed decision. Give me the full analysis anyway.
- Do not produce deliverables or call anything done until I confirm we share an understanding.

State file: [decision]-state.md is the single source of truth.
1. Read it first in every chat, and never re-ask what it says.
2. If the chat or your memory disagrees with it, flag the conflict and ask which is current.
3. Propose changes as a short list (added, changed, removed) before applying them.
4. When the state changes, give me the complete replacement file, never a partial edit.
5. Date every fact. Flag any older than 90 days as stale.
6. Settled decisions live in the file. Reopening one is explicit: name it, give the old answer and why it changed.
If there is no file yet, run Round Zero: ask the root questions, and when they are settled give me version one.
```

Block two, the first-chat prompt, sent as the first message of a new chat in the project:

```text
Start round one. The decision: [what I am deciding, in a sentence or two]. Already fixed: [deadlines, budget, people involved, anything non-negotiable]. What worries me: [the thing I keep circling].
There is no state file yet, so run Round Zero: open with an empty decision ledger and ask the root questions, with your recommended answers.
```

Both blocks are templates to tailor, not to paste as they are. Not sure what goes in the brackets, or whether the template fits your decision? Ask Claude: "Here is a decision-project template. I am deciding [what]. Fill in the brackets from what I tell you, and cut anything that does not apply." When the first rounds settle, Claude hands you version one of the state file; save it and add it to the project's files. A later section shows how to keep it current.

## One prompt builds the whole project for you

At the start of this series I told you the sentence that matters most: AI is really good at writing prompts, instructions and configurations for AI. The builder prompt is that sentence turned into a tool. You paste it into an ordinary new chat, outside any project. Claude asks what the project is for, interviews you (with the grilling skill if you have it installed or pasted, otherwise one question at a time), works out which of the three shapes you have, and hands back three things.

They go to three different places, and this is where the distinction from earlier becomes concrete. The **project instructions** go in the project's instructions field, and are true in every chat. **Version one of the living file** goes in the project's files: it holds the current state of the work and gets replaced when the state changes. It is written in markdown, which is plain text with a few conventions (a line starting with `#` is a heading, a line starting with a dash is a bullet), so any text editor opens it; the files in my own projects are `.md` files. The **first-chat prompt** is the first message of a new chat inside the project, a one-off kickoff for what you are doing now.

```text
I want to set up a Claude project, and I want you to build it with me. Start by asking what the project is for. Offer these as examples, and take anything else I say: health or training; a job search; a trip; an event I am organizing; the paperwork for a new job; teaching or sermon preparation; a home project.

Then interview me about it. If I have the grilling skill installed or pasted in this chat, use it. If not, interview me yourself, one question at a time, with your recommended answer to each so I can say "yes" or correct you. Find out: what I am trying to get done; what is already decided; what is fixed or limited; who I am, as far as it matters here; how I want you to work with me; what I want you to stop doing; and what I would otherwise have to explain again in every new chat. Look up any fact you can find yourself instead of asking me. Push back if my answers are vague or contradict each other.

When you understand the project, tell me which shape it is, and why:
- living state: decisions pile up and must stay settled (a health plan, a job search). It needs one file that holds the current state.
- reference library: documents I upload once and ask about many times (a new job's paperwork). It needs short instructions and well-named files.
- plan with constraints: each commitment limits the rest (an event, a trip). It needs a file of what is fixed and what is decided.
If it is really a one-off question, say so and tell me to keep it as a chat.

Then hand me three things, each in its own block I can copy:
1. Project instructions, under 300 words: who I am, what the project is for, how you should work with me, and what you should stop doing. Add these state-file rules in compact form: read the file first and never re-ask what it says; if chat or memory disagrees with the file, flag the conflict and ask which is current; propose changes as a short list before applying them; when the state changes, give me the complete replacement file, never a partial edit; date every fact and flag stale ones; settled decisions live in the file, and reopening one is explicit. Keep everything short, because a long set of instructions is harder for you to follow and harder for me to maintain.
2. Version one of the living file, in markdown. Give it to me as a file to download if you can; if not, as text I can copy into a file ending in .md. Fill in what I told you, mark what is still unknown, and date every fact.
3. A first-chat prompt: the message I send to start the project's first chat, about what I am doing now rather than what is always true.

Finish by telling me in three short steps where each of the three goes, and ask what I want to change.
```

Not sure what to write? This block is the ask: it is the request "build me a project" written out so you never face the blank page. To bend it, tell Claude how in one line, for example: "Run the project builder, but I already know this is a reference library, so skip the shape question."

Answer it messily; a rough answer gets a sharper next question. Read what comes back before you paste anything: it is a draft, and the instructions are the part most worth editing. I keep them short on purpose, because every line competes for Claude's attention and for mine when I maintain it. Never made a markdown file? Ask Claude: "How do I save text as a file ending in .md on my [Mac / Windows] computer?"

To create the project, hover over the left side of your account and click Projects (or go to claude.ai/projects), then click "+ New Project" in the upper right. Claude does not have access to the project's name and description, so they are labels for you; put nothing in them that Claude needs. On the project page click "Set project instructions", paste the instructions and click "Save instructions". Add the file with the "+" button in the project's knowledge area on the right (some help pages call it "Files"; it is the same place). Then start a chat inside the project and paste the first-chat prompt. Projects exist on every plan; Free is capped at five.

## Two worked examples: health and job search

### Health

**What it holds.** The plan my doctor or coach has given me, my goals, my logs and the baseline I work from. Claude's job is to help me understand what they tell me, keep the records in order and prepare questions for the next appointment. It is not to stand in for them. That keeps the project on the safe side of the subject, and it covers most of what I need between appointments anyway: understanding and organization.

**Memory will not carry it.** Anthropic's memory leaves health and other sensitive topics out unless you turn on "Include sensitive topics in memory" (Settings > Memory, covered in [Episode 1](/guides/claude/1-set-up-your-account/)). For a health project, the file does the remembering.

**The instructions.** Mine was a role, principles and a stop-list, with no rules for its files, and that was the problem. I had four files (a profile, goals, the current program and a nutrition baseline), replaced by hand by deleting and re-uploading, and nothing told Claude which one won when a file, a chat and its memory disagreed. They drifted. The fix is not more files but the six rules. Here is the shape, short, with the rules added:

```text
I am [one line on who I am, only what matters here]. This project is where I keep my health and training organized alongside my doctor and my coach. Your job is to help me understand what they tell me, keep my records and logs in order, and prepare questions for my appointments. Decisions about treatment, medication and dosage stay with them.

How to work:
- Read the files before you answer, and tell me where my logs differ from the plan.
- Be direct. Say what the evidence supports, what is a guess, and what we would need to measure to know.
- When you suggest a change, give the expected effect, the tradeoff, and how and when we will check it.
- Prefer the simple option I can keep doing.

Stop doing: filler encouragement, softening something I need to hear, and repeating what I already know.

State file: current-program.md is the current state. Read it first and never re-ask what it says. If the chat or your memory disagrees with it, flag the conflict and ask which is current. Propose changes as a short list before applying them. When the state changes, give me the complete replacement file, never a partial edit. Date every fact and flag stale ones. Settled decisions live in the file, and reopening one is explicit.
```

Not sure what to write? Ask Claude: "Write short project instructions for a health project where you help me understand what my doctor said and keep my logs in order. Include the six state-file rules." The builder prompt does the same from an interview.

**The first chat.** Upload what you have: the plan, recent records, a few weeks of logs. Ask Claude to turn them into version one of the file, tell you what is missing, and list what to ask at the next appointment. Later chats start from the file.

**The living file.** The current program is the file that changes; the other three change rarely. It holds the plan as it stands today, the latest numbers with dates, what has been settled and why (so a bad week does not reopen it), open questions for the next appointment, and a short dated changelog.

**A practical note about memory.** A project has its own memory. Anthropic's help pages say Claude uses it alongside your ordinary memory, and that with memory on, Claude can reference the project's memory in chats outside the project too. If you want a project kept apart, its page has a "Use account memory" switch under Memory, and the pages say turning it off keeps the project's memory "fully separate". They do not spell out everything that covers, so treat it as the right switch, not a guarantee.

### Job search

This series started as a job-search guide I emailed to friends, and the project it described is still the clearest example of living state.

**What it holds.** A pipeline tracker and an experience file. The tracker has one entry per company: stage, fit, watch-outs, and the best case for and against. The experience file carries the rule that earns its keep: it is the only allowed source for resume claims. Nothing goes on a resume unless it is there or I confirm it in the chat. That removes the quiet failure where a bullet is plausible, polished and not quite true.

**The instructions.** A short preference list, with the state-file rules attached to the tracker:

```text
I am [role and background in two sentences]. I am looking for [kind of role]. I am not interested in [sectors, roles or conditions that are out]. Fixed constraints: [location, pay floor, anything else].

How to help:
- Evaluating a company: be rigorous and defensible, and say what signals fit and what does not.
- Interview prep: assume I am fluent, go deep, ask sharp questions.
- Resumes and cover letters: use only what is in experience.md or what I confirm in the chat. If it is not there, ask me. Never invent.

Style: skip surface summaries, do not sugarcoat, and state the assumptions you are making.

State file: pipeline.md is the current state of the search. Read it first and never re-ask what it says. If the chat or your memory disagrees with it, flag the conflict and ask which is current. Propose changes as a short list before applying them. When the state changes, give me the complete replacement file, never a partial edit. Date every fact and flag stale ones. Settled decisions live in the file, and reopening one is explicit.
```

Not sure what to write? Ask Claude: "Write short project instructions for my job search from these notes: [what you want, what you do not, how you like to be helped]. Add the six state-file rules for a pipeline tracker."

**The first chat.** Build the experience file by interview. Ask Claude to interview you about your three to five biggest wins, one at a time, and write each up: the situation, what you did, what made it hard, the result. Then add your resume and start the tracker with the companies you already have in mind. For a deep look at one company, Research ([Episode 1](/guides/claude/1-set-up-your-account/)) is the tool.

**Why a file earns its place here.** When offers arrive weeks apart, the framework you judged the first one by is in the file, so the second is held to the same standard, not to how you felt that week. Mine ended with an offer accepted.

## A living file stays current because you replace it every time it changes

In a chat project, Claude can read the files but cannot write to them. So the loop is yours to run, and it has four beats:

1. Something changes: a new number, a decision, a stage moves. Claude proposes the change as a short list of what was added, changed and removed.
2. You approve it or correct it.
3. Claude gives you the complete replacement file.
4. You remove the old file from the project and add the new one.

That fourth beat is the main cost of projects, and it is also why they work. The file passes through your hands every time, so you read it every time. A file that changed behind your back is one you stop trusting.

The six rules make the loop reliable. They are already in the blocks above, so Claude follows them, but in plain words:

1. **Read the file first and never re-ask what is in it.** That is the point of having one.
2. **If chat or memory disagrees with the file, flag the conflict and ask which is current.** Without this rule, a file, a memory and a chat each hold a different version and nobody notices.
3. **Propose changes as a short list before applying them.** You see what is about to change while it is still cheap to say no.
4. **When the state changes, give me the full replacement file, never a partial edit.** You replace the file whole. A partial edit means you patch it by hand, and that is where mistakes enter.
5. **Date every fact and flag stale ones.** A number without a date is a rumor.
6. **Settled decisions live in the file, and reopening one is explicit.** This is what stops the same argument coming back in chat fourteen.

Memory and the file do different jobs. You can tell Claude "remember this" or "forget that" in a chat, and the update applies to your next conversation; that suits small preferences. On paid plans, Claude can also search a project's earlier chats when you ask "what did we decide about X?". Anything that has to be exact belongs in the file.

**The upgrade: a Google Doc.** If you live in Google Docs, the living file can be a Doc, and most of the re-upload step goes away. Connect the Google Drive connector once (Customize > Connectors; [Episode 3](/guides/claude/3-hand-off-the-job/) covers connectors properly), then in the project's files click "+", choose "Drive" and pick the Doc. It works in private projects only, Claude reads the text and not the images, and the project's copy refreshes from Drive when you open the project, so I treat it as current as of my last visit, not as live. Editing the Doc from a chat needs the separate Google Docs connector, which Anthropic lists as beta; ask for a "Google Doc" by name, since asking for a generic "doc" creates a local file instead. I do not know whether edits made that way reach the project's copy, so check it after one. And one lesson from Iceland, where the itinerary was a Doc: tell Claude to edit the Doc only when you ask. That is an instruction you write, not a setting, because Anthropic documents no switch for it. The documented control for a pause before actions is Manual mode ([Episode 1](/guides/claude/1-set-up-your-account/)).

If your projects are the new version from the start of this episode, Claude keeps a project's memory files itself and can change the project's instructions when you ask, and part of this loop may fall away. Ask Claude "how do I keep this project current now?"

If the re-upload loop starts to annoy you, that is a signal. The work wants tools that touch your files and apps directly, and that is Episode 3.

## Two questions tell you when a project is the wrong tool

**Will I come back to this, reuse the material, or keep getting tasks from it?** If yes, make a project. If no, a chat.

**Do I want an answer or a finished thing?** An answer, an explanation, a draft you will rework yourself: a chat or a project chat does it. A finished thing, like a reconciled itinerary, a drafted document or an organized folder: ask for the finished thing, with the tools to make it. That is [Hand Claude the whole job](/guides/claude/3-hand-off-the-job/), Episode 3. The two questions are independent. A project can host either kind of request, and so can a chat.

There is a third edge. When the data and files are the work, you have outgrown a project. My finances were a project first, built on grilling, with a state file. They are now a folder on my computer that I work in with Claude Code, because dropping PDFs into a folder is easier than uploading them one at a time, and the folder serves both me and Claude. The project was the architect's room; the folder is the job site. A later episode, Episode 5, covers it. It is not published yet.

## Checklist

Locations are as of the day I wrote this. If one is not there, the app has moved it; ask Claude "where do I find X now?"

- [ ] I know my project's shape (living state, reference library, plan with constraints), or I have decided it stays a chat
- [ ] The project exists (hover over the left side of your account and click Projects, or go to claude.ai/projects, then "+ New Project")
- [ ] Project instructions are short and saved ("Set project instructions" on the project page), and carry the six state-file rules if the project has a living file
- [ ] Version one of the living file is in the project (the "+" in the project's files area, on the right)
- [ ] The first-chat prompt went into a new chat inside the project, not into the instructions
- [ ] After every change to the state: a change list, a full replacement file, the old file replaced
- [ ] Grilling is set up the way I prefer: uploaded (Customize > Skills, with "Code execution and file creation" on in Settings > Capabilities and the skill's switch on), pasted into one chat, or in a project's instructions
- [ ] If I want one question at a time, the line is in my message, Instructions for Claude, or the project's instructions
- [ ] I have decided about memory for this project, either way ("Use account memory" on the project's page; "Include sensitive topics in memory" in Settings > Memory)
- [ ] If the living file is a Google Doc: the Drive connector is connected, the project is private, and "edit the Doc only when I ask" is in the instructions
