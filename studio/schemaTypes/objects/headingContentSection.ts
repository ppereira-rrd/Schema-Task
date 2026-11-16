import {defineField, defineType} from 'sanity'
import { bodyMembers } from '../shared/members'

export const headingContentSection = defineType({
  name: 'headingSection',
  title: 'Heading and Text Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headingTitle',
      type: 'string',
      title: 'Heading Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'headingLevel',
      type: 'string',
      title: 'Heading Level',
      options: {
        list: [
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          {title: 'H5', value: 'h5'},
          {title: 'H6', value: 'h6'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'h2',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'headingSectionBodyText',
      type: 'array',
      title: 'Body Text',
      of: bodyMembers,
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      level: 'headingLevel',
    },
  },
})
