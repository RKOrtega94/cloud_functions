import { TaskRepository } from "../../application/repository/task_repository";
import { TaskInterface } from "../../domain/interface/task_interface";
import { TaskFirebaseDataSource } from "../source/task_firebase_data_source";

export class TaskRepositoryImpl implements TaskRepository {
  constructor(private dataSource: TaskFirebaseDataSource) {}

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
