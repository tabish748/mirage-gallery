import { GetStaticProps, GetStaticPropsResult } from 'next';
import { dropsQuery } from 'lib/queries';
import { sanityClient } from 'lib/sanity.client';
import CuratedHero from 'modules/curated/components/CuratedHero';

import { useMemo } from 'react';
import { DropGallery, MintStatus } from 'types/drops';
import { Layout } from 'components/Layout/EthLayout';
import dynamic from 'next/dynamic';

import { ReactElement } from 'react';

const CuratedArtistForm = dynamic(
  import('modules/curated/components/CuratedArtistForm').then(
    (mod) => mod.CuratedArtistForm
  )
);
const CuratedGallery = dynamic(
  import('modules/curated/components/CuratedGallery').then(
    (mod) => mod.CuratedGallery
  )
);
const MintRandomProject = dynamic(
  import('modules/curated/components/MintRandomProject').then(
    (mod) => mod.MintRandomProject
  )
);

type CuratedPageProps = {
  drops: DropGallery[];
};

const CuratedPage = ({ drops }: CuratedPageProps) => {
  const currentlyMintingProjects: DropGallery[] = useMemo(
    () =>
      drops.filter((drop) => {
        if (drop.status === MintStatus.MINTING || drop.isTestable) {
          return drop;
        }
      }),
    [drops]
  );

  return (
    <div className="w-full pb-24">
      <CuratedHero />
      <CuratedGallery drops={drops} />
      <CuratedArtistForm />
      {currentlyMintingProjects.length > 0 && (
        <MintRandomProject mintingDrops={currentlyMintingProjects} />
      )}
    </div>
  );
};

CuratedPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      description="Innovative artworks, from a variety of artists. Unleashing AI Artistry: Diverse Creations, Infinite Inspiration"
      image="https://res.cloudinary.com/do1gnj1vn/image/upload/v1686442508/Social%20share%20images/drop20_iin8cc.jpg"
      title="Curated"
    >
      {page}
    </Layout>
  );
};
export default CuratedPage;

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<{ drops: DropGallery[] }>
> => {
  const drops: DropGallery[] = await sanityClient.fetch(dropsQuery);
  return {
    props: { drops },
    revalidate: 10,
  };
};
