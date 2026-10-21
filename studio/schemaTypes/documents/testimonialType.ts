import {defineField, defineType} from 'sanity'
import { translationField } from '../shared/translations'

// This doesnt need SEO, this is to be used on other pages not a page in itself, like a storage container.
export const testimonialType = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    translationField,
    defineField({
      name: 'basicSchemaFields',
      type: 'basicSchemaFields',
    }),
    // Content Fields
        // Name - testimonial 
  ],
})
