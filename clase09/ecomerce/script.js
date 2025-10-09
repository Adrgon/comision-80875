const productListDiv = document.getElementById("product-list");
const cartCountSpan = document.getElementById("cart-count");
const viewCartBtn = document.getElementById("view-cart-btn");

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount(){
    cartCountSpan.textContent = cart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
}

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id)
    if(existingProduct){
        existingProduct.quantity += 1
    }else {
        cart.push({...product, quantity: 1})
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
    Toastify({
        text: `${product.name} agregado al carrito`,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true,
    }).showToast()
}
function displayProducts(products){
    productListDiv.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div')
        productCard.className = 'product-card'
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}"/>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Agregar al carrito</button>
        `
        productListDiv.appendChild(productCard)
    })

    document.querySelectorAll('.product-card button').forEach( button => {
        button.addEventListener("click", (evt)=>{
            //console.log(evt.target.dataset.id)
            const productId = parseInt(evt.target.dataset.id)
            const productToAdd = products.find( item => item.id === productId)
            if(productId){
                addToCart(productToAdd)
            }
        })
    })
}

async function fetchProducts() {
    try {
        const respuesta = await fetch('productos.json')
        console.log(respuesta)
        if(!respuesta.ok){
            throw new Error("Error en la respuesta de la API")
        }

        const products = await respuesta.json();
        console.log(products)
        displayProducts(products)
    }catch(error) {
        console.error("Error fetching products: ", error)
    }
}

function showCart(){
    console.table(cart)
    if(cart.length === 0){
        Swal.fire({
            icon: 'info',
            title: 'El carrito está vacío',
            text: 'Agrega productos al carrito para verlos aquí.',
        })
        return 
    }
    let cartContent = '<ul mstyle="list-style-type:none; padding:0;">'
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity
        total += itemTotal
        cartContent += `
        <li>
            <span>${item.name} x ${item.quantity}</span>
            <span>$ ${itemTotal.toFixed(2)}</span>
            <button data-id="${item.id}" class="remove-from-cart-btn">❌</button>
        </li>
        `
    })
    cartContent += '</ul>'
    cartContent += `<p style="font-weight: bold; font-size: 1.2rem; text-align: right; margin-top: 20px;">Total: $${total.toFixed(
      2
    )}</p>`;

    Swal.fire({
        title: "Tu carrito de compras",
        html: cartContent,
        width: 600,
        showCancelButton: true,
        cancelButtonText: "Seguir comprando",
        didOpen: () => {
            document
              .querySelectorAll(".remove-from-cart-btn")
              .forEach((button) => {
                button.addEventListener("click", (event) => {
                  const productIdToRemove = parseInt(event.target.dataset.id);
                  removeFromCart(productIdToRemove);
                  // Vuelve a abrir el carrito para reflejar los cambios
                  showCart();
                });
              });
        }

    }).then((result)=> {
        if(result.isConfirmed){
            Swal.fire({
              icon: "success",
              title: "Compra realizada",
              text: `Gracias por tu compra!`,
            });
            cart = []
            localStorage.removeItem('cart')
            updateCartCount()
        }
    })
}

function removeFromCart(productId){
    cart = cart.filter(item => item.id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
}


viewCartBtn.addEventListener('click', showCart)
fetchProducts()
updateCartCount()
