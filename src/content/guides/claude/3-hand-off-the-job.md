---
title: "Hand Claude the whole job"
description: "Ask for the finished thing: have Claude find every booking in your email, build the plan as a Google Doc, and keep a record of what changed."
draft: false
pubDate: 2026-10-23
authorship: ai-drafted
---

So far in this series Claude has done the thinking and you have done the carrying out: pasting the instructions, saving the file, replacing it in the project. This episode hands over the carrying out. You describe the result, and Claude carries out the steps: searching your email, building the table, writing the document. You review what comes back. The clearest example is a job I handed it, planning a trip to Iceland out of bookings scattered across an inbox.

By the end you will have connected Gmail, Google Drive and Google Docs to Claude, run a booking reconciliation, started an itinerary document that keeps its own corrections log, and learned the one rule I give Claude about editing it. The trip is only the example.

Menu paths here are as of the day I wrote this, and the app moves, so every one carries the same fallback: if it is not there, the app has moved it; ask Claude "where do I find X now?" This episode stays in the browser and the phone app, with one short section about material on your own computer.

## A job gets you a result, and Claude chooses the tools

A question gets you an answer. A job gets you a result, and the difference is who does the middle. "Find every booking for this trip in my email and put them in one table" is a job: Claude searches, reads, compares and builds, and you check the table.

