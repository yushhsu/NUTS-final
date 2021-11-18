const ordered = document.querySelector(".ordered");
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

  //   ordered.innerHTML = `<trclass="text-center" >
  //   <th ><a href="order.html/">${data.orderNumber}</a></th>
  //   <th >${data.orderDate}</th>
  //   <th >${data.orderIsSubscription}</th>
  //   <th >${data.orderTotal}</th>
  //   <th >${data.orderPayment}</th>
  //   <th >${data.orderAmount}</th>
  //   <th >${data.orderStatus}</th>
  //   </tr>`;

  str = `<tr class="text-center" >
  <th ><a href="order.html/">${data.orderNumber}</a></th>
  <th >${data.orderDate}</th>
  <th >${data.orderIsSubscription}</th>
  <th >${data.orderTotal}</th>
  <th >${data.orderPayment}</th>
  <th >${data.orderAmount}</th>
  <th >${data.orderStatus}</th>
  </tr>`;

  // 在物件中取陣列裡的值
  //   let array = orderList.forEach(function (item, index, array) {
  //     console.log(item, index, array);
  //   });
  //   console.log(array);
  //   console.log(orderList);
  ordered.innerHTML = str;
});
