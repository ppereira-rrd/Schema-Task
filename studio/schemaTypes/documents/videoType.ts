import {defineField, defineType} from 'sanity'
import {translationField} from '../shared/translations'

export const videoType = defineType({
  name: 'videos',
  title: 'Videos',
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
        // url
        // transcript
        // Featured attorney name - image
        // Related links
  ],
})
