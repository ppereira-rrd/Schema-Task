import {defineField, defineType} from 'sanity'
import { translationField } from '../shared/translations'

export const postType = defineType({
  name: 'post',
  title: 'Post',
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
  ],
})
