let hamburger = document.querySelector('#hamburger')
let navlinks = document.querySelector('#navlinks')

let line = hamburger.querySelector('#line')
let line2 = hamburger.querySelector('#line2')

// NAVBAR CONSTS

const contactButton = document.getElementById('contactButton');
const shoppingCartButton = document.querySelectorAll('.shopping-cart');

hamburger.addEventListener('click', function (){
    if (navlinks.classList.contains('hidden')){
        navlinks.classList.remove('hidden')
        line.classList.add('rotate-45', 'absolute')
        line2.classList.add('-rotate-45', 'absolute')
        line2.classList.remove('mt-1.5')
    } else{
        navlinks.classList.add('hidden')
        line.classList.remove('rotate-45', 'absolute')
        line2.classList.remove('-rotate-45', 'absolute')
        line2.classList.add('mt-1.5')
    }
})


function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}
function openModalTwo() {
    var modalTwo = document.getElementById("modalContact");
    modalTwo.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  navlinks.classList.add('hidden')
    line.classList.remove('rotate-45', 'absolute')
    line2.classList.remove('-rotate-45', 'absolute')
    line2.classList.add('mt-1.5')
}
function closeContactModal() {
  const modal = document.getElementById('modalContact');
  modal.style.display = 'none';
  navlinks.classList.add('hidden')
    line.classList.remove('rotate-45', 'absolute')
    line2.classList.remove('-rotate-45', 'absolute')
    line2.classList.add('mt-1.5')
}

contactButton.addEventListener('click', () => {
    navlinks.classList.add('hidden')
    line.classList.remove('rotate-45', 'absolute')
    line2.classList.remove('-rotate-45', 'absolute')
    line2.classList.add('mt-1.5')
    closeModal();
})

shoppingCartButton[0].addEventListener('click', () => {
    closeContactModal();
})
shoppingCartButton[1].addEventListener('click', () => {
    closeContactModal();
})

 // Mock data with images
 const products = [
    {   
        id: 1,
        name: "Product 1",
        price: "100 din",
        category: "vitamini-minerali",
        image: "../images/apoteka-logo.jpg",
        description: "Description for Product 1. This is a sample description."
    },
    {
        name: "Product 2",
        price: "500 din",
        category: "koza-kosa-nokti",
        image: "../images/apoteka-logo.jpg",
        description: "Description for Product 2. This is a sample description."
    },
    {   
        id: 2,
        name: "Product 3",
        price: "420 din",
        category: "misicno-kostani-sistem",
        image: "../images/apoteka-logo.jpg",
        description: "Description for Product 3. This is a sample description.",
    },
    {   
        id: 3,
        name: "Product 4",
        price: "120 din",
        category: "koza-kosa-nokti",
        image: "../images/apoteka-logo.jpg",
        description: "Description for Product 4. This is a sample description.",
    },
    {
        id: 4,
        name: "Product 4",
        price: "900 din",
        category: "srce-krvi-sudovi",
        image: "../images/apoteka-logo.jpg",
        description: "Description for Product 5. This is a sample description."
    },
    {
        id: 5,
        name: "Product 6",
        price: "1200 din",
        category: "beli-program",
        image: "../images/apoteka-logo.jpg",
        description: "Description for Product 6. This is a sample description."
    },
    {   
        id: 6,
        name: "Product 7",
        price: "12000 din",
        category: "medicinski-preparati",
        image: "../images/apoteka-logo.jpg",
        description: "Description for Product 7. This is a sample description."
    },
    {
        id: 7,
        name: "Product 8",
        price: "410 din",
        category: "kozmetika-dekorativa",
        image: "../images/apoteka-logo.jpg",
        description: "Description for Product 8. This is a sample description."
    },
    {
        id: 8,
        name: "Product 9",
        price: "200",
        category: "mrsavljenje-potencija",
        image: "../images/apoteka-logo.jpg",
        description: "Description for Product 9. This is a sample description."
    },
];

// Map for category display values
const categoryMap = {
    'Vitamini i minerali': 'vitamini-minerali',
    'Koza, kosa, nokti': 'koza-kosa-nokti',
    'Misicno-kostani sistem': 'misicno-kostani-sistem',
    'Zdravlje, zene i trudnice': 'zdravlje-zene-trudnice',
    'Srce, krvni sudovi': 'srce-krvi-sudovi',
    'Beli program': 'beli-program',
    'Medicinski preparati': 'medicinski-preparati',
    'Kozmetika, dekorativa': 'kozmetika-dekorativa',
    'Mrsavljenje i potencija': 'mrsavljenje-potencija',
};

