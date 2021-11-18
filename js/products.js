const addCart = document.querySelector(".addCart");

// console.log(productQuantity);
console.log(addCart);
// 商品頁 products--------------------------------------------------------------------------------------------商品頁---
let data;
const eachProduct = document.querySelector(".eachProduct");
const carouselS = document.querySelector(".carouselS");
axios
  .get(`https://tastynuts.rocket-coding.com/api/products/1016`)
  .then(function (response) {
    data = response.data;
    console.log(data.product.productImgCover);
    // data.push(response.data);
    // data.productImg.forEach(function (item, index) {
    //   console.log(item);
    //加入變數
    eachProduct.innerHTML = `
        <div class="container">
            <div class="row my-5 eachProduct" >
                <div class="col-md-6 h-75">
                    <figure class="figure">
                        
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">       
                            <div class="carousel-inner">
                            <div class="carousel-item active" id="">
                                    <img src="${url}${data.product.productImgCover}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item ">
                                <img src="${url}${data.productImg[0].productImgName}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item ">
                                <img src="${url}${data.productImg[0].productImgName}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item ">
                                <img src="${url}${data.productImg[0].productImgName}" class="d-block w-100" alt="...">
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
                            
                        <figcaption class=" figure-caption row  ">
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="${url}/${data.product.productImgCover}" alt="" class="w-75"></button>
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><img src="${url}/${data.product.productImgCover}" alt="" class="w-75"></button>
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><img src="${url}/${data.product.productImgCover}" alt="" class="w-75"></button>
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"><img src="${url}/${data.product.productImgCover}" alt="" class="w-75"></button>
                        </figcaption>
                    </figure>
                </div>
            
                <div class="col-md-6 d-flex flex-column ">
                    <div class="productPrice row ">
                        <div class="DetailDetail col-md-8 ">
                            <h2>${data.product.productName}</h2>
                        </div>
                        <h3 class=" col-md-4 text-end">
                            <div class="d-flex flex-wrap">
                                <h3 class="text-decoration-line-through">NT$ ${data.product.productOriPrice}</h3>
                                <h3>NT$ ${data.product.productSpePrice}</h3>
                            </div>
                        </h3>
                    </div>
                    <h4>產品描述</h4>
                    <p >${data.product.productDescription}</p>
            
                    <div class="d-grid gap-2 d-md-flex flex-column align-items-end mt-5 ">
            
                        <div class="input-group">
                            <select class="form-select" id="productQuantity" aria-label="Example select with button addon">
                                <option selected>請選擇數量</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <button class="addCart btn btn-outline-secondary" id="addCartBtn" data-id="${data.product.Id}" type="button">加到購物車</button>
                        </div>
                    </div>
                </div>
                
                <div class="discripction col-sm-6 "></div> 
            
                
                <div class="container mt-5">
                    <div class="row nutrition ">
                        <div class="productDetail col-md-6 ">
                            <h2>產品規格</h2>
                            <p >${data.product.productSummary}</p>
                        </div>
                        
                        <div class="col-lg-4 border border-dark ms-auto">
                            <dl class="row mb-0">
                                <dt class="col-lg-7">營養標示</dt>
                                <dd class="col-lg-5 text-end"></dd>
                                <dt class="col-lg-7">每份含量</dt>
                                <dd class="col-lg-5 text-end">${data.product.productServing}公克</dd>
                                <dt class="col-lg-7">本包裝含</dt>
                                <dd class="col-lg-5 text-end">${data.product.productIncluding}份</dd>
                                <dt class="col-lg-5 text-end"></dt>
                                <dd class="col-lg-3 text-end">每份</dd>
                                <dd class="col-lg-4 text-end">每100公克</dd>
                                
                                <dt class="col-sm-5">熱量</dt>
                                <dd class="col-sm-3 text-end">${data.product.productSCalories}</dd>
                                <dd class="col-sm-4 text-end">${data.product.productGCalories}大卡</dd>
                    
                                <dt class="col-sm-5">蛋白質</dt>
                                <dd class="col-sm-3 text-end">${data.product.productSProtein}</dd>
                                <dd class="col-sm-4 text-end">${data.product.productGProtein}公克</dd>
                    
                                <dt class="col-sm-5">脂肪</dt>
                                <dd class="col-sm-3 text-end">${data.product.productSFat}</dd>
                                <dd class="col-sm-4 text-end">${data.product.productGFat}公克</dd>
                        
                                
                                <dt class="col-sm-5 text-truncate " style="padding-left: 28px;">飽和脂肪</dt>
                                <dd class="col-sm-3 text-end">${data.product.productSSaturatedFat}</dd>
                                <dd class="col-sm-4 text-end">${data.product.productSSaturatedFat}公克</dd>
                    
                                <dt class="col-sm-5 text-truncate "style="padding-left: 28px;">反式脂肪</dt>
                                <dd class="col-sm-3 text-end ">${data.product.productSTransFat}</dd>
                                <dd class="col-sm-4 text-end">${data.product.productGTransFat}公克</dd>
                    
                                <dt class="col-sm-5 text-truncate ">碳水化合物</dt>
                                <dd class="col-sm-3 text-end">${data.product.productSCarbohydrate}</dd>
                                <dd class="col-sm-4 text-end">${data.product.productGCarbohydrate}公克</dd>
                    
                                <dt class="col-sm-5 text-truncate" style="padding-left: 28px;">糖</dt>
                                <dd class="col-sm-3 text-end">${data.product.productSSugar}</dd>
                                <dd class="col-sm-4 text-end">${data.product.productGSugar}公克</dd>
                                
                    
                                <dt class="col-sm-4">鈉</dt>
                                <dd class="col-sm-4 text-end">${data.product.productSNa}</dd>
                                <dd class="col-sm-4 text-end ">${data.product.productGNa}毫克</dd>
                    
                            </dl>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>`;
  });
