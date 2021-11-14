//
const profileSt = document.querySelector(".profileSt");
const profileSecond = document.querySelector(".profileSecond");
const newSecondInfo = document.querySelectorAll("[data-sent]");
const toComfirm = document.querySelector(".toComfirm");

function getMemberData() {
  axios({
    method: "get",
    url: "https://nuts-final.rocket-coding.com/api/membership",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(function (res) {
    console.log(res.data.showmember);
    data = res.data.showmember;
    // console.log(item.data.showmember);
    profileSt.innerHTML = `<form class="row g-3 " >

          <div class="col-md-12">
              <label for="inputFristname4" class="form-label">姓名</label>
              <input type="text" class="memberName form-control" data-order="memberName" id="inputFristname4" value="${data.memberName}">
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

    let obj = [];
    // let newdata = {
    //   memberId: res.data.showmember.Id,
    //   memberName: res.data.showmember.memberName,
    //   memberBirth: res.data.showmember.memberBirth,
    //   memberHomePhone: res.data.showmember.memberHomePhone,
    //   memberMobilePhone: res.data.showmember.memberMobilePhone,
    //   memberMail: res.data.showmember.memberMail,
    //   memberAddress: res.data.showmember.memberAddress,
    // };

    // 新增
    // const memberName = document.querySelector(".memberName");
    // const memberMail = document.querySelector("#mobile").textContent;
    // const memberMobilePhone = document.querySelector(".memberMobilePhone");
    // const memberHomePhone = document.querySelector(".memberHomePhone");
    // const memberMail = document.querySelector(".memberMail");
    // const memberAddress = document.querySelector(".memberAddress");
    // const memberPostcode = document.querySelector(".memberPostcode");
    // let newData = {
    //   memberName,
    //   memberHomePhone,
    //   memberMobilePhone,
    //   memberMail,
    //   memberAddress,
    //   memberPostcode,
    // };
    // console.log(memberMail);

    // newData.push();

    toComfirm.addEventListener("click", function (e) {
      e.preventDefault();

      //   console.log(newData);

      newSecondInfo.forEach(function (item) {
        obj = item.value;
        console.log(obj);
        //會一直被覆蓋---------------------------------------------------
        // newdata.push(obj);
      });
      localStorage.setItem("shippingInfo", obj);
    });
  });
}
getMemberData();
// console.log(getMemberData);

// const buyerData = JSON.stringify(getproductDATA);
//     localStorage.setItem("productQuantity", cartInfoData);
// });

// const addTicket = document.querySelector(".addTicket-btn");
// addTicket.addEventListener("click",addData);
// function addData(){
//     let obj = {};
//     const dataNum = document.querySelectorAll("[data-num]");
//     dataNum.forEach(function(item){
//         obj["id"] = data.length;
//         obj[item.dataset.num] = item.value;
//         item.value = ""; // input的值寫入完就清空
//     });
//     data.push(obj);
//     renderData(data);
// };
