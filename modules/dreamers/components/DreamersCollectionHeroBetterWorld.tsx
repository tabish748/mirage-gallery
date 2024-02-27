import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { SquaresSvg } from 'components/Svgs/SquareSvg';
import Image from 'next/image';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function DreamersCollectionBetterWorldHero() {
  return (
    <>
      <div className="w-full h-[500px]">
        <Image
          alt="imagen"
          className="object-cover w-full h-full"
          height={600}
          src="/assets/back-dreaming-a-better-world.jpg"
          width={1600}
        />
      </div>
      <div className="px-2 mx-auto md:px-5 max-w-screen-2xl">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center bg-[#f5f5f5] text-xs px-3 py-2 rounded-full text-[#213bc7]">
            <SquaresSvg className="mr-2" />
            Must hold a Dreamer to vote
          </span>
          {/* TODO - review hover and adjust icon */}
          <OpenSeaButtonLink href={MARKETPLACE_URLS.dreamingOfABetterWorld} />
        </div>
        <h2 className="text-3xl">Dreaming of a better world.</h2>
        <p>An initiative focused on using art for good.</p>
      </div>
    </>
  );
}
