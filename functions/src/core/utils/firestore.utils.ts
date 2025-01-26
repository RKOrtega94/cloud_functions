import { firestore } from "firebase-admin";

/**
 * FirestoreUtils
 */
export class FirestoreUtils {
  private db = firestore();

  constructor(private collection: string) {}

  /**
   * Create a new document in the collection
   *
   * @param data - The data to be saved
   * @returns The saved data with the id generated by Firestore
   */
  async create(data: any): Promise<any> {
    try {
      const doc = await this.db.collection(this.collection).add({ ...data });
      return { id: doc.id, ...data };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * Get a document by its id
   *
   * @param id - The id of the document
   * @returns The document with the given id
   */
  async getById(id: string): Promise<any> {
    try {
      const doc = await this.db.collection(this.collection).doc(id).get();
      return doc.data();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * Get all documents in the collection
   *
   * @returns All documents in the collection
   */
  async getAll(params?: {
    field: string;
    operator: FirebaseFirestore.WhereFilterOp;
    value: any;
  }): Promise<any[]> {
    try {
      let query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> =
        this.db.collection(this.collection);

      if (params) {
        const { field, operator, value } = params;
        query = query.where(field, operator, value);
      }

      const snapshot = await query.get();

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * Update a document by its id
   *
   * @param id - The id of the document
   * @param data - The data to be updated
   * @returns The updated document
   */
  async update(id: string, data: any): Promise<any> {
    try {
      await this.db.collection(this.collection).doc(id).update(data);
      return { id, ...data };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * Delete a document by its id
   *
   * @param id - The id of the document
   */
  async remove(id: string): Promise<void> {
    try {
      await this.db.collection(this.collection).doc(id).delete();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
