import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CURATED_DROP_DETAILS } from 'utils/routes';
import { DropGallery } from 'types/drops';
import { CldImage } from 'next-cloudinary';

const SIDE_SIZE = 350;

const multiply = (amount: number): number => SIDE_SIZE * amount;

const GALLERY_MAPPING = [
  { width: multiply(2), height: multiply(1) },
  { width: multiply(2), height: multiply(1) },
  { width: multiply(1), height: multiply(2) },
  { width: multiply(3), height: multiply(2) },
  { width: multiply(1), height: multiply(2) },
  { width: multiply(1), height: multiply(2) },
  { width: multiply(2), height: multiply(2) },
  { width: multiply(2), height: multiply(2) },
  { width: multiply(1), height: multiply(2) },
  { width: multiply(1), height: multiply(2) },
  { width: multiply(4), height: multiply(2) },
  { width: multiply(3), height: multiply(2) },
  { width: multiply(1), height: multiply(2) },
  { width: multiply(4), height: multiply(2) },
];

const getSideAmountByIndex = (index: number, sideName: 'width' | 'height') => {
  return GALLERY_MAPPING[index][sideName];
};

export const DropCover = ({
  drop,
  index,
}: {
  drop: DropGallery;
  index: number;
}) => {
  const [fileType, setFileType] = useState<string | null>(null);

  useEffect(() => {
    if (drop.cover && drop.cover.secure_url) {
      fetch(drop.cover.secure_url, { method: 'HEAD' })
        .then((response) => {
          if (response.ok) {
            setFileType(response.headers.get('Content-Type'));
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Error:', error);
        });
    }
  }, [drop.cover]);

  const isGifOrAvif = fileType === 'image/gif' || fileType === 'image/avif';

  return (
    <Link
      className="block w-full h-full group"
      href={`${CURATED_DROP_DETAILS}/${drop.slug}`}
    >
      {drop.cover && drop.cover.secure_url ? (
        <CldImage
          alt={drop.name}
          blurDataURL="/assets/placeholder.svg"
          className="duration-300 group-hover:scale-105"
          crop={isGifOrAvif ? undefined : 'thumb'}
          gravity={isGifOrAvif ? undefined : 'face'}
          height={getSideAmountByIndex(index, 'height')}
          placeholder="blur"
          quality={100}
          src={drop.cover?.public_id}
          width={getSideAmountByIndex(index, 'width')}
        />
      ) : (
        // TODO - show default image if drop has no cover a.k.a sampleImages
        <p className="text-xs">{'Drop has no cover!'}</p>
      )}
    </Link>
  );
};