// Update the product data with the mapped category values
products.forEach(product => {
    product.category = categoryMap[product.category] || product.category;
});


const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const resultsContainer = document.getElementById('results');

function displayProducts(filteredProducts) {
    resultsContainer.innerHTML = '';

    if (filteredProducts.length === 0) {
        resultsContainer.innerHTML = '<p class="text-white lg:text-2xl">Nema rezultata pretrage.</p>';
        return;
    }

    filteredProducts.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded shadow-md';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-auto mb-2">
            <h2 class="text-lg font-semibold">${product.name}</h2>
            <p class="text-gray-500">${product.price}</p>
            <p class="text-blue-500 text-xs lg:text-lg">${product.category}</p>
            <div class="flex flex-col lg:flex-row justify-between mt-2">
                <div class="flex items-center justify-center mb-3 lg:mb-0">
                    <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onclick="decreaseQuantity(${product.id})"> - </span>
                    <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="1" min="1" id="quantity-${product.id}">
                    <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onclick="increaseQuantity(${product.id})"> + </span>
                </div>
                <button onclick="addToCart(${product.id})" data-product-id="${product.id}" class="bg-green-600 lg:hover:bg-green-500 text-white mb-3 lg:mb-0 px-2 py-1 rounded-md transition duration-200">Dodaj u korpu</button>
                <button data-index="${product.id}" class="bg-blue-600 lg:hover:bg-blue-500 text-white px-2 py-1 rounded-md transition duration-200 buyBtn">Kupi</button>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}



function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    let filteredProducts = products;

    if (selectedCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === selectedCategory);
    }
    

    if (searchTerm.trim() !== '') {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
    }

    displayProducts(filteredProducts);
}




// Initial display
displayProducts(products);

// Event listeners
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

// inkrement, dekrement kolicine proizvoda na kartici

function decreaseQuantity(index) {
    const quantityInput = document.getElementById(`quantity-${index}`);
    const currentQuantity = parseInt(quantityInput.value, 10);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

function increaseQuantity(index) {
    const quantityInput = document.getElementById(`quantity-${index}`);
    const currentQuantity = parseInt(quantityInput.value, 10);
    quantityInput.value = currentQuantity + 1;
}

// CART SECTION

// Add an event listener for button clicks on the resultsContainer
resultsContainer.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('addToCartBtn')) {
        const index = target.getAttribute('data-index');
        const product = products[index]; // Get the product object
        addToCart(product);
    } else if (target.classList.contains('buyBtn')) {
        const index = target.getAttribute('data-index');
        buyProduct(index);
    }
});


// Define the addToCart function
function addToCart(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    
    if (!quantityInput) {
        console.error('Quantity input not found for product ID:', productId);
        return;
    }

    const selectedQuantity = parseInt(quantityInput.value, 10);

    // Find the product with the matching ID
    const product = products.find(product => product.id === productId);

    if (!product) {
        console.error('Product not found for product ID:', productId);
        return;
    }

    // Create a cart item object that includes the product and the selected quantity
    const cartItem = {
        product,
        quantity: selectedQuantity,
    };

    cart.push(cartItem);
    updateCartCount('modalCartCount');
    updateCartCount('otherCartCount');
    updateCartModal(cart); // Update the cart modal
}









// Define the buyProduct function (you can implement the logic as needed)
function buyProduct(index) {
    // Implement the logic for buying a product here, if needed.
    // You can remove the product from the cart or perform any other actions.
}


// Define an empty cart array
let cart = [];

// Function to update the cart count
function updateCartCount() {
    // Update the cart count in the modal
    const modalCartCount = document.getElementById('modalCartCount');
    modalCartCount.textContent = cart.length;

    // Update the cart count in the other block
    const otherCartCount = document.getElementById('otherCartCount');
    otherCartCount.textContent = cart.length;
}



function addToCartModal(product) {
    const cartItemList = document.getElementById('cartItemList');

    const cartItem = document.createElement('div');
    cartItem.className = 'mb-4 p-2 border border-gray-300 flex items-center';

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.className = 'w-16 h-16 mr-4';
    cartItem.appendChild(productImage);

    const productDetails = document.createElement('div');
    productDetails.innerHTML = `
        <div class="text-lg font-semibold">${product.name}</div>
        <div class="text-gray-700">${product.price}</div>
    `;
    cartItem.appendChild(productDetails);

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'bg-red-600 text-white px-2 py-1 rounded-md ml-4';
    
    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function () {
        // Remove the cart item from the cart array
        const itemIndex = cart.indexOf(product);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
        }
        
        // Remove the cart item row from the cart modal
        cartItemList.removeChild(cartItem);

        // Update the cart count
        updateCartCount('modalCartCount');
        updateCartCount('otherCartCount');
    });

    cartItem.appendChild(deleteButton);
    
    cartItemList.appendChild(cartItem);
}



