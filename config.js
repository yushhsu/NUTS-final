const api_path = "";
const token =
  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6NywiTmFtZSI6Illpd2VuIiwiRXhwIjoiMTEvNC8yMDIxIDExOjQ1OjQ3IFBNIn0.05OgpZtaWfFqTdNuMIcSZFRjZ1xPDbmwH3ciTqYS0L-ckY-s3mg9u2goqJBeIYO4MvkxFZlkVcZsmRjNeKqAnw";
const url = "https://nuts-final.rocket-coding.com/api/image";

// const instance = axios.create({
//   baseURL: "https://nuts-final.rocket-coding.com/api/image",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
// });

// console.log(api_path,token);

//get api並驗證有沒有執行
// const productList = document.querySelector(".productWarp");

// function getProductList() {
//   axios
//     .get("https://nuts-final.rocket-coding.com/api/${api_path}")
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
//         .get("https://nuts-final.rocket-coding.com/api/products/1")
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
//       .get("https://nuts-final.rocket-coding.com/api/recipes/1")
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
