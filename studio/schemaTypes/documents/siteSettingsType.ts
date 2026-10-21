import {defineField, defineType, defineArrayMember} from 'sanity'
import {translationField} from '../shared/translations'

// Singleton template meaning only 1 per language
export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    translationField,
    defineField({
      name: 'siteName',
      type: 'string',
      title: 'Site Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      options: {hotspot: true},
    }),
    // Need to format properly
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'Default SEO & Social',
      description: 'Used by any page that does not set its own',
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({name: 'socialPlatform', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'socialUrl', type: 'url', validation: (rule) => rule.required()}),
          ],
          preview: {select: {title: 'platform', subtitle: 'url'}},
        }),
      ],
    }),
    // Site settings like site name - default meta title and desc, etc...
  ],
  preview: {
    select: {title: 'siteName'},
    prepare: ({title}) => ({
      title: title || 'Site Settings'
    }),
  },
})
