# Lanzone Sanity Schema

Sanity Studio schema for the Lanzone website. It covers the content types, reusable objects, localization, and custom Studio structure used across the site, including the custom WordPress CPTs (In The Media and Nursing Home Info) that power the interactive California nursing home map.

Note: This doc was created by me in Google Docs but Claude was used to give me the markdown of the doc for this file. 

## Overview

Lanzone uses the standard CPTs most clients have, plus two custom CPTs carried over from WordPress:

- **In The Media**: press and podcast coverage
- **Nursing Home Info**: data for the interactive map of nursing homes in California

## Setup and Structure

- **Localization** is configured from the start to keep English and Spanish pages linked. The translation settings live in `translated.ts` inside the `schemaType` folder, which is used by the Sanity config file.
- **Custom Structure** is built with the Structure Tool. The implementation lives in the `structure` folder and is wired up in its `index` file.
- **Drafts and Releases** are enabled in the documents section of the config.
- **Media Library** is enabled in the config for the Studio dashboard only.
- **Lib folder** holds the centralized validation functions for slugs and URLs, and a function that validates JSON-LD schema by name. Keeping these in one file avoids repeating the logic in every schema that uses a slug or URL. Reusable objects follow the same approach.
- **Code comments** throughout the repo explain where ideas came from, so anyone reading the code can follow the reasoning.

## Schema Documents

### Page / Post
Structure depends on how pages and posts are laid out. Includes:
- SEO and basic fields
- Content sections: Heading Content, Body Content, TOC, Key Takeaways, Testimonial Section, Case Result Section, Attorney Section, Video
- Related posts (posts only, to be confirmed)

### Attorneys
- SEO and basic fields
- Heading Content and Body Content
- Name, position, phone, email, education, and credentials

### Case Results
- Basic fields
- Case type, amount, snippet description, full description

### Testimonials
- Basic fields
- Name and testimonial

### Videos
- SEO and basic fields
- Transcript, URL, related links, featured attorney (reference)

### Nursing Home Info
Data for the custom map:
- Provider name, address, chain name, abuse icon, county, overall rating, total fines in dollars, Special Focus Status
- Latitude, longitude, CMS certification ID

### In The Media
- Basic fields
- Media label, text, read more link, podcast links for Apple, Spotify, and YouTube

### Author
- Basic fields
- Author name

### CTA
- Basic fields
- Name, heading, text, URL

### Category
- Basic fields

### Other Document Types
- Redirects
- Site settings

## Schema Objects

Objects are shared across document types.

### Shared Fields
- **SEO**: parent page, meta title, meta description, excerpt, featured image, SEO schema (JSON-LD), noIndex
- **Basic Fields**: title, slug, published at, parent

### Content Sections
- **Key Takeaways**: heading content with body content
- **Testimonial Section**: reference to a testimonial
- **Heading Section**: array of heading options
- **Body Content**: body field
- **Attorney Section**: reference to an attorney

Body content can use Portable Text. Developers can choose whichever approach they prefer for reusable objects.

## Notes

- Localization is set up from day one so en/es pages stay linked.
- Slug and URL validation is centralized in the `lib` folder.
- Check the comments in the code for the reasoning behind specific decisions.