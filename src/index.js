import { createBasket } from './modul.js';
import "./css/style.scss";
import { queryProductList, queryMenuList, queryBasketList, removeItemBasket } from './core.js';



createBasket();
queryBasketList('/api/getBasketList');
queryMenuList('/api/getMenulist');
queryProductList('/api/getProduct');







