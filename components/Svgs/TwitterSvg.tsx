import React, { HTMLAttributes } from 'react';

export enum TwitterColor {
  WHITE = '#fff',
  BLACK = '#000',
}

type TwitterSvgProps = HTMLAttributes<HTMLOrSVGElement> & {
  fillColor: TwitterColor;
};

export const TwitterSvg = ({ className, fillColor }: TwitterSvgProps) => {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      width="31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:fill-[#1DA1F2]"
        d="M27.059 6.1c.018.257.018.515.018.776 0 7.935-6.041 17.086-17.087 17.086v-.005a17 17 0 0 1-9.205-2.692 12.058 12.058 0 0 0 8.887-2.489 6.013 6.013 0 0 1-5.61-4.17c.9.174 1.828.138 2.712-.103a6.006 6.006 0 0 1-4.817-5.886V8.54c.834.465 1.769.723 2.725.752a6.013 6.013 0 0 1-1.859-8.018A17.044 17.044 0 0 0 15.2 7.548 6.012 6.012 0 0 1 25.434 2.07 12.05 12.05 0 0 0 29.246.612a6.028 6.028 0 0 1-2.64 3.32c1.19-.14 2.353-.458 3.448-.945A12.199 12.199 0 0 1 27.06 6.1Z"
        fill={fillColor}
      />
    </svg>
  );
};
