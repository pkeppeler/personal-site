---
title: "Set up your account"
description: "Create a Claude account, pick a plan, and bring every setting to a known-good baseline with a prompt that audits the account for you."
draft: false
pubDate: 2026-09-02
updatedDate: 2026-10-23
authorship: ai-drafted
---

By the end of this episode you have a Claude account on a plan worth paying for, Opus 5.5 as your model, and every setting that matters brought to a baseline I know works. Whether the account is ten minutes old or a year old, the audit prompt in the middle of this page converges it to the same place. You also leave with a habit: when Claude starts feeling wrong months from now, you paste that prompt again and let it re-check everything. Every later episode assumes this one is done, so do it first.

Where things live in the app is stated as of the day I wrote this, and the app moves. So every menu path in this episode carries the same fallback: if it is not there, the app has moved it; ask Claude "where do I find X now?"

Most of those paths start in Settings, which opens a sidebar. When I wrote this, its first group read General, Account, Privacy, Billing, Usage, Capabilities, Memory, and a few more below those. The paths below name those entries.

## Create an account

Go to claude.ai in a browser, or install the Claude app on iOS or Android. Sign in with your email address (Claude emails you a login link; open it and you are in) or with Google. Either works; pick one and use it everywhere. The account is the thing, not the device, and signing in the same way on your phone and your laptop keeps you in one account rather than two. Two is how you end up with half your work in each. If the sign-in screen does not match this description, [Anthropic's login article](https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account) has the current steps; you have no Claude to ask yet, so the article stands in for the fallback this once.

## Pick a plan

Pro is the floor. It is [$20 a month, or $17 a month billed annually](https://claude.com/pricing), and it includes Opus 5.5, the model I want you on for everything (the next section explains why). Free exists, and it is fine for finding out whether you like Claude at all, but it has no Opus and its limits are tight. This series assumes Pro.

Here is what the limits feel like. Pro gives you a session allowance that resets every five hours, and a weekly allowance across all models on top of it. Both show up as progress bars on the [Usage page](https://support.claude.com/en/articles/9797557-usage-limit-best-practices) under Settings; on the web, Settings opens from your initials at the lower left (if it is not there, the app has moved it; ask Claude "where do I find Settings now?"). The session limit is the one most people meet, usually mid-afternoon on a heavy day; the weekly one takes real volume to reach.

Max is for people who keep meeting those limits. It comes in two tiers, [Max 5x at $100 a month and Max 20x at $200 a month](https://support.claude.com/en/articles/11049741-what-is-the-max-plan), monthly billing only. Same model, Opus 5.5; Max gives you more of it.

Usage credits are the one money setting to get right. They are a pay-as-you-go balance, off unless you turn them on, and I want you to leave them off. Opus 5.5 runs inside your plan's limits, so nothing in this series needs credits. Credits only matter if you pick a model your plan does not include, such as Fable on Pro, which runs on credits from the first message, [billed at standard API rates](https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans) (the per-message prices Anthropic charges software developers, so the bill grows with every message). The audit prompt checks they are off.

## The models, and why Opus 5.5

Claude is one product with several models behind it, and you choose which one answers you. Haiku is the quick tier, Sonnet the everyday tier, Opus the strong tier, and Fable the premium tier. Fable 5.1 is the most advanced model Anthropic makes generally available. Use Opus 5.5 for everything anyway. Anthropic says it [performs at the level of Fable 5.1 on most work](https://www.anthropic.com/claude-opus-5-5), and it is included in Pro and Max. Fable is pay-as-you-go on Pro and capped at half your weekly limit on Max, so it costs you something and buys you little.

The pick, by plan:

- **Pro, Max, Team, Enterprise: Opus 5.5.** One model for everything.
- **Free:** Opus is not on Free. Pick the newest Sonnet the picker offers (Sonnet 5.5 when I wrote this). This series assumes Pro.

If you see Fable 5.1 or Fable 5 selected, switch to Opus 5.5: on Pro it bills usage credits, on Max it spends a capped share of your week. A chat can also switch itself to Opus 5 or Opus 4.8 when a message is flagged for safety.

Never Sonnet or Haiku for real work. They are quicker, and for anything you would put your name on the quality gap matters more than the speed. [Anthropic's page on model settings](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings) has the current list of models if it changes.

The model picker is in the model menu next to the send button (if it is not there, the app has moved it; ask Claude "where do I find the model picker now?"). If Opus 5.5 is not at the top level, look under "More models". Check the picker at the start of a chat rather than trusting that your last pick carried over.

## The audit prompt

This is the whole episode in one paste. Open a new chat, paste the block below, and Claude walks you through your own settings one screen at a time, asking what you see and telling you what to change. It works the same on a brand-new account and on a year-old account with a year of drift in it, and you can paste it again any time something feels off. It is also the first live example in this series of the idea from Episode 0: AI is really good at writing instructions for AI. I wrote none of the settings walkthrough by hand; I described what a good one would do and let Claude do the rest.

One thing before you paste: make sure Claude can search the web in that chat, so it can look up where a setting lives if it has moved since I wrote this. Anthropic is rolling out a new layout that merges chat and Cowork, and which one you have depends on your account, so check the menu itself. Click the "+" button at the lower left of the chat box. If "Web search" is in that menu, choose it; a checkmark appears next to it. If it is not there, there is nothing to turn on: Claude searches on its own when it helps. If you cannot find the "+" button, the app has moved it; ask Claude "where do I find web search now?" as your first message in that chat, and then paste the block.

```text
I want you to audit my Claude account settings and bring them to the baseline below, changing only what differs from it.

Before anything else, ask me two questions, one at a time: which plan I am on (Free, Pro, or Max), and which device I am using (a web browser or the mobile app). Wait for each answer, then adapt every later step to both. On the web, settings open from my initials at the lower left, and the model picker sits next to the send button. On mobile, help me find settings in the app, and the model picker is at the top of the screen.

Then walk the baseline in order, one settings screen at a time. For every item: first explain in one or two plain sentences what the setting does and why the baseline sets it this way, from what you know or from a quick search of support.claude.com; then ask me what I see; then either confirm it already matches the baseline or give me the one change to make and ask me to confirm it is done before moving on. Never assume a value. Never batch several screens into one question. Use plain language, no jargon, and ask one question per message.

If I cannot find a setting where you expect it, search the web (support.claude.com first) for its current location, tell me where it moved, and continue. If a setting genuinely does not exist on my plan or device, say so, mark it skipped, and move on.

The baseline:

1. Plan: Pro at minimum. If I am on Free, explain briefly what Pro adds, then pause for my decision. Do not nag. Max is for people who keep hitting usage limits.

2. Model: "Opus 5.5" on every paid plan. If the picker shows "Fable 5.1", "Fable 5", any Sonnet or Haiku, or an older Opus, switch it to "Opus 5.5". If I stay on Free, tell me Opus is not available on Free, ask which models the picker offers, and pick the newest Sonnet.

3. Web search: have me click the "+" button at the lower left of the chat box. If a "Web search" item is in that menu, it is checked in this chat. Then have me open a second new chat, look at the same menu, and come back here to report whether it is still checked. Record the answer; if it did not stay on, tell me web search is per chat and I turn it on each time. If there is no "Web search" item, there is no toggle: Claude searches on its own when it helps, so just confirm that and move on. Then run one quick test search yourself, on something only a live search can answer: find the newest entry in Anthropic's release notes (https://support.claude.com/en/articles/12138966-release-notes), tell me its title and date, and say whether the search worked. If it did not work, walk me back through this step until it does.

4. "Settings > Capabilities": "Code execution and file creation" on. Under it, network access set to "package managers only", which lets the file-building environment install what it needs and nothing wider. The exact option labels can differ by plan; if my plan shows only an on and off switch there (it may be labeled "Allow network egress"), have me turn it on. "All domains" gives Claude's code full internet access; Anthropic calls it the riskiest option, because a hijacked instruction could make Claude leak my data or run untrusted code. If I want it, tell me that once, then let me choose and record the choice. Also tell me that web search and research work whatever this setting says.

5. "Settings > Capabilities": "Tool access mode" set to "Load tools when needed". It keeps conversations lighter, and Claude loads a connector's tools when it needs them. It applies to new conversations.

6. "Settings > Capabilities": "Connector search" on. Claude can then suggest connected apps relevant to what I am doing.

7. Permission mode: it sits in the message box next to the model and effort pickers, for example "Opus 5.5 · High · Auto". It should read Auto. Auto means Claude acts on its own while a safety check reviews each action and blocks ones that look like data theft or hijacked instructions; Claude then tries a safer way or asks me. Manual means Claude asks before each action. If it shows Manual, have me switch it to Auto. Do not tell me what the default is. Tell me Anthropic's own exceptions: switch to Manual for money, messages sent as me, sensitive accounts, or a tool or site I use for the first time. Also tell me that Claude always asks before permanently deleting anything. If I cannot find the control on my device, mark it skipped.

8. "Settings > Memory": "Generate memory from chats" on. "Search and reference chats" on if my plan is paid, skipped on Free. "Include sensitive topics in memory": explain in one line that without it, things like health and beliefs are kept out of memory, then leave the choice to me and record it. On older accounts the same toggles sit under "Settings > Capabilities" with older wording; treat them as the same settings. Mention once that the ghost icon on a new chat starts an incognito chat that Claude does not remember.

9. "Settings > Usage": usage credits off: not enabled, or if already enabled, auto-reload switched off so nothing more is charged. Opus 5.5 runs inside the plan's limits, so nothing in this baseline needs credits.

10. "Instructions for Claude" in "Settings > Account" (if it is not there, look under "Settings > General"): written. If it is empty or stale, offer to draft it from three questions (what I do, what I use Claude for, how I like answers), asked one at a time, then have me paste it in and confirm.

11. Two things to explain, not change. First, the "Effort" setting in the model menu: what it does (how hard the model works on each answer), and that each model has a recommended level marked "Default", where it stays. Second, "Research" in the "+" menu: what it does (a deeper, multi-source investigation that reports back), that it needs a paid plan, that it needs "Web search" on, that where the "+" menu has no "Research" item it starts with the command /deep-research, and when to reach for it. Have me open each menu and say what I see, so I know where they live, then move on.

When every item is done, give me a summary table with one row per setting: setting, before, after, or skipped with the reason, or explained for Effort and Research. Then end with exactly this line: "You can paste this prompt into a new chat any time to check everything again."
```

Not sure about any answer the prompt asks for? Say so in the chat; Claude will explain the option and recommend one. This block is meant to be pasted exactly as it is: it is the one block in the series you do not adapt, which is why there is no "ask Claude to write it" line under it.

## What the audit walks you through

The prompt explains each setting as it reaches it, so you do not need this section to run it. It is the same ground in one place, to read before you start or after you are done.

### Web search

On its own, Claude knows what it learned in training, which stops at a date (June 2026 for Opus 5.5). With web search it can look things up and check itself against the world as it is today. It is a [per-chat choice](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) in the "+" menu at the lower left of the chat box (if it is not there, the app has moved it; ask Claude "where do I find web search now?"). Whether the checkmark stays on in your next chat is not something Anthropic documents, so the prompt has you open a second chat and look. If it did not stick, you turn it on each time. If the "+" menu has no "Web search" item, there is nothing to turn on: in the [newer combined layout](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude) there is no toggle and Claude searches when it helps.

### Capabilities

"Code execution and file creation" is what lets Claude hand you a real file, a formatted document or a spreadsheet you can download, instead of text in the chat window. Under it sits a network access control for the environment that builds those files, and I set it to "package managers only": Claude's code can install what it needs from package managers and reach nothing wider. The option labels vary by plan; where your plan shows only an on and off switch (documented as "Allow network egress"), turn it on. "All domains" gives Claude's code full internet access. [Anthropic calls it the riskiest option](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude), because a hijacked instruction could make Claude leak your data or run untrusted code. You may pick it knowingly. None of this affects web search or research, which work regardless of this setting.

Two more settings sit on the same page. "Tool access mode" I set to "Load tools when needed": it keeps conversations lighter, and Claude loads a connector's tools when it needs them. It applies to new conversations. "Connector search" I leave on: Claude can then suggest connected apps relevant to what you are doing. All of it is under Settings > Capabilities (if it is not there, the app has moved it; ask Claude "where do I find Capabilities now?").

### Permission mode

In the message box, next to the model and effort pickers, sits one more control, for example "Opus 5.5 · High · Auto" (if it is not there, the app has moved it; ask Claude "where do I find the permission mode now?"). It decides how much Claude asks before it acts. In Auto, Claude works on its own while a safety check reviews each action and blocks ones that look like data theft or hijacked instructions; it then tries a safer way or asks you. In Manual, Claude asks before each action. I recommend Auto. Check that yours shows Auto rather than assuming it does: Anthropic's own pages disagree about which one new accounts start on. [Anthropic's own exceptions](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely) are worth keeping: switch to Manual for money, messages sent as you, sensitive accounts, or a tool or site you use for the first time. Whatever the mode, Claude always asks before permanently deleting anything.

### Memory

Memory is Claude keeping notes on you across chats: what you do, what you are working on, how you like things. It is account-wide and on by default, and everything it holds is readable and editable as a list of topics under [Settings > Memory](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context) (if it is not there, the app has moved it; ask Claude "where do I find Memory now?"). "Generate memory from chats" is the switch for the notes themselves. "Search and reference chats" lets Claude look back through your past conversations when you refer to one, and it is on paid plans only, which is one more reason Pro is the floor. "Include sensitive topics in memory" is yours to decide: off, and things like health and beliefs stay out of the notes; on, and Claude can remember that your surgery is in March. The prompt explains it in one line and records your answer. When you want a chat that leaves no trace in history or memory, the ghost icon at the upper right of a new chat starts an incognito one (if it is not there, the app has moved it; ask Claude "where do I find incognito chat now?"). Older accounts may still see these toggles under Capabilities with older wording; they are the same settings.

### Usage credits

Off. Opus 5.5 runs inside your plan, so nothing in this series needs credits. If a past version of you already enabled them, the prompt has you switch off auto-reload so nothing more is charged. They live on the Usage page under Settings (if it is not there, the app has moved it; ask Claude "where do I find usage credits now?").

### Instructions for Claude

The one item in the baseline that is writing rather than a switch. It gets its own section below.

### Effort and Research

Two things the audit explains and leaves alone. Effort is in the model menu next to the send button (if it is not there, the app has moved it; ask Claude "where do I find Effort now?"). It sets [how much work the model puts into each answer](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings), from low to max, and each model has a recommended level marked "Default". Leave it there. Research is in the "+" menu at the lower left of the chat box on paid plans (if it is not there, the app has moved it; ask Claude "where do I find Research now?"), and it needs web search on. Where that menu has no Research item, you start it by typing `/deep-research`. It runs a [deep, multi-source investigation](https://support.claude.com/en/articles/11088861-use-research-on-claude) on Opus 5.5 whichever model you have picked. Use it for a question with many sources to pull together, not for a quick answer.

## Instructions for Claude

Under Settings > Account there is a text field called ["Instructions for Claude"](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features); Anthropic's help page puts it under Settings > General in the newer layout, so look there if it is not in Account (if it is in neither, the app has moved it; ask Claude "where do I find Instructions for Claude now?"). Whatever you write there applies to every chat you start. That makes it the wrong place for your life story and the right place for how you want Claude to behave: who you are in a line, what you mostly use it for, and how you like your answers. A paragraph is plenty.

A template to adapt:

```text
I'm a [role] with a background in [field or industries]. I mostly use Claude for [two or three things: drafting, thinking through decisions, summarizing documents, research].

I want direct answers with no hedging. If something I've written or planned is weak, say so and say why. Push back when you disagree with me. Plain tone, no corporate filler, and don't pad a short answer to make it look thorough.
```

Not sure what to write? Ask Claude to write it. Open a chat and say "Help me write my Instructions for Claude. I'm a [role], I use Claude mostly for [things], and I like answers that are [how]." Edit what comes back and paste it in. The audit prompt makes the same offer, from three questions, when it reaches this step.

## Tips

- Claude pushes back. If your plan has a hole, it says so; if it disagrees, it tells you. That is the point, and you asked for it in the instructions above. If it goes quiet and agreeable on something that matters, ask what it is not telling you.
- You can change its tone mid-chat. "Shorter." "Less formal." "Stop hedging." "Rewrite that, it sounds like a press release." It adjusts on the next message, and it does not take it personally.
- On the phone, the layout differs, not the settings. When I wrote this, the model picker sat at the top of the screen; for Settings or anything else, or if the picker has moved, ask Claude "where do I find X now?" from the app itself.
- When Claude feels wrong, paste the audit prompt again. A model got switched, a toggle drifted, memory was paused by a stray tap. It was written to be re-run.

## There is more

Claude Desktop and Claude Code also exist. They take Claude out of the chat window and into your files and your computer; a later episode covers them. Cowork, which lets Claude take on a multi-step task and carry it out for you, used to sit beside chat and is being merged into every chat for Pro and Max, so you may already have it; Episode 3 covers it. This series stays in the browser and the phone app.

## Checklist

Locations are as of the day I wrote this. If one is not there, the app has moved it; ask Claude "where do I find X now?"

- [ ] Plan is Pro at minimum, Max if you keep hitting limits (Settings > Billing)
- [ ] Model is Opus 5.5 on any paid plan; never Fable, Sonnet, or Haiku (model menu next to the send button)
- [ ] Web search works: checked if the "+" menu has a Web search item (and you know whether it stays on in a new chat), nothing to toggle if it does not, and Claude's test search of the release notes succeeded (the "+" menu, lower left of the chat box)
- [ ] Code execution and file creation is on (Settings > Capabilities)
- [ ] Network access is "package managers only", or on if your plan shows only a switch (Settings > Capabilities, under code execution)
- [ ] Tool access mode is "Load tools when needed" (Settings > Capabilities)
- [ ] Connector search is on (Settings > Capabilities)
- [ ] Permission mode shows Auto (message box, next to the model and effort pickers)
- [ ] Generate memory from chats is on (Settings > Memory; Settings > Capabilities on older accounts)
- [ ] Search and reference chats is on (Settings > Memory)
- [ ] Include sensitive topics in memory is decided, either way (Settings > Memory)
- [ ] Usage credits are off, or auto-reload is off (Settings > Usage)
- [ ] Instructions for Claude is written (Settings > Account; Settings > General in the newer layout)
- [ ] Effort left at Default, and you know where Research lives (model menu; the "+" menu, or /deep-research where it has no Research item)
