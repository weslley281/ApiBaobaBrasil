import { response, Router } from 'express';
import { findProductByIDController } from '../module/products/useCases/findProductByID';
import { listProductsController } from '../module/products/useCases/listProducts';

const productsRoutes = Router();

productsRoutes.get('/product_list', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  listProductsController.handle(request, response);
});

productsRoutes.get('/product/:product_id', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  findProductByIDController.handle(request, response);
});

export { productsRoutes };
