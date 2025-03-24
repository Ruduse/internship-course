Day2
Trả lời câu hỏi:
+ Primitive Types?
+ Object types?
+ Union Types?
+ Intersection Types?
+ Interface vs Type Alias?
+ Generics là gì?
+ Decorators là gì?
+ Optional & Readonly Properties?
+ Enum & Tuples?

Primitive Types?
```sh
Primitive(kiểu dữ liệu nguyên thủy):Đây là các kiểu dữ liệu cơ bản trong TypeScript, bao gồm:​
string: Đại diện cho chuỗi ký tự.​
number: Đại diện cho số, bao gồm cả số nguyên và số thực.​


boolean: Đại diện cho giá trị đúng hoặc sai.​


bigint: Đại diện cho các số nguyên lớn.​


symbol: Đại diện cho giá trị duy nhất và bất biến.​


undefined: Đại diện cho giá trị chưa được gán.​


null: Đại diện cho giá trị trống hoặc không tồn tại.

```
Object types?
``` sh
Kiểu đối tượng (Object types): Đây là các kiểu dữ liệu phức tạp hơn, bao gồm:​
object: Đại diện cho các giá trị không phải kiểu nguyên thủy, như mảng, hàm, hoặc đối tượng.​

array: Danh sách các phần tử có cùng kiểu dữ liệu.​

tuple: Mảng có số lượng phần tử cố định với các kiểu dữ liệu xác định.​

enum: Tập hợp các hằng số có tên.

```
Union Types?
``` sh
Kiểu hợp (Union types):
Kiểu hợp cho phép một biến có thể nhận một trong nhiều kiểu dữ liệu khác nhau. Sử dụng ký hiệu dấu gạch đứng (|) để kết hợp các kiểu:​

let value: string | number;
value = "Hello";
value = 123;

giải thích : biến value có thể là string hoặc number.
```
Intersection Types?
``` sh
Kiểu giao (Intersection types):
Kiểu giao kết hợp nhiều kiểu thành một kiểu duy nhất, bao gồm tất cả các thuộc tính của các kiểu thành phần. Sử dụng ký hiệu dấu và (&) để kết hợp các kiểu:​

interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Alice",
  employeeId: 123,
};

```
Interface vs Type Alias?
``` sh
-Interface cho phép bạn định nghĩa form của Object. Interface chủ yếu được sử dụng để khai báo các loại đối tượng và thường được dùng trong lập trình hướng đối tượng. Interface có thể extend (kế thừa, mở rộng) và merge (hợp nhất lại), điều này giúp cho việc mở rộng Model trở nên dễ dàng, linh hoạt và dễ tái sử dụng hơn.
Ví dụ về Interface
interface User {
    name: string;
    age: number;
    email?: string; // Thuộc tính tùy chọn
}

const user: User = {
    name: "John",
    age: 30
};

-Type Alias cho phép bạn tạo một tên gọi mới cho bất kỳ kiểu dữ liệu nào, không chỉ giới hạn ở các đối tượng. Type Alias có thể sử dụng với các primitive type (kiểu nguyên thủy), union type, intersection, tuple, ...
Ví dụ về Type Alias
type User = {
    name: string;
    age: number;
    email?: string;
};


const user: User = {
    name: "John",
    age: 30
};


type ID = number | string; // Union Type
let userId: ID = 123;
userId = "abc123";

```
Generics là gì?
``` sh
Trong TypeScript, Generics cho phép bạn tạo ra các thành phần như hàm, lớp và interface có thể hoạt động với nhiều kiểu dữ liệu khác nhau, đồng thời duy trì tính an toàn về kiểu.1. Hàm Generics:
Hàm Generics cho phép bạn định nghĩa các hàm có thể hoạt động với nhiều kiểu dữ liệu khác nhau. Ví dụ:​

function identity<T>(arg: T): T {
  return arg;
}

Trong hàm identity, tham số kiểu T đại diện cho kiểu dữ liệu mà hàm sẽ xử lý. Khi gọi hàm, bạn có thể chỉ định kiểu cụ thể hoặc để TypeScript tự suy luận:​

let output1 = identity<string>("Hello World");
let output2 = identity(42); // TypeScript suy luận T là number

2. Lớp Generics:
Lớp Generics cho phép bạn tạo ra các lớp có thể làm việc với nhiều kiểu dữ liệu khác nhau. Ví dụ:​

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

Trong ví dụ này, lớp GenericNumber được định nghĩa với tham số kiểu T, cho phép nó hoạt động với bất kỳ kiểu dữ liệu nào. Khi tạo một instance của lớp, bạn có thể chỉ định kiểu cụ thể mà bạn muốn sử dụng.​
3. Interface Generics:
Interface Generics cho phép bạn định nghĩa các interface có thể làm việc với nhiều kiểu dữ liệu khác nhau. Ví dụ:​
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

let kvp: KeyValuePair<string, number> = { key: "age", value: 30 };

Trong ví dụ này, interface KeyValuePair có hai tham số kiểu K và V, cho phép bạn định nghĩa các cặp key-value với các kiểu dữ liệu khác nhau.

```
Optional & Readonly Properties?
``` sh
-Thuộc tính tùy chọn (Optional Properties):
Thuộc tính tùy chọn được khai báo bằng cách thêm dấu chấm hỏi (?) sau tên thuộc tính trong định nghĩa kiểu. Điều này cho phép các đối tượng có hoặc không có thuộc tính đó mà vẫn tuân thủ kiểu đã định nghĩa. Ví dụ:​

interface Person {
  name: string;
  age?: number;
}

Trong ví dụ trên, thuộc tính age là tùy chọn. Do đó, cả hai đối tượng sau đều hợp lệ:​

const person1: Person = { name: "Alice", age: 30 };
const person2: Person = { name: "Bob" };

Sử dụng thuộc tính tùy chọn giúp tạo ra các đối tượng linh hoạt hơn, đặc biệt hữu ích khi không phải tất cả các thuộc tính đều cần thiết trong mọi trường hợp. 


-Thuộc tính chỉ đọc (Readonly Properties):
Thuộc tính chỉ đọc được khai báo bằng từ khóa readonly, đảm bảo rằng giá trị của thuộc tính không thể bị thay đổi sau khi được khởi tạo. Thuộc tính này có thể được khởi tạo tại thời điểm khai báo hoặc trong constructor của lớp. Ví dụ:

class Employee {
  readonly empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }
}

Trong ví dụ trên, empCode là một thuộc tính chỉ đọc và không thể bị thay đổi sau khi đối tượng được khởi tạo. Nếu cố gắng gán lại giá trị cho empCode, TypeScript sẽ báo lỗi:​

const emp = new Employee(1, "John");
emp.empCode = 2; // Lỗi: Không thể gán cho 'empCode' vì nó là thuộc tính chỉ đọc.

```
Enum & Tuples?
``` sh
Trong TypeScript, Enum và Tuple là hai kiểu dữ liệu đặc biệt giúp định nghĩa các tập hợp giá trị cố định và các mảng có độ dài cố định với các kiểu phần tử khác nhau.

Enum (viết tắt của "enumeration") là một nhóm các giá trị hằng số có tên, giúp mã nguồn trở nên rõ ràng và dễ hiểu hơn. Enums có thể là số hoặc chuỗi.
Enum (Kiểu liệt kê):
Enum (viết tắt của "enumeration") là một nhóm các giá trị hằng số có tên, giúp mã nguồn trở nên rõ ràng và dễ hiểu hơn. Enums có thể là số hoặc chuỗi.​Viblo
Ví dụ về Enum số:

enum Direction {
  North,
  East,
  South,
  West
}

Trong ví dụ này, Direction.North có giá trị là 0, Direction.East là 1, và tiếp tục tăng dần.​
Tuple (Bộ giá trị):
Tuple cho phép lưu trữ một mảng với số lượng phần tử cố định, trong đó mỗi phần tử có thể có kiểu dữ liệu khác nhau. Điều này hữu ích khi bạn muốn nhóm các giá trị có liên quan nhưng khác kiểu dữ liệu.​Viblo
Ví dụ về Tuple:

let person: [string, number];
person = ["Alice", 30];

Trong ví dụ này, person là một tuple chứa một chuỗi và một số.
Sử dụng Enum và Tuple trong TypeScript giúp mã nguồn trở nên rõ ràng, an toàn về kiểu và dễ bảo trì hơn.

```
