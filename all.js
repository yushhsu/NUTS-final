// axios.get('放入想撈取的 JSON 連結')
//   .then(function (response) {
//     //回傳的結果
//     console.log(response);
//     //抓回來的 JSON 資料
//     console.log(response.data);
//     //回傳的狀態碼
//     console.log(response.status);
//   });

// const url = "https://nuts-final.rocket-coding.com/api/products/1";
// const list = document.querySelector(".list");
// const nutrition = document.querySelector(".nutrition");
const productDetail = document.querySelector(".productDetail");
const eachProduct = document.querySelector(".eachProduct");

// 商品頁 products--------------------------------------------------------------------------------------------商品頁---
axios
  .get("https://nuts-final.rocket-coding.com/api/products/1")
  .then(function (response) {
    let data = [];

    data.push(response.data);
    console.log(data);
    data.forEach(function (item) {
      console.log(item);

      eachProduct.innerHTML = `
      
        <div class="col-md-6 h-75">
            <figure class="figure">
                
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./image/origen-L-01.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./image/第二期/IMG_9931.JPG" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./image/第二期/IMG_9931.JPG" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./image/第二期/IMG_9931.JPG" class="d-block w-100" alt="...">
                        </div>
                    </div>
    
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                </div>
                    <!-- <img src="./image/origen-L-01.png class="img-fluid w-75 " alt="..."> -->
                <figcaption class=" figure-caption row  ">
                    <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="./image/origen-L.jpg" alt="" class="w-75"></button>
                    <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><img src="./image/第二期/IMG_9931.JPG" alt="" class="w-75"></button>
                    <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><img src="./image/第二期/IMG_9931.JPG" alt="" class="w-75"></button>
                    <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"><img src="./image/第二期/IMG_9931.JPG" alt="" class="w-75"></button>
                </figcaption>
            </figure>
        </div>
    
        <div class="col-md-6 d-flex flex-column ">
            <div class="productPrice row ">
                <div class="DetailDetail col-md-8 ">
                    <h2>${item.product.productName}</h2>
                </div>
                <h3 class=" col-md-4 text-end">
                    <div class="d-flex flex-wrap">
                        <h3>NT$${item.product.productOriPrice}</h3>
                        <h3>NT$${item.product.productSpePrice}</h3>
                    </div>
                </h3>
            </div>
            <h4>產品描述</h4>
            <p >${item.product.productDescription}</p>
    
            <div class="d-grid gap-2 d-md-flex flex-column align-items-end mt-5 ">
                <div class="btnRowTwo">
                    <button class="btn btn-primary me-md-2" type="button">下次再買</button>
                    <button class="btn btn-primary" type="button">立即結帳</button>
                </div>
    
                <div class="input-group">
                    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option selected>請選擇數量</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <button class="btn btn-outline-secondary" type="button">加到購物車</button>
                </div>
            </div>
        </div>
        
        <div class="discripction col-sm-6 "></div> 
    
        
        <div class="container mt-5">
            <div class="row nutrition ">
                <div class="productDetail col-md-6 ">
                    <h2>產品規格</h2>
                    <p >${item.product.productSummary}</p>
                </div>
                
                <div class="col-lg-4 border border-dark ms-auto">
                    <dl class="row mb-0">
                        <dt class="col-lg-7">營養標示</dt>
                        <dd class="col-lg-5 text-end"></dd>
                        <dt class="col-lg-7">每份含量</dt>
                        <dd class="col-lg-5 text-end">${item.product.productServing}公克</dd>
                        <dt class="col-lg-7">本包裝含</dt>
                        <dd class="col-lg-5 text-end">${item.product.productIncluding}份</dd>
                        <dt class="col-lg-5 text-end"></dt>
                        <dd class="col-lg-3 text-end">每份</dd>
                        <dd class="col-lg-4 text-end">每100公克</dd>
                        
                        <dt class="col-sm-5">熱量</dt>
                        <dd class="col-sm-3 text-end">${item.product.productSCalories}</dd>
                        <dd class="col-sm-4 text-end">${item.product.productGCalories}大卡</dd>
              
                        <dt class="col-sm-5">蛋白質</dt>
                        <dd class="col-sm-3 text-end">${item.product.productSProtein}</dd>
                        <dd class="col-sm-4 text-end">${item.product.productGProtein}公克</dd>
              
                        <dt class="col-sm-5">脂肪</dt>
                        <dd class="col-sm-3 text-end">${item.product.productSFat}</dd>
                        <dd class="col-sm-4 text-end">${item.product.productGFat}公克</dd>
                
                        
                        <dt class="col-sm-5 text-truncate " style="padding-left: 28px;">飽和脂肪</dt>
                        <dd class="col-sm-3 text-end">${item.product.productSSaturatedFat}</dd>
                        <dd class="col-sm-4 text-end">${item.product.productSSaturatedFat}公克</dd>
              
                        <dt class="col-sm-5 text-truncate "style="padding-left: 28px;">反式脂肪</dt>
                        <dd class="col-sm-3 text-end ">${item.product.productSTransFat}</dd>
                        <dd class="col-sm-4 text-end">${item.product.productGTransFat}公克</dd>
              
                        <dt class="col-sm-5 text-truncate ">碳水化合物</dt>
                        <dd class="col-sm-3 text-end">${item.product.productSCarbohydrate}</dd>
                        <dd class="col-sm-4 text-end">${item.product.productGCarbohydrate}公克</dd>
              
                        <dt class="col-sm-5 text-truncate" style="padding-left: 28px;">糖</dt>
                        <dd class="col-sm-3 text-end">${item.product.productSSugar}</dd>
                        <dd class="col-sm-4 text-end">${item.product.productGSugar}公克</dd>
                        
              
                        <dt class="col-sm-4">鈉</dt>
                        <dd class="col-sm-4 text-end">${item.product.productSNa}</dd>
                        <dd class="col-sm-4 text-end ">${item.product.productGNa}毫克</dd>
              
                    </dl>
                </div>
            </div>
        </div>
    
    `;
    });
  });

