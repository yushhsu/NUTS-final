const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
const buyerInfo = document.querySelector(".buyerInfo");

shippingData = shippingInfo;
console.log(shippingData);

let str = "";
// function putComfirmData() {
shippingData.forEach(function (item) {
  //   console.log(item);
  //       buyerInfo.innerHTML = `<div class="row">
  //       <label for="textarea" class="mt-3 ">付款方式與寄送資訊</label>
  //       <div class="row border py-3 rounded pt-4">
  //           <div class="col-md-3 text-center ">
  //               <p>配送方式</p>
  //           </div>
  //           <div class="col-md-9">
  //               <p>宅配 - 新竹貨運 </p>
  //           </div>
  //           <div class="col-md-3 text-center">
  //               <p>付款方式</p>
  //           </div>
  //           <div class="col-md-9">
  //               <p>匯款</p>
  //           </div>
  //           <div class="col-md-3 text-center">
  //               <p>收件者</p>
  //           </div>
  //           <div class="col-md-9">
  //               <p>${item.value}</p>
  //           </div>
  //           <div class="col-md-3 text-center">
  //               <p>聯絡電話</p>
  //           </div>
  //           <div class="col-md-9">
  //               <p>0912-3456789 </p>
  //           </div>
  //           <div class="col-md-3 text-center">
  //               <p>E-mail</p>
  //           </div>
  //           <div class="col-md-9">
  //               <p>abc1234@gmail.com </p>
  //           </div>
  //           <div class="col-md-3 text-center">
  //               <p>收件地址</p>
  //           </div>
  //           <div class="col-md-9">
  //               <p>高雄市大寮區力行路67號</p>
  //           </div>
  //       </div>
  //   </div>
  //   <div class="btnStep d-grid gap-2 d-md-flex justify-content-md-end my-5">
  //       <a class="btn btn-secondary text-white" href="shipping.html" role="button">上一步</a>
  //       <a class="btn btn-primary " href="#" role="button">結帳</a>
  //   </div> `;
});
// console.log(str);
// }
// putComfirmData();

// function getBuyerData() {

// }
// getBuyerData();
