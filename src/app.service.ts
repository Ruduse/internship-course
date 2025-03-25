import { Injectable } from '@nestjs/common';
import * as readline from 'readline';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// // Decorator để log khi gọi phương thức
// function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Gọi phương thức ${propertyKey} với giá trị:`, args);
//         return originalMethod.apply(this, args);
//     };
// }

// // Class Generic lưu trữ dữ liệu
// class Storage<T> {
//     private items: T[] = [];

//     @LogMethod
//     addItem(item: T): void {
//         this.items.push(item);
//     }

//     getAllItems(): T[] {
//         return this.items;
//     }
// }

// // Class quản lý điểm số
// class ScoreService {
//     private scoreStorage = new Storage<number>();

//     @LogMethod
//     addScore(score: number): string {
//         if (score < 0 || score > 10) {
//             return 'Invalid score! Please enter a value between 0 and 10.';
//         }
//         this.scoreStorage.addItem(score);
//         return `Added score: ${score}`;
//     }

//     getScores(): number[] {
//         return this.scoreStorage.getAllItems();
//     }

//     // Function sử dụng Union Type
//     formatScore(value: number | string): string {
//         if (typeof value === 'number') {
//             return `Điểm số là: ${value.toFixed(1)}`;
//         } else {
//             return `Điểm số dưới dạng chuỗi: "${value}"`;
//         }
//     }
// }

// // Hàm nhập dữ liệu từ bàn phím
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const scoreService = new ScoreService();

// function askForScore() {
//     rl.question("Nhập điểm (0-10) hoặc 'exit' để thoát: ", (input) => {
//         if (input.toLowerCase() === 'exit') {
//             console.log("Danh sách điểm:", scoreService.getScores());
//             rl.close();
//             return;
//         }

//         const score = parseFloat(input);
//         if (isNaN(score)) {
//             console.log(scoreService.formatScore(input)); // Test union type với string
//         } else {
//             console.log(scoreService.addScore(score));
//             console.log(scoreService.formatScore(score)); // Test union type với number
//         }

//         askForScore(); // Gọi lại để tiếp tục nhập
//     });
// }

// // Chạy chương trình
// askForScore();
