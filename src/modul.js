const products = document.querySelector('.poducts');


const renderProductItem = ({id, name, price, img}) => {
    console.log('Выполнение метода: renderProductItem');
    return `<div class="products__item" data-id="${id}">
        <img src="${img}" alt="">
        <h2 class="item__name">${name}</h2>
        <p class="item__price">${price}</p>
        <button class="item_btn">Купить</button>
    </div>`;
};


const renderList = (list) => {
    let productlist = list.map( item => { return renderProductItem(item) }).join('');
    products.insertAdjacentHTML('afterbegin', productlist);
    console.log('Выполнение метода: renderList');
};



const head = document.querySelector('.headers');


const renderMenuItem = ({name, url}) => {
    return `<a href="${url}" class="headers__item">${name}</a> \n`
}

const renderMenuLIst = (arr) => {
    let menulist = arr.map( item => { return renderMenuItem(item) }).join('');
    head.insertAdjacentHTML('afterbegin', menulist);
}

export {
    renderMenuLIst,
    renderList,
}