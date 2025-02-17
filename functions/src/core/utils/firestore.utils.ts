import { firestore } from "firebase-admin";
import * as logger from "firebase-functions/logger";

/**
 * FirestoreUtils
 */
export abstract class FirestoreUtils {
  private db = firestore();

  constructor(private collection: string) {}

  /**
   * Create a new document in the collection
   *
   * @param data - The data to be saved
   * @returns The saved data with the id generated by Firestore
   */
  protected async create(data: any, reference?: string): Promise<any> {
    try {
      const collectionRef = this.db.collection(reference || this.collection);
      const ref = collectionRef.doc();
      const doc = reference ? ref : await collectionRef.add(data);
      if (reference) await ref.set(data);
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
  protected async getById(id: string, reference?: string): Promise<any> {
    logger.info(`getting: ${reference || this.collection}/${id}`);
    try {
      const doc = await this.db
        .doc(`${reference || this.collection}/${id}`)
        .get();
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
  protected async getAll(
    params?: {
      field: string;
      operator: FirebaseFirestore.WhereFilterOp;
      value: any;
    },
    reference?: string
  ): Promise<any[]> {
    try {
      let query: firestore.Query = this.db.collection(
        reference || this.collection
      );

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
  protected async update(
    id: string,
    data: any,
    reference?: string
  ): Promise<any> {
    try {
      logger.info(`${reference || this.collection}/${id}`);
      const doc = this.db.doc(`${reference || this.collection}/${id}`);
      await doc.update(data);
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
  protected async remove(id: string, reference?: string): Promise<void> {
    try {
      logger.info(`deleting: ${reference || this.collection}/${id}`);
      const doc = await this.db
        .doc(`${reference || this.collection}/${id}`)
        .get();
      if (!doc.exists) {
        throw new Error("Document not found");
      } else {
        await doc.ref.delete();
      }
    } catch (error: any) {
      throw new Error(`Failed to delete document: ${error.message}`);
    }
  }
}
