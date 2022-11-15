let KanapAPI = "http://localhost:3000/api/products/";
const title = document.querySelector("#title");
const image = document.querySelector(".item__img");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const colorSelect = document.querySelector("#colors");
const qty = document.querySelector('#quantity')
const toCart = document.querySelector('#addToCart')

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

             // Affichage des élements des  produit
const start = () => {
            fetch(KanapAPI + id)
              .then((res) => res.json())
              .then((product) => {
                productItem = product;
                title.textContent = product.name;
                image.innerHTML = `<img src="${product.imageUrl}" alt=${product.altTxt}/>`;
                description.textContent = product.description;
                price.textContent = product.price;
               //Ajout Option pour les couleurs
                for (let color of product.colors) {
                  const option = document.createElement("option");
                  option.textContent = color;
                  option.setAttribute("value", color);
                  colorSelect.appendChild(option);
                }
                toCart.addEventListener("click", () =>{
                    
                })




              });
            }
            
function cartUpdate (product) {
    localStorage.setItem('cart', JSON.stringify(product));
    let cartList = localStorage.getItem('cart');
}
  window.addEventListener('load',start)

// let checkQuantity = itemExists + productQuantity
        // if(itemExists.qty =+ productQuantity){
        //   alert("La quantite à ete mis a jour")
        //   productQuantity =1;
        // }
