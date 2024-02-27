import { ButtonLink } from 'components/Button/ButtonLink/ButtonLink';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { HomeSectionImagesRow } from 'components/Home/HomeSectionImagesRow';
import Link from 'next/link';
import React from 'react';
import { Modules } from 'types/main';
import { HOME_INFO_BY_MODULE } from 'utils/constants';

export const CryptoNativeHomeSection = () => {
  const { ctaButton, href, name, paragraph, samples } =
    HOME_INFO_BY_MODULE[Modules.CRYPTO_NATIVE];

  return (
    <section>
      <HeroTitle accentColor={'text-native'} subtitle={name.toUpperCase()}>
        With{' '}
        <Link className="underline text-native" href="/crypto-native">
          Crypto-Native
        </Link>
        , the artwork evolves when a secondary sale happens.
      </HeroTitle>
      <p className="mx-auto text-lg text-gray-600 md:text-3xl ">{paragraph}</p>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-96 bg-gradient-to-r from-white via-white/30 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-96 bg-gradient-to-l from-white via-white/30 to-transparent" />
        <HomeSectionImagesRow samples={samples} />
      </div>
      <div className="flex items-center justify-start mt-6">
        <ButtonLink
          className="flex items-center justify-center px-6 py-4 text-white bg-native"
          href={href}
          showRightArrow
          text={ctaButton}
        />
      </div>
    </section>
  );
};
