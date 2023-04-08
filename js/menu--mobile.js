'use strict';

const buttonEl = document.querySelector(".btn__menu");
buttonEl.addEventListener('click', open);
function open(){
    const menuEl = document.querySelector('.bottom__menu--mobile');
    if (menuEl.style.display === 'none'){
        menuEl.style.display = 'block';
        menuEl.innerHTML = `
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="./products.html">Products</a></li>
                <li class="bottom__menu--popup">
                        <a href="#">Categories</a>
                        <div class="hidden popup popup--mobile">
                            <a href="./products.html">Ring</a>
                            <a href="#">Necklace</a>
                            <a href="#">Bracelet</a>
                            <a href="#">Bangles</a>
                            <a href="#">Earring</a>
                        </div>
                    </li>
                <li><a href="#">Brands</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li><a href="./about-us.html">About Us</a></li>
            </ul>
        `;
    }
    else {
        menuEl.style.display = 'none';
    }
    
}