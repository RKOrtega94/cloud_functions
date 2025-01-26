import { UserRepository } from "../../application/repository/user_repository";
import { UserInterface } from "../../domain/interface/user_interface";
import { UserFirestoreDataSource } from "../source/user_firestore_data_source";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly dataSource: UserFirestoreDataSource) {}
  registerUser(email: string): Promise<UserInterface> {
    return this.dataSource.registerUser(email);
  }

  findUserByEmail(email: string): Promise<UserInterface> {
    return this.dataSource.getUserByEmail(email);
  }
}
