import { groq } from 'next-sanity';

/**
 * Fetch 5 drops to show in Home Hero, only required fields
 *  - Only 5
 *  - Ordered by status upcoming and minting first, and then by date newest first
 */
export const dropsHomeHeroQuery = groq`
  {
    "mintingDrops": *[_type == "drop" && defined(slug) && status == "minting"] {
      name,
      "slug": slug.current,
      "cover": sampleImages[0],
      "artists": artists[].name,
      "created": _createdAt,
      status
    } | order(_createdAt desc),

    "soldOutDrops": *[_type == "drop" && defined(slug) && status == "sold-out"] {
      name,
      "slug": slug.current,
      "cover": sampleImages[0],
      "artists": artists[].name,
      status
    } | order(_createdAt desc)
  }
`;

/**
 * Fetch all drops to fill Curated page
 */
export const dropsQuery = groq`
  *[_type == "drop"] {
    _id,
    "artists": artists[].name,
    mintPrice,
    name,
    status,
    "projectId": project.id,
    "cover": sampleImages[0],
    "slug": slug.current,
    "isTestable": isTestable,
    "contractAddress": project.contractAddress,
    releaseDate,
  } | order(releaseDate desc)
`;

export const artistsQuery = groq`
  *[_type == "drop"] {
    "dropDetails": {
      _id,
      name,
      slug,
    },
    "artists": artists[]{
      _key,
      name,
      bio,
      twitterUrl,
      profilePicture
    }
  }
`;

export const dropBySlugQuery = groq`
  *[_type == "drop" && slug.current == $slug][0]
`;

export const alejandroAndTaylorCollectionsQuery = groq`
  *[_type == "alejandro-and-taylor-collections" && artist == $artist] | order(collectionNumber asc)
`;

export const membershipCuratedProjects = groq`
  *[_type == "drop"] {
    name,
    "projectId": project.id,
    "contractAddress": project.contractAddress,
  }
`;
