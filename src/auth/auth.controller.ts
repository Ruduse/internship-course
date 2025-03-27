// import { Controller, Post, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('register')
//   async register(@Body() body: { email: string; password: string }) {
//     return this.authService.register(body.email, body.password);
//   }

//   @Post('login')
//   async login(@Body() body: { email: string; password: string }) {
//     return this.authService.login(body.email, body.password);
//   }
// }
import { Controller, Post, Body, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from 'src/users/schema/user.schema';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { EmailValidationPipe } from 'src/pipes/email-validation.pipe';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name); // Thêm logger

  constructor(private readonly authService: AuthService) {
    this.logger.log('AuthController đã được khởi tạo'); // Kiểm tra
  }

//   @Post('register')
//   async register(@Body() body: { email: string; password: string; role?:Role }) {
//     this.logger.log('Gọi API /auth/register');
//     return this.authService.register(body.email, body.password, body.role);

@Post('register')
async register(
  @Body('email', EmailValidationPipe) email: string,
  @Body() createUserDto: CreateUserDto) 

{
  this.logger.log('Gọi API /auth/register');
  return this.authService.register(createUserDto.email, createUserDto.password, createUserDto.role);
}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    this.logger.log('Gọi API /auth/login');
    return this.authService.login(body.email, body.password);
  }
}
