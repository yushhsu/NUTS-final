const ordered = document.querySelector(".ordered");
const orders = document.querySelector(".orders");

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
  data = res.data.orderall;
  console.log(data);

  data.forEach((item) => {
    console.log(item);
    str += `<tr class="text-center orders"" >
      <th ><a href="order.html?orderId=${item.Id}">${item.orderNumber}</a></th>
      <th >${item.orderDate}</th>
      <th >${item.orderIsSubscription}</th>
      <th >${item.orderTotal}</th>
      <th >${item.orderPayment}</th>
      <th >${item.orderAmount}</th>
      <th >${item.orderStatus}</th>
      </tr>`;
  });

  ordered.innerHTML = str;
});
