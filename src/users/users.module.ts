import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './module/user.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs'), // Kết nối MongoDB
    UserModule,
  ],
})
export class AppModule {}
