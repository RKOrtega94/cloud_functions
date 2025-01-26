import { TaskInterface } from "../../domain/interface/task_interface";
import { TaskRepository } from "../repository/task_repository";

export class RetrieveTasksUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(userId: string): Promise<TaskInterface[]> {
    return this.taskRepository.findAll(userId);
  }
}
