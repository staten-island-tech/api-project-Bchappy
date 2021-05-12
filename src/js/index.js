import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "i7NBVLUt7zb2aigI2OkdIsBQjUXIOpJy";
const query = async function(){
    try{
        const response = await fetch(
            `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=${key}`
        );
        const data = await response.json();
        console.log(data.results.books);
        data.results.books.forEach((book) =>{
            DOMSelectors.grid.insertAdjacentHTML("beforeend", `<div class="movie-card">
            <div class="movie-card-front">
              <img
                src=${book.book_image}
                alt=""
                class="poster"
              />
            </div>
            <div class="movie-card-back">
              <h3 class="movie-card-header">${book.title}</h3>
              <div class="score-box">
                <p class="user-score">Best Seller Ranking</p>
                <p class="user-score">#${book.rank}</p>
              </div>
    
              <div class="release-box">
                <p class="release-date">Released</p>
                <p class="release-date">2020-06-12</p>
              </div>
    
              <div class="movie-genres">
                <a href="${book.amazon_product_url}" class="movie-genre">See on Amazon</a>
              </div>
            </div>
          </div>`)
        })
    }
    catch (error) {
        alert("An error occured. Please try again.");
    }
}
query();