import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { curatedAbi } from 'curated-abi';
import { curatedTemplateAbi } from 'curated-template-abi';

import { CURATED_MAGIC_NUMBER, SMART_CONTRACTS } from 'utils/constants';
import { FunctionNames } from 'types/web3';
import { useClaimCheck } from './useClaimCuratedCheck';

import { useVaultContext } from 'context/VaultProvider';

type UseClaimProcessProps = {
  projectId: string;
  membershipId: string;
  quantity?: string;
  contractAddress?: string;
};

type UseClaimProcessResult = {
  canClaim: boolean;
  isClaimLoading: boolean;
  isClaimStarted: boolean;
  isClaimed: boolean;
  claim?: () => void;
};

export const useClaimProcess = ({
  projectId,
  membershipId,
  contractAddress,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  quantity, // required when claiming Dreamers project
}: UseClaimProcessProps): UseClaimProcessResult => {
  const { address } = useAccount();
  const vault = useVaultContext().vault?.value || address;
  const { config } = usePrepareContractWrite({
    abi: contractAddress ? [...curatedTemplateAbi] : [...curatedAbi],
    address: (contractAddress ||
      SMART_CONTRACTS.CLAIM_AND_READ) as `0x${string}`,
    args: contractAddress
      ? [`${membershipId}`, `${vault}`]
      : [`${projectId}`, `${membershipId}`],
    functionName: FunctionNames.CLAIM_SENTIENT,
  });

  const {
    data: claimData,
    isLoading: isClaimLoading,
    write: claim,
    isSuccess: isClaimStarted,
  } = useContractWrite(config);

  const { isSuccess: txSuccess } = useWaitForTransaction({
    hash: claimData?.hash,
  });

  // This business logic is applied in blockchain to store which members have
  // claimed their free piece. As of now, there is only one by membership.
  const ownerOfParam =
    Number(projectId) * CURATED_MAGIC_NUMBER + Number(membershipId);

  const { canClaim } = useClaimCheck(ownerOfParam, contractAddress);

  return {
    canClaim,
    isClaimLoading,
    isClaimStarted,
    isClaimed: txSuccess,
    claim,
  };
};
