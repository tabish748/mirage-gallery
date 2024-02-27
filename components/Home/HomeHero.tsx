import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CldImage } from 'next-cloudinary';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Navigation } from 'swiper';
import { RightArrow } from 'components/Svgs/RightArrow';
import Link from 'next/link';
import { CURATED_DROP_DETAILS } from 'utils/routes';
import { HomeProps } from 'pages';

export const HomeHero = ({ drops }: { drops: HomeProps[] }) => {
  return (
    <div className="relative z-10 w-full">
      <div className="w-full">
        <h1 className="text-2xl lg:text-6xl leading-normal px-2 2xl:px-0 xl:text-[96px] max-w-screen-2xl mx-auto xl:leading-[112px] mt-12 mb-12">
          A new generation of <span className="text-[#808080]">art.</span>
        </h1>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          centeredSlides={true}
          direction={'horizontal'}
          loop={true}
          modules={[Mousewheel, Navigation]}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.01,
            thresholdDelta: 10,
            releaseOnEdges: true,
          }}
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
        >
          {drops.map((drop, index) => (
            <SwiperSlide key={`${drop?._id}-${index}`}>
              <div className="overflow-hidden">
                <div className="h-64 md:h-[450px] overflow-hidden w-full">
                  {drop.cover && (
                    <CldImage
                      alt={drop.name}
                      className="object-cover h-64 md:h-[450px] w-full"
                      crop="thumb"
                      gravity="center"
                      height="450"
                      quality={100}
                      src={drop.cover?.public_id}
                      width="747"
                    />
                  )}
                </div>
                <div className="flex justify-between w-full px-2 mt-10 md:px-0 slide-item-inview">
                  <span className="px-3 py-2 text-sm text-black bg-gray-100 rounded-full">
                    Featured drop
                  </span>
                  <Link
                    className="flex items-center justify-center px-3 py-2 text-white bg-black"
                    href={`${CURATED_DROP_DETAILS}/${drop.slug}`}
                  >
                    View drop
                    <RightArrow className="ml-2" />
                  </Link>
                </div>
                <h2 className="px-2 my-2 text-3xl text-black md:px-0 slide-item-inview">
                  {drop.name}
                </h2>
                {drop.artists.map((artist) => (
                  <p
                    className="px-2 text-black slide-item-inview md:px-0"
                    key={artist}
                  >
                    {artist}
                  </p>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
