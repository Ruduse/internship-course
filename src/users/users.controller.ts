import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}// ⬅ Inject UsersService vào Controller


  @Post()
  create(@Body() users: User | User[]) {
    return this.usersService.create(users);
  }
  

  @Get()
  findAll() {
    return this.usersService.findAll();// ⬅ Gọi service đã inject.UsersService không cần tự tạo instance (new UsersService()), mà NestJS sẽ tự inject vào UsersController.
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: Partial<User>) {
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
