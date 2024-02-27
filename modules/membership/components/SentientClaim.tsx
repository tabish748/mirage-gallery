import { useMemo, useState } from 'react';
import { MembershipCuratedProject } from 'pages/membership';
import {
  DropdownList,
  DropdownOptionProps,
} from 'components/Dropdown/Dropdown';

import { CuratedClaim } from 'modules/membership/components/CuratedClaim';
import { DreamersClaim } from 'modules/membership/components/DreamersClaim';

// These are the only projects that members can claim art from
export enum ClaimableProjects {
  CURATED = 'Curated',
  DREAMERS = 'Dreamers',
}

// These dynamics projects are fetched in /membership page from CMS
type SentientClaimProps = {
  curatedProjects: MembershipCuratedProject[];
};

export const SentientClaim = ({ curatedProjects }: SentientClaimProps) => {
  // UseState to store form selections
  const [mainProjectSelected, setMainProjectSelected] =
    useState<DropdownOptionProps | null>(null);

  // Parse lists into Dropdown generic format ({ text, value })
  const projectList: DropdownOptionProps[] = useMemo(
    () =>
      Object.values(ClaimableProjects).map((option) => ({
        text: option,
        value: option.toLowerCase(),
      })),
    []
  );

  // Conditions for enabling/disabling fields and buttons
  const isDreamersSelected =
    mainProjectSelected?.text === ClaimableProjects.DREAMERS;

  const isCuratedSelected =
    mainProjectSelected?.text === ClaimableProjects.CURATED;

  return (
    <div>
      <form>
        <div className="flex flex-col">
          <div>
            <span className="mb-3 font-sans">Project</span>
            <DropdownList
              list={projectList}
              onSelect={setMainProjectSelected}
              placeholderText="Select a project"
              selected={mainProjectSelected}
            />
          </div>
          {isCuratedSelected && (
            <CuratedClaim curatedProjects={curatedProjects} />
          )}
          {isDreamersSelected && (
            <DreamersClaim curatedProjects={curatedProjects} />
          )}
        </div>
      </form>
    </div>
  );
};
