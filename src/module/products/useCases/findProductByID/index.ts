import { ProductsRepository } from '../../repositories/implementations/ProductRepository';
import { FindProductByIDController } from './FindProductByIDController';
import { FindProductByIDUseCase } from './FindProductByIDUseCase';

const productRepository = ProductsRepository.getInstance();
const findProductByIDUseCase = new FindProductByIDUseCase(productRepository);
const findProductByIDController = new FindProductByIDController(
  findProductByIDUseCase
);

export { findProductByIDController };
