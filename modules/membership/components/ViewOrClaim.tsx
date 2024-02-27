import { HTMLAttributes } from 'react';
import { MARKETPLACE_URLS } from 'utils/constants';

type FilterButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const ViewOrClaim = ({ children }: FilterButtonProps) => {
  return (
    <>
      <div className="md:pt-10">
        <div className="grid gap-12 md:grid-cols-2">
          <a
            className="p-6 text-black border border-gray-200"
            href={MARKETPLACE_URLS.membership}
            rel="noreferrer"
            target="_blank"
          >
            <div className="h-32 ">
              <h3 className="mt-3 text-lg">Looking to buy a membership?</h3>
              <p className="font-sans">
                Minting is closed but you’re still able to purchase a membership
                on the secondary market.
              </p>
            </div>
            <p className="text-3xl">View on OpenSea</p>
          </a>
          {children}
        </div>
      </div>
    </>
  );
};
