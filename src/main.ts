import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import mongoose from 'mongoose';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
//   console.log('🚀 Server đang chạy tại http://localhost:3000');

//   try {
//     await mongoose.connect('mongodb://localhost:27017/nestjs');
//     console.log('✅ Kết nối MongoDB thành công!');
//   } catch (error) {
//     console.error('❌ Lỗi kết nối MongoDB:', error);
//   }
// }
// bootstrap();
