import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { DelegateCash } from 'delegatecash';

import { useVaultContext } from 'context/VaultProvider';
import {
  DropdownList,
  DropdownOptionProps,
} from 'components/Dropdown/Dropdown';

const dc = new DelegateCash();

const getVaults = async (
  address: string,
  setlist: Dispatch<SetStateAction<DropdownOptionProps[]>>
) => {
  const delegationsByDelegate = await dc.getDelegationsByDelegate(address);
  const vaults = delegationsByDelegate.map((x) => {
    return {
      text: [x.vault.slice(0, 4), '...', x.vault.slice(-4)].join(''),
      value: String(x.vault),
    };
  });

  setlist([
    {
      text: [address.slice(0, 4), '...', address.slice(-4)].join(''),
      value: address,
    },
    ...vaults,
  ]);
};

export const VaultDropdown = () => {
  const { address } = useAccount();
  const { vault, setVault } = useVaultContext();
  const [list, setlist] = useState<DropdownOptionProps[]>([]);

  useEffect(() => {
    if (address != undefined) {
      getVaults(address, setlist);
    } else {
      setlist([]);
    }
  }, [address]);

  if (list.length > 1) {
    return (
      <DropdownList
        list={vault ? list : list.slice(1)}
        onSelect={setVault}
        placeholderText="Select a Vault"
        selected={vault}
      />
    );
  }
  return <></>;
};
