import Image from 'next/image';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { TwitterEmptySvg } from 'components/Svgs/TwitterEmptySvg';
import { EmailEmptyIcon } from 'components/Svgs/EmailEmptyIcon';
import { useState } from 'react';
import { CURATED_PAGE_SECTIONS } from 'utils/routes';

type ArtistForm = {
  _type: string;
  comments: string;
  contact: 'twitter' | 'email' | null;
  creationProcess: string;
  description: string;
  email: string;
  name: string;
  status: 'pending' | 'reviewed'; // for internal use - hidden in form
  twitterUser: string;
  workLink: string;
};

const TWITTER = 'twitter';
const EMAIL = 'email';

const initialForm: ArtistForm = {
  _type: 'artistFormSubmission',
  comments: '',
  contact: null,
  creationProcess: '',
  description: '',
  email: '',
  name: '',
  status: 'pending',
  twitterUser: '',
  workLink: '',
};

export const CuratedArtistForm = (): JSX.Element => {
  const [form, setForm] = useState<ArtistForm>(initialForm);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch('/api/curated-artist-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.status === 500) {
          throw Error('Internal Server Error');
        }
        setForm(initialForm);
        setSubmissionMessage('Thanks for submitting!');
      })
      .catch(() => {
        setSubmissionMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div
      className="flex flex-col px-1 py-20 mx-auto md:px-5 max-w-screen-2xl"
      id={CURATED_PAGE_SECTIONS.curatedArtistForm}
    >
      <HeroTitle accentColor={'text-curated'} subtitle="Apply">
        Become a curated artist
      </HeroTitle>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <form
          className="grid gap-6 mb-6 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col mt-6">
            <span className="mb-2 font-sans text-sm font-bold text-black">
              Name
            </span>
            <input
              className="w-full hover:ring-2 hover:ring-curated ring-0 duration-300 outline-none p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              name={'name'}
              onChange={handleOnChange}
              placeholder="Claude Mon.AI"
              required
              type="text"
              value={form.name}
            />
          </label>
          <label className="flex flex-col mt-6">
            <span className="mb-2 font-sans text-sm font-bold text-black">
              Twitter handle
            </span>
            <input
              className="w-full hover:ring-2 hover:ring-curated ring-0 duration-300 outline-none p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              name={'twitterUser'}
              onChange={handleOnChange}
              placeholder="@ClaudeMonAI"
              type="text"
              value={form.twitterUser}
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold text-black">
              Email
            </span>
            <input
              className="w-full hover:ring-2 hover:ring-curated ring-0 duration-300 outline-none p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              name={'email'}
              onChange={handleOnChange}
              placeholder="ClaudeMonAI@gmail.com"
              type="email"
              value={form.email}
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold text-black">
              Link to example works
            </span>
            <input
              className="w-full hover:ring-2 hover:ring-curated ring-0 duration-300 outline-none p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              name={'workLink'}
              onChange={handleOnChange}
              placeholder="Please submit a google drive folder (not a linktree)"
              required
              type="text"
              value={form.workLink}
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold text-black">
              What is unique about your work that other artists (who use AI)
              haven’t done before?
            </span>
            <textarea
              className="w-full hover:ring-2 hover:ring-curated ring-0 duration-300 outline-none p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
              name={'description'}
              onChange={handleOnChange}
              placeholder="My work is innovative because"
              required
              value={form.description}
            ></textarea>
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold text-black">
              What is the story you are telling with your collection?
            </span>
            <textarea
              className="w-full hover:ring-2 hover:ring-curated ring-0 duration-300 outline-none p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
              name={'creationProcess'}
              onChange={handleOnChange}
              placeholder="I'm telling a story about..."
              required
              value={form.creationProcess}
            ></textarea>
          </label>
          <div className="md:col-span-2">
            <label className="block mb-2 font-sans text-sm font-bold text-black">
              Would you prefer contact via Twitter or Email?
            </label>
            <div className="grid w-1/2 grid-cols-2 gap-3 ">
              <div>
                <input
                  className="hidden peer"
                  id="contactTwitter"
                  name="contact"
                  onChange={handleOnChange}
                  type="radio"
                  value={TWITTER}
                />
                <label
                  className="flex items-center justify-center gap-2 py-2 text-sm text-black bg-gray-100 border border-gray-300 cursor-pointer hover:bg-gray-200 peer-checked:bg-curated peer-checked:text-white peer-checked:fill-white"
                  htmlFor="contactTwitter"
                >
                  <TwitterEmptySvg />
                  Twitter
                </label>
              </div>
              <div>
                <input
                  className="hidden peer"
                  id="contactEmail"
                  name="contact"
                  onChange={handleOnChange}
                  type="radio"
                  value={EMAIL}
                />
                <label
                  className="flex items-center justify-center gap-2 py-2 text-sm text-black bg-gray-100 border border-gray-300 cursor-pointer hover:bg-gray-200 stroke-black peer-checked:bg-curated peer-checked:text-white peer-checked:stroke-white"
                  htmlFor="contactEmail"
                >
                  <EmailEmptyIcon />
                  Email
                </label>
              </div>
            </div>
          </div>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold text-black">
              Anything else you’d like to add?
            </span>
            <textarea
              className="w-full hover:ring-2 hover:ring-curated ring-0 duration-300 outline-none p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
              name="comments"
              onChange={handleOnChange}
              placeholder="Nope"
              value={form.comments}
            ></textarea>
          </label>
          <div>
            <button
              className="flex items-center justify-center w-56 py-3 text-white duration-300 bg-curated px-9"
              type="submit"
            >
              Apply
            </button>
            <div className="text-center">{submissionMessage}</div>
          </div>
        </form>
        <div className="flex items-center justify-center mt-12">
          <Image
            alt="imagen"
            className="object-cover h-full mb-12 shadow-2xl md:w-[565px]"
            height={1000}
            src="/assets/curated/become-a-curated-artist.jpg"
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};
