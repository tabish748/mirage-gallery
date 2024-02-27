import React, { useCallback, useEffect, useState } from 'react';
import { useMintProcess } from 'hooks/useMintProcess';
import { Drop, Project } from 'types/drops';
import { Input } from 'components/Input/Input';
import { FORM_ERRORS } from 'utils/strings';

import { WalletActionWrapper } from 'components/Button/ConnectWalletButton/WalletActionWrapper';

type MintFormProps = {
  currency?: string;
  earlySaleRemaining: number;
  earlySaleTotal?: number;
  isEarlySale?: boolean;
  isPhaseTwo?: boolean;
  isPublicSale?: boolean;
  isTestable?: boolean;
  mintPrice?: Drop['mintPrice'];
  pricePerTokenInWei: bigint;
  projectId: Project['id'];
  remainingForPublicMint: number;
  totalArtworks?: number;
  passesCuratedReq?: boolean;
  contractAddress?: Project['contractAddress'];
};

type MintFields = {
  quantity: number;
  membershipId: number;
};

type QuantityInputProps = {
  value: number;
  onChange: (newValue: number) => void;
  disabled?: boolean;
};

const QuantityInput: React.FC<QuantityInputProps> = ({
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className="flex items-center border rounded">
      <button
        className="px-2 py-1"
        disabled={disabled || value <= 1}
        onClick={() => onChange(value - 1)}
      >
        -
      </button>
      <input
        className="px-2 py-1 text-center w-16"
        disabled={disabled}
        onChange={(e) => !disabled && onChange(Number(e.target.value))}
        type="text"
        value={value}
      />
      <button
        className="px-2 py-1"
        disabled={disabled || value >= 10}
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
};

export const MintForm = ({
  currency,
  earlySaleRemaining,
  earlySaleTotal,
  isEarlySale,
  isPhaseTwo,
  isPublicSale,
  isTestable,
  mintPrice,
  pricePerTokenInWei,
  projectId,
  remainingForPublicMint,
  totalArtworks,
  passesCuratedReq,
  contractAddress,
}: MintFormProps) => {
  const [fields, setFields] = useState<MintFields>({
    membershipId: 50,
    quantity: 1,
  });
  const [errors, setErrors] = useState<{
    membershipId: string;
    quantity: string;
  }>({
    membershipId: '',
    quantity: '',
  });

  if (contractAddress) {
    isPhaseTwo = true;
  }

  const { isMintLoading, isMintStarted, isMinted, mint } = useMintProcess({
    isEarlySale,
    pricePerTokenInWei,
    projectId,
    quantity: fields.quantity,
    membershipId: fields.membershipId,
    contractAddress,
  });

  const handleOnChange = useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
      setErrors((prevState) => ({ ...prevState, [name]: '' }));
      setFields((prevState) => ({ ...prevState, [name]: Number(value) }));
    },
    [setErrors, setFields]
  );

  const handleQuantityChange = useCallback(
    (newValue: number) => {
      const numValue = Number(newValue);
      if (!isNaN(numValue) && numValue >= 1 && numValue <= 10) {
        setFields((prevState) => ({ ...prevState, quantity: numValue }));
      }
    },
    [setFields]
  );

  // When Early Sale Phase1 set quantity to 1 and show message
  // that only 1 by membership can be minted
  useEffect(() => {
    if (isEarlySale && !isPhaseTwo) {
      setFields((prevState) => ({ ...prevState, quantity: 1 }));
      setErrors((prevState) => ({
        ...prevState,
        quantity: FORM_ERRORS.quantity.ONLY_ONE,
      }));
    }
  }, [isEarlySale, isPhaseTwo, setFields, setErrors]);

  // Quantity is always 1 if we are on pre-sale
  const handleMint = useCallback(() => {
    const quantityNumber = Number(fields.quantity);
    if (isNaN(quantityNumber) || !Number.isInteger(quantityNumber)) {
      setErrors((prevState) => ({
        ...prevState,
        quantity: FORM_ERRORS.quantity.REQUIRED,
      }));
      return;
    }
    if (quantityNumber === 0 || quantityNumber > 10) {
      setErrors((prevState) => ({
        ...prevState,
        quantity: FORM_ERRORS.quantity.BETWEEN_1_AND_10,
      }));
      return;
    }
    const memberNumber = Number(fields.membershipId);
    if (
      isEarlySale &&
      !passesCuratedReq &&
      (isNaN(memberNumber) || !Number.isInteger(memberNumber))
    ) {
      setErrors((prevState) => ({
        ...prevState,
        membershipId: FORM_ERRORS.membershipId.REQUIRED,
      }));
      return;
    }

    mint?.();
  }, [fields, isEarlySale, passesCuratedReq, mint, setErrors]);

  return (
    <div className="grid w-full px-2 mx-auto my-3 max-w-screen-2xl md:grid-cols-2">
      <div>
        {isEarlySale && contractAddress && !isPublicSale && (
          <h2>Presale is Live!</h2>
        )}
        {!contractAddress && isEarlySale && !isPhaseTwo && !isPublicSale && (
          <h2>Presale Phase One is Live!</h2>
        )}
        {!contractAddress && isEarlySale && isPhaseTwo && !isPublicSale && (
          <h2>Presale Phase Two is Live!</h2>
        )}
        {isPublicSale && <h2>Public Sale is Live</h2>}
        <h4>
          Price: {mintPrice} {currency}
        </h4>
        <div className="flex flex-col gap-6 mb-6">
          <br></br>
          <div className="flex items-center">
            <div className="mr-4">
              <QuantityInput
                disabled={!isPublicSale}
                onChange={handleQuantityChange}
                value={fields.quantity}
              />
            </div>
            <WalletActionWrapper>
              <button
                className="flex items-center justify-center py-3 text-white duration-300 bg-curated px-9"
                onClick={handleMint}
                type="button"
              >
                Mint
              </button>
            </WalletActionWrapper>
          </div>
          <span className="text-sm text-red-600">
            {errors.quantity !== '' && errors.quantity}
          </span>

          {isEarlySale && !isPublicSale && (
            <>
              <Input
                label={'Membership ID'}
                name={'membershipId'}
                onChange={handleOnChange}
                placeholder={'(1-49)'}
                value={fields.membershipId}
              />
              <span className="text-sm text-red-600">
                {errors.membershipId !== '' && errors.membershipId}
              </span>
            </>
          )}
          {isEarlySale &&
            isPhaseTwo &&
            passesCuratedReq &&
            !contractAddress && (
              <span className="text-sm  bg-green-300 p-4">
                Holder Requirement Passed
              </span>
            )}
        </div>
        <span className=" items-center justify-start my-6">
          {(isPublicSale || isTestable) && (
            <p>
              {remainingForPublicMint === 0
                ? 'Sold out!'
                : `${remainingForPublicMint}/${totalArtworks} remaining`}
            </p>
          )}
          {(isEarlySale || isTestable) && !isPublicSale && (
            <p>
              {earlySaleRemaining === 0
                ? 'Presale sold out!'
                : `${earlySaleRemaining}/${earlySaleTotal} remaining`}
            </p>
          )}
        </span>
        <p>
          {isMintLoading && 'Waiting for approval'}
          {isMintStarted && 'Minting...'}
          {isMinted && 'Congratulations. You minted! Check your wallet'}
        </p>
      </div>
    </div>
  );
};
