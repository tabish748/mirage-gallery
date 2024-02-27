import { curatedAbi } from 'curated-abi';
import { curatedTemplateAbi } from 'curated-template-abi';
import { useEffect, useState } from 'react';
import { FunctionNames } from 'types/web3';
import { SMART_CONTRACTS } from 'utils/constants';
import { useContractRead } from 'wagmi';

/**
 * This hook is used to check if the user has already claimed their
 * free artwork already, as they can only do it once.
 * @param magicId `(projectId * MAGIC_NUMBER) + membershipId` where `MAGIC_NUMBER`
 * is 10000 for Curated projects and 1000 for Dreamers project.
 * @returns canClaim boolean
 */
export const useClaimCheck = (ownerId: number, contractAddress?: string) => {
  const [canClaim, setCanClaim] = useState<boolean>(false);

  // TODO - proper type of smart contract response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data }: { data: any } = useContractRead({
    abi: contractAddress ? [...curatedTemplateAbi] : [...curatedAbi],
    address: (contractAddress ||
      SMART_CONTRACTS.CLAIM_AND_READ) as `0x${string}`,
    args: [`${ownerId}`],
    functionName: FunctionNames.OWNER_OF,
    watch: true,
  });

  useEffect(() => {
    // If data is defined, then it means that membershipId has
    // already claimed their free piece.
    setCanClaim(!data);
  }, [data]);

  return {
    canClaim,
  };
};
