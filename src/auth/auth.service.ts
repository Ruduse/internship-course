import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Role, User } from 'src/users/schema/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  // Đăng ký tài khoản
  async register(email: string, password: string, role: Role = Role.USER) {
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new ConflictException('Email đã tồn tại');
    }
  
    const user = new this.userModel({ email, password ,role });
    await user.save(); // Mật khẩu sẽ tự động được hash nhờ pre('save')
  
    return { message: 'Đăng ký thành công' };
  }
  

  // Đăng nhập và trả về token
  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Email hoặc mật khẩu không đúng');
    }

    const payload = { email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
