import clsx from 'clsx';
import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';
import Link, { LinkProps } from 'next/link';
import React from 'react';

type OpenSeaButtonLinkProps = LinkProps & {
  rounded?: boolean;
  small?: boolean;
};

const defaultClassName =
  'flex text-sm md:text-base items-center justify-center py-3 text-black duration-300 bg-gray-200 px-9 hover:bg-[#F5F5F5]';
export const OpenSeaButtonLink = ({
  rounded,
  small,
  href,
}: OpenSeaButtonLinkProps): JSX.Element => {
  return (
    <Link
      className={clsx(defaultClassName, {
        'rounded-full': rounded,
        '!px-5 h-10 md:text-sm': small,
      })}
      href={href}
      target={'_blank'}
    >
      <OpenSeaLogo className="mr-2" />
      View on OpenSea
    </Link>
  );
};
