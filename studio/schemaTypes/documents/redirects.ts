// https://www.sanity.io/docs/developer-guides/managing-redirects-with-sanity
import {defineType, defineField} from 'sanity'
import {slugValidator} from '../../lib/validator'

export const redirectType = defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  description: 'Redirect tool',
  fields: [
    defineField({
      name: 'source',
      type: 'slug',
      validation: slugValidator,
    }),
    defineField({
      name: 'destination',
      type: 'slug',
      validation: slugValidator,
    }),
    defineField({
      name: 'permanent',
      type: 'boolean',
    }),
  ],
  // null / false makes it temporary (307)
  initialValue: {
    permanent: true,
  },
})
