import { User } from '../../models/User';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  admin: boolean;
  encryptedpassword: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    name,
    phone,
    email,
    admin,
    encryptedpassword,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error('User already exists');

    return this.usersRepository.create({
      name,
      phone,
      email,
      admin,
      encryptedpassword,
    });
  }
}

export { CreateUserUseCase };
