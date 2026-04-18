# Blog post guidelines

These conventions govern posts in `src/content/posts/`. They emerged
from iterating on early posts with engineer-friend feedback, so don't
undo them casually. When the author asks you to write, edit, or
review a post, read this file in full first.

## Before writing: interview the author

Posts are written about things the author has built, experienced, or
learned. The author's raw material is a mix of prior sessions, notes,
memory, and opinions that haven't been articulated yet. Your job
before drafting is to surface enough of that material to write a good
post, through an interview.

### How to run the interview

1. **Ask questions in batches.** Three to six at a time, grouped by
   theme (motivation, decisions, surprises, process, future). Don't
   drip one question at a time; don't dump thirty in a single wall.
2. **Propose options, not abstractions.** Authors react better to
   concrete alternatives than to abstract descriptions. Offer 4–6
   title candidates and, when tone is in question, 4–6 labelled
   tone samples of the same paragraph (e.g. "A. casual
   grumpy-engineer", "B. drier matter-of-fact"). Let the author
   pick or remix.
3. **Confirm framing before drafting.** Don't start writing until
   the through-line, target audience, and target length are settled.
4. **Summarize back before drafting.** Restate the framing, tone,
   length, and any specific phrasings you plan to preserve from the
   author's own words. Draft only after the author confirms.

### Questions to ask

Not every post needs all of these, but the answers that land usually
come from this list.

- **What triggered this?** A specific moment, frustration, or
  observation. The more concrete the better.
- **What's the obvious alternative, and why didn't you do that?**
  The novelty of the post usually lives here.
- **What would have happened if you hadn't built / done this?**
  Forces the author to articulate the real cost of inaction.
- **What surprised you, good or bad?** Unexpected hurdles or
  unexpected wins.
- **What was easier than expected?** Surfaces counterintuitive
  leverage for readers.
- **Where did you do this, specifically?** Train, cafe, back of a
  taxi, kitchen table. Sensory detail makes a post feel lived-in.
- **Who's the target reader?** Other engineers? Generalists? This
  changes how much to explain.
- **What's the takeaway you want readers to leave with?** A
  heuristic, a pattern, a recipe, or just a reframe.
- **What's next?** Does this unlock anything?
- **Any personal details or caveats that matter?** People involved,
  inconsistencies to flag, alternatives that exist but weren't
  chosen.

## Authorship label

Every post has an `authorship` frontmatter field, required, one of:

- `ai-drafted` — the default for this blog. Author was interviewed
  (see above), Claude drafted from the answers, author edited. The
  badge on the post reads "drafted with ai" and expands to an
  explainer.
- `human` — the author wrote the prose start to finish. Claude may
  have caught typos or suggested small edits, but the draft is the
  author's. The badge reads "human written".

When in doubt, ask the author which label applies. Do not guess.

## Writing the post

Posts read like notes from an engineer who built something and wants
to tell you the useful parts. Not a journal; not an essay. Concrete,
tight, copyable.

### Structure

- **Thesis first.** Open with what was built and the point. If the
  first paragraph reads "two days ago I decided…", you're narrating
  instead of giving the reader the point. Save narrative for later
  paragraphs or skip it.
- **Point-shaped, not journey-shaped.** Title sections by the idea
  ("Offline is a principle, not a feature"), not by phase ("The
  process", "Obstacles").
- **End with a takeaway.** A heuristic, a next step, a copyable
  recipe. Not reflection for reflection's sake.

### Length

- **Target 700–1000 words** of post body (excluding frontmatter).
  The first post ran ~1800 words and engineer readers flagged it as
  verbose. Shorter is almost always better.
- **Cut duplication ruthlessly.** If a point is made in one section,
  don't restate it three sections later in different words. Merge
  adjacent sentences that say the same thing. Lists of tools or
  ingredients should appear once.

### Voice

- **Practical toolsmith, not philosopher.** State what happened,
  why, what it cost, what to copy. Keep reflective asides to one
  sentence at most.
- **First person, active voice.** "I took X from annoyance to
  installable app", not "the app went from annoyance to
  installable". Don't treat the thing the author built as a
  third-person subject.
- **Casual but professional.** Avoid dismissive framing like
  "options, all dumb". It reads off-putting. Reasoned framing
  ("works, but it's a wasteful use of a powerful tool") lands
  better.
- **Preserve the author's phrasings.** If an answer during the
  interview contains a crisp line, use it verbatim where it fits.
  Don't paraphrase a good original line into something blander.

### Formatting

- **No em-dashes.** They read AI-generated. Use commas, periods,
  colons, or parentheses.
- **Bullet lists for enumerable things** (options, steps, a stack).
  Prose for narrative and reasoning.
- **Specific sensory details beat generic ones.** "Train into
  Milan, back of a taxi, waiting at my gate, espresso at a cafe"
  beats "on the couch, on the bus".

### Caveats and honesty

- **Acknowledge alternatives exist** when the motivation is personal
  preference, not necessity ("I'm sure there are reputable markdown
  viewers out there; the point was rolling my own").
- **Flag inconsistencies in the story.** If the author opened
  DevTools on a laptop despite writing about phone-only development,
  say so.

## Iterating

- Expect multiple revision rounds. The first draft is a starting
  point, not a deliverable.
- Prefer the Edit tool for surgical changes so the author can see
  exactly what moved.
- When the author flags duplication, verbosity, or framing issues,
  scan the whole post for the same pattern. The same problem usually
  shows up in more than one place.
- Commits on post-writing branches should be small and
  well-described; the author reviews diffs on a phone.
