import {defineField, defineType} from 'sanity'
import {validateJson} from '../../lib/validator'

// https://www.sanity.io/learn/course/seo-optimization/an-introduction-to-seo-and-structured-content
export const seoFields = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'exercpt',
      title: 'Exercpt',
      type: 'string',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
    }),
    defineField({
      name: 'seoSchema',
      title: 'SEO Schema (JSON-LD)',
      type: 'text',
      rows: 10,
      description: 'Enter JSON-LD without script tags.',
      validation: validateJson,
    }),
    defineField({
      name: 'noIndex',
      title: 'noIndex',
      type: 'boolean',
    }),
  ],
})
