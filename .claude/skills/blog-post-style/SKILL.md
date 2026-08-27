---
name: blog-post-style
description: Prose conventions for posts in src/content/posts/ — structure, length, voice, formatting, caveats, the authorship label, and the revision loop. Applies whenever writing, editing, or reviewing any post in that directory, including small edits to an already-published post, not just new drafts.
---

# Blog post style

These conventions emerged from iterating on early posts with
engineer-friend feedback. Don't undo them casually.

Posts read like notes from an engineer who built something and wants
to tell you the useful parts. Not a journal; not an essay. Concrete,
tight, copyable.

## Structure

- **Thesis first.** Open with what was built and the point. A first
  paragraph that reads "two days ago I decided…" is narrating instead
  of giving the reader the point; save narrative for later paragraphs
  or skip it. Readers decide whether to keep reading in the first few
  lines.
- **Point-shaped, not journey-shaped.** Title sections by the idea
  ("Offline is a principle, not a feature"), not by phase ("The
  process", "Obstacles"). A phase-titled section forces the reader to
  extract the point themselves; a point-titled one hands it to them.
- **End with a takeaway.** A heuristic, a next step, a copyable
  recipe, not reflection for reflection's sake.

## Length

- **Target 700-1000 words** of post body, excluding frontmatter. The
  first post ran ~1800 words and engineer readers flagged it as
  verbose. Shorter is almost always better for this audience.
- **Cut duplication ruthlessly.** If a point is made in one section,
  don't restate it three sections later in different words. Merge
  adjacent sentences that say the same thing. Lists of tools or
  ingredients should appear once.

## Voice

- **Practical toolsmith, not philosopher.** State what happened, why,
  what it cost, what to copy. Keep reflective asides to one sentence
  at most; readers are here for the build, not the mood.
- **First person, active voice.** "I took X from annoyance to
  installable app", not "the app went from annoyance to installable".
  Don't treat the thing the author built as a third-person subject.
- **Casual but professional.** Dismissive framing ("options, all
  dumb") reads off-putting. Reasoned framing ("works, but it's a
  wasteful use of a powerful tool") lands better and still keeps the
  personality.
- **Preserve the author's phrasings.** If the author's own words
  contain a crisp line, use it verbatim where it fits. A paraphrase of
  a good original line is usually blander than the original.

## Formatting

- **No em-dashes.** They read AI-generated. Use commas, periods,
  colons, or parentheses instead.
- **Bullet lists for enumerable things** (options, steps, a stack).
  Prose for narrative and reasoning — a list flattens an argument that
  needs the connective tissue between points.
- **Specific sensory details beat generic ones.** "Train into Milan,
  back of a taxi, waiting at my gate, espresso at a cafe" beats "on
  the couch, on the bus". Specifics make a post feel lived-in;
  generic settings could belong to anyone.

## Caveats and honesty

- **Acknowledge alternatives exist** when the motivation is personal
  preference, not necessity ("I'm sure there are reputable markdown
  viewers out there; the point was rolling my own"). Otherwise the
  post reads as if it's claiming the alternatives don't exist or
  don't work.
- **Flag inconsistencies in the story.** If the author opened DevTools
  on a laptop despite writing about phone-only development, say so.
  Readers who notice an unflagged inconsistency stop trusting the
  rest of the post.

## Authorship label

CLAUDE.md defines the `authorship` field and its two legal values;
this is which one to pick and when to ask.

- `ai-drafted` — Claude drafted the prose from the author's raw
  material and iterated with the author on edits. The badge on the
  post reads "ai drafted" and expands to an explainer.
- `human` — the author wrote the prose start to finish; Claude may
  have caught typos or suggested small edits, but the draft is the
  author's. The badge reads "human written".

When in doubt which value applies, ask the author. Do not guess: the
label is a public claim about who wrote the words, not an
implementation detail.

## Iterating

- Expect multiple revision rounds. The first draft is a starting
  point, not a deliverable.
- When the author flags duplication, verbosity, or framing on one
  passage, scan the whole post for the same pattern before replying.
  The same problem usually shows up in more than one place, and
  fixing only the flagged instance leaves the others for the next
  round.
