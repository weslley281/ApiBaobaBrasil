import { Request, Response } from 'express';
import { FindProductByIDUseCase } from './FindProductByIDUseCase';

class FindProductByIDController {
  constructor(private findProductByIDUseCase: FindProductByIDUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { product_id } = request.params;

      const product = await this.findProductByIDUseCase.execute({ product_id });

      return response.status(200).json(product);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { FindProductByIDController };
