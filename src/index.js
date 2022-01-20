import { getProductList, getMenuList } from './mock/data.js'
import { renderList, renderMenuLIst } from './modul.js'
import "./css/style.scss"


const productList = getProductList(10);
const menulist = getMenuList();

renderList(productList);
renderMenuLIst(menulist);