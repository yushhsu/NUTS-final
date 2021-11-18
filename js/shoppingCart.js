let cartData = [];
const shoppingCartList = document.querySelector(".shoppingCartList");
const countingPrice = document.querySelector(".countingPrice");
const myData = JSON.parse(localStorage.getItem("productQuantity"));

// console.log(myData);
cartData = myData;
console.log(cartData);

let str = "";
function getListItem(e) {
  cartData.forEach(function (item) {
    str += `<tr class="lists" data-num="num">
        <th class="w-25"><img src="./image/origen-L.jpg" alt="" class="d-flex align-self-center " style="width: 20%;"></th>
        <th scope="col">${item.productName}</th>
        <th scope="col">${item.productSpePrice}</th>
        <th scope="col">${item.productQuantity}</th>
        <th scope="col">${item.productQuantity * item.productSpePrice}</th>
        <th scope="col">有</th>
        <th class="col"><button class="btnDelete btn btn-primary align-content-sm-center align-self-center " type="submit">刪除</button></th>
        </tr>`;

    // console.log(item.productName);
  });
  console.log(str);
  console.log(cartData);
  shoppingCartList.innerHTML = str;
}
getListItem();
// console.log(typeof cartData[0].productSpePrice);

let totalPrice = 0;
let totalNum = 0;

cartData.forEach(function (item) {
  console.log(typeof item.productQuantity);

  let price = parseInt(item.productQuantity) * parseInt(item.productSpePrice);
  let Num = parseInt(item.productQuantity);
  console.log(typeof price);
  totalPrice += price;
  totalNum += Num;
});
console.log(totalPrice);

countingPrice.innerHTML = ` <div class="row  pt-3 ">
<p class="col-md-9 text-end">共</p>
<p class="col-md-2 text-center">${totalNum}</p>
<p class="col-md-1 text-center">項商品</p>
</div>
<div class="row  pt-3 bg-warning">
  <p class="col-md-9 text-end">訂單金額小記NT$</p>
  <p class="col-md-2 text-center">${totalPrice}</p>
  <p class="col-md-1 text-center">元</p>
</div>

</div>
<div class="btnStep d-grid gap-2 d-md-flex justify-content-md-end my-5">
<a class="btn btn-secondary text-white" href="#" role="button">上一步</a>
<a class="btn btn-primary" href="shipping.html" role="button">下一步</a>
</div>`;

// const btnDelete = document.querySelector(".btnDelete");
// const list = document.querySelector(".lists");
// console.log(btnDelete);

// btnDelete.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(btnDelete);
//   var currentNum = e.target.dataset.num;
//   //(要插入或刪除的索引位置, 要刪除的元素數量, 要插入的元素內容)
//   shoppingCartList.splice;
//   alert("點擊刪除了");
// });
// function deleteItem(e) {
//   // var current = e.target.nodeName;
//   var current = e.target.nodeName; //當刪除事件指的是自己的 nodeName
//   if (current == "A" || current == "I") {
//     var currentNum = e.target.dataset.num; //選取到自定義的 data-num
//     taskList.splice(currentNum, 1); //就刪除該筆的一筆資料
//   } else {
//     return;
//   }
//   // updateList(); //重新更新清單
// }

// btnDelete.addEventListener("click", deleteItem, false);
