import {defineField, defineType} from 'sanity'
import {translationField} from '../shared/translations'

// This doesnt need SEO, this is to be used on other pages not a page in itself, like a storage container.
export const nursingHomeType = defineType({
  name: 'nursingHome',
  title: 'Nursing Home Information',
  type: 'document',
  fields: [
    translationField,
    defineField({
      name: 'basicSchemaFields',
      type: 'basicSchemaFields',
    }),
    defineField({
      name: 'providerName',
      type: 'string',
      title: 'Provider Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'providerAddress',
      type: 'string',
      title: 'Provider Address',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'providerCounty',
      type: 'string',
      title: 'County',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'chainName',
      type: 'string',
      title: 'Chain Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'abuseIcon',
      type: 'boolean',
      title: 'abuseIcon',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overallRating',
      type: 'number',
      title: 'Overall Rating',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sfs',
      type: 'string',
      title: 'Special Focus Status',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'totalFinesDollars',
      type: 'string',
      title: 'Total Amount of Fines in Dollars',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lat',
      type: 'string',
      title: 'Lat',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'long',
      type: 'string',
      title: 'Long',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cmsCertID',
      type: 'string',
      title: 'CMS Cert ID',
      validation: (rule) => rule.required(),
    }),
  ],
})
