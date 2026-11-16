import {defineField, defineType} from 'sanity'
import {translationField} from '../shared/translations'
import { content } from '../objects'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    translationField,
    defineField({
      name: 'basicSchemaFields',
      type: 'basicSchemaFields',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO & Social',
    }),
    // Content Fields
     defineField({
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      of: [...content.map((content) => content)],
    }),
  ],
})
