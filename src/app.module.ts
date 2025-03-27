// import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
// import { UsersModule } from './users/users.module';
// import { LoggerMiddleware } from './middleware/logger.middleware';
// @Module({
//   imports: [UsersModule],
// })
// export class AppModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes({
//       path: 'users',
//       method: RequestMethod.ALL,
//     });
//   }
// }
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/module/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs'), // Kết nối MongoDB
    UserModule, AuthModule,
  ],
})
export class AppModule {}
