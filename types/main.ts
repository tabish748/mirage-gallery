export enum Modules {
  CURATED = 'curated',
  DREAMERS = 'dreamers',
  CRYPTO_NATIVE = 'crypto-native',
  ALEJANDRO_AND_TAYLOR = 'alejandro-and-taylor',
}

export type GeneralModulesInfo = {
  [key in Modules]: {
    ctaButton: string;
    name: string;
    subtitle: string;
    href: string;
    paragraph: string;
    samples: string[];
  };
};

export enum MembershipTiers {
  INTELLIGENT = 'intelligent',
  SENTIENT = 'sentient',
}

export type MembershipModuleInfo = {
  ctaButton: string;
  href: string;
  tiers: {
    [key in MembershipTiers]: MembershipTierInfo;
  };
};

export type MembershipTierInfo = {
  benefits: string[];
  image: string;
  imageAlt: string;
  name: string;
};
