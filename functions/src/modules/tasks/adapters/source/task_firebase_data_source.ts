import { TaskInterface } from "@tasks/domain/interface/task_interface";
import { FirestoreUtils } from "@utils/firestore.utils";

/**
 * TaskFirebaseDataSource
 */
export class TaskFirebaseDataSource extends FirestoreUtils<TaskInterface> {
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
