import { CloudinaryAsset } from './cloudinary';

type CollectionImage = {
  image: CloudinaryAsset;
  name: string;
};

export type AlejandroAndTaylorCollection = {
  collectionNumber: number;
  collectionName: string;
  images: CollectionImage[];
};
