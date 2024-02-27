import { FullWidthVideoModal } from 'components/FullWidthVideoModal/FullWidthVideoModal';
import React from 'react';
import { Drop, MintStatus } from 'types/drops';
import { format, parseISO } from 'date-fns';
import { CloudinaryAsset } from 'types/cloudinary';
import { FullWidthImageModal } from 'components/FullWidthImageModal/FullWidthImageModal';
import Countdown from 'components/countdown';

type AboutTheProjectProps = {
  cover: CloudinaryAsset;
  currency?: string;
  mintPrice?: Drop['mintPrice'];
  project: Drop['project'];
  releaseDate: Drop['releaseDate'];
  sampleImages: Drop['sampleImages'];
  status: Drop['status'];
  video: Drop['video'];
  totalArtworks?: Drop['totalAmount'];
};

export const AboutTheProject = ({
  currency,
  cover,
  mintPrice,
  project,
  releaseDate,
  sampleImages,
  status,
  video,
  totalArtworks,
}: AboutTheProjectProps) => {
  currency = currency || 'ETH';
  const shouldShowPrice =
    status === MintStatus.MINTING ||
    status === MintStatus.UPCOMING ||
    status === MintStatus.PRIVATE;
  // convert big int totalartworks to int
  totalArtworks = totalArtworks ? Number(totalArtworks) : 0;

  return (
    <div>
      <p>
        {releaseDate && (
          <time>
            Release date: {format(parseISO(releaseDate), 'MMMM do, y')}
          </time>
        )}
        <br />
        {totalArtworks > 0 && (
          <>Collection size: {totalArtworks.toString()} artworks</>
        )}
      </p>
      {shouldShowPrice && (
        <h4>
          {project.id === '27' && mintPrice === 0.08 ? (
            <>
              Price:{' '}
              <span
                style={{
                  textDecoration: 'line-through',
                  marginRight: '10px',
                }}
              >
                0.12 {currency}
              </span>
              <span
                style={{
                  color: 'red',
                  marginRight: '10px',
                }}
              >
                {mintPrice} {currency}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  padding: '2px 8px',
                  backgroundColor: '#920c3c',
                  borderRadius: '5px',
                  color: 'white',
                }}
              >
                33% discount ends in:
                <span className="ml-2" style={{ display: 'inline-block' }}>
                  <Countdown />
                </span>
              </span>
            </>
          ) : (
            `Price: ${mintPrice} ${currency}`
          )}
        </h4>
      )}
      <div className="grid gap-6 mt-6 sm:grid-cols-2 md:grid-cols-4">
        {sampleImages.map((image) => (
          <div className="relative" key={image.public_id}>
            <FullWidthImageModal id={image.public_id} url={image.secure_url} />
          </div>
        ))}
      </div>
      {video && <FullWidthVideoModal cover={cover} video={video} />}
      <p className="max-w-6xl mr-auto">{project.description}</p>
    </div>
  );
};
