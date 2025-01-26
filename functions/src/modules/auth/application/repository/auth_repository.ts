import { AuthInterface } from "../../domain/interface/auth_interface";

export abstract class AuthRepository {
  abstract findUserByEmail(email: string): Promise<AuthInterface>;
  abstract registerUser(email: string): Promise<AuthInterface>;
}
