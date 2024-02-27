import React from 'react';
import { Listbox } from '@headlessui/react';
import { DropdownOptionProps } from './Dropdown';
import { DoneSvg } from 'components/Svgs/DoneSvg';

export const DropdownOption = ({ option }: { option: DropdownOptionProps }) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        `relative cursor-default select-none py-2 pl-3 pr-4 ${
          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
        }`
      }
      value={option}
    >
      {({ selected }) => (
        <>
          <span
            className={`block truncate font-sans ${
              selected ? 'font-normal' : 'font-medium'
            }`}
          >
            {option.text}
          </span>
          {selected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-sans text-amber-600">
              <DoneSvg />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
};
