export default class ApiMenu {
    constructor(app) {
        this.app = app;
        this.queryMenuList();
    }

    queryMenuList(url = '/api/getMenulist'){
        this.app.getJson(url).then(data => {
            this.renderMenuLIst(data);
        });
    }

    renderMenuLIst(arr){
        const head = document.querySelector('.headers');
        let menulist = arr.map( item => { return this.renderMenuItem(item) }).join('');
        head.insertAdjacentHTML('afterbegin', menulist);
    }

    renderMenuItem({name, url, tag}){
        return `<a href="${url}" class="headers__item ${tag}">${name}</a> \n`
    }

}