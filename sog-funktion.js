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

        // Funktion til at søge i produkter
        document.getElementById('sog-input').addEventListener('input', function() {
            let searchTerm = this.value.toLowerCase();
            let results = [];
            products.forEach(function(product) {
                if (product.toLowerCase().indexOf(searchTerm) !== -1) {
                    results.push(product);
                }
            });
            if (results.length > 0) {
                alert('Produkt fundet: ' + results.join(', '));
            } else {
                alert('Intet produkt fundet.');
            }
        });
    });