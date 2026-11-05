import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().optional().default(false),
  authorship: z.enum(['human', 'ai-drafted']),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: postSchema,
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.discriminatedUnion('draft', [
    z.object({
      draft: z.literal(true),
      title: z.string(),
      description: z.string(),
    }),
    z.object({
      draft: z.literal(false),
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      authorship: z.enum(['human', 'ai-drafted']),
    }),
  ]),
});

const book = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/book' }),
  schema: postSchema,
});

export const collections = { posts, guides, book };
