import React from 'react';
import { Drop } from 'types/drops';
import { ArtistDetails } from './ArtistDetails';

type ArtistProps = {
  artists: Drop['artists'];
};

export const ArtistsTab = ({ artists }: ArtistProps) => {
  return (
    <div className="space-y-6">
      {artists.length &&
        artists.map((artist) => (
          <ArtistDetails artist={artist} key={artist._key} />
        ))}
    </div>
  );
};
