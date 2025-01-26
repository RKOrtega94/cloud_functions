import { FirestoreUtils } from "../../../../core/utils/firestore.utils";
import { UserInterface } from "../../domain/interface/user_interface";

export class UserFirestoreDataSource extends FirestoreUtils {
  constructor() {
    super("users");
  }

  async getUserByEmail(email: string): Promise<UserInterface> {
    const user = await this.getAll({
      field: "email",
      operator: "==",
      value: email,
    });
    return user[0];
  }

  async registerUser(email: string): Promise<UserInterface> {
    return this.create({ email });
  }
}
