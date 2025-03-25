Day3
- Trả lời câu hỏi:
+ Module trong NestJS là gì? Tại sao nó quan trọng?
+ Sự khác biệt giữa @Module(), @Global(), và @Injectable()?
+ Làm thế nào để import và export các providers giữa các module?
+ Controller trong NestJS đóng vai trò gì?
+ Cách sử dụng các decorator như @Get(), @Post(), @Param(), và @Body()?
+ Provider trong NestJS là gì? Có những loại provider nào?
+ Sự khác biệt giữa @Injectable() và @Inject()?
+ Middleware là gì?
+ Làm thế nào để tạo một custom middleware trong NestJS?
+ NestJS cung cấp những built-in middleware nào?
+ Cách sử dụng middleware trong NestJS?
+ Dependency Injection (DI) là gì?
+ Lifecycle Hooks trong Nestjs là gì?
+ ConfigModule là gì?

Module trong NestJS là gì? Tại sao nó quan trọng?
```sh
  -Module là một lớp được đánh dấu bằng decorator @Module(). Decorator này cung cấp metadata giúp Nest tổ chức và quản lý cấu trúc ứng dụng một cách hiệu quả. Mỗi ứng dụng NestJS đều có ít nhất một module gốc (root module), đóng vai trò là điểm khởi đầu để Nest xây dựng đồ thị ứng dụng, một cấu trúc nội bộ giúp Nest xác định và quản lý mối quan hệ cũng như sự phụ thuộc giữa các module và provider.
  -Vì Module đóng vai trò quan trọng  trong việc tổ chức các thành phần liên quan trong ứng dụng, giúp mã nguồn trở nên rõ ràng, dễ bảo trì và mở rộng. Bằng cách nhóm các thành phần như controller, provider và các module khác vào cùng một module, Nest cho phép quản lý và tái sử dụng code một cách hiệu quả. Điều này đặc biệt hữu ích khi ứng dụng phát triển về quy mô và độ phức tạp, giúp duy trì cấu trúc rõ ràng và tránh sự phụ thuộc chồng chéo giữa các thành phần
```

Sự khác biệt giữa @Module(), @Global(), và @Injectable()?
```sh
+@Module():
Chức năng: Đánh dấu một lớp là module, giúp NestJS tổ chức và quản lý cấu trúc ứng dụng.​
Sử dụng: @Module() decorator nhận một đối tượng chứa các thuộc tính như imports, controllers, providers, và exports để định nghĩa các thành phần của module.​

+@Global():
Chức năng: Biến một module thành module toàn cục (global module), cho phép các provider trong module đó có thể được sử dụng ở bất kỳ đâu trong ứng dụng mà không cần phải import module đó vào các module khác.
Sử dụng: @Global() decorator được đặt trước @Module() decorator để chỉ định module là toàn cục.​

+@Injectable():
Chức năng: Đánh dấu một lớp là provider, cho phép lớp đó được NestJS quản lý và có thể được inject vào các lớp khác thông qua cơ chế Dependency Injection.​
Sử dụng: @Injectable() decorator được đặt trước định nghĩa của lớp để chỉ định rằng lớp đó có thể được inject.​

```
Làm thế nào để import và export các providers giữa các module?
+Xuất (export) các provider từ module nguồn:

 Trong module chứa các provider mà bạn muốn chia sẻ, thêm các provider đó vào mảng providers và đồng thời vào mảng exports để cho phép các module khác sử dụng chúng.

```sh

 Ví dụ:

import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';

@Module({
  providers: [CatsService],
  exports: [CatsService], // Xuất CatsService để các module khác có thể sử dụng
})
export class CatsModule {}

```
Trong ví dụ này, CatsService được khai báo trong mảng providers và được xuất ra thông qua mảng exports, cho phép các module khác có thể sử dụng nó khi import CatsModule.
Nhập (import) module nguồn vào module đích:

Trong module muốn sử dụng các provider đã được xuất từ module khác, bạn cần import module nguồn đó bằng cách thêm nó vào mảng imports.

 Ví dụ:
```sh


import { Module } from '@nestjs/common';
import { CatsModule } from './cats.module';
import { DogsService } from './dogs.service';

@Module({
  imports: [CatsModule], // Import CatsModule để sử dụng CatsService
  providers: [DogsService],
})
export class DogsModule {}
Trong trường hợp này, DogsModule import CatsModule, cho phép DogsService (hoặc bất kỳ provider nào trong DogsModule) có thể inject CatsService thông qua cơ chế Dependency Injection của NestJS.

```

