import Image from 'next/image';
import Link from 'next/link';
import { ALEJANDRO_PAGE, TAYLOR_PAGE } from 'utils/routes';

const ALEJANDRO_COVER =
  'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398974/Alejandro%20and%20Taylor/Alejandro/artist2_photos_v2_x4_zqmpvm.jpg';

const TAYLOR_COVER =
  'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398975/Alejandro%20and%20Taylor/Taylor/artist3_photos_v2_x4_d15kcs.jpg';

export default function TheArtists() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="my-6 text-2xl">The Artists</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mx-auto max-w-screen-2xl">
        <Link className="relative" href={ALEJANDRO_PAGE}>
          <div className="relative z-0 overflow-hidden">
            <Image
              alt="Alejandro"
              blurDataURL="/assets/placeholder.svg"
              className="object-cover w-full"
              height={600}
              placeholder="blur"
              quality={100}
              src={ALEJANDRO_COVER}
              width={600}
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            Alejandro
          </h2>
        </Link>
        <Link className="relative" href={TAYLOR_PAGE}>
          <div className="relative z-0 overflow-hidden">
            <Image
              alt="Taylow"
              blurDataURL="/assets/placeholder.svg"
              className="object-cover w-full"
              height={600}
              placeholder="blur"
              quality={100}
              src={TAYLOR_COVER}
              width={600}
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            Taylor
          </h2>
        </Link>
      </div>
    </div>
  );
}
