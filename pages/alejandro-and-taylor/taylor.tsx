import TaylorHero from 'modules/alejandro-and-taylor/components/TaylorHero';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { AlejandroAndTaylorCollection } from 'types/alejandroAndTaylorCollections';
import { sanityClient } from 'lib/sanity.client';
import { alejandroAndTaylorCollectionsQuery } from 'lib/queries';
import { useState } from 'react';
import { FullWidthImageModal } from 'components/FullWidthImageModal/FullWidthImageModal';
import { Layout } from 'components/Layout/EthLayout';
import { ReactElement } from 'react';
const ARTIST_NAME = 'taylor';

const TaylorPage = ({
  collections,
}: {
  collections: AlejandroAndTaylorCollection[];
}) => {
  // index of current selected tab
  const [collectionSelectedIndex, setCollectionSelectedIndex] =
    useState<number>(0);

  const collectionSelected = collections[collectionSelectedIndex];

  return (
    <>
      <div className="w-full pb-24">
        <TaylorHero />
        <div className="my-10 border-b border-gray-300">
          <div className="flex items-center justify-start gap-12 px-2 py-3 mx-auto max-w-7xl">
            {collections.map(({ collectionNumber }, index) => (
              <button
                className={
                  index === collectionSelectedIndex
                    ? 'text-original'
                    : 'text-[#808080]'
                }
                key={collectionNumber}
                onClick={() => setCollectionSelectedIndex(index)}
              >
                {`Collection ${collectionNumber}`}
              </button>
            ))}
          </div>
        </div>
        <div className="px-2 mx-auto md:px-5 max-w-7xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 gap-y-20">
            {collectionSelected.images.map((collectionImage) => (
              <div key={collectionImage.image._key}>
                <>
                  <div
                    className="relative"
                    key={collectionImage.image.public_id}
                  >
                    <FullWidthImageModal
                      id={collectionImage.image.public_id}
                      url={collectionImage.image.secure_url}
                    />
                  </div>
                  <h4 className="my-3 text-sm ">{collectionImage.name}</h4>
                  {/* TODO - is status shown? */}
                  {/* <p className="text-xs uppercase">{image.status}</p> */}
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

TaylorPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      description="Taylor is a young abstract artist born in Waco, TX and raised in Austin, TX. She studied Visual Effects at the Austin Career College from 2003-2005 and has been working as a freelance illustrator since then."
      image="https://res.cloudinary.com/do1gnj1vn/image/upload/v1678571128/Alejandro%20and%20Taylor/Taylor/taylor_hero_jynxmm.jpg"
      title="Meet Taylor"
    >
      {page}
    </Layout>
  );
};
export default TaylorPage;

export const getStaticProps: GetStaticProps<{
  collections: AlejandroAndTaylorCollection;
}> = async (): Promise<
  GetStaticPropsResult<{ collections: AlejandroAndTaylorCollection }>
> => {
  const collections: AlejandroAndTaylorCollection = await sanityClient.fetch(
    alejandroAndTaylorCollectionsQuery,
    {
      artist: ARTIST_NAME,
    }
  );
  return {
    props: { collections },
  };
};
