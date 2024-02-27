import Image from 'next/image';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { PlayIconSvg } from 'components/Svgs/PlayIconSvg';
import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { MARKETPLACE_URLS } from 'utils/constants';
import { useState } from 'react';

const TRAILER =
  'https://res.cloudinary.com/do1gnj1vn/video/upload/v1678469272/Crypto%20Native/trailer_2_update_npt2cc.mp4';

const THUMBNAIL =
  'https://res.cloudinary.com/do1gnj1vn/image/upload/v1679882076/Crypto%20Native/thumbnail.jpg';

export default function AboutCryptoNative() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="py-24">
      <HeroTitle accentColor={'text-native'} subtitle="About">
        With Crypto-Native, the artwork evolves when a secondary sale happens.
      </HeroTitle>
      <p className="mx-auto text-lg text-gray-600 md:text-3xl">
        Meaning instead of just trading the same JPEG back and forth, you only
        get to own a unique step in the 10 phases of evolution for a piece.
      </p>
      <div className="flex items-center justify-start py-10">
        <OpenSeaButtonLink href={MARKETPLACE_URLS.cryptoNative} />
      </div>{' '}
      <div
        className="relative"
        style={{
          paddingBottom: '56.25%', // 16:9 aspect ratio
        }}
      >
        {isPlaying ? (
          <video
            autoPlay
            className="absolute inset-0 object-cover w-full h-full"
            controls
            onEnded={() => setIsPlaying(false)}
            src={TRAILER}
          />
        ) : (
          <>
            <Image
              alt="Video thumbnail"
              className="absolute inset-0 object-cover w-full h-full"
              height={832}
              quality={100}
              src={THUMBNAIL}
              width={1500}
            />
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gray-900/60"
              onClick={handlePlayClick}
            >
              <div className="w-20 h-20 duration-300 hover:scale-110">
                <PlayIconSvg />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
