// Sample product data (can be fetched from a database or API in a real application)
const products = [
    { id: 1, name: 'Finger Millet', price: 19.99 },
    { id: 2, name: 'Sorghum Millet', price: 29.99 },
    { id: 3, name: 'Little Millet', price: 39.99 }
];

// Function to add a product to the cart
function addToCart(productId) {
    // Retrieve the current cart from localStorage (or create an empty array if none exists)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the product by id
    const product = products.find(p => p.id === productId);

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        // If product is already in the cart, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If the product is not in the cart, add it with a quantity of 1
        cart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, notify the user that the product has been added
    alert(`${product.name} has been added to your cart.`);
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = parseInt(this.closest('.product').getAttribute('data-id'));
        addToCart(productId);
    });
});
