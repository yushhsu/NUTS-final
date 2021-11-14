//註冊會員signup--------------------------------------------------------------------------------------------註冊會員signup---

const memberAccount = document.querySelector(".memberAccount");
// console.log(memberAccount);

// function loginInformation() {
memberAccount.addEventListener("click", function (e) {
  //   console.log(inputSignupUsername.value);

  if (e.target.nodeName === "BUTTON") {
    e.preventDefault();
    // console.log("123");
    // console.log(validationUsername.value);
    let obj = {
      memberName: inputSignupUsername.value,
      memberPassword: inputSignupPassword.value,
      memberMail: inputSignupEmail.value,
      memberIsVerfied: false,
      memberIsSNS: false,
    };
    console.log(obj);

    axios
      .post("https://nuts-final.rocket-coding.com/api/addmembers", obj)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }
});
// }
// loginInformation();

//登入login--------------------------------------------------------------------------------------------登入---
const loginBtn = document.querySelector(".loginBtn");
const loginPassword = document.querySelector(".loginPassword");
const loginMail = document.querySelector(".loginEmail");

loginBtn.addEventListener("click", logIncheck, false);

function logIncheck() {
  // let memberData = {
  //   memberMail: "chywen18@gmail.com",
  //   memberPassword: "ckshrimp",
  // };

  // if (memberMail.value == "" || memberPassword.value == "") {
  //   alert("資料有誤");
  //   return;
  // }

  let memberData = {};
  memberData.memberMail = loginMail.value;
  // console.log(memberData.memberMail);
  memberData.memberPassword = loginPassword.value;
  // console.log(memberData);

  axios
    .post("https://nuts-final.rocket-coding.com/api/login", memberData)
    .then((res) => {
      console.log(res.data);

      if (res.data.status) {
        //存token
        localStorage.setItem("token", res.data.token);
        window.location.href = "memberfile.html";
      } else {
        alert("此帳號不存在或帳號密碼錯誤");
      }
    });
}

// 驗證信箱-------------------------------------------------------------------------------------

// function validateEmail(mail) {
//   if (
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//       mail
//     )
//   ) {
//     return true;
//   }
//   return false;
// }
