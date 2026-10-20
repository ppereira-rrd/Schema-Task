// ./structure/index.ts
import type {StructureResolver} from 'sanity/structure'
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
      // list all document types except 'siteSettings'
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'siteSettings'),
      S.divider(),
      // then add the 'siteSettings' type separately
      S.documentTypeListItem('siteSettings').title('Site settings'),
    ])
