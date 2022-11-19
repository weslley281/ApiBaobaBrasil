import { Router } from 'express';
import { listProductsController } from '../module/products/useCases/listProducts';

const productsRoutes = Router();

productsRoutes.get('/product_list', (request, response) => {
  listProductsController.handle(request, response);
});

export { productsRoutes };
