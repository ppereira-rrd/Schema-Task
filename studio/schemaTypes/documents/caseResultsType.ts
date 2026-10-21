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
    // Content Fields
        // Case type - amount - attorney(s) - description - desc snippet
  ],
})
