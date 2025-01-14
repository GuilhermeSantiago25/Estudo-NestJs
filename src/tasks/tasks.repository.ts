import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TaskRepository {
  private repository: Repository<Task>;

  constructor(private dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(Task);
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.repository.find();
  }

  async getTasksWithFilters(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.repository.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        'LOWER(task.title) LIKE :search OR LOWER(task.description) LIKE :search',
        { search: `%${search}%` },
      );
    }

    return await query.getMany();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.repository.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.repository.save(task);
    return task;
  }

  async findTaskById(id: string): Promise<Task | null> {
    return await this.repository.findOneBy({ id });
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.repository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.findTaskById(id);
    task.status = status;
    await this.repository.save(task);
    return task;
  }
}
