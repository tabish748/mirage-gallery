import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function HeroAlejandroTaylor() {
  return (
    <div
      className="w-full pb-64 bg-no-repeat "
      style={{
        backgroundImage:
          "url('/assets/alejandrotaylor/back-alejandrotaylor.jpg')",
        backgroundSize: '50vw',
        backgroundPosition: 'top right',
      }}
    >
      <div className="grid w-full gap-6 px-2 pt-24 mx-auto md:pt-0 md:grid-cols-2 md:px-5 max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-original">
            Alejandro & Taylor
          </span>
          <h1 className="mt-6 text-3xl text-black lg:text-7xl">
            Meet the Mirage Gallery <span className="text-original">OGs</span> -
            Alejandro & Taylor
          </h1>
          <p className="py-10 text-black">
            What if an entire artist was generated with AI?
          </p>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <OpenSeaButtonLink href={MARKETPLACE_URLS.alejandroAndTaylor} />
          </div>
        </div>
      </div>
    </div>
  );
}
