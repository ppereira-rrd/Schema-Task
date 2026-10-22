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
    }),
    defineField({
      name: 'metaDescription',
      title: 'meta description',
      type: 'string',
    }),
    defineField({
      name: 'exercpt',
      title: "exercpt",
      type: 'string',
    }),
    defineField({
      name: 'featuredImage',
      title: 'featured image',
      type: 'image',
    }),
    defineField({
      name: 'seoSchema',
      title: 'SEO Schema',
      type: 'string',
    }),
  ],
})
