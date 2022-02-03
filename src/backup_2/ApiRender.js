'use strict';
export default class ApiRender{
    constructor() {
        console.log('class ApiRender', this);
    }

    renderBasketList(arr){
        let basketBlock = document.querySelector('.basket__block');
        basketBlock.innerHTML = '';
        let basketList = arr.map( item => {return this.#renderBasketItem(item)}).join('');
        basketBlock.insertAdjacentHTML("afterbegin", basketList);

    }

    #renderBasketItem(item){
        return `<div class="basket__item" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}" data-count="${item.count}">
                <h2 class="item__title">${item.title}</h2>
                <p class="item__price">${item.price}</p>
                <p class="item__count">${item.count}</p>
                <button class="item__btn">Удалить</button>
            </div>`;
    }

    renderList(arr){
        const products = document.querySelector('.poducts');
        let productlist = arr.map( item => { return this.#renderProductItem(item) }).join('');
        products.insertAdjacentHTML('afterbegin', productlist);
    }

    #renderProductItem({id, title, price}){
        return `<div class="products__item" data-id="${id}" data-title="${title}" data-price="${price}">
                    <h2 class="item__name">${title}</h2>
                    <p class="item__price">${price}</p>
                    <button class="product_btn">Купить</button>
                </div>`;
    }



}