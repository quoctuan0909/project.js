'use strict';

const productList = [
    {
        id: 1,
        name: 'Catyes',
        price: 79000,
        imgUrl: 'images/item--02.png',
        imgUrl1: 'images/item--16.png',
        sale: 0,

    },

    {
        id: 2,
        name:'Catsrang',
        price: 83000,
        imgUrl: 'images/item--03.png',
        imgUrl1: 'images/item--11.png',
        sale: 0
    },

    {
        id: 3,
        name: 'Royal Canin Kitten',
        price: 270000,
        imgUrl: 'images/item--06.png',
        imgUrl1: 'images/item--14.png',
        sale: 0
    },

    {
        id: 4,
        name: 'Royal Canin Brilish',
        price: 245000,
        imgUrl: 'images/item--07.png',
        imgUrl1: 'images/item--12.png',
        sale: 0
    },

    {
        id: 5,
        name: 'Pate Neeko',
        price: 14000,
        imgUrl: 'images/item--08.png',
        imgUrl1: 'images/item--11.png',
        sale: 0
    },

    {
        id: 6,
        name: 'Súp thưởng shizuka',
        price: 1100,
        imgUrl: 'images/item--09.png',
        imgUrl1: 'images/item--03.png',
        sale: 0
    },

    {
        id: 7,
        name: 'Pate Wanpy',
        price: 12000,
        imgUrl: 'images/item--10.png',
        imgUrl1: 'images/item--09.png',
        sale: 0
    },

    {
        id: 8,
        name: 'Catyes',
        price: 79000,
        imgUrl: 'images/item--11.png',
        imgUrl1: 'images/item--08.png',
        sale: 0
    },

    {
        id: 9,
        name: 'Royal Canin Fit',
        price: 260000,
        imgUrl: 'images/item--12.png',
        imgUrl1: 'images/item--02.png',
        sale: 0
    }
];


const manyBuyer = [
    {
        id: 1,
        name: 'Catyes',
        price: 79000,
        imgUrl: 'images/item--02.png',
        imgUrl1: 'images/item--16.png',
        sale: 0
    },

    {
        id: 2,
        name: 'Catsrang',
        price: 83000,
        imgUrl: 'images/item--03.png',
        imgUrl1: 'images/item--11.png',
        sale: 0
    },

    {
        id: 3,
        name: 'Royal Canin',
        price: 270000,
        imgUrl: 'images/item--06.png',
        imgUrl1: 'images/item--14.png',
        sale: 0
    },

    {
        id: 4,
        name: 'Royal Canin Brilish',
        price: 245000,
        imgUrl: 'images/item--07.png',
        imgUrl1: 'images/item--12.png',
        sale: 0
    }
];
let cart = [];
const productBoxEl = document.querySelector(".products--new__row");
const cartEl = document.querySelector('.cart__item');
const tableEl = document.querySelector('.table');
window.addEventListener('load', loadProductList);
window.addEventListener('load', showCart);
window.addEventListener('load', cartNumber);
window.addEventListener('load', totalCart);
window.addEventListener('load', showPopup);
//-- Load products
function loadProductList() {
    productList.forEach(function (item) {
        const itemEl = document.createElement('div');
        productBoxEl.appendChild(itemEl);
        itemEl.classList.add("products--items");
        if (item.sale === 0) {
            itemEl.innerHTML = `
                <div class="products--items__img">
                    <img src="${item.imgUrl}" alt="rings" />
                    <div class="overlay">
                        <div class="text">
                            <img src="${item.imgUrl1}" alt="rings" />
                        </div>
                    </div>
                </div>
                <div class="products--items__main">
                    <a href="./product-details.html">${item.name}</a>
                    <p>VND ${item.price.toFixed(2)}</p>
                    <button class="border__button">Add to cart</button>
                </div>
                
            `;

            const buttonEl = itemEl.querySelector('button');
            buttonEl.addEventListener('click', () => {
                addToCart(item);
                cartNumber();
            });
        }

        else {
            itemEl.innerHTML = `
                <div class="products--items__img">
                    <img src="${item.imgUrl}" alt="rings" />
                    <div class="overlay">
                    <div class="text">
                        <img src="${item.imgUrl1}" alt="rings" />
                    </div>
                </div>
                </div>
                <div class="products--items__main">
                    <a href="./product-details.html">${item.name}</a>
                    <p><del>VND${item.price.toFixed(2)}</del> 
                    <span class="price"></span></p>
                    <button class="border__button">Add to cart</button>
                </div>
               
            `;

            const buttonEl = itemEl.querySelector('button');
            buttonEl.addEventListener('click', () => {
                addToCart(item);
                cartNumber();
            });
        }
    });
};


//-- Load Many Buyer
const productManyBuyer = document.querySelector(".products--orders--row");
window.addEventListener("load", loadProductManyBuyer);

