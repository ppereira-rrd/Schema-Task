import {defineField, defineType} from 'sanity'
import {slugValidator} from '../../lib/validator'

export const basicSchemaFields = defineType({
  name: 'basicSchemaFields',
  title: 'Basic Schema Fields',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: slugValidator,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorField',
      type: 'reference',
      to: [{type: 'author'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
