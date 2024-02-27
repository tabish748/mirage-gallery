import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import Image from 'next/image';
import { MARKETPLACE_URLS } from 'utils/constants';

export const HeroMembership = () => {
  return (
    <>
      <div className="w-full h-[500px]">
        <Image
          alt="Memberships"
          className="object-cover w-full h-[500px]"
          height={600}
          src="/assets/membership/hero-membership.jpg"
          width={1600}
        />
      </div>
      <div className="px-2 mx-auto md:px-5 max-w-screen-2xl">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center bg-[#fefaec] text-xs px-3 py-2 rounded-full text-membership">
            Mirage gallery
          </span>
          <OpenSeaButtonLink href={MARKETPLACE_URLS.membership} />
        </div>
        <h2 className="text-3xl">Memberships</h2>
        <p>
          Mirage Gallery Memberships allow for bonus perks related to Mirage
          Gallery Curated and other Mirage Gallery projects!
        </p>
      </div>
    </>
  );
};
