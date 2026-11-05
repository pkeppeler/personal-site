const NUMBERED_NAME_PATTERN = /^(\d+)-(.+)$/;

/**
 * Splits a `<n>-<slug>` file name (no directory, no extension) into its
 * number and slug, or returns undefined when it has no leading `<n>-`.
 */
export function parseNumberedName(name: string): { number: number; slug: string } | undefined {
  const match = name.match(NUMBERED_NAME_PATTERN);
  return match ? { number: Number(match[1]), slug: name } : undefined;
}
