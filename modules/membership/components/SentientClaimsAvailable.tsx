import { useEffect, useState } from 'react';
import { MembershipCuratedProject } from 'pages/membership';
import { useCuratedCheck } from 'hooks/useCuratedCheckAll';
import { useDreamersCheck } from 'hooks/useDreamersCheck';

// These are the only projects that members can claim art from
export enum ClaimableProjects {
  CURATED = 'Curated',
  DREAMERS = 'Dreamers',
}

// These dynamics projects are fetched in /membership page from CMS
type claimsAvailableProps = {
  curatedProjects: MembershipCuratedProject[];
  membershipId: number;
  isDreamersSelected: boolean;
  isCuratedSelected: boolean;
  showclaims: boolean;
};

type projectListProps = {
  claimable: boolean;
  projectId: number;
  projectName: string;
};

export const SentientClaimsAvailable = ({
  membershipId,
  curatedProjects,
  isCuratedSelected,
  isDreamersSelected,
  showclaims,
}: claimsAvailableProps) => {
  const [availableProjects, setAvailableProjects] = useState<
    projectListProps[] | null
  >();

  const canClaimDreamers = useDreamersCheck({ membershipId });
  const curatedProjectsClaimable = useCuratedCheck({
    membershipId,
    projectIds: curatedProjects.map((p) =>
      p.projectId ? parseInt(p.projectId) : 0
    ),
    contractAddresses: curatedProjects.map((p) => p.contractAddress ?? ''),
  });

  useEffect(() => {
    if (curatedProjectsClaimable) {
      const projects = curatedProjectsClaimable.projects.map((p) => {
        // Attempt to find the project by projectId or contractAddress
        const project = curatedProjects.find(
          (c) =>
            parseInt(c.projectId) === p.projectId ||
            c.contractAddress === p.contractAddress
        );

        return {
          claimable: p.claimable,
          projectId: p.projectId,
          projectName: project?.name || 'Unknown Project',
        };
      });
      projects.sort((a, b) => {
        if (a.projectId === 0) {
          return 1;
        }
        if (b.projectId === 0) {
          return -1;
        }
        return a.projectId - b.projectId;
      });
      setAvailableProjects(projects);
    }
  }, [curatedProjectsClaimable, curatedProjects]);

  return (
    <>
      {showclaims &&
        isCuratedSelected &&
        availableProjects?.map((l, i) => (
          <div key={i}>
            {l.claimable ? (
              <p className="mb-1">[Available] {l.projectName}</p>
            ) : (
              <p className="line-through text-red-400">{l.projectName}</p>
            )}
          </div>
        ))}

      {showclaims && !canClaimDreamers?.error && isDreamersSelected && (
        <div>
          <p>{3 - (canClaimDreamers?.count ?? 0)} Dreamers Claims Remaining</p>
        </div>
      )}
    </>
  );
};
