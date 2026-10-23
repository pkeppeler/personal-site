import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export const SERIES_FEED_PATH = '/guides/claude/rss.xml';

type GuideEntry = CollectionEntry<'guides'>;

/** A guide entry narrowed to the non-draft (published) schema variant. */
export type PublishedGuideEntry = Omit<GuideEntry, 'data'> & {
  data: Extract<GuideEntry['data'], { draft: false }>;
};

const EPISODE_ID_PATTERN = /^claude\/(\d+)-([^/]+)$/;

interface EpisodeBase {
  number: number;
  /** The entry id without the `claude/` prefix: `<n>-<slug>`, also the URL segment. */
  slug: string;
  /** The site-relative URL: the hub for Episode 0, its own page otherwise. */
  path: string;
}

/** An episode whose entry is a non-draft (published). */
export interface PublishedEpisode extends EpisodeBase {
  published: true;
  entry: PublishedGuideEntry;
}

/** A draft "coming soon" episode. */
export interface DraftEpisode extends EpisodeBase {
  published: false;
  entry: GuideEntry;
}

export type Episode = PublishedEpisode | DraftEpisode;

function toEpisode(entry: GuideEntry): Episode {
  const match = entry.id.match(EPISODE_ID_PATTERN);
  if (!match) {
    throw new Error(
      `Guide entry id "${entry.id}" does not match the required claude/<n>-<slug>.md form`,
    );
  }
  const number = Number(match[1]);
  const slug = entry.id.slice('claude/'.length);
  const path = number === 0 ? '/guides/claude/' : `/guides/claude/${slug}/`;
  return isPublished(entry)
    ? { number, slug, path, published: true, entry }
    : { number, slug, path, published: false, entry };
}

function isPublished(entry: GuideEntry): entry is PublishedGuideEntry {
  return entry.data.draft === false;
}

interface Series {
  hub: PublishedGuideEntry;
  episodes: Episode[];
}

/**
 * Loads the whole `guides/claude` series: the Episode 0 hub entry and the
 * full episode list (including the hub and any draft "coming soon" entries)
 * sorted by episode number.
 */
export async function getSeries(): Promise<Series> {
  const entries = await getCollection('guides');
  const episodes = entries.map(toEpisode).sort((a, b) => a.number - b.number);

  const seen = new Map<number, Episode>();
  for (const episode of episodes) {
    const existing = seen.get(episode.number);
    if (existing) {
      throw new Error(
        `Guide entries "${existing.entry.id}" and "${episode.entry.id}" both claim episode number ${episode.number}`,
      );
    }
    seen.set(episode.number, episode);
  }

  const hub = seen.get(0);
  if (!hub) {
    throw new Error('Guide series has no entry numbered 0 for its hub');
  }
  if (!hub.published) {
    throw new Error(`Guide series hub "${hub.entry.id}" must not be a draft`);
  }

  return { hub: hub.entry, episodes };
}

export function freshness(entry: PublishedGuideEntry): Date {
  return entry.data.updatedDate ?? entry.data.pubDate;
}
