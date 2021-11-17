const api_path = "";
const token = localStorage.getItem("token");

const url = "https://tastynuts.rocket-coding.com/image";
const imgUrl = "https://tastynuts.rocket-coding.com";
const productCoverUrl =
  "https://tastynuts.rocket-coding.com/image/product_Cover";
// const productImgUrl = "https://tastynuts.rocket-coding.com/image/product_Img";

//banner--------------------------------------------------------------------------------------------banner---
// axios
//   .get("https://tastynuts.rocket-coding.com/api/banners")
//   .then(function (res) {
//     formData.get("bannerName");
//     console.log(bannerName);
//     console.log(res.data);
//     const bannerData = res.data;
//     const mainImg = res.data.bannerName;
//     const bannerUrl = `https://tastynuts.rocket-coding.com/image/${mainImg}`;
//     // const BannerData = new FormData(document.getElementById("banner"));
//     //     BannerData.get("banner");
//   });

//產品頁-網址傳值
var siteUrl = location.href;
//再來用去尋找網址列中是否有資料傳遞(QueryString)
if (siteUrl.indexOf("?") != -1) {
  //之後去分割字串把分割後的字串放進陣列中
  var ary1 = siteUrl.split("?");
  //此時ary1裡的內容為：
  //ary1[0] = 'index.aspx'，ary2[1] = 'id=U001&name=GQSM'

  //下一步把後方傳遞的每組資料各自分割
  var ary2 = ary1[1].split("&");
  //此時ary2裡的內容為：
  //ary2[0] = 'id=U001'，ary2[1] = 'name=GQSM'

  //最後如果我們要找id的資料就直接取ary[0]下手，name的話就是ary[1]
  var ary3 = ary2[0].split("=");
  //此時ary3裡的內容為：
  //ary3[0] = 'id'，ary3[1] = 'U001'

  //取得id值
  var eachProductId = ary3[1];
}

// const instance = axios.create({
//   baseURL: "https://tastynuts.rocket-coding.com/api/image",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
// });

// console.log(api_path,token);

//get api並驗證有沒有執行
// const productList = document.querySelector(".productWarp");

// function getProductList() {
//   axios
//     .get("https://tastynuts.rocket-coding.com/api/${api_path}")
//     .then(function (response) {
//       //看data有幾筆
//       console.log(response.data);
//       productData = response.data.products;

//       let str = "";
//       productData.forEach(function (item) {
//         str += `<li>${item.title}</li>`;
//       });
//       productList.innerHTML = str;
//     });
// }

//針對ul DOM監聽

// const eachProduct = document.querySelector(".eachProduct");
// let data = [];

// function getProductList() {
//     axios
//         .get("https://tastynuts.rocket-coding.com/api/products/1")
//         .then(function (response) {
//             itemData = response.data.products;
//             renderProductList()
//         })

//     function combineProductHTMLItem(item) {
//         return ` `;
//     };
//     renderProductList(){
//         data.forEach(function (item) {
//             console.log(item);
//             str += combineProductHTMLItem(item);
//         });
//         eachProduct.innerHTML = combineProductHTMLItem(item);
//     }
// }

// function getRecipeDetailData() {
//     axios
//       .get("https://tastynuts.rocket-coding.com/api/recipes/1")
//         .then(function (res) {

//         }

//   getRecipeDetailData();

//         let data = [];
//         data.push(res.data);
//         // console.log(data);
//         data.forEach(function (item) {
//           //   console.log(item);
//           recipeItem.innerHTML = ;
//           // });
//           // recipelist.innerHTML = str;
//           // console.log(str);
//         });
//       };

// function combineRecipeHTMLItem(item) {
//         return `
//         <div class="row my-md-5 center">
//             <div class="col-md-8 ">
//                 <img src="./image/第二期/IMG_9844.JPG" class="w-50 h-auto" alt="">
//             </div>
//             <div class="col-md-4 ">
//                 <dl class="row mb-0 border border-dark p-4 m-1">
//                     <dt class="col ">
//                     <h5>所需材料</h5>
//                     <p>${item.recipeIngredient}</p>
//                     </dt>

//                 </dl>
//             </div>
//         </div>
//         <div class="row my-md-5 center">

//             <div class="process col-md-8">
//                 <h3 class="pb-3">步驟：</h3>
//                 <p>${item.recipeStep}</p>
//             </div>

//             <div class="col-md-4 col-md-ms-2  ">

//                 <div class="recipesTitle">
//                     <div class="recipesName pb-3 ">
//                     <h2>${item.recipeTitle}</h2>
//                     </div>
//                     <p>${item.recipeSummary}</p>
//                 </div>
//             </div>
//         </div>
//     `
//     }

// function recipeDetail() {
//     let str = "";
//     data.forEach(function (item) {
//         str += combineRecipeHTMLItem(item);
//     });
//     recipeDetail.innerHTML = str;
// }
