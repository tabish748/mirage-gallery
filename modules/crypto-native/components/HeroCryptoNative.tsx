import Image from 'next/image';
import { RightArrow } from 'components/Svgs/RightArrow';
import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { DASHBOARD_URLS, MARKETPLACE_URLS } from 'utils/constants';
import Link from 'next/link';

export default function HeroCryptoNative() {
  return (
    <div className="w-full pb-64">
      <Image
        alt="imagen"
        blurDataURL="/assets/placeholder.svg"
        className="absolute top-0 right-0 z-0 w-1/2 animate__animated animate__slower animate__fadeIn"
        height={600}
        placeholder="blur"
        quality={70}
        src="/assets/back-crypto-native.jpg"
        width={1600}
      />
      <div className="grid w-full gap-6 px-2 pt-24 mx-auto md:pt-0 md:grid-cols-2 md:px-5 max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-native">CRYPTO-NATIVE</span>
          <h1 className="mt-6 text-3xl text-black lg:text-7xl">
            Artworks that <span className="text-native">evolve</span> with each
            sale
          </h1>
          <p className="py-10 text-black">
            Crypto Native was created specifically for art that is natively
            digital
          </p>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <OpenSeaButtonLink href={MARKETPLACE_URLS.cryptoNative} />
            <Link
              className="flex items-center justify-center py-3 text-white bg-native"
              href={DASHBOARD_URLS.cryptoNative}
              target={'_blank'}
            >
              Dashboard
              <RightArrow className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
