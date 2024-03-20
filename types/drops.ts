import { CloudinaryAsset } from './cloudinary';

export type Artist = {
  _key: string;
  name: string;
  bio: string;
  twitterUrl: string;
  profilePicture: CloudinaryAsset;
  dropSlug: string;
};

export type Project = {
  name: string;
  description: string;
  id: string;
  contractAddress?: string;
};

export enum MintStatus {
  ALL = '',
  PRIVATE = 'private',
  UPCOMING = 'upcoming',
  MINTING = 'minting',
  SOLD_OUT = 'sold-out',
}

export type Drop = {
  created: any;
  _createdAt: string;
  _id: string;
  _updatedAt: string;
  artists: Artist[];
  cover: CloudinaryAsset | null; // This is the same sampleImages[0].url
  description: string;
  marketplaceUrl: string;
  mintPrice: number;
  name: string;
  preSaleAmount: number;
  project: Project;
  publicSaleAmount: number;
  releaseDate: string; // "2023-03-10T03:03:00.000Z" - https://www.sanity.io/docs/datetime-type
  sampleImages: CloudinaryAsset[];
  slug: string;
  status: MintStatus;
  totalAmount: number;
  video: CloudinaryAsset;
  isTestable?: boolean;
};

// Partial Drop type used in Gallery. Only has 5 fields
export type DropGallery = {
  _id: Drop['_id'];
  artists: string[];
  cover: Drop['cover'];
  mintPrice: Drop['mintPrice'];
  name: Drop['name'];
  projectId: Project['id'];
  status: Drop['status'];
  slug: Drop['slug'];
  contractAddress: Project['contractAddress'];
  isTestable: Drop['isTestable'];
};
