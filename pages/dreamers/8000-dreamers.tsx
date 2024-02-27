import DreamersCollectionHero from 'modules/dreamers/components/DreamersCollectionHero';
import DreamersFourDifferentCreators from 'modules/dreamers/components/DreamersFourDifferentCreators';
import DreamersTheProcess from 'modules/dreamers/components/DreamersTheProcess';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { Layout } from 'components/Layout/EthLayout';
import { ReactElement } from 'react';

const EightThousandDreamersPage = () => {
  return (
    <Layout
      description="Each Dreamer is the combination of traditional fine-art, machine learning, and collectibles. Until further notice, there are only 1485 Dreamers."
      image="https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398607/Dreamers/wheatatreat_grid_hwggxy.jpg"
      title="8000 Dreamers"
    >
      <div className="w-full pb-24">
        <DreamersCollectionHero />
        <div className="px-2 mx-auto md:px-5 max-w-screen-2xl">
          <DreamersFourDifferentCreators />
        </div>
        <DreamersTheProcess />
        <div className="px-2 mx-auto md:px-5 max-w-screen-2xl">
          <HeroTitle>
            Dreamers are all around us. When surrounded by darkness, Dreamers
            see the light.
          </HeroTitle>
          <HeroTitle>
            Are you a <span className="underline text-dreamers">Dreamer?</span>
          </HeroTitle>
        </div>
      </div>
    </Layout>
  );
};

EightThousandDreamersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      description="Each Dreamer is the combination of traditional fine-art, machine learning, and collectibles. Until further notice, there are only 1485 Dreamers."
      image="https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398607/Dreamers/wheatatreat_grid_hwggxy.jpg"
      title="8000 Dreamers"
    >
      {page}
    </Layout>
  );
};
export default EightThousandDreamersPage;
