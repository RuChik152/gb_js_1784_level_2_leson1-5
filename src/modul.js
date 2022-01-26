import productActionButton from './headers.js';

import ApiHendler from "./ApiHendler";
import ApiBasket from "./ApiBasket";

const app = new  ApiHendler();
const basket = new ApiBasket(app);

const products = document.querySelector('.poducts');


const renderProductItem = ({id, title, price}) => {
    return `<div class="products__item" data-id="${id}" data-title="${title}" data-price="${price}">
        <h2 class="item__name">${title}</h2>
        <p class="item__price">${price}</p>
        <button class="product_btn">Купить</button>
    </div>`;
};


const renderList = (list) => {
    let productlist = list.map( item => { return renderProductItem(item) }).join('');
    products.insertAdjacentHTML('afterbegin', productlist);
    productActionButton();
};



const removeItemBasket = () => {
    let itemBtn = document.querySelectorAll('.item__btn');
    itemBtn.forEach(item => {
        item.addEventListener('click', function (e){
            e.preventDefault();
            let id = e.target.parentNode.dataset.id
            basket.queryDeleteItemBasket(`/api/delBasket/${id}`, renderBasketlist);
        })
    })
}



const renderBasketItem = ({id, title, price, count}) => {
    return `<div class="basket__item" data-id="${id}" data-title="${title}" data-price="${price}" data-count="${count}">
                <h2 class="item__title">${title}</h2>
                <p class="item__price">${price}</p>
                <p class="item__count">${count}</p>
                <button class="item__btn">Удалить</button>
            </div>`;
}


const renderBasketlist = (arr) => {
    let basketBlock = document.querySelector('.basket__block');
    basketBlock.innerHTML = '';
    let basketList = arr.map( item => { return renderBasketItem(item)}).join('');
    basketBlock.insertAdjacentHTML('afterbegin', basketList);
    removeItemBasket();
}

export {
    renderList,
    renderBasketlist,
    removeItemBasket
}