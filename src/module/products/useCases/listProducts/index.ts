import { ProductsRepository } from '../../repositories/implementations/ProductRepository';
import { ListProductsController } from './listProductsController';
import { ListProductsUseCase } from './listProductsUseCase';

const productsRepository = ProductsRepository.getInstance();
const listProductsUseCase = new ListProductsUseCase(productsRepository);
const listProductsController = new ListProductsController(listProductsUseCase);

export { listProductsController };
