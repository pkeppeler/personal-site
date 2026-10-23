# Guide series: the hub is Episode 0, numbered filenames drive order and URLs

"Becoming a Claude Power User" is the first entry in a `guides` collection kept separate from `posts` because its audience, index, and feed differ. The series hub at `/guides/claude/` renders Episode 0's markdown body followed by the episode map generated from the collection, so the series title and blurb are Episode 0's frontmatter and no hub prose exists to drift from it. Episode files are named `<n>-<slug>.md`; the episode number is derived from the filename and kept in the URL (`/guides/claude/1-set-up-your-account/`), so order has one source of truth that is visible in a directory listing and legible in a shared link. Unpublished episodes exist as draft entries so the map can list them as coming soon and shipping one is a flag flip.

## Considered options

- An `episode:` frontmatter field with plain slugs. A second source of order that drifts from the filename, and a shared link that no longer says which episode it is.
- A hand-maintained map inside the hub prose. Desyncs from the collection the first time an episode ships.
- Reusing `posts` with a series tag. Mixes a non-technical audience into the engineer-facing blog list and feed.

## Consequences

Episode URLs are shared by email and text, so the slug scheme is the part that cannot change cheaply once Episode 1 is out. Draft episodes produce no page, so their slugs stay free to change until they ship.
