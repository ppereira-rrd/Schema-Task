import {defineField, defineType} from 'sanity'
import { translationField } from '../shared/translations'

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
    // defineField({
    //   name: 'seo',
    //   type: 'seo',
    //   title: 'SEO & Social',
    // }),
    // Content Fields
        // Label - Media text - Apple, spotify, youtube links - read more link
  ],
})
