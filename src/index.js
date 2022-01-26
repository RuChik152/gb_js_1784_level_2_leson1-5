import "./css/style.scss";
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







