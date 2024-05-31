
function debounce(func, delay) {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const searchInput = document.getElementById('searchInput');

function fetchSearchResults(query) {
    console.log(`Fetching results for: ${query}`);
    // API call to fetch search results
}

const debouncedFetchSearchResults = debounce(fetchSearchResults, 300);

searchInput.addEventListener('input', (event) => {
    debouncedFetchSearchResults(event.target.value);
});


{/*This ensures the API call is made only after the user has stopped 
typing for 300 milliseconds, improving both performance and user experience.*/}
