import { defineCollection, z } from "astro:content";

const profile = defineCollection({
  schema: z.object({
    title: z.string(),
    job: z.string().array(),
    link: z.object({
      linkedin: z.string().url().optional(),
      youtube: z.string().url().optional(),
    }),
    description: z.string(),
    image: z.string().url()
  })
})

export const collections = {
  profile
};