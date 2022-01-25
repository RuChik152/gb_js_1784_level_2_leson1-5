import { queryAddToBasketPost, queryAddToBasketPut } from './core.js';
"use strict";

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
                queryAddToBasketPut(`/api/addToBasket/${id}`, {count: 1});
            } else{
                let prod = Object.assign({id: id, title: title, price: price, count: 1});
                queryAddToBasketPost('/api/addToBasket', prod);
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
