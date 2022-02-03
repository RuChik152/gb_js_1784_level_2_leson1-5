"use strict";
import { renderBasketlist } from './modul.js'

import ApiBasket from "./ApiBasket";
import ApiHendler from "./ApiHendler";

const app = new ApiHendler();
const basket = new ApiBasket(app);



function productActionButton(){
    let btn = document.querySelectorAll('.product_btn');
    btn.forEach(item => {
        item.addEventListener('click', function(e){

            let price = Number(e.target.parentNode.dataset.price);
            let id = Number(e.target.parentNode.dataset.id);
            let title = String(e.target.parentNode.dataset.title);
            let basketData = showItemCountBasket();

            let change = basketData.find(item => item.id === id);


            if(change) {
                basket.queryAddToBasketPut(`/api/addToBasket/${id}`, {count: 1}, renderBasketlist);

            } else{
                let prod = Object.assign({id: id, title: title, price: price, count: 1});
                basket.queryAddToBasketPost('/api/addToBasket', prod, renderBasketlist);
            }
        })
    })
}

function showItemCountBasket(){
    let basketItems = document.querySelectorAll('.basket__item');

    const basketItemDataList = [];
    basketItems.forEach(item => {
        let price = Number(item.dataset.price);
        let id = Number(item.dataset.id);
        let title = String(item.dataset.title);
        
        let prod = Object.assign({id: id, title: title, price: price});
        basketItemDataList.push(prod);
    })
    return basketItemDataList;
}


export default productActionButton;
