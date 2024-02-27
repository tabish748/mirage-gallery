/* Sample of drop.artist.profilePicture
export const CloudinaryImage = {
  _key: 'dDcUFjQKjgVvvMhPHwNJk',
  _type: 'cloudinary.asset',
  _version: 1,
  access_control: [],
  access_mode: 'public',
  bytes: 28280,
  created_at: '2023-02-27T23:34:27Z',
  created_by: {
    id: 'e55ef9c746bac9100df8b43f8edfaa',
    type: 'user',
  },
  duration: null,
  format: 'webp',
  height: 470,
  metadata: [],
  public_id: 'Curated/Life and Death/austiin_acu3b4',
  resource_type: 'image',
  secure_url:
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1677540867/Curated/Life%20and%20Death/austiin_acu3b4.webp',
  tags: [],
  type: 'upload',
  uploaded_by: {
    id: 'e55ef9c746bac9100df8b43f8edfaa',
    type: 'user',
  },
  url: 'http://res.cloudinary.com/do1gnj1vn/image/upload/v1677540867/Curated/Life%20and%20Death/austiin_acu3b4.webp',
  version: 1677540867,
  width: 518,
};
*/

type User = {
  id: string;
  user: string;
};

type ContextualMetadata = {
  custom: {
    alt: string;
    caption: string;
  };
};

export type CloudinaryAsset = {
  _key: string;
  _type: string;
  _version: number;
  // This field isn't always filled and for now we'll comment it
  // access_control: AccessControl[];
  access_mode: string;
  bytes: number;
  context?: ContextualMetadata;
  created_at: string;
  created_by: User;
  duration?: number;
  format: string;
  height: number;
  // This field isn't always filled and for now we'll comment it
  // metadata?: Metadata[];
  public_id: string;
  resource_type: string;
  secure_url: string;
  // This field isn't always filled and for now we'll comment it
  // tags: string[];
  type: string;
  uploaded_by: User;
  url: string;
  version: number;
  width: number;
};
