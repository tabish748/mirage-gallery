import { HTMLAttributes } from 'react';

type MintingSvgProps = HTMLAttributes<HTMLOrSVGElement>;

export const MintingSvg = ({ className }: MintingSvgProps) => {
  return (
    <svg
      className={className}
      fill="none"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.666 2.167C9.667 1.246 7.801.5 5.501.5s-4.165.747-4.167 1.667c0 .92 1.865 1.666 4.167 1.666 2.301 0 4.166-.746 4.166-1.666M9.667 2.167v6.466M1.334 5.5c0 .92 1.865 1.667 4.167 1.667 2.301 0 4.166-.746 4.166-1.667M14.402 9.098a3.75 3.75 0 1 1-5.306 5.304 3.75 3.75 0 0 1 5.306-5.304"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.42 10.02c-.751.297-1.782.48-2.92.48-2.301 0-4.166-.746-4.166-1.667"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.371 13.37c-.747.286-1.755.463-2.87.463-2.301 0-4.166-.745-4.167-1.666v-10"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
