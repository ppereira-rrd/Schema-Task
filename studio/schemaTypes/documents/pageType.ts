import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
        name: 'Basic Schema Fields',
        type: 'basicSchemaFields',
        title: 'Basic Schema Fields'
    })
  ],
})