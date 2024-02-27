import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useState } from 'react';
import { Artist } from 'types/drops';

interface ArtistsProps {
  artists: Artist[];
}
export const Artists = ({ artists }: ArtistsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="relative z-10 w-full px-2 pt-6 md:px-5">
      <div className="px-2 mx-auto max-w-screen-2xl">
        <hr />
        <h2 className="pt-24 my-6 text-2xl text-black">Curated Artists</h2>
        <br></br>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-8">
          {(isExpanded ? artists : artists.slice(0, 8)).map((artist) => (
            <Link href={`/${artist.dropSlug}`} key={artist._key}>
              <div className="relative group text-center">
                <div className="overflow-hidden h-24 w-24 rounded-full relative z-0 mx-auto">
                  <CldImage
                    alt={`${artist.name}`}
                    className="object-cover group-hover:scale-110 duration-300 h-24 w-24 rounded-full"
                    height={96}
                    quality={90}
                    src={artist.profilePicture.public_id}
                    width={96}
                  />
                </div>
                <div className="mt-2">
                  <span className="text-sm text-black hover:opacity-80">
                    {artist.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <br />
        <br />
        <br />
        <div className="flex justify-center mt-6">
          <span
            className="py-2 px-4 cursor-pointer hover:text-blue-500"
            onClick={toggleExpand}
          >
            {isExpanded ? 'Show Less ↑' : 'View all artists ↓'}
          </span>
        </div>
      </div>
    </div>
  );
};
