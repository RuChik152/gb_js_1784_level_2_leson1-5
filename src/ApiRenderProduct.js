'use strict';


import ApiHendler from "./ApiHendler";
import ApiRenderBasket from "./ApiRenderBasket";


export default class ApiRenderProduct {
    constructor() {
        this.getReqProductRender();
        console.log('class ApiRenderProduct', this);
    }

    getReqProductRender(){
        ApiHendler.getReqToSrv(`/api/getProduct`).then(data => {
            this.renderProductList(data);
            this.addItemProduct();
            ApiRenderBasket.getReqBasketRender();
        });
    }

    renderProductList(arr){
        const products = document.querySelector('.poducts');
        let productlist = arr.map( item => { return this.renderProductItem(item) }).join('');
        products.insertAdjacentHTML('afterbegin', productlist);
    }

    renderProductItem({id, title, price}){
        return `<div class="products__item" data-id="${id}" data-title="${title}" data-price="${price}">
                    <h2 class="item__name">${title}</h2>
                    <p class="item__price">${price}</p>
                    <button class="product_btn">Купить</button>
                </div>`;
    }


    addItemProduct(){
        let btn = document.querySelectorAll('.product_btn');
        ApiHendler.getReqToSrv('/api/getBasketList').then(data => {
            ApiRenderBasket.renderBasketList(data);
            ApiRenderBasket.deleteItemBasket();

        })

        btn.forEach(item => {
            item.addEventListener('click', function (e){
                let price = Number(e.target.parentNode.dataset.price);
                let id = Number(e.target.parentNode.dataset.id);
                let title = String(e.target.parentNode.dataset.title);


              let basketList = ApiRenderBasket.showItemBasket();

                 console.log(basketList);
                 let change = basketList.find(item => item.dataset.id == id);
                 console.log(change);

                if(change){
                    ApiHendler.putReqToSrv(`/api/addToBasket/${id}`, {count:1});
                    change.dataset.count++;
                    change.children[2].innerHTML = change.dataset.count;
                } else {
                    let product = Object.assign({id: id, title: title, price: price, count: 1});
                    ApiHendler.postReqToSrv(`/api/addToBasket`, product)
                        .then((data) => {
                        return data.userbasket;
                        })
                        .then((data) => {
                            ApiRenderBasket.renderBasketList(data);
                            ApiRenderBasket.deleteItemBasket();
                        })

                }

            })
        })

    }
}