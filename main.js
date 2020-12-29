init();
              // Запускає всі функції при завантаженні
function init () {
  renderProducts(products);
  generateCategoryList();
  addEventListeners();
  addToCart();
}
   
function searchProduct () {
  console.log('searchProduct');
}


              // Рендерить список продуктів в index
function renderProducts (list) {
  console.log('renderProducts');
  let productTemplate = ``;
  for (let i = 0; i < list.length; i++){
  productTemplate +=  `<div class="product-wrapper product-wrapper__grid">
        <div class="product-image-wrapper" style="background-image:url(${list[i].image});">
        </div>
        <h3 class="product-heading">
          ${list[i].heading}
        </h3>
        <div class="product-description">
          ${list[i].description}
        </div>
        <button id='${list[i].id}' class="product-to-cart">
          Замовити
        </button>
      </div>`
  };
  document.querySelector('.products').innerHTML = productTemplate;
}

              // Рендерить список категорій в index
function generateCategoryList() {
  console.log('generateCategoryList');
    let categoryList = `<option value="all">Всі</option>`;
  for(let i = 0; i < categories.length; i++){
    categoryList += `<option value="${categories[i].category}">${categories[i].nameCategory}</option>`
  };
  document.querySelector('#category-select').innerHTML = categoryList;
}

              // Повертає value вибраної категорії
              // і запускає функцію яка зарендерить товари даної категорії
function onCategoryChange (ev) {
  console.log('onCategoryChange');
  const selectedCat = ev.target.value;
  if (selectedCat == "all") {
    renderProducts(products);
  } else {
    filterProductsByCategory(selectedCat);
  }
}

// Вішає подіЇ
function addEventListeners() {
  console.log('addEventListeners');
  document.getElementById('category-select').addEventListener('change', onCategoryChange);
  const menuItems = document.getElementsByClassName('menu-item');
  for (let i=0; i<menuItems.length; i++){
    menuItems[i].addEventListener('click', goToPage);
  }
}

              // Фільтрує продукти по категорії і рендерить їх за допомогою ф-ції renderProducts
function filterProductsByCategory(categoryName) {
  let filteredProducts = products.filter(function(product) {
      if (product.category == categoryName ) {
        return true;
      };
  });
  renderProducts(filteredProducts);
}
            // виводить на головній тільки вибрану категорію (або Продукти або Корзина)
            // показує тільки вибраний блок <section> забираючи ришітку "#" і прописуючи display: block;
function goToPage(e) {
  console.log('goToPage');
  console.log(e);

  hideSections();
  const hash = e.target.hash;
  const hashRemove = hash.substring(1);
  document.getElementById(hashRemove).style.display = "block";
}

              // Ховає всі блоки <section>
function hideSections() {
  console.log('hideSections');
  const hidesection = document.getElementsByClassName('section');
  for (let i=0; i<hidesection.length; i++){
    hidesection[i].style.display = "none";
  }
}

            // Рендерить замовлений продукт в корзині
function renderProductsInCart() {
  console.log('renderProductsInCart');
  let cartTemplate = ``;
  for (var i = 0; i < cartProducts.length; i++) {
      let currentProduct = cartProducts[i];
          cartTemplate += `
          <div class="item">
          <div class="buttons">
          <span class="delete-btn"></span>
          </div>

          <div class="image">
          <img src="${currentProduct.image}" alt=""/>
          </div>

          <div class="description">
          <span>${currentProduct.heading}</span>
          <span>${currentProduct.zap}</span>
          <span>${currentProduct.category}</span>
          </div>

          <div class="quantity">
          <button class="plus-btn" type="button" name="button">
          <img src="./images/plus.svg" alt="" />
          </button>
          <input type="text" name="name" value="${currentProduct.count}">
          <button class="minus-btn" type="button" name="button">
          <img src="./images/minus.svg" alt="" />
          </button>
          </div>

          <div class="total-price">"Всього: ${currentProduct.count} шт"</div>
          </div> `;
  };
  document.querySelector('.shopping-cart').innerHTML = cartTemplate;
}

// Фільтрує масив з продуктами по id. 
// Повертає вибраний товар (на який клікнули)
function getProductById(id) {
  let product = products.find(function(product) {
      if (product.id == id ) {
        return true;
      };
  });
  return product;
}

// Додає вибраний товар до масиву корзини (cartProducts) і рендерить його
// в корзину за допомогою ф-ції renderProductsInCart().
function addToCart() {
  let buttons = document.getElementsByClassName("product-to-cart");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
      button.onclick = function() {
        let selectedProduct = getProductById(this.id);
        let ids = [...new Set(cartProducts.map(a => a.id))];
        if (!ids.includes(selectedProduct.id)){
            cartProducts.push(selectedProduct);
            renderProductsInCart();
        }
      }
  }
}

