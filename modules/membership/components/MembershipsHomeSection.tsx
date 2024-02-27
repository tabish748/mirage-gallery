import { ButtonLink } from 'components/Button/ButtonLink/ButtonLink';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import Image from 'next/image';
import React from 'react';
import { MembershipTiers } from 'types/main';
import { MEMBERSHIP_MODULE_INFO } from 'utils/constants';

export const MembershipsHomeSection = () => {
  const { ctaButton, href, tiers } = MEMBERSHIP_MODULE_INFO;
  return (
    <section>
      <HeroTitle accentColor={'text-membership'} subtitle="Memberships">
        Mirage Gallery also offers{' '}
        <span className="underline text-membership">Memberships</span> which
        give early access to curated drops, and more.
      </HeroTitle>
      <div className="grid gap-12 md:grid-cols-2">
        {Object.keys(tiers).map((tierName) => (
          <div key={tierName}>
            <div className="relative w-full bg-gray-900 h-96">
              <Image
                alt={tiers[tierName as MembershipTiers].imageAlt}
                className="object-cover"
                fill
                src={tiers[tierName as MembershipTiers].image}
              />
            </div>
            <h3 className="mt-3 text-2xl">
              {tiers[tierName as MembershipTiers].name}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-start mt-12 mb-32">
        <ButtonLink
          className="flex items-center justify-center px-6 py-4 text-white bg-membership"
          href={href}
          showRightArrow
          text={ctaButton}
        />
      </div>
    </section>
  );
};
