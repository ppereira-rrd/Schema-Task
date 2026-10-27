# Lanzone Sanity Schema Task

- [Overall setup and structure for Sanity](#overall-setup-and-structure-for-sanity)
  - [Schema Documents](#schema-documents)
  - [Schema Objects](#schema-objects)
- [Other notes](#other-notes)

## Overall setup and structure for Sanity

Lanzone has what most clients have for CPTs, however they do have 2 custom CPTs from WP: **In The Media** and **Nursing Home Info**, which is for the interactive map to view different nursing homes in California.

### Schema Documents

These will be documents in Sanity:

#### Page / Post
*(This depends on page/post structure and what needs to be displayed)*

- Reference SEO and Basic Fields
- Content Sections:
  - Reference Heading Content
  - Reference Body Content
  - Reference TOC
  - Reference Key Takeaways
  - Reference Testimonial Section
  - Reference Case Result Section
  - Reference Attorney Section
  - Reference Video
  - For posts – related posts?

#### Attorneys

- Reference SEO and Basic Fields
- Content Sections:
  - Reference Heading Content
  - Reference Body Content
  - Name, position, phone, email, education and credentials

#### Case Results

- Reference Basic Fields
- Content Sections:
  - Case type, amount, snippet description, full description

#### Testimonials

- Reference Basic Fields
- Content Sections:
  - Name and testimonial

#### Videos

- Reference SEO and Basic Fields
- Content Sections:
  - Transcript, URL, related links, featured attorney (reference)

#### Nursing Home Info
*(For the custom map)*

- Provider name, address, chain name, abuse icon, county, overall rating, total fines in dollars, Special Focus Status, lat, long, CMS cert ID

#### In The Media

- Reference Basic Fields
- Content Sections:
  - Media label, text, read more, podcast links for Apple, Spotify and YouTube

#### Author

- Reference Basic Fields
- Content Sections:
  - Author name

#### CTA

- Reference Basic Fields
- Content Sections:
  - Name, heading, text, URL

#### Category

- Reference Basic Fields

Other document types that are needed are **redirect** and **site settings**.

### Schema Objects

Schema "objects" are shared between other Sanity document types.

The objects below are common fields like heading, URL, meta descriptions, meta title, all SEO fields, etc.:

#### SEO

- Meta title, meta description, excerpt, featured image, SEO schema (JSON-LD), noIndex

#### Basic Fields

- Title, slug, published at

The objects below are general sections used for how content is displayed. For example, a heading with body text, videos, testimonial section, etc. These will also be objects:

#### Key Takeaways

- Reference heading content with body content

#### Testimonial Section

- Reference to testimonial

#### Heading Section

- Array of different heading options

#### Body Content

- Body field

#### Attorney Section

- Reference attorney section

## Other notes

**Localization** should be added right away to keep en/es pages linked. I have everything together in a `translated.ts` file in the `schemaType` folder, which is used in the Sanity config file.

You can also have a **custom structure** in Sanity using the Structure Tool, which is what I implemented in the `structure` folder in the `index` file.

I also allowed **drafts** to be turned on in the documents section in the config, along with **releases**.

Lastly, I created a **`lib` folder** where the functions for validating slugs and URLs get called from. I also have a function to validate JSON-LD schema, but name only, not all the code. This IMO is a good practice because everything is centralized in one file instead of having the code in every file that a slug or URL is used in Sanity.