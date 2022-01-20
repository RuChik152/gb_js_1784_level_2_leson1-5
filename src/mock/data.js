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

// let lastIndex = 0;

function getProduct(){
    return {
        id: random(0, 999),
        img: `https://placeimg.com/200/250/people/grayscale/${random(0, 1000)}`,
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
        name: 'Доставка',
        url: '#'
    },
    {
        name: 'О нас',
        url: '#'
    },
    {
        name: 'Каталог',
        url: '#'
    },
    {
        name: 'Контакты',
        url: '#'
    },
    {
        name: 'Корзина',
        url: '#'
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