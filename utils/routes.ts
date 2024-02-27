export const ROUTES = {
  home: '/',
  curated: '/curated',
  dreamers: '/dreamers',
  cryptoNative: '/crypto-native',
  alejandroAndTaylor: '/alejandro-and-taylor',
  membership: '/membership',
};

export const ROUTES_MAPPING = [
  {
    title: 'Curated',
    path: ROUTES.curated,
    ariaLabel: 'Curated',
    colorClass: 'curated',
  },
  {
    title: 'Dreamers',
    path: ROUTES.dreamers,
    ariaLabel: 'Dreamers',
    colorClass: 'dreamers',
  },
  {
    title: 'Crypto Native',
    path: ROUTES.cryptoNative,
    ariaLabel: 'Crypto Native',
    colorClass: 'native',
  },
  {
    title: 'Alejandro & Taylor',
    path: ROUTES.alejandroAndTaylor,
    ariaLabel: 'Alejandro & Taylor',
    colorClass: 'original',
  },
  {
    title: 'Become a Member',
    path: ROUTES.membership,
    ariaLabel: 'Memberships',
    colorClass: 'membership',
  },
];

// CURATED
// Drop details are at root level, inside [slug].tsx page.
// This is to provide support to the URLs from the old site.
export const CURATED_DROP_DETAILS = '';
export const CURATED_PAGE_SECTIONS = {
  curatedArtistForm: 'become-curated-artist',
  mintRandomProject: 'global-mint',
};

// DREAMER PAGES
export const DREAMERS_8000_DREAMERS = '/dreamers/8000-dreamers';
export const DREAMERS_DREAMING_OF_A_BETTER_WORLD =
  '/dreamers/dreaming-a-better-world';

// ALEJANDRO & TAYLOR PAGES
export const ALEJANDRO_PAGE = '/alejandro-and-taylor/alejandro';
export const TAYLOR_PAGE = '/alejandro-and-taylor/taylor';
