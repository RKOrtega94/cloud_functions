import { UserInterface } from "../../domain/interface/user_interface";
import { UserRepository } from "../repository/user_repository";

/**
 * RegisterUserUseCase
 */
export class RegisterUserUseCase {
  /**
   * Constructor
   *
   * @param {UserRepository} UserRepository The user repository
   * @constructor
   */
  constructor(private readonly UserRepository: UserRepository) {}

  /**
   * Execute
   *
   * @param {string} email The email of the user
   * @return {Promise<UserInterface>} The registered user
   */
  async execute(email: string): Promise<UserInterface> {
    return this.UserRepository.registerUser(email);
  }
}
