import { WalletSvg } from 'components/Svgs/WalletSvg';
import { useCallback } from 'react';
import { Account, ChainResponse } from 'types/web3';

export type ConnectWalletButtonProps = {
  account?: Account;
  authenticationStatus?: string; // 'loading' - 'authenticated'
  chain?: ChainResponse;
  mounted: boolean;
  openAccountModal: () => void;
  openConnectModal: () => void;
};

export const ConnectWalletButton = ({
  account,
  authenticationStatus,
  chain,
  mounted,
  openAccountModal,
  openConnectModal,
}: ConnectWalletButtonProps): JSX.Element => {
  const ready = mounted && authenticationStatus !== 'loading';
  const connected =
    ready &&
    account &&
    chain &&
    (!authenticationStatus || authenticationStatus === 'authenticated');

  const handleClick = useCallback(
    () => (connected ? openAccountModal() : openConnectModal()),
    [connected, openAccountModal, openConnectModal]
  );

  return (
    <div
      {...(!ready && {
        'aria-hidden': true,
        style: {
          opacity: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        },
      })}
    >
      <button
        className="relative flex items-center justify-center px-6 py-3 text-sm font-normal text-white bg-black"
        onClick={handleClick}
        type="button"
      >
        {!connected ? (
          <>
            <WalletSvg className="mr-2" />
            Connect Wallet
          </>
        ) : (
          <>
            {account.displayName}
            {account.displayBalance ? ` (${account.displayBalance})` : ''}
          </>
        )}
      </button>
    </div>
  );
};
