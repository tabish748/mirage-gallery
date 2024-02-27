/**
 * This file grabs all the messages used across the application
 */
export const FORM_ERRORS = {
  quantity: {
    REQUIRED: 'Quantity must be an integer number',
    ONLY_ONE:
      'Only one artwork per membership can be minted during the first presale phase',
    BETWEEN_1_AND_10: 'Quantity must be between 1 and 10',
  },
  membershipId: {
    REQUIRED: 'Membership ID is required in Early Sale',
  },
};
