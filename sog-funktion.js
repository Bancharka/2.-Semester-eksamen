// søgfunktion js kode start
let products = ['LK Fuga', 'LK Opus 66', 'LK Opus 73'];


document.getElementById('sog-ikon').addEventListener('click', function() {
    let dropdown = document.getElementById('sog-dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});


function searchProducts() {
    let searchTerm = document.getElementById('sog-input').value.toLowerCase();
    let productFound = false;

    products.forEach(function(product) {
        if (product.toLowerCase() === searchTerm) {
            productFound = true;
        }
    });

    displaySearchResult(productFound);
}


document.getElementById('sog-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchProducts(); 
    }
});

function displaySearchResult(productFound) {
    let searchResultsContainer = document.getElementById('search-results');
    if (productFound) {
        searchResultsContainer.textContent = 'Produktet findes.';
    } else {
        searchResultsContainer.textContent = 'Produktet findes ikke.';
    }
}
// søgfunktion js kode slut
