import { CreateTaskUseCase } from "../../application/use_cases/create_task_use_case";
import { RetrieveTasksUseCase } from "../../application/use_cases/retrieve_tasks_use_case";
import { UpdateTaskUseCase } from "../../application/use_cases/update_task_use_case";
import { TaskRepositoryImpl } from "../repository/task_repository_impl";
import { TaskFirestoreDataSource } from "../source/task_firestore_data_source";

const datasource = new TaskFirestoreDataSource();
const respository = new TaskRepositoryImpl(datasource);
const retrieveTasksUseCase = new RetrieveTasksUseCase(respository);
const createTaskUseCase = new CreateTaskUseCase(respository);
const updateTaskUseCase = new UpdateTaskUseCase(respository);

export class TaskService {
  async getAllTasks(userId: string) {
    return retrieveTasksUseCase.execute(userId);
  }

  async createTask(userId: string, task: any) {
    return createTaskUseCase.execute(userId, task);
  }

  async updateTask(userId: string, task: any) {
    return updateTaskUseCase.execute(userId, task);
  }

  async deleteTask(userId: string, taskId: string) {
    return respository.delete(userId, taskId);
  }
}
