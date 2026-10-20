# Sanity Schema Task

This is the sanity schema task for Lanzone

## Sanity 

Overall setup and structure for sanity.

### General Schema 

Lanzone has what most clients have for CPTs, however they do have 2 custom CPTs from WP. That being the In The Media and Nursing Home Info which is for the interactive map to view different nursing homes in California. CTA is good to have one place where a CTA will be used in many locations. This way it is easy to update but the fields will depend based on the design used in the CTA.
- Page
- Post
- Attorneys
- Case Results 
- Testimonials 
- Videos
- Nursing Home Info (For the custom map)
- In The Media
- CTA

#### Content Sections

These are general sections used for how content is displayed. For example, a heading with body text, videos, testimonial section, etc...
- Key takeaways
- TOC
- Testimonial Section
- Heading Section

#### Shared Schema Objects
Schema "objects" shared between other schema. These are common fields like heading, url, meta descriptions, meta title, all seo fields, etc...
- SEO
- Basic Fields (This has meta title, meta description, url, etc...)

## Installation

```bash
git clone the repo url
cd studio
npm install
```

## Usage

```bash
cd studio
npm start
```
