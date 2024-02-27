import { curatedAbi } from 'curated-abi';
import { minterAbi } from 'minter-abi';
import { useEffect, useState } from 'react';
import { FunctionNames } from 'types/web3';
import { SMART_CONTRACTS } from 'utils/constants';
import { useContractRead } from 'wagmi';
import { useVaultContext } from 'context/VaultProvider';
import { useAccount } from 'wagmi';

export const useReadHolderReq = () => {
  const { address } = useAccount();
  const vault = useVaultContext().vault?.value || address;

  const [passesCuratedReq, setPassesCuratedReq] = useState<boolean>(false);

  // TODO - proper type of smart contract response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: curatedBalance }: { data: any } = useContractRead({
    abi: [...curatedAbi],
    address: SMART_CONTRACTS.CLAIM_AND_READ,
    args: [vault],
    functionName: FunctionNames.BALANCE_OF,
    watch: true,
  });

  // TODO - proper type of smart contract response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: curatedHolderReq }: { data: any } = useContractRead({
    abi: [...minterAbi],
    address: SMART_CONTRACTS.MINT,
    args: [],
    functionName: FunctionNames.CURATED_HOLDER_REQ,
    watch: true,
  });

  useEffect(() => {
    setPassesCuratedReq(curatedBalance >= curatedHolderReq);
  }, [curatedBalance, curatedHolderReq]);

  return { passesCuratedReq };
};
