import { TaskRepository } from "../../application/repository/task_repository";
import { TaskInterface } from "../../domain/interface/task_interface";
import { TaskFirestoreDataSource } from "../source/task_firestore_data_source";

export class TaskRepositoryImpl implements TaskRepository {
  constructor(private dataSource: TaskFirestoreDataSource) {}

  create(task: TaskInterface): Promise<TaskInterface> {
    return this.dataSource.createTask(task);
  }
  update(task: TaskInterface): Promise<TaskInterface> {
    return this.dataSource.updateTask(task.id!, task);
  }
  delete(id: string): Promise<void> {
    return this.dataSource.deleteTask(id);
  }
  findById(id: string): Promise<TaskInterface> {
    return this.dataSource.getTaskById(id);
  }
  findAll(): Promise<TaskInterface[]> {
    return this.dataSource.getAllTasks();
  }
}
