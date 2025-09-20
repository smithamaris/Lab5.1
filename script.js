

const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart')
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

//Add a product function
function addProduct() {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);
    
    if (!name) {
        alert(" Please enter a product name!");
        return;
    }
    if (isNaN(price) || price <= 0) {
        alert(" Please enter a valid price greater than 0!");
        return;
    }

   
    const newLi = document.createElement('li');
    newLi.classList.add('item');
    
    // create the new li
    newLi.dataset.price = price;
    newLi.textContent = `${name} - $${price.toFixed(2)}`;

    // Store the price as a number using a data attribute
    newLi.dataset.price = price;
    newLi.textContent = `${name} - $${price.toFixed(2)}`;
    
    
    // create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', removeItem);
    newLi.appendChild(removeBtn);

    
    cart.appendChild(newLi); //this will add it to the cart
    // Update total price
    updateTotalPrice(price);
    
    // Erases input
    productNameInput.value = '';
    productPriceInput.value = '';
    }

    // Function to update the total price
    function updateTotalPrice(amount) {
    totalPrice += amount;
    // The error occurs if totalPrice becomes a string
    // This will work correctly as long as totalPrice is a number
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

      // Function to remova an item
    function removeItem(event) {
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price); // Correctly get the price as a number
    updateTotalPrice(-price);
    item.remove();
}

      addProductButton.addEventListener('click', addProduct); // Correctly call the addProduct function on click


      
      
      
      
      
      
      //-------------------------------------------------------------------------------------------------------------
    

// // attempt to add amounts of quantity
// const quantityInput = document.createElement('input');
// quantityInput.type = "number";
// quantityInput.value = 1;
// quantityInput.min = 1;
// quantityInput.style.width = "50px";
// quantityInput.addEventListener("change", function() {
//     updateQuantity(newLi, price, quantityInput.value);
// });
        
    
    
    


