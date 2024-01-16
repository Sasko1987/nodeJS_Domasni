const btn = document.getElementById("btn");
const quote = document.getElementById("show-quote");
const author = document.getElementById("show-author");
const authorContainet = document.getElementById("author");

async function getQuote() {
  try {
    quote.innerText = "searhing for quote";
    authorContainet.style.display = "none";
    btn.innerText = "loading...";
    btn.disabled = true;
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    btn.innerText = "Get a qute";
    btn.disabled = false;
    authorContainet.style.display = "block";
    quote.innerText = data.content;
    author.innerText = data.author;
  } catch (error) {
    quote.innerText = "An error happened";
  }
}
getQuote();

btn.addEventListener("click", getQuote);
