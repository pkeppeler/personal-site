import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { BOOK_TITLE, getInstallments } from '../lib/book';
import { getSeries } from '../lib/guides';

export async function GET(context) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const { hub, episodes } = await getSeries();
  const publishedEpisodes = episodes.filter((episode) => episode.published);

  const installments = await getInstallments();

  const items = [
    ...posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    ...publishedEpisodes.map((episode) => ({
      title:
        episode.number === 0
          ? hub.data.title
          : `${hub.data.title}: ${episode.entry.data.title}`,
      pubDate: episode.entry.data.pubDate,
      description: episode.entry.data.description,
      link: episode.path,
    })),
    ...installments.map((installment) => ({
      title: `${BOOK_TITLE}: ${installment.entry.data.title}`,
      pubDate: installment.entry.data.pubDate,
      description: installment.entry.data.description,
      link: installment.path,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Peter Keppeler',
    description: 'Backend and infrastructure engineer. Notes on systems, code, and the work.',
    site: context.site,
    items,
  });
}
