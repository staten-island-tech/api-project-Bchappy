import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "i7NBVLUt7zb2aigI2OkdIsBQjUXIOpJy";
const query = async function (genre) {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=${key}`
    );
    const data = await response.json();
    console.log(data.results.books);
    data.results.books.forEach((book) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="book-card">
            <div class="book-card-front">
              <img
                src=${book.book_image}
                alt=""
                class="poster"
              />
            </div>
            <div class="book-card-back">
              <h3 class="book-card-header">${book.title}</h3>
              <div class="author-box">
                <p class="author">${book.author}</p>
                <p class="author"></p>
              </div>
              <div class="score-box">
                <p class="ranking">Best Seller Ranking</p>
                <p class="ranking">#${book.rank}</p>
              </div>
    
              
    
              
              <a href="${book.amazon_product_url}" class="amazon">See on Amazon</a>
            
            </div>
          </div>`
      );
    });
  } catch (error) {
    alert("An error occured. Please try again.");
  }
};
query("picture-books");
//hardcover-fiction    hardcover-nonfiction   young-adult-hardcover   childrens-middle-grade-hardcover    picture-books

/* const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors;.searchArea.value;
  });
}; */

const navBar = document.querySelector(".fiction");
Fiction.addEventListener("click", function () {
  query("hardcover-fiction");
});

const navBar2 = document.querySelector(".Non-fiction");
Fiction.addEventListener("click", function () {
  query("hardcover-nonfiction");
});
