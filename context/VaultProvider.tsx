import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { DropdownOptionProps } from 'components/Dropdown/Dropdown';

type Props = {
  children?: ReactNode;
};

type Vault = {
  vault: DropdownOptionProps | null;
  setVault: Dispatch<SetStateAction<DropdownOptionProps | null>>;
};

export const VaultContext = createContext<Vault>({} as Vault);

export const useVaultContext = () => useContext(VaultContext);

function VaultProvider({ children }: Props) {
  const [vault, setVault] = useState<DropdownOptionProps | null>(null);
  return (
    <VaultContext.Provider value={{ vault, setVault }}>
      {children}
    </VaultContext.Provider>
  );
}

export default VaultProvider;
