---
title: "Run your job search with Claude"
description: "A project holds your judgment, Cowork does the legwork, and you stay the judge: vetting companies, tailoring applications, keeping the tracker current from your inbox, and preparing for interviews and offers."
draft: true
authorship: ai-drafted
---

<!--
DRAFT NOTES (remove before publishing)
- Status: first pass, drafted by Claude from PJ's project summary and the
  plan in docs/guides/claude/ep5-job-search-brief.md. PJ edits next, then
  his brother adds his Cowork material.
- Every "TODO (brother)" block marks a place that needs his real use. Do
  not fill one with something neither of you ran.
- Every "TODO (verify)" marks a product fact with no VERIFIED.md row yet.
- Before publishing: set draft: false, add pubDate, decide authorship,
  add the one forward link in Episode 2's job-search section, and
  re-verify the rows this episode relies on (10, 14, 97, 117, 119, 121,
  127 to 133, 137).
-->

My last job search ran about two months, out of one Claude project, and ended with an offer accepted. <!-- TODO (brother): confirm this sentence describes what he did. -->
My brother took the same setup further, handing whole jobs to Claude: keeping the tracker current from his inbox, drafting the follow-ups. This episode is what the two of us found helpful. It is not a ceiling. Claude is good at finding angles you would not have thought to try, and some of the most useful things in my search were ones I had not planned to ask for.

The setup splits the work in two. A project holds your judgment: who you are, what you will and will not take, and what is true about your experience. Cowork does the legwork: finding and vetting roles, tailoring documents, and keeping your tracker current from your email and calendar. You review what comes back and make every call.

Four rules run through everything below. I learned three of them the hard way:

1. **Never invent.** Nothing goes on a resume, a letter or a message unless it is in your experience file or you confirm it in the chat.
2. **Claude drafts, you send.** Claude can send email through the Gmail connector, so keep the sending yours. No auto-applying.
3. **Write your criteria down early, and let the offers show you what was missing.** More on this at the end; it did not go the way I expected.
4. **Connect your personal Google account, never a work one.** If you are searching while employed, your work inbox stays out of this.

Menu paths here are as of the day this was written, and the app moves, so every one carries the same fallback: if it is not there, the app has moved it; ask Claude "where do I find X now?"

## Set it up once: a project for judgment, connectors for legwork

If you read [Episode 2](/guides/claude/2-projects/), you have most of this already: its job-search example has the project instructions block to start from, with the rule that resume claims come only from your experience file. Use it as written.

If you are starting here, the short version:

1. Make a project called "Job search" and paste in a few lines about you: your background in two sentences, what you are looking for, what is out, and your fixed constraints (location, pay floor, anything else). Ask Claude to help you write them. [Episode 2](/guides/claude/2-projects/) explains projects properly.
2. Connect Gmail and Google Drive at Customize > Connectors, and turn them on for a chat from the "+" menu, under "Connectors". Turn on the Google Docs and Google Sheets connectors from the same "+" menu; they are separate from Drive, newer, and labeled beta. [Episode 3](/guides/claude/3-hand-off-the-job/) walks through connecting, and why to start in Manual permission mode.
3. Know where Research is: the "+" menu, then "Research", with web search on. It is for paid plans, and it is the tool for a deep look at one company.

<!-- TODO (brother): if he connected anything else (Google Calendar, Docs), add it to step 2 here, once the Calendar facts are verified. -->

That is the whole setup. The rest of the episode is what to do with it.

## Decide what you are aiming at, and make Claude defend its rankings

My first chat was a brainstorm: here is my background, here is what I want, what kinds of companies and roles should I be looking at? It was useful, and it was also where Claude made its first confident mistake. It called two big companies "elite" and implied their pay matched the best employer on my list. I asked how it knew. It admitted it was going on public reputation and had no current pay data.

After that I made Claude defend every ranking: "Why does this one rank lower?" and "How do you know that?" Those two questions split what was checkable from what was reputation, and the later answers labeled the difference without being asked.

The other early miss cut the other way. Claude told me to deprioritize the companies a recruiter had sent me, as noticeably weaker. One of them produced an offer. I still turned it down, so the read held up in the end, but that offer was a useful yardstick when the real decision came, and following the advice would have skipped it. A ranking is a starting point, not a filter.

Use the brainstorm to widen the search, not just to sort it. Ask for directions you have not considered: adjacent industries, roles that use the same skills under a different title, kinds of companies you have been ignoring.

