import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log(' Không có header Authorization hoặc sai định dạng');
      throw new UnauthorizedException('Token không hợp lệ!');
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = this.jwtService.verify(token);
      request.user = decoded; //  Gán user vào request
      console.log('User sau khi giải mã JWT:', decoded); // Debug
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token không hợp lệ hoặc đã hết hạn!');
    }
  }
}
