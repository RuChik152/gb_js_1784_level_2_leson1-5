'use strict';

import ApiHendler from "./ApiHendler";

export default class ApiRenderBasket{
    constructor() {
        this.#showBasket();
        ApiRenderBasket.getReqBasketRender();
        console.log('class ApiRenderBasket', this);
    }

    static getReqBasketRender() {
        ApiHendler.getReqToSrv('/api/getBasketList').then(data => {
            ApiRenderBasket.renderBasketList(data);
            ApiRenderBasket.deleteItemBasket();
        })
    }

    static deleteItemBasket(){
        let itemBtn = document.querySelectorAll('.item__btn');
        itemBtn.forEach(item => {
            item.addEventListener('click', function (e){
                e.preventDefault();
                let id = e.target.parentNode.dataset.id;
                let target = e.target.parentNode;

                // console.log('Нжали на кнопку удалить', e.target);
                //let basketList = document.querySelectorAll('.basket__item');
                let basketList = ApiRenderBasket.showItemBasket();
                console.log(basketList[0].dataset.count);
                for(let i = 0; i < basketList.length; i++){
                    let change = basketList[i] == target;
                    //console.log(basketList[i].dataset.count);
                    // console.log(basketList[i]);
                    // console.log(basketList[i].children[2]);
                    //debugger
                    //console.log(e.target)

                    if(change){
                        let count = Number(basketList[i].dataset.count);
                        if(count > 1){
                            basketList[i].dataset.count--;
                            basketList[i].children[2].innerHTML = basketList[i].dataset.count;
                        } else if(count == 1){
                            basketList[i].remove();
                        }
                    }
                }
                ApiHendler.deleteReqToSrv(`/api/delBasket/${id}`);


            })
        })
    }

    static showItemBasket(){
        const arr = [];
        const list = document.querySelectorAll('.basket__item');
        list.forEach(function (item){
            arr.push(item);
        })
        return arr;
    }

    static renderBasketList(arr){
        let basketBlock = document.querySelector('.basket__block');
        basketBlock.innerHTML = '';
        let basketList = arr.map( item => {return ApiRenderBasket.renderBasketItem(item)}).join('');
        basketBlock.insertAdjacentHTML("afterbegin", basketList);
    }

    static renderBasketItem(item){
        return `<div class="basket__item" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}" data-count="${item.count}">
                <h2 class="item__title">${item.title}</h2>
                <p class="item__price">${item.price}</p>
                <p class="item__count">${item.count}</p>
                <button class="item__btn">Удалить</button>
            </div>`;
    }





    #showBasket(){

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
        ApiRenderBasket.getReqBasketRender();
    }

}