```text
Here is my background: [two or three sentences, or attach your resume]. I am looking for [the kind of role]. I will not take [what is out]. My fixed constraints are [location, pay floor, anything else].

1. Suggest the kinds of roles and companies I should be looking at, including at least three directions I probably have not considered, and say why each fits.
2. For every ranking or judgment you make, say what it rests on: something you can check, or reputation and pattern-matching. Label the second kind clearly.
3. Ask me the questions you would need answered to sharpen this list, one at a time.
```

Not sure what to put in the brackets? Ask Claude: "Help me write two sentences about my background and a list of what I will not take, for a job search. Ask me questions one at a time."

### One thing the setup handles well: a search that has stalled

If you have been at it for months and nothing is working, the useful move is to stop sending applications for an hour and hand Claude the evidence. A list of where you applied, for what, and what happened (no reply, a screen, a rejection after the second round) is enough. Claude is good at reading a list of outcomes and finding what they have in common, which is hard to see from inside it.

```text
My job search has stalled. Here is every application from the last [few months]: the company, the role, how I applied (posting, referral, recruiter), and how far I got. [paste the list, or attach the spreadsheet]

Look for the pattern. Where do I drop out most often? What do the ones that went further have in common? Is the problem more likely the roles I pick, how I apply, my resume, or how I interview? Rank your explanations by how well the evidence supports each, say what evidence would change your mind, and suggest the one change to try first.
```

Not sure it fits your search? Ask Claude: "Here is a prompt for diagnosing a stalled job search: [paste it]. Help me adapt it. I have [what records you have]."

<!-- TODO (PJ / brother): a real, shape-only example of this working, from either search, if there is one. If not, it stays a suggestion. -->

## Build your experience file by letting Claude interview you

The file that did the most work in my search was not the resume. It was an inventory of four projects I had worked on, built in one chat where Claude interviewed me about one project at a time. Every later question ("which project should I lead with for this company?") drew on it.

The interview is what made it good. Claude asked things I would not have volunteered: how I tested it, what was hard, what I would change, what was different before and after. Each project came out in the same shape: a one-line summary, the context, my role, the technical choices, the hardest part, the outcome, how it was tested, and what I would do differently.

This is the file the first rule depends on. Nothing goes on a resume unless it is in here or you confirm it in the chat.

```text
I want to build an experience file for my job search: one document covering several projects or accomplishments, so you can help me answer "what have you built that you are proud of?", "why are you a good fit?" and "how is your experience relevant?", and so resume claims have one source.

Interview me about one project at a time. Start by telling me what to cover in my first rough description. Then ask clarifying questions, the kind an interviewer would find useful: the context, my role, the choices I made, what was hard, the result, how I knew it worked, and what I would do differently. When we finish a project, write it up in a consistent template and ask whether I want to add another.

Use only what I tell you. If something would make the write-up stronger but I have not said it, ask me instead of filling it in.
```

Not sure how to start? Paste the prompt as it is. The first thing Claude does is tell you what to write.

Save the result as a file in the project ([Episode 2](/guides/claude/2-projects/) covers files and keeping them current). When something new is worth adding, ask Claude for the complete updated file and replace the old one.

## Vet every company with the same questions, and ask what the job really is

The habit that paid off most was a fixed set of questions I ran on every serious company, at least six of them. Because every company got the same questions, I could compare them side by side instead of by whichever conversation I remembered best.

One question did more than the rest: what would the job actually be, day to day? A company's pitch and its engineering work are often different things. Asking it, and following up with "so is the job basically X?", kept turning up what I would really be doing.

It changed two decisions. It talked me out of applying to a very well-funded AI company: the questions showed the job was mostly consulting work at customer sites, not what I wanted to build. And for the company I joined, it named the one question that decided everything, whether the work was deep engineering or features and dashboards. I asked it on a call with the founder, the answer was the first one, and that settled it.

This is a general version of my prompt. Mine had extra questions about defensibility and venture scale, because evaluating startups is my background; add your own lenses the same way.

```text
I am considering [company] for a [role] position. I want a real analysis, not a summary of their website.

1. What they actually do, in plain, precise terms.
2. Who pays them, and why: whose problem do they solve?
3. What this job would actually be, day to day.
4. Who they compete with, including the customer just doing it themselves.
5. The risks: to the company, and to someone joining it now.
6. Where the company seems to be heading over the next few years.
7. What I should ask in a first interview, and why each question matters.

Say what each claim rests on, and flag anything you could not confirm. Do not sugarcoat weaknesses.
```

