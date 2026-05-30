import { defineCollection, z } from 'astro:content';

const rooms = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    building: z.enum(['main-lodge', 'cabin']),
    count: z.number(),
    name_sq: z.string(),
    name_en: z.string(),
    size_sqm: z.number().nullable(),
    max_guests: z.number(),
    view_sq: z.string(),
    view_en: z.string(),
    price_from_eur: z.number().nullable(),
    amenities: z.array(z.string()),
    hero: z.string(),
    gallery: z.array(z.string()),
  }),
});

export const collections = { rooms };
