import {defineField, defineType} from 'sanity'
import {translationField} from '../shared/translations'
import {urlValidator} from '../../lib/validator'

// This doesnt need SEO, this is to be used on other pages not a page in itself, like a storage container.
export const officeLocationsType = defineType({
  name: 'officeLocations',
  title: 'Office Locations',
  type: 'document',
  fields: [
    // translationField,
    defineField({
      name: 'basicSchemaFields',
      type: 'basicSchemaFields',
    }),
    defineField({
      name: 'officeAddress',
      type: 'string',
      title: 'Office Address',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'officePhone',
      type: 'string',
      title: 'Office Phone',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'officeName',
      type: 'string',
      title: 'Office Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'officeGBPLink',
      type: 'url',
      title: 'Office GBP Link',
      validation: urlValidator,
    }),
  ],
})
