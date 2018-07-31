import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { TradeService } from '../trade.service';

declare const TradingView: any;

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.css']
})
export class EthComponent implements OnInit {
  buyOrder: Order;
  sellOrder: Order;
  livePrice: number;
  buydesc: string = ' ';
  selldesc: string = ' ';
  
  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.createWidget();
    this.tradeService.ethPrice().subscribe(res => {
      this.livePrice = res;
    });
    
    setInterval(() => {
      this.tradeService.ethPrice().subscribe(res => {
        this.livePrice = res;
      });
    }, 5000);

    this.buyOrder = {
      amount: 0,
      fee: 0,
      total: 0
    }
    this.sellOrder = {
      amount: 0,
      fee: 0,
      total: 0
    }
  }

  createWidget() {
    new TradingView.widget({
      "container_id": "graphContent",
      "height": "500",
      "width": "100%",
      "symbol": "COINBASE:ETHUSD",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "Light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": false,
      "hideideas": true
    });
  }
  placeBuyOrder(event) {
    if (this.buyOrder.amount <= 0 || isNaN(this.buyOrder.amount)) {
      this.buydesc = 'invalid input.';
      return;
    }
    //place buy order service
    this.tradeService.usdToEth(this.buyOrder)
      .subscribe(res => {
        if (res.error) {
          this.buydesc = res.error;
          return;
        }
      });
    this.buydesc = '';
      
    this.buyOrder = {
      amount: 0,
      fee: 0,
      total: 0
    }
  }
  calculateBuyFeeAndTotal(event) {
    this.buyOrder.amount = parseFloat(event.target.value);
    this.buyOrder.fee = this.buyOrder.amount * .0025;
    this.buyOrder.total = (this.buyOrder.amount - this.buyOrder.fee) / this.livePrice;
    this.buyOrder.total = parseFloat(this.buyOrder.total.toFixed(8));
  }

  placeSellOrder(event) {
    if (this.sellOrder.amount <= 0 || isNaN(this.sellOrder.amount)) {
      this.selldesc = 'invalid input.';
      return;
    }
    //plaec sell order service
    this.tradeService.ethToUsd(this.sellOrder)  
      .subscribe(res => {
        if (res.error) {
          this.selldesc = res.error;
          return;
        }
      });
    this.selldesc = '';
    
    this.sellOrder = {
      amount: 0,
      fee: 0,
      total: 0
    }
  }
  calculateSellFeeAndTotal(event) {
    this.sellOrder.amount = parseFloat(event.target.value);
    this.sellOrder.fee = parseFloat(((this.sellOrder.amount * this.livePrice) * .0025).toFixed(2));
    this.sellOrder.total = (this.sellOrder.amount * this.livePrice) - this.sellOrder.fee;
    this.sellOrder.total = parseFloat(this.sellOrder.total.toFixed(2));
  }

}
