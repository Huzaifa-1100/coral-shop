import { Rule } from "sanity";

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().min(2).max(80),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule: Rule) => Rule.required().min(0),
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping in the Sanity studio
        },
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: Rule) => Rule.required().min(10).max(500),
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }], // Assuming you have a 'category' document type
        // validation: (Rule: Rule) => Rule.required()
      }
    ],
  };
  