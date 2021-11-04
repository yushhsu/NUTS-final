// 全域變數
const url = "https://nuts-final.rocket-coding.com/api/image";

// 商品清單 menu (與分頁)--------------------------------------------------------------------------------------------商品清單 productlist (與分頁)---

const productList = document.querySelector(".productWrap");
let str = `<li class="col-lg-4 p-2 pt-0 ">
        <div class="card mb-3"  >
            <img src="./image/origen-L.jpg" class="cardImg "  alt="腰果照片">
            <div class="card-content d-flex ">
                <div class="card-body ">
                    <h5 class="card-title">原味腰果-380ml</h5>
                    <p class="card-text"></p>$480</p>
                </div>
                <a href="product.html" class="btn btn-primary  align-self-center me-2 ">選購</a>
            </div>
        </div>
    </li>`;

// function getProductList() {
axios
  .get("https://nuts-final.rocket-coding.com/api/productlist")
  .then(function (response) {
    // console.log(response);
    let data = response.data.productlist;
    // console.log(data);
    let str = "";

    data.forEach((item) => {
      //   console.log(item);
      str += `<li class="col-lg-4 p-2 pt-0 " id="${item.Id}">
        <div class="card mb-3"  >
            <img src="${url}/${item.productImgCover}" class="cardImg"  alt="腰果照片">
            <div class="card-content d-flex ">
                <div class="card-body ">
                    <h5 class="card-title">${item.productName}</h5>
                    <p class="card-text"></p>${item.productOriPrice}</p>
                    <p class="card-text"></p>${item.productSpePrice}</p>
                </div>
                <a href="product.html" class="btn btn-primary  align-self-center me-2 ">選購</a>
            </div>
        </div>
    </li>`;
    });
    // console.log(str);
    productList.innerHTML = str;

    //   itemData = response.data.products;
    //   console.log(itemData);
    //   renderProductList();
  });
// }
