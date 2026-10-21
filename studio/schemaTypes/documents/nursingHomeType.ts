import {defineField, defineType} from 'sanity'
import { translationField } from '../shared/translations'

// This doesnt need SEO, this is to be used on other pages not a page in itself, like a storage container.

export const nursingHomeType = defineType({
  name: 'nursingHome',
  title: 'Nursing Home Information',
  type: 'document',
  fields: [
    translationField,
    defineField({
      name: 'basicSchemaFields',
      type: 'basicSchemaFields',
    }),
    // Content Fields
        // Provider name - address - county - chain name - abuse icon 
        // Overall rating - special focus status - Total Amount of Fines in Dollars
        // lat - long - CMS Cert ID
  ],
})
