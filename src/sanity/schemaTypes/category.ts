import { Rule } from "sanity";

export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().min(3).max(50)
      }
    ]
  }
  