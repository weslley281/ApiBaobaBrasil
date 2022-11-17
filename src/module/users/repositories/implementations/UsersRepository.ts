import { ICreateUserDTO } from '../../DTO/IUserDTO';
import { User } from '../../models/User';
import { userModel } from '../../models/usersModel';
import { IUserRepository } from '../IUserRepository';

class UsersRepository implements IUserRepository {
  private static INSTANCE: UsersRepository;

  public static getInstance() {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  async create({
    name,
    phone,
    email,
    admin,
    encryptedpassword,
  }: ICreateUserDTO): Promise<User> {
    const user = await userModel.create({
      name,
      phone,
      email,
      admin,
      password: encryptedpassword,
    });

    return user;
  }
  findById(user_id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  turnAdmin(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
