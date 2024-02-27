import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const HeaderLink = ({
  path,
  title,
  ariaLabel,
  colorClass,
}: {
  path: string;
  title: string;
  ariaLabel: string;
  colorClass: string;
}) => {
  const router = useRouter();
  const isActive = useMemo(
    () => (router.route === path ? ' active' : ''),
    [path, router.route]
  );

  return (
    <Link
      aria-label={ariaLabel}
      className={`text-xs font-normal uppercase duration-100 cursor-pointer underline-offset-2 hover:underline page-${colorClass} ${isActive}`}
      href={path}
      key={path}
      title={ariaLabel}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
