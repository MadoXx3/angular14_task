import { Product } from './product';

export interface Cart {
  list: Map<number, CartItem>; // id of the item is the key
  totalCount: number;
  totalCost: number;
}

export interface CartItem {
  count: number;
  product: Product;
}
