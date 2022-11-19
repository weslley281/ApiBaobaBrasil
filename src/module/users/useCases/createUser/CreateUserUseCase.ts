import { User } from '../../models/User';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  status: boolean;
  admin: boolean;
  encryptedpassword: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({
    name,
    phone,
    email,
    birthday,
    status,
    admin,
    encryptedpassword,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error('User already exists');

    return this.usersRepository.create({
      name,
      phone,
      email,
      birthday,
      status,
      admin,
      encryptedpassword,
    });
  }
}

export { CreateUserUseCase };
