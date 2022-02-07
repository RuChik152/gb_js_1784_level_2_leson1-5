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

/***/ "./src/ApiHendler.js":
/*!***************************!*\
  !*** ./src/ApiHendler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiHendler)\n/* harmony export */ });\n\r\nclass ApiHendler{\r\n    constructor() {\r\n        console.log('class ApiHendler', this);\r\n    }\r\n\r\n    static getReqToSrv(url){\r\n        return fetch(`http://localhost:3000${url}`).then(result => result.json());\r\n    }\r\n\r\n    static postReqToSrv(url, data){\r\n        return fetch(`http://localhost:3000${url}`, {\r\n            method: 'POST',\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify(data)}).then( result => result.json());\r\n    }\r\n\r\n    static putReqToSrv(url, data){\r\n        return fetch(`http://localhost:3000${url}`, {\r\n            method: 'PUT',\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify(data)}).then( result => result.json());\r\n    }\r\n\r\n    static deleteReqToSrv(url){\r\n        return fetch(`http://localhost:3000${url}`, {\r\n            method: 'DELETE',\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(result => result.json());\r\n    }\r\n}\n\n//# sourceURL=webpack://lesson_test_2/./src/ApiHendler.js?");

/***/ }),

/***/ "./src/ApiRenderBasket.js":
/*!********************************!*\
  !*** ./src/ApiRenderBasket.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiRenderBasket)\n/* harmony export */ });\n/* harmony import */ var _ApiHendler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiHendler */ \"./src/ApiHendler.js\");\n\r\n\r\n\r\n\r\nclass ApiRenderBasket{\r\n    constructor() {\r\n        this.#showBasket();\r\n        ApiRenderBasket.getReqBasketRender();\r\n        console.log('class ApiRenderBasket', this);\r\n    }\r\n\r\n    static getReqBasketRender() {\r\n        _ApiHendler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getReqToSrv('/api/getBasketList').then(data => {\r\n            ApiRenderBasket.renderBasketList(data);\r\n            ApiRenderBasket.deleteItemBasket();\r\n        })\r\n    }\r\n\r\n    static deleteItemBasket(){\r\n        let itemBtn = document.querySelectorAll('.item__btn');\r\n        itemBtn.forEach(item => {\r\n            item.addEventListener('click', function (e){\r\n                e.preventDefault();\r\n                let id = e.target.parentNode.dataset.id;\r\n                let target = e.target.parentNode;\r\n\r\n                let basketList = ApiRenderBasket.showItemBasket();\r\n                console.log(basketList[0].dataset.count);\r\n                for(let i = 0; i < basketList.length; i++){\r\n                    let change = basketList[i] == target;\r\n\r\n                    if(change){\r\n                        let count = Number(basketList[i].dataset.count);\r\n                        if(count > 1){\r\n                            basketList[i].dataset.count--;\r\n                            basketList[i].children[2].innerHTML = basketList[i].dataset.count;\r\n                        } else if(count == 1){\r\n                            basketList[i].remove();\r\n                        }\r\n                    }\r\n                }\r\n                _ApiHendler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteReqToSrv(`/api/delBasket/${id}`);\r\n\r\n\r\n            })\r\n        })\r\n    }\r\n\r\n    static showItemBasket(){\r\n        const arr = [];\r\n        const list = document.querySelectorAll('.basket__item');\r\n        list.forEach(function (item){\r\n            arr.push(item);\r\n        })\r\n        return arr;\r\n    }\r\n\r\n    static renderBasketList(arr){\r\n        let basketBlock = document.querySelector('.basket__block');\r\n        basketBlock.innerHTML = '';\r\n        let basketList = arr.map( item => {return ApiRenderBasket.renderBasketItem(item)}).join('');\r\n        basketBlock.insertAdjacentHTML(\"afterbegin\", basketList);\r\n    }\r\n\r\n    static renderBasketItem(item){\r\n        return `<div class=\"basket__item\" data-id=\"${item.id}\" data-title=\"${item.title}\" data-price=\"${item.price}\" data-count=\"${item.count}\">\r\n                <h2 class=\"item__title\">${item.title}</h2>\r\n                <p class=\"item__price\">${item.price}</p>\r\n                <p class=\"item__count\">${item.count}</p>\r\n                <button class=\"item__btn\">Удалить</button>\r\n            </div>`;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n    #showBasket(){\r\n\r\n        let basket = document.querySelector('.basket');\r\n        let basketBlock = document.querySelector('.basket__block');\r\n        basket.addEventListener('click', function(e){\r\n            let target = e.target == basket;\r\n            let isActive = basketBlock.classList.contains('basket__active');\r\n\r\n            if(target){\r\n                if(isActive){\r\n                    basketBlock.classList.remove('basket__active');\r\n                } else {\r\n                    basketBlock.classList.add('basket__active');\r\n                }\r\n            }\r\n\r\n        });\r\n        ApiRenderBasket.getReqBasketRender();\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://lesson_test_2/./src/ApiRenderBasket.js?");

