import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { MintingClosedSvg } from 'components/Svgs/MintingClosedSvg';
import Image from 'next/image';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function DreamersCollectionHero() {
  return (
    <>
      <div className="w-full h-[500px]">
        <Image
          alt="imagen"
          blurDataURL="/assets/placeholder.svg"
          className="object-cover w-full h-full"
          height={300}
          placeholder="blur"
          src="/assets/back-8000-dreamers.jpg"
          width={1600}
        />
      </div>
      <div className="px-2 mx-auto md:px-5 max-w-screen-2xl">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center bg-[#fdf7f7] text-xs px-3 py-2 rounded-full text-[#C02828]">
            <MintingClosedSvg className="mr-2" />
            Minting Closed
          </span>
          <OpenSeaButtonLink href={MARKETPLACE_URLS.dreamers} />
        </div>
        <h2 className="text-3xl">8,000 Dreamers</h2>
        <p>
          Each Dreamer is the combination of traditional fine-art, machine
          learning, and collectibles. Until further notice, there are only 1485
          Dreamers.
        </p>
      </div>
    </>
  );
}
