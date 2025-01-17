document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
});
 
function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(error => console.error('Error fetching data:', error));
}
 
function displayProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; 
 
    products.forEach(product => {
        const cardHTML = `
            <div class="col-md-4">
                <div class="card gap-2">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text fw-bold">Price: ${product.price}$</p>
                        <a href="#" class="btn btn-success">Buy Now</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}