const profileSt = document.querySelector(".profileSt");
const profileSecond = document.querySelector(".profileSecond");
const newSecondInfo = document.querySelectorAll("[data-sent]");
const toComfirm = document.querySelector(".toComfirm");

console.log(newSecondInfo);

// function getMemberData() {
axios({
  method: "get",
  url: "https://tastynuts.rocket-coding.com/api/membership",
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then(function (res) {
  console.log(res);
  data = res.data.showmember;
  console.log(data);
  console.log(token);
  profileSt.innerHTML = `<form class="row g-3 " >

        <div class="col-md-12">
            <label for="memberName" class="form-label">姓名</label>
            <input type="text" class="memberName form-control" data-order="memberName" id="memberName" value="${data.memberName}">
        </div>

        <div class="col-md-6">
            <label for="mobile" class="form-label">手機</label>
            <input type="tel" class="memberMobile form-control" data-order="memberMobile" id="mobile" value="${data.memberMobile}">
        </div>
        <div class="col-md-6">
            <label for="tel" class="form-label">市話</label>
            <input type="tel" class="memberHomePhone form-control" data-order="memberHomePhone" id="tel" placeholder="非必填" value="${data.memberHomePhone}">
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="memberMail form-control" data-order="memberMail" id="email" aria-describedby="emailHelp" placeholder="test@example.com" value="${data.memberMail}">
        </div>

        <div class="col-md-9">
            <label for="inputAddress" class="form-label">地址</label>
            <input type="text" class="memberAddress form-control" data-order="memberAddress" id="inputAddress" placeholder="縣市/街道/門牌" value="${data.memberAddress}">
        </div>

        <div class="col-md-3">
            <label for="inputZip" class="form-label">郵遞區號</label>
            <input type="text" class="memberPostcode form-control" data-order="memberPostcode" id="inputZip" value="${data.memberPostcode}">
        </div>

        <!-- <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div> -->
    </form> `;

  let sameInfo = profileSt.innerHTML;

  let obj = {};
  let newdata = [
    // {
    //   memberId: res.data.showmember.Id,
    //   memberName: res.data.showmember.memberName,
    //   memberBirth: res.data.showmember.memberBirth,
    //   memberHomePhone: res.data.showmember.memberHomePhone,
    //   memberMobilePhone: res.data.showmember.memberMobilePhone,
    //   memberMail: res.data.showmember.memberMail,
    //   memberAddress: res.data.showmember.memberAddress,
    // },
  ];
  // console.log(newdata);

  // const status = document.getElementById("gridCheck").checked;
  // console.log(status);
  // if (status == "ture") {
  // newSecondInfo.innerHTML = sameInfo;
  // }
  // console.log(status.checked);
  const status = document.querySelector("#gridCheck");
  let checkBox = document.querySelector(".checkBox");
  checkBox.addEventListener("click", function () {
    console.log(status.checked);
    // console.log((newSecondInfo.innerHTML = data));
    if (status.checked) {
      profileSecond.innerHTML = `<form class="row g-3 " >
      <div class="col-12">
                <div class="form-check">
                    <input class="checkBox form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        同上
                    </label>
                </div> 
            </div>

      <div class="col-md-12">
          <label for="memberName" class="form-label">姓名</label>
          <input type="text" class="memberName form-control" data-sent="memberName" id="memberName" value="${data.memberName}">
      </div>

      <div class="col-md-6">
          <label for="mobile" class="form-label">手機</label>
          <input type="tel" class="memberMobile form-control" data-sent="memberMobile" id="mobile" value="${data.memberMobile}">
      </div>
      <div class="col-md-6">
          <label for="tel" class="form-label">市話</label>
          <input type="tel" class="memberHomePhone form-control" data-sent="memberHomePhone" id="tel" placeholder="非必填" value="${data.memberHomePhone}">
      </div>

      <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="memberMail form-control" data-sent="memberMail" id="email" aria-describedby="emailHelp" placeholder="test@example.com" value="${data.memberMail}">
      </div>

      <div class="col-md-9">
          <label for="inputAddress" class="form-label">地址</label>
          <input type="text" class="memberAddress form-control" data-sent="memberAddress" id="inputAddress" placeholder="縣市/街道/門牌" value="${data.memberAddress}">
      </div>

      <div class="col-md-3">
          <label for="inputZip" class="form-label">郵遞區號</label>
          <input type="text" class="memberPostcode form-control" data-sent="memberPostcode" id="inputZip" value="${data.memberPostcode}">
      </div>

      <!-- <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
      </div> -->
  </form> `;
      console.log(data);
      localStorage.setItem("shippingInfo", JSON.stringify(data));
    } else {
      const newSecondInfo2 = document.querySelectorAll("[data-sent]");
      newSecondInfo2.forEach(function (item) {
        console.log(item);
        item.value = "";
      });
    }
  });

  toComfirm.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(newSecondInfo);
    //   console.log(newData);
    const newSecondInfo2 = document.querySelectorAll("[data-sent]");
    newSecondInfo2.forEach(function (item) {
      obj[item.dataset.sent] = item.value;
      // console.log(obj);
    });
    newdata.push(obj);
    console.log(newdata);
    window.location.href = "comfirm.html";
    localStorage.setItem("shippingInfo", JSON.stringify(obj));
  });
});

function countingProduct() {
  myData.forEach(function (item) {
    console.log(item);
    dataStr += `
        <div class="comfirmData row bg-light mx-auto py-1 ">
            <p class="text-center col-md-5">${item.productName}</p>
            <p class="col-md-3 text-center align-self-center">${
              item.productSpePrice
            }</p>
            <p class="col-md-1 text-center align-self-center" >${
              item.productQuantity
            }</p>
            <p class="col-md-3 text-center align-self-center">${
              item.productSpePrice * item.productQuantity
            }</p>
        </div>`;
    console.log(item.productSpePrice);

    let totalPrice = 0;
    let totalNum = 0;

    cartData.forEach(function (item) {
      //log 看是不是數字型別
      console.log(typeof item.productQuantity);
      //然後轉型
      let iproductQuantity = parseInt(item.productQuantity);
      let iproductSpePrice = parseInt(item.productSpePrice);
      let price = iproductQuantity * iproductSpePrice;
      let Num = parseInt(item.productQuantity);
      console.log(typeof price);
      totalPrice += price;
      totalNum += Num;
      console.log(price);

      let shippingFee = 0;
      if (totalPrice > 2000) {
        alert("特價");
      } else {
        shippingFee += 100;
      }
      console.log(shippingFee);

      countingPrice.innerHTML = `<div class="countingPrice">
        <div class="row  pt-3 ">
            <p class="col-md-9 text-end">共</p>
            <p class="col-md-2 text-center">${totalNum}</p>
            <p class="col-md-1 text-center">項</p>
            </div>
            <div class="row  pt-3 bg-warning">
            <p class="col-md-9 text-end">訂單金額小記NT$</p>
            <p class="col-md-2 text-center">${totalPrice}</p>
            <p class="col-md-1 text-center">元</p>
            </div>
            
         <div class="row border-top pt-3 ">
             <p class="col-md-9 text-end">運費NT$</p>
             <p class="col-md-2 text-center">${shippingFee}</p>
             <p class="col-md-1 text-center">元</p>
         </div>
         <div class="row  pt-3 bg-warning">
             <p class="col-md-9 text-end">本訂單需付款金額NT$</p>
             <p class="col-md-2 text-center">${totalPrice + shippingFee}</p>
             <p class="col-md-1 text-center">元</p>
         </div>

         </div>`;
    });
  });
}
countingProduct();
