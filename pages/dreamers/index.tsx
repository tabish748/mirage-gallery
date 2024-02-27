import DreamersHero from 'modules/dreamers/components/DreamersHero';
import DreamersDrops from 'modules/dreamers/components/DreamersDrops';
import { Layout } from 'components/Layout/EthLayout';
import { ReactElement } from 'react';

const DreamersPage = () => {
  return (
    <div className="w-full pb-24">
      <DreamersHero />
      <DreamersDrops />
    </div>
  );
};

DreamersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      description="The artistic intersection of humans and artificial intelligence. An experimental project focused on human and AI collaboration."
      image="https://res.cloudinary.com/do1gnj1vn/image/upload/v1686442685/Social%20share%20images/dreamers_retro_lg9sjt.jpg"
      title="Dreamers"
    >
      {page}
    </Layout>
  );
};
export default DreamersPage;
