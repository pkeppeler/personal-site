*This is the superseded original guide PJ distributed by email in spring 2026, kept as a tone and structure reference for the "Becoming a Claude Power User" series.*
*Its product facts (model names, plan prices, setting locations) are stale and must not be copied.*

# Setting Up Your Job Search Assistant in Claude

This walks you through setting up a Claude project that acts as a persistent job search partner, one that knows your background, your resume, your experience, and your goals, and can help you with everything from finding companies to apply to, tailoring your resume, prepping for interviews, drafting outreach, and thinking through decisions.

**A note before you start:** At any point in this guide where you're not sure what to write or how to answer something (what roles to target, what salary to ask for, how to describe your strengths), you can just ask Claude. Open a chat and say "I'm not sure what kinds of roles I should be targeting, help me think through it" or "I don't know how to talk about my experience in a way that stands out." Claude is genuinely good at this. Don't let any blank in this guide stop you from moving forward, you can always figure it out together.

**One more thing:** Claude is not just a question-answering machine: it's a thinking partner. It can find opportunities you might not have thought of, identify what makes you stand out, and take the repetitive grunt work off your plate so you can focus your energy where it matters.

## 1. Create a Claude Account (Pro Plan)

Go to [claude.ai](https://claude.ai) and sign up. You want the **Pro plan** ($20/month) because it gives you access to **Claude Opus**, which is the smartest model and significantly better than the default for complex analysis, writing, and strategic thinking. The free tier only gives you Sonnet (the faster but less capable model) with limited usage.

After signing up, go to **Settings → Subscription** and confirm you're on Pro.

## 2. Configure Capabilities (Do This First)

Before you start chatting or creating projects, turn on the features that make Claude useful. Go to **Settings → Capabilities** and enable everything listed below.

### Code Execution and File Creation

Toggle this **ON**. Despite the name, this isn't just for coding, it's what lets Claude create actual files for you: formatted resumes (PDF, Word), spreadsheets, documents, presentations. Without this, Claude can only give you text in the chat window.

Once you toggle this on, you'll see a sub-setting:

**Allow network egress**: Toggle this **ON**, then set the domain allowlist to **"All domains."** This lets Claude's file-creation environment access the internet when it needs to (for example, downloading fonts or packages to build you a nicely formatted PDF). If you leave this off, some file creation tasks will fail.

### Artifacts

Toggle this **ON**. Artifacts are interactive outputs (documents, formatted content, visualizations) that render in a side panel next to your conversation.

### Inline Artifacts

Toggle this **ON**. This lets Claude render visual content (charts, comparison tables, diagrams) directly inline in the conversation.

### Other settings worth enabling while you're here

- **Search and reference past chats**: lets Claude search your conversation history when you reference something from a previous chat
- **Generate memory from chat history**: lets Claude build up memory about you automatically over time, so it gets better the more you use it

## 3. Set Up Your Profile Preferences

Still in Settings, set your global preferences. These apply across *all* conversations and tell Claude how to communicate with you. This is separate from project-specific instructions (which come later).

Go to **Settings → Profile** (or click your initials in the bottom-left corner, then "Profile").

In the **"What would you like Claude to know about you?"** text box, write a short paragraph about yourself and how you want Claude to behave. This isn't about your resume: it's about your communication style and what kind of responses you want.

Here's an example you can adapt:

```text
I'm a [your role/background] with [X years] of experience in [industries/areas]. I'm currently job searching and want Claude to be a proactive, strategic partner in the process, not just answering questions but suggesting things I might not have considered. I prefer clear, direct responses. Don't be vague or overly cautious. If something on my resume is weak, tell me. If a company isn't worth my time, say so. Help me put my best foot forward.
```

**Not sure what to write?** Open a regular chat with Claude (not in a project yet) and say: "I'm setting up my Claude profile for job searching. Here's my background: [brief description]. Help me write a profile preferences paragraph that will make you most useful to me." Claude will draft one you can edit and paste in.

## 4. Create a Claude Project

Projects are containers that give Claude persistent context (files, instructions, and memory) across multiple conversations. Think of it as giving Claude a "briefing packet" it reads before every conversation in that project.

### To create a project:

1. On the left sidebar, click **"Projects"** (folder icon)
2. Click **"Create project"**
3. Give it a name (e.g., "Job Search")

You'll now see the project page with a few sections. Here's what each one does:

### Project Description

This is just a label for you. It shows up in the sidebar. Something like "Job search: research, applications, interview prep" is fine. Claude doesn't really use this for context.

### Project Instructions

**This is the most important part.** These are instructions Claude reads at the start of *every* conversation within this project. Think of it as a system prompt: it tells Claude who you are, what you're doing, and how to help. More on this in Section 5.

### Project Knowledge (Files)

These are files Claude can reference in every conversation within the project. You'll upload your resume and other reference docs here. More on this in Section 7.

### Project Memory

Claude can remember things across conversations within a project. This builds up automatically as you chat, for example, if you tell Claude "I applied to Company X last week," it may remember that in future conversations. You can also explicitly ask Claude to remember things ("remember that I have an interview with Company Y on Thursday").

You can view and manage what Claude remembers by clicking on the memory section of the project page.

## 5. Write Your Project Instructions

Click **"Set project instructions"** (or the pencil icon next to it) and paste in something like the following. **Edit every section to reflect your actual situation.**

```text
[Your Name] is looking for a new role. [1-2 sentences on your background, what you've done, what industries you've worked in, what you're good at.]

**What I'm looking for:**
- [Types of roles that interest you]
- [Industries or types of companies you're drawn to]
- [Location preferences: city, remote, hybrid, open to relocating]
- [Compensation expectations, if you have a sense]
- [Any hard constraints: visa requirements, scheduling, etc.]

**What I'm NOT interested in:**
- [Be specific, e.g., "no door-to-door sales," "no commission-only roles"]

**How to assist:**
- Be proactive. Suggest companies, roles, and strategies I might not have considered.
- When reviewing my resume or cover letters: be honest about what's strong and what's not.
- When prepping me for interviews: give me realistic practice, anticipate hard questions, and help me tell my story compellingly.
- When I'm discouraged or stuck: help me see what I might be missing and suggest concrete next steps.
- Write in a natural, human tone. No corporate jargon or generic filler.
```

**Not sure what to put for some of these fields?** That's completely fine, use Claude to figure them out first. Open a chat in the project and try prompts like:

- "Here's my background: [brief description]. What kinds of roles would be a natural fit for me? What about roles that might not be obvious but could be a great match?"
- "I've been applying mostly to [type of role] but not getting traction. Are there adjacent roles or industries I should consider?"
- "I honestly don't know what salary range to target. Given [X years] of experience in [field] in [city], what's reasonable?"
- "Help me figure out what I actually want in my next job. Here's what I liked and didn't like about my last roles: [describe]."
- "I feel like my resume isn't working. Can you help me figure out why?"
- "What are some types of positions I should think about that might not be on my radar?"

Use Claude's output to fill in the blanks, then paste the finished instructions into your project settings.

## 6. Switch to Opus and Enable Extended Thinking

By default, Claude starts conversations using **Sonnet** (the faster, less capable model). For job search work (resume tailoring, interview prep, company research, figuring out your strategy) you want **Opus**.

### To switch models:

- At the bottom of the chat input box, you'll see a model selector (it might say "Sonnet" or show a model name). Click it and select **Claude Opus 4.6**.
- You need to do this each time you start a new chat, it doesn't persist as a default. (Same goes for the web search checkbox, see Section 8.)

### Extended Thinking:

- In the same model selector area, you'll see a toggle for **"Extended thinking."** Turn this on.
- This lets Claude reason through complex problems more carefully before responding. It's especially useful for resume feedback, interview prep, and strategic questions about your job search. It will show you Claude's thinking process in a collapsible block above the response.
- Tradeoff: responses take longer and use more of your daily message quota. For quick questions, you can turn it off or use Sonnet instead.

### When to use which model:

- **Opus + Extended Thinking:** Resume review, interview prep, company research, cover letters, strategic thinking about your search
- **Sonnet:** Quick factual questions, short drafts, reformatting text, anything where speed matters more than depth
- **Or just leave it on Opus + Extended Thinking all the time.** It's the better model, and for job search work the quality difference matters. The only reason to drop to Sonnet is if you're burning through your usage quota too fast.

**Checking your usage:** Go to **Settings → Usage** to see how much of your quota you've used. You'll see progress bars for your current 5-hour rolling window and your weekly cap. Opus and extended thinking consume quota faster than Sonnet, so keep an eye on this for the first week or so until you get a feel for your pace. If you're consistently running out, you can either use Sonnet for lighter tasks, start new conversations more often (long conversations cost more per message because Claude re-reads the entire history), or upgrade to a Max plan ($100/month) for 5x the usage.

## 7. Upload Your Project Files

Click **"Add content"** (or the + icon in the Knowledge section) and upload the following files. These become part of Claude's context in every conversation within the project.

### A note on file formats

You can upload files in any common format: PDF, Word (.docx), markdown (.md), plain text (.txt). Claude can read all of them.

That said, **markdown (.md) is the best format for project files** that you'll update over time. It's plain text, easy to edit in any text editor (TextEdit on Mac, Notepad on Windows, Notes on your phone, Google Docs, etc.), and Claude reads it cleanly.

**Don't know what markdown is or how to make one?** Just ask Claude. Upload your Word doc or PDF into a chat and say "Convert this to clean markdown." Claude will output the content, which you can copy into a plain text file and save with a `.md` extension.

**Need a polished format for sending to someone?** Claude can go the other direction too. Give it a markdown file (or just paste text) and ask it to generate a formatted PDF or Word document. With code execution enabled (Section 2), Claude can build and hand you downloadable files directly.

### Files to upload

1. **Your Resume**: Your current resume. Claude will reference it when helping you tailor applications, prep for interviews, and identify your strengths and gaps. If you only have a PDF, that's fine, upload it as-is. You can also ask Claude to convert it to markdown so it's easier to maintain going forward.
2. **Key Accomplishments / Project Experience** (optional but highly recommended): A detailed write-up of your biggest wins, accomplishments, and notable experiences from your career. This gives Claude deeper material to draw on than just your resume bullets. **See Section 11 below for how to create this file with Claude's help**, you don't need to write it from scratch alone.
3. **Company/Application Tracker** (optional, can build over time): A running file that tracks companies you're applying to, where you are in each process, and any notes. You can start this from scratch with Claude's help: open a chat and say "Help me set up a job application tracker. I'm currently applying to [Company A], [Company B], and [Company C]." Claude will create a structured template you can use going forward.

**To update a project file later:** You can't edit files in-place within the project. Delete the old version and re-upload the new one.

## 8. Enabling Web Search Per Chat

Web search doesn't have a global setting, it's enabled **per conversation**.

When you open a new chat, click the **"+"** icon in the bottom-left corner of the chat input box. In the menu that appears, you'll see **"Enable web search"**, check it.

When web search is enabled, Claude will automatically search the internet when it needs current information (company details, job postings, industry news, people's backgrounds, etc.). It cites its sources so you can verify. When web search is off, Claude only knows what's in its training data, which has a cutoff date.

**Recommendation:** Check this box for every job search chat. It's essential for company research, finding job postings, and understanding what's happening in your target industries. Like model selection, this doesn't persist, you need to enable it each time you start a new conversation.

## 9. How to Use the Project (Chat Workflow)

Each conversation within a project is a separate chat, but they all share the same project instructions and files. Here's how to organize your work:

**Start a new chat for each distinct task or company.** Examples:

- **"Research: [Company Name]"**: Have Claude research the company, find open roles, assess fit, and help you decide whether to apply.
- **"Resume Tailoring: [Company Name] / [Role]"**: Have Claude customize your resume for a specific job posting.
- **"Cover Letter: [Company Name]"**: Draft a tailored cover letter.
- **"Interview Prep: [Company Name]"**: Practice questions, prep your stories, anticipate hard questions.
- **"Job Search Strategy"**: Brainstorm new companies, roles, or industries to target.
- **"Draft: Email to [Recruiter/Contact Name]"**: Get help writing follow-ups, thank-you notes, outreach messages.
- **"Offer Evaluation: [Company Name]"**: Think through a compensation package, benefits, tradeoffs.

**Why separate chats?** Claude's context window is finite. If you run one mega-thread for everything, older messages eventually fall out of context and Claude loses track. Separate chats keep each conversation focused and give Claude the full context window to work with.

**Referencing past chats:** Claude can search your past conversations within the project. If you say "what did we discuss about Company X?" or "find our conversation about my interview prep," Claude will look it up. You don't need to keep everything in one thread.

**Updating your tracker file:** After applying somewhere or getting an update, ask Claude to generate an updated entry for your tracker. Copy it out, update your local file, delete the old version from the project, and re-upload the new one.

## 10. Configuring Claude's Memory

As you chat within the project, Claude will automatically build up memories, things like "User applied to Company X" or "User has an interview on Thursday." You can also explicitly ask Claude to remember something:

- "Remember that I applied to [Company] last week for the [role] position."
- "Remember that my salary floor is $X."
- "Remember that I don't want to work in [industry/type of role]."
- "Forget about [Company], I'm no longer considering them."

To review or edit what Claude remembers, go to your project page and look at the **Memory** section. You can delete individual memories if they're outdated or wrong.

**Important:** Memory is scoped to the project. Memories from your Job Search project won't leak into other projects or non-project conversations.

## 11. Creating Your "Key Accomplishments" File

This is the most valuable file in your project, and it's the one most people skip because it feels hard to write. Don't skip it, and you don't have to write it alone.

This is a detailed inventory of your biggest wins, accomplishments, and notable experiences from your career, written with enough depth that Claude (and you) can draw on them for interview answers, resume bullets, and cover letters. Your resume only has room for one-line summaries. This file has the full story behind each one.

**Why this matters:** In interviews, specificity wins. "I managed key accounts" is forgettable. "I inherited a $2M account that was at risk of churning, rebuilt the relationship over 3 months, and grew it to $3.5M by identifying an upsell opportunity their previous rep had missed" is not. This file gives Claude (and you) the raw material to tell stories like that.

### How to create it with Claude's help:

1. Open a new chat in your Job Search project.
2. Send Claude a message like this:

```text
I want to build a "Key Accomplishments" file for my job search. I'm going to describe 3-5 of my biggest wins or most notable experiences from my career, and I want you to help me structure each one into a detailed write-up I can reference for interviews and applications. For each one, I want to cover:

- One-liner: A single sentence summary of the accomplishment
- Context: What was the situation? What was the challenge or opportunity?
- My role: What did I specifically do? What was my responsibility vs. others?
- What I did: The specific actions I took, decisions I made, how I approached it
- What made it hard: What obstacles did I face? What made this not straightforward?
- Result: What was the outcome? Numbers, revenue, retention, growth, anything quantifiable. If not quantifiable, what changed because of my work?
- What I learned: What did this experience teach me?

Let's start with the first one. I'll describe it and you help me flesh it out and ask me follow-up questions to pull out the important details.
```

3. Walk through each accomplishment conversationally. Describe what you remember, even if it's rough or incomplete. Claude will ask follow-up questions to pull out the details that matter: "Do you remember the numbers?" "What would have happened if you hadn't stepped in?" "How did the client react?" "What did your manager say?"
4. After you've built out all your accomplishments, ask Claude to compile them into a single markdown file and generate it as a downloadable file. Save it and upload it to your project's Knowledge section.

**Not sure which accomplishments to pick?** Ask Claude: "Here's a rough summary of what I did at my last two jobs: [describe]. Which accomplishments would make the strongest interview stories? Help me identify the ones I might be undervaluing."

## 12. Tips and Gotchas

### Things that are different from ChatGPT:

- **Claude is more willing to push back.** If your resume has a weak spot or your interview answer doesn't land, Claude will say so. This is a feature, not a bug. Lean into it, you want honest feedback before you're sitting across from a hiring manager.
- **Claude won't make things up as aggressively,** but it can still be wrong, especially about specific company details or job postings. Having web search on helps, but always double-check anything you'd stake a decision on (like whether a role is still open).
- **Projects are persistent; chats are not.** Your project files and instructions carry across every chat. But each chat is its own conversation. Don't expect Claude to remember what you said in a different chat unless you ask it to search past chats or it's been stored in memory.
- **You can ask Claude to adjust its style mid-conversation.** "Be more concise." "Make this sound more confident." "Rewrite that, it sounds too stiff." Claude adapts quickly.
- **Model selection and web search reset.** Every new chat defaults to Sonnet with web search off. Switch to Opus and check the web search box each time you start a new conversation.
- **Claude can generate files for you.** Need a PDF of your updated resume? A formatted cover letter? A spreadsheet tracking your applications? Just ask. With code execution enabled, Claude can build and hand you downloadable files directly.

**When you're stuck or discouraged, just ask Claude.** This is the single most important habit shift from ChatGPT. Claude is not just a question-answering machine: it's a thinking partner. Examples of things you might not think to ask but should:

- "I've been applying for weeks and not hearing back. Look at my resume and tell me honestly what might be turning people off."
- "Here's a job description I'm interested in. Help me tailor my resume specifically for this role."
- "What are some companies that might have positions I can apply for, given my background?"
- "What positions might be a good fit for me at [Company]?"
- "Are there types of roles I should be considering that might not be on my radar?"
- "I just got a rejection. Help me figure out what I can learn from it and what to adjust."
- "I have an interview on Thursday. Give me a realistic mock interview for this role and don't go easy on me."
- "I need to follow up with a recruiter who hasn't responded. Help me write something that's persistent but not pushy."
- "I got an offer but the salary is lower than I expected. Help me think through whether to negotiate and what to say."
- "I'm feeling stuck and don't know what to do differently. Look at everything I've been doing and tell me what you'd change."

## Useful Prompts to Try

### Finding opportunities:

- "What companies in [industry] in [city] might have [type of role] openings right now? Search the web."
- "Here's a job posting I found. Is this a good fit for me based on my resume? What are my strengths and gaps?"
- "I keep seeing roles that ask for [skill/experience] I don't have. How do I position myself for these anyway?"
- "What's the job market like right now for [type of role] in [city/industry]?"

### Resume and applications:

- "Help me tailor my resume for this specific job posting: [paste posting]."
- "Rewrite my resume summary to be more compelling. It currently says: [paste current summary]."
- "Write a cover letter for [Company] for [role]. Make it sound like me, not like a template."
- "Generate a PDF version of my updated resume." (after making edits in chat)

### Interview prep:

- "I have an interview with [Company] for [role]. What questions should I expect and how should I answer them?"
- "Give me a mock interview. Ask me the questions one at a time, then give me feedback on my answers."
- "What are the best stories from my experience file to use for behavioral questions about [teamwork / handling conflict / exceeding goals / etc.]?"
- "What questions should I ask them at the end of the interview to stand out?"

### Strategy and mindset:

- "I've been job searching for [X months]. Help me audit my approach, what should I change?"
- "Should I be networking more? Help me draft outreach messages for LinkedIn connections at companies I'm interested in."
- "I'm considering [switching industries / taking a step back in title / relocating]. Help me think through the tradeoffs."

## Quick Reference: Settings Checklist

- [ ] Pro plan active (Settings → Subscription)
- [ ] Code Execution and File Creation enabled (Settings → Capabilities)
- [ ] Allow network egress ON, set to "All domains" (Settings → Capabilities, under Code Execution)
- [ ] Artifacts enabled (Settings → Capabilities)
- [ ] Inline Artifacts enabled (Settings → Capabilities)
- [ ] Search and reference past chats enabled (Settings → Capabilities)
- [ ] Generate memory from chat history enabled (Settings → Capabilities)
- [ ] Profile preferences written (Settings → Profile)
- [ ] Project created with instructions pasted in
- [ ] Resume uploaded to project Knowledge
- [ ] Key Accomplishments file uploaded to project Knowledge (see Section 11 to create with Claude's help)
- [ ] Web search enabled (per-conversation, click "+" in bottom-left of chat input)
- [ ] Model set to Opus 4.6 (check each new chat)
- [ ] Extended thinking toggled on for deep analysis
