import { defineCollection, z } from 'astro:content';

const tjenester = defineCollection({
  type: 'content', // Viktig: fortel Astro at dette er Markdown-filer
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