/***/ }),

/***/ "./src/ApiRenderProduct.js":
/*!*********************************!*\
  !*** ./src/ApiRenderProduct.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiRenderProduct)\n/* harmony export */ });\n/* harmony import */ var _ApiHendler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiHendler */ \"./src/ApiHendler.js\");\n/* harmony import */ var _ApiRenderBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiRenderBasket */ \"./src/ApiRenderBasket.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass ApiRenderProduct {\r\n    constructor() {\r\n        this.getReqProductRender();\r\n        console.log('class ApiRenderProduct', this);\r\n    }\r\n\r\n    getReqProductRender(){\r\n        _ApiHendler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getReqToSrv(`/api/getProduct`).then(data => {\r\n            this.renderProductList(data);\r\n            this.addItemProduct();\r\n            _ApiRenderBasket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getReqBasketRender();\r\n        });\r\n    }\r\n\r\n    renderProductList(arr){\r\n        const products = document.querySelector('.poducts');\r\n        let productlist = arr.map( item => { return this.renderProductItem(item) }).join('');\r\n        products.insertAdjacentHTML('afterbegin', productlist);\r\n    }\r\n\r\n    renderProductItem({id, title, price}){\r\n        return `<div class=\"products__item\" data-id=\"${id}\" data-title=\"${title}\" data-price=\"${price}\">\r\n                    <h2 class=\"item__name\">${title}</h2>\r\n                    <p class=\"item__price\">${price}</p>\r\n                    <button class=\"product_btn\">Купить</button>\r\n                </div>`;\r\n    }\r\n\r\n\r\n    addItemProduct(){\r\n        let btn = document.querySelectorAll('.product_btn');\r\n        _ApiHendler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getReqToSrv('/api/getBasketList').then(data => {\r\n            _ApiRenderBasket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderBasketList(data);\r\n            _ApiRenderBasket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteItemBasket();\r\n\r\n        })\r\n\r\n        btn.forEach(item => {\r\n            item.addEventListener('click', function (e){\r\n                let price = Number(e.target.parentNode.dataset.price);\r\n                let id = Number(e.target.parentNode.dataset.id);\r\n                let title = String(e.target.parentNode.dataset.title);\r\n\r\n\r\n              let basketList = _ApiRenderBasket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showItemBasket();\r\n\r\n                 console.log(basketList);\r\n                 let change = basketList.find(item => item.dataset.id == id);\r\n                 console.log(change);\r\n\r\n                if(change){\r\n                    _ApiHendler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].putReqToSrv(`/api/addToBasket/${id}`, {count:1});\r\n                    change.dataset.count++;\r\n                    change.children[2].innerHTML = change.dataset.count;\r\n                } else {\r\n                    let product = Object.assign({id: id, title: title, price: price, count: 1});\r\n                    _ApiHendler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postReqToSrv(`/api/addToBasket`, product)\r\n                        .then((data) => {\r\n                        return data.userbasket;\r\n                        })\r\n                        .then((data) => {\r\n                            _ApiRenderBasket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderBasketList(data);\r\n                            _ApiRenderBasket__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteItemBasket();\r\n                        })\r\n\r\n                }\r\n\r\n            })\r\n        })\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://lesson_test_2/./src/ApiRenderProduct.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _ApiRenderBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiRenderBasket */ \"./src/ApiRenderBasket.js\");\n/* harmony import */ var _ApiRenderProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiRenderProduct */ \"./src/ApiRenderProduct.js\");\n\r\n\r\n\r\n\r\n\r\nconst basket = new _ApiRenderBasket__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst product = new _ApiRenderProduct__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\n\n//# sourceURL=webpack://lesson_test_2/./src/index.js?");

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