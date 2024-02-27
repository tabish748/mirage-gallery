import React from 'react';
import { Drop } from 'types/drops';
import styles from 'modules/curated/styles/CuratedGallery.module.css';
import { RightArrow } from 'components/Svgs/RightArrow';
import { MintStatusText } from 'modules/curated/components/DropsFilter';
import { BadgeSoldOut } from 'components/Badges/BadgeSoldOut';
import { BadgeMinting } from 'components/Badges/BadgeMinting';

type DropCoverOverlayProps = {
  artists: string[];
  name: Drop['name'];
  status: Drop['status'];
};

export const DropCoverOverlay = ({
  artists,
  name,
  status,
}: DropCoverOverlayProps) => {
  let BadgeContent;
  switch (status) {
    case 'sold-out':
      BadgeContent = <BadgeSoldOut>{MintStatusText[status]}</BadgeSoldOut>;
      break;
    case 'minting':
    case 'upcoming':
    case 'private':
      BadgeContent = <BadgeMinting>{MintStatusText[status]}</BadgeMinting>;
      break;
    default:
      BadgeContent = null;
  }

  // If the status is 'private', do not render the component
  if (status === 'private') {
    return null;
  }

  return (
    <div
      className={`group-hover:opacity-100 opacity-100 duration-500 lg:opacity-0 ${styles.dropOverlay}`}
    >
      {BadgeContent}
      <div className="flex items-end justify-between w-full">
        <div>
          <h3 className="text-lg">{name}</h3>
          {artists.map((artist) => (
            <p className="text-sm" key={artist}>
              {artist}
            </p>
          ))}
        </div>
        <RightArrow className="w-6 h-6" />
      </div>
    </div>
  );
};
