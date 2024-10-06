import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category],
}

// create products schema in sanity which includes the followin field
// product name
// price
// product image
// description