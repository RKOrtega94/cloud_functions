import { FindUserByEmailUseCase } from "../../application/use_cases/find_user_by_email_use_case";
import { RegisterUserUseCase } from "../../application/use_cases/register_user_use_case";
import { AuthRepositoryImpl } from "../repository/auth_repository_impl";
import { AuthFirestoreDataSource } from "../source/auth_firestore_data_source";

const datasource = new AuthFirestoreDataSource("users");
const repository = new AuthRepositoryImpl(datasource);
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