Not sure it fits your field? Ask Claude: "Here is a prompt for vetting a company before I apply: [paste it]. Add two or three questions that matter for [my field or the kind of role], and keep the rest."

For a company you are serious about, turn on Research for this prompt: it goes deeper and cites more sources. Then read two or three of the sources. A wrong fact here shapes everything after it, and Claude gave me two different headcounts for the same company in two different chats.

## Tailor each application, and never let Claude add what you have not done

The worst thing Claude did in my search was on a tailored resume. I asked it to fit my resume to a role at a large media company, and it added four tools I had never listed. They were plausible, polished and wrong. I caught it, confirmed the two I had actually used, and it rebuilt the resume. From then on the rule was in my project instructions: never add skills, tools or experience that are not in the files, and ask first. It is the quiet failure in AI-written applications, a bullet that sounds right and is not quite true, and an interviewer who asks about it will find out.

I generated tailored versions in the chat and never kept them. If I did it again, each one would be its own Google Doc, so I could see what I had sent where. The Google Docs connector creates Google Docs in your Drive; say "Google Doc" by name, because a request for just a "doc" makes a different kind of file.

```text
Tailor my resume for this role: [paste the job posting, or a link].

Use only what is in my resume and experience file. Do not add any skill, tool, number or responsibility that is not there. If the posting asks for something I might have but the files do not show, list it under "Ask me" instead of adding it.

Create the result as a Google Doc in my Drive called "[Company] [role] resume". At the top of the doc, list what you changed from my base resume and why. Then draft a short cover letter in the chat, under the same rules.
```

Not sure what to change? Ask Claude: "Here is a prompt for tailoring a resume: [paste it]. I also want [a different format / a one-page limit / a summary section]. Rewrite it, and keep the rule about adding nothing."

Read every tailored version before it goes anywhere, and check each line against the "Ask me" list.

<!-- TODO (brother): did he tailor through Google Docs, or another way? Replace the "if I did it again" framing with what he actually ran, if it worked. -->

## Let Cowork keep your tracker current from your inbox

My tracker was a file in the project: one entry per company, with its stage, what it does, why it fits or does not, and the case for and against. It did a lot of work. It also stopped being true at exactly the wrong time. The copy in the project stops a week before the end of my search, when decisions sped up and I stopped re-uploading it. The final offer terms and the decision to pass on one company exist only in chats.

That is the job to hand to Cowork. The facts of a search land in your inbox: application confirmations, recruiter replies, interview invites, rejections. Claude can search Gmail, build the tracker as a Google Sheet, and update it when you ask, so the tracker comes from the record instead of from your memory of it.

<!-- TODO (brother): this section should rest on what he actually ran. Replace or rework everything below with his real prompts, what came back, what was wrong, and what he changed. Keep the read-only line and the edit-only-when-asked rule unless his experience says otherwise. -->

```text
Search my Gmail for everything connected to my job search since [date]: application confirmations, recruiter messages, interview invitations and scheduling, rejections and offers. Search by words like "application", "interview", "recruiter", "offer" and "unfortunately", and by the name of every company you find.

Create a Google Sheet in my Drive called "Job search tracker", one row per company, with these columns: company; role; how I applied; current stage; date of the last message, and who sent it; what happens next and who owes it (me or them); and a link to the latest email. Add a second tab called "Changes", one row per update: the date, what changed and why.

Do not guess any value. If two emails disagree, show both and flag it. This is read-only for Gmail: do not send, delete, label or move anything.

Once the sheet exists, edit it only when I ask. When I do, add a row to "Changes" first, then make the change, then tell me in the chat what you changed.
```

Not sure it fits your search? Ask Claude: "Here is a prompt for building a job-search tracker from my email: [paste it]. Add a column for [what you want to track], and keep the read-only line and the rule to edit only when I ask."

The "Changes" tab does the job of the corrections log in [Episode 3](/guides/claude/3-hand-off-the-job/): when something looks different, you can see what changed and when. The rule to edit only when asked is a request, not a lock, so if you want to approve each edit, use Manual permission mode for that chat.

