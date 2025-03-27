import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('user')
export class UserController {
  // API này chỉ cho phép Admin truy cập
  @Get('admin')
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Roles('admin')
  getAdminData() {
    return { message: 'Chỉ admin mới thấy nội dung này' };
  }

  // API này cho phép tất cả user truy cập
  @Get('profile')
  @UseGuards(JwtAuthGuard) //  Chỉ cần kiểm tra token, không cần kiểm tra role

  getUserProfile() {
    return { message: 'Thông tin user' };
  }
}
