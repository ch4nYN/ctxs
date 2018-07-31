import { Component, OnInit } from '@angular/core';

declare const TradingView: any;


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new TradingView.widget({
      "container_id": "graphContent",
      "height": "500",
      "width": "100%",
      "symbol": "BTCUSD",
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

}
