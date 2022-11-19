import { Response, Request } from 'express';
import { encryptPassword } from '../encryptPassword/encryptPassword';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, phone, email, birthday, admin, password } = request.body;

      const encryptedpassword = encryptPassword(password);

      const user = this.createUserUseCase.execute({
        name,
        phone,
        email,
        birthday,
        status: false,
        admin,
        encryptedpassword,
      });

      return response.status(201).json(user);
    } catch (error: any) {
      console.log(`Erro ao cadastrar usuário, mais detalhes: ${error}`);
      return response.status(400).json({ error: error.error });
    }
  }
}

export { CreateUserController };
