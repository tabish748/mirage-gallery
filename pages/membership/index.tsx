import { Benefits } from 'modules/membership/components/Benefits';
import { HeroMembership } from 'modules/membership/components/HeroMembership';
import { MembersSays } from 'modules/membership/components/MembersSays';
import { Tiers } from 'modules/membership/components/Tiers';
import { ViewOrClaim } from 'modules/membership/components/ViewOrClaim';
import { Tab } from '@headlessui/react';
import { SentientClaim } from 'modules/membership/components/SentientClaim';
import { ButtonTab } from 'components/Button/ButtonTab/ButtonTab';
import { useState } from 'react';
import { Drop, Project } from 'types/drops';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { sanityClient } from 'lib/sanity.client';
import { membershipCuratedProjects } from 'lib/queries';
import { Layout } from 'components/Layout/EthLayout';
import { ReactElement } from 'react';

// This type is only used in Membership pages to allow users
// to mint any Curated project (or Dreamer) from one single place
export type MembershipCuratedProject = {
  name: Drop['name'];
  projectId: Project['id'];
  contractAddress?: Project['contractAddress'];
};

const MembershipPage = ({
  curatedProjects,
}: {
  curatedProjects: MembershipCuratedProject[];
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  function openSelectedClaimTab() {
    setSelectedIndex(1);
  }
  return (
    <>
      <div className="w-full pb-24">
        <HeroMembership />
        <Tab.Group onChange={setSelectedIndex} selectedIndex={selectedIndex}>
          <Tab.List className="px-3 mt-6 border-b outline-none md:px-0 md:mt-10">
            <div className="flex items-center justify-start gap-6 px-2 py-3 mx-auto text-base md:px-5 max-w-screen-2xl md:gap-12">
              <ButtonTab activeClasses="text-membership" title={'About'} />
              <ButtonTab
                activeClasses="text-membership"
                title={'Sentient claim'}
              />
            </div>
          </Tab.List>
          <Tab.Panels className="px-2 pt-10 mx-auto md:px-5 max-w-screen-2xl ">
            <Tab.Panel>
              <ViewOrClaim>
                <button
                  className="bg-gradient-to-r p-6 flex justify-start flex-col from-[#503e03] text-white to-[#d4a80f]"
                  onClick={openSelectedClaimTab}
                  type="button"
                >
                  <h3 className="h-32 mt-3 text-lg">
                    Are you a sentient member?
                  </h3>
                  <p className="text-3xl">Claim artworks</p>
                </button>
              </ViewOrClaim>
              <Tiers />
              <Benefits />
              <MembersSays />
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col w-full max-w-xl space-y-6 text-lg font-medium md:text-2xl font-base">
                  <p>
                    This page is for
                    <span className="underline"> Sentient Members</span> to
                    claim their token from Mirage Gallery Curated drops OR for
                    individuals to check status of existing memberships.
                  </p>
                  <p>
                    Membership IDs are the token ID of the Sentient membership
                    NFT (0-49)
                  </p>
                  <p>
                    Each Sentient membership can only claim 1 piece per curated
                    project, but can claim that piece at any point in time (even
                    if everything is sold out).
                  </p>
                </div>
                <SentientClaim curatedProjects={curatedProjects} />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

MembershipPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      description="Mirage Gallery Memberships allow for bonus perks related to Mirage Gallery Curated and other Mirage Gallery projects!"
      image="https://res.cloudinary.com/do1gnj1vn/image/upload/v1686442883/Social%20share%20images/both_membership_cards_lhn0er.jpg"
      title="Become a Member"
    >
      {page}
    </Layout>
  );
};
export default MembershipPage;

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ curatedProjects: MembershipCuratedProject[] }>
> => {
  const curatedProjects: MembershipCuratedProject[] = await sanityClient.fetch(
    membershipCuratedProjects
  );

  return {
    props: {
      curatedProjects,
    },
  };
};
