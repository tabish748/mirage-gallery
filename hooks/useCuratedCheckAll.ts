import { useEffect, useState } from 'react';
import { FunctionNames } from 'types/web3';
import { CURATED_MAGIC_NUMBER, SMART_CONTRACTS } from 'utils/constants';
import { useContractReads } from 'wagmi';

type useCuratedCheckProps = {
  membershipId: number;
  projectIds: number[];
  contractAddresses: string[];
};

type projectClaimableStatus = {
  projectId: number;
  contractAddress: string;
  claimable: boolean;
};

type useCuratedCheckResult = {
  projects: projectClaimableStatus[];
  error: boolean;
};

const OwnerOfAbi = [
  {
    constant: true,
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export const useCuratedCheck = ({
  membershipId,
  projectIds,
  contractAddresses,
}: useCuratedCheckProps): useCuratedCheckResult | null => {
  const [curatedProjectsClaimable, setCuratedProjectsClaimable] =
    useState<useCuratedCheckResult | null>(null);

  const magicIds = projectIds.map((projectId) => {
    return Number(projectId) * CURATED_MAGIC_NUMBER + Number(membershipId);
  });

  // TODO - proper type of smart contract response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data }: { data: any } = useContractReads({
    contracts: magicIds.map((magicId, index) => {
      const address =
        projectIds[index] === 0
          ? (contractAddresses[index] as `0x${string}`)
          : SMART_CONTRACTS.CLAIM_AND_READ;
      return {
        abi: OwnerOfAbi,
        address: address,
        args: [magicId],
        functionName: FunctionNames.OWNER_OF,
      };
    }),
  });

  useEffect(() => {
    if (typeof membershipId !== 'number') {
      setCuratedProjectsClaimable({ projects: [], error: true });
    } else if (!data) {
      setCuratedProjectsClaimable({ projects: [], error: true });
    } else {
      const r = data.map((d: { status: string }, i: number) => {
        return {
          projectId:
            (magicIds[i] - parseInt(String(magicIds[i]).slice(-2))) /
            CURATED_MAGIC_NUMBER,
          claimable: d.status === 'failure',
          contractAddress: contractAddresses[i],
        };
      });
      setCuratedProjectsClaimable({ projects: r, error: false });
    }
  }, [data, membershipId]);

  return curatedProjectsClaimable;
};
