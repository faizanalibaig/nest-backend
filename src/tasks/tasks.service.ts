import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTasks(createTask: CreateTaskDto): Task {
    const { title, description } = createTask;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(...this.tasks, task);
    return task;
  }

  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id && task);

    return this.tasks;
  }

  updateStatus(id: string, status: string): TaskStatus {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error(`Task with id ${id} not found.`);
    }

    task.status = status as TaskStatus;
    return task.status;
  }
}
