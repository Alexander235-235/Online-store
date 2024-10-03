updateCartCount();

//ФУНКЦИОНАЛ СОЗДАНИЯ ЭЛЕМЕНТА
function createProductElement(product) {
}


//СОЗДАНИЕ ФУНКЦИИ ОБНОВЛЕНИЯ КОЛИЧЕСТВА НА КНОПКЕ CART
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  let itemCount = 0;

  for (const key in cart) {
    itemCount += cart[key].amount;
  }

  document.querySelector("#amount").textContent = itemCount;
}



//функция для создания(добавления) элементов на страницу из localStorage


function createProductElement(product) {
  const productsContainer = document.querySelector(".products");

  const productElement = document.createElement("div");
  productElement.classList.add("product-item");

  const productName = document.createElement("h3"); 
  productName.textContent = product.name;


  const productPrice = document.createElement("h3");
  productPrice.textContent = product.price;

  const productImage = document.createElement("img");
  productImage.src = localStorage.getItem("товары/${product.id}.png");

  productElement.appendChild(productName);
  productElement.appendChild(productPrice);
  productElement.appendChild(productImage);

  productsContainer.appendChild(productElement);
}





const storedData = localStorage.getItem("cart") || {};
const productData = JSON.parse(storedData);

//отображение элементов на странице


for (const key in productData) {
  const product = productData[key];
  createProductElement(product);
}