One limit to know: Claude does not change files stored in a project. The tracker lives in your Drive and the experience file in the project, and the experience file still gets updated the way [Episode 2](/guides/claude/2-projects/) describes: Claude writes the complete new version, and you replace the old one.

<!-- TODO (verify + brother): Google Calendar. Row 128 confirms only that the connector exists. Verify what it can read and create, and whether it asks before creating or changing an event, then add what the brother did with it (interview invites into the tracker, holds for prep time). -->

## Claude drafts, you send

Most of the email in my search was me replying to someone. The routine that worked: paste the recruiter's message in as it is, ask "what do you think of this, and how should I reply?", then write my own reply and ask Claude to check it. Claude was good at reading the subtext of a message. Writing the reply myself kept it in my voice.

The checking had explicit rules: nothing inaccurate, nothing that reads as written by AI, nothing patronizing. The rules earned their place on the decline messages. One draft said the person I was declining had "gone to bat" for me on pay; they had made a standard response to a competing offer, and the line came out. I also cut an offer to hop on a call, which could have reopened a negotiation I had finished, and a phrase that could have read as a complaint. The person I declined wrote back warmly to keep the door open.

```text
Here is a message I received: [paste it as it is]. Tell me what you read in it, including anything implied. Then I will write my reply, and I want you to check it against these rules:

- Nothing inaccurate, and nothing that claims to know what the other person thinks or did.
- Nothing that reads as AI-written or patronizing.
- Nothing that reopens something I have already settled.

Suggest the smallest edits that fix what breaks a rule, and leave my voice alone.
```

Not sure what to write back? Ask Claude to draft a reply, then rewrite it in your own words before you run the check.

If Claude is drafting in Gmail itself, keep the sending yours. The Gmail connector can send, reply and forward. By default it asks before each of those, but in Auto permission mode its safety check decides what goes ahead, so do not count on a prompt. Switch to Manual whenever Claude might send anything ([Episode 3](/guides/claude/3-hand-off-the-job/) has the details), and do not hand any tool the job of applying for you.

<!-- TODO (brother): his outreach. Did he have Claude draft follow-ups in Gmail? Did anything nearly go out that he had not meant to send? That story belongs here if it happened. -->

## Use Claude as a preparation coach

Interview prep was where Claude was most like a person helping me. Some of what worked:

**Find the gaps before the interviewer does.** Before one screen, Claude asked me directly how much hands-on experience I had with the area the role centered on, and how deep my knowledge went. The answers were "none" and "conceptual." Its verdict was blunt: I had built on top of the hard parts, not built the hard parts themselves. Everything else followed from that: which team to aim for, a short pitch, and how to answer honestly when the question came.

**A five-minute cheat sheet.** Before a later round: "Give me a quick review of [company] I can read in the five minutes before my next interview, and some questions I can ask." Cheap, and it is what I actually read in the hallway.

**Practice out loud.** "Let's do a mock Q&A." Then I said my answer out loud and Claude gave feedback on what landed and what did not. Typing an answer is not the same as saying one.

<!-- TODO (verify): if the episode names voice mode for this, add a VERIFIED.md row first. Until then it stays "out loud" with no product claim. -->

**Fewer, better questions.** Claude's first list of questions for one CEO call was about twenty, all of them pointed. I cut it to four or five, and asked for curious, not skeptical. That became the default.

**Learn the format.** Ask how the interview format works before you prepare for it. For one company I learned how interviews that let you use AI tools while coding are run, and how to practice for one.

**Debrief what you hear back.** After one onsite, the feedback was good with one flag: I was methodical but slow. They invited me back for a longer working session. Claude's read was that the extra round was a chance to fix that one concern, not a formality, and the plan followed from it: a hard limit on planning time, saying my priorities out loud, picking a direction at each fork and saying why. An offer followed.

```text
I have a [kind of interview] with [company] for [role] on [date]. Using my experience file and what you know about the company:

1. Ask me questions, one at a time, to find where I am weakest for this role. Be blunt about what you find.
2. Give me the questions I am most likely to get, and which of my projects to lead with for each.
3. Run a mock interview: ask one question, wait for my answer, then tell me what landed, what did not, and what to change. Push back the way a skeptical interviewer would.
4. Give me four or five curious questions to ask them.

After the real interview I will tell you how it went. Help me write a short debrief and decide what to change for the next round.
```

Not sure where to start? Ask Claude: "I have an interview on [date] and I do not know how to prepare. Ask me what you need to know, one question at a time, then make me a plan."

