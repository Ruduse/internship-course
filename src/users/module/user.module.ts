import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { User, UserSchema } from '../schema/user.schema';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports: [AuthModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
