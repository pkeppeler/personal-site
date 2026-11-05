# Book serial: its own collection and index, numbered filenames drive order, number-only URLs

"The Writing Machine" is a serial novel kept in a `book` collection with its own index at `/writing-machine/`, separate from `posts` for the same reasons as guides: its audience and index differ, and it stays out of the blog feed. Installment files are named `<n>-<slug>.md`; the installment number is derived from the filename, so order has one source of truth. The URL carries only the number (`/writing-machine/1/`), so retitling an installment, or renaming its slug, keeps its link. Two entries with the same number fail the build, naming both files.

## Considered options

- An `installment:` frontmatter field. A second source of order that drifts from the filename; ADR 0001 rejected the same thing for guides.
- Number and slug in the URL (`/writing-machine/1-prologue-and-chapter-1/`). A retitled installment breaks every shared link.
- Reusing `posts`. Puts the novel in the blog list and feed, in front of an audience that came for engineering posts.

## Consequences

Installment URLs get shared by email and text, so the `/writing-machine/<n>/` scheme is the part that cannot change cheaply once installment 1 is out. Titles and slugs stay free to change.
