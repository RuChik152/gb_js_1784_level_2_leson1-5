export default class ApiProduct {
    constructor(app) {
        this.app = app;
    }

    queryGetProduct(url = '/api/getProduct'){
        return this.app.getQueryJson(url);
    }
}