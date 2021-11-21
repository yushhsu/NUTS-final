let cartData = [];
// const token2 = localStorage.getItem("token");
// console.log(typeof token2);
const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
const myData = JSON.parse(localStorage.getItem("productQuantity"));
const comfirmData = document.querySelector(".comfirmData");
// const buyerInfo = document.querySelector(".buyerInfo");
const countingPrice = document.querySelector(".countingPrice");
// console.log(countingPrice);
cartData = myData;
const btnStep2Pay = document.querySelector(".btnStep2Pay");
const btnStep = document.querySelector(".btnStep");

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
  // console.log(str);

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
      console.log(item);
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
             <p class="col-md-2 text-center">${item.orderShipping}</p>
             <p class="col-md-1 text-center">元</p>
         </div>
         <div class="row  pt-3 bg-warning">
             <p class="col-md-9 text-end">本訂單需付款金額NT$</p>
             <p class="col-md-2 text-center">${totalPrice}+${item.orderShipping}</p>
             <p class="col-md-1 text-center">元</p>
         </div>

         </div>`;
    });
  });
}
countingProduct();
console.log(countingPrice.innerHTML);

//收件人資料
function payAndShip() {
  // const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  shippingData = shippingInfo;
  // console.log(shippingData);
  const shippingToSomeone = document.querySelector(".shippingToSomeone");

  // shippingData.forEach(function(item){})
  shippingToSomeone.innerHTML = `<div class="row">
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
        <p>${shippingData.memberName}</p>
    </div>

    <div class="col-md-3 text-center">
        <p>聯絡電話</p>
    </div>
    <div class="col-md-9">
        <p>${shippingData.memberMoblie}</p>
    </div>

    <div class="col-md-3 text-center">
        <p>E-mail</p>
    </div>
    <div class="col-md-9">
        <p>${shippingData.memberMail}</p>
    </div>

    <div class="col-md-3 text-center">
        <p>收件地址</p>
    </div>
    <div class="col-md-9">
        <p>${shippingData.memberAddress}</p>
    </div>
</div>`;

  console.log(shippingToSomeone.innerHTML);
}
payAndShip();
console.log(payAndShip);

//付款金額送金流
const payBtn = document.querySelector(".payBtn");
let PostPayBillAPI =
  "https://tastynuts.rocket-coding.com/api/orderConfirmation";

let Newebpay = document.forms["Newebpay"];

console.log(Newebpay);

let MemberUserPayBtn = document.getElementById("MemberUserPayBtn");
let PayBillData = "";
let payBillData = {
  order: {
    orderPayment: "1",
    orderStatus: "0",
    orderShipping: "160",
    orderRcName: "name01",
    orderRcMPhone: "mphone01",
    orderRcHPhone: "hphone01",
    orderRcMail: "chywen18@gmail.com",
    orderRcPostCode: "postcode01",
    orderRcAddress: "address01",
  },
  order_info: [
    {
      productId: "1011",
      productUnitPrice: "100",
      productAmount: "2",
    },
  ],
  order_subinfo: [
    {
      subscriptiontId: " 1",
      subscriptioncCycle: " 雙週",
      subscriptionPrice: " 1000",
    },
  ],
};
console.log(token);
console.log(payBillData);
let license = { headers: { Authorization: `Bearer ${token}` } };

function PostToPayBill() {
  axios
    .post(PostPayBillAPI, payBillData, license)
    .then(function (response) {
      console.log(response.data);
      PayBillData = response.data;
      let TradeInfoData = "";
      let TradeShaData = "";
      TradeInfoData = response.data.return2Newebpay.TradeInfo;
      TradeShaData = response.data.return2Newebpay.TradeSha;
      console.log(TradeInfoData);

      btnStep.style.display = "hidden";

      btnStep2Pay.innerHTML = `
               <form name='Newebpay' method='post' action='https://ccore.newebpay.com/MPG/mpg_gateway'>
               <input type='hidden' id='MerchantID' name='MerchantID' value='MS125897385'>
               <input type='hidden' id='TradeInfo' name='TradeInfo' value='${TradeInfoData}'>
               <input type='hidden' id='TradeSha' name='TradeSha' value='${TradeShaData}'>
               <input type='hidden' id='Version' name='Version' value='1.6'>
               <input class="  btn btn-lg btn-primary " type='submit' value='前往付款'>
               </form>
             `;
    })
    .catch(function (error) {
      console.log(error);
    });

  // if(payBtn == )
}
console.log(PostToPayBill);
MemberUserPayBtn.addEventListener("click", PostToPayBill);
