# Architecture
Following document describes how the project is setup and how it is connected with the tools that power it.

## Data Flow
Two of the four main projects have their content being fetched from Sanity CMS. These are **Curated** and **Alejandro & Taylor**

The other two projects, **Crypto-Native** and **Dreamers**, plus the **Home** page and **Membership** page

### Sanity CMS
Sanity Studio can be found under `/mg-admin` path. It is needed to manage information, create, delete and update documents. It is also where artists form submissions are sent (from the _Become a Curated Artists_ form). Inside the */lib* folder we can find all the files for configuring, using and modelling the CMS to fit our needs. Here we can find: 
* **Schemas:** these are the main piece for Sanity models. There are currently 3 main schemas or documents to store Curated info, A & T info, and form submissions. More info [here](https://www.sanity.io/docs/schema-types)
* **queries.ts:** This file contains all the queries to fetch content from the CMS into our site. Queries are written in the Sanity's own language, called [GROQ](https://www.sanity.io/docs/groq-reference). There is a playground available for the case we need to create, update or change a query. See the plugin [Vision](https://www.sanity.io/docs/the-vision-plugin)
* **sanity.client.ts:** This file adds some parameters to the root Sanity Configuration and exports the sanity client to be used inside the site to fetch data from CMS, whether we want to use it in GetStaticProps, GetServerSideProps, or client fetching inside the component. The client library used for fetching data from the CMS is called [next-sanity](https://www.npmjs.com/package/next-sanity).

### NextJS
Pages that fetch Curated drops from the Drops model use GetServerSideProps, as this data changes more frequently. Alejandro & Taylor pages use GetStaticProps because their collections change less frequently. Overall, there are 6 pages that retrieve data from the CMS and use any of the NextJS data fetching methods:
* */home*: uses GetServerSideProps to fetch the most recent drops that are either in Upcoming or Minting status.
* */curated*: uses GetServerSideProps to fetch all drops and order them by newest first (`_createdAt desc`).
* */curated/drop/slug*: uses GetServerSideProps to fetch detailed information of each drop
* */alejandro-and-taylor/alejandro*: uses GetStaticProps to fetch collections of Alejandro
* */alejandro-and-taylor/taylor*: uses GetStaticProps to fetch collections of Taylor
* */membership*: uses GetServerSideProps to fetch the projectId of all the drops, because this page alows members to claim free pieces even if the drop is shown as sold out.
More information about NextJS Data Fetching can be found [here](https://nextjs.org/docs/basic-features/data-fetching/overview).

## Cloudinary
This service allows assets management, in their most full size state. However, the relationship between images and drops or collections is handled in Sanity. In the code all the information about artworks comes from the Sanity response (width, height, size, name, url, secure_url, transformations, etc.).
### [next-cloudinary](https://www.npmjs.com/package/next-cloudinary)
This plugin exports a couple of components that allow the page to fetch images from Cloudinary directly, using Cloudinary CDN.

## [Redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects)
There are 2 different scenarios we need to consider in order to be compatible with the old site, and continue supporting the URLs that the community handles now a day.
* Static pages: like `/crypto-native`, `/about` or `/sentient-claim`, all of these are handled through the redirects option in `next.config.ts`.
* Dynamic pages (drops): these come mainly from CMS, and their path is a slug. In the old site, these were loaded at the root level. In order to support, we just placed `[slug].tsx` at the root level of pages.
