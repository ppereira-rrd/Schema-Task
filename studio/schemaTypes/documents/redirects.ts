// https://www.sanity.io/docs/developer-guides/managing-redirects-with-sanity
import {defineType, defineField, type SlugRule} from 'sanity'

// Shared validation for our redirect slugs
const slugValidator = (rule: SlugRule) =>
  rule.required().custom((value) => {
    if (!value || !value.current) return "Can't be blank"
    if (!value.current.startsWith('/')) {
      return 'The path must start with a /'
    }
    return true
  })

export const redirectType = defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  description: 'Redirect tool',
  fields: [
    defineField({
      name: 'source',
      type: 'slug',
      validation: (rule) => slugValidator(rule),
    }),
    defineField({
      name: 'destination',
      type: 'slug',
      validation: (rule) => slugValidator(rule),
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
