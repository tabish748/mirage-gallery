import Image from 'next/image';
import Link from 'next/link';
import { RightArrow } from 'components/Svgs/RightArrow';
import { useCallback } from 'react';
import { HOME_INFO_BY_MODULE } from 'utils/constants';
import { Modules } from 'types/main';

function getRandomValues() {
  return Math.floor(Math.random() * 10);
}

export const HomePosters = () => {
  const getPosterUrl = useCallback(
    (moduleName: Modules): string =>
      HOME_INFO_BY_MODULE[moduleName].samples[getRandomValues()],
    []
  );

  const getModulePath = useCallback(
    (moduleName: Modules): string => HOME_INFO_BY_MODULE[moduleName].href,
    []
  );

  return (
    <div className="relative z-10 w-full px-2 pt-6 md:px-5">
      <div className="px-2 mx-auto max-w-screen-2xl">
        <hr />
        <h2 className="pt-24 my-6 text-2xl text-black">Our Projects</h2>
        <div className="grid gap-3 md:grid-cols-4">
          {Object.values(Modules).map((moduleName) => (
            <Link
              className="relative group"
              href={getModulePath(moduleName as Modules)}
              key={moduleName}
            >
              <div className="overflow-hidden h-[512px] relative z-0">
                <Image
                  alt={`${HOME_INFO_BY_MODULE[moduleName as Modules].name}`}
                  className="object-cover group-hover:scale-110 duration-300 h-[512px]"
                  height={630}
                  quality={100}
                  src={getPosterUrl(moduleName as Modules)}
                  width={560}
                />
              </div>
              <div className="absolute bottom-0 left-0 z-20 p-6">
                <span className="flex items-center text-2xl text-white hover:opacity-80">
                  {HOME_INFO_BY_MODULE[moduleName as Modules].name}
                  <RightArrow className="ml-3" />
                </span>
                {/* Subtitle with smaller font */}
                <span className="mt-2 text-sm text-white hover:opacity-80">
                  {HOME_INFO_BY_MODULE[moduleName as Modules].subtitle}
                </span>
              </div>
              <div className="absolute inset-0 duration-300 bg-gradient-to-b from-transparent group-hover:opacity-100 opacity-90 to-black via-black/50" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
