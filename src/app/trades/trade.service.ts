import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Order } from '../models/order.model';

@Injectable()
export class TradeService {

  constructor(private http:Http) { 
  }

  btcPrice() {
    return this.http.get('https://api.coinbase.com/v2/exchange-rates?currency=BTC')
      .map((response: Response) => {
        const result = response.json().data.rates.USD;
        return result;
      });
  }
  ethPrice() {
    return this.http.get('https://api.coinbase.com/v2/exchange-rates?currency=ETH')
      .map((response: Response) => {
        const result = response.json().data.rates.USD;
        return result;
      });
  }
  ltcPrice() {
    return this.http.get('https://api.coinbase.com/v2/exchange-rates?currency=LTC')
      .map((response: Response) => {
        const result = response.json().data.rates.USD;
        return result;
      });
  }
  bchPrice() {
    return this.http.get('https://api.coinbase.com/v2/exchange-rates?currency=BCH')
      .map((response: Response) => {
        const result = response.json().data.rates.USD;
        return result;
      });
  }

  ////////////////////////
  usdToBtc(buyOrder: Order) {
    const heads = new Headers({'Content-Type' : 'application/json'});
    const body = JSON.stringify(buyOrder);

    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    return this.http.post('transactions/usdbtc' + token, body, {headers: heads})
      .map((response: Response) => {
        const result = response.json();
        return result;
      });
  }
  btcToUsd(sellOrder: Order) {
    const heads = new Headers({'Content-Type' : 'application/json'});
    const body = JSON.stringify(sellOrder);

    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    return this.http.post('transactions/btcusd' + token, body, {headers: heads})
      .map((response: Response) => {
        const result = response.json();
        return result;
    });
  }
  usdToEth(buyOrder: Order) {
    const heads = new Headers({'Content-Type' : 'application/json'});
    const body = JSON.stringify(buyOrder);

    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    return this.http.post('transactions/usdeth' + token, body, {headers: heads})
      .map((response: Response) => {
        const result = response.json();
        return result;
      });
  }
  ethToUsd(sellOrder: Order) {
    const heads = new Headers({'Content-Type' : 'application/json'});
    const body = JSON.stringify(sellOrder);

    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    return this.http.post('transactions/ethusd' + token, body, {headers: heads})
      .map((response: Response) => {
        const result = response.json();
        return result;
    });
  }
  usdToBch(buyOrder: Order) {
    const heads = new Headers({'Content-Type' : 'application/json'});
    const body = JSON.stringify(buyOrder);

    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    return this.http.post('transactions/usdbch' + token, body, {headers: heads})
      .map((response: Response) => {
        const result = response.json();
        return result;
      });
  }
  bchToUsd(sellOrder: Order) {
    const heads = new Headers({'Content-Type' : 'application/json'});
    const body = JSON.stringify(sellOrder);

    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    return this.http.post('transactions/bchusd' + token, body, {headers: heads})
      .map((response: Response) => {
        const result = response.json();
        return result;
    });
  }
  usdToLtc(buyOrder: Order) {
    const heads = new Headers({'Content-Type' : 'application/json'});
    const body = JSON.stringify(buyOrder);

    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    return this.http.post('transactions/usdltc' + token, body, {headers: heads})
      .map((response: Response) => {
        const result = response.json();
        return result;
      });
  }
  ltcToUsd(sellOrder: Order) {
    const heads = new Headers({'Content-Type' : 'application/json'});
    const body = JSON.stringify(sellOrder);

    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    return this.http.post('transactions/ltcusd' + token, body, {headers: heads})
      .map((response: Response) => {
        const result = response.json();
        return result;
    });
  }




}
