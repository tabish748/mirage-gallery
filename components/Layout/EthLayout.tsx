import Header from 'components/Header/HeaderWallet';
import Footer from 'components/Footer/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { OffCanvas } from 'components/OffCanvas/OffCanvasWallet';
import { Inter, Unbounded } from 'next/font/google';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import VaultProvider from 'context/VaultProvider';
import '@rainbow-me/rainbowkit/styles.css';

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string;

const { chains, publicClient } = configureChains(
  [
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [sepolia]
      : [mainnet]),
  ],
  [alchemyProvider({ apiKey }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Mirage Gallery',
  chains,
  projectId: '6468dc3f6d1540f2b1bfd0403066c19c',
});

const config = createConfig({
  autoConnect: true, // Enables reconnecting to last used connector
  connectors,
  publicClient,
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin'],
  display: 'swap',
});

export const Layout = ({
  children,
  title,
  description,
  image,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
}) => {
  const router = useRouter();
  const auxTitle =
    title && title !== '' ? `${title} | Mirage Gallery` : 'Mirage Gallery';
  const auxDesc =
    description && description !== ''
      ? description
      : 'A new generation of art.';
  const auxImage =
    image ||
    'https://res.cloudinary.com/srcouto/image/upload/v1655501065/miragegallery/ogimage_zirbxs.png';

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <VaultProvider>
          <div id="top" />
          <Head>
            <title>{auxTitle}</title>
            <meta content="follow, index" name="robots" />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <meta content={auxDesc} name="description" />
            <meta
              content={`https://miragegallery.ai/${router.asPath}`}
              property="og:url"
            />
            <link
              href={`https://miragegallery.ai${router.asPath}`}
              rel="canonical"
            />
            <meta content="website" property="og:type" />
            <meta content="miragegallery" property="og:site_name" />
            <meta content={auxDesc} property="og:description" />
            <meta content={auxTitle} property="og:title" />
            <meta content={auxImage} property="og:image" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="@miragegalleryai" name="twitter:site" />
            <meta content={auxTitle} name="twitter:title" />
            <meta content={auxDesc} name="twitter:description" />
            <meta content={auxImage} name="twitter:image" />
            <link
              href="/apple-touch-icon.png"
              rel="apple-touch-icon"
              sizes="180x180"
            />
            <link
              href="/favicon-32x32.png"
              rel="icon"
              sizes="32x32"
              type="image/png"
            />
            <link
              href="/favicon-16x16.png"
              rel="icon"
              sizes="16x16"
              type="image/png"
            />
            <link href="/site.webmanifest" rel="manifest" />
            <link
              color="#5bbad5"
              href="/safari-pinned-tab.svg"
              rel="mask-icon"
            />
            <meta content="#da532c" name="msapplication-TileColor" />
            <meta content="#1e2025" name="theme-color" />
          </Head>
          <OffCanvas />
          <Header classNames={`${inter.variable} ${unbounded.variable} `} />
          <main
            className={`${inter.variable} ${unbounded.variable} flex flex-col items-center justify-start w-full text-gray-900 min-h-[calc(100vh-6rem)] overflow-x-hidden pt-20 md:pt-24 bg-white`}
          >
            {children}
          </main>
          <Footer />
        </VaultProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
