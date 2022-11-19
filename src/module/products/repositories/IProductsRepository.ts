import { Product } from '../models/Product';

interface IProductsRepository {
  create({
    name,
    descriptiom,
    price,
    category,
    image,
  }: IProductDTO): Promise<Product>;
  findById(product_id: string): Promise<Product>;
  findByName(name: string): Promise<Product>;
  list(): Promise<Product[]>;
}

export { IProductsRepository };
