import {defineField, defineType} from 'sanity'
import { translationField } from '../shared/translations'

export const attorneyType = defineType({
  name: 'attorney',
  title: 'Attorney',
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
        // Attorney name - position - phone - email - education - credentials
  ],
})
