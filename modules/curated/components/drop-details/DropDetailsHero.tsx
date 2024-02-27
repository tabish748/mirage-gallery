import { CldImage } from 'next-cloudinary';
import { Drop } from 'types/drops';
import { MintStatusText } from 'modules/curated/components/DropsFilter';
import { SansaButtonLink } from 'components/Link/SansaButtonLink';
import { CloudinaryAsset } from 'types/cloudinary';
import { BadgeSoldOut } from 'components/Badges/BadgeSoldOut';
import { BadgeMinting } from 'components/Badges/BadgeMinting';

type DropDetailsHeroProps = {
  cover: CloudinaryAsset;
  description: Drop['description'];
  marketplaceUrl: Drop['marketplaceUrl'];
  name: Drop['name'];
  status: Drop['status'];
  artists: Drop['artists'];
};

function convertUrlsToLinks(text: string) {
  const urlRegex = /((https?:\/\/)[^\s]+)/gi;
  return text.replace(
    urlRegex,
    '<a href="$1" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">$1</a>'
  );
}

export const DropDetailsHero = ({
  cover,
  description,
  marketplaceUrl,
  name,
  status,
  artists,
}: DropDetailsHeroProps) => {
  const soldOut = status === 'sold-out';

  description = convertUrlsToLinks(description.replace(/\\n/g, '<br />'));

  const artistNamesHTML = artists
    .map((artist) => {
      const artistName = artist.name || artist._key;
      return artist.twitterUrl
        ? `<a href="${artist.twitterUrl}" target="_blank" rel="noopener noreferrer">${artistName}</a>`
        : artistName;
    })
    .join(', ');

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

  return (
    <>
      <div className="w-full h-[300px]">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-32 md:w-[300px] bg-gradient-to-r from-white via-white/30 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-32 md:w-[300px] bg-gradient-to-l from-white via-white/30 to-transparent" />
          <CldImage
            alt={name}
            blurDataURL="/assets/placeholder.svg"
            className="object-cover w-full h-[300px]"
            height={300}
            placeholder="blur"
            quality={90}
            src={cover.public_id}
            width={1600}
          />
        </div>
      </div>
      <div className="px-2 mx-auto md:px-5 max-w-screen-2xl">
        <div className="flex items-center justify-between my-6">
          {BadgeContent}
          {soldOut && marketplaceUrl && (
            <div className="flex justify-end">
              <SansaButtonLink href={marketplaceUrl} />
            </div>
          )}
        </div>
        <h2 className="text-3xl">
          {name} by{' '}
          <span dangerouslySetInnerHTML={{ __html: artistNamesHTML }}></span>
        </h2>
        <p
          className="mt-6 mb-20 md:w-1/2"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </>
  );
};
