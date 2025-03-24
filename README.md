Day1
Bài tập
- Trả lời câu hỏi:

+ Backend Development là gì và tại sao nó quan trọng trong phát triển ứng dụng?
+ Các thành phần chính của một hệ thống backend?
+ Sự khác biệt giữa backend và frontend?
+ TypeScript là gì?
+ Redis là gì ?
+ NestJS là gì?
+ ESLint là gì?
+ Prettier là gì?
+ package.json là gì?
+ dependencies vs devDependencies?
+ Sự khác biệt giữa git merge và git rebase?
+ Sự khác nhau giữa git reset, git checkout và git revert?

Backend Development là gì và tại sao nó quan trọng trong phát triển ứng dụng?
```sh
-Backend Development là quá trình xây dựng và duy trì các thành phần phía máy chủ của một ứng dụng hoặc trang web. Phần backend bao gồm máy chủ, cơ sở dữ liệu và các logic xử lý dữ liệu mà người dùng không thể nhìn thấy. Nó hoạt động như bộ não của ứng dụng, xử lý các yêu cầu từ người dùng thông qua giao diện Frontend và trả về kết quả phù hợp
-Backend Development quan trọng trong phát triển ứng dụng vì:
+Xử lý logic nghiệp vụ: Backend đảm nhận việc xử lý các logic nghiệp vụ phức tạp, đảm bảo rằng các chức năng của ứng dụng hoạt động đúng như mong đợi.
+Quản lý cơ sở dữ liệu: Backend chịu trách nhiệm quản lý và truy xuất dữ liệu từ cơ sở dữ liệu, đảm bảo rằng thông tin được lưu trữ và truy cập một cách hiệu quả và an toàn.
+Bảo mật: Backend đóng vai trò quan trọng trong việc bảo vệ dữ liệu người dùng và ngăn chặn các truy cập trái phép, đảm bảo tính bảo mật cho ứng dụng. ​
+Hiệu suất và khả năng mở rộng: Thiết kế backend tốt giúp ứng dụng hoạt động mượt mà, đáp ứng nhanh chóng và có khả năng mở rộng khi số lượng người dùng tăng lên.
```
Các thành phần chính của một hệ thống backend?
```sh
​Một hệ thống backend bao gồm các thành phần chính sau:​
-Máy chủ (Server): Là máy tính vật lý hoặc ảo chịu trách nhiệm lưu trữ, xử lý tài nguyên của ứng dụng web, thực thi logic và phản hồi qua giao thức HTTP. Thường chạy trên các hệ điều hành như Linux (Ubuntu, CentOS).
-Ứng dụng (Application): Phần mềm chạy trên máy chủ, chứa các logic nghiệp vụ, xử lý yêu cầu từ người dùng, tương tác với cơ sở dữ liệu và gửi phản hồi phù hợp.
-Cơ sở dữ liệu (Database): Hệ thống quản lý và lưu trữ dữ liệu, cho phép truy xuất, thêm, sửa và xóa dữ liệu một cách hiệu quả.
-Giao diện lập trình ứng dụng (API): Tập hợp các định nghĩa và giao thức cho phép các phần mềm khác nhau giao tiếp với nhau, giúp frontend và backend tương tác, cũng như tích hợp với các dịch vụ bên ngoài.
-Các công nghệ và framework hỗ trợ: Các công cụ và khung công tác giúp lập trình viên phát triển, triển khai và quản lý ứng dụng backend hiệu quả hơn.

```
Sự khác biệt giữa backend và frontend?
```sh
-Frontend tập trung vào những khía cạnh mà người dùng của bạn có thể nhìn thấy. Ngược lại, backend là tất cả mọi thứ tạo ra chức năng của ứng dụng.

```
TypeScript là gì?
```sh
-TypeScript là một ngôn ngữ lập trình mã nguồn mở được phát triển bởi Microsoft, mở rộng từ JavaScript bằng cách bổ sung tính năng kiểu tĩnh (static typing) và các tính năng hướng đối tượng. Điều này giúp việc phát triển các ứng dụng lớn trở nên dễ dàng và đáng tin cậy hơn. Mã TypeScript được biên dịch xuống JavaScript để chạy trên các môi trường hỗ trợ JavaScript

```
Redis là gì?
```sh
Redis, viết tắt của Remote Dictionary Server, là một hệ thống lưu trữ dữ liệu mã nguồn mở dạng key-value với hiệu suất cao. Nó hỗ trợ nhiều cấu trúc dữ liệu như chuỗi (string), danh sách (list), tập hợp (set), tập hợp có thứ tự (sorted set) và băm (hash). Redis thường được sử dụng như một cơ sở dữ liệu, bộ nhớ đệm (cache) hoặc môi giới thông điệp (message broker) nhờ khả năng truy xuất dữ liệu nhanh chóng.

```
NestJS là gì?
```sh
NestJS là một framework Node.js mạnh mẽ để xây dựng các ứng dụng phía server hiệu quả và có khả năng mở rộng. Được viết bằng TypeScript, NestJS tận dụng các tính năng của TypeScript để cung cấp một kiến trúc module hóa, giúp quản lý và mở rộng ứng dụng dễ dàng. Nó kết hợp các nguyên tắc của lập trình hướng đối tượng, lập trình hàm và lập trình phản ứng, đồng thời tích hợp tốt với các thư viện Node.js phổ biến như Express hoặc Fastify. NestJS được thiết kế để giúp các nhà phát triển xây dựng các ứng dụng server-side mạnh mẽ và dễ bảo trì.

```
ESLint là gì?
```sh
​ESLint là một công cụ phân tích mã nguồn tĩnh (static code analysis) dành cho JavaScript và các ngôn ngữ dựa trên JavaScript như TypeScript. Nó giúp phát hiện các lỗi cú pháp, các vấn đề về coding style và những lỗi tiềm ẩn khác trong mã nguồn. Bằng cách tuân thủ các quy tắc mà ESLint đề xuất, bạn có thể đảm bảo mã nguồn của mình nhất quán và dễ bảo trì hơn
```
Prettier là gì?
```sh
là một công cụ định dạng mã nguồn tự động, giúp đảm bảo mã nguồn của bạn tuân thủ một phong cách nhất quán và dễ đọc. Nó hỗ trợ nhiều ngôn ngữ lập trình và định dạng khác nhau, bao gồm JavaScript, TypeScript, HTML, CSS, JSON, Markdown và nhiều ngôn ngữ khác
```
package.json là gì?
```sh
​package.json là một tệp cấu hình quan trọng trong dự án Node.js, đóng vai trò như một bản kê khai thông tin về ứng dụng, các module, thư viện và các phụ thuộc cần thiết. Nó giúp npm hiểu và quản lý các gói mà dự án của bạn sử dụng

Lấy ví dụ source sau đây:
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-jest": "^21.0.2",
    "babel-loader": "^7.1.1",
    "babel-plugin-dynamic-import-node": "^1.2.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "eslint": "^4.15.0",
    "eslint-config-airbnb-base": "^11.3.0",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-import-resolver-webpack": "^0.8.3",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-vue": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.0.4",
    "jest-serializer-vue": "^0.3.0",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-jest": "^1.0.2",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}

 qua nó chứa những thông tin như:
name: tên của ứng dụng/package.
version: phiên bản hiện tại của ứng dụng/package.
description: mô tả ngắn gọn về ứng dụng/package.
main: entry point cho ứng dụng.
private: để là TRUE nếu không muốn ứng dụng/package chẳng may bị public tại npm.
scripts: định nghĩa những node scripts mà chúng ta muốn chạy.
dependencies: danh sách những package npm mà chúng ta muốn cài đặt.
devDependencies: danh sách những package npm mà chúng ta chỉ muốn cài đặt trên môi trường development.
engines: phiên bản Node.js mà ứng dụng/package của chúng ta hoạt động.
browserslist: các trình duyệt (và phiên bản của nó) mà ứng dụng/package của chúng ta hỗ trợ.


```
dependencies vs devDependencies?
```sh
-dependencies: Là các gói cần thiết để ứng dụng chạy trong môi trường sản xuất. Chúng bao gồm các thư viện và module mà ứng dụng dựa vào khi thực thi. Ví dụ, trong một ứng dụng web, các framework như Express.js hoặc các thư viện như Axios thường được liệt kê trong mục này. ​


-devDependencies: Là các gói chỉ cần thiết trong quá trình phát triển và thử nghiệm, không cần thiết khi ứng dụng chạy trong môi trường sản xuất. Chúng thường bao gồm các công cụ kiểm thử, công cụ xây dựng, và các tiện ích khác hỗ trợ quá trình phát triển. Ví dụ, các công cụ như Jest để kiểm thử, Babel để chuyển đổi mã ES6, và ESLint để kiểm tra mã nguồn thường được liệt kê trong mục này. 
```
Sự khác biệt giữa git merge và git rebase?

```sh
So với rebase thì merge là cách có thể tích hợp với master với rất nhiều nhánh trong 1 lần . Tuy nhiên trường hợp tích hợp bằng merge thì những commit của branch sẽ hoàn toàn không được record lại . Do vậy nếu chúng ta muốn lưu lại một cách chuẩn xác flow của dự án thì Rebase là phương pháp nên được sử dụng

```


Sự khác nhau giữa git reset, git checkout và git revert?

```sh
git reset: Di chuyển HEAD đến commit được chỉ định và có thể thay đổi Staging Area và Working Directory. Thường được sử dụng để hoàn tác các commit cục bộ chưa được đẩy lên remote.​
git checkout: Chuyển đổi giữa các nhánh, khôi phục file từ commit khác hoặc chuyển HEAD đến một commit cụ thể mà không thay đổi lịch sử commit
git revert: Tạo một commit mới để hoàn tác các thay đổi của một commit trước đó, giữ nguyên lịch sử commit và an toàn khi làm việc nhóm.

```