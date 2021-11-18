// 商品頁 products--------------------------------------------------------------------------------------------商品頁---

const monthly = document.querySelector(".monthly");
console.log(monthly);
const eachProduct = document.querySelector(".eachProduct");
console.log(eachProduct);
axios
  .get(`https://tastynuts.rocket-coding.com/api/subscription/1`)
  .then(function (res) {
    // let data = [];
    console.log(res);

    // data.push(response.data);
    // // console.log(data);
    // data.forEach(function (item) {
    //   console.log(item);

    //加入變數
    monthly.innerHTML = `
            <div class="container">
                <div class="row my-5 eachProduct >
                    <div class="col-md-6 h-75">
                        <figure class="figure">

                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="${url}/${res.data.subscription.subscriptionImgCover}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${url}/${res.data.subscription.subscriptionImgCover}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${url}/${res.data.subscription.subscriptionImgCover}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${url}/${res.data.subscription.subscriptionImgCover}" class="d-block w-100" alt="...">
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
                                <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="${url}/${res.data.subscription.subscriptionImgCover}" alt="" class="w-75"></button>
                                <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><img src="${url}/${res.data.subscription.subscriptionImgCover}" alt="" class="w-75"></button>
                                <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><img src="${url}/${res.data.subscription.subscriptionImgCover}" alt="" class="w-75"></button>
                                <button class="btn col-sm-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"><img src="${url}/${res.data.subscription.subscriptionImgCover}" alt="" class="w-75"></button>
                            </figcaption>
                        </figure>
                    </div>

                    <div class="col-md-6 d-flex flex-column ">
                        <div class="productPrice row ">
                            <div class="productPrice row ">
                                <div class="DetailDetail col-md-8 ">
                                    <h2>${res.data.subscription.subscriptionName}</h2>
                                    <h4>規格大小 - 470ML </h4>
                                </div>
                                <h3 class=" col-md-4 text-end">NT$ ${res.data.subscription.subscriptionPrice}</h>
                            </div>
                        </div>
                        <h4>產品描述</h4>
                        <p >${res.data.subscription.subscriptionDescription}</p>
                    
                        <div class="subInput input-group">
                        <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                            <option selected>請選擇數量</option>
                            <option class="subscriptioncCycle" value="雙週">雙週配送</option>
                            <option class="subscriptioncCycle" value="月">每月配送</option>
                            <option class="subscriptioncCycle" value="季">每季配送</option>
                        </select>
                        <button class="addCart btn btn-outline-secondary" id="addCartBtn" data-id="${res.data.subscription.Id}" type="button">加到購物車</button>
                    </div>
                    </div>

                    <div class="discripction col-sm-6 "></div>

                    <div class="container mt-5">
                        <div class="row ">
                            <div class="productDetail col-md-6">
                                <h4>產品描述</h4>
                                <h5>${res.data.subscription.subscriptionSummary}</h5>
                                <h4>方案內容</h4>
                                <h5>裸包裝500G * 1</h5>
                                <h5>珍辰精選禮 * 1</h5>
                            </div>

                            <div class="nutrition col-lg-4 border border-dark">
                                <dl class="row mb-0">
                                    <dt class="col-lg-7">營養標示</dt>
                                    <dd class="col-lg-5 text-end"></dd>
                                    <dt class="col-lg-7">每份含量</dt>
                                    <dd class="col-lg-5 text-end">${res.data.subscription.subscriptionServing}公克</dd>
                                    <dt class="col-lg-7">本包裝含</dt>
                                    <dd class="col-lg-5 text-end">${res.data.subscription.subscriptionIncluding}份</dd>
                                    <dt class="col-lg-5 text-end"></dt>
                                    <dd class="col-lg-3 text-end">每份</dd>
                                    <dd class="col-lg-4 text-end">每100公克</dd>

                                    <dt class="col-sm-5">熱量</dt>
                                    <dd class="col-sm-3 text-end">${res.data.subscription.subscriptionSCalories}</dd>
                                    <dd class="col-sm-4 text-end">${res.data.subscription.subscriptionGCalories}大卡</dd>

                                    <dt class="col-sm-5">蛋白質</dt>
                                    <dd class="col-sm-3 text-end">${res.data.subscription.subscriptionSProtein}</dd>
                                    <dd class="col-sm-4 text-end">${res.data.subscription.subscriptionGProtein}公克</dd>

                                    <dt class="col-sm-5">脂肪</dt>
                                    <dd class="col-sm-3 text-end">${res.data.subscription.subscriptionSFat}</dd>
                                    <dd class="col-sm-4 text-end">${res.data.subscription.subscriptionGFat}公克</dd>

                                    <dt class="col-sm-5 text-truncate " style="padding-left: 28px;">飽和脂肪</dt>
                                    <dd class="col-sm-3 text-end">${res.data.subscription.subscriptionSSaturatedFat}</dd>
                                    <dd class="col-sm-4 text-end">${res.data.subscription.subscriptionSSaturatedFat}公克</dd>

                                    <dt class="col-sm-5 text-truncate "style="padding-left: 28px;">反式脂肪</dt>
                                    <dd class="col-sm-3 text-end ">${res.data.subscription.subscriptionSTransFat}</dd>
                                    <dd class="col-sm-4 text-end">${res.data.subscription.subscriptionGTransFat}公克</dd>

                                    <dt class="col-sm-5 text-truncate ">碳水化合物</dt>
                                    <dd class="col-sm-3 text-end">${res.data.subscription.subscriptionSCarbohydrate}</dd>
                                    <dd class="col-sm-4 text-end">${res.data.subscription.subscriptionGCarbohydrate}公克</dd>

                                    <dt class="col-sm-5 text-truncate" style="padding-left: 28px;">糖</dt>
                                    <dd class="col-sm-3 text-end">${res.data.subscription.subscriptionSSugar}</dd>
                                    <dd class="col-sm-4 text-end">${res.data.subscription.subscriptionGSugar}公克</dd>

                                    <dt class="col-sm-4">鈉</dt>
                                    <dd class="col-sm-4 text-end">${res.data.subscription.subscriptionSNa}</dd>
                                    <dd class="col-sm-4 text-end ">${res.data.subscription.subscriptionGNa}毫克</dd>

                                </dl>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`;
  });

console.log(monthly);

//監聽加入購物車
