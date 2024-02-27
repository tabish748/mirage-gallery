import { FilterButton } from 'components/Button/FilterButton/FilterButton';
import { Dispatch, SetStateAction } from 'react';
import { MintStatus } from 'types/drops';
import { MARKETPLACE_URLS } from 'utils/constants';
import { SansaButtonLink } from 'components/Link/SansaButtonLink';

type DropsFilterProps = {
  selectedFilter: MintStatus;
  setFilter: Dispatch<SetStateAction<MintStatus>>;
  showUpcoming: boolean;
};

export const MintStatusText = {
  [MintStatus.ALL]: 'All',
  [MintStatus.UPCOMING]: 'Upcoming',
  [MintStatus.MINTING]: 'Minting',
  [MintStatus.SOLD_OUT]: 'Sold Out',
  [MintStatus.PRIVATE]: 'Private',
};

export default function DropsFilter({
  selectedFilter,
  setFilter,
  showUpcoming,
}: DropsFilterProps) {
  return (
    <div className="relative flex flex-col items-start justify-between w-full gap-6 mx-auto my-3 md:items-center md:flex-row max-w-screen-2xl">
      <h2 className="text-2xl text-left text-black">Our Drops</h2>
      <div className="flex items-center justify-end gap-1 md:gap-2">
        {Object.values(MintStatus)
          .filter((x) => {
            if (x === MintStatus.PRIVATE) {
              return false;
            }
            if (!showUpcoming) {
              return x !== MintStatus.UPCOMING;
            }
            return true;
          })
          .map((value) => (
            <FilterButton
              isActive={value === selectedFilter}
              key={value}
              onClick={() => setFilter(value)}
            >
              {MintStatusText[value]}
            </FilterButton>
          ))}
        <div className="hidden h-6 mx-2 border-r border-gray-300 md:flex" />
        <div className="absolute top-0 right-0 md:relative md:right-0">
          <SansaButtonLink href={MARKETPLACE_URLS.curated} rounded small />
        </div>
      </div>
    </div>
  );
}
