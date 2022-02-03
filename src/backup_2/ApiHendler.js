'use strict';
export default class ApiHendler{
    constructor() {
        this.API = 'http://localhost:3000'
        console.log('class ApiHendler', this);
    }

    getQueryJson(url){
        return fetch(`${this.API}${url}`).then(data => data.json());
    }

    deleteQueryJson(url){
        return fetch(`${this.API}${url}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data => data.json());
    }

    

}