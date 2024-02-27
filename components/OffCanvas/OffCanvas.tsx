import React, { useCallback, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { OffCanvasNavigation } from './OffCanvasNavigation';

export const OffCanvas = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = useCallback(() => setOpenMenu(false), []);
  const handleStateChange = useCallback(
    (state: { isOpen: boolean }) => {
      setOpenMenu(state.isOpen);
    },
    [setOpenMenu]
  );

  return (
    <Menu isOpen={openMenu} onStateChange={handleStateChange} right width={260}>
      <OffCanvasNavigation closeMenu={closeMenu} />
    </Menu>
  );
};
