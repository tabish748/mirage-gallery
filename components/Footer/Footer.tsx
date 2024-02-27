import Link from 'next/link';
import { MirageGalleryLogo } from 'components/Svgs/MirageGalleryLogo';
import { ROUTES_MAPPING } from 'utils/routes';
import { DiscordSvg } from 'components/Svgs/DiscordSvg';
import { TwitterColor, TwitterSvg } from 'components/Svgs/TwitterSvg';
import { SOCIAL_NETWORKS_URLS } from 'utils/constants';
import FooterLink from 'components/Footer/FooterLink';

export default function Footer() {
  return (
    <div className="w-full px-2 py-12 text-center bg-[#FAFAFA] border-t border-gray-200 ">
      <div className="w-full mx-auto max-w-screen-2xl">
        <div className="flex justify-start gap-6">
          <MirageGalleryLogo />
          <nav className="items-center justify-start hidden pl-6 space-x-6 border-l border-gray-200 lg:flex">
            {ROUTES_MAPPING.map((route) => {
              return (
                <FooterLink
                  ariaLabel={route.ariaLabel}
                  colorClass={route.colorClass}
                  key={route.path}
                  path={route.path}
                  title={route.title}
                />
              );
            })}
          </nav>
        </div>
        <div className="flex items-center justify-between pt-24">
          <p className="text-xs">© 2020 by Mirage Gallery LLC</p>
          <div style={{ flex: '1' }} />
          <div className="flex items-center justify-end space-x-6">
            <Link className="group" href={SOCIAL_NETWORKS_URLS.discord}>
              <DiscordSvg />
            </Link>
            <Link className="group" href={SOCIAL_NETWORKS_URLS.twitter}>
              <TwitterSvg fillColor={TwitterColor.BLACK} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
