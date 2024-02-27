import Link from 'next/link';
import { ROUTES_MAPPING } from 'utils/routes';
import { MirageGalleryLogo } from 'components/Svgs/MirageGalleryLogo';
import HeaderLink from './HeaderLink';

export default function Header({ classNames }: { classNames: string }) {
  return (
    <header
      className={`${classNames} fixed top-0 left-0 right-0 z-50 px-2 py-6 bg-white border-b border-gray-200 md:h-24`}
    >
      <div className="xl:mt-[6px] flex items-center justify-start w-full mx-auto space-x-6 sm:space-x-8 max-w-screen-2xl">
        <Link className="text-black" href="/">
          <MirageGalleryLogo />
          <span className="sr-only">Mirage Gallery</span>
        </Link>
        <nav className="items-center justify-start hidden pl-6 space-x-6 border-l border-gray-200 xl:flex">
          {ROUTES_MAPPING.map((route) => {
            return (
              <HeaderLink
                ariaLabel={route.ariaLabel}
                colorClass={route.colorClass}
                key={route.path}
                path={route.path}
                title={route.title}
              />
            );
          })}
        </nav>
        <div style={{ flex: '1' }} />
      </div>
    </header>
  );
}
