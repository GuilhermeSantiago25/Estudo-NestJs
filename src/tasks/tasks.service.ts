import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}
  async getAllTasks(): Promise<Task[]> {
    return await this.taskRepository.getAllTasks();
  }

  async getTasksWithFilters(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return await this.taskRepository.getTasksWithFilters(filterDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.findTaskById(id);

    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return task;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    return this.taskRepository.deleteTask(id);
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    return this.taskRepository.updateTaskStatus(id, status);
  }
}
