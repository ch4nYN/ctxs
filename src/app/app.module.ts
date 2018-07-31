import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './auth/auth.service';
import { AccountComponent } from './account/account.component';
import { ChartComponent } from './chart/chart.component';
import { BtcComponent } from './trades/btc/btc.component';
import { EthComponent } from './trades/eth/eth.component';
import { LtcComponent } from './trades/ltc/ltc.component';
import { BchComponent } from './trades/bch/bch.component';
import { HomeComponent } from './home/home.component';
import { TradeService } from './trades/trade.service';
import { SearchComponent } from './search/search.component';


//routes
const ROUTES = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'search', component: SearchComponent},
  {path: 'trades/btc', component: BtcComponent},
  {path: 'trades/eth', component: EthComponent},
  {path: 'trades/ltc', component: LtcComponent},
  {path: 'trades/bch', component: BchComponent},
  {path: '**', component: HomeComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    AccountComponent,
    ChartComponent,
    BtcComponent,
    EthComponent,
    LtcComponent,
    BchComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [AuthService, TradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
