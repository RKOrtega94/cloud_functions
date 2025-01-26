import { FirestoreUtils } from "../../../../core/utils/firestore.utils";
import { AuthInterface } from "../../domain/interface/auth_interface";

export class AuthFirestoreDataSource extends FirestoreUtils {
  async getUserByEmail(email: string): Promise<AuthInterface> {
    const user = await this.getAll({
      field: "email",
      operator: "==",
      value: email,
    });
    return user[0];
  }

  async registerUser(email: string): Promise<AuthInterface> {
    return this.create({ email });
  }
}
