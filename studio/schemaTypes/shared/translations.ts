import {defineField} from 'sanity'

// Drop this into any document
export const translationField = defineField({
  name: 'language',
  type: 'string',
  readOnly: true,
  hidden: true,
})

// Single place to manage different languages used on the site
export const supportedLanguages = [
  {id: 'en', title: 'English'},
  {id: 'es', title: 'Spanish'},
]

export const translatedTypes = [
  'post',
  'page',
]