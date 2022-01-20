import { random } from "lodash";

const PRODUCT = [
    'Underwear',
    'Casuals',
    'Sportswear',
    'Boots',
    'Suit'
];

const COLOR = [
    'Red',
    'Green',
    'White',
    'Black',
    'Jellow'
];

function getProductName(){
    const product = PRODUCT[random(0, PRODUCT.length - 1)];
    const color = COLOR[random(0, COLOR.length - 1)];

    return `${product} ${color}`;
};


function getProduct(){
    return {
        id: random(0, 999),
        name: getProductName(),
        price: random(0, 9999)
    }
};


function getProductList(count){
    let productList = []

    for(let i = 0; i < count; i++){
        productList.push(getProduct());
    }

    return productList;
};



const DATASITE = [
    {
        name: 'Yandex',
        url: 'https://www.ya.ru'
    },
    {
        name: 'Google',
        url: 'https://www.google.com'
    },
    {
        name: 'Bing',
        url: 'https://www.bing.com'
    },
    {
        name: 'Yahoo',
        url: 'https://www.yahoo.com/'
    },
    {
        name: 'DuckDuckGo',
        url: 'https://duckduckgo.com/'
    }
];


function getMenuList(){
    let menuList = [];

    for(let i = 0; i < DATASITE.length; i++){
        menuList.push(DATASITE[i]);
    }

    return menuList;
};


export {
    getProductList,
    getMenuList,
}