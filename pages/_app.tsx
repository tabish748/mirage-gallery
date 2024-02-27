import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';

import 'styles/globals.css';
import 'styles/offcanvas.css';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, ...args: any[]) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  if (router.pathname.includes('/mg-admin')) {
    return <Component {...pageProps} />;
  }

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(
    <>
      <Component {...pageProps} />
      <Analytics />
    </>,
    pageProps
  );
}
