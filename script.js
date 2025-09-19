

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
    
}

// create the new li
const newLi = document.createElement('li')
newLi.textContent = inputText;
newLi.classList.add('item');

// attempt to add amounts of quantity
const quantityInput = document.createElement('input');
quantityInput.type = "number";
quantityInput.value = 1;
quantityInput.min = 1;
quantityInput.style.width = "50px";
quantityInput.addEventListener("change", function() {
    updateQuantity(newLi, price, quantityInput.value);
})
newLi.appendChild(quantityInput);



// create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'; //set the text of the button
    // removeBtn.addEventListener("click", removeItem);
    newLi.appendChild(removeBtn);
    removeBtn.classList.add('remove'); //adds a class name to the buttom

    newLi.appendChild(removeBtn)
    cart.appendChild(newLi)

    // Update total price
  updateTotalPrice(price);
  
  // Erases input
  productNameInput.value = "";
  productPriceInput.value = "";

  
  // Fucntion to update the total price
  function updateTotalPrice(amount) {
      totalPrice += amount;
      totalPriceSpan.textContent = totalPrice.toFixed(2);
  }

  // Function to remova an item
  function removeItem(event) {
      const item = event.target.closest('li');
      const price = parseFloat(item.dataset.price);
      updateTotalPrice(-price);
      item.remove();
  }

  
addProductButton.addEventListener('click', function() {
// get the text from the input
    const inputText = addProductButton.value;
         
})




//-------------------------------------------------------------------------------------------------------------

