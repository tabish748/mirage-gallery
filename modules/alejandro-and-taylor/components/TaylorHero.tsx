import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import Image from 'next/image';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function TaylorHero() {
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
          src="/assets/alejandrotaylor/back-taylor.jpeg"
          width={1200}
        />
      </div>
      <div className="px-2 mx-auto max-w-7xl md:px-2">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center bg-[#f1fbfe] text-xs px-3 py-2 rounded-full text-original">
            Alejandro & Taylor
          </span>
          <OpenSeaButtonLink href={MARKETPLACE_URLS.alejandroAndTaylor} small />
        </div>
        <h2 className="text-3xl">Meet Taylor</h2>
        <p className="my-6 text-black">
          Taylor is a young abstract artist born in Waco, TX and raised in
          Austin, TX. She studied Visual Effects at the Austin Career College
          from 2003–2005 and has been working as a freelance illustrator since
          then. Taylor creates vibrant images using a wide variety of techniques
          such as oils, acrylics, pastels, and spray paint and her art tackles
          human identity, experience, society, and the environment.
        </p>
        <p>
          [This bio was created entirely with A.I. and is not factually
          accurate]
        </p>
      </div>
    </>
  );
}
