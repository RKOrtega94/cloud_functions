import { TaskInterface } from "../../domain/interface/task_interface";
import { TaskRepository } from "../repository/task_repository";

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(userId: string, task: TaskInterface): Promise<TaskInterface> {
    return this.taskRepository.update(userId, task);
  }
}
