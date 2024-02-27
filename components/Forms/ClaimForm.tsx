import clsx from 'clsx';
import { Input } from 'components/Input/Input';
import { useClaimProcess } from 'hooks/useClaimCuratedProcess';
import React, { useCallback, useState } from 'react';
import { Project } from 'types/drops';
import { WalletActionWrapper } from 'components/Button/ConnectWalletButton/WalletActionWrapper';
import Link from 'next/link';

export const ClaimForm = ({
  projectId,
  contractAddress,
}: {
  projectId: Project['id'];
  contractAddress?: Project['contractAddress'];
}) => {
  const [membershipId, setMembershipId] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { canClaim, claim, isClaimLoading, isClaimStarted, isClaimed } =
    useClaimProcess({
      projectId,
      membershipId,
      contractAddress,
    });

  const handleMembershipChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setError('');
      setMembershipId(value);
    },
    [setError, setMembershipId]
  );

  // Quantity is always 1 if we are on pre-sale
  const handleClaim = useCallback(() => {
    const membershipIdNumber = Number(membershipId);
    if (
      isNaN(membershipIdNumber) ||
      !Number.isInteger(membershipIdNumber) ||
      membershipIdNumber < 0 ||
      membershipIdNumber > 49
    ) {
      setError('Membership ID must be between 0 and 49');
      return;
    }
    if (!canClaim) {
      setError(
        `Membership ID ${membershipId} has already claimed from this drop!`
      );
      return;
    }
    claim?.();
  }, [canClaim, claim, membershipId, setError]);

  const isClaimButtonDisabled = isClaimLoading || isClaimStarted;

  return (
    <div className="grid w-full mx-auto my-3 max-w-screen-2xl md:grid-cols-2">
      <div className="">
        <h2 className="text-2xl text-left text-black">Claim</h2>
        <div>
          <p className="my-3 font-sans text-black">
            For Sentient members, please enter your membership ID to claim your
            artwork. If you are not a member, learn more by{' '}
            <Link href="/membership">clicking here</Link>!
          </p>

          <div className="flex flex-col gap-6 my-6">
            <Input
              label={'Input Membership ID'}
              name={'membershipId'}
              onChange={handleMembershipChange}
              placeholder={'(0-49)'}
              value={membershipId}
            />
            <span className="text-sm text-red-600">
              {error !== '' && error}
            </span>
          </div>
          <div>
            <WalletActionWrapper>
              <button
                aria-disabled={isClaimButtonDisabled}
                className={clsx(
                  'flex items-center justify-center py-3 text-white duration-300 bg-curated px-9',
                  {
                    disabled: isClaimButtonDisabled,
                  }
                )}
                disabled={isClaimButtonDisabled}
                onClick={handleClaim}
                type="button"
              >
                Claim
              </button>
            </WalletActionWrapper>
            <p>
              {isClaimLoading && 'Waiting for approval'}
              {isClaimStarted && 'Claiming...'}
              {isClaimed && 'Congratulations. You claimed! Check your wallet'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
