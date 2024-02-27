import { curatedAbi } from 'curated-abi';
import { minterAbi } from 'minter-abi';
import { curatedTemplateAbi } from 'curated-template-abi';
import { useEffect, useState } from 'react';
import { Project } from 'types/drops';
import { FunctionNames, ProjectTokenInfoResult } from 'types/web3';
import { SMART_CONTRACTS } from 'utils/constants';
import { useContractRead, UseContractReadConfig } from 'wagmi';

export const useReadProcess = ({
  projectId,
  contractAddress, // Assuming this is how you get the contract address
}: {
  projectId: Project['id'] | null;
  contractAddress?: string; // Assuming contractAddress is optional
}) => {
  const [parsedData, setParsedData] = useState<ProjectTokenInfoResult | null>(
    null
  );

  const tokenDataReadConfig: UseContractReadConfig = contractAddress
    ? {
        abi: curatedTemplateAbi as any,
        address: contractAddress as `0x${string}`,
        functionName: FunctionNames.PROJECT_TOKEN_INFO,
        watch: true,
      }
    : {
        abi: curatedAbi as any,
        address: SMART_CONTRACTS.CLAIM_AND_READ as `0x${string}`,
        args: [`${projectId}`],
        functionName: FunctionNames.PROJECT_TOKEN_INFO,
        watch: true,
      };

  // TODO - proper type of smart contract response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: tokenData }: { data: any } =
    useContractRead(tokenDataReadConfig);

  // TODO - proper type of smart contract response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: phaseTwoStatus }: { data: any } = useContractRead({
    abi: minterAbi as any,
    address: SMART_CONTRACTS.MINT,
    args: [`${projectId}`],
    functionName: FunctionNames.SECOND_PRESALE_PHASE,
    watch: true,
  });

  useEffect(() => {
    if (tokenData) {
      setParsedData({
        additionalPayee: tokenData[5],
        additionalPayeePercentage: tokenData[6],
        artistAddress: tokenData[0],
        artworks: tokenData[2],
        currency: tokenData[9],
        earlyActive: tokenData[8],
        maxArtworks: tokenData[3],
        maxEarly: tokenData[4],
        pricePerTokenInWei: tokenData[1],
        publicActive: tokenData[7],
        phaseTwoStatus: phaseTwoStatus,
      });
    }
  }, [tokenData, phaseTwoStatus, contractAddress]);

  const earlySaleRemaining =
    Number(parsedData?.maxEarly) - Number(parsedData?.artworks) + 50;

  const remainingForPublicMint =
    Number(parsedData?.maxArtworks) - Number(parsedData?.artworks);

  /**
   * There are always 50 pieces reserved for claiming
   */
  return {
    currency: parsedData?.currency,
    isPublicSale: parsedData?.publicActive,
    isEarlySale: parsedData?.earlyActive,
    isPhaseTwo: parsedData?.phaseTwoStatus,
    earlySaleTotal: parsedData?.maxEarly,
    earlySaleRemaining,
    // maxArtworks has the entire collection. Total available for minting is maxArtworks - 50
    totalArtworks: parsedData?.maxArtworks,
    remainingForPublicMint,
    pricePerTokenInWei: parsedData?.pricePerTokenInWei || BigInt(0),
  };
};
