import { HTMLAttributes } from 'react';

type RefreshSvgProps = HTMLAttributes<HTMLOrSVGElement>;

export default function RefreshSvg({ className }: RefreshSvgProps) {
  return (
    <svg
      className={className}
      fill="none"
      height="14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.313 4.449A5.336 5.336 0 0 1 12.335 7M1.664 7a5.336 5.336 0 0 0 10.022 2.551"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M4.364 4.449H2.006V2.09M9.637 9.551h2.357v2.358"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
