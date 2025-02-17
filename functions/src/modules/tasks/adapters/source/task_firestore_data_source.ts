import { FirestoreUtils } from "../../../../core/utils/firestore.utils";
import { TaskInterface } from "../../domain/interface/task_interface";

/**
 * TaskFirebaseDataSource
 */
export class TaskFirestoreDataSource extends FirestoreUtils {
  constructor() {
    super("tasks");
  }

  async createTask(
    userId: string,
    task: TaskInterface
  ): Promise<TaskInterface> {
    return this.create(
      { ...task, createdAt: Date.now(), updatedAt: Date.now() },
      `users/${userId}/tasks`
    );
  }

  async getTaskById(userid: string, id: string): Promise<TaskInterface> {
    return this.getById(id, `users/${userid}/tasks`);
  }

  async getAllTasks(userId: string): Promise<TaskInterface[]> {
    return this.getAll(undefined, `users/${userId}/tasks`);
  }

  async updateTask(
    userId: string,
    task: TaskInterface
  ): Promise<TaskInterface> {
    return this.update(
      task.id!,
      { ...task, updatedAt: Date.now() },
      `users/${userId}/tasks`
    );
  }

  async deleteTask(userId: string, taskId: string): Promise<void> {
    return this.remove(taskId, `users/${userId}/tasks`);
  }
}
