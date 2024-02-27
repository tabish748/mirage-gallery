import { defineField, defineType } from 'sanity';

export const projectInfo = defineType({
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule,
    }),
    defineField({
      name: 'id',
      title: 'Id',
      type: 'string',
      validation: (rule) => rule,
    }),
    defineField({
      name: 'contractAddress',
      title: 'Contract Address',
      type: 'string',
      validation: (rule) => rule,
    }),
  ],
  name: 'projectInfo',
  options: {
    collapsible: true,
    collapsed: true,
  },
  title: 'Project Information',
  type: 'object',
});
