import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  create(users: User | User[]): User | User[] {
    if (!Array.isArray(users)) {
      users = [users]; // Chuyển thành mảng nếu chỉ có một user
    }
  
    users.forEach(user => {
      user.id = this.users.length + 1;
      this.users.push(user);
    });
  
    return users;
  }
  

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updatedUser: Partial<User>): User | null {
    const user = this.findOne(id);
    if (!user) return null;
    Object.assign(user, updatedUser);
    return user;
  }

  remove(id: number): boolean {
    console.log('Trying to delete ID:', id);
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }
  
}
