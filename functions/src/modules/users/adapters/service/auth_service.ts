import { FindUserByEmailUseCase } from "../../application/use_cases/find_user_by_email_use_case";
import { RegisterUserUseCase } from "../../application/use_cases/register_user_use_case";
import { UserRepositoryImpl } from "../repository/auth_repository_impl";
import { UserFirestoreDataSource } from "../source/user_firestore_data_source";

const datasource = new UserFirestoreDataSource();
const repository = new UserRepositoryImpl(datasource);
const findUserByEmailUseCase = new FindUserByEmailUseCase(repository);
const registerUserUseCase = new RegisterUserUseCase(repository);

export class AuthService {
  async getUserByEmail(email: string) {
    return findUserByEmailUseCase.execute(email);
  }

  async registerUser(email: string) {
    return registerUserUseCase.execute(email);
  }
}
