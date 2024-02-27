# Contributing
This repo is closed to public contributions. However, feedback is welcome by opening an issue and detailing the problem

## Husky
There are 2 hooks setup that run on pre-commit and pre-push. 
* For pre-commit we run lint-staged on .ts, .tsx, .js and .jsx files.
* For pre-push we run yarn build to prevent pushes that may break the build

## Next Steps
* Missing Functionalities
  * Claim checker
  * Redirections to be compatible with old site
  * PreSale minting - code is in place but it is doing nothing when mint is pressed

* Code improvements
  * Delete unused assets of artworks, as all of them should be loaded from Cloudinary.
  * Create more reusable components like a `<BaseButton />`
  * Web3 - Adjust wagmi hooks to run on demand and not automatically. See issue [#100](https://github.com/tomasg88/mirage-gallery/issues/104)
