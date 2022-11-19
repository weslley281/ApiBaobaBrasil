import { Request, Response } from 'express';
import { ListProductsUseCase } from './ListProductsUseCase';

class ListProductsController {
  constructor(private listproductsUseCase: ListProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const products = await this.listproductsUseCase.execute();

      return response.status(200).json(products);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListProductsController };
