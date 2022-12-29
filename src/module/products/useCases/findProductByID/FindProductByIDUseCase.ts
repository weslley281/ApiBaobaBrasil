import { Product } from 'module/products/models/Product';
import { IProductsRepository } from 'module/products/repositories/IProductsRepository';

interface IRequest {
  product_id: string;
}

class FindProductByIDUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute({ product_id }: IRequest): Promise<Product> {
    return await this.productsRepository.findById(product_id);
  }
}

export { FindProductByIDUseCase };
