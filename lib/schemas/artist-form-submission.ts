import { defineField, defineType } from 'sanity';

export const artistFormSubmissions = defineType({
  fields: [
    defineField({
      name: 'name',
      readOnly: true,
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'twitterUser',
      readOnly: true,
      title: 'Twitter handle',
      type: 'string',
    }),
    defineField({
      name: 'email',
      readOnly: true,
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'workLink',
      readOnly: true,
      title: 'Link to example works*',
      type: 'string',
    }),
    defineField({
      name: 'description',
      readOnly: true,
      title:
        'What is unique about your work that other artists (who use AI) haven’t done before? *',
      type: 'string',
    }),
    defineField({
      name: 'creationProcess',
      readOnly: true,
      title: 'What is the story you are telling with your collection? *',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          { value: 'twitter', title: 'Twitter' },
          { value: 'email', title: 'Email' },
        ],
      },
      readOnly: true,
      title: 'Contact via:',
      type: 'string',
    }),
    defineField({
      name: 'comments',
      readOnly: true,
      title: 'Anything else you’d like to add?',
      type: 'string',
    }),
    defineField({
      description:
        'Internal use only - check the proper status of this application',
      initialValue: 'pending',
      name: 'status',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          { value: 'pending', title: 'Pending' },
          { value: 'reviewed', title: 'Reviewed' },
        ],
      },
      title: 'What is the current status of this application?',
      type: 'string',
    }),
    defineField({
      name: 'internalComments',
      title: 'Comments after review:',
      type: 'string',
    }),
  ],
  name: 'artistFormSubmission',
  title: 'Curated Artists Website Submissions',
  type: 'document',
});
