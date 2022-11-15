let KanapAPI = "http://localhost:3000/api/products/";
const cartItems = document.querySelector("#cart__items");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProduct(productId, productColor, productQuantity) {
  fetch(KanapAPI + productId)
    .then((res) => res.json())
    .then((produit) => {
      const newLigne = document.createElement("article");
      newLigne.setAttribute("class", "cart__item");
      newLigne.setAttribute("data-id", produit._id);
      newLigne.setAttribute("data-color", productColor);
      newLigne.innerHTML = `
                          <div class ="cart__item__img"> 
                          <img src="${produit.imageUrl}" alt=${produit.altText}>
                          </div>
                          <div class="cart__item__content">
                          <div class="cart__item__content__description">
                              <h2>${produit.name}</h2>
                              <p>${productColor}</p>
                              <p>${produit.price} €</p>
                          </div>
                          <div class="cart__item__content__settings">
                            <div class="cart__item__content__settings__quantity">
                              <p>Qté : </p>
                              <input type="number"  class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productQuantity}">
                            </div>
                            <div class="cart__item__content__settings__delete">
                                      <p class="deleteItem">Supprimer</p>
                                    </div>
                                  </div>
                                </div>
                              </article>`;
      cartItems.appendChild(newLigne);

      const deleteBtn = document.querySelector(
        `[data-id="${produit._id}"][data-color="${productColor}"] .deleteItem`
      );

      deleteBtn.addEventListener("click", () => {
        deleteItem(produit._id, productColor);
      });

      console.log(produit.name);
    });
}

const deleteItem = (productId, color) => {
  let product = cart.find((i) => i.id == productId);

  let productItemDom = document.querySelector(`[data-id="${productId}"][data-color="${color}"]`);

  // remove item from array
  const index = cart.indexOf(product);
  if (index > -1) {
    cart.splice(index, 1);
  }

  // update cart
  localStorage.setItem("cart", JSON.stringify(cart));

  // remove product item from DOM
  cartItems.removeChild(productItemDom);
};

for (let item of cart) {
  console.log(`${item.id}-${item.itemColor}-${item.itemQuantity}`);
  displayProduct(item.id, item.itemColor, item.itemQuantity);
  //  const newElement = document.createElement("article");

  //  newElement.innerHTML = `<h3>Quantity: ${item.itemQuantity} Color: ${item.itemColor} Id: ${item.id}</h3>`;

  // cartItems.appendChild(newElement);
}


// const deleteItem = (productId, color) => {
//   let product = cart.find((i) => i.id == productId);

//   let productItemDom = document.querySelector(`[data-id="${productId}"][data-color="${color}"]`);

//   // remove item from array
//   const index = cart.indexOf(product);
//   if (index > -1) {
//     cart.splice(index, 1);
//   }

//   // update cart
//   localStorage.setItem("cart", JSON.stringify(cart));

//   // remove product item from DOM
//   cartItems.removeChild(productItemDom);
// };


const deleteBtn = document.querySelector(
  `[data-id="${produit._id}"][data-color="${productColor}"] .deleteItem`
);

deleteBtn.addEventListener("click", () => {
  deleteItem(produit._id, productColor);
});