// Calculate the total price of items in the cart
function calculateTotalPrice(cart) {
    return cart.reduce((total, cartItem) => {
        const { product, quantity } = cartItem;
        const numericPrice = parseFloat(product.price.replace('$', '')); // Parse the product price
        return total + numericPrice * quantity;
    }, 0);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart
    updateCartCount();
    updateCartModal(cart); // Update the cart modal

    // Check if the cart is empty
    if (cart.length === 0) {
        const cartItemList = document.getElementById('cartItemList');
        const placeholderImage = document.getElementById('placeholderImage');
        const totalSection = document.getElementById('totalSection');
        cartItemList.style.display = 'none';
        placeholderImage.style.display = 'block';
    
}}




function updateCartModal(cart) {
    const cartItemList = document.getElementById('cartItemList');
    const placeholderImage = document.getElementById('placeholderImage');
    const totalSection = document.getElementById('totalSection');

    if (cart.length === 0) {
        // Cart is empty, show placeholder image and hide other sections
        cartItemList.style.display = 'none';
        totalSection.style.display = 'none';

        // Center the image when the cart is empty
        placeholderImage.classList.add('flex', 'justify-center', 'items-center');
    } else {
        // Cart has items, show cart items and total section
        cartItemList.style.display = 'block';
        placeholderImage.style.display = 'none';
        totalSection.style.display = 'block';

        cartItemList.innerHTML = ''; // Clear existing cart items

        let total = 0;

        cart.forEach((cartItem, index) => {
            const { product, quantity } = cartItem;

            const cartItemRow = document.createElement('div');
            cartItemRow.className = 'mb-4 p-2 border border-gray-300 flex flex-col lg:flex-row items-center justify-between';

            // Left side: Product image and details
            const leftSide = document.createElement('div');
            leftSide.className = 'flex items-center justify-center flex-col lg:flex-row text-center';

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;
            productImage.className = 'w-16 h-16 mr-4 ';
            leftSide.appendChild(productImage);

            const productDetails = document.createElement('div');
            productDetails.innerHTML = `
                <div class="text-lg font-semibold">${product.name}</div>
                <div class="text-gray-700">${product.price}</div>
            `;
            leftSide.appendChild(productDetails);

            cartItemRow.appendChild(leftSide);

            // Right side: Quantity and total in a column
            const rightSide = document.createElement('div');
            rightSide.className = 'flex flex-col items-center justify-center lg:items-end lg:ml-4 mb-4 lg:mb-0 text-center';

            const quantityDisplay = document.createElement('span');
            quantityDisplay.textContent = `Količina: ${quantity}`;
            rightSide.appendChild(quantityDisplay);

            // Parse the product price and calculate the total price for the product based on the quantity
            const priceWithoutDollar = product.price.replace('$', ''); // Remove the "$" symbol
            const numericPrice = parseFloat(priceWithoutDollar); // Parse the numeric price
            const totalPrice = numericPrice * quantity;
            total += totalPrice; // Update the total based on the item's total price

            const totalDisplay = document.createElement('span');
            totalDisplay.textContent = `Ukupno: ${Math.round(totalPrice)} din`;

            rightSide.appendChild(totalDisplay);

            cartItemRow.appendChild(rightSide);

            // Delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'bg-red-600 text-white px-2 py-1 rounded-md ml-4';
            deleteButton.onclick = () => removeFromCart(index);
            cartItemRow.appendChild(deleteButton);

            cartItemList.appendChild(cartItemRow);

            // Update both elements with the class "total-price"
            const totalPriceElements = document.querySelectorAll('.total-price');
            const totalPriceText = `${Math.round(totalPrice)} din`; // !important

            totalPriceElements.forEach((element) => {
                element.textContent = totalPriceText;
            });
        });

        // Calculate the total price of items in the cart
        const totalPrice = calculateTotalPrice(cart);

        // Update the total price at the bottom and shipping choice
        const totalTotalPrice = document.getElementById('totalTotalPrice');
        const shippingChoice = document.getElementById('shippingChoice');

        totalTotalPrice.textContent = `${Math.round(totalPrice)} din`;
        if (totalPrice > 5000 || totalPrice === 5000) {
            shippingChoice.textContent = 'besplatna dostava';
        } else {
            shippingChoice.textContent = 'naplata po uzećem';
        }
    }
}