function loadProductManyBuyer() {
    manyBuyer.forEach(function (item) {
        const itemManyBuyers = document.createElement("div");
        productManyBuyer.appendChild(itemManyBuyers);

        itemManyBuyers.classList.add("products--orders__item");
        if (item.sale === 0) {
            itemManyBuyers.innerHTML = `
                <div class="products--items__img">
                    <img src="${item.imgUrl}" alt="rings" />
                    <div class="overlay">
                    <div class="text">
                        <img src="${item.imgUrl1}" alt="rings" />
                    </div>
                </div>
                </div>
                <div class="products--items__info">
                    <a href="#">${item.name}</a>
                    <p>VND ${item.price.toFixed(2)}</p>
                    <button >Add to cart</button>  
                </div>
            `;
            const buttonEl = itemManyBuyers.querySelector('button');
            buttonEl.addEventListener('click', () => {
                addToCart(item);
                cartNumber();
            });
        }
        else {
            itemManyBuyers.innerHTML = `
                <div class="products--items__img">
                    <img src="${item.imgUrl}" alt="rings" />
                    <div class="overlay">
                        <div class="text">
                            <img src="${item.imgUrl1}" alt="rings" />
                        </div>
                    </div>
                </div>
                <div class="products--items__info">
                    <a href="#">${item.name}</a>
                    <p><del>VND ${item.price.toFixed(2)}</del> <span class="price">$240.00</span></p>
                    <button >Add to cart</button>  
                </div>
                <span class="discount"></span>
            `;
            const buttonEl = itemManyBuyers.querySelector('button');
            buttonEl.addEventListener('click', () => {
                addToCart(item);
                cartNumber();
            });
        }
    });
}

//-- Count cart
const numberCart = document.querySelector('#numbers');
    function cartNumber() {
        let cartNumber = 0;
        let cartItem = JSON.parse(localStorage.getItem('cart'));
        cartItem.forEach(item => {
            cartNumber = item.quantity += cartNumber;
        });

        numberCart.setAttribute('data-after', cartNumber);
    }

//-- Add to cart
function addToCart(item) {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage);
    }
    const target = cart.find(element => element.id === item.id); //-- true
    if (target) {
        target.quantity += 1;
    }
    else {
        const cartItem = {
            ...item,
            quantity: 1
        }
        cart.push(cartItem);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Add to cart successfully');
    
}
//-- Display cart
function showCart() {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage);
    }
    if (cart.length === 0) {
        const shopcart = document.querySelector('.shopcart');
        shopcart.remove();
        const notiEl = document.querySelector('.notification');
        const h1El = document.createElement('h1');
        notiEl.appendChild(h1El);
        h1El.textContent = 'Oops, Your cart is empty';
        return false;
    }
    else {
        cart.forEach(function (item) {
            let cartBody = document.querySelector('#cart-body');
            let trEl = document.createElement('tr');
            item.trEl = trEl;
            cartBody.appendChild(trEl);
            trEl.innerHTML = `
                <td>${item.id}</td>
                <td class="weight">${item.name}</td>
                <td><a href="./product-details.html"><img src="${item.imgUrl}" alt="item" /></a></td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input id="quantityInput" min="1" max="10" type="number" value="${item.quantity}"/> 
                </td>
                <td><button class="remove">X</button></td>
            `;
            const removeEl = trEl.querySelector('button');
            removeEl.addEventListener('click', () => {
                removeItem(item);
            });
            const editEl = trEl.querySelector('input');
            editEl.addEventListener('change',  () => {
                updatevalue(item, event);
            });
        });
    }

}

function updatevalue(item, e) {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage);
    }
    console.log(cart);
    let indexOfEl = cart.map(element => element.id);
    let index = indexOfEl.findIndex(id => id === item.id);
    cart[index].quantity = Number(e.target.value);
    localStorage.setItem('cart', JSON.stringify(cart));
    totalCart();
}

//-- Display popup
function showPopup() {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage);
    }
    
    cart.forEach(function (item) {
        const itemEl = document.createElement('div');
        itemEl.setAttribute('data-id', item.id);
        itemEl.classList.add('cart__item--product');
        item.itemEl = itemEl;
        cartEl.appendChild(itemEl);
        itemEl.innerHTML =
            `
                <div class="cart__item--img">
                    <a href="#">
                        <img src="${item.imgUrl}" alt="item" />
                    </a>
                </div>
                <div class="cart__item--info">
                    <strong>${item.name}</strong>
                    <p>$${item.price.toFixed(2)} <span class="cart__item--quantity">x ${item.quantity}</span></p>
                </div>
                <div class="cart__item--button">
                    <button>X</button>
                </div>
            `;
        const removePopup = itemEl.querySelector('button');
        removePopup.addEventListener('click', () => {
            removeItemPopup(item);
            cartNumber();
        });
    });
}



//-- Remove item
function removeItem(item) {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage);
    }
    let indexOfEl = cart.map(element => element.id);
    let index = indexOfEl.findIndex(id => id === item.id);
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart)); 
    item.trEl.remove(); 
    totalCart();
    if (cart.length === 0) {
        const shopcart = document.querySelector('.shopcart');
        shopcart.remove();
        const notiEl = document.querySelector('.notification');
        const h1El = document.createElement('h1');
        notiEl.appendChild(h1El);
        h1El.textContent = 'Oops, Your cart is empty';
        return false;
    }
}

//-- Remove item
function removeItemPopup(item) {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage);
    }
    let indexOfEl = cart.map(element => element.id);
    let index = indexOfEl.findIndex(id => id === item.id);
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    item.itemEl.remove();
}
//-- Total cart
function totalCart() {
    let subTotal = 0;
    let total = 0;
    let cartItem = JSON.parse(localStorage.getItem('cart'));
    let cartTotal = document.querySelector('#total-cart');
    cartItem.forEach(item => {
        subTotal += item.price * item.quantity;
        total = subTotal + 20 + 15;
        cartTotal.innerHTML = `
        <li>
            <p>Cart Sub Total :</p>
            <span>VND ${subTotal.toFixed(2)}</span>
        </li>
      
        <li>
            <p>Total :</p>
            <span>VND ${total.toFixed(2)}</span>
        </li>
        `;
    });
}

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

