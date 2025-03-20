import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  //   @Post('/createTask')
  //   createTask(
  //     @Body('title') title: string,
  //     @Body('description') description: string,
  //   ): Task {
  //     return this.tasksService.createTasks(title, description);
  //   }

  @Post('/createTask')
  createTask(@Body() createTask: CreateTaskDto): Task {
    return this.tasksService.createTasks(createTask);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    console.log('id: ', id);
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    console.log('id: ', id);
    this.tasksService.deleteTask(id);
  }

  @Patch('/:id')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    console.log('id: ', id, 'status: ', status);
    return this.tasksService.updateStatus(id, status);
  }
}
