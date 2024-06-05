import {InjectionToken} from './application/injection-token';
import {ProductRepositoryImp} from './infrastructure/product.repository';
import {Module} from '@nestjs/common';


const infrastructure = [
  {
    provide: InjectionToken.PRODUCT_REPOSITORY,
    useClass: ProductRepositoryImp,
  },
];

@Module({
  imports: [],
  providers: [],
  controllers: [],
})
export class CaloriesModule {
}