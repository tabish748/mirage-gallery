import { defineField, defineType } from 'sanity';

export const collectionImage = defineType({
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'cloudinary.asset',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  name: 'collectionImage',
  title: 'Collection Image',
  type: 'object',
});
