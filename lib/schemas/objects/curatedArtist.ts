import { defineField, defineType } from 'sanity';

export const curatedArtist = defineType({
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter Url',
      type: 'string',
      validation: (rule) => rule,
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'cloudinary.asset',
      validation: (rule) => rule.required(),
    }),
  ],
  name: 'curatedArtist',
  options: {
    collapsible: true,
    collapsed: true,
  },
  title: 'Artist',
  type: 'object',
});
