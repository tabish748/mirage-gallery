import Image from 'next/image';

export const HomeSectionImagesRow = ({ samples }: { samples: string[] }) => {
  return (
    <div className="grid h-64 grid-cols-10 my-6 overflow-hidden">
      {samples.map((image, i) => (
        <div className="w-full h-64 overflow-hidden" key={`${image}-${i}`}>
          <Image
            alt="Section images"
            blurDataURL="/assets/placeholder.svg"
            className="object-cover w-full h-64 scale-105"
            height={300}
            placeholder="blur"
            quality={80}
            src={image}
            width={150}
          />
        </div>
      ))}
    </div>
  );
};
