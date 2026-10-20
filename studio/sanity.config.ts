import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { StructureResolver } from 'sanity/structure'

export default defineConfig({
  name: 'Studio',
  title: 'Schema-Task',
  projectId: 'm5ne9q48',
  dataset: 'production',

  // Add content release - schedule the release
  releases: {
    enabled: true,
  },
  // Add localization

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
