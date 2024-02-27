import AlejandroHero from 'modules/alejandro-and-taylor/components/AlejandroHero';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { AlejandroAndTaylorCollection } from 'types/alejandroAndTaylorCollections';
import { sanityClient } from 'lib/sanity.client';
import { alejandroAndTaylorCollectionsQuery } from 'lib/queries';
import { useState } from 'react';
import { FullWidthImageModal } from 'components/FullWidthImageModal/FullWidthImageModal';
import { Layout } from 'components/Layout/EthLayout';
import { ReactElement } from 'react';
const ARTIST_NAME = 'alejandro';

const AlejandroPage = ({
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
        <AlejandroHero />
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

AlejandroPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      description="Alejandro is a realist visual artist born in Panama in 1974. He painted landscapes during his adolescence and received his formal arts education in Panama, Barcelona and New York City."
      image="https://res.cloudinary.com/do1gnj1vn/image/upload/v1678571126/Alejandro%20and%20Taylor/Alejandro/alejandro_hero_fnflns.jpg"
      title="Meet Alejandro"
    >
      {page}
    </Layout>
  );
};
export default AlejandroPage;

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
