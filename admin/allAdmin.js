const eachProduct = document.querySelector(".eachProduct");
const addProduct = document.querySelector(".addProduct");
let data = [];

axios
  .get("https://nuts-final.rocket-coding.com/api/products/1")
  .then(function (response) {
    // let str = "";
    data.push(response.data);
    // console.log(data);
    data.forEach(function (item) {
      // console.log(item);

      //   console.log(e.target.eachProduct);
      eachProduct.innerHTML = `
        
            <div class=" col-md-2 my-3">
                <!-- 顏色修改 -->
                <div class="list-group text-center py-3 border mb-1 ">
                    <a href="#" class=" active " aria-current="true">
                        訂單管理
                    </a>
                </div>

                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item text-center">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            商品目錄
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <div class="list-group list-group-flush ">
                                    <a href="productlist.html" class="list-group-item list-group-item-action ">已發布</a>
                                    <a href="#" class="list-group-item list-group-item-action ">草稿</a>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="accordion-item text-center">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                商品菜單
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="list-group list-group-flush ">
                                    <a href="blog.html" class="list-group-item list-group-item-action ">已發布</a>
                                    <a href="#" class="list-group-item list-group-item-action ">草稿</a>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>  
      <div class="col-md-10 my-3">
            <div class="mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../image/origen-L-01.png" alt="..." class="w-100">
                    </div>
                    <div class="col-md-8">
                        <div class="col-auto mb-2">
                            <label class="" for="autoSizingInput">商品名稱+重量</label>
                            <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:原味腰果-480g" value="${item.product.productName}">
                        </div>
                        <div class="col-auto mb-2">
                            <label class="" for="autoSizingInput">商品編號</label>
                            <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:1234-ab" value="${item.product.productNumber}">
                    </div>
                    <div class="row">
                        <div class="col-sm-6 mb-2 ">
                            <label class="" for="autoSizingInput">原價</label>
                            <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:480" value="${item.product.productOriPrice}">
                        </div>
                        <div class="col-sm-6 mb-2">
                            <label class="" for="autoSizingInput">折扣價</label>
                            <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:5" value="${item.product.productSpePrice}">
                        </div>
                    </div>
                        <label for="exampleFormControlTextarea1" class="form-label">商品描述</label>
                        <textarea class="form-control mb-2" id="exampleFormControlTextarea1" rows="5" value="${item.product.productSummerary}">
      成分：開心果、玫瑰鹽
      產地：台灣加工
      重量：210g
      保存期限：八個月
      保存方式：避免日曬與潮濕環境，開封後請以密封保存，並盡早食用完畢。
                        </textarea>
                    </div>
                </div>
            </div>
            <div class="container my-3">
                
                <div class="row">
                    <h4>請將其中一個檔案設為封面</h4>
                    <div class="form-check col-sm-6">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            <div class="input-group my-1 ">
                                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                                <button class="btn btn-primary" type="button" id="inputGroupFileAddon04">上傳</button>
                            </div>
                        </label>
                    </div>
                    <div class="form-check col-sm-6">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            <div class="input-group my-1 ">
                                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                                <button class="btn btn-primary" type="button" id="inputGroupFileAddon04">上傳</button>
                            </div>
                        </label>
                    </div>
                    <div class="form-check col-sm-6">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
                        <label class="form-check-label" for="flexRadioDefault3">
                            <div class="input-group my-1 ">
                                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                                <button class="btn btn-primary" type="button" id="inputGroupFileAddon04">上傳</button>
                            </div>
                        </label>
                    </div>
                    <div class="form-check col-sm-6">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked>
                        <label class="form-check-label" for="flexRadioDefault4">
                            <div class="input-group my-1 ">
                                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                                <button class="btn btn-primary" type="button" id="inputGroupFileAddon04">上傳</button>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="form mt-3">
                <div class="row justify-content-center">
                    <div class="col-sm-5 mb-2 ">
                        <label class="" for="autoSizingInput">每份含＿克</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:480" value="${item.product.productServing}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">本包裝含＿份</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:5" value="${item.product.productIncluding}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">熱量每份＿大卡</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:200" value="${item.product.productSCalories}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">熱量 100g/大卡</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productGCalories}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">蛋白質每份＿克</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productSProtein}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">蛋白質 100g/g</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productGProtein}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">脂肪每份-克</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productSFat}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">脂肪-100/g</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productGFat}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">飽和脂肪每份＿克</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productSSaturatedFat}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">飽和脂肪-100/g</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productGSaturatedFat}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">不飽和脂肪每份＿克</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productSTransFat}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">不飽和脂肪-100/g</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productGTransFat}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">碳水化合物每份＿克</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productSCarbohydrate}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">碳水化合物-100/g</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productGCarbohydrate}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">糖每份＿克</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productSSugar}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">糖-100/g</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productGSugar}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">鈉每份＿克</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productSNa}">
                    </div>
                    <div class="col-sm-5 mb-2">
                        <label class="" for="autoSizingInput">鈉-100/g</label>
                        <input type="text" class="form-control" id="autoSizingInput" placeholder="Ex:4" value="${item.product.productGNa}">
                    </div>
                </div>
                
                <div class="container text-center mt-5">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-secondary text-white me-md-2" type="button">存成草稿</button>
                        <button class="btn btn-primary" type="button">新增產品</button>
                    </div>
                </div>
            </div>
        </div>`;
    });
  });

