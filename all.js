// const productDetail = document.querySelector(".productDetail");

// 全域變數
const url = "https://nuts-final.rocket-coding.com/api/image";

//跳頁進去閱讀
// recipelist.addEventListener("click", function (e) {
//   if (e.target.getAttribute("class") == read) {
//     return;
//   }
// });

//banner--------------------------------------------------------------------------------------------banner---
axios
  .get("https://nuts-final.rocket-coding.com/api/banners")
  .then(function (res) {
    formData.get("bannerName");
    console.log(bannerName);
    console.log(res.data);
    const bannerData = res.data;
    const mainImg = res.data.bannerName;
    const bannerUrl = `https://nuts-final.rocket-coding.com/image/${mainImg}`;
    //     const BannerData = new FormData(document.getElementById("banner"));
    //     BannerData.get("banner");
  });

//訂單查詢orderinfo --------------------------------------------------------------------------------------------orderinfo---

//   axios
//     .get("https://nuts-final.rocket-coding.com/api/orderinfo/1")
//     .then(function (res) {
//       let data = [];
//       data.push(res.data);
//       console.log(data);

//這裡先不要
// data.forEach(function (item) {
// console.log(item);

// data.forEach(function (item) {
//   console.log(item);
//   orderinfo.innerHTML = `
// <tr>
//     <th ><a href="order.html">${item.orderNumber}</a></th>
//     <th >${item.RcName}</th>
//     <th >銀行匯款</th>
//     <th >2500</th>
//     <th >4</th>
//     <th >配送中</th>
// </tr>
//   `;

//   // });
//   // recipelist.innerHTML = str;
// });

// });
// console.log(item.RcName);

//會員專區 memberfile ----------------------------------------------------------------------------------------會員專區 memberfile---

// axios
//   .get("https://nuts-final.rocket-coding.com/api/members/2")
//   .then(function (res) {
//     let data = [];
//     data.push(res.data);
//     console.log(data);
//     console.log(res);
// data.push(res.data);
// console.log(data);

//   });
