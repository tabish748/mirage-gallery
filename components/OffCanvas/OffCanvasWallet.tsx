import React, { useCallback, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { OffCanvasNavigation } from './OffCanvasNavigation';
import { ConnectWalletButtonWrapper } from 'components/Button/ConnectWalletButton/ConnectWalletButtonWrapper';

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
      <div className="absolute bottom-0 right-0 m-6">
        <ConnectWalletButtonWrapper />
      </div>
    </Menu>
  );
};
