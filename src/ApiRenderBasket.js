'use strict';

import ApiBasket from "./ApiBasket";

export default class ApiRenderBasket extends ApiBasket{
    constructor(SRV_URL) {
        super(SRV_URL);
        this.getReqBasketRender();
        console.log('class ApiRenderBasket', this);
    }

    getReqBasketRender(url = '/api/getBasketList') {
        return super.getReqBasket(url, this.renderBasketList);
    }

    renderBasketList(arr){
        console.log(arr);
        let basketBlock = document.querySelector('.basket__block');
        basketBlock.innerHTML = '';
        let basketList = arr.map( item => {return this.renderBasketItem(item)}).join('');
        basketBlock.insertAdjacentHTML("afterbegin", basketList);
    }

    renderBasketItem(item){
        return `<div class="basket__item" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}" data-count="${item.count}">
                <h2 class="item__title">${item.title}</h2>
                <p class="item__price">${item.price}</p>
                <p class="item__count">${item.count}</p>
                <button class="item__btn">Удалить</button>
            </div>`;
    }

}