import { z } from 'zod';
import wagtailcore from './wagtailcore';
import wagtailimages from './wagtailimages';

// Country schema
const countrySchema = z.object({
  id: z.number(),
  title: z.string().max(100),
  meta: z.object({
    type: z.string(),
    detail_url: z.string(),
    html_url: z.string().nullable(),
  }),
});

// BreadIngredient schema
const breadIngredientSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  meta: z.object({
    type: z.string(),
    detail_url: z.string(),
    html_url: z.string().nullable(),
  }),
});

// BreadType schema
const breadTypeSchema = z.object({
  id: z.number(),
  title: z.string().max(255),
  meta: z.object({
    type: z.string(),
    detail_url: z.string(),
    html_url: z.string().nullable(),
  }),
});

// BreadPage schema
const breadPageSchema = wagtailcore.Page.extend({
  introduction: z.string(),
  image: wagtailimages.Image.nullable(),
  body: z.array(z.any()), // StreamField
  origin: countrySchema.nullable(),
  bread_type: breadTypeSchema.nullable(),
  ingredients: z.array(breadIngredientSchema),
});

// BreadsIndexPage schema
const breadsIndexPageSchema = wagtailcore.Page.extend({
  introduction: z.string(),
  image: wagtailimages.Image.nullable(),
});

// Export schemas
const schemas = {
  Country: countrySchema,
  BreadIngredient: breadIngredientSchema,
  BreadType: breadTypeSchema,
  BreadPage: breadPageSchema,
  BreadsIndexPage: breadsIndexPageSchema,
} as const;

export default schemas;

// Derived TypeScript types
export namespace breads {
  export type Country = z.infer<typeof schemas.Country>;
  export type BreadIngredient = z.infer<typeof schemas.BreadIngredient>;
  export type BreadType = z.infer<typeof schemas.BreadType>;
  export type BreadPage = z.infer<typeof schemas.BreadPage>;
  export type BreadsIndexPage = z.infer<typeof schemas.BreadsIndexPage>;
}
