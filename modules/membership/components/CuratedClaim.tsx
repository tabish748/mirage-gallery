import { useCallback, useMemo, useState } from 'react';
import clsx from 'clsx';
import { MembershipCuratedProject } from 'pages/membership';
import {
  DropdownList,
  DropdownOptionProps,
} from 'components/Dropdown/Dropdown';
import { Input } from 'components/Input/Input';
import { useClaimProcess } from 'hooks/useClaimCuratedProcess';
import { SentientClaimsAvailable } from 'modules/membership/components/SentientClaimsAvailable';
import { WalletActionWrapper } from 'components/Button/ConnectWalletButton/WalletActionWrapper';

// These dynamics projects are fetched in /membership page from CMS
type SentientClaimProps = {
  curatedProjects: MembershipCuratedProject[];
};

export const CuratedClaim = ({ curatedProjects }: SentientClaimProps) => {
  const [selectedCurated, setSelectedCurated] =
    useState<DropdownOptionProps | null>(null);
  const [claimFields, setClaimFields] = useState<{
    membershipId: string;
  }>({ membershipId: '' });

  const [showClaims, setShowClaims] = useState<boolean>(false);

  const [error, setError] = useState<string>('');

  // this booleans will help to show the current claiming status
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { canClaim, claim } = useClaimProcess({
    projectId: selectedCurated?.value as string,
    membershipId: claimFields.membershipId,
    contractAddress: selectedCurated?.contractAddress as string,
  });

  const curatedProjectsList = useMemo(
    () =>
      curatedProjects.map(({ name, projectId, contractAddress }) => ({
        text: name,
        value: projectId,
        ...(contractAddress && { contractAddress }),
      })),
    [curatedProjects]
  );

  const handleOnInputChange = useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
      setClaimFields((prevState) => ({ ...prevState, [name]: value }));

      const membershipIdNumber = Number(value);

      if (membershipIdNumber > 49) {
        setError('Membership ID cannot be greater than 49!');
      } else {
        setError(''); // Reset the error if the value is valid
      }
    },
    [setClaimFields]
  );

  const shouldShowCuratedProjectsDropdown = curatedProjectsList.length > 0;
  const isClaimButtonDisabled = !claimFields.membershipId;
  const isCheckButtonDisabled =
    !claimFields.membershipId || Number(claimFields.membershipId) > 49;

  // Quantity is always 1 if we are on pre-sale
  const handleClaim = useCallback(() => {
    const membershipIdNumber = Number(claimFields.membershipId);

    if (!canClaim) {
      setError(
        `Membership ID ${membershipIdNumber} has already claimed from this drop!`
      );
      return;
    }
    claim?.();
  }, [canClaim, claim, claimFields.membershipId, setError]);

  return (
    <div>
      <form>
        <div className="flex flex-col">
          <div
            className={clsx('mt-6 mb-2', {
              'opacity-40': !shouldShowCuratedProjectsDropdown,
            })}
          >
            <span className="mb-1 font-sans">Choose a Curated Project</span>
            <DropdownList
              disabled={!shouldShowCuratedProjectsDropdown}
              list={curatedProjectsList}
              onSelect={setSelectedCurated}
              placeholderText="Select a curated project to claim"
              selected={selectedCurated}
            />
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-6 my-6 md:flex-row">
        <Input
          label={'Membership ID'}
          name={'membershipId'}
          onChange={handleOnInputChange}
          placeholder={'(0-49)'}
          value={claimFields.membershipId}
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
        isCuratedSelected={true}
        isDreamersSelected={false}
        membershipId={parseInt(claimFields.membershipId)}
        showclaims={showClaims}
      />
    </div>
  );
};
