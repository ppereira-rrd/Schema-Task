import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'Studio',
  title: 'Schema-Task',
  projectId: 'm5ne9q48',
  dataset: 'production',

  // Add content release
  // Add localization

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