// eachProduct.addEventListener("click", function (e) {
//   //   console.log(e.target.nodeName);
//   if (e.target.nodeName !== "INPUT") {
//     return;
//   }
//   console.log(e.target.getAttribute("value"));
// });

// 商品頁後台--------------------------------------------------------------------------------------------商品頁後台---

const productListPosted = document.querySelector(".productListPosted");

axios
  .get("https://nuts-final.rocket-coding.com/api/products/1") //productlist api------------------------
  .then(function (response) {
    // let str = "";
    data.push(response.data);
    // console.log(data);
    data.forEach(function (item) {
      productListPosted.innerHTML = `
                    <div class="row g-0 position-relative">
                        <input class="form-check-input position-absolute top-50 start-0 translate-middle-y ms-3 fs-4 " type="checkbox" value="true" aria-label="...">
                        <div class=" ">
                            <div class="card-body d-flex align-items-center">
                                <img src="../image/origen-L-01.png" alt="商品照" class="w-25">
                                <div class="col-sm-4">
                                    <h5 class="card-title">${item.product.productName}</h5>
                                    <p class="card-text">商品編號：${item.product.productNumber}</p>
                                    <p class="card-text"><small class="text-muted">${item.product.productDate}</small></p>
                                </div>
                                <div class="col-sm-4  ">
                                    <div class="dropdown">
                                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            商品分類
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">腰果系列</a></li>
                                            <li><a class="dropdown-item" href="#">堅果系列</a></li>
                                            <li><a class="dropdown-item" href="#">禮盒系列</a></li>
                                        </ul>
                                    </div>
                                    <p class="card-text d-flex align-items-center mt-2 w-75"><small class="text-muted">${item.product.productDescription}</small></p>
                                </div>
                                <div class="d-flex align-items-center">
                                <input type="button" class="edit btn btn-primary ms-1" value="編輯" onclick="location.href='editProductlist.html'">
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    });
  });
// -------- 原訂給編輯行為 暫時用不到------------------//
// productListPosted.addEventListener("click", function (e) {
//   console.log(e.target.getAttribute("value"));

// });

// 商品新增頁（後台）addProduct ------------------------------{{{{{{{post}}}}}}}---------------------------商品新增頁（後台）---
// const edit = document.querySelector(".edit");

// axios
//   .get("https://nuts-final.rocket-coding.com/api/products/1")
//   .then(function (res) {
//       let data = [];

//     edit.addEventListener("click", function (e) {
//         console.log("yesssssss");
//     });

//     productListPosted.innerHTML =
//   });

// axios.post('https://nuts-final.rocket-coding.com/api/....',{
//             data: {
//                 Id: 1,
//                 productName: "test",
//                 productNumber: "ckshrimp",
//                 productDescription: "嚴選高品質腰果與堅果，無任何添加物，吃的到腰果與堅果自然甜味，健康無負擔！全程低溫烘培，把溫度降低，時間拉長，保持食材的原色/原味與營養。",
//                 productSummary: "成分： 產地：台灣加工 重量：320g 保存期限：八個月 保存方式：避免日曬與潮濕環境，開封後請以密封保存，並盡早食用完畢。 過敏原資訊：本產品含有對特殊過敏體質者致過敏性堅果。",
//                 productOriPrice: 150,
//                 productSpePrice: 135,
//                 productIsOnsale: true,
//                 productClass: "堅果系列",
//                 productDate: "2021-10-23T00:00:00",
//                 productServing: 123,
//                 productIncluding: 23,
//                 productSCalories: 467,
//                 productGCalories: 34,
//                 productSProtein: 358,
//                 productGProtein: 34,
//                 productSFat: 469,
//                 productGFat: 46,
//                 productSSaturatedFat: 225,
//                 productGSaturatedFat: 36,
//                 productSTransFat: 558,
//                 productGTransFat: 34,
//                 productSCarbohydrate: 256,
//                 productGCarbohydrate: 21,
//                 productSSugar: 69,
//                 productGSugar: 5,
//                 productSNa: 23,
//                 productGNa: 9
//             }
// })
//             .then( (response) => console.log(response))
//             .catch( (error) => console.log('response: ', error.response.data));
