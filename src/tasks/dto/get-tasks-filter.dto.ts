import { TaskStatus } from '../task.model';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  @IsNotEmpty()
  status: TaskStatus;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  search: string;
}
