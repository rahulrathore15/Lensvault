document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission
    
    let searchQuery = document.getElementById('searchInput').value.trim();
    
    if(searchQuery === "") {
        alert("Please enter a search term.");
    } else {
        alert("You searched for: " + searchQuery);
        // Here you can redirect to a search results page, send the query to a server, etc.
        // Example: window.location.href = /search?query=${searchQuery};
    }
});
