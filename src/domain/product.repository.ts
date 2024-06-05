import {Product} from './product';


export interface ProductRepository {
  save: (product: Product | Product[]) => Promise<void>;
}