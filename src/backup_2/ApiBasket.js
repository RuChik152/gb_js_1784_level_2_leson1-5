'use strict';
export default class ApiBasket{
    constructor(app) {
        this.app = app;
        console.log('class ApiBasket', this);
    }

    queryGetBasket(url= '/api/getBasketList'){
     return this.app.getQueryJson(url);
    }

    queryDeleteBasket(id, url= '/api/delBasket/'){
        return this.app.deleteQueryJson(`${url}${id}`);
    }


}