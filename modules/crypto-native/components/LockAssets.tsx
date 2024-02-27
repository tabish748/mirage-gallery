import Image from 'next/image';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';

export default function LockAssets() {
  return (
    <div className="w-full pb-24">
      <HeroTitle accentColor="" subtitle="">
        Each piece will forever lock in place after 10 phases of evolution and
        can&apos;t revert to any of the older phases.
      </HeroTitle>

      <div className="flex items-center justify-center w-full mx-auto">
        <Image
          alt="imagen"
          className="object-cover w-full"
          height={500}
          src="/assets/crypto-native/cryptonative-lock-assets.jpg"
          width={1200}
        />
      </div>
    </div>
  );
}
