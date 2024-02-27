import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import styles from './FilterButton.module.css';

type FilterButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  isActive?: boolean;
};

export const FilterButton = ({
  children,
  className = '', // init with white space if nothing is passed
  isActive,
  onClick,
}: FilterButtonProps) => {
  return (
    <button
      className={`${styles.root} ${clsx({
        [styles.active]: isActive,
      })} ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
