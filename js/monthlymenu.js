// 全域變數
// const url = "https://tastynuts.rocket-coding.com/image";

const monthlyItem = document.querySelector(".monthlyItem");
console.log(monthlyItem);
const toSubNuts = document.querySelector(".toSubNuts");
// const toSub = document.getElementById("addCartBtn");
// console.log(toSub);

toSubNuts.addEventListener("click", function (e) {
  //   console.log(status.checked);
  // });
  // console.log(toSubNuts);
  // toSubNuts.addEventListener("click", function () {
  // e.preventDefault();
  alert("YYyyyyyy");
  // function nextPage() {
  //   window.location.href = "monthly.html";
  // }
  // nextPage();
  // window.location.href = "monthly.html";
});
// console.log(toSub);

axios
  .get("https://tastynuts.rocket-coding.com/api/subscriptionlist")
  .then(function (res) {
    console.log(res);
    let data = res.data[0].subscriptionName;
    let summary = res.data[0].subscriptionSummary;
    let subImg = res.data[0].subscriptionImgCover;
    let Id = res.data[0].Id;
    console.log(Id);

    let str = ` <div class="card mb-3 ">
                    <div class="row g-0 rounded">
                        <div class="col-md-4 p-2">
                            <img src="${url}${subImg}" class="img-fluid rounded-3 "alt="果昔">
                        </div>

                        <div class="col-md-8 my-auto">
                            <div class="card-body">
                                <h5 class="card-title">${data}</h5>
                                <p class="card-text h-50">${summary}</p>
                            </div>
                            <div class="d-md-flex justify-content-md-end align-items-end">
                            <button class="toSub btn btn-primary me-2" id="addCartBtn" data-id="1" type="button" ref="product.html?productId=44" ">檢視詳情</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    monthlyItem.innerHTML = str;

    monthlyItem.addEventListener("click", function (e) {
      console.log(e.target.nodeName);
      if (e.target.nodeName == "BUTTON") {
        window.location.href = "monthly.html";
      }
    });

    //     function nextPage() {
    //   window.location.href = "monthly.html";
    // }

    // console.log(data);
    // let strList = "";

    // strList.forEach((item) => {
    //   console.log(item);
    // });
    // console.log(str);
  });
