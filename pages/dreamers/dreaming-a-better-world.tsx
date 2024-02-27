import DreamersCollectionHeroBetterWorld from 'modules/dreamers/components/DreamersCollectionHeroBetterWorld';
import DreamersHowItWorks from 'modules/dreamers/components/DreamersHowItWorks';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import Image from 'next/image';
import { Layout } from 'components/Layout/EthLayout';
import { ReactElement } from 'react';

const DreamingBetterWorldPage = () => {
  return (
    <>
      <div className="w-full pb-24">
        <DreamersCollectionHeroBetterWorld />
        <div className="px-2 mx-auto md:px-5 max-w-screen-2xl">
          <HeroTitle>
            We&apos;ve all dreamed of changing the world. Envisioned the impact
            we&apos;d leave behind.
          </HeroTitle>
          <div className="flex items-center justify-center w-full">
            <Image
              alt="imagen"
              className="object-cover w-full"
              height={800}
              src="/assets/dreamers/dreamers-work-done.jpg"
              width={1700}
            />
          </div>
          <HeroTitle accentColor={'text-dreamers'} subtitle="How it works">
            We&apos;d like to introduce Dreamers: Dreaming of a better world.
          </HeroTitle>
          <p>
            Each 1-3 months, we will organize an art competition for a cause by
            selecting an art theme to inspire the conversation. Anyone can
            submit artwork, and Dreamers holders will be able to vote on their
            favorite.
          </p>
          <DreamersHowItWorks />
        </div>
      </div>
    </>
  );
};

DreamingBetterWorldPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      description="An initiative focused on using art for good. We've all dreamed of changing the world. Envisioned the impact we'd leave behind."
      image="https://res.cloudinary.com/do1gnj1vn/image/upload/v1678399163/Dreamers/dreaming_of_a_better_world_poster.jpg"
      title="Dreaming a better world"
    >
      {page}
    </Layout>
  );
};
export default DreamingBetterWorldPage;
