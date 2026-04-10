---
title: "Hello, world"
description: "A first post to confirm the site builds and renders correctly."
pubDate: 2026-04-09
---

This is the first post on the site. If you're reading it, the build, routing, markdown rendering, syntax highlighting, and RSS feed are all working.

Code blocks are syntax-highlighted at build time by Shiki. No client-side JavaScript runs to highlight them — the HTML that arrives in your browser is already colored.

```python
def fizzbuzz(n: int) -> str:
    if n % 15 == 0:
        return "fizzbuzz"
    if n % 3 == 0:
        return "fizz"
    if n % 5 == 0:
        return "buzz"
    return str(n)
```

Inline `code` works too, and so do [links](https://example.com), **bold**, and *italic* — the usual markdown fare.

> Block quotes look like this.

Delete this file and add your own posts under `src/content/posts/`.
