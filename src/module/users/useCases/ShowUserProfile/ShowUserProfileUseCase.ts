import { User } from '../../models/User';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  user_id: number;
}

class ShowUserProfileUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(user_id);

    if (!user) throw new Error('User not exists');

    return this.userRepository.findById(user_id);
  }
}

export { ShowUserProfileUseCase };
