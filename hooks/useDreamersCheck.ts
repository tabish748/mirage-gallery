import { dreamersAbi } from 'dreamers-abi';
import { useEffect, useState } from 'react';
import { SMART_CONTRACTS } from 'utils/constants';
import { useContractRead } from 'wagmi';
import { FunctionNames } from 'types/web3';

type useDreamersProps = {
  membershipId: number;
};

type UseDreamersResult = {
  count: number;
  error: boolean;
};

export const useDreamersCheck = ({
  membershipId,
}: useDreamersProps): UseDreamersResult | null => {
  const [claimCount, setClaimCount] = useState<UseDreamersResult | null>(null);

  // TODO - proper type of smart contract response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data }: { data: any } = useContractRead({
    abi: [...dreamersAbi],
    address: SMART_CONTRACTS.DREAMERS,
    args: [membershipId],
    functionName: FunctionNames.CLAIM_SENTIENT_DREAMERS_READ,
    watch: true,
  });

  useEffect(() => {
    if (data === null || data === undefined) {
      setClaimCount({ count: -1, error: true });
    } else {
      const numberValue = Number(data.toString()); // Convert BigInt to string first
      setClaimCount({ count: numberValue, error: false });
    }
  }, [data, membershipId]);

  return claimCount;
};
