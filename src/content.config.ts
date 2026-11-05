import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tjenester = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tjenester' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(), // Valfritt bilete
    order: z.number().optional(),
  }),
});

export const collections = {
  'tjenester': tjenester,
};
