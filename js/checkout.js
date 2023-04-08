'use strict';
window.addEventListener('load', showCartCheckout);
window.addEventListener('load', totalCart);
//-- Display cart
function showCartCheckout() {
    let cartItem = JSON.parse(localStorage.getItem('cart'));
    cartItem.forEach(function (item) {
        let cartBody = document.querySelector('#cart-body');
        let trEl = document.createElement('tr');
        cartBody.appendChild(trEl);
        trEl.innerHTML = `
                <td>${item.id}</td>
                <td class="weight">${item.name}</td>
                <td><a href="./product-details.html"><img src="${item.imgUrl}" alt="item" /></a></td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
            `;
        });
}

//-- Total cart
function totalCart() {
    let subTotal = 0;
    let total = 0;
    let cartItem = JSON.parse(localStorage.getItem('cart'));
    let cartTotal = document.querySelector('#total-cart');
    if (cartItem.length === 0){
        return false
    }
    else {
        cartItem.forEach(item => {
        subTotal += item.price * item.quantity;
        total = subTotal + 20 + 15;
        cartTotal.innerHTML = `
        <li>
            <p>Cart Sub Total :</p>
            <span>$${subTotal.toFixed(2)}</span>
        </li>
        <li>
            <p>Tax :</p>
            <span>$20.00</span>
        </li>
        <li>
            <p>Shipping Cost :</p>
            <span>$15.00</span>
        </li>
        <li>
            <p>Total :</p>
            <span>$${total.toFixed(2)}</span>
        </li>
        `;
        });    
    }
    
}