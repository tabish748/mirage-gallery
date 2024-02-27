import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import Image from 'next/image';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function AlejandroHero() {
  return (
    <>
      <div className="w-full h-[500px]">
        <Image
          alt="imagen"
          blurDataURL="/assets/placeholder.svg"
          className="object-cover w-full h-[500px]"
          height={600}
          placeholder="blur"
          quality={100}
          src="/assets/alejandrotaylor/back-alejandro.jpeg"
          width={1200}
        />
      </div>
      <div className="px-2 mx-auto md:px-2 max-w-7xl">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center bg-[#f1fbfe] text-xs px-3 py-2 rounded-full text-original">
            Alejandro & Taylor
          </span>
          <OpenSeaButtonLink href={MARKETPLACE_URLS.alejandroAndTaylor} small />
        </div>
        <h2 className="text-3xl">Meet Alejandro</h2>
        <p className="my-6 text-black">
          Alejandro is a realist visual artist born in Panama in 1974. He
          painted landscapes during his adolescence and received his formal arts
          education in Panama, Barcelona and New York City. Since 2001, he has
          held over 25 exhibitions of his paintings throughout the US and
          Europe. His work has appeared in numerous publications as well.
        </p>
        <p>
          [This bio was created entirely with A.I. and is not factually
          accurate]
        </p>{' '}
      </div>
    </>
  );
}
