// 會員專區 memberfile ----------------------------------------------------------------------------------------會員專區 memberfile---
const membersFileCheck = document.querySelector(".membersFileCheck");
// const save = document.querySelector(".save");

let memberName = document.getElementById("memberName");
let memberBirth = document.getElementById("memberBirth");
let memberHomePhone = document.getElementById("memberHomePhone");
let memberMobilePhone = document.getElementById("memberMobilePhone");
let memberMail = document.getElementById("memberMail");
let memberAddress = document.getElementById("memberAddress");
let memberPostcode = document.getElementById("memberPostcode");
let Id = document.getElementById("Id");

let data = {
  memberName,
  memberBirth,
  memberHomePhone,
  memberMobilePhone,
  memberMail,
  memberAddress,
  Id,
};

let obj = {};

// const token = localStorage.getItem("token");
// console.log(token);

function getMemberflie() {
  axios({
    method: "get",
    url: "https://nuts-final.rocket-coding.com/api/members",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(function (res) {
    console.log(res);

    localStorage.setItem("token", res.data.token);

    memberId = res.data.memberInfo.Id;
    memberName = res.data.memberInfo.memberName;
    memberBirth = res.data.memberInfo.memberBirth;
    memberHomePhone = res.data.memberInfo.memberHomePhone;
    memberMobilePhone = res.data.memberInfo.memberMobilePhone;
    memberMail = res.data.memberInfo.memberMail;
    memberAddress = res.data.memberInfo.memberAddress;

    membersFileCheck.innerHTML = `
  <div class="membersFileCheck col-sm-10 container " data-id="${memberId}"> 
  
            <table class="table">
                <div class="bg-primary rounded-1 text-center text-white mb-3" >
                    <h4 class="m-0 py-1" >會員資料</h4>
                </div>
            </table>
    
            <label for="basic-url" class="form-label">會員姓名</label>
            <div class="input-group mb-3">
                <input type="text" class="memberName form-control" data-info="memberName" placeholder="王小明" aria-label="Username" aria-describedby="basic-addon1" value="${memberName}" >
            </div>
    
            <label for="basic-url" class="form-label">出生年/月/日</label>
            <div class="input-group mb-3">
                <input type="date" class="memberBirth form-control" data-info="memberBirth" placeholder="1991/01/02" aria-label="basic-addon5" value="${memberBirth}">
            </div>
    
            <label for="basic-url" class="form-label">市話 含區碼</label>
            <div class="input-group mb-3">
                <input type="number" class="memberHomePhone form-control" data-info="memberHomePhone" placeholder="02-1234-4567" aria-label="Username" aria-describedby="basic-addon2" value="${memberHomePhone}">
            </div>
    
            <label for="basic-url" class="form-label">手機</label>
            <div class="input-group mb-3">
                <input type="number" class="memberMobilePhone form-control" data-info="memberMobilePhone" placeholder="09-12334567" aria-label="mobile" aria-describedby="basic-addon3" value="${memberMobilePhone}">
            </div>
    
            <label for="basic-url" class="form-label">電子信箱</label>
            <div class="input-group mb-3">
                <input type="email" class="memberMail form-control" data-info="memberMail" placeholder="abe@nuts.com" aria-label="email" aria-describedby="basic-addon4" value="${memberMail}" disabled>
            </div>
            <label for="basic-url" class="form-label">郵遞區號</label>
            <div class="input-group mb-3">
                <input type="text" class="memberPostcode form-control" data-info="memberPostcode" placeholder="800 " aria-label="postcode" aria-describedby="basic-addon6" value="${memberPostcode}">
            </div>
            <label for="basic-url" class="form-label">聯絡地址</label>
            <div class="input-group mb-3">
                <input type="text" class="memberAddress form-control" data-info="memberAddress" placeholder="高雄市三民區" aria-label="Address" aria-describedby="basic-addon6" value="${memberAddress}">
            </div>
    
            <a href="#"><button class=" profileSave btn btn-primary justify-content-center" type="submit">確定修改</button></a>
    
        </div>`;

    //表單儲存
    // save.addEventListener("click", function (e) {
    //     if (memberBirth.value == "null") {
    //       alert("your bDay!!!!");
    //     }
    //   });
    //   console.log(save);
    // });

    console.log(membersFileCheck);

    //監聽表格是否為空值 (沒有輸入進去)
    const profileSave = document.querySelector(".profileSave");
    const newInfoData = document.querySelectorAll("[data-info]");
    profileSave.addEventListener("click", function (e) {
      //取值 ------------------------------------------------------------------回來新增ＰＵＳＨ 取到值然後ＰＵＳＨ進ＩＮＰＵＴ裏面
      e.preventDefault();
      newInfoData.forEach(function (item) {
        obj["memberId"] = memberId;
        obj[item.dataset.info] = item.value;
      });
      console.log(obj);

      //   axios({
      //     method: "put",
      //     url: "https://nuts-final.rocket-coding.com/api/editmember",
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   });
      console.log(profileSave);

      //   if (
      //     memberBirth == null ||
      //     memberAddress == null ||
      //     memberMobilePhone == null
      //   ) {
      //     console.log(memberBirth, memberAddress, memberMobilePhone);
      //     alert("請確認資料是否填寫");
      //     return;
      //   } else {
      //     // console.log(memberBirth, memberAddress, memberMobilePhone);
      //     alert("資料更新成功！");
      //     return;
      //   }

      //  更新會員資料 put

      axios({
        method: "put",
        url: "https:nuts-final.rocket-coding.com/api/editmember",
        headers: {
          Authorization: `Bearer ${token}`,
          //   "Content-Type": "application/x-www-form-urlencoded",
        },
        // obj,
        data: {
          memberName: obj.memberName,
          memberBirth: obj.memberBirth,
          memberMobilePhone: obj.memberMobilePhone,
          memberHomePhone: obj.memberHomePhone,
          memberPostcode: obj.memberPostcode,
          memberMail: obj.memberMail,
          memberAddress: obj.memberAddress,
        },
      }).then(function (response) {
        console.log(response.data);
      });
    });
  });
}

getMemberflie();

//     axios(config)
//         .then(function (response) {
//         console.log(JSON.stringify(response.data));
//         })
//         .catch(function (error) {
//         console.log(error);
//         });
