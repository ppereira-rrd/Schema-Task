import {defineArrayMember, defineField} from 'sanity'

// This is for the text editor to allow other fields other than just text in the editor. 
export const bodyMembers = [
  defineArrayMember({type: 'block'}),
  defineArrayMember({
    type: 'image',
    options: {hotspot: true},
    fields: [
      defineField({
        name: 'alt',
        type: 'string',
        title: 'Alt Text',
      }),
      defineField({
        name: 'caption',
        type: 'string',
        title: 'Caption',
      }),
    ],
  }),
  defineArrayMember({type: 'videos'}),
]