import React, { HTMLAttributes } from 'react';
import { MintingSvg } from 'components/Svgs/MintingSvg';
type FilterButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const BadgeMinting = ({ children }: FilterButtonProps) => {
  return (
    <span className="inline-flex items-center justify-center px-3 py-2 text-xs text-black bg-gray-200 rounded-full">
      <MintingSvg className="mr-2" />
      {children}
    </span>
  );
};
