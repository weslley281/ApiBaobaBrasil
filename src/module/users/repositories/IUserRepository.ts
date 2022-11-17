import { ICreateUserDTO } from '../DTO/IUserDTO';
import { User } from '../models/User';

interface IUserRepository {
  create({
    name,
    phone,
    email,
    admin,
    encryptedpassword,
  }: ICreateUserDTO): Promise<User>;
  findById(user_id: Number): Promise<User>;
  findByEmail(email: string): Promise<User>;
  turnAdmin(user: User): Promise<User>;
  list(): Promise<User[]>;
}

export { IUserRepository, ICreateUserDTO };
