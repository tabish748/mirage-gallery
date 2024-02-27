import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { minterAbi } from 'minter-abi';
import { curatedTemplateAbi } from 'curated-template-abi';
import { SMART_CONTRACTS } from 'utils/constants';
import { FunctionNames } from 'types/web3';
import { useMemo, useState } from 'react';

import { useVaultContext } from 'context/VaultProvider';

type UseMintProcessProps = {
  isEarlySale?: boolean;
  membershipId?: number;
  pricePerTokenInWei: bigint;
  projectId: string;
  quantity: number;
  contractAddress?: string;
};

type UseMintProcessResult = {
  error: string;
  isMintLoading: boolean;
  isMintStarted: boolean;
  isMinted: boolean;
  mint?: () => void;
};

export const useMintProcess = ({
  isEarlySale,
  membershipId, // membershipId < 50 = sentient member; else member is intelligent
  pricePerTokenInWei,
  projectId,
  quantity,
  contractAddress,
}: UseMintProcessProps): UseMintProcessResult => {
  // Use this state to log errors and throw them up just in case
  const [error, setError] = useState<string>('');
  const isSentientMember = membershipId && membershipId < 50;
  const isIntelligentMember = membershipId === 50;
  const { address } = useAccount();
  const vault = useVaultContext().vault?.value || address;

  // Dynamic params depending if it is Public Sale or Early Sale
  // Function Name
  const functionName = useMemo(() => {
    if (isEarlySale) {
      if (contractAddress) {
        return FunctionNames.EARLY_MEMBER_PURCHASE;
      }
      if (isSentientMember) {
        return FunctionNames.EARLY_SENTIENT_PURCHASE;
      }
      if (isIntelligentMember) {
        return FunctionNames.EARLY_INTELLIGENT_PURCHASE;
      }
      return FunctionNames.EARLY_CURATED_HOLDER_PURCHASE;
    }
    return FunctionNames.PURCHASE;
  }, [isEarlySale, isSentientMember, isIntelligentMember, contractAddress]);

  // When Early Sale we add membershipId
  const args = useMemo(() => {
    if (isEarlySale) {
      if (contractAddress) {
        return [membershipId, vault];
      }
      if (isSentientMember) {
        return [projectId, membershipId, quantity, vault];
      }
      return [projectId, quantity, vault];
    }
    return contractAddress ? [quantity] : [projectId, quantity];
  }, [
    isEarlySale,
    isSentientMember,
    projectId,
    membershipId,
    quantity,
    vault,
    contractAddress,
  ]);

  // token price in wei is always multiplied by quantity to mint
  // for early sale, quantity should always be 1.
  // for public sale, quantity can be up to 10.
  const value = pricePerTokenInWei * BigInt(quantity);

  const { config } = usePrepareContractWrite({
    abi: contractAddress ? [...curatedTemplateAbi] : [...minterAbi],
    address: (contractAddress || SMART_CONTRACTS.MINT) as `0x${string}`,
    args,
    functionName,
    onSettled(data, error) {
      if (error) {
        setError(error.message || 'Error when minting');
      }
    },
    value: value.toString() as any,
  });

  const {
    data: mintData,
    isLoading: isMintLoading,
    write: mint,
    isSuccess: isMintStarted,
  } = useContractWrite(config);

  const { isSuccess: txSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  return {
    error,
    isMintLoading,
    isMintStarted,
    isMinted: txSuccess,
    mint,
  };
};
