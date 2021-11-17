// 全域變數
// const url = "https://tastynuts.rocket-coding.com/image";

const monthlyItem = document.querySelector(".monthlyItem");
console.log(monthlyItem);

axios
  .get("https://tastynuts.rocket-coding.com/api/subscriptionlist")
  .then(function (res) {
    console.log(res);

    // let str = ` <div class="row g-0 rounded">
    //             <div class="col-md-4 p-2">
    //                 <img src="./image/禮盒/IMG_3735.jpg" class="img-fluid rounded-3 "alt="果昔">
    //             </div>

    //             <div class="col-md-8 my-auto">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${item.subscriptionName}</h5>
    //                     <p class="card-text h-50">${item.subscriptionSummary}</p>
    //                 </div>
    //                 <div class="d-md-flex justify-content-md-end align-items-end">
    //                     <a href="monthly.html" class="btn btn-primary me-md-4 ">我要訂閱</a>
    //                 </div>
    //             </div>
    //             </div>`;
    // let data = response.data.subscription;
    // console.log(data);
    // // let str = "";

    // data.forEach((item) => {
    //   console.log(item);
    //   str += `<li class="col-lg-4 p-2 pt-0 " id="${item.Id}">
    //       <div class="card mb-3"  >
    //           <img src="${productCoverUrl}/${item.subscriptionImgCover}" class="cardImg"  alt="腰果照片">
    //           <div class="card-content d-flex ">
    //               <div class="card-body ">
    //                   <h5 class="card-title">${item.subscriptionName}</h5>
    //                   <p class="card-text"></p>${item.subscriptionOriPrice}</p>
    //                   <p class="card-text"></p>${item.subscriptionSpePrice}</p>
    //               </div>
    //               <a href="product.html?productId=${item.Id}" class="btn btn-primary  align-self-center me-2 ">選購</a>
    //           </div>
    //       </div>
    //   </li>`;
    // });
    // console.log(str);
    // monthlyItem.innerHTML = str;
    // console.log(monthlyItem.innerHTML);
  });
