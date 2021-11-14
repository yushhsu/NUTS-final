// const url = "https://nuts-final.rocket-coding.com/image";


// 商品頁 products--------------------------------------------------------------------------------------------商品頁---

const eachProduct = document.querySelector(".eachProduct");
axios
  .get("https://nuts-final.rocket-coding.com/api/subscription/1")
  .then(function (response) {
    let data = [];

    data.push(response.data);
    // console.log(data);
    data.forEach(function (item) {
      console.log(item);

      //加入變數
      eachProduct.innerHTML = `
        <div class="container">
            <div class="row my-5  >
                <div class="col-md-6 h-75">
                    <figure class="figure">
                        
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${url}/${item.subscriptionCover}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${url}/${item.subscription02}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${url}/${item.subscription03}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${url}/${item.subscription04}" class="d-block w-100" alt="...">
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
                            
                        <figcaption class=" figure-caption row  ">
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="${url}/${item.ImgCover}" alt="" class="w-75"></button>
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><img src="${url}/${item.productImg02}" alt="" class="w-75"></button>
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><img src="${url}/${item.productImg03}" alt="" class="w-75"></button>
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"><img src="${url}/${item.productImg04}" alt="" class="w-75"></button>
                        </figcaption>
                    </figure>
                </div>
            
                <div class="col-md-6 d-flex flex-column ">
                    <div class="productPrice row ">
                        <div class="productPrice row ">
                            <div class="DetailDetail col-md-8 ">
                                <h2>${item.subscriptionName}</h2>
                                <h4>規格大小 - 470ML </h4>
                            </div>
                            <h3 class=" col-md-4 text-end">${item.subscriptionPrice}</h>
                        </div>
                    </div>
                    <h4>產品描述</h4>
                    <p >${item.subscriptionDescription}</p>
            
                    <div class="d-grid gap-2 d-md-flex flex-column align-items-end mt-5 ">                       
                        <button class="addCart btn btn-outline-secondary" id="addCartBtn" data-id="${item.Id}" type="button">加到購物車</button>                       
                    </div>
                </div>
                
                <div class="discripction col-sm-6 "></div> 
            
                
——                <div class="container mt-5">
                    <div class="row ">
                        <div class="productDetail col-md-6">
                            <h4>產品描述</h4>
                            <p>${item.subscriptionSummary}</p>
                            <h4>方案內容</h4>
                            <p>裸包裝500G * 1</p>
                            <p>珍辰精選禮 * 1</p>
                        </div>
                        
                        <div class="nutrition col-lg-4 border border-dark">
                            <dl class="row mb-0">
                                <dt class="col-lg-7">營養標示</dt>
                                <dd class="col-lg-5 text-end"></dd>
                                <dt class="col-lg-7">每份含量</dt>
                                <dd class="col-lg-5 text-end">${item.subscriptionServing}公克</dd>
                                <dt class="col-lg-7">本包裝含</dt>
                                <dd class="col-lg-5 text-end">${item.subscriptionIncluding}份</dd>
                                <dt class="col-lg-5 text-end"></dt>
                                <dd class="col-lg-3 text-end">每份</dd>
                                <dd class="col-lg-4 text-end">每100公克</dd>
                                
                                <dt class="col-sm-5">熱量</dt>
                                <dd class="col-sm-3 text-end">${item.subscriptionSCalories}</dd>
                                <dd class="col-sm-4 text-end">${item.subscriptionGCalories}大卡</dd>
                    
                                <dt class="col-sm-5">蛋白質</dt>
                                <dd class="col-sm-3 text-end">${item.subscriptionSProtein}</dd>
                                <dd class="col-sm-4 text-end">${item.subscriptionGProtein}公克</dd>
                    
                                <dt class="col-sm-5">脂肪</dt>
                                <dd class="col-sm-3 text-end">${item.subscriptionSFat}</dd>
                                <dd class="col-sm-4 text-end">${item.subscriptionGFat}公克</dd>
                        
                                
                                <dt class="col-sm-5 text-truncate " style="padding-left: 28px;">飽和脂肪</dt>
                                <dd class="col-sm-3 text-end">${item.subscriptionSSaturatedFat}</dd>
                                <dd class="col-sm-4 text-end">${item.subscriptionSSaturatedFat}公克</dd>
                    
                                <dt class="col-sm-5 text-truncate "style="padding-left: 28px;">反式脂肪</dt>
                                <dd class="col-sm-3 text-end ">${item.subscriptionSTransFat}</dd>
                                <dd class="col-sm-4 text-end">${item.subscriptionGTransFat}公克</dd>
                    
                                <dt class="col-sm-5 text-truncate ">碳水化合物</dt>
                                <dd class="col-sm-3 text-end">${item.subscriptionSCarbohydrate}</dd>
                                <dd class="col-sm-4 text-end">${item.subscriptionGCarbohydrate}公克</dd>
                    
                                <dt class="col-sm-5 text-truncate" style="padding-left: 28px;">糖</dt>
                                <dd class="col-sm-3 text-end">${item.subscriptionSSugar}</dd>
                                <dd class="col-sm-4 text-end">${item.subscriptionGSugar}公克</dd>
                                
                    
                                <dt class="col-sm-4">鈉</dt>
                                <dd class="col-sm-4 text-end">${item.subscriptionSNa}</dd>
                                <dd class="col-sm-4 text-end ">${item.subscriptionGNa}毫克</dd>
                    
                            </dl>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>`;
    });
      
    //監聽加入購物車

    eachProduct.addEventListener("click", function (e) {
      e.preventDefault();
      let addCart = e.target.getAttribute("class");
      if (addCart !== addCart) {
        return;
      }

      //送產品ＩＤ
      let productId = e.target.getAttribute("data-id");
      console.log(productId);

      //送幾個產品（找出選單送數量）
      //   let numCheck = 1;
      //   cartData.forEach(function (item) {
      //     //  如果品項一樣就加一
      //     if (item.product.id === productId) {
      //       numCheck = item.quantity += 1;
      //     }
      //   });
      // console.log(numCheck);
    });

      //加入購物車 （要加入localStorage,在購物車時在取值）
//       axios.post(`https://nuts-final.rocket-coding.com/api/`, {
//           "item:": {
//               "productImage"
//             "productName":,
//             "productPrice":,
//             "productQuantity":,
//             "productPrice":,
//             "productStorage":,
//         }
//       }).then(function (res) {
//           alert("加入購物車");
//           getCartList();
//     })
//   });