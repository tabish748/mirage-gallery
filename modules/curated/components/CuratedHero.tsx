import { RightArrow } from 'components/Svgs/RightArrow';
import { CURATED_PAGE_SECTIONS } from 'utils/routes';

export default function CuratedHero() {
  return (
    <div
      className="w-full pt-32 pb-32 mb-24 bg-no-repeat md:pt-0 "
      style={{
        backgroundImage: "url('/assets/back-curated.jpg')",
        backgroundSize: '50vw',
        backgroundPosition: 'top right',
      }}
    >
      <div className="grid w-full gap-6 px-2 mx-auto md:px-5 md:grid-cols-2 max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-curated">CURATED</span>
          <h1 className="mt-6 text-3xl text-black lg:text-7xl">
            Innovative artworks,{' '}
            <span className="text-curated">from a variety of artists.</span>
          </h1>
          <p className="py-10 text-black">
            Unleashing AI Artistry: Diverse Creations, Infinite Inspiration
          </p>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <a
              className="p-3 text-center text-gray-800 bg-gray-100"
              href={`#${CURATED_PAGE_SECTIONS.curatedArtistForm}`}
            >
              Become a curated artist
            </a>
            <a
              className="flex items-center justify-center py-3 text-white bg-curated"
              href={`#${CURATED_PAGE_SECTIONS.mintRandomProject}`}
            >
              Mint
              <RightArrow className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
