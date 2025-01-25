import { TaskInterface } from "../../domain/interface/task_interface";

/**
 * TaskRepository
 */
export abstract class TaskRepository {
  /**
   * Create a task
   * @param task - TaskInterface
   * @returns Promise<TaskInterface>
   */
  abstract create(task: TaskInterface): Promise<TaskInterface>;

  /**
   * Update a task
   * @param task - TaskInterface
   * @returns Promise<TaskInterface>
   */
  abstract update(task: TaskInterface): Promise<TaskInterface>;

  /**
   * Delete a task
   * @param id - string
   * @returns Promise<void>
   */
  abstract delete(id: string): Promise<void>;

  /**
   * Find a task by id
   * @param id - string
   * @returns Promise<TaskInterface>
   */
  abstract findById(id: string): Promise<TaskInterface>;

  /**
   * Find all tasks
   * @returns Promise<TaskInterface[]>
   */
  abstract findAll(): Promise<TaskInterface[]>;
}
