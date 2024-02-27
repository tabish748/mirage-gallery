import { HomeHero } from 'components/Home/HomeHero';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { Artists } from 'components/Home/Artists';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { sanityClient } from 'lib/sanity.client';
import { dropsHomeHeroQuery } from 'lib/queries';
import { artistsQuery } from 'lib/queries';
import { Artist, Drop } from 'types/drops';
import { Layout } from 'components/Layout/Layout';
import dynamic from 'next/dynamic';

const HomePosters = dynamic(
  import('components/Home/HomePosters').then((mod) => mod.HomePosters)
);

const AlejandroAndTaylorHomeSection = dynamic(
  import(
    'modules/alejandro-and-taylor/components/AlejandroAndTaylorHomeSection'
  ).then((mod) => mod.AlejandroAndTaylorHomeSection)
);

const CryptoNativeHomeSection = dynamic(
  import('modules/crypto-native/components/CryptoNativeHomeSection').then(
    (mod) => mod.CryptoNativeHomeSection
  )
);

const CuratedHomeSection = dynamic(
  import('modules/curated/components/CuratedHomeSection').then(
    (mod) => mod.CuratedHomeSection
  )
);

const DreamersHomeSection = dynamic(
  import('modules/dreamers/components/DreamersHomeSection').then(
    (mod) => mod.DreamersHomeSection
  )
);

const MembershipsHomeSection = dynamic(
  import('modules/membership/components/MembershipsHomeSection').then(
    (mod) => mod.MembershipsHomeSection
  )
);

export type HomeProps = {
  _id: Drop['_id'];
  artists: Artist['name'][];
  name: Drop['name'];
  cover: Drop['cover'];
  slug: Drop['slug'];
};

export default function Home({
  drops,
  allArtists,
}: {
  drops: HomeProps[];
  allArtists: Artist[];
}) {
  return (
    <>
      <Layout>
        <HomeHero drops={drops} />
        <HomePosters />
        <Artists artists={allArtists} />
        <div className="w-full px-2 space-y-64 md:px-5 max-w-screen-2xl">
          <section className="pt-64">
            <HeroTitle accentColor={'text-black'} subtitle="What is Mirage?">
              Mirage Gallery was founded on the premise that art can be
              <span className="text-[#808080]"> more than human.</span>
            </HeroTitle>
          </section>
          <AlejandroAndTaylorHomeSection />
          <CryptoNativeHomeSection />
          <CuratedHomeSection />
          <DreamersHomeSection />
          <MembershipsHomeSection />
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ drops: HomeProps[]; allArtists: Artist[] }>
> => {
  const { mintingDrops, soldOutDrops } = await sanityClient.fetch(
    dropsHomeHeroQuery
  );

  // Query to fetch all artists
  const allArtists = await sanityClient.fetch(artistsQuery);

  const flattenedArtists: Artist[] = allArtists.flatMap(
    (item: { artists: Artist[]; dropDetails: { slug: { current: string } } }) =>
      item.artists.map((artist) => ({
        ...artist,
        dropSlug: item.dropDetails.slug.current,
      }))
  );

  const priorityArtists = [
    'Huemin',
    'Roope Rainisto',
    'Claire Silver',
    'DeltaSauce',
    'Artemis',
    'David Rees',
    'AmliArt',
    'Charlesai',
  ];

  // Sort flattenedArtists to show priority artists first
  flattenedArtists.sort((a, b) => {
    const aPriority = priorityArtists.indexOf(a.name);
    const bPriority = priorityArtists.indexOf(b.name);

    if (aPriority > -1 && bPriority > -1) {
      // both artists are priority artists, compare their indexes in priorityArtists
      return aPriority - bPriority;
    } else if (aPriority > -1) {
      // only a is a priority artist, a comes first
      return -1;
    } else if (bPriority > -1) {
      // only b is a priority artist, b comes first
      return 1;
    }
    // neither artist is a priority artist, don't change their order
    return 0;
  });

  // sort the mintingDrops array by 'created' property
  mintingDrops.sort((a: { created: number }, b: { created: number }) =>
    a.created < b.created ? 1 : -1
  );

  let homeDrops = [...mintingDrops, ...soldOutDrops];
  if (homeDrops.length > 5) {
    homeDrops = homeDrops.slice(0, 5);
  }

  return {
    props: {
      drops: homeDrops,
      allArtists: flattenedArtists,
    },
  };
};
