'use strict';

import ApiHendler from "./ApiHendler";
import ApiBasket from "./ApiBasket";
import ApiRender from "./ApiRender";

export default class ApiActive{
    constructor(basket, render, product) {
        this.basket = basket;
        this.product = product;
        this.render = render;
        this.__init();
        console.log('class ApiActive', this);
    }
    __init(){
        this.#loadItemProduct();
        this.#loadItemBasket();
        this.#activeButton();
        this.#addItemBasket();
    }

    #loadItemBasket(){
        console.log('Загрузка данных корзины');
        this.basket.queryGetBasket().then(data => {
            this.render.renderBasketList(data);
            this.#deleteItemBasket();
        });

    }
    #loadItemProduct(){
        this.product.queryGetProduct().then(data => {
            this.render.renderList(data);
        })
    }


    #activeButton(){
        let btnActiveBasket = document.querySelector('.basket');
        let blockBasket = document.querySelector('.basket__block');
        btnActiveBasket.addEventListener('click', function (e){
            let change = e.target == btnActiveBasket;
            if(change){
                console.log(`показать\\скрыть корзину`);
                blockBasket.classList.toggle('basket__active');
            }
        })
    }

    #addItemBasket(){
        let productBtn = document.querySelectorAll('.product__btn');
        productBtn.forEach(function (item){
            item.addEventListener('click', function (e){
                let item = e.target.parentNode.dataset;

                let id = Number(item.id);
                let title = String(item.title);
                let price = Number(item.price);

                let product = Object.assign({id: id, title: title, price: price});


                console.log(`Добавили продукт`, product);
            })
        })
    }


    #deleteItemBasket(){
        let itemBtn = document.querySelectorAll('.item__btn');
        itemBtn.forEach(item => {
            item.addEventListener('click', function (e){
                e.preventDefault();
                console.log('Нжали на кнопку удалить', e.target);
                let id = e.target.parentNode.dataset.id

                //такая конструкция, создание еще одних экземляров классов мне не нравиться, и кажеться не правильной,
                //потому, что если вызывать методы this.basket и this.render, то будет undefine
                //так как this будет itemBtn, кнопка, а у нее этих методов нет.
                //как решить эту задачу по другому я на момент написания не смог.
                //буду благодарен за комметарий и подсказку
                const app = new ApiHendler();
                const basket = new ApiBasket(app);
                const render = new ApiRender();
                basket.queryDeleteBasket(id);
                const action = new ApiActive(basket, render);

            })
        })
    }

}