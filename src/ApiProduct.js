export default class ApiProduct {
    constructor(app) {
        this.app = app;
    }
    queryProductList(dataAction, url = '/api/getProduct'){
        this.app.getJson(url).then(data => {
            dataAction(data);
        });
    }

}