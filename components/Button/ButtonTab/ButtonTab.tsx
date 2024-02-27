import { Tab } from '@headlessui/react';
import React, { CSSProperties } from 'react';

type ButtonTabProps = {
  activeClasses?: string;
  title: string;
  onClick?: () => void;
  style?: CSSProperties;
};

const ButtonTabComponent: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonTabProps
> = ({ activeClasses, title, onClick }, ref) => {
  return (
    <Tab as={React.Fragment}>
      {({ selected }) => (
        <button
          className={`${selected ? activeClasses : ''} outline-none `}
          onClick={onClick}
          ref={ref}
          type="button"
        >
          {title}
        </button>
      )}
    </Tab>
  );
};

export const ButtonTab = React.forwardRef(ButtonTabComponent);
