import { TaskRepository } from "../repository/task_repository";

export class DeleteTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(userId: string, taskId: string): Promise<void> {
    return this.taskRepository.delete(userId, taskId);
  }
}
