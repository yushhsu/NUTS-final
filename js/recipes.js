// 菜單recipe--------------------------------------------------------------------------------------------菜單recipe---

const recipelist = document.querySelector(".recipelist");

// 跳頁進去閱讀;
recipelist.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") == read) {
    return;
  }
});

function getRecipeData() {
  axios
    .get("https://tastynuts.rocket-coding.com/api/recipeslist")
    .then(function (res) {
      console.log(res);
      let data = res.data.recipelist;
      console.log(data);
      let str = "";

      data.forEach(function (item) {
        console.log(item);

        str += `
      <div class="container my-5 recipelist">
            <div class=" card mb-3 ">
                <div class="row g-0 rounded">
                    <div class="col-md-4 p-2">
                        <img src="${url}/${item.recipeCover}" class="img-fluid rounded-3 "alt="果昔">
                    </div>
                    <div class="col-md-8 my-auto">
                        <div class="card-body">
                        <h5 class="card-title">${item.recipeTitle}</h5>
                        <p class="card-text h-50">${item.recipeSummary}</p>
                        <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                        </div>
                        <div class="d-md-flex justify-content-md-end align-items-end">
                        <a href="recipesPage.html?recipesId=${item.Id}" class="btn btn-primary me-md-4 ">繼續閱讀</a>
                    </div>
                </div>
            </div>
        </div>
    
        `;
        console.log(item.Id);
      });

      recipelist.innerHTML = str;
    });
}
getRecipeData();
