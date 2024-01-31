
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";

async function getUrl(url){
    let res = await fetch(url);
    let data = await res.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}