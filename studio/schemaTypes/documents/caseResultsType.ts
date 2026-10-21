import {defineField, defineType} from 'sanity'
import {translationField} from '../shared/translations'

export const caseResultsType = defineType({
  name: 'caseResults',
  title: 'Case Results',
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
        // Case type - amount - attorney(s) - description - desc snippet
  ],
})
