export default class ApiProduct {
    constructor(app) {
        this.app = app;
    }
    queryProductList(url, dataAction){
        this.app.getJson(url).then(data => {
            dataAction(data);
        });
    }
}