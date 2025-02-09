import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../../../hackathon-template02/schema/product'
import { Category } from '../../../hackathon-template02/schema/category'
import Customer from './customer'
import Order from './order'
import Shipment from './shipment'
import user from './user'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    Category,
    Customer,
    Order,
    Shipment,
    user
  ],
}
