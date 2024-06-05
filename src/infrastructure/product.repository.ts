import {ProductRepository} from '../domain/product.repository';
import {Injectable} from '@nestjs/common';
import {Product} from '../domain/product';


@Injectable()
export class ProductRepositoryImp implements ProductRepository {

  public async save(product: Product | Product[]): Promise<void> {
  }


}
