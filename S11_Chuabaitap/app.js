// Tìm phần tử tổn tại trong mảng

// let input = Number(prompt("Nhập số muốn tìm trong mảng"));
// let arr = [1, -2, 3, 4, 5, 6];
// for (let index = 0; index < arr.length; index++) {
//   if (input === arr[index]) {
//     console.log("Đã tìm thấy");
//     break;
//   } else {
//     console.log("Không tìm thấy");
//     break;
//   }
// }
// Kỹ thuật cắm cờ
// let check = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (input == arr[i]) {
//     check = i; // vừa lấy điều kiện kiểm tra tồn tại, vừa lấy được vị trị index của số cần tìm
//   }
// }

// if (check == -1) {
//   console.log("Không tìm thấy");
// } else {
//   console.log(`Đã tìm thấy ở vị trí ${check}`);
// }

let store = ["Laptop", "Keyboard", "Mouse", "PC"];
let cart = [
  ["Laptop", 0],
  ["Keyboard", 0],
  ["Mouse", 0],
  ["PC", 10],
];
// console.log(cart[3][1]);// Lấy ra số lượng của phần tử thứ 3 trong mảng cart
// let a = cart[1][0];
// console.log(a);

// Tạo một ứng dụng mua hàng trong store.
// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
// •	C – Cho người dùng nhập vào đồ dùng muốn mua, thêm đồ dùng vào mảng cart (nếu có cộng thêm 1). Sau đó in ra toàn bộ các phần tử trong cart
// •	R – In ra toàn bộ các phần tử trong cart
// •	U – Hỏi người dùng có muốn update số lượng có trong cart. Sau đó cho người dùng nhập số lượng muốn update. Tiến hành update và in ra toàn bộ các phần tử trong cart
// •	D – Hỏi người dùng sản phẩm muốn xóa khỏi cart. Tiến hành xóa và in ra toàn bộ các phần tử trong cart
// •	E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình ứng dụng giỏ hàng

// In kết quả của store và cart lên màn hình
// 1> In store
// console.log("Cửa hàng bán:");
// for (let i = 0; i < store.length; i++) {
//   console.log(`${i + 1}.${store[i]}`);
// }
// // 2. In cart
// console.log("Giỏ hàng của bạn gồm");
// for (let i = 0; i < cart.length; i++) {
//   console.log(`${i + 1}.${cart[i][0]}-${cart[i][1]}`);
// }
let state = true;
while (state) {
  let input = prompt("Nhập vào C/R/U/D/E").toUpperCase();

  if (input === "C") {
    //   Cho người dùng nhập vào sản phẩm muốn mua
    let addProduct = prompt("Nhập vào sản phẩm mua");
    // Kiểm tra xem addProduct có tồn tại trong mảng store bằng kỹ thuật cắm cờ
    let checkStore = -1;
    for (let i = 0; i < store.length; i++) {
      if (addProduct === store[i]) {
        checkStore = i;
      }
    }
    // Kiểm tra tồn tại thông qua biến check
    if (checkStore == -1) {
      console.log("Sản phẩm bạn tìm không tồn tại trong giỏ hàng");
    } else {
      // Tìm nó trong cart ở vị trí nào
      // Do bài này vị trị index của store và cart là như nhau nên không cần kiểm tra
      // Tăng số lượng lên 1 đơn vị ở vị trị index tìm thấy
      cart[checkStore][1] += 1;
      console.log("Giỏ hàng của bạn sau khi mua gồm");
      for (let i = 0; i < cart.length; i++) {
        console.log(`${i + 1}.${cart[i][0]}-${cart[i][1]}`);
      }
    }
  } else if (input === "R") {
    console.log("Giỏ hàng của bạn sau khi mua gồm");
    for (let i = 0; i < cart.length; i++) {
      console.log(`${i + 1}.${cart[i][0]}-${cart[i][1]}`);
    }
  } else if (input === "U") {
    // Hỏi người dùng vị trị sản phẩm muốn update
    let updateIndex = Number(prompt("Nhập vào vị trí muốn thay đổi số lượng"));
    // Nhập vào số lượng muốn thay đổi
    let updateNumber = Number(prompt("Nhập vào số lượng muốn update"));
    cart[updateIndex - 1][1] = updateNumber;
    //   In ra kết quả của giỏ hàng
    console.log("Giỏ hàng của bạn sau khi update gồm");
    for (let i = 0; i < cart.length; i++) {
      console.log(`${i + 1}.${cart[i][0]}-${cart[i][1]}`);
    }
  } else if (input === "D") {
    // Xóa khỏi giỏ hàng
    //   Cho người dùng nhập vào vị trí muốn xóa trong cart
    let deleteIndex = Number(prompt("Nhập vào vị trí muốn xóa"));
    cart[deleteIndex - 1][1] = 0;
    //   In ra kết quả của giỏ hàng
    console.log("Giỏ hàng của bạn sau khi delete gồm");
    for (let i = 0; i < cart.length; i++) {
      console.log(`${i + 1}.${cart[i][0]}-${cart[i][1]}`);
    }
  } else if (input === "E") {
    console.log("Cảm ơn đã mua hàng");
    state = false;
  } else {
    console.log("Anh nhập lại hộ em");
  }
}
