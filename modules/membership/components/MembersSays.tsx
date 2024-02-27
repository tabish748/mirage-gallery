import Image from 'next/image';

export const MembersSays = () => {
  return (
    <>
      <div className="py-20 text-black">
        <h3 className="text-2xl">What our members say</h3>
        <div className="flex flex-col items-start gap-12 mt-6 md:flex-row">
          <div className="p-6 border border-gray-300">
            <p>
              &ldquo;I have always been fascinated by the intersection of
              technology and art, and I have found the perfect outlet for my
              passion with my Intelligent Membership with Mirage Gallery. This
              membership has given me a unique opportunity to support the
              emerging but also well recognised artists pushing the boundaries
              of AI art, while also building my personal art collection with
              some truly breathtaking pieces. The curation of Mirage Gallery,
              the innovation brought by the curated artists and the outstanding
              community behind the doors of Mirage are precious gems in the wild
              universe of AI NFTs!
              <br></br>
              <br></br>A key benefit of the Intelligent Membership is the
              guarantee that I will have priority access to the sale of the
              collections, which are usually highly sought after and in high
              demand. This exclusive access allowed me to mint from artists
              I&lsquo;d likely have failed to collect in a more traditional gas
              war! Above all, August is also very involved in the community and
              fosters a team spirit among members, creating a welcoming and
              supportive environment. The team is always available to answer
              questions and provide support to members, which is a testament to
              their dedication and commitment to the NFT scene in the pure
              spirit of web3!&rdquo;
            </p>
            <div className="flex mt-6">
              <Image
                alt="avatar"
                className="w-12 h-12 rounded-full"
                height={50}
                src="/assets/membership/corsicanEmperorPFP.jpeg"
                width={50}
              />
              <div className="flex flex-col ml-6">
                <a
                  className="font-medium"
                  href="https://twitter.com/CorsicanEmperor"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @CorsicanEmperor
                </a>
                <span className="text-gray-600">Intelligent member</span>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300">
            <p>
              &ldquo;It&lsquo;s hard to encapsulate in a few words the array of
              benefits that come with a Sentient Membership. The most tangible
              benefit is of course the guaranteed free mint for every single MG
              drop. There is no time limit on the claim, taking away all the
              usual stresses that can occur around minting, leaving me free to
              enjoy the innovative and varied artwork produced by the curated
              artists. I really enjoy being part of a group of dedicated
              collectors who are passionate about AI as a rapidly developing
              form of artistic expression, there is a members-only channel in
              the Discord where we can chat about the art and see sneak peeks
              from upcoming drops.
              <br></br>
              <br></br>
              August and the team really listen to and value feedback from the
              community, often making changes or launching new initiatives as a
              result of discussions with members. This adds an extra dimension
              to the membership, where I feel that rather than just being a
              collector, I get to influence the future direction of the
              platform. My MG membership is one of my most valued NFTs and I am
              very excited to see what happens next.&rdquo;
            </p>
            <div className="flex mt-6">
              <Image
                alt="avatar"
                className="w-12 h-12 rounded-full"
                height={50}
                src="/assets/membership/hall_pfp.jpeg"
                width={50}
              />
              <div className="flex flex-col ml-6">
                <a
                  className="font-medium"
                  href="https://twitter.com/42ordinarymice"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @42ordinarymice
                </a>
                <span className="text-gray-600">Sentient member</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
