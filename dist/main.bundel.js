/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lesson_test_2/./src/css/style.scss?");

/***/ }),

/***/ "./src/ApiBasket.js":
/*!**************************!*\
  !*** ./src/ApiBasket.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiBasket)\n/* harmony export */ });\nclass ApiBasket {\r\n    constructor(app) {\r\n        this.app = app;\r\n        this.createBasket();\r\n    }\r\n\r\n\r\n    createBasket(){\r\n        let str = `<div class=\"basket__block\"></div>`;\r\n        let header = document.querySelector('header');\r\n        header.insertAdjacentHTML('beforeend', str);\r\n        this.showBasket();\r\n    }\r\n\r\n    showBasket(){\r\n        let basket = document.querySelector('.basket');\r\n        let basketBlock = document.querySelector('.basket__block');\r\n        basket.addEventListener('click', function(e){\r\n            let target = e.target == basket;\r\n            let isActive = basketBlock.classList.contains('basket__active');\r\n\r\n            if(target){\r\n                if(isActive){\r\n                    basketBlock.classList.remove('basket__active');\r\n                } else {\r\n                    basketBlock.classList.add('basket__active');\r\n                }\r\n            }\r\n\r\n        });\r\n    }\r\n\r\n    queryBasketList(dataAction, url = '/api/getBasketList',){\r\n        this.app.getJson(url).then(data => {\r\n            dataAction(data);\r\n        })\r\n    }\r\n\r\n    queryAddToBasketPost(url, data, dataAction){\r\n        this.app.postJson(url, data).then(data => {\r\n            dataAction(data.userbasket);\r\n        })\r\n    }\r\n\r\n    queryAddToBasketPut(url, data, dataAction){\r\n        this.app.putJson(url, data).then(data => {\r\n            dataAction(data.userbasket);\r\n        })\r\n    }\r\n\r\n    queryDeleteItemBasket(url, dataAction){\r\n        this.app.deletJson(url, dataAction).then(data => {\r\n            if(data.result === 1){\r\n                dataAction(data.userbasket);\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://lesson_test_2/./src/ApiBasket.js?");

/***/ }),

/***/ "./src/ApiHendler.js":
/*!***************************!*\
  !*** ./src/ApiHendler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiHendler)\n/* harmony export */ });\nclass ApiHendler {\r\n    constructor() {\r\n        this.API = 'http://localhost:3000'\r\n    }\r\n\r\n    getJson(url){\r\n        return fetch(`${this.API}${url}`).then(result => result.json());\r\n    }\r\n\r\n    postJson(url, data){\r\n        return fetch(`${this.API}${url}`, {\r\n            method: 'POST',\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify(data)}).then(result => result.json());\r\n    }\r\n\r\n    putJson(url, data) {\r\n        return fetch(`${this.API}${url}`, {\r\n            method: 'PUT',\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify(data)}).then(result => result.json());\r\n    }\r\n\r\n    deletJson(url){\r\n        return fetch(`${this.API}${url}`, {\r\n            method: 'DELETE',\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(result => result.json());\r\n    }\r\n}\n\n//# sourceURL=webpack://lesson_test_2/./src/ApiHendler.js?");

/***/ }),

/***/ "./src/ApiMenu.js":
/*!************************!*\
  !*** ./src/ApiMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiMenu)\n/* harmony export */ });\nclass ApiMenu {\r\n    constructor(app) {\r\n        this.app = app;\r\n        this.queryMenuList();\r\n    }\r\n\r\n    queryMenuList(url = '/api/getMenulist'){\r\n        this.app.getJson(url).then(data => {\r\n            this.renderMenuLIst(data);\r\n        });\r\n    }\r\n\r\n    renderMenuLIst(arr){\r\n        const head = document.querySelector('.headers');\r\n        let menulist = arr.map( item => { return this.renderMenuItem(item) }).join('');\r\n        head.insertAdjacentHTML('afterbegin', menulist);\r\n    }\r\n\r\n    renderMenuItem({name, url, tag}){\r\n        return `<a href=\"${url}\" class=\"headers__item ${tag}\">${name}</a> \\n`\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://lesson_test_2/./src/ApiMenu.js?");

/***/ }),

/***/ "./src/ApiProduct.js":
/*!***************************!*\
  !*** ./src/ApiProduct.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiProduct)\n/* harmony export */ });\n/* harmony import */ var _modul__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modul */ \"./src/modul.js\");\n\r\n\r\nclass ApiProduct {\r\n    constructor(app) {\r\n        this.app = app;\r\n    }\r\n    queryProductList(url, dataAction){\r\n        this.app.getJson(url).then(data => {\r\n            dataAction(data);\r\n        });\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://lesson_test_2/./src/ApiProduct.js?");

/***/ }),

