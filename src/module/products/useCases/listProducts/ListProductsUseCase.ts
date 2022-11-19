import { Product } from '../../models/Product';
import { IProductsRepository } from '../../repositories/IProductsRepository';

class ListProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  execute(): Promise<Product[]> {
    return this.productsRepository.list();
  }
}

export { ListProductsUseCase };