This is what Anthropic calls Cowork. It used to be a separate place beside chat. In the merged layout there is no Cowork option to select and nowhere else to go; [Anthropic's help pages](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude) put it this way: "Ask Claude for what you need, and it can decide which tool to use." You describe the job in an ordinary chat. If your message box still shows "Chat" and "Cowork" options, you have the older layout: select "Cowork" in the bottom left corner and describe the job there, and select "Chat" to go back to an ordinary conversation.

Cowork is for paid plans (Pro, Max, Team and Enterprise), and this series assumes Pro. It works in the browser at claude.ai and in the phone app, and more involved tasks "keep running in the cloud even if you close your laptop or leave the page." A job that searches, reads and builds uses more of your plan's limits than a quick question does, so a heavy day of this shows up on the Usage page from Episode 1.

## Connect Gmail, Drive and Google Docs, in Manual the first time

The Iceland job started with giving Claude somewhere to look. A connector, as Episode 1 put it, is what lets Claude access your apps and services, retrieve your data, and take actions within them. For this job, Gmail lets Claude search and read your email in plain language and draft messages. Google Drive lets it find and read your documents, including Sheets, Slides and PDFs. Google Docs is a separate connector, newer and labeled beta, and creating and editing a Google Doc is its job.

Before you connect anything, set the permission mode to Manual. Permission mode is the control for how much Claude asks before it acts ([Episode 1](/guides/claude/1-set-up-your-account/#permission-mode) shows where). Manual means Claude asks before each action, so the first time it touches your inbox you see each thing it wants to do, which is the fastest way to learn what it does. That matches [Anthropic's own guidance](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely), which says to switch to Manual when the task touches sensitive files, accounts or sites, when you use a tool or site for the first time, and when mistakes would be hard to undo, like sending messages.

Once you have watched it behave, Auto is fine for searching, reading and drafting, which is most of this episode. Go back to Manual whenever Claude might send or delete something. In Auto the safety check decides what goes ahead, so do not count on a prompt before a send, and Claude's promise to ask before permanently deleting covers files only. Manual will not ask about a connector tool you have set to "Always allow" (Customize > Connectors, Tool permissions).

On the web:

1. Open Customize in the left sidebar, then Connectors.
2. Find Gmail and connect it. Google asks you to sign in and approve the permissions. The button label varies from page to page ("Connect", "Install"), so look for whichever one starts the sign-in.
3. Do the same for Drive.
4. In the chat where you want to use them, click "+" at the lower left of the message box, hover over "Connectors", and switch Gmail and Drive on for that conversation.
5. Turn the Google Docs connector on from the same menu. If you ask Claude to edit a Google file while it is off, Claude prompts you to connect it and then carries on with your request.

On Team and Enterprise plans, an owner has to enable the Google connectors for the organization before you can sign in.

Claude reaches only the Google account you connected. According to [Anthropic's connector page](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors), Claude opens your data only when a request needs it, retrieves the minimum, and keeps what it retrieves with that chat, so deleting the chat deletes it.

## Have Claude find every booking and build one table

The first job was the dullest and the most useful. A trip's facts are scattered: a confirmation here, a reply from a host there, a receipt that carries the code you need to find a different email. I asked Claude to find every booking in my email and build one table.

The columns matter. I asked for what each booking is, its dates, its confirmation reference, and what it constrains. The last column pays for the whole exercise. A booking constrains the plan when it forces other decisions: a time you have to be somewhere, a date by which you must commit or cancel, a check-in window that fixes how late you can arrive. With that column filled in, the table stops being a list and becomes a map of what is fixed and what is free.

```text
I am planning [the trip, event or move]. Search my Gmail for every booking and reservation connected to it: flights, lodging, transport, tours, tickets, anything that came with a confirmation. Search by the words "confirmation", "booking" and "reservation", and by every confirmation code you find, because one email's code often leads to others.

Build one table, one row per booking, with these columns: what it is; start and end dates; the confirmation reference; what it constrains (what this booking forces about the rest of the plan, such as a time I must be somewhere or a date by which I must commit or cancel); and the email it came from, with a link where you can.

Some details live only in an attachment, and you can tell an attachment exists but not what is inside it. List those bookings separately under "details missing", with the email each came from, so I can attach the file or point you to a copy in Drive.

Do not guess any value. If two emails disagree, show both and flag the conflict. This is read-only: do not send, delete, label or move anything.
```

Not sure it fits your job? Ask Claude: "Here is a prompt for reconciling trip bookings: [paste it]. Rewrite it for [the move / the event I am organizing], and keep the read-only line." Then run what comes back.

[Claude can see that an email has an attachment but cannot open it](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors), which is why the prompt asks for a "details missing" list. For each one, attach the PDF to the chat with the "+" button, or save a copy to Drive, where Claude can read PDFs through the Drive connector. If you do not know how to save an attachment to Drive, ask Claude "how do I save an email attachment to Google Drive?" Then ask Claude to update the table.

Then check the table before you build on it. Claude's answers cite the emails they drew on, with links where available, so open two or three and confirm the dates. An error here travels into everything after it.

## Put the itinerary in a Google Doc, with a corrections log at the top

With the table right, I asked for the itinerary as a Google Doc in my Drive instead of a long reply in the chat. A chat scrolls away. A document is the one place the plan lives, and you and Claude can both open it.

The part that does the most work is the corrections log at the top: one entry per version of the doc, saying what changed and why. A plan like this keeps changing for weeks. Without the log, you cannot tell what is different since you last looked, and one tidy-up pass can quietly undo a decision you settled days ago. With it, "what changed in this version?" is a ten-second read. I keep the log in the body, not in comments, so it stays plain text that the Drive connector can read too; [it reads a document's content but not its comments](https://claude.com/docs/connectors/google/drive).

Say "Google Doc" when you ask. A request for just a "doc" does not create a Google Doc in your Drive; Claude makes a different kind of file instead.

```text
Using the booking table above, create a Google Doc called "[Trip name] itinerary" in my Drive. It must be a Google Doc, not a local file.

Put these in the body of the doc, in this order:

1. A "Corrections log" at the very top. One entry per version of the doc, newest first: the version number, what was wrong or changed, and what it says now. Start it with "Version 1: first draft from the booking table".
2. The plan, day by day. For each day: where I sleep, what is booked (with its confirmation reference), what is still open, and how much of the day is realistic.
3. "Open questions": anything the plan depends on that I still need to confirm.

Keep the log in the body of the doc, not in comments.

Once version 1 exists, edit the doc only when I ask. If I ask a question about the plan, answer in the chat and leave the doc alone. When I do ask for a change, add the new log entry first, then make the change, then tell me in the chat what you changed.
```

Not sure it fits your job? Ask Claude: "Here is a prompt that turns a booking table into a Google Doc itinerary: [paste it]. Rewrite it for [the move / the event I am organizing], and keep the corrections log and the rule to edit the doc only when I ask." Then run what comes back.

While Claude writes, the document can open in a pane beside the chat, where you and Claude can work in the same file at the same time. That pane works on the web in Chrome; in another browser, select "Open in Google" on the file card to open the doc itself. Claude re-reads the current content before each change, but in a busy file, check the result. I do.

## Tell Claude to edit the doc only when you ask

After the first pass I told Claude to stop editing the doc unless I asked. "What if we drop the second night?" is a question about the plan, and I want the answer in the chat with the document left alone. Saying so up front means Claude does not have to guess whether I am asking or instructing. That is why the last paragraph of the prompt above builds the rule in from the start; if Claude wrote your prompt, check that the rule is in it.

The rule is a request, not a lock: no documented setting limits Claude to editing a Google Doc only when asked. Editing a draft is the kind of work Auto is fine for, so the rule is usually all you need. If you want to approve each edit too, switch that chat to Manual (it will not ask about a connector tool you have set to "Always allow").

## The planning is where Claude earns its keep

The table and the document are bookkeeping, useful but plain. What would make me do it all again came next: I asked Claude to treat the trip as a risk problem instead of a list of nice things to do. It raised things I would not have thought to ask about:

- **Days sized to the short daylight.** Claude fitted each day to the light that was actually available rather than the light I was hoping for.
- **A go/no-go decision point for the weather-exposed leg.** A named time and place where I decide, using named information, with a fallback ready, instead of making that call at the worst possible moment.
- **One leg kept refundable, plus a named fallback and a buffer day.** The structure that lets one thing go wrong without everything going wrong.
- **A gap in rental-car coverage I had assumed my credit card closed.** It surfaced by asking, for each thing that can go wrong, who pays. For a coverage question, the policy or the issuer is the authority; Claude's job is to find the gap so you know what to ask them.
- **An activity that turned out not to run in that season.** Asking whether each activity actually operates at that time of year caught it, and the plan was restructured around it.

None of that is about Iceland. Each is a question you can ask of any plan, and the value was in having every one asked of every day and every booking. Here is the prompt that does it:

```text
Go through the itinerary as a risk problem, not a wish list. For each day and each booking, tell me what could make it fail and what I would do then. Check these in particular:

1. Daylight: is every day sized to the hours of light really available at that time of year, including travel time?
2. Weather-exposed legs: for any leg that weather could stop, name a go/no-go decision point (when and where I decide, and what information I use) and the fallback I switch to.
3. Refundability: which bookings can I cancel, and until when? Keep at least one leg refundable and tell me which.
4. Buffers: is there a spare day before anything I cannot move?
5. Coverage: for everything that can go wrong with money or liability, list what my cards and insurance cover and what gaps remain. I will paste the terms; do not assume them.
6. Seasonality: check that every activity actually runs at that time of year, for a group my size. Flag anything you cannot confirm.

Give me a ranked list of findings in the chat. Do not edit the doc.
```

Not sure it fits your job? Ask Claude: "Here is a prompt that stress-tests a trip itinerary: [paste it]. Rewrite its checks for [the move / the event I am organizing], and keep 'do not edit the doc.'" Then run what comes back.

When a finding changes the plan, tell Claude to update the doc. The itinerary prompt has it add the next entry to the corrections log first, but a new chat has not seen that rule: restate it there, or keep it in the project's instructions ([Episode 2](/guides/claude/2-projects/)).

## Other jobs have the same shape

The shape is facts scattered across your accounts, constraints that depend on each other, and a document at the end that you keep correcting. Jobs I would hand over this way:

- An event: venue, vendors and speakers pulled from email into one table, then a run-of-show that respects what each booking constrains.
- A move: leases, movers, utilities and deliveries, with the order they have to happen in.
- A renovation: quotes, permits and contractor availability, and which task blocks which.
- A family reunion: who is coming, who sleeps where, what the budget rules out.

If a job like this runs for weeks, it also suits a project ([Episode 2](/guides/claude/2-projects/)). The project holds the judgment calls you have settled, such as what you will not compromise on, while Gmail and Drive stay the record of the facts.

## When the material is on your computer

Everything so far lived in Gmail and Drive, which Claude reaches from the browser. Sometimes the material is a folder on your own machine: scans, exports, a pile of PDFs. For that you need the Desktop app. Claude Desktop is available for Mac and Windows.

In the app you can give Claude access to a folder on your computer so it can read, organize and create files there. It can only work in folders you have connected, and only while the Desktop app is open, and a job started on the web or the phone cannot reach them. Granted folders are listed under Trusted folders in Settings. To add one, ask Claude in the app "how do I give you access to a folder now?"

Anthropic's advice on choosing a folder: ["Avoid granting access to local files with sensitive information, like financial documents."](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely) It also suggests a dedicated working folder over broad access. The files Claude opens there are copied to Anthropic's cloud and processed there: on Pro and Max, tasks run in the cloud, your folders stay on your computer, and Claude fetches a copy of just the file a task needs. Deleting the session deletes the copies. A folder holding only the material for one job keeps all of this small.

Anthropic's other tool, Claude Code, is built for software engineering; Cowork is built for non-coding knowledge work, such as research, analysis and document creation. Claude Code comes with Pro and Max, and you can use it in the Desktop app. I use it for something that is not software: my finances live there now, in a folder of PDFs that Claude and I both sort, which turned out to be more comfortable than uploading files into chats. That is the kind of folder Anthropic's advice above says to keep out of Cowork. Claude Code is a different tool, and this is a trade-off I made knowingly and am not recommending; Episode 5, not written yet, explains it.

## Checklist

The fallback from the top of the page applies to every path below.

- [ ] Gmail and Drive are connected (Customize > Connectors), and the Google Docs connector is on for the chat ("+" > Connectors)
- [ ] Permission mode is Manual for the first Gmail connection and for any job that might send or delete, and Auto for read-and-draft work (message box, in the row with the model picker)
- [ ] The ask says "Google Doc" by name, not just "doc"
- [ ] Every booking that exists only as an email attachment has its PDF attached to the chat or saved in Drive
- [ ] The doc has a corrections log in its body, one entry per version
- [ ] The edit rule is in the prompt ("edit the doc only when I ask")
- [ ] Any folder you connect in the Desktop app holds only what that job needs
