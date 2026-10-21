import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import { translatedTypes, supportedLanguages } from './schemaTypes/shared/translations'
import {structure} from './structure/index';

export default defineConfig({
  name: 'Studio',
  title: 'Schema-Task',
  projectId: 'm5ne9q48',
  dataset: 'production',

  releases: {
    enabled: true,
  },

  plugins: [
    structureTool({structure}),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [...supportedLanguages],
      schemaTypes: [...translatedTypes],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
  // Add filter below so the only options for documents are language specific
  document: {}
})
