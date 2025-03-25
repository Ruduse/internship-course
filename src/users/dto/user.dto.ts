export class CreateUserDto {
    name: string;
    email: string;
    role?: string;
  }
  
  export class UpdateUserDto {
    name?: string;
    email?: string;
    role?: string;
  }
  