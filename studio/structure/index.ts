import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/studio/structure-builder-cheat-sheet
// https://www.sanity.io/docs/studio/structure-tool

const contentTypes = ['page', 'post', 'videos', 'attorney', 'category']
const storageTypes = ['nursingHome', 'officeLocations', 'inTheMedia', 'caseResults', 'testimonials', 'author']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Lanzone')
    .id('website-structure')
    .items([
      S.listItem()
        .title('Content')
        .id('website-structure-content')
        .child(
          S.list()
            .id('website-structure-content-map')
            .items(contentTypes.map((type) => S.documentTypeListItem(type))),
        ),
      S.divider(),
      S.listItem()
        .title('Storage')
        .id('website-structure-storage')
        .child(
          S.list()
            .id('website-structure-storage-map')
            .items(storageTypes.map((type) => S.documentTypeListItem(type))),
        ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .id('website-structure-settings')
        .child(
          S.list()
            .id('website-structure-settings-child')
            .items([
              S.listItem()
                .title('Site Settings')
                .id('siteSettings')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.divider(),
              S.documentTypeListItem('redirect').title('Redirects'),
            ]),
        ),
    ])
