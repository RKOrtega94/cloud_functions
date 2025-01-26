import { UserInterface } from "../../domain/interface/user_interface";
import { UserRepository } from "../repository/user_repository";

export class RegisterUserUseCase {
  constructor(private readonly UserRepository: UserRepository) {}

  async execute(email: string): Promise<UserInterface> {
    return this.UserRepository.registerUser(email);
  }
}
