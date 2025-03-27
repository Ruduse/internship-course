
// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}

//   canActivate(context: ExecutionContext): boolean {
//     const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
//     if (!requiredRoles) {
//       return true;
//     }

//     const request = context.switchToHttp().getRequest();
//     const user = request.user;

//     console.log('User Role:', user.role); // Debug xem role nhận được là gì

//     return requiredRoles.includes(user.role);
//   }
// }
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    //  Kiểm tra nếu user không tồn tại
    if (!user) {
      console.error('User không tồn tại trong request!');
      throw new UnauthorizedException('Bạn chưa đăng nhập!');
    }

    console.log('User Role:', user.role); // Debug xem role có đúng không

    return requiredRoles.includes(user.role);
  }
}
