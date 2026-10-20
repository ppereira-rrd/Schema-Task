import {defineField, defineType} from 'sanity'

export const seoFields = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'meta title',
      type: 'string',
      //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'meta description',
      type: 'string',
      //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'exercpt',
      type: 'string',
      //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured image',
      type: 'image',
      //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'SEO Schema',
      type: 'string',
      //   validation: (rule) => rule.required(),
    }),
  ],
})
