'use strict';
export default class ApiHendler{
    constructor() {
        console.log('class ApiHendler', this);
    }

    static getReqToSrv(url){
        return fetch(`http://localhost:3000${url}`).then(result => result.json());
    }

    static postReqToSrv(url, data){
        return fetch(`http://localhost:3000${url}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)}).then( result => result.json());
    }

    static putReqToSrv(url, data){
        return fetch(`http://localhost:3000${url}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)}).then( result => result.json());
    }

    static deleteReqToSrv(url){
        return fetch(`http://localhost:3000${url}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(result => result.json());
    }
}