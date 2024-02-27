import Image from 'next/image';

export default function DreamersFourDifferentCreators() {
  return (
    <div className="py-24 ">
      <div className="px-2 mx-auto max-w-screen-2xl">
        <h2 className="my-3 text-xl">The Process</h2>
      </div>
      <div className="flex flex-col w-full space-y-24">
        <section className="bg-[#f5f5f5]">
          <div className="px-2 mx-auto max-w-screen-2xl">
            <h3 className="my-3">Step 1: Base layers</h3>
            <div className="flex items-center justify-start">
              <p className="my-3 font-sans">
                Traditional artist,{' '}
                <a
                  href="https://twitter.com/wheatatreat"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @wheatatreat
                </a>
                , creates a large set of individual faces and backgrounds.
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              <div>
                <Image
                  alt="Step"
                  height={221}
                  src="/assets/theprocess/step-1-a.jpg"
                  width={720}
                />
              </div>
              <div>
                <Image
                  alt="Step"
                  height={221}
                  src="/assets/theprocess/step-1-b.jpg"
                  width={720}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-2 mx-auto max-w-screen-2xl">
            <h3 className="my-6">Step 2: Data set</h3>
            <p className="my-3 font-sans">
              Large dataset is created by scrambling up all of the faces and
              backgrounds and adding variations.
            </p>
            <div className="grid md:grid-cols-2">
              <div>
                <Image
                  alt="Step"
                  height={221}
                  src="/assets/theprocess/step-2.jpg"
                  width={720}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f5f5f5]">
          <div className="px-2 mx-auto max-w-screen-2xl">
            <h3 className="my-6">Step 3: Training</h3>
            <p className="my-3 font-sans">
              Train AI models (GANs) on the dataset created in step 2.
            </p>
            <div className="grid md:grid-cols-2">
              <div>
                <Image
                  alt="Step"
                  height={221}
                  src="/assets/theprocess/step-3.jpg"
                  width={720}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-2 mx-auto max-w-screen-2xl">
            <h3 className="my-6">Step 4: (lots of) Image Processing</h3>
            <p className="my-3 font-sans">
              The models output lots of images that were visually similar to one
              another. This step compares all and removes similar images.
            </p>
            <div className="grid md:grid-cols-2">
              <div>
                <Image
                  alt="Step"
                  className=""
                  height={221}
                  src="/assets/theprocess/step-4.jpg"
                  width={720}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f5f5f5]">
          <div className="px-2 mx-auto max-w-screen-2xl">
            <h3 className="my-6">Step 5: Traits</h3>
            <p className="my-3 font-sans">
              After hand labelling some of the outputs, a convolutional neural
              network was trained to learn how to assign traits to the rest of
              the images.We also used a pre-trained CLIP model in order to
              assign some additional traits.
            </p>
            <div className="grid">
              <div>
                <Image
                  alt="Step"
                  height={221}
                  src="/assets/theprocess/step-5.jpg"
                  width={720}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
