import rss from '@astrojs/rss';
import { getSeries } from '../../../lib/guides';

export async function GET(context) {
  const { hub, episodes } = await getSeries();
  const published = episodes.filter((episode) => episode.published);

  return rss({
    title: hub.data.title,
    description: hub.data.description,
    site: context.site,
    items: published.map((episode) => ({
      title: episode.entry.data.title,
      pubDate: episode.entry.data.pubDate,
      description: episode.entry.data.description,
      link: episode.path,
    })),
  });
}
