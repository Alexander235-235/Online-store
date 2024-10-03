let productsJSON = `[  
    {   
        "name": "Grey Hoodie",   
        "id": "greyhoodie",   
        "price": 20   
    },   
    {   
        "name": "Mets Hoodie ",   
        "id": "metshoodie",   
        "price": 15   
    },  
    {   
        "name": "Sidemen Hoodie",   
        "id": "sidemenhoodie",   
        "price": 10   
    },  
    {   
        "name": "Thtc Hoodie",   
        "id": "thtchoodie",   
        "price": 30   
    },  
    {   
        "name": "Washington Hoodie",   
        "id": "washingtonhoodie",   
        "price": 25   
    },  
    {   
        "name": "Belgium Hoodie",   
        "id": "belgiumhoodie",   
        "price": 40   
    }  
]`;

let products = JSON.parse(productsJSON);

const mainContainer = document.querySelector("main");

updateCartCount();

// СОЗДАТЬ ЭЛЕМЕНТЫ И ДОБАВИТЬ КНОПКАМ ОБРАБОТЧИКИ
products.forEach(function (product) {
  createProductElement(product);
  buttonEventListener(product);
});

//ФУНКЦИОНАЛ СОЗДАНИЯ ЭЛЕМЕНТА
function createProductElement(product) {
  const productDiv = document.createElement("div");
  productDiv.classList.add(product.id);

  productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <img src="товары/${product.id}.png">
        <button class="add-to-cart-btn">Add to Cart</button>
    `;

  mainContainer.appendChild(productDiv);
}

//ДОБАВЛЕНИЕ ОБРАБОТЧИКА СОБЫТИЙ НА КНОПКИ
function buttonEventListener(product) {
  const addToCartBtn = document.querySelector(
    `.${product.id} .add-to-cart-btn`
  );
  addToCartBtn.addEventListener("click", function () {
    console.log;
    addToCart(product);
  });
}

//ДОБАВЛЕНИЕ В КОРЗИНУ
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  if (cart[product.id]) {
    cart[product.id].amount += 1;
  } else {
    cart[product.id] = { ...product, amount: 1 };
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
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
