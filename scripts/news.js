let API_KEY = "9ab1dbc9302b44688d87ac91b5e73cba";

let newsContainer = document.getElementById("news-container");
let prevBtn = document.getElementById("btn-prev");
let pageNum = document.getElementById("page-num");
let nextBtn = document.getElementById("btn-next");

let currentUser = getFromStorage("LoginUser")
  ? parseUser(getFromStorage("LoginUser"))
  : null;
let currentPage = 1;
let pageSize = getFromStorage("PageSize") || 10;
let newsCategory = getFromStorage("Category") || "business";

function renderApiData() {
  currentUser
    .getData(API_KEY, currentPage, pageSize, newsCategory)
    .then((data) => {
      if (data.articles) {
        if (currentPage >= Math.floor(data.totalResults / pageSize)) {
          nextBtn.style.display = "none";
          if (currentPage !== 1) {
            currentPage = Math.floor(data.totalResults / pageSize);
            pageNum.innerHTML = currentPage;
          }
        } else {
          nextBtn.style.display = "block";
          pageNum.innerHTML = currentPage;
        }
        let articleContent = data.articles
          .map(
            (article) =>
              `<div class="card">
              <div class="row" style="min-height: 16rem;">
                <div class="col-md-4 my-auto">
                  <img src="${article.urlToImage}"
                    class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                    <a href="#" class="btn btn-primary">View</a>
                  </div>
                </div>
              </div>
            </div>`
          )
          .join("");
        newsContainer.innerHTML = articleContent;
      }
    });
  if (currentPage == 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
}

if (currentUser) renderApiData();

function renderNextClick() {
  currentPage++;
  renderApiData();
}
function renderPrevClick() {
  currentPage--;
  renderApiData();
}

nextBtn.addEventListener("click", renderNextClick);
prevBtn.addEventListener("click", renderPrevClick);
