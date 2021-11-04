// const url = "https://nuts-final.rocket-coding.com/api/image";

// 商品頁 products--------------------------------------------------------------------------------------------商品頁---

const eachProduct = document.querySelector(".eachProduct");
axios
  .get("https://nuts-final.rocket-coding.com/api/products/1")
  .then(function (response) {
    let data = [];

    data.push(response.data);
    console.log(data);
    data.forEach(function (item) {
      console.log(item);

      eachProduct.innerHTML = `
        <div class="container">
            <div class="row my-5 eachProduct" id="${item.Id}" >
                <div class="col-md-6 h-75">
                    <figure class="figure">
                        
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${url}/${item.productImgCover}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${url}/${item.productImg02}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${url}/${item.productImg03}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${url}/${item.productImg04}" class="d-block w-100" alt="...">
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
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="${url}/${item.ImgCover}" alt="" class="w-75"></button>
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><img src="${url}/${item.productImg02}" alt="" class="w-75"></button>
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><img src="${url}/${item.productImg03}" alt="" class="w-75"></button>
                            <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"><img src="${url}/${item.productImg04}" alt="" class="w-75"></button>
                        </figcaption>
                    </figure>
                </div>
            
                <div class="col-md-6 d-flex flex-column ">
                    <div class="productPrice row ">
                        <div class="DetailDetail col-md-8 ">
                            <h2>${item.productName}</h2>
                        </div>
                        <h3 class=" col-md-4 text-end">
                            <div class="d-flex flex-wrap">
                                <h3>NT$${item.productOriPrice}</h3>
                                <h3>NT$${item.productSpePrice}</h3>
                            </div>
                        </h3>
                    </div>
                    <h4>產品描述</h4>
                    <p >${item.productDescription}</p>
            
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
                            <p >${item.productSummary}</p>
                        </div>
                        
                        <div class="col-lg-4 border border-dark ms-auto">
                            <dl class="row mb-0">
                                <dt class="col-lg-7">營養標示</dt>
                                <dd class="col-lg-5 text-end"></dd>
                                <dt class="col-lg-7">每份含量</dt>
                                <dd class="col-lg-5 text-end">${item.productServing}公克</dd>
                                <dt class="col-lg-7">本包裝含</dt>
                                <dd class="col-lg-5 text-end">${item.productIncluding}份</dd>
                                <dt class="col-lg-5 text-end"></dt>
                                <dd class="col-lg-3 text-end">每份</dd>
                                <dd class="col-lg-4 text-end">每100公克</dd>
                                
                                <dt class="col-sm-5">熱量</dt>
                                <dd class="col-sm-3 text-end">${item.productSCalories}</dd>
                                <dd class="col-sm-4 text-end">${item.productGCalories}大卡</dd>
                    
                                <dt class="col-sm-5">蛋白質</dt>
                                <dd class="col-sm-3 text-end">${item.productSProtein}</dd>
                                <dd class="col-sm-4 text-end">${item.productGProtein}公克</dd>
                    
                                <dt class="col-sm-5">脂肪</dt>
                                <dd class="col-sm-3 text-end">${item.productSFat}</dd>
                                <dd class="col-sm-4 text-end">${item.productGFat}公克</dd>
                        
                                
                                <dt class="col-sm-5 text-truncate " style="padding-left: 28px;">飽和脂肪</dt>
                                <dd class="col-sm-3 text-end">${item.productSSaturatedFat}</dd>
                                <dd class="col-sm-4 text-end">${item.productSSaturatedFat}公克</dd>
                    
                                <dt class="col-sm-5 text-truncate "style="padding-left: 28px;">反式脂肪</dt>
                                <dd class="col-sm-3 text-end ">${item.productSTransFat}</dd>
                                <dd class="col-sm-4 text-end">${item.productGTransFat}公克</dd>
                    
                                <dt class="col-sm-5 text-truncate ">碳水化合物</dt>
                                <dd class="col-sm-3 text-end">${item.productSCarbohydrate}</dd>
                                <dd class="col-sm-4 text-end">${item.productGCarbohydrate}公克</dd>
                    
                                <dt class="col-sm-5 text-truncate" style="padding-left: 28px;">糖</dt>
                                <dd class="col-sm-3 text-end">${item.productSSugar}</dd>
                                <dd class="col-sm-4 text-end">${item.productGSugar}公克</dd>
                                
                    
                                <dt class="col-sm-4">鈉</dt>
                                <dd class="col-sm-4 text-end">${item.productSNa}</dd>
                                <dd class="col-sm-4 text-end ">${item.productGNa}毫克</dd>
                    
                            </dl>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>`;
    });
  });
