const KanapAPI = "http://localhost:3000/api/products";
const addArticle = document.querySelector(`#items`);

const start = async () => {
  let response = await fetch("http://localhost:3000/api/products");
  let products = await response.json();
  for (let product of products) {
    console.log(product.name);
    //insertion des produits-page d'acceuil
    const newProduct = document.createElement("a");
    newProduct.setAttribute("href", `product.html?id=${product._id}`);

    newProduct.innerHTML = `
                              <article>
                                    <img src="${product.imageUrl}" alt="${product.altTxt}">
                                    <h3 class"productName">${product.name}</h3>
                                    <p class"productDesciption">${product.description}</p> 
                              </article>`;

    addArticle.appendChild(newProduct);
  }
};

window.addEventListener("load", start);
