'use strict';
import "./css/style.scss";

import ApiRender from "./ApiRender";
import ApiHendler from "./ApiHendler";
import ApiBasket from "./ApiBasket";
import ApiActive from "./ApiActive";
import ApiProduct from "./ApiProduct";


const app = new ApiHendler();

const basket = new ApiBasket(app);
const product = new ApiProduct(app);
const render = new ApiRender();


const action = new ApiActive(basket, render, product);
