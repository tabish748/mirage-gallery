import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import {
  DREAMERS_8000_DREAMERS,
  DREAMERS_DREAMING_OF_A_BETTER_WORLD,
} from 'utils/routes';

const DREAMERS_COVERS = {
  dreamers:
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398607/Dreamers/model1_grid_rk0ujr.jpg',
  dreamingOfABetterWorld:
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678399163/Dreamers/dreaming_of_a_better_world_poster.jpg',
};

export default function DreamersDrops() {
  return (
    <div>
      <div className="px-2 mx-auto md:px-5 max-w-screen-2xl">
        <h2 className="my-6 text-2xl">Projects</h2>
      </div>
      <div className="grid gap-3 px-2 mx-auto md:rid-cols-2 md:px-5 max-w-screen-2xl">
        <Link className="relative" href={DREAMERS_8000_DREAMERS}>
          <div className="relative z-0 overflow-hidden h-[500px]">
            <CldImage
              alt="Dreamers"
              blurDataURL="/assets/placeholder.svg"
              className="object-cover w-full h-[500px]"
              crop="thumb"
              gravity="center"
              height="500"
              placeholder="blur"
              src={DREAMERS_COVERS.dreamers}
              width="750"
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            8000 Dreamers
          </h2>
        </Link>
        <Link className="relative" href={DREAMERS_DREAMING_OF_A_BETTER_WORLD}>
          <div className="relative z-0 overflow-hidden h-[500px]">
            <CldImage
              alt="Dreaming of a better Worlds"
              className="object-cover w-full h-[500px]"
              crop="thumb"
              gravity="center"
              height="500"
              src={DREAMERS_COVERS.dreamingOfABetterWorld}
              width="750"
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            Dreaming of a better world
          </h2>
        </Link>
      </div>
    </div>
  );
}
