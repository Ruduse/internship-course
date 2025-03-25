Trả lời câu hỏi:
+ Database là gì?
```sh
Database (Cơ sở dữ liệu) là một tập hợp các dữ liệu có tổ chức, được lưu trữ
và quản lý để dễ dàng truy cập, quản lý và cập nhật. Trong MongoDB, một cơ sở dữ liệu chứa nhiều collection.
```
+ Collection là gì?
```sh
Collection (Bộ sưu tập) trong MongoDB tương đương với một bảng trong cơ sở dữ liệu quan hệ.
Đó là một tập hợp các document. Không giống như bảng, các document trong một collection có thể có cấu trúc khác nhau.
```
+ Document là gì?
```sh
Document (Tài liệu) là đơn vị dữ liệu cơ bản trong MongoDB, được biểu diễn dưới dạng JSON (hoặc BSON).
Mỗi document chứa các cặp khóa-giá trị, tương tự như một hàng trong bảng của cơ sở dữ liệu quan hệ.
```
+ Schema là gì?
Trong Mongoose, Schema (Lược đồ) định nghĩa cấu trúc của các document trong một collection. Nó xác định các trường (field), kiểu dữ liệu của chúng, và các ràng buộc hoặc tùy chọn khác.
```sh
const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

```
Mỗi schema ánh xạ đến một collection trong MongoDB và định nghĩa hình dạng của các document trong collection đó

+ Model là gì?
Model (Mô hình) trong Mongoose là một lớp được tạo ra từ một schema và được sử dụng để tương tác với collection tương ứng trong MongoDB. Model cho phép truy vấn, tạo mới, cập nhật và xóa các document. demo
```sh
const Kitten = mongoose.model('Kitten', kittySchema);
```

+ Indexing là gì?
Indexing (Đánh chỉ mục) trong MongoDB cải thiện hiệu suất truy vấn bằng cách tạo các cấu trúc dữ liệu đặc biệt lưu trữ một phần nhỏ của tập dữ liệu, giúp truy xuất dữ liệu nhanh hơn.Ví dụ:
```sh
const schema2 = new Schema({
  test: {
    type: String,
    index: true,
    unique: true
  }
});

```

+ Các loại index phổ biến?
Index giúp tăng tốc độ truy vấn dữ liệu bằng cách tạo cấu trúc dữ liệu đặc biệt cho phép tìm kiếm nhanh hơn. Các loại index phổ biến trong MongoDB bao gồm:​
```sh
Single Field Index (Chỉ mục trên một trường): Được tạo trên một trường cụ thể để tăng tốc độ truy vấn dựa trên trường đó.​
Compound Index (Chỉ mục kết hợp): Được tạo trên nhiều trường, hữu ích khi truy vấn liên quan đến nhiều trường cùng lúc.​

Multikey Index (Chỉ mục đa khóa): Dành cho các trường là mảng, cho phép index từng phần tử trong mảng.​

Text Index (Chỉ mục văn bản): Hỗ trợ tìm kiếm toàn văn trên các trường kiểu chuỗi.​

Hashed Index (Chỉ mục băm): Sử dụng giá trị băm của trường để phân phối dữ liệu đồng đều, hữu ích cho việc phân mảnh dữ liệu
```
+ Performance Optimization?
Để tối ưu hiệu năng trong Mongoose và MongoDB, ta có thể áp dụng các phương pháp sau:​
```sh
Sử dụng index phù hợp: Tạo index trên các trường thường xuyên được sử dụng trong truy vấn để giảm thời gian tìm kiếm.​

Tránh truy vấn không cần thiết: Chỉ lấy những trường cần thiết thay vì toàn bộ document để giảm tải dữ liệu truyền tải.​

Sử dụng lean queries: Khi không cần các tính năng đầy đủ của Mongoose Document, sử dụng .lean() để nhận về plain JavaScript objects, giúp tăng tốc độ xử lý.​

Tối ưu hóa schema: Thiết kế schema hợp lý, tránh lồng ghép quá sâu và sử dụng kiểu dữ liệu phù hợp.

```
+ Transaction là gì?
Transaction trong MongoDB cho phép thực hiện nhiều thao tác ghi (write operations) trên nhiều document và collection như một đơn vị công việc duy nhất. Điều này đảm bảo rằng tất cả các thao tác trong transaction đều thành công hoặc tất cả đều bị hủy bỏ nếu có lỗi xảy ra, giúp duy trì tính nhất quán của dữ liệu.​
Trong Mongoose, ta có thể sử dụng transactions với các session. Dưới đây là một ví dụ về cách sử dụng transaction trong Mongoose:​

```sh
const mongoose = require('mongoose');

async function performTransaction() {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    // Thực hiện các thao tác ghi ở đây
    await MyModel.create([{ name: 'Alice' }, { name: 'Bob' }], { session });

    // Nếu mọi thứ đều ổn, commit transaction
    await session.commitTransaction();
  } catch (error) {
    // Nếu có lỗi, hủy bỏ transaction
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
}

```

+ Cách sử dụng transactions trong Mongoose?
Để sử dụng transactions trong MongoDB, bạn có thể thực hiện theo các bước sau:​
-Bắt đầu một phiên làm việc (session):
```sh
const session = client.startSession();
```
Bắt đầu transaction trong phiên làm việc:
```sh
session.startTransaction();

```
Thực hiện các thao tác đọc và ghi trong phạm vi transaction:
```sh
const usersCollection = client.db('yourDatabaseName').collection('users');
await usersCollection.insertOne({ name: 'Alice' }, { session });

const ordersCollection = client.db('yourDatabaseName').collection('orders');
await ordersCollection.insertOne({ item: 'Book', quantity: 1 }, { session });
```
Xác nhận (commit) transaction nếu tất cả các thao tác thành công:
```sh
await session.commitTransaction();

```
Hủy bỏ (abort) transaction nếu có lỗi xảy ra:
```sh
await session.abortTransaction();
```
Kết thúc phiên làm việc:
```sh
session.endSession();
```



