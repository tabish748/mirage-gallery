# Mirage Gallery

## Description
New site for Mirage Gallery Art.

## Design
The mockup for this project can be found in this [Figma](https://www.figma.com/file/HdXTxrcixSvwiaa2PZMmc7/MirageGallery-Redesign?node-id=141%3A4528&t=3XVlljiXxSlLdwv7-0).

## Tools and Technologies
The main tools used to build this site are:
* **[Nextjs 13](http://nextjs.org/)** - with the `pages` structure
* **[Sanity CMS](https://www.sanity.io/)** - to allow managing data
* **[Cloudinary](https://cloudinary.com/)** - to manage all multimedia assets
* **[Vercel](https://vercel.com/)** to host this project
* **[next-sanity](https://www.npmjs.com/package/next-sanity)** to allow the usage of Sanity SDK inside Nextjs
* **[sanity-plugin-cloudinary](https://github.com/sanity-io/sanity-plugin-cloudinary)** allows integration of Cloudinary within the Sanity Studio

### CMS's and Data
Sanity Studio is hosted inside the same project under a specific path. 

### Getting started
1. `git clone` the repo
2. `yarn` Install dependencies
3. `yarn dev` to run the site

### Folder Structure
* `components` - shared components
* `lib` - mainly Sanity files (queries, sanity client, schemas definition, etc.)
* `modules` - react components organized _by feature_
* `pages` - Next.js folder with routes
* `public` - assets
* `styles` - global styles
* `types` - Typescript types
* `utils` - contants, routes, JS functions, etc. 

## Roadmap
See [Issues](https://github.com/tomasg88/mirage-gallery/issues) tab

