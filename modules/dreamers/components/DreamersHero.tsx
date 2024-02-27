import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function DreamersHero() {
  return (
    <div
      className="w-full pb-64 bg-no-repeat "
      style={{
        backgroundImage: "url('/assets/back-dreamers.jpg')",
        backgroundSize: '50vw',
        backgroundPosition: 'top right',
      }}
    >
      <div className="grid w-full gap-6 px-2 pt-24 mx-auto md:pt-0 md:grid-cols-2 md:px-5 max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-dreamers">DREAMERS</span>
          <h1 className="mt-6 text-3xl text-black lg:text-7xl">
            The artistic intersection of humans and{' '}
            <span className="text-dreamers">artificial intelligence</span>.
          </h1>
          <p className="py-10 text-black">
            An experimental project focused on human and AI collaboration.
          </p>
          <div className="flex justify-start">
            <OpenSeaButtonLink href={MARKETPLACE_URLS.dreamers} />
          </div>
        </div>
      </div>
    </div>
  );
}
