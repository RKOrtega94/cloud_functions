import { AuthInterface } from "../../domain/interface/auth_interface";
import { AuthRepository } from "../repository/auth_repository";

export class RegisterUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(email: string): Promise<AuthInterface> {
    return this.authRepository.registerUser(email);
  }
}
