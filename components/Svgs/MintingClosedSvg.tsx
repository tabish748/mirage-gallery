import { HTMLAttributes } from 'react';

type MintingClosedSvgProps = HTMLAttributes<HTMLOrSVGElement>;

export const MintingClosedSvg = ({ className }: MintingClosedSvgProps) => {
  return (
    <svg
      className={className}
      fill="none"
      height="14"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.221 2.58c-.002 0-.004 0-.004.003s.002.005.004.005c.003 0 .005-.002.005-.005 0-.002-.002-.004-.005-.004M5.106 2.58c-.003 0-.005 0-.005.003s.002.005.005.005c.002 0 .004-.002.004-.005 0-.002-.002-.004-.004-.004M2.982 2.575c-.002 0-.004.002-.004.004 0 .003.002.004.004.004.003 0 .004-.001.004-.004 0-.002-.001-.004-.004-.004M.667 4.667h14.166"
        stroke="#C02828"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.833 7.514V2.167c0-.921-.746-1.667-1.667-1.667H2.333C1.413.5.667 1.246.667 2.167v9.166c0 .921.745 1.667 1.666 1.667h7.015M14.342 10.158l-2.35 2.35M14.342 12.508l-2.35-2.35"
        stroke="#C02828"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
