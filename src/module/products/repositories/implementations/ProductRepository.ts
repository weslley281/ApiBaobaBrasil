import { productModel } from '../../../../database/models/productsModel';
import { Product } from '../../models/Product';
import { IProductsRepository } from '../IProductsRepository';

class ProductsRepository implements IProductsRepository {
  private static INSTANCE: ProductsRepository;

  public static getInstance() {
    if (!ProductsRepository.INSTANCE) {
      ProductsRepository.INSTANCE = new ProductsRepository();
    }

    return ProductsRepository.INSTANCE;
  }

  async create({
    name,
    description,
    price,
    promotionPrice,
    length,
    width,
    height,
    weight,
    category,
    image,
  }: IProductDTO): Promise<Product> {
    const [product, created]: any = await productModel.findOrCreate({
      where: { name: !name },
      defaults: {
        name,
        description,
        price,
        promotionPrice,
        length,
        width,
        height,
        weight,
        category,
        image,
      },
    });

    return product;
  }

  async findById(product_id: string): Promise<Product> {
    const product: any = await productModel.findOne({
      where: { product_id: product_id },
    });

    return product;
  }

  async findByName(name: string): Promise<Product> {
    const product: any = await productModel.findOne({
      where: { name: name },
    });

    return product;
  }

  async list(): Promise<Product[]> {
    const product: any = await productModel.findAll();

    return product;
  }
}

export { ProductsRepository };
