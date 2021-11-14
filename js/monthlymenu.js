// 全域變數
// const url = "https://nuts-final.rocket-coding.com/image";

const monthlyItem = document.querySelector(".monthlyItem");

let str = ` <div class="row g-0 rounded">
                <div class="col-md-4 p-2">
                    <img src="./image/禮盒/IMG_3735.jpg" class="img-fluid rounded-3 "alt="果昔">
                </div>

                <div class="col-md-8 my-auto">
                    <div class="card-body">
                        <h5 class="card-title">裸包腰果 - 配送方案</h5>
                        <p class="card-text h-50">裸包裝，講求保鮮、保脆真空袋，原味腰果季配送.</p>
                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                    </div>
                    <div class="d-md-flex justify-content-md-end align-items-end">
                        <a href="monthly.html" class="btn btn-primary me-md-4 ">我要訂閱</a>
                    </div>
                </div>
            </div>`;

axios
  .get("https://nuts-final.rocket-coding.com/api/subscriptionlist")
  .then(function (res) {
    console.log(res);
  });
