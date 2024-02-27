import { defineField, defineType } from 'sanity';

export const alejandroAndTaylorCollections = defineType({
  fields: [
    defineField({
      name: 'artist',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          { value: 'alejandro', title: 'Alejandro' },
          { value: 'taylor', title: 'Taylor' },
        ],
      },
      title: 'Choose the artist',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'collectionNumber',
      title: 'Collection Number',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'collectionName',
      title: 'Collection Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      description: 'Some images from the new collection to show on the website',
      name: 'images',
      of: [{ type: 'collectionImage' }],
      title: 'Images',
      type: 'array',
      validation: (rule) => rule.required().min(3).max(24),
    }),
  ],
  name: 'alejandro-and-taylor-collections',
  preview: {
    select: {
      title: 'collectionName',
      subtitle: 'artist',
    },
  },
  title: 'Alejandro & Taylor Collections',
  type: 'document',
});
