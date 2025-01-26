import { UserInterface } from "../../domain/interface/user_interface";
import { UserRepository } from "../repository/user_repository";

export class FindUserByEmailUseCase {
  constructor(private readonly UserRepository: UserRepository) {}

  async execute(email: string): Promise<UserInterface> {
    return this.UserRepository.findUserByEmail(email);
  }
}
