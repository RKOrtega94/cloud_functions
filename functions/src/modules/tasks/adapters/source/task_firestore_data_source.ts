import { FirestoreUtils } from "../../../../core/utils/firestore.utils";
import { TaskInterface } from "../../domain/interface/task_interface";

/**
 * TaskFirebaseDataSource
 */
export class TaskFirestoreDataSource extends FirestoreUtils {
  constructor() {
    super("tasks");
  }

  async createTask(task: TaskInterface): Promise<TaskInterface> {
    return this.create(task);
  }

  async getTaskById(id: string): Promise<TaskInterface> {
    return this.getById(id);
  }

  async getAllTasks(): Promise<TaskInterface[]> {
    return this.getAll();
  }

  async updateTask(id: string, task: TaskInterface): Promise<TaskInterface> {
    return this.update(id, task);
  }

  async deleteTask(id: string): Promise<void> {
    return this.remove(id);
  }
}
