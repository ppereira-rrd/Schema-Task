import {defineField, defineType} from 'sanity'
import { translationField } from '../shared/translations'

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
  ],
})
