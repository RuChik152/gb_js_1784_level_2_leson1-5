'use strict';
export default class ApiHendler{
    constructor() {
        this.SRV_URL = 'http://localhost:3000'
        console.log('class ApiHendler', this);
    }

    getReqToSrv(url){
        return fetch(`${this.SRV_URL}${url}`).then(result => result.json());
    }

    postReqToSrv(url, data){
        return fetch(`${this.SRV_URL}${url}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)}).then( result => result.json());
    }

    putReqToSrv(url, data){
        return fetch(`${this.SRV_URL}${url}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)}).then( result => result.json());
    }

    deleteReqToSrv(url, data){
        return fetch(`${this.SRV_URL}${url}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(result => result.json());
    }
}