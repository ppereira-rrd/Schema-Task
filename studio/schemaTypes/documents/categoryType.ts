import {defineField, defineType} from 'sanity'
import {translationField} from '../shared/translations'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  liveEdit: true,
  fields: [
    defineField({
      name: 'basicSchemaFields',
      type: 'basicSchemaFields',
    }),
  ],
})
