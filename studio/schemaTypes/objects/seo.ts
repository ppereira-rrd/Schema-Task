import {defineField, defineType} from 'sanity'

export const seoFields = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'meta title',
      type: 'string',
      //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'meta description',
      type: 'string',
      //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'exercpt',
      title: "exercpt",
      type: 'string',
      //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'featured image',
      type: 'image',
      //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoSchema',
      title: 'SEO Schema',
      type: 'string',
      //   validation: (rule) => rule.required(),
    }),
  ],
})
