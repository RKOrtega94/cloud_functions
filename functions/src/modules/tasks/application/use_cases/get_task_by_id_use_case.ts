import { TaskInterface } from "../../domain/interface/task_interface";
import { TaskRepository } from "../repository/task_repository";

export class GetTaskByIdUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(userId: string, taskId: string): Promise<TaskInterface> {
    return this.taskRepository.findById(userId, taskId);
  }
}
