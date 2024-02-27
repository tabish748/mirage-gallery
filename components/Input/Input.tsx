import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type InputProps = HTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  label: string;
  name?: string;
  value: string | number;
};

export const Input = ({
  disabled,
  label,
  name,
  onChange,
  placeholder,
  value,
}: InputProps) => {
  return (
    <label
      className={clsx('flex flex-col w-full', {
        'opacity-40': disabled,
      })}
    >
      <span className="mb-2 font-sans text-black">{label}</span>
      <input
        className="p-3 font-sans text-gray-800 bg-gray-100"
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type="number"
        value={value}
      />
    </label>
  );
};
