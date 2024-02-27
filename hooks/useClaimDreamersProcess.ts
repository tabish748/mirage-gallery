import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { curatedAbi } from 'curated-abi';
import { SMART_CONTRACTS } from 'utils/constants';
import { FunctionNames } from 'types/web3';
import { useDreamersCheck } from './useDreamersCheck';

type UseClaimProcessProps = {
  membershipId: number;
  quantity?: string;
};

type UseClaimProcessResult = {
  claimCount: number;
  isClaimLoading: boolean;
  isClaimStarted: boolean;
  isClaimed: boolean;
  claim?: () => void;
  error?: string;
};

export const useClaimProcess = ({
  membershipId,
  quantity,
}: UseClaimProcessProps): UseClaimProcessResult => {
  const { config, error } = usePrepareContractWrite({
    abi: [...curatedAbi],
    address: SMART_CONTRACTS.DREAMERS,
    args: [`${membershipId}`, quantity],
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

  const canClaimDreamers = useDreamersCheck({ membershipId });

  return {
    claimCount: canClaimDreamers?.count || -1,
    isClaimLoading,
    isClaimStarted,
    isClaimed: txSuccess,
    claim,
    error: error?.message,
  };
};