// 商品清單 productlist (與分頁)--------------------------------------------------------------------------------------------商品清單 productlist (與分頁)---

// 菜單--------------------------------------------------------------------------------------------菜單---

const recipelist = document.querySelector(".recipelist");

function getData() {
  axios
    .get("https://nuts-final.rocket-coding.com/api/recipeslist")
    .then(function (res) {
      let data = res.data.recipelist;
      data.push(res.data.recipelist);
      console.log(data);
      let str = "";
      data.forEach(function (item) {
        console.log(item);

        // item.forEach(function (item) {
        str += `
          <div class=" card mb-3 ">
              <div class="row g-0 rounded">
                  <div class="col-md-4 p-2">
                    <img src="./image/禮盒/IMG_3735.jpg" class="img-fluid rounded-3 "alt="果昔">
                  </div>
                <div class="col-md-8 my-auto">
                    <div class="card-body">
                      <h5 class="card-title">${item.recipeTitle}</h5>
                      <p class="card-text h-50">${item.recipeSummary}</p>
                      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                    </div>
                    <div class="d-md-flex justify-content-md-end align-items-end">
                      <a href="recipesPage.html" class="btn btn-primary me-md-4 ">繼續閱讀</a>
                    </div>
                </div>
              </div>
          </div>
      </div>
      `;
      });
      // recipelist.innerHTML = str;
    });
}
getData();

// 菜單頁--------------------------------------------------------------------------------------------菜單頁---
const recipeItem = document.querySelector(".recipeItem");

// function getData() {
axios
  .get("https://nuts-final.rocket-coding.com/api/recipes/1")
  .then(function (res) {
    let data = [];
    data.push(res.data);
    console.log(data);
    // data.forEach(function (item) {
    // console.log(item);

    data.forEach(function (item) {
      recipeItem.innerHTML = `
        <div class="row my-md-5 center">
            <div class="col-md-8 ">
                <img src="./image/第二期/IMG_9844.JPG" class="w-50 h-auto" alt="">
            </div>
            <div class="col-md-4 ">
                <dl class="row mb-0 border border-dark p-4 m-1"> 
                    <dt class="col ">
                    <h5>所需材料</h5>
                    <p>${item.recipeIngredient}</p>
                    </dt>
                    
                    
    
                </dl>
            </div> 
        </div>
        <div class="row my-md-5 center">

            <div class="process col-md-8">
                <h3 class="pb-3">步驟：</h3>
                <p>${item.recipeStep}</p>
            </div>
            
        
            <div class="col-md-4 col-md-ms-2  ">
                

                <div class="recipesTitle">
                    <div class="recipesName pb-3 ">
                      <h2>${item.recipeTitle}</h2>
                    </div>
                    <p>${item.recipeSummary}</p>
                </div>
            </div>
        </div>
      `;
      // });
      // recipelist.innerHTML = str;
      // console.log(str);
    });
  });

// getData();
