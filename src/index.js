import "./css/style.scss";
import { renderList, renderMenuLIst, renderBasketlist } from './modul.js';

import ApiHendler from './ApiHendler.js';
import ApiProduct from "./ApiProduct";
import ApiMenu from "./ApiMenu";
import ApiBasket from "./ApiBasket";


const app = new ApiHendler();

const product = new ApiProduct(app);
const menu = new ApiMenu(app);
const basket = new ApiBasket(app);



basket.queryBasketList(renderBasketlist);
//menu.queryMenuList();
product.queryProductList('/api/getProduct', renderList);







