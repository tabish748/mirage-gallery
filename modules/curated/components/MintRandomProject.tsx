import { useCallback, useMemo, useState } from 'react';
import { useRef } from 'react';
import { CldImage } from 'next-cloudinary';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { MintForm } from 'components/Forms/MintForm';
import { Drop, DropGallery, Project } from 'types/drops';
import { CloudinaryAsset } from 'types/cloudinary';
import { CURATED_PAGE_SECTIONS } from 'utils/routes';
import { useReadProcess } from 'hooks/useReadProcess';
import { useReadHolderReq } from 'hooks/useReadHolderReq';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export type MintingDropsProps = {
  cover: CloudinaryAsset;
  project: Drop['project'];
};
type MintRandomProjectProps = {
  mintingDrops: DropGallery[];
};

export const MintRandomProject = ({ mintingDrops }: MintRandomProjectProps) => {
  const [selectedProjectId, setSelectedProjectId] = useState<
    Project['id'] | null
  >('');

  const selectedDrop = mintingDrops.find(
    (drop) => drop.projectId === selectedProjectId
  );
  const contractAddress = selectedDrop?.contractAddress;

  const isTestable = mintingDrops.find(
    (drop) => drop.projectId === selectedProjectId
  )?.isTestable;

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
    projectId: selectedProjectId,
    contractAddress: contractAddress,
  });
  const swiperRef = useRef<HTMLDivElement | null>(null);

  const [isLoading] = useState(true);

  const { passesCuratedReq } = useReadHolderReq();

  const [clickedProjectId, setClickedProjectId] = useState<
    Project['id'] | null
  >(null);

  const handleSelect = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const projectId = event.currentTarget.getAttribute('data-id') || '';
      projectId === selectedProjectId
        ? setSelectedProjectId(null) // unselect project and hide MintForm
        : setSelectedProjectId(projectId);
      setClickedProjectId(projectId); // set the clickedProjectId
      // Add scroll behavior
      const HEADER_HEIGHT = 100;
      if (swiperRef.current && projectId !== selectedProjectId) {
        const topOffset = swiperRef.current.getBoundingClientRect().top;
        window.scrollTo({
          top: window.scrollY + topOffset - HEADER_HEIGHT,
          behavior: 'smooth',
        });
      }
    },
    [selectedProjectId, setSelectedProjectId]
  );

  const mintPrice = useMemo(() => {
    if (!selectedProjectId) {
      return;
    }
    const selected = mintingDrops.find(
      (drop) => drop.projectId === selectedProjectId
    );
    return selected?.mintPrice;
  }, [selectedProjectId, mintingDrops]);

  // Public Sale is live and there are pieces remaining to mint
  const publicSaleAvailable =
    isPublicSale && remainingForPublicMint > 0 && pricePerTokenInWei;

  // Pre Sale is live and there are pieces remaining to mint
  const preSaleAvailable =
    isEarlySale && earlySaleRemaining > 0 && pricePerTokenInWei;

  const shouldShowMintForm = publicSaleAvailable || preSaleAvailable || false;

  const projectSoldOutStatus = (
    projectId: Project['id'],
    isPublicSale: boolean | undefined,
    isEarlySale: boolean | undefined
  ) => {
    if (isLoading) {
      return null;
    }

    const selected = mintingDrops.find((drop) => drop.projectId === projectId);
    if (!selected) {
      return null;
    }
    if (
      earlySaleRemaining === 0 &&
      remainingForPublicMint > 0 &&
      !isPublicSale
    ) {
      return 'Presale Sold Out';
    }
    if (remainingForPublicMint === 0) {
      return 'Sold Out';
    }
    if (!isPublicSale && !isEarlySale && isPublicSale !== undefined) {
      return 'Coming Soon';
    }
    return null;
  };

  const SLIDES_PER_VIEW = 4;
  const mintingDropsLoop = useMemo(() => {
    if (
      mintingDrops.length > SLIDES_PER_VIEW &&
      mintingDrops.length < SLIDES_PER_VIEW * 2
    ) {
      return [...mintingDrops, ...mintingDrops];
    }
    return mintingDrops;
  }, [mintingDrops, SLIDES_PER_VIEW]);

  return (
    <div
      className="flex flex-col px-1 py-20 mx-auto md:px-5 max-w-screen-2xl"
      id={CURATED_PAGE_SECTIONS.mintRandomProject}
    >
      <HeroTitle accentColor={'text-curated'} subtitle="Mint">
        Select a collection
      </HeroTitle>
      <div className="">
        <div ref={swiperRef}>
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: SLIDES_PER_VIEW,
                spaceBetween: 10,
              },
            }}
            centeredSlides={false}
            direction={'horizontal'}
            loop={true}
            modules={[Mousewheel, Navigation]}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.01,
              thresholdDelta: 10,
              releaseOnEdges: true,
            }}
            navigation={true}
            onSlideChange={() => setSelectedProjectId(null)}
            slidesPerView={1}
            spaceBetween={30}
          >
            {mintingDropsLoop.map(
              ({ artists, cover, name, projectId }, index) =>
                cover?.url && (
                  <SwiperSlide key={`${name}-${index}`}>
                    <button
                      className={`relative w-full h-full ${
                        selectedProjectId === projectId
                          ? 'border-2 border-black'
                          : 'border-2 border-transparent'
                      }`}
                      data-id={projectId}
                      key={projectId}
                      onClick={handleSelect}
                    >
                      <CldImage
                        alt={name}
                        blurDataURL="/assets/placeholder.svg"
                        className="relative z-0"
                        height={300}
                        placeholder="blur"
                        quality={100}
                        src={cover.public_id}
                        width={400}
                      />
                      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-end h-32 p-6 text-white bg-gradient-to-b from-transparent to-black/90">
                        <h4 className="text-xl">{name}</h4>
                        {artists.map((artist) => (
                          <p key={artist}>{artist}</p>
                        ))}
                      </div>
                      {clickedProjectId === projectId &&
                        !isLoading &&
                        projectSoldOutStatus(
                          projectId,
                          isPublicSale,
                          isEarlySale
                        ) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                            <span className="text-4xl font-bold text-white">
                              {projectSoldOutStatus(
                                projectId,
                                isPublicSale,
                                isEarlySale
                              )}
                            </span>
                          </div>
                        )}
                    </button>
                  </SwiperSlide>
                )
            )}
            <style global jsx>{`
              .swiper-wrapper {
                align-items: stretch;
              }
              .swiper-slide {
                height: auto;
              }
            `}</style>
          </Swiper>
        </div>
      </div>
      <div>
        <>
          {(selectedProjectId || contractAddress) && shouldShowMintForm && (
            <MintForm
              contractAddress={contractAddress}
              currency={currency}
              earlySaleRemaining={earlySaleRemaining}
              earlySaleTotal={earlySaleTotal}
              isEarlySale={isEarlySale}
              isPhaseTwo={isPhaseTwo}
              isPublicSale={isPublicSale}
              isTestable={isTestable}
              mintPrice={mintPrice}
              passesCuratedReq={passesCuratedReq}
              pricePerTokenInWei={pricePerTokenInWei}
              projectId={selectedProjectId || ''}
              remainingForPublicMint={remainingForPublicMint}
              totalArtworks={totalArtworks}
            />
          )}
        </>
      </div>
    </div>
  );
};
