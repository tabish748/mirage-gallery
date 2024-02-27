import React, { HTMLAttributes } from 'react';

type WalletSvgProps = HTMLAttributes<HTMLOrSVGElement>;

export const WalletSvg = ({ className }: WalletSvgProps) => {
  return (
    <svg
      className={className}
      fill="none"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.532 5.596h13.301c.921 0 1.667.746 1.667 1.667v7.57c0 .917-.75 1.667-1.667 1.667H3.167c-.921 0-1.667-.746-1.667-1.667V5.91c0-.693.43-1.314 1.078-1.559l8.628-3.257a.833.833 0 0 1 1.127.779v3.723"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12.333 10.77a.313.313 0 1 0 .002.627.313.313 0 0 0-.002-.626"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
