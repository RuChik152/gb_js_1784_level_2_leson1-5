export default class ApiBasket {
    constructor(app) {
        this.app = app;
        this.createBasket();
    }


    createBasket(){
        let str = `<div class="basket__block"></div>`;
        let header = document.querySelector('header');
        header.insertAdjacentHTML('beforeend', str);
        this.showBasket();
    }

    showBasket(){
        let basket = document.querySelector('.basket');
        let basketBlock = document.querySelector('.basket__block');
        basket.addEventListener('click', function(e){
            let target = e.target == basket;
            let isActive = basketBlock.classList.contains('basket__active');

            if(target){
                if(isActive){
                    basketBlock.classList.remove('basket__active');
                } else {
                    basketBlock.classList.add('basket__active');
                }
            }

        });
    }

    queryBasketList(dataAction, url = '/api/getBasketList',){
        this.app.getJson(url).then(data => {
            dataAction(data);
        })
    }

    queryAddToBasketPost(url, data, dataAction){
        this.app.postJson(url, data).then(data => {
            dataAction(data.userbasket);
        })
    }

    queryAddToBasketPut(url, data, dataAction){
        this.app.putJson(url, data).then(data => {
            dataAction(data.userbasket);
        })
    }

    queryDeleteItemBasket(url, dataAction){
        this.app.deletJson(url, dataAction).then(data => {
            if(data.result === 1){
                dataAction(data.userbasket);
            }
        })
    }
}