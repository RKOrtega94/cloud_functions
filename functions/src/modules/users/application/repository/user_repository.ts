import { UserInterface } from "../../domain/interface/user_interface";

export abstract class UserRepository {
  abstract findUserByEmail(email: string): Promise<UserInterface>;
  abstract registerUser(email: string): Promise<UserInterface>;
}
