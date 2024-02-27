import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { ReactNode } from 'react';

type WalletActionWrapperProps = {
  children: ReactNode;
};

export const WalletActionWrapper = (props: WalletActionWrapperProps) => {
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  if (address) {
    return <>{props.children}</>;
  }

  return (
    <>
      <button
        className="flex items-center justify-center py-3 text-white duration-300 bg-curated px-9"
        onClick={openConnectModal}
        type="button"
      >
        Connect
      </button>
    </>
  );
};
