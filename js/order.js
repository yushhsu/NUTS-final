const ordered = document.querySelector(".ordered");
const orderCheck = document.querySelector(".orderCheck");
let str = "";
let orderList = [];
axios({
  method: "get",
  url: "https://tastynuts.rocket-coding.com/api/orders",
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then(function (res) {
  console.log(res);
  data = res.data.orderall[0];
  console.log(data);
  ordered.innerHTML = `<tr class="text-center" >
  <th ><a href="order.html/">${data.orderNumber}</a></th>
  <th >${data.orderDate}</th>
  <th >${data.orderIsSubscription}</th>
  <th >${data.orderTotal}</th>
  <th >${data.orderPayment}</th>
  <th >${data.orderAmount}</th>
  <th >${data.orderStatus}</th>
  </tr>`;
});

axios({
  method: "get",
  url: "https://tastynuts.rocket-coding.com/api/orderinfo/43",
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then(function (res) {
  console.log(res);
  console.log(res.data[0].order_info[0].productName[0]);
  let itemTop = res.data[0].order_info[0];
  console.log(res.data[0]);
  let itemLow = res.data[0];

  //第59行可以forEach
  orderCheck.innerHTML = `
    <div class="bg-primary rounded-1 text-center text-white mb-3" >
    <h4 class="m-0 py-1" >訂單查詢</h4>
</div>
<div class="rounded-1 mb-3 " >
                    <h4 class="m-0 py-1" id="${itemLow.Id}">訂單編號：${itemLow.orderNumber}</h4>
                </div>
                <table class="table pb-5">
                
                <thead>
                    <tr>
                        <th scope="col">商品名稱</th>
                        <th scope="col">單價</th>
                        <th scope="col">數量</th>
                        <th scope="col">小計</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >${itemTop.productName[0]}</th>
                        <th >${itemTop.orderSubtotal}</th>
                        <th >${itemTop.productAmount}</th>
                        <th >${itemTop.productUnitPrice}</th>
                    </tr>
                </tbody>
            </table>
    <div class=" col-sm-10 container border m-auto b-3 py-3">
    
            

            <div class="bg-light">
                <label for="textarea" class="ml-3 m-2 ">
                    <h4>付款方式與寄送資訊</h4>
                </label>
                <div class="row py-3 ">
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
                        <p>${itemLow.orderRcName}</p>
                    </div>

                    <div class="col-md-3 text-center">
                        <p>聯絡電話</p>
                    </div>
                    <div class="col-md-9">
                        <p>${itemLow.orderRcMPhone}</p>
                        <p>${itemLow.orderRcHPhone}</p>
                    </div>

                    <div class="col-md-3 text-center">
                        <p>E-mail</p>
                    </div>
                    <div class="col-md-9">
                        <p>${itemLow.orderRcMail}</p>
                    </div>

                    <div class="col-md-3 text-center">
                        <p>收件地址</p>
                    </div>
                    <div class="col-md-9">
                        <p>${itemLow.orderRcPostCode}${itemLow.orderRcAddress}</p>
                    </div>
                </div>
            </div>
</div>`;
});
