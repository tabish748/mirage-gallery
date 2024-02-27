import { defineField, defineType } from 'sanity';

export const curated = defineType({
  fieldsets: [
    {
      description: 'Details of the drop that is about to be published',
      name: 'drop-details',
      title: 'Drop Details',
      options: { collapsed: true, collapsible: true },
    },
    {
      description:
        'Minting information about this drop to be shown on the website',
      name: 'mint-details',
      title: 'Minting Details',
      options: { collapsed: true, collapsible: true },
    },
  ],
  fields: [
    defineField({
      description: 'Name of the drop to be displayed in the website',
      fieldset: 'drop-details',
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      fieldset: 'drop-details',
      name: 'slug',
      options: { source: 'name' },
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
    }),
    defineField({
      description: 'This description will be displayed in the website',
      fieldset: 'drop-details',
      name: 'description',
      title: 'Drop Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      description: 'Marketplace URL where users can find this collection',
      fieldset: 'drop-details',
      name: 'marketplaceUrl',
      title: 'Marketplace Url',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      fieldset: 'drop-details',
      name: 'video',
      title: 'Drop Video',
      type: 'cloudinary.asset',
    }),
    defineField({
      description: 'Details of our curated artist',
      name: 'artists',
      of: [{ type: 'curatedArtist' }],
      type: 'array',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      description: 'Details of the project',
      name: 'project',
      title: 'Project',
      type: 'projectInfo',
      validation: (rule) => rule.required().error('Load project details'),
    }),
    defineField({
      name: 'sampleImages',
      of: [{ type: 'cloudinary.asset' }],
      title: 'Sample Images',
      type: 'array',
      validation: (rule) =>
        rule.required().error('You should load at least 2 art pieces'),
    }),
    defineField({
      fieldset: 'mint-details',
      name: 'releaseDate',
      title: 'Release Date',
      type: 'datetime', // https://www.sanity.io/docs/datetime-type
    }),
    defineField({
      fieldset: 'mint-details',
      initialValue: 'private',
      name: 'status',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          { value: 'sold-out', title: 'Sold Out' },
          { value: 'minting', title: 'Minting' },
          { value: 'upcoming', title: 'Upcoming' },
          { value: 'private', title: 'Private' },
        ],
      },
      title: 'Status',
      type: 'string',
    }),
    defineField({
      fieldset: 'mint-details',
      name: 'mintPrice',
      title: 'Mint Price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      fieldset: 'mint-details',
      name: 'isTestable',
      title: 'Is Testable',
      type: 'boolean',
      initialValue: false,
      description: 'Allows the drop to be testable while still private',
    }),
  ],
  name: 'drop',
  title: 'Drops',
  type: 'document',
});
