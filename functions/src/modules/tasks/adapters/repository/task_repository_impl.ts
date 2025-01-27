import { TaskRepository } from "../../application/repository/task_repository";
import { TaskInterface } from "../../domain/interface/task_interface";
import { TaskFirestoreDataSource } from "../source/task_firestore_data_source";

export class TaskRepositoryImpl implements TaskRepository {
  constructor(private dataSource: TaskFirestoreDataSource) {}

  create(userId: string, task: TaskInterface): Promise<TaskInterface> {
    return this.dataSource.createTask(userId, task);
  }
  update(userId: string, task: TaskInterface): Promise<TaskInterface> {
    return this.dataSource.updateTask(userId, task);
  }
  delete(userId: string, taskId: string): Promise<void> {
    return this.dataSource.deleteTask(userId, taskId);
  }
  findById(userid: string, id: string): Promise<TaskInterface> {
    return this.dataSource.getTaskById(userid, id);
  }
  findAll(userId: string): Promise<TaskInterface[]> {
    return this.dataSource.getAllTasks(userId);
  }
}