console.log(eachProduct);

let cartInfo = [
  //   {
  //     // Id: productId,
  //     // productQuantity: "",
  //     // productImage: data.product.productImgCover,
  //     // productName: data.product.productName,
  //     // productSpePrice: data.product.productSpePrice,
  //     // productQuantity: productQuantity.value,
  //     //   productPrice: data.product.productPrice,
  //     //   productStorage: data.product.productStorage,
  //     //   sub: data.product.sub,
  //     //   subType: data.product.subType,
  //   },
];

//監聽加入購物車
eachProduct.addEventListener("click", function (e) {
  e.preventDefault();
  let addCart = e.target.getAttribute(".addCart");
  if (addCart !== addCart) {
    return;
  }
  const productQuantity = document.getElementById("productQuantity");
  //送產品ＩＤ

  let productId = e.target.getAttribute("data-id");
  console.log(productId);
  productQuantity.addEventListener("change", (e) => {
    // console.log("123");
    // console.log(e.target.value);
  });

  //送幾個產品（找出選單送數量）
  if (e.target.classList.contains("addCart")) {
    console.log(productQuantity.value);

    //加入購物車 （要加入localStorage 在購物車時在取值）

    let cartInfoObj = {
      Id: productId,
      productQuantity: "",
      productImage: data.product.productImgCover,
      productName: data.product.productName,
      productSpePrice: data.product.productSpePrice,
      productQuantity: productQuantity.value,
    };

    const getproductDATA = JSON.parse(localStorage.getItem("productQuantity"));
    console.log(getproductDATA);

    function addMoreProduct(e) {
      console.log(cartInfoObj);
      cartInfo.push(cartInfoObj);
      if (getproductDATA == null) {
        const cartInfoData = JSON.stringify(cartInfo);
        localStorage.setItem("productQuantity", cartInfoData);
      } else {
        getproductDATA.push(cartInfoObj);
        const cartInfoData = JSON.stringify(getproductDATA);
        localStorage.setItem("productQuantity", cartInfoData);
      }
    }
    addMoreProduct();
    console.log(cartInfo);

    // const cartInfoData = JSON.stringify(cartInfo);
    // localStorage.setItem("productQuantity", cartInfoData);

    // console.log(cartInfoData);
    console.log(cartInfo);
  }
});
