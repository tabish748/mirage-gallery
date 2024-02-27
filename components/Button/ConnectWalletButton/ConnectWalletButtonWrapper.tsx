import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ConnectWalletButton } from './ConnectWalletButton';
import { VaultDropdown } from 'components/Dropdown/VaultDropdown';

export const ConnectWalletButtonWrapper = () => {
  return (
    <>
      <VaultDropdown />
      <ConnectButton.Custom>
        {({
          account,
          authenticationStatus,
          chain,
          mounted,
          openAccountModal,
          openConnectModal,
        }): JSX.Element => (
          <ConnectWalletButton
            account={account}
            authenticationStatus={authenticationStatus}
            chain={chain}
            mounted={mounted}
            openAccountModal={openAccountModal}
            openConnectModal={openConnectModal}
          />
        )}
      </ConnectButton.Custom>
    </>
  );
};
