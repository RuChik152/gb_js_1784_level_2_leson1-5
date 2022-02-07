import productActionButton from "./headers";
import {removeItemBasket} from "./modul";

export default class Render {
    constructor() {

    }

    renderList = (list) => {
        const products = document.querySelector('.poducts');
        let productlist = list.map( item => { return this.renderProductItem(item) }).join('');
        products.insertAdjacentHTML('afterbegin', productlist);
        productActionButton();
    };

    renderProductItem = ({id, title, price}) => {
        return `<div class="products__item" data-id="${id}" data-title="${title}" data-price="${price}">
        <h2 class="item__name">${title}</h2>
        <p class="item__price">${price}</p>
        <button class="product_btn">Купить</button>
    </div>`;
    };


}