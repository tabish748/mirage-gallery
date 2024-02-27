import HeroCryptoNative from 'modules/crypto-native/components/HeroCryptoNative';
import CryptoNativeArtDevelops from 'modules/crypto-native/components/ArtDevelops';
import AboutCryptoNative from 'modules/crypto-native/components/AboutCryptoNative';
import LockAssets from 'modules/crypto-native/components/LockAssets';
import CryptoNativeBestPhase from 'modules/crypto-native/components/BestPhase';
import TokenDistribution from 'modules/crypto-native/components/TokenDistribution';
import { Layout } from 'components/Layout/EthLayout';
import { ReactElement } from 'react';

const CryptoNativePage = () => {
  return (
    <div className="w-full pb-24">
      <HeroCryptoNative />
      <div className="px-2 mx-auto md:px-5 max-w-screen-2xl">
        <CryptoNativeArtDevelops />
        <AboutCryptoNative />
        <LockAssets />
        <CryptoNativeBestPhase />
        <TokenDistribution />
      </div>
    </div>
  );
};

CryptoNativePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      description="Artworks that evolve with each sale. Crypto Native was created specifically for art that is natively digital"
      image="https://res.cloudinary.com/do1gnj1vn/image/upload/v1679882076/Crypto%20Native/thumbnail.jpg"
      title="Crypto Native"
    >
      {page}
    </Layout>
  );
};
export default CryptoNativePage;
