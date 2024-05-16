
// Array med de tre produkter
let products = ['LK Fuga', 'LK Opus 66', 'LK Opus 73'];

// Funktion til at vise dropdown og søge efter produkter
document.getElementById('sog-ikon').addEventListener('click', function() {
    let dropdown = document.getElementById('sog-dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

// Funktion til at søge efter produkter
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

// Lyt efter tastetryk i søgefeltet
document.getElementById('sog-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchProducts(); // Hvis Enter-tasten trykkes, udløses søgefunktionen
    }
});

// Funktion til at vise søgeresultater på siden
function displaySearchResult(productFound) {
    let searchResultsContainer = document.getElementsByClassName('search-results');
    if (productFound) {
        searchResultsContainer.textContent = 'Produktet findes.';
    } else {
        searchResultsContainer.textContent = 'Produktet findes ikke.';
    }
}

