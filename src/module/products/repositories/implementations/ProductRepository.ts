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
    descriptiom,
    price,
    category,
    image,
  }: IProductDTO): Promise<Product> {
    const [product, created]: any = await productModel.findOrCreate({
      where: { name: !name },
      defaults: {
        name,
        descriptiom,
        price,
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
    console.log(`Os dados do produto é: `, product);
    return product;
  }

  async findByName(name: string): Promise<Product> {
    const product: any = await productModel.findOne({
      where: { name: name },
    });
    console.log(`Os dados do produto é: `, product);
    return product;
  }

  async list(): Promise<Product[]> {
    const product: any = await productModel.findAll();
    console.log(`Os produtos são: `, product);
    return product;
  }
}

export { ProductsRepository };
