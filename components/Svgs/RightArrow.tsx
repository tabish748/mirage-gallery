import React, { HTMLAttributes } from 'react';

type RightArrowProps = HTMLAttributes<HTMLOrSVGElement> & {
  stroke?: string;
};

export const RightArrow = ({
  className,
  stroke = 'white',
}: RightArrowProps) => {
  return (
    <svg
      className={className}
      fill="none"
      height="10"
      viewBox="0 0 14 10"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8333 4.99992H1.16663"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.66663 9.16667L12.8333 5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.66663 0.833252L12.8333 4.99992"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
