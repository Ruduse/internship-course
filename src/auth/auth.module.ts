// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { MongooseModule } from '@nestjs/mongoose';

// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { User, UserSchema } from 'src/users/schema/user.schema';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { JwtStrategy } from './jwt.strategy';

// @Module({
//   imports: [
//     ConfigModule,
//     MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => ({
//         secret: configService.get<string>('JWT_SECRET'),
//         signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') },
//       }),
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService, JwtStrategy],
//   exports: [AuthService],
// })
// export class AuthModule {}
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schema/user.schema';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from './jwt-auth.guard';
@Module({
  imports: [
    ConfigModule.forRoot(), // Load biến môi trường từ .env
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), //  Lấy giá trị từ .env
        signOptions: { expiresIn: '1h' },
      }),
    }),
    
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy,JwtAuthGuard],
  exports: [AuthService,JwtModule],
})
export class AuthModule {}
