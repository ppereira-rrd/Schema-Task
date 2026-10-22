import {defineField, defineType} from 'sanity'
import {translationField} from '../shared/translations'

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
    defineField({
      name: 'attorneyName',
      type: 'string',
      title: 'Attorney Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'attorneyPosition',
      type: 'string',
      title: 'Attorney Position',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'attorneyPhone',
      type: 'string',
      title: 'Attorney Phone',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'attorneyEmail',
      type: 'string',
      title: 'Attorney Email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'attorneyEducation',
      title: 'Attorney Education',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'attorneyCredentials',
      title: 'Attorney Credentials',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
