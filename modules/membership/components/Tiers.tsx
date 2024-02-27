import Image from 'next/image';
import { MembershipTiers } from 'types/main';
import { MEMBERSHIP_MODULE_INFO } from 'utils/constants';

export const Tiers = () => {
  const { tiers } = MEMBERSHIP_MODULE_INFO;
  return (
    <>
      <div className="py-20 text-black ">
        <h3 className="text-lg">Tiers</h3>
        <div className="grid gap-12 md:grid-cols-2">
          {Object.keys(tiers).map((tierName) => (
            <div key={tierName}>
              <div className="relative w-full bg-gray-900 h-96">
                <Image
                  alt={tiers[tierName as MembershipTiers].imageAlt}
                  className="object-cover"
                  fill
                  quality={90}
                  src={tiers[tierName as MembershipTiers].image}
                />
              </div>
              <h3 className="mt-3 text-2xl">
                {tiers[tierName as MembershipTiers].name}
              </h3>
              <ul>
                {tiers[tierName as MembershipTiers].benefits.map(
                  (benefit: string) => (
                    <li key={benefit}>{benefit}</li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