Controller trong NestJS đóng vai trò gì?
```sh
Trong NestJS, Controller là một thành phần quan trọng chịu trách nhiệm xử lý các yêu cầu HTTP đến và gửi phản hồi tương ứng cho client. Chúng đóng vai trò là điểm đầu vào của ứng dụng, nhận các yêu cầu từ client và chuyển chúng đến các service hoặc provider thích hợp để xử lý logic nghiệp vụ. Sau đó, Controller thu thập kết quả và trả về phản hồi cho client. Điều này giúp tách biệt rõ ràng giữa tầng điều khiển (controller) và tầng xử lý nghiệp vụ (service), làm cho ứng dụng dễ bảo trì và mở rộng hơn.​

```

Cách sử dụng các decorator như @Get(), @Post(), @Param(), và @Body()?
Trong NestJS, các decorator như @Get(), @Post(), @Param(), và @Body() được sử dụng để xác định cách xử lý các yêu cầu HTTP và trích xuất dữ liệu từ chúng. Chi tiết cách sử dụng từng decorator:​
```sh

1. @Get() và @Post()
Các decorator này xác định rằng một phương thức trong controller sẽ xử lý các yêu cầu HTTP tương ứng:​
@Get(): Xử lý các yêu cầu GET.
@Post(): Xử lý các yêu cầu POST.​


Ví dụ:

import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
```​
Trong ví dụ trên, phương thức findAll() sẽ xử lý các yêu cầu GET đến đường dẫn /cats, trong khi phương thức create() sẽ xử lý các yêu cầu POST đến cùng đường dẫn.

```sh
2. @Param()
Decorator @Param() được sử dụng để trích xuất các tham số từ URL của yêu cầu.​
Ví dụ:

import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns cat with id: ${id}`;
  }
}
```
Khi một yêu cầu GET được gửi đến /cats/1, phương thức findOne() sẽ được gọi với giá trị id là '1'​
```sh
3. @Body()
Decorator @Body() được sử dụng để trích xuất dữ liệu từ phần thân (body) của yêu cầu, thường được sử dụng trong các yêu cầu POST hoặc PUT.​
Ví dụ:

import { Controller, Post, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `This action adds a new cat with the following details: ${JSON.stringify(createCatDto)}`;
  }
}

```
Provider trong NestJS là gì? Có những loại provider nào?
```sh
 -Provider là một khái niệm cốt lõi, đại diện cho bất kỳ lớp nào có thể được inject như một dependency. Các lớp như services, repositories, factories, và helpers đều có thể được coi là providers. Mục đích chính của provider là tạo mối quan hệ phụ thuộc giữa các đối tượng, và việc quản lý các đối tượng này được NestJS runtime xử lý thông qua cơ chế Dependency Injection.​
- Những loại provider chính :
+Class Providers (Sử dụng lớp): Đây là loại provider phổ biến nhất, trong đó một lớp được đánh dấu bằng decorator @Injectable() và có thể được inject vào các thành phần khác.
+Value Providers (Sử dụng giá trị): Loại provider này cung cấp một giá trị cố định, thường được sử dụng cho các cấu hình hoặc hằng số.
+Factory Providers (Sử dụng hàm tạo): Loại provider này sử dụng một hàm để tạo ra giá trị hoặc đối tượng, cho phép tùy chỉnh logic khởi tạo.
+Existing Providers (Sử dụng provider hiện có): Loại provider này cho phép một token cụ thể được ánh xạ đến một provider đã tồn tại, giúp tránh việc tạo nhiều instance cho cùng một dependency.

```

Sự khác biệt giữa @Injectable() và @Inject()?
``` sh
@Injectable():
+Chức năng: Đánh dấu một class là một provider có thể được quản lý bởi hệ thống IoC (Inversion of Control) của NestJS. Khi một class được trang bị decorator này, NestJS có thể tự động tạo và cung cấp các instance của class đó khi cần thiết.
+Sử dụng: Áp dụng cho các services, repositories, factories, hoặc bất kỳ class nào cần được inject vào các thành phần khác.​

@Inject():
+Chức năng: Cho phép inject một provider cụ thể bằng cách sử dụng một token. Decorator này hữu ích khi bạn cần kiểm soát cụ thể việc inject, chẳng hạn như khi làm việc với các custom providers hoặc khi inject các giá trị không phải là class.​
+Sử dụng: Áp dụng cho các tham số của constructor hoặc các thuộc tính trong class để chỉ định rõ ràng provider nào sẽ được inject.​

