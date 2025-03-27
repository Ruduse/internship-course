// export class CreateUserDto {
//     name: string;
//     email: string;
//     role?: string;
//   }
  
//   export class UpdateUserDto {
//     name?: string;
//     email?: string;
//     role?: string;
//   }
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { Role } from '../schema/user.schema';
 // Import enum Role

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail({}, { message: 'Email không hợp lệ' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password: string; // Thêm mật khẩu

  @IsOptional() // Không bắt buộc
  @IsEnum(Role, { message: 'Role phải là user hoặc admin' })
  role?: Role;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email?: string;

  @IsOptional()
  @IsEnum(Role, { message: 'Role phải là user hoặc admin' })
  role?: Role;
}
