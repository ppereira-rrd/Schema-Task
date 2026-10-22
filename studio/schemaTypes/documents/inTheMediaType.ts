import {defineField, defineType, defineArrayMember} from 'sanity'
import {translationField} from '../shared/translations'
import {slugValidator, urlValidator} from '../../lib/validator'

// This doesnt need SEO, this is to be used on other pages not a page in itself, like a storage container.
export const inTheMediaType = defineType({
  name: 'inTheMedia',
  title: 'In The Media',
  type: 'document',
  fields: [
    translationField,
    defineField({
      name: 'basicSchemaFields',
      type: 'basicSchemaFields',
    }),
    defineField({
      name: 'mediaLabel',
      type: 'string',
      title: 'Top Label',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mediaText',
      type: 'string',
      title: 'Media Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readMore',
      title: 'Read More Link',
      type: 'slug',
      validation: slugValidator,
    }),
    defineField({
      title: 'Podcast Links',
      name: 'podcastLinks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Podcast Link',
          fields: [
            defineField({
              name: 'platform',
              type: 'string',
              title: 'Platform',
              options: {
                list: [
                  {title: 'Apple Podcasts', value: 'apple'},
                  {title: 'Spotify', value: 'spotify'},
                  {title: 'YouTube', value: 'youtube'},
                ],
              },
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: urlValidator,
            }),
          ],
        }),
      ],
    }),
  ],
})