```
Middleware là gì?
```sh
Middleware là các hàm được gọi trước khi trình xử lý tuyến đường (route handler) được thực thi. Chúng có quyền truy cập vào các đối tượng request, response và hàm next() trong chu kỳ yêu cầu-phản hồi của ứng dụng. Middleware thường được sử dụng để thực hiện các tác vụ như xác thực, ghi log, xử lý lỗi hoặc thao tác với dữ liệu yêu cầu trước khi chuyển nó đến controller.
```

Làm thế nào để tạo một custom middleware trong NestJS?
```sh
Để tạo một middleware tùy chỉnh trong NestJS, có thể thực hiện theo hai phương pháp chính:​
-Sử dụng Class với Decorator @Injectable():


Bước 1: Tạo một class triển khai interface NestMiddleware và định nghĩa phương thức use().​
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Yêu cầu đến: ${req.method} ${req.url}`);
    next();
  }
}
Bước 2: Đăng ký middleware trong module bằng cách triển khai interface NestModule và sử dụng phương thức configure().​


import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController);
  }
}

-Sử dụng Hàm (Function):

Định nghĩa middleware dưới dạng hàm mà không cần triển khai interface NestMiddleware

Bước 1: Tạo hàm middleware.​


import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Yêu cầu đến: ${req.method} ${req.url}`);
  next();
}


Bước 2: Đăng ký hàm middleware trong module.​
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { logger } from './logger.middleware';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(CatsController);
  }
}
 Hàm logger sẽ được gọi mỗi khi có yêu cầu HTTP đến các tuyến đường trong CatsController.
```

NestJS cung cấp những built-in middleware nào?
 ```sh
 ​Trong NestJS, không có các middleware tích hợp sẵn (built-in middleware)
 ```


Cách sử dụng middleware trong NestJS?
```sh
-Có thể tạo Middleware Tùy Chỉnh hoặc Sử Dụng Middleware Từ Thư Viện Bên Ngoài:
Để tạo một middleware tùy chỉnh, bạn có thể định nghĩa một class với phương thức use()
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Yêu cầu đến: ${req.method} ${req.url}`);
    next();
  }
}
Áp Dụng Middleware:
Sau khi tạo middleware, bạn cần áp dụng nó vào ứng dụng. Điều này có thể được thực hiện ở cấp độ toàn cục hoặc cho các tuyến đường cụ thể.​
Toàn cục: Để áp dụng middleware cho toàn bộ ứng dụng, sử dụng phương thức use() trong tệp khởi động chính:​

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new LoggerMiddleware().use);
  await app.listen(3000);
}
bootstrap();

Cụ thể cho tuyến đường: Để áp dụng middleware cho các tuyến đường hoặc bộ điều khiển cụ thể, sử dụng MiddlewareConsumer trong module liên quan:​

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController);
  }
}

-Sử Dụng Middleware Từ Thư Viện Bên Ngoài:
NestJS hỗ trợ sử dụng các middleware từ các thư viện bên ngoài, chẳng hạn như cors, helmet, hoặc morgan. Để sử dụng, trước tiên bạn cần cài đặt gói tương ứng:​

npm install cors

Sau đó, áp dụng middleware này trong tệp khởi động:​

import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(3000);
}
bootstrap();

```


Dependency Injection (DI) là gì?
```sh
Dependency Injection (DI) là một kỹ thuật Đảo ngược Kiểm soát (Inversion of Control - IoC), trong đó việc khởi tạo các phụ thuộc được ủy thác cho hệ thống runtime của NestJS, thay vì được thực hiện trực tiếp trong mã nguồn. Điều này giúp quản lý và sử dụng các thành phần trong ứng dụng một cách hiệu quả và linh hoạt hơn.
```

Lifecycle Hooks trong Nestjs là gì?
```sh
-Lifecycle Hooks là các phương thức đặc biệt cho phép bạn can thiệp vào các giai đoạn khác nhau trong vòng đời của ứng dụng hoặc các thành phần bên trong nó. Các hooks này giúp bạn thực thi các logic cụ thể tại những thời điểm quan trọng, như khi khởi tạo hoặc hủy bỏ một module hay service.
-Các Lifecycle Hooks chính trong NestJS:onModuleInit ,onApplicationBootstrap,beforeApplicationShutdown,onModuleDestroy,afterApplicationShutdown

```

ConfigModule là gì?
```sh
-ConfigModule là một mô-đun mạnh mẽ được cung cấp bởi framework để quản lý cấu hình trong ứng dụng. Nó đơn giản hóa việc tải các biến cấu hình từ nhiều nguồn khác nhau, chẳng hạn như các biến môi trường và tệp cấu hình.
```