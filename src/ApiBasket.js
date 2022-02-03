'use strict';

import ApiHendler from "./ApiHendler";

export  default class ApiBasket extends ApiHendler{
    constructor(SRV_URL) {
        super(SRV_URL);
        this.showBasket();
        console.log('class ApiBasket', this);
    }

    getReqBasket(url ='/api/getBasketList', dataActive) {
        return super.getReqToSrv(url).then(data => {
            dataActive(data);
        });
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
}