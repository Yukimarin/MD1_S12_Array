// Mảng -Array
// 1. Cách tạo mảng
// Kiểu dữ nguyên thủy: string,number,boolean,null,undefined, symbol, bigInt
// Kiểu dữ liệu tham chiếu (phức tạp): Array - Object
// let season = "Mùa xuân";
// let season1 = "Mùa hè";
// let season2 = "Mùa thu";
// let season3 = "Mùa đông";
// Sử dụng cặp ngoặc vuông
// let seasons = ["Mùa xuân", "Mùa hè", "Mùa thu", "Mùa đông"];
//    length                                       4
//    index          0      1          2           3
// console.log(seasons[2]);
// Độ dài mảng(length):4
// Chỉ số index(vị trí của phần tử ở trong mảng):

// Sử dụng từ khóa new Array
// let course = new Array("Javascript", "Java", "PHP");
// console.log(course);

// Array là tập hợp danh sách các phần tử có tính chất tương đồng nhau
// ví du: let randomArr = ["Mùa xuân", "Mùa hè","Mùa thu", "Mùa đông","Javascipt",null,true,{},];
// let json=[{},{},{}]/json

// 2. Truy cập các phần tử trong mảng
// Truy cập 1 phần tử: tenmang[index của phần tử muốn lấy]
// VD: console.log(seasons[2]);

// Truy cập nhiều phần tử trong mảng
// for (let index = 0; index < seasons.length; index++) {
//   console.log(seasons[index]);
// }

// 3. Các phương thức làm việc với mảng
// CRUD:
// let seasons = ["Mùa xuân", "Mùa hè", "Mùa thu"];
// Create- Tạo mới và thêm phẩn vào mảng
// let a = "Mùa đông"; //Khai báo biến a = mùa đông
// Sử dụng phương thức push() để thêm phẩn tử vào cuối mảng --- tenmang.push(phần tử muốn thêm)
// seasons.push(a);
// console.log(seasons);
// Sử dụng phương thức unshift() để thêm phẩn tử vào đầu mảng--- tenmang.unshift(phần tử muốn thêm)
// let b = "Mùa mưa";
// seasons.unshift(b);
// console.log("unshift=>", seasons);
// Sử dụng splice() thêm mới 1 phần tử vào vị trí bất kỳ trong mảng
// seasons.splice(1, 0, "Mùa mưa", "Mùa đông");
// console.log(seasons);
// Read(Read one - Read All)- Truy cập đến các phẩn tử trong mảng

// Update(cập nhật lại giá trị mới cho các phần tử trong mảng)
// Muốn update thì mình truy cập đến phần tử đó và gán lại giá trị cho nó
// seasons[2] = "Mùa khô";
// console.log("update mùa hè thành mùa khô", seasons);

// Delete (Xóa phần tử trong mảng)
// Sử dụng phương thức pop() xóa phần tử cuối mảng --- tenmang.pop()
// seasons.pop();
// console.log("pop=>", seasons);
// Sử dụng phương thức shift() xóa phần tử đầu mảng ---tenmang.shift()
// seasons.shift();
// console.log("shift lần 1=>", seasons);
// seasons.shift();
// console.log("shift lần 2=>", seasons);
// seasons.shift();
// console.log("shift lần 3=>", seasons);
// Sử dụng phương thức splice() --- tenmang.splice(vi trí index,số lượng phần tử muốn xóa)
// seasons.splice(1, 1);
// console.log("splice", seasons);

// Một số phương thức làm việc với mảng
// let seasons = ["Mùa xuân", "Mùa hè", "Mùa thu"];
// console.log("Kiểm tra kiểu dữ liệu mảng", typeof seasons);
// console.log("Sử dụng phương thức isArray", Array.isArray(seasons)); // true or false (Đên bài DOM sẽ có 1 kiểu dữ liệu likeArray)
// String convert to Array : sử dụng phương thức split(",")
// // 1. Phương thức chuyển đổi Array => String: tenmang.toString()
// let text = seasons.toString();
// console.log("Sử dụng toString=>", text);
// // 2. Phương thức chuyển đổi Array => string: tenmang.join('thay the dau phảy bằng ....')
// let join = seasons.join(" ");
// console.log("Sử dụng join=>", join);
// // 3. concat - Sử dụng để nối các phần tử ở các mảng khác nhau
// Cú pháp arr1.concat(arr2)
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let result = a.concat(b);
// console.log(result);
// // 4 Spread Operator [...] (ES6)
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let result = [...a, b]; // tương đương a.push(b)
// console.log(result);
// let result2 = [...a, ...b]; // tương đương for (let i = 0; i < b.length; i++) {a.push(b[i])}
// console.log(result2);
// Một số phương thức khác: map();find();findIndex(); filter();forEach();reduce() - Optional
//VD reduce
// let a = [1, 2, 3];
// // Cách 1
// let sum = 0; //initialValue =0
// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i]; //a[i]=> currentValue
//previousValue
// }
// console.log(sum);

// // Cách 2:
// let resultReduce = a.reduce(
//   (previousValue, currentValue) => (previousValue += currentValue)
// );
// console.log(resultReduce);
