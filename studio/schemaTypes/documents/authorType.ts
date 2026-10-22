import {defineField, defineType} from 'sanity'
import {translationField} from '../shared/translations'

export const authorType = defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',
  liveEdit: true,
  fields: [
    defineField({
      name: 'basicSchemaFields',
      type: 'basicSchemaFields',
    }),
    defineField({
      name: 'authorName',
      type: 'string',
      title: 'Author Name',
      validation: (rule) => rule.required(),
    }),
  ],
})
