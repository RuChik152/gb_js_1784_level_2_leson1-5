import { queryDeleteItemBasket } from './core.js';
import productActionButton from './headers.js';

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



const head = document.querySelector('.headers');


const renderMenuItem = ({name, url, tag}) => {
    return `<a href="${url}" class="headers__item ${tag}">${name}</a> \n`
}

const renderMenuLIst = (arr) => {
    let menulist = arr.map( item => { return renderMenuItem(item) }).join('');
    head.insertAdjacentHTML('afterbegin', menulist);
}

const createBasket = () => {
    let str = `<div class="basket__block"></div>`;
    let header = document.querySelector('header');
    header.insertAdjacentHTML('beforeend', str);

    showBasket();
    //незабыть раскоментить стили в _heade.scss для показа\скрытия корзины
}

const removeItemBasket = () => {
    let itemBtn = document.querySelectorAll('.item__btn');
    itemBtn.forEach(item => {
        item.addEventListener('click', function (e){
            e.preventDefault();
            let id = e.target.parentNode.dataset.id
            queryDeleteItemBasket(`/api/delBasket/${id}`);
        })
    })
}

const showBasket = () => {
    let basket = document.querySelector('.basket');
    let basketBlock = document.querySelector('.basket__block');
    basket.addEventListener('click', function(e){
        let target = e.target == basket;
        let isActive = basketBlock.classList.contains('basket__active');

        if(target){
            if(isActive){
                basketBlock.classList.remove('basket__active');
            } else {
                basketBlock.classList.add('basket__active');
            }
        }

    });
    
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
    renderMenuLIst,
    renderList,
    renderBasketlist,
    createBasket,
    removeItemBasket
}