import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CldImage } from 'next-cloudinary';
import { Drop } from 'types/drops';
import { CloudinaryAsset } from 'types/cloudinary';

type FullWidthVideoModalProps = {
  cover: CloudinaryAsset;
  video: Drop['video'];
};

export const FullWidthVideoModal = ({
  cover,
  video,
}: FullWidthVideoModalProps) => {
  const videoUrl = video.url.replace('upload/', 'upload/q_auto,f_auto/');

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="relative my-6 overflow-hidden rounded-2xl">
            <button
              className="absolute inset-0 flex items-center justify-center bg-gray-900/60"
              type="button"
            >
              <div className="w-20 h-20 duration-300 cursor-pointer hover:scale-110">
                <svg
                  fill="none"
                  height="78"
                  width="78"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M76.5 39v0c0 20.712-16.788 37.5-37.5 37.5v0C18.288 76.5 1.5 59.712 1.5 39v0C1.5 18.288 18.288 1.5 39 1.5v0c20.712 0 37.5 16.788 37.5 37.5Z"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    clipRule="evenodd"
                    d="m34.586 26.742 16.175 9.567c2.046 1.208 2.046 4.17 0 5.379l-16.175 9.566c-2.084 1.234-4.717-.27-4.717-2.691v-19.13c0-2.42 2.633-3.924 4.717-2.691v0Z"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </button>
            <CldImage
              alt="imagen"
              blurDataURL="/assets/placeholder.svg"
              className="object-cover w-full h-auto aspect-square sm:aspect-auto"
              crop="thumb"
              gravity="face"
              height={500}
              placeholder="blur"
              src={cover.public_id}
              width={1200}
            />
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className=" bg-white/80 backdrop-blur-lg data-[state=open]:animate-overlayShow fixed z-[9999] inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow rounded-2xl overflow-hidden fixed z-[10000] top-1/2 left-1/2 max-h-[680px] w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 bg-white focus:outline-none">
            <video autoPlay controls>
              <source src={videoUrl} type="video/mp4"></source>
            </video>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
