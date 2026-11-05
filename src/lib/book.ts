import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { parseNumberedName } from './numbered';

export const BOOK_TITLE = 'The Writing Machine';

export interface Installment {
  number: number;
  /** The entry id: `<n>-<slug>`. The URL uses only the number. */
  entry: CollectionEntry<'book'>;
  /** The site-relative URL: `/writing-machine/<n>/`. */
  path: string;
}

function toInstallment(entry: CollectionEntry<'book'>): Installment {
  const parsed = parseNumberedName(entry.id);
  if (!parsed) {
    throw new Error(`Book entry id "${entry.id}" does not match the required <n>-<slug>.md form`);
  }
  return { number: parsed.number, entry, path: `/writing-machine/${parsed.number}/` };
}

/** The published installments sorted by number; throws if two share a number. */
export async function getInstallments(): Promise<Installment[]> {
  const entries = await getCollection('book', ({ data }) => !data.draft);
  const installments = entries.map(toInstallment).sort((a, b) => a.number - b.number);

  const seen = new Map<number, Installment>();
  for (const installment of installments) {
    const existing = seen.get(installment.number);
    if (existing) {
      throw new Error(
        `Book entries "${existing.entry.id}" and "${installment.entry.id}" both claim installment number ${installment.number}`,
      );
    }
    seen.set(installment.number, installment);
  }
  return installments;
}
