const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuote = document.getElementById("new-quote");
// data.quoteText .quoteAuthor

// Get Quote From API
async function getQuote() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = `http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;

    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();

        // If author is blank or empty
        if (data.quoteAuthor === "") {
            authorText.innerText = "Unknown";
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        
        // Reduce font size for long quotes
        if (data.quoteText.length > 50) {
            quoteText.classList.add("long-quote");
        } else {
            quoteText.classList.remove("long-quote");
        }
        
        quoteText.innerText = data.quoteText;

        
    } catch (error) {
        getQuote();
    }
}

// On Load
getQuote();