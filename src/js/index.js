import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "i7NBVLUt7zb2aigI2OkdIsBQjUXIOpJy";
const query = async function(){
    try{
        const response = await fetch(
            `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`
        );
        const data = await response.json();
        console.log(data.results.books);
    }
    catch (error) {
        alert("An error occured. Please try again.");
    }
}
query();