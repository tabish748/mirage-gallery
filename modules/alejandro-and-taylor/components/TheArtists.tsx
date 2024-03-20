import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ALEJANDRO_PAGE, TAYLOR_PAGE } from 'utils/routes';

interface Artist {
  name: string;
  coverUrl: string;
  pageUrl: string;
}

const artists: Artist[] = [
  {
    name: 'Alejandro',
    coverUrl:
      'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398974/Alejandro%20and%20Taylor/Alejandro/artist2_photos_v2_x4_zqmpvm.jpg',
    pageUrl: ALEJANDRO_PAGE,
  },
  {
    name: 'Taylor',
    coverUrl:
      'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398975/Alejandro%20and%20Taylor/Taylor/artist3_photos_v2_x4_d15kcs.jpg',
    pageUrl: TAYLOR_PAGE,
  },
];

interface ArtistDisplayProps {
  name: string;
  coverUrl: string;
  pageUrl: string;
}

const ArtistDisplay: React.FC<ArtistDisplayProps> = ({
  name,
  coverUrl,
  pageUrl,
}) => (
  <Link href={pageUrl} passHref>
    <a className="relative block overflow-hidden">
      <Image
        alt={name}
        blurDataURL="/assets/placeholder.svg"
        className="object-cover w-full h-full" // Ensuring full coverage in case of layout shifts
        height={600}
        placeholder="blur"
        quality={100}
        src={coverUrl}
        width={600}
      />
      <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
        {name}
      </h2>
    </a>
  </Link>
);

export default function TheArtists() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="my-6 text-2xl">The Artists</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mx-auto max-w-screen-2xl">
        {artists.map((artist) => (
          <ArtistDisplay key={artist.name} {...artist} />
        ))}
      </div>
    </div>
  );
}
