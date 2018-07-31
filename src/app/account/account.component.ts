import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Wallet } from '../models/wallet.model';
import { TradeService } from '../trades/trade.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountWallet: Wallet;
  usdAmount = {
    total: 0,
    usd: 0,
    btc: 0,
    eth: 0,
    ltc: 0,
    bch: 0
  };

  constructor(private authService: AuthService, private router: Router, private tradeService: TradeService) { 
    //if none logged in user tries to access account component, redirect to home
    if (!this.authService.isLoggedIn()) {
      console.log("not authorized");
      this.router.navigateByUrl('/');
      return;
    }
    this.accountWallet = {
      balance: 0,
      btcBalance: 0,
      ltcBalance: 0,
      ethBalance: 0,
      bchBalance: 0
    }
  }

  ngOnInit() {
    this.authService.getUserInfo()
      .subscribe(res => {
        this.accountWallet = res.obj.wallet;
        this.usdAmount.total = res.obj.wallet.balance;
        this.usdAmount.usd = res.obj.wallet.balance;
      });

      this.tradeService.btcPrice()
        .subscribe(res => {
          this.usdAmount.btc = this.accountWallet.btcBalance * res;
          this.usdAmount.total += this.usdAmount.btc;
        });
      this.tradeService.ethPrice()
      .subscribe(res => {
        this.usdAmount.eth = this.accountWallet.ethBalance * res;
        this.usdAmount.total += this.usdAmount.eth;
      });          
      this.tradeService.ltcPrice()
        .subscribe(res => {
          this.usdAmount.ltc = this.accountWallet.ltcBalance * res;
          this.usdAmount.total += this.usdAmount.ltc;
      });
      this.tradeService.bchPrice()
        .subscribe(res => {
          this.usdAmount.bch = this.accountWallet.bchBalance * res;
          this.usdAmount.total += this.usdAmount.bch;
      });
    
  }

}
