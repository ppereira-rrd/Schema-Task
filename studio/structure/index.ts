import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/studio/structure-builder-cheat-sheet
// https://www.sanity.io/docs/studio/structure-tool

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Lanzone Site Structure')
    .items([
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'siteSettings'),
      S.divider(),
      S.documentTypeListItem('siteSettings').title('Site settings'),
    ])
