export const curatedTemplateAbi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_registry',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_membershipAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'ApprovalCallerNotOwnerNorApproved',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ApprovalQueryForNonexistentToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ApprovalToCurrentOwner',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ApproveToCaller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'BalanceQueryForZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MintToZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MintZeroQuantity',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OwnerQueryForNonexistentToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TokenDataQueryForNonexistentToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TransferCallerNotOwnerNorApproved',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TransferFromIncorrectOwner',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TransferToNonERC721ReceiverImplementer',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TransferToZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'URIQueryForNonexistentToken',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'artistName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'projectDescription',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'projectName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'artistAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'baseURI',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'projectWebsite',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'projectLicense',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxSupply',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxPresale',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'additionalPayeeAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'additionalPayeePercentage',
        type: 'uint256',
      },
    ],
    name: 'ProjectDetailsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: '_mintCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_mintPrice',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_artistName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_projectDescription',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_projectName',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_artistAddress',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_baseURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_projectWebsite',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_projectLicense',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_maxSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxPresale',
        type: 'uint256',
      },
    ],
    name: 'addProjectDetails',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'membershipId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_vault',
        type: 'address',
      },
    ],
    name: 'claimSentient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_membershipId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_vault',
        type: 'address',
      },
    ],
    name: 'earlyMemberPurchase',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'freezeMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxPerPublicTx',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'membershipContract',
    outputs: [
      {
        internalType: 'contract mirageContracts',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'metadataFrozen',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'presaleOpen',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'projectTokenInfo',
    outputs: [
      {
        internalType: 'address',
        name: 'artistAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'pricePerTokenInWei',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'artworks',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxArtworks',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxEarly',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'additionalPayee',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'additionalPayeePercentage',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'publicActive',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'earlyActive',
        type: 'bool',
      },
      {
        internalType: 'string',
        name: 'currency',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'publicSaleOpen',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numberOfTokens',
        type: 'uint256',
      },
    ],
    name: 'purchase',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'registry',
    outputs: [
      {
        internalType: 'contract IDelegateRegistry',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'salePrice',
        type: 'uint256',
      },
    ],
    name: 'royaltyInfo',
    outputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'royaltyFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sentientClaimOpen',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'sentientClaimed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_additionalPayee',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_additionalPayeePercentage',
        type: 'uint256',
      },
    ],
    name: 'setAdditionalPayee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'togglePresale',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'togglePublicSale',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenID',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newMirageAddress',
        type: 'address',
      },
    ],
    name: 'updateMirageAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_mintPrice',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_artistName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_projectDescription',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_projectName',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_artistAddress',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_baseURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_projectWebsite',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_projectLicense',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_maxSupply',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxPresale',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_additionalPayeeAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_additionalPayeePercentage',
        type: 'uint256',
      },
    ],
    name: 'updateProjectDetails',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_royaltyAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_royaltyAmount',
        type: 'uint256',
      },
    ],
    name: 'updateRoyaltyInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_baseTokenURI',
        type: 'string',
      },
    ],
    name: 'updateURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
