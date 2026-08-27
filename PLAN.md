# Split blog-post-guidelines.md into two project skills

## Context

### Problem Statement
`blog-post-guidelines.md` sits at the repo root and only gets read because a
paragraph in `CLAUDE.md` tells the model to read it. It fuses two jobs that fire
at different moments: interviewing the author for a post about something they
did, and the prose conventions that apply to every post regardless of origin.
Editing an existing post drags in the whole interview procedure for nothing.

### Solution
Two project skills that route independently off their `description` frontmatter.
`blog-post-style` fires on every touch of a post; `interviewing-the-author` fires
only when drafting a new post from the author's raw material. The root file and
the `CLAUDE.md` pointer go away.

## Acceptance

- `.claude/skills/blog-post-style/SKILL.md` and
  `.claude/skills/interviewing-the-author/SKILL.md` exist, each with `name` and
  `description` frontmatter, each a single file with no bundled siblings.
- Every rule in `blog-post-guidelines.md` is either present in one of the two
  skills or was dropped deliberately per the spec (Edit-tool advice, commit
  hygiene). Nothing is in both skills.
- Neither skill restates markdown-portability rules or names the other skill.
- `blog-post-guidelines.md` no longer exists.
- `CLAUDE.md` has no `## Writing blog posts` section and no reference to
  `blog-post-guidelines.md`; its Content portability `authorship` sentence is
  unchanged.
- `pnpm build` succeeds.

## Tasks

- [x] 1. Write `.claude/skills/blog-post-style/SKILL.md`
      Port from `blog-post-guidelines.md`: structure (thesis first, point-shaped
      not journey-shaped, takeaway ending), length (700–1000 words with the
      reader-feedback rationale, cut duplication), voice (practical toolsmith,
      first person active, casual-professional, preserve the author's phrasings),
      formatting (no em-dashes, bullets for enumerables, specific sensory detail),
      caveats and honesty, the `authorship` label, the revision loop including
      "scan the whole post for the same pattern". Drop the Edit-tool line and the
      commit-hygiene line. Do not restate markdown portability. Do not name the
      other skill.
      **Done when:** the file exists, is under 120 lines, its `description` is
      third person and names both what it does and that it fires on writing,
      editing, *or* reviewing a post in `src/content/posts/`, and every imperative
      in it carries a reason.
      Defends against: an edit-an-existing-post request loading interview
      machinery it has no use for.

- [x] 2. Write `.claude/skills/interviewing-the-author/SKILL.md`
      Interview mechanics merging the grilling skill's format (numbered questions,
      a recommended answer under each, one round at a time, wait for replies) with
      the current file's approach (grouped by theme, 4–6 concrete title candidates
      and labelled tone samples, confirm framing before drafting, summarize back
      before drafting). All ten questions from the question bank verbatim with
      their one-line rationales. One line noting this path produces
      `authorship: ai-drafted`, without restating the label rule. Do not name the
      other skill.
      **Done when:** the file exists, is under 80 lines, all ten questions are
      present with rationales, and its `description` scopes the trigger to
      drafting a *new* post from the author's own material — not to editing.
      Defends against: the router firing this on an edit request, and against the
      question bank getting silently trimmed to "the good ones".

- [x] 3. Delete `blog-post-guidelines.md`
      **Done when:** `git status` shows the deletion and
      `grep -rn blog-post-guidelines --exclude-dir={node_modules,dist,.git} .`
      returns nothing outside `PLAN.md`. Depends on 1, 2.

- [x] 4. Remove the `## Writing blog posts` section from `CLAUDE.md`
      Delete the heading and its paragraph. Add nothing in its place — skill
      descriptions are injected automatically, so a listing here would drift.
      Leave the Content portability `authorship` sentence untouched.
      **Done when:** `grep -n "Writing blog posts" CLAUDE.md` is empty, the
      `authorship` sentence under Content portability is byte-identical to before,
      and `pnpm build` succeeds.

## Parallel

- Group A: tasks 1, 2 — disjoint write sets, different directories.
- Group B: tasks 3, 4 — disjoint write sets, both blocked on Group A.
