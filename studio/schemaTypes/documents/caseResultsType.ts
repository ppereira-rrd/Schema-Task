import {defineField, defineType} from 'sanity'
import {translationField} from '../shared/translations'

// Depending on client structure it needs seo fields if the case results get there own page.
// If its only used for displaying the content but not its own page then it doesnt need SEO fields.
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
      name: 'caseType',
      type: 'string',
      title: 'Case Type',
      options: {
        list: [
          {title: 'Car', value: 'car'},
          {title: 'Bicycle', value: 'bicycle'},
          {title: 'Truck', value: 'truck'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'amount',
      type: 'number',
      title: 'Amount',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caseDesc',
      type: 'text',
      title: 'Full Description',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caseSnippetDesc',
      type: 'string',
      title: 'Snippet Description',
      validation: (rule) => rule.required(),
    }),
  ],
})