## Write your criteria down early, and let the offers show you what was missing

The plan was to write down how I would judge offers before any arrived. What I actually had was the list in my project instructions: the work I was interested in, what was out, location, a pay floor, meaningful equity at a startup. It worked as a filter. It did not make the decision.

What made the decision was not on the list: who I would report to, what I would learn and who I would get to know, how much I trusted the people running the company, and a lesson from an earlier job about how much a small early stake had actually been worth. Meanwhile, the money comparison favored an offer I turned down. If I had followed the list alone, I would have chosen differently, and I think worse.

So the rule I would give now: write your criteria down early, because a list keeps you honest when you are tired or flattered. Then, when offers arrive, ask Claude what is actually deciding it, and whether that is on the list. If it is not, add it, and hold every offer to the new list.

Three habits made the money side work:

- **Add one factor per turn.** I asked for the comparison one layer at a time: the offer as stated, then adjusted for how ownership shrinks as a company raises more money, then annualized, then what I gave up in salary, then taxes. Each layer moved the answer, and the first answer flipped. Taken at the first pass, it would have been the wrong pick.
- **Get the real numbers from the company.** One calculation came out wrong because it used an estimate where the company had the actual figure, and another carried forward an old number after the offer changed. Ask for the figures and give them to Claude.
- **Learn the terms before the conversation.** Offers come with vocabulary. Ask Claude to explain each term as it applies to your own offer, before you get on the call where it matters. For anything with tax consequences, check with someone qualified; Claude's job is to make sure you know what to ask.

Claude was not always right about timing. It suggested creating urgency everywhere, and I pushed back: some of these were people I knew, and pressure would rush my own decision more than theirs. It also suggested asking about equity early in one process, and I chose a call about the actual work first, because an equity question could have triggered a formal offer with a deadline before my other processes caught up. Both times my read was better, because I knew the people and Claude did not.

```text
Here are the offers I have, and the criteria I wrote down before they arrived: [paste both, or point to the file].

1. Compare the offers against my criteria, one factor at a time. Start with the offers as stated. Stop after each factor and tell me if the answer changed.
2. Explain any term I need to understand, using my numbers. Mark any number you are estimating, and tell me which ones to get from the company.
3. Then ask me what is actually pulling me toward or away from each offer. If something is deciding this that is not in my criteria, name it, and propose adding it to the list.

Do not tell me which to take until we have done all three.
```

Not sure what your criteria are? Ask Claude: "Interview me about what matters to me in my next job, one question at a time, and write the answers up as a short list I can judge offers against."

Pay figures and market data go stale quickly, so this episode has none. If you want them, ask Claude to research ranges for the role and cite its sources, then check them yourself. Money in general is [Episode 6](/guides/claude/), which is not written yet.

## Claude is a strong second opinion, and you are the judge

Most of the times I overruled Claude, I was right: the invented tools, the "elite" companies, the pressure tactics, the twenty questions, the decline message. That is not because Claude is bad at this. It is because I knew things it did not: the people, the history, what I actually did.

It went the other way too. I described one company's funding as an earlier stage than it was, Claude questioned it, and Claude was right. Near the end Claude named my last hesitation as a prior, not evidence about that company. I checked the people involved and took the job.

The pattern is the one from the rest of this series. Bring Claude the situation, let it push, and push back when you know something it does not. It is the best second opinion I have had. The call is still yours.

<!-- TODO (brother): one override of his own, either direction, if he has one. -->

## Checklist

- [ ] The project has instructions: background, what you want, what is out, fixed constraints, and "never invent" ([Episode 2](/guides/claude/2-projects/))
- [ ] An experience file, built by interview, is saved in the project
- [ ] Gmail and Drive are connected from your personal Google account, never a work one (Customize > Connectors), and Docs and Sheets are on for the chat ("+" > Connectors)
- [ ] Permission mode is Manual for the first Gmail connection and whenever Claude might send anything (message box, next to the model picker)
- [ ] Rankings come with what they rest on: checkable, or reputation
- [ ] Every serious company gets the same vetting questions, including "what is the job day to day?"
- [ ] Every tailored resume is checked line by line against the experience file
- [ ] The tracker is a Google Sheet with a "Changes" tab, and Claude edits it only when you ask
- [ ] Your criteria are written down before the first offer, and updated when the offers show what was missing
