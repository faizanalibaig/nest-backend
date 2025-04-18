import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './tasks/tasks.repository';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      entities: [TasksRepository],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
