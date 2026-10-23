import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import {translatedTypes, supportedLanguages} from './schemaTypes/shared/translations'
import {structure} from './structure/index'

// More actions for document like dupping below
// https://www.sanity.io/docs/studio/document-actions

export default defineConfig({
  name: 'Studio',
  title: 'Schema-Task',
  projectId: 'm5ne9q48',
  dataset: 'production',

  // Allows for content releases
  releases: {
    enabled: true,
  },

  plugins: [
    structureTool({structure}),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [...supportedLanguages],
      schemaTypes: [...translatedTypes],
      // https://github.com/sanity-io/plugins/tree/main/plugins/%40sanity/document-internationalization
      // Optional (from github docs)
      // Enable "manage translations" button without creating a translated version. Helpful if you have
      // pre-existing documents that you need to tie together through the metadata document
      allowCreateMetaDoc: true,
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // https://www.sanity.io/docs/content-lake/drafts-and-versions#k6b73ab68807e
    // Allows drafts for pages
    // To disable drafts on a document type: liveEdit: true -> as used in the authors doc type
    drafts: {
      enabled: true,
    },
    // Add filter below so the only options for documents are language specific
    // https://www.sanity.io/docs/studio/new-document-options
    // newDocumentOptions: (prev, {creationContext}) => {
    //   return prev.filter((templateItem) =>
    //       !translatedTypes.includes(templateItem.templateId),
    //     )
    // },
  },
})
