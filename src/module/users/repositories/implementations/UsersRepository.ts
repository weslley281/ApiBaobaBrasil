import { userModel } from '../../../../database/models/usersModel';
import { ICreateUserDTO } from '../../DTO/IUserDTO';
import { User } from '../../models/User';

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
    // const user: any = await userModel.create({
    //   name,
    //   phone,
    //   email,
    //   admin,
    //   password: encryptedpassword,
    // });

    const [user, created]: any = await userModel.findOrCreate({
      where: { email: !email },
      defaults: {
        name,
        phone,
        email,
        admin,
        password: encryptedpassword,
      },
    });

    return user;
  }

  async findById(user_id: number): Promise<User> {
    const user: any = await userModel.findOne({ where: { user_id: user_id } });
    console.log(user);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user: any = await userModel.findOne({ where: { email: email } });

    return user;
  }

  async turnAdmin(user: User): Promise<User> {
    const userAdmin: any = await userModel.update(
      { admin: !user.admin },
      { where: { user_id: user.user_id } }
    );

    return userAdmin;
  }

  async list(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}

export { UsersRepository };
