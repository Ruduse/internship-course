import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

// Định nghĩa các vai trò của user
export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

// Xác định schema MongoDB cho User
@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: String, enum: Role, default: Role.USER }) // Mặc định là USER
  role: Role;
}

// Tạo type UserDocument để sử dụng trong service
export type UserDocument = User & Document;

// Tạo schema Mongoose
export const UserSchema = SchemaFactory.createForClass(User);

// Middleware hash password trước khi lưu

UserSchema.pre<UserDocument>('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    console.log('--- DEBUG: TRƯỚC KHI LƯU ---');
    console.log('Email:', this.email);
    console.log('Password (hashed):', this.password);
    console.log('Role:', this.role); // Kiểm tra role có bị đổi thành 'user' không
  
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  