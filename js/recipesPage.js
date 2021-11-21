// 菜單頁--------------------------------------------------------------------------------------------菜單頁---
const recipeItem = document.querySelector(".recipeItem");
function combineRecipeItem(item) {
  return `
                <div class="row my-md-5 center">
                    <div class="col-md-8 ">
                        <img src="${url}/${item.recipeCover}" class="w-50 h-auto" alt="">
                    </div>
                    <div class="col-md-4 ">
                        <dl class="row mb-0 border border-dark p-4 m-1"> 
                            <dt class="col ">
                            <h5>所需材料</h5>
                            <p>${item.recipeIngredient}</p>
                            </dt>
                            
                        </dl>
                    </div> 
                </div>
                <div class="row my-md-5 center">
    
                    <div class="process col-md-8">
                        <h3 class="pb-3">步驟：</h3>
                        <h4>第一步</h4>
                        <P>${item.recipeStep01}</P>
                        <h4>第二步</h4>
                        <P>${item.recipeStep02}</P>
                        <h4>第三步</h4>
                        <P>${item.recipeStep03}</P>
                        <h4>完成 !</h4>
                    </div>
                    
                
                    <div class="col-md-4 col-md-ms-2  ">
                        
    
                        <div class="recipesTitle">
                            <div class="recipesName pb-3 ">
                            <h2>${item.recipeTitle}</h2>
                            </div>
                            <p>${item.recipeSummary}</p>
                        </div>
                    </div>
                </div>
            `;
}

function getRecipeDetailData() {
  axios
    .get(`https://tastynuts.rocket-coding.com/api/recipes/${eachProductId}`)
    .then(function (res) {
      let data = [];
      data.push(res.data);
      // console.log(data);

      data.forEach(function (item) {
        recipeItem.innerHTML = combineRecipeItem(item);
      });
    });
}
getRecipeDetailData();
