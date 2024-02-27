import { Dispatch, Fragment, SetStateAction } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownSvg } from 'components/Svgs/ChevronDownSvg';
import { DropdownOption } from './DropdownOption';

export type DropdownOptionProps = {
  text: string;
  value: string | number | null;
  contractAddress?: string;
};

type ProjectDropdownProps = {
  disabled?: boolean;
  list: DropdownOptionProps[];
  onSelect: Dispatch<SetStateAction<DropdownOptionProps | null>>;
  placeholderText?: string;
  selected: DropdownOptionProps | null;
};

export const DropdownList = ({
  disabled,
  list,
  onSelect,
  placeholderText,
  selected,
}: ProjectDropdownProps) => {
  return (
    <Listbox disabled={disabled} onChange={onSelect} value={selected}>
      <div className="relative">
        <Listbox.Button
          className="relative w-full py-3 pl-3 pr-10 text-left bg-gray-100 cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          defaultValue="Select a project"
        >
          {selected ? (
            <span className="block font-sans text-gray-600 truncate">
              {selected.text}
            </span>
          ) : (
            <span className="block font-sans text-gray-600 truncate opacity-60">
              {placeholderText}
            </span>
          )}
          <span className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
            <ChevronDownSvg />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-3 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30">
            {list.map((option, index) => (
              <DropdownOption key={index} option={option} />
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
