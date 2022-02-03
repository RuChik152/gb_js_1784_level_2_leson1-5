export default class ApiHendler {
    constructor() {
        this.API = 'http://localhost:3000'
    }

    getJson(url){
        return fetch(`${this.API}${url}`).then(result => result.json());
    }

    postJson(url, data){
        return fetch(`${this.API}${url}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)}).then(result => result.json());
    }

    putJson(url, data) {
        return fetch(`${this.API}${url}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)}).then(result => result.json());
    }

    deletJson(url){
        return fetch(`${this.API}${url}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(result => result.json());
    }
}