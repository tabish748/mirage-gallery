import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { MembershipCuratedProject } from 'pages/membership';
import { Input } from 'components/Input/Input';
import { useClaimProcess } from 'hooks/useClaimDreamersProcess';
import { SentientClaimsAvailable } from 'modules/membership/components/SentientClaimsAvailable';
import { WalletActionWrapper } from 'components/Button/ConnectWalletButton/WalletActionWrapper';

// These dynamics projects are fetched in /membership page from CMS
type SentientClaimProps = {
  curatedProjects: MembershipCuratedProject[];
};

export const DreamersClaim = ({ curatedProjects }: SentientClaimProps) => {
  const [claimFields, setClaimFields] = useState<{
    membershipId: string;
    quantity: string;
  }>({ membershipId: '', quantity: '' });

  const [showClaims, setShowClaims] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // this booleans will help to show the current claiming status
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    claimCount,
    claim,
    error: claimError,
  } = useClaimProcess({
    membershipId: parseInt(claimFields.membershipId),
    quantity: claimFields.quantity,
  });

  const handleOnInputChange = useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
      setClaimFields((prevState) => ({ ...prevState, [name]: value }));
    },
    [setClaimFields]
  );

  // Conditions for enabling/disabling fields and buttons
  const isClaimButtonDisabled =
    !claimFields.membershipId || !claimFields.quantity;
  const isCheckButtonDisabled = !claimFields.membershipId;

  // Quantity is always 1 if we are on pre-sale
  const handleClaim = useCallback(() => {
    const membershipIdNumber = Number(claimFields.membershipId);
    if (
      isNaN(membershipIdNumber) ||
      !Number.isInteger(membershipIdNumber) ||
      membershipIdNumber === 0
    ) {
      setError('Membership ID must be an integer number');
      return;
    }
    if (claimError?.includes('Wallet does not own this membership ID')) {
      setError('Wallet does not own this membership ID');
      return;
    }
    if (claimError?.includes('Memberships can only claim 3 in total')) {
      setError(
        'Selected quantity is greater than the available Dreamers Remaining'
      );
      return;
    }
    if (claimCount == 0) {
      setError(
        `Membership ID ${membershipIdNumber} has already claimed 3 Dreamers`
      );
      return;
    }
    claim?.();
  }, [claimCount, claim, claimFields.membershipId, setError, claimError]);

  return (
    <div>
      <div className="flex flex-col gap-6 my-6 md:flex-row">
        <Input
          label={'Membership ID'}
          name={'membershipId'}
          onChange={handleOnInputChange}
          placeholder={'(0-49)'}
          value={claimFields.membershipId}
        />
        <Input
          label={'Quantity'}
          name={'quantity'}
          onChange={handleOnInputChange}
          placeholder={'(1-3)'}
          value={claimFields.quantity}
        />
      </div>
      <div className="flex justify-between mb-8">
        <WalletActionWrapper>
          <button
            className={clsx(
              'flex items-center justify-center py-3 text-white duration-300 bg-membership px-9',
              { 'opacity-50': isClaimButtonDisabled }
            )}
            disabled={isClaimButtonDisabled}
            onClick={handleClaim}
            type="button"
          >
            Claim
          </button>
        </WalletActionWrapper>
        <button
          className={clsx(
            'flex items-center justify-center py-3 text-membership border border-membership duration-300 px-9',
            { 'opacity-50': isCheckButtonDisabled }
          )}
          disabled={isCheckButtonDisabled}
          onClick={() => setShowClaims((prev) => !prev)}
          type="button"
        >
          {showClaims ? 'Hide' : 'Show'} Claims
        </button>
      </div>
      {error !== '' && (
        <div className="my-4">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
      <SentientClaimsAvailable
        curatedProjects={curatedProjects}
        isCuratedSelected={false}
        isDreamersSelected={true}
        membershipId={parseInt(claimFields.membershipId)}
        showclaims={showClaims}
      />
    </div>
  );
};
