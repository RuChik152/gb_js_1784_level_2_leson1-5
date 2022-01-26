export default class ApiMenu {
    constructor(app) {
        this.app = app;
    }

    queryMenuList(url, dataAction){
        this.app.getJson(url).then(data => {
            dataAction(data);
        });
    }
}