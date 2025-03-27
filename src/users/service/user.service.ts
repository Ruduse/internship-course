import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { User, UserDocument } from '../schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Tạo user
  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  // Lấy danh sách user với pagination & search
  async findAll(page = 1, limit = 10, search = '') {
    const filter = search ? { name: new RegExp(search, 'i') } : {}; // Tìm kiếm theo name (không phân biệt hoa/thường)
    const users = await this.userModel
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const total = await this.userModel.countDocuments(filter).exec();
    return { users, total, page, limit };
  }

  // Lấy user theo ID
  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('User không tồn tại');
    return user;
  }

  // Cập nhật user
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    if (!updatedUser) throw new NotFoundException('User không tồn tại');
    return updatedUser;
  }

  // Xóa user
  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) throw new NotFoundException('User không tồn tại');
    return deletedUser;
  }
}
