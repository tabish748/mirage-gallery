const IMAGES = [
  {
    url: 'url("/assets/crypto-native/crypto-native-01.jpg")',
  },
  {
    url: 'url("/assets/crypto-native/crypto-native-02.jpg")',
  },
  {
    url: 'url("/assets/crypto-native/crypto-native-03.jpg")',
  },
  {
    url: 'url("/assets/crypto-native/crypto-native-04.jpg")',
  },
];

export default function CryptoNativeArtDevelops() {
  return (
    <div>
      {IMAGES.map(({ url }) => (
        <div className="w-full min-h-screen" key={url}>
          <div
            className="relative bg-[50%] flex items-center justify-center w-full min-h-screen mx-auto bg-fixed lg:!bg-center bg-no-repeat lg:!bg-contain"
            style={{
              backgroundImage: `${url}`,
              backgroundSize: '180vw',
              backgroundPosition: '60% 50%',
            }}
          />
        </div>
      ))}
    </div>
  );
}
