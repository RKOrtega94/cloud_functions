import { AuthRepository } from "../../application/repository/auth_repository";
import { AuthInterface } from "../../domain/interface/auth_interface";
import { AuthFirestoreDataSource } from "../source/auth_firestore_data_source";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly dataSource: AuthFirestoreDataSource) {}
  registerUser(email: string): Promise<AuthInterface> {
    return this.dataSource.registerUser(email);
  }

  findUserByEmail(email: string): Promise<AuthInterface> {
    return this.dataSource.getUserByEmail(email);
  }
}
