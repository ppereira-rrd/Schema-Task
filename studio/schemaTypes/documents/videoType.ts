import {defineField, defineType, defineArrayMember} from 'sanity'
import {translationField} from '../shared/translations'
import {urlValidator} from '../../lib/validator'

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
    // In astro you can set what to grab from the choosen attorney(name,image,position)
    defineField({
      name: 'attorney',
      title: 'Featured Attorney',
      type: 'reference',
      to: [{type: 'attorney'}],
    }),
    defineField({
      name: 'relatedLinks',
      type: 'array',
      title: 'Related Links',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'relatedLinksArray',
          fields: [
            defineField({name: 'linkText', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'linkURL', type: 'url', validation: urlValidator}),
          ],
          preview: {select: {title: 'Related Link', subtitle: 'url'}},
        }),
      ],
    }),
    defineField({
      name: 'videoURL',
      type: 'url',
      title: 'Video Url',
      validation: urlValidator,
    }),
    defineField({
      name: 'videoTranscript',
      type: 'string',
      title: 'Transcript',
      validation: (rule) => rule.required(),
    }),
  ],
})
