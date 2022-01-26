export default class ApiProduct {
    constructor(app) {
        this.app = app;
        this.#queryProductList();
        this.products = document.querySelector('.poducts');
    }
    #queryProductList(url = '/api/getProduct'){
        this.app.getJson(url).then(data => {
            this.#renderList(data)
        });
    }

    #renderList(arr){
        let productlist = arr.map( item => { return this.#renderProductItem(item) }).join('');
        this.products.insertAdjacentHTML('afterbegin', productlist);
    }

    #renderProductItem({id, title, price}){
        return `<div class="products__item" data-id="${id}" data-title="${title}" data-price="${price}">
        <h2 class="item__name">${title}</h2>
        <p class="item__price">${price}</p>
        <button class="product_btn">Купить</button>
    </div>`;
    }

}