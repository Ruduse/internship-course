import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class EmailValidationPipe implements PipeTransform {
  transform(value: any): string {
    if (typeof value !== 'string') {
      throw new BadRequestException('Email must be a string');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw new BadRequestException('Invalid email format');
    }

    return value;
  }
}
