import { Address } from 'wagmi';

export type Account = {
  address: string;
  balanceDecimals?: number;
  balanceFormatted?: string;
  balanceSymbol?: string;
  displayBalance?: string;
  displayName: string;
  ensAvatar?: string;
  ensName?: string;
  hasPendingTransactions: boolean;
};

export type ChainResponse = {
  hasIcon: boolean;
  iconBackground?: string;
  iconUrl?: string; // base64 icon
  id: number; //
  name?: string;
  unsupported?: boolean;
};

/**
 * This enum contains all the functions that Mirage Gallery Smart Contracts
 * have available:
 *  - 0xb7ec7bbd2d2193b47027247fc666fb342d23c4b5
 *  - 0xcd484E37931f62013E6BD47FdA62C21480248B47
 */
export enum FunctionNames {
  /**
   * For a presale purchase from the template contract
   */
  EARLY_MEMBER_PURCHASE = 'earlyMemberPurchase',
  /**
   * This function receives the membershipId from users
   * that want to claim their free DREAMERS artword.
   */
  CLAIM_SENTIENT_DREAMERS_READ = 'sentientClaimed',
  /**
   * This function receives the projectId and membershipId from users
   * that want to claim their free artword.
   */
  CLAIM_SENTIENT = 'claimSentient',
  /**
   * This function is called when pre sale is live, and the membership Id
   * is 50. This value means member is intelligent member.
   */
  EARLY_INTELLIGENT_PURCHASE = 'earlyIntelligentPurchase',
  /**
   * This function is called when pre sale is live and the membershipId
   * has a value from 1 to 49. These range is reserved for Sentient Members
   */
  EARLY_SENTIENT_PURCHASE = 'earlySentientPurchase',
  /**
   * This function is used to determine if a given membershipId has
   * already claimed its free artwork. For that, the function receives
   * a number (see hooks/useClaimCheck) and returns the address of the
   * owner or undefined.
   */
  OWNER_OF = 'ownerOf',
  /**
   * This function receives the projectId and returns sale information
   * like: phase of the sale, price, total available, total minted,
   * available for presale, currency
   */
  BALANCE_OF = 'balanceOf',
  /**
   * This function receives the address and returns the balance
   * of curated NFTs for the address
   */
  PROJECT_TOKEN_INFO = 'projectTokenInfo',
  /**
   * This function is used when public minting is live. It receives the
   * price (unitPrice * quantity), projectId and quantity.
   */
  PURCHASE = 'purchase',
  /**
   * This function is used to check what phase the presale is currently in
   * returns a boolean to indicated if presale Phase 2 has started.
   */
  SECOND_PRESALE_PHASE = 'secondPresalePhase',
  /**
   * This function is called when pre sale phase two is live if not a membership
   * but has above the curated hodler reuirement
   */
  EARLY_CURATED_HOLDER_PURCHASE = 'earlyCuratedHolderPurchase',
  /**
   * Checks the required balance to pass as a curated holder for early minting
   */
  CURATED_HOLDER_REQ = 'curatedHolderReq',
}

export type ProjectTokenInfoResult = {
  additionalPayee: Address;
  additionalPayeePercentage: number;
  artistAddress: Address;
  artworks: number;
  currency: string;
  earlyActive: boolean;
  maxArtworks: number;
  maxEarly: number;
  pricePerTokenInWei: bigint;
  publicActive: boolean;
  phaseTwoStatus: boolean;
};
