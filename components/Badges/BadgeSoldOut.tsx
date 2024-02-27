import React, { HTMLAttributes } from 'react';
import { SoldOutSvg } from 'components/Svgs/SoldOutSvg';
type FilterButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const BadgeSoldOut = ({ children }: FilterButtonProps) => {
  return (
    <span className="inline-flex items-center justify-center px-3 py-2 text-xs text-black bg-gray-200 rounded-full">
      <SoldOutSvg className="mr-2" />
      {children}
    </span>
  );
};
