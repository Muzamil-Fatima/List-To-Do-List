let count = 0;
const countDisplay = document.getElementById("count");

function addItem() {
  count++;
  updateCart();
}

function removeItem() {
  if (count > 0) {
    count--;
    updateCart();
  }
}

function resetCart() {
  count = 0;
  updateCart();
}

function updateCart() {
  countDisplay.textContent = count;
}
