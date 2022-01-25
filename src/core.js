import { result } from 'lodash';
import { renderList, renderMenuLIst, renderBasketlist } from './modul.js';

const API = 'http://localhost:3000';

/**
 * Общая функция запроса
 * @param {string} url строка запроса к серверу 
 * @returns возвращает ответ от сервера в формате JSON
 */
function getJson(url){
    return fetch(`${API}${url}`).then(result => result.json());
}

/**
 * Общая функция к серверцу методом DELETE
 * @param {string} url строка запроса к серверу 
 * @returns возвращает ответ от сервера в формате JSON
 */
function deletJson(url){
    return fetch(`${API}${url}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    }).then(result => result.json());
}


function postJson(url, data){
    return fetch(`${API}${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)}).then(result => result.json());
}

function putJson(url, data) {
    return fetch(`${API}${url}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)}).then(result => result.json());
}


/**
 * Запрос к серверу для отрисовки товаров на главной странице
 * @param {*} url строка запроса к серверу
 */
function queryProductList(url){
    getJson(url).then(data => {
        renderList(data);
    });
  }

/**
 * Запрос к серверу для отрисовки списка меню в шапке
 * @param {*} url строка запроса к серверу
 */
function queryMenuList(url){
    getJson(url).then(data => {
        renderMenuLIst(data);
    });
}

/**
 * Запрос к серверу для наполнения корзины
 * @param {*} url строка запроса к серверу
 */
function queryBasketList(url){
    getJson(url).then(data => {
        renderBasketlist(data);
    })
}

/**
 * Запрос к серверу для удаления товара.
 * @param {*} url строка запроса к серверу
 */
function queryDeleteItemBasket(url){
    deletJson(url).then(data => {
        if(data.result === 1){
            renderBasketlist(data.userbasket);
        }
    })
}


function queryAddToBasketPost(url, data){
    postJson(url, data).then(data => {
        renderBasketlist(data.userbasket);
    })
}

function queryAddToBasketPut(url, data){
    putJson(url, data).then(data => {
        renderBasketlist(data.userbasket);
    })
}

export {
    queryProductList,
    queryMenuList,
    queryBasketList,
    queryDeleteItemBasket,
    postJson,
    queryAddToBasketPost,
    queryAddToBasketPut
} 