/***/ "./src/headers.js":
/*!************************!*\
  !*** ./src/headers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modul.js */ \"./src/modul.js\");\n/* harmony import */ var _ApiBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiBasket */ \"./src/ApiBasket.js\");\n/* harmony import */ var _ApiHendler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiHendler */ \"./src/ApiHendler.js\");\n\r\n\r\n\r\n\r\n\r\n\"use strict\";\r\n\r\nconst app = new _ApiHendler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst basket = new _ApiBasket__WEBPACK_IMPORTED_MODULE_1__[\"default\"](app);\r\n\r\n\r\n\r\nfunction productActionButton(){\r\n    let btn = document.querySelectorAll('.product_btn');\r\n    btn.forEach(item => {\r\n        item.addEventListener('click', function(e){\r\n\r\n            let price = Number(e.target.parentNode.dataset.price);\r\n            let id = Number(e.target.parentNode.dataset.id);\r\n            let title = String(e.target.parentNode.dataset.title);\r\n            let basketData = showItemCountBasket();\r\n\r\n            let change = basketData.find(item => item.id === id);\r\n\r\n\r\n            if(change) {\r\n                basket.queryAddToBasketPut(`/api/addToBasket/${id}`, {count: 1}, _modul_js__WEBPACK_IMPORTED_MODULE_0__.renderBasketlist);\r\n\r\n            } else{\r\n                let prod = Object.assign({id: id, title: title, price: price, count: 1});\r\n                basket.queryAddToBasketPost('/api/addToBasket', prod, _modul_js__WEBPACK_IMPORTED_MODULE_0__.renderBasketlist);\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\nfunction showItemCountBasket(){\r\n    let basketItems = document.querySelectorAll('.basket__item');\r\n\r\n    const basketItemDataList = [];\r\n    basketItems.forEach(item => {\r\n        let price = Number(item.dataset.price);\r\n        let id = Number(item.dataset.id);\r\n        let title = String(item.dataset.title);\r\n        \r\n        let prod = Object.assign({id: id, title: title, price: price});\r\n        basketItemDataList.push(prod);\r\n    })\r\n    return basketItemDataList;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productActionButton);\r\n\n\n//# sourceURL=webpack://lesson_test_2/./src/headers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modul.js */ \"./src/modul.js\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _ApiHendler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiHendler.js */ \"./src/ApiHendler.js\");\n/* harmony import */ var _ApiProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApiProduct */ \"./src/ApiProduct.js\");\n/* harmony import */ var _ApiMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ApiMenu */ \"./src/ApiMenu.js\");\n/* harmony import */ var _ApiBasket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApiBasket */ \"./src/ApiBasket.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst app = new _ApiHendler_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\nconst product = new _ApiProduct__WEBPACK_IMPORTED_MODULE_3__[\"default\"](app);\r\nconst menu = new _ApiMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"](app);\r\nconst basket = new _ApiBasket__WEBPACK_IMPORTED_MODULE_5__[\"default\"](app);\r\n\r\n\r\n\r\nbasket.queryBasketList(_modul_js__WEBPACK_IMPORTED_MODULE_0__.renderBasketlist);\r\n//menu.queryMenuList();\r\nproduct.queryProductList('/api/getProduct', _modul_js__WEBPACK_IMPORTED_MODULE_0__.renderList);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://lesson_test_2/./src/index.js?");

/***/ }),

/***/ "./src/modul.js":
/*!**********************!*\
  !*** ./src/modul.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderList\": () => (/* binding */ renderList),\n/* harmony export */   \"renderBasketlist\": () => (/* binding */ renderBasketlist),\n/* harmony export */   \"removeItemBasket\": () => (/* binding */ removeItemBasket)\n/* harmony export */ });\n/* harmony import */ var _headers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers.js */ \"./src/headers.js\");\n/* harmony import */ var _ApiHendler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiHendler */ \"./src/ApiHendler.js\");\n/* harmony import */ var _ApiBasket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiBasket */ \"./src/ApiBasket.js\");\n\r\n\r\n\r\n\r\n\r\nconst app = new  _ApiHendler__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst basket = new _ApiBasket__WEBPACK_IMPORTED_MODULE_2__[\"default\"](app);\r\n\r\nconst products = document.querySelector('.poducts');\r\n\r\n\r\nconst renderProductItem = ({id, title, price}) => {\r\n    return `<div class=\"products__item\" data-id=\"${id}\" data-title=\"${title}\" data-price=\"${price}\">\r\n        <h2 class=\"item__name\">${title}</h2>\r\n        <p class=\"item__price\">${price}</p>\r\n        <button class=\"product_btn\">Купить</button>\r\n    </div>`;\r\n};\r\n\r\n\r\nconst renderList = (list) => {\r\n    let productlist = list.map( item => { return renderProductItem(item) }).join('');\r\n    products.insertAdjacentHTML('afterbegin', productlist);\r\n    (0,_headers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\n\r\n\r\nconst removeItemBasket = () => {\r\n    let itemBtn = document.querySelectorAll('.item__btn');\r\n    itemBtn.forEach(item => {\r\n        item.addEventListener('click', function (e){\r\n            e.preventDefault();\r\n            let id = e.target.parentNode.dataset.id\r\n            basket.queryDeleteItemBasket(`/api/delBasket/${id}`, renderBasketlist);\r\n        })\r\n    })\r\n}\r\n\r\n\r\n\r\nconst renderBasketItem = ({id, title, price, count}) => {\r\n    return `<div class=\"basket__item\" data-id=\"${id}\" data-title=\"${title}\" data-price=\"${price}\" data-count=\"${count}\">\r\n                <h2 class=\"item__title\">${title}</h2>\r\n                <p class=\"item__price\">${price}</p>\r\n                <p class=\"item__count\">${count}</p>\r\n                <button class=\"item__btn\">Удалить</button>\r\n            </div>`;\r\n}\r\n\r\n\r\nconst renderBasketlist = (arr) => {\r\n    let basketBlock = document.querySelector('.basket__block');\r\n    basketBlock.innerHTML = '';\r\n    let basketList = arr.map( item => { return renderBasketItem(item)}).join('');\r\n    basketBlock.insertAdjacentHTML('afterbegin', basketList);\r\n    removeItemBasket();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://lesson_test_2/./src/modul.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;