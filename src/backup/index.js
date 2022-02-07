import "./css/style.scss";

// import __ApiRenderBasket__ from "./__ApiRenderBasket__";
// import ApiHendler from "./ApiHendler";
//
// const app = new ApiHendler();
// const api_basket = new __ApiRenderBasket__(app);




// import ApiHendler from "./ApiHendler";
// import ___ApiBasket from "./___ApiBasket";
// import ___ApiRenderBasket from "./___ApiRenderBasket";
//
// const app = new ApiHendler();
// const renderBasket = new ___ApiRenderBasket();
//
// const basket = new ___ApiBasket(app, renderBasket);



import { renderBasketlist } from './modul.js';

import ApiHendler from './ApiHendler.js';
import ApiProduct from "./ApiProduct";
import ApiMenu from "./ApiMenu";
import ApiBasket from "./ApiBasket";
import Render from "./Render";



const app = new ApiHendler();




const product = new ApiProduct(app);
const menu = new ApiMenu(app);
const basket = new ApiBasket(app);


const render = new Render();


basket.queryBasketList(renderBasketlist);
product.queryProductList(render.renderList);







