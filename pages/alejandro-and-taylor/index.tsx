import { Layout } from 'components/Layout/EthLayout';
import HeroAlejandroTaylor from 'modules/alejandro-and-taylor/components/HeroAlejandroTaylor';
import TheArtists from 'modules/alejandro-and-taylor/components/TheArtists';
import { ReactElement } from 'react';

const AlejandroTaylorPage = () => {
  return (
    <div className="w-full pb-24">
      <HeroAlejandroTaylor />
      <div className="px-2 mx-auto md:px-5 max-w-screen-2xl">
        <TheArtists />
      </div>
    </div>
  );
};

AlejandroTaylorPage.getLayout = function getLayout(page: ReactElement) {
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
export default AlejandroTaylorPage;
