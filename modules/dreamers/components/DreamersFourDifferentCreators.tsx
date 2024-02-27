import Image from 'next/image';

type Creator = {
  name: string;
  img: string;
};

const CREATORS = [
  {
    name: 'Model 1',
    img: 'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398607/Dreamers/model1_grid_rk0ujr.jpg',
  },
  {
    name: 'Model 2',
    img: 'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398607/Dreamers/model2_grid_qikt64.jpg',
  },
  {
    name: 'Dalle',
    img: 'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398607/Dreamers/dalle_grid_mvjksd.jpg',
  },
  {
    name: '@wheattreat',
    img: 'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678398607/Dreamers/wheatatreat_grid_hwggxy.jpg',
  },
];

export default function DreamersFourDifferentCreators() {
  return (
    <div className="py-24">
      <div className="mx-auto">
        <h2 className="my-6 text-xl">4 Different Creators</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 mx-auto md:grid-cols-4">
        {CREATORS.map((creator: Creator) => (
          <div className="relative" key={creator.name}>
            <div className="relative z-0 overflow-hidden aspect-square">
              <Image
                alt={`${creator.name} cover`}
                className="object-cover w-full h-[500px]"
                height={500}
                src={`${creator.img}`}
                width={600}
              />
            </div>
            <h2 className="w-full py-3 text-xl">{creator.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
