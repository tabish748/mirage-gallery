import { DropDetailsHero } from 'modules/curated/components/drop-details/DropDetailsHero';
import { sanityClient } from 'lib/sanity.client';
import { dropBySlugQuery, dropsQuery } from 'lib/queries';
import { Drop, MintStatus } from 'types/drops';
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { Tab } from '@headlessui/react';
import { ButtonTab } from 'components/Button/ButtonTab/ButtonTab';
import { useReadProcess } from 'hooks/useReadProcess';
import { useReadHolderReq } from 'hooks/useReadHolderReq';
import { Layout } from 'components/Layout/EthLayout';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import React, { useRef } from 'react';

const AboutTheProject = dynamic(
  import('modules/curated/components/drop-details/AboutTheProject').then(
    (mod) => mod.AboutTheProject
  )
);
const ClaimForm = dynamic(
  import('components/Forms/ClaimForm').then((mod) => mod.ClaimForm)
);

const MintForm = dynamic(
  import('components/Forms/MintForm').then((mod) => mod.MintForm)
);

const ArtistsTab = dynamic(
  import('modules/curated/components/drop-details/ArtistTab').then(
    (mod) => mod.ArtistsTab
  )
);

const SlugPage = ({ drop }: { drop: Drop }) => {
  const {
    artists,
    description,
    marketplaceUrl,
    mintPrice,
    name,
    project,
    releaseDate,
    sampleImages,
    status,
    video,
  } = drop;

  const {
    currency,
    isPublicSale,
    isEarlySale,
    isPhaseTwo,
    earlySaleTotal,
    earlySaleRemaining,
    pricePerTokenInWei,
    remainingForPublicMint,
    totalArtworks,
  } = useReadProcess({
    projectId: project.id,
    contractAddress: project.contractAddress,
  });

  const { passesCuratedReq } = useReadHolderReq();

  const cover = sampleImages[0];
  const isMinting = status === MintStatus.MINTING;
  const isSoldOut = status == MintStatus.SOLD_OUT;

  const mintButtonRef = useRef<HTMLButtonElement | null>(null);

  const tabListRef = useRef<HTMLDivElement | null>(null);

  const handleDivClick = () => {
    if (mintButtonRef.current) {
      mintButtonRef.current.click();
    }
  };

  const handleTabClick = () => {
    if (tabListRef.current) {
      const headerHeight = 60;
      const topOffset =
        tabListRef.current.getBoundingClientRect().height + headerHeight;
      const scrollPosition =
        window.scrollY +
        tabListRef.current.getBoundingClientRect().top -
        topOffset;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="w-full pb-24">
        <DropDetailsHero
          artists={artists}
          cover={sampleImages[0]}
          description={description}
          marketplaceUrl={marketplaceUrl}
          name={name}
          status={status}
        />

        <Tab.Group defaultIndex={0}>
          <Tab.List
            className="grid items-baseline justify-start grid-cols-4 gap-2 px-2 py-3 mx-auto text-xs border-b md:px-5 md:items-center md:flex md:text-base md:gap-12 max-w-screen-2xl"
            ref={tabListRef}
          >
            <div className="scrollOverlay" onClick={handleTabClick}>
              <ButtonTab
                activeClasses="text-curated"
                onClick={handleTabClick}
                title={'Details'}
              />
            </div>
            <div className="scrollOverlay" onClick={handleTabClick}>
              <ButtonTab
                activeClasses="text-curated"
                onClick={handleTabClick}
                title={artists.length > 1 ? 'The Artists' : 'The Artist'}
              />
            </div>
            {(isMinting || isSoldOut || drop.isTestable) && (
              <div className="scrollOverlay" onClick={handleTabClick}>
                <ButtonTab
                  activeClasses="text-curated"
                  onClick={handleTabClick}
                  title={'Sentient claim'}
                />
              </div>
            )}
            <>
              {(isMinting || drop.isTestable) && pricePerTokenInWei && (
                <>
                  <div className="scrollOverlay" onClick={handleTabClick}>
                    <div
                      onBlur={(e) => {
                        e.currentTarget.style.backgroundColor = '#930e3c'; // Original color if div loses focus
                      }}
                      onClick={handleDivClick}
                      onMouseDown={(e) => {
                        e.currentTarget.style.backgroundColor = '#5a0925'; // Darker color when released
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow =
                          '0 5px 15px rgba(0, 0, 0, 0.2)';
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow =
                          '0 7px 20px rgba(0, 0, 0, 0.3)';
                      }}
                      onMouseUp={(e) => {
                        e.currentTarget.style.backgroundColor = '#930e3c'; // Original color when released
                      }}
                      style={{
                        backgroundColor: '#930e3c',
                        padding: '10px 20px',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s, boxShadow 0.3s',
                        display: 'inline-block',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                      }}
                    >
                      <ButtonTab
                        onClick={handleTabClick}
                        ref={mintButtonRef}
                        style={{ color: '#FFFFFF' }}
                        title={'Mint'}
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          </Tab.List>
          <Tab.Panels className="px-2 pt-20 mx-auto md:px-5 max-w-screen-2xl">
            <Tab.Panel>
              <AboutTheProject
                cover={cover}
                currency={currency}
                mintPrice={mintPrice}
                project={project}
                releaseDate={releaseDate}
                sampleImages={sampleImages}
                status={status}
                totalArtworks={totalArtworks}
                video={video}
              />
            </Tab.Panel>
            <Tab.Panel>
              <ArtistsTab artists={artists} />
            </Tab.Panel>
            {(isMinting || drop.isTestable || isSoldOut) && (
              <Tab.Panel>
                <ClaimForm
                  contractAddress={project.contractAddress}
                  projectId={project.id}
                />
              </Tab.Panel>
            )}
            <>
              {(isMinting || drop.isTestable) && pricePerTokenInWei && (
                <>
                  <Tab.Panel>
                    <MintForm
                      contractAddress={project.contractAddress}
                      currency={currency}
                      earlySaleRemaining={earlySaleRemaining}
                      earlySaleTotal={earlySaleTotal}
                      isEarlySale={isEarlySale}
                      isPhaseTwo={isPhaseTwo}
                      isPublicSale={isPublicSale}
                      mintPrice={mintPrice}
                      passesCuratedReq={passesCuratedReq}
                      pricePerTokenInWei={pricePerTokenInWei}
                      projectId={project.id}
                      remainingForPublicMint={remainingForPublicMint}
                      totalArtworks={totalArtworks}
                    />
                  </Tab.Panel>
                </>
              )}
            </>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

type DropProps = {
  drop: Drop;
};

SlugPage.getLayout = function getLayout(
  page: ReactElement,
  pageProps: DropProps
) {
  const { drop } = pageProps;

  return (
    <Layout
      description={drop.description}
      image={drop.sampleImages[0].secure_url}
      title={drop.name}
    >
      {page}
    </Layout>
  );
};

export default SlugPage;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<{ drop: Drop }>> => {
  const slug = context.params?.slug as string;

  const drop: Drop = await sanityClient.fetch(dropBySlugQuery, { slug });

  return {
    props: { drop },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const drops: Drop[] = await sanityClient.fetch(dropsQuery);

  // Get the paths we want to pre-render based on posts
  const paths = drops.map((drop) => ({
    params: { slug: drop.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}
