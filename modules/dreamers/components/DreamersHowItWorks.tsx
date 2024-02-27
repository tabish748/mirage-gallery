import Image from 'next/image';
const STEPS = [
  'Each 1-3 months a cause is decided on with input from the MG community and a theme is chosen.',
  'Anyone in the community is able to submit an artwork before a set deadline',
  'Dreamers holders vote and decide on their favorite artwork',
  'Winning artwork is minted and put for auction. Up to 10% goes to the artist (this is up to the artist), and the rest is donated to the cause.',
];
export default function DreamersHowItWorks() {
  return (
    <>
      <div className="grid w-full py-20 md:grid-cols-2 ">
        <ul className="flex flex-col space-y-4 text-xl">
          {STEPS.map((step, index) => (
            <li className="flex items-center justify-start" key={index}>
              <span className="inline-flex items-center justify-center w-20 h-20 mr-6 border border-gray-300 rounded-full min-w-[5rem]">
                {index + 1}
              </span>
              <p className="w-full">{step}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <Image
            alt="imagen"
            className="object-cover w-[600px]"
            height={600}
            src="/assets/dreamers/dreamers-how-it-works.jpg"
            width={600}
          />
        </div>
      </div>
    </>
  );
}
