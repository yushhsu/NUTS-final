let cartData = [];
const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
const myData = JSON.parse(localStorage.getItem("productQuantity"));
const comfirmData = document.querySelector(".comfirmData");
// const buyerInfo = document.querySelector(".buyerInfo");
const countingPrice = document.querySelector(".countingPrice");
// console.log(countingPrice);
cartData = myData;

// console.log(comfirmData);
const shoppingCartList = document.querySelector(".shoppingCartList");
let dataStr = "";
let str = "";
function getListItem(e) {
  cartData.forEach(function (item) {
    str += `
      <div class="shoppingCartList row bg-light mx-auto py-1 ">
      <p class="text-center col-md-5">${item.productName}</p>
      <p class="col-md-3 text-center align-self-center">${
        item.productSpePrice
      }</p>
      <p class="col-md-1 text-center align-self-center" >${
        item.productQuantity
      }</p>
      <p class="col-md-3 text-center align-self-center">${
        item.productQuantity * item.productSpePrice
      }</p>
  </div>`;

    // console.log(item.productName);
  });
  //   console.log(cartData);
  //   console.log(str);

  //   console.log(shoppingCartList); //null
  shoppingCartList.innerHTML += str;
}
getListItem();

// 計算產品各項
function countingProduct() {
  myData.forEach(function (item) {
    // console.log(item);
    dataStr += `
        <div class="comfirmData row bg-light mx-auto py-1 ">
            <p class="text-center col-md-5">${item.productName}</p>
            <p class="col-md-3 text-center align-self-center">${
              item.productSpePrice
            }</p>
            <p class="col-md-1 text-center align-self-center" >${
              item.productQuantity
            }</p>
            <p class="col-md-3 text-center align-self-center">${
              item.productSpePrice * item.productQuantity
            }</p>
        </div>`;
    // console.log(item.productSpePrice);

    let totalPrice = 0;
    let totalNum = 0;

    cartData.forEach(function (item) {
      //log 看是不是數字型別
      //   console.log(typeof item.productQuantity);
      //然後轉型
      let iproductQuantity = parseInt(item.productQuantity);
      let iproductSpePrice = parseInt(item.productSpePrice);
      let price = iproductQuantity * iproductSpePrice;
      let Num = parseInt(item.productQuantity);
      //   console.log(typeof price);
      totalPrice += price;
      totalNum += Num;
      //   console.log(price);

      countingPrice.innerHTML = `<div class="countingPrice">
        <div class="row  pt-3 ">
            <p class="col-md-9 text-end">共</p>
            <p class="col-md-2 text-center">${totalNum}</p>
            <p class="col-md-1 text-center">項</p>
            </div>
            <div class="row  pt-3 bg-warning">
            <p class="col-md-9 text-end">訂單金額小記NT$</p>
            <p class="col-md-2 text-center">${totalPrice}</p>
            <p class="col-md-1 text-center">元</p>
            </div>
         <div class="row border-top pt-3 ">
             <p class="col-md-9 text-end">運費NT$</p>
             <p class="col-md-2 text-center">100</p>
             <p class="col-md-1 text-center">元</p>
         </div>
         <div class="row  pt-3 bg-warning">
             <p class="col-md-9 text-end">本訂單需付款金額NT$</p>
             <p class="col-md-2 text-center">${totalPrice + 100}</p>
             <p class="col-md-1 text-center">元</p>
         </div>

         </div>`;
    });
  });
}
countingProduct();
// console.log(countingPrice.innerHTML);

//收件人資料

// const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
shippingData = shippingInfo;
console.log(shippingData);
const shippingToSomeone = document.querySelector(".shippingToSomeone");

let shippingStr = `<div class="row">
<label for="textarea" class="mt-3 ">付款方式與寄送資訊</label>
<div class="row border py-3 rounded pt-4">
    <div class="col-md-3 text-center ">
        <p>配送方式</p>
    </div>
    <div class="col-md-9">
        <p>宅配 - 新竹貨運 </p>
    </div> 
    
    <div class="col-md-3 text-center">
        <p>付款方式</p>
    </div>
    <div class="col-md-9">
        <p>匯款</p>
    </div>

    <div class="col-md-3 text-center">
        <p>收件者</p>
    </div>
    <div class="col-md-9">
        <p>徐某某</p>
    </div>

    <div class="col-md-3 text-center">
        <p>聯絡電話</p>
    </div>
    <div class="col-md-9">
        <p>0912-3456789 </p>
    </div>

    <div class="col-md-3 text-center">
        <p>E-mail</p>
    </div>
    <div class="col-md-9">
        <p>abc1234@gmail.com </p>
    </div>

    <div class="col-md-3 text-center">
        <p>收件地址</p>
    </div>
    <div class="col-md-9">
        <p>${item.memberAddress}</p>
    </div>
</div>`;

// shippingData.forEach(function (item) {});
