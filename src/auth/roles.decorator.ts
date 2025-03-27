import { SetMetadata } from '@nestjs/common';

// Tạo decorator để gán role cho endpoint
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
