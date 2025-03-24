Link drive tìm hiểu và biên soạn tài liệu : https://drive.google.com/drive/folders/1tY9oESu6egeywaP2migwMIn_dFexupiq?usp=drive_link


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

Để cải thiện chất lượng và định dạng mã nguồn trong dự án NestJS, việc tích hợp ESLint và Prettier là rất quan trọng. Dưới đây là hướng dẫn chi tiết để cài đặt và cấu hình hai công cụ này trong dự án của bạn:

```sh

Bước 1: Cài đặt các gói cần thiết

Trước tiên, bạn cần cài đặt các gói liên quan đến ESLint và Prettier:


npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
Bước 2: Khởi tạo tệp cấu hình ESLint

Tiếp theo, tạo tệp cấu hình ESLint bằng cách chạy lệnh sau:


npx eslint --init
Trong quá trình này, bạn sẽ được hỏi một số câu hỏi để thiết lập cấu hình phù hợp với dự án của mình. Hãy chọn các tùy chọn phù hợp với dự án NestJS sử dụng TypeScript.

Bước 3: Cấu hình ESLint và Prettier

Sau khi khởi tạo, mở tệp .eslintrc.js và cập nhật như sau:


module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // Các quy tắc khác của bạn
  },
};
Tạo tệp .prettierrc trong thư mục gốc của dự án với nội dung:

{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "all"
}
Bước 4: Thêm các script vào package.json

Để dễ dàng chạy ESLint và Prettier, thêm các script sau vào tệp package.json:


"scripts": {
  "lint": "eslint 'src/**/*.{js,ts}'",
  "lint:fix": "eslint 'src/**/*.{js,ts}' --fix",
  "format": "prettier --write 'src/**/*.{js,ts,json,css,md}'"
}
Bước 5: Cài đặt plugin cho trình soạn thảo

Để trải nghiệm tốt hơn, bạn nên cài đặt các plugin ESLint và Prettier cho trình soạn thảo của mình, chẳng hạn như VSCode.

Bước 6: Tích hợp Husky và lint-staged (Tùy chọn)

Để đảm bảo mã nguồn luôn được kiểm tra trước khi commit, bạn có thể sử dụng Husky và lint-staged:


npm install --save-dev husky lint-staged
Thêm cấu hình sau vào package.json:


"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,ts}": [
    "eslint --fix",
    "prettier --write"
  ]
}

```