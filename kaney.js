//ARROW FUNCTION
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
loadQuotes();
//jete 1 ta parameter (quote) tain () 1st bracket lagbe na
const displayQuotes = quote => {
    // console.log(quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}


//JSON PLACEHOLDER

/* Json Placeholder
function loadQuotes() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
// loadQuotes();
function displayQuotes(quote) {
    // console.log(quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
} */