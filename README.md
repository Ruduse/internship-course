cấu trúc thư mục trong nest js

```sh
my-nest-app/
├── src/
│   ├── app.controller.ts      # Controller chính
│   ├── app.controller.spec.ts # Test cho Controller
│   ├── app.service.ts         # Service chính
│   ├── app.module.ts          # Module gốc
│   └── main.ts                # File khởi chạy ứng dụng
├── test/
├── node_modules/
├── package.json
├── tsconfig.json
└── .eslintrc.js
Giải thích các thành phần chính:

src/: Thư mục chứa mã nguồn chính của ứng dụng.​

app.controller.ts: Định nghĩa các endpoint và xử lý yêu cầu HTTP.​

app.service.ts: Chứa logic nghiệp vụ và được sử dụng bởi controller.​

app.module.ts: Module gốc, nơi khai báo các thành phần như controller và service.​

main.ts: File khởi chạy ứng dụng NestJS.​

test/: Chứa các file kiểm thử (test) cho ứng dụng.​

node_modules/: Thư mục chứa các package mà dự án phụ thuộc, được quản lý bởi npm hoặc yarn.​

package.json: File cấu hình dự án, khai báo các package phụ thuộc và script.​

tsconfig.json: File cấu hình cho TypeScript.​

.eslintrc.js: File cấu hình ESLint để kiểm tra và định dạng mã nguồn.

```

Để tạo và đẩy code lên nhánh "tuan-1" trong Git, bạn có thể thực hiện các bước sau:
```sh
Tạo và chuyển sang nhánh "tuan-1":

Sử dụng lệnh sau để tạo nhánh mới có tên "tuan-1" và chuyển sang nhánh đó:



git checkout -b tuan-1
Lệnh này kết hợp việc tạo nhánh mới và chuyển trực tiếp sang nhánh đó.

Kiểm tra nhánh hiện tại:

Để xác nhận rằng bạn đang ở nhánh "tuan-1", sử dụng lệnh:



git branch
Nhánh hiện tại sẽ được đánh dấu bằng dấu *.

Thêm và commit các thay đổi:

Thêm tất cả các tệp đã thay đổi và commit với thông điệp phù hợp:


git add .
git commit -m "Mô tả thay đổi cho tuần 1"
Đẩy nhánh "tuan-1" lên GitHub:

Đẩy nhánh mới lên repository trên GitHub:


git push -u origin tuan-1
Lệnh này sẽ đẩy nhánh "tuan-1" lên remote "origin" và thiết lập nhánh theo dõi upstream.

```