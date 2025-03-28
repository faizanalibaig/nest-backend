import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
// import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/:id')
  getTaskByid(@Param('id') id: string): Promise<Task> {
    console.log('id: ', id);
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  // @Post()
  // getAllTasks(): Task[] {
  //   return this.tasksService.getAllTasks();
  // }

  //   @Post('/createTask')
  //   createTask(
  //     @Body('title') title: string,
  //     @Body('description') description: string,
  //   ): Task {
  //     return this.tasksService.createTasks(title, description);
  //   }

  // @Get()
  // getAllTasks(@Query() taskFilterDto: GetTaskFilterDto): Task[] {
  //   console.log('taskFilterDto: ', taskFilterDto);
  //   if (Object.keys(taskFilterDto).length) {
  //     return this.tasksService.getTasksWithFilter(taskFilterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // @Post('/createTask')
  // createTask(@Body() createTask: CreateTaskDto): Task {
  //   return this.tasksService.createTasks(createTask);
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string) {
  //   console.log('id: ', id);
  //   return this.tasksService.getTaskById(id);
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   console.log('id: ', id);
  //   this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id')
  // updateStatus(
  //   @Param('id') id: string,
  //   @Body() updateStatusDto: UpdateTaskStatusDto,
  // ) {
  //   const { status } = updateStatusDto;
  //   console.log('id: ', id, 'status: ', status);
  //   return this.tasksService.updateStatus(id, status);
  // }
}
