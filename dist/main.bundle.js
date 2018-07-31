webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.css":
/***/ (function(module, exports) {

module.exports = "tr th {\n  color: #0d47a1;\n}"

/***/ }),

/***/ "./src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 style=\"color:#0d47a1\">balance: $ {{ usdAmount.total | number : '1.2-2' }}</h2>\n  <br>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>currency name</th>\n        <th>$ value</th>\n        <th>balance</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>US DOLLARS</td>\n        <td> $ {{ usdAmount.usd  | number : '1.2-2' }} </td>\n        <td>{{ accountWallet.balance }} USD</td>\n      </tr>\n      <tr>\n        <td>BITCOIN</td>\n        <td> $ {{ usdAmount.btc | number : '1.2-2' }} </td>\n        <td>{{ accountWallet.btcBalance }} BTC</td>\n      </tr>\n      <tr>\n        <td>ETHEREUM</td>\n        <td> $ {{ usdAmount.eth | number : '1.2-2' }} </td>\n        <td>{{ accountWallet.ethBalance }} ETH</td>\n      </tr>\n      <tr>\n        <td>LITECOIN</td>\n        <td> $ {{ usdAmount.ltc | number : '1.2-2' }} </td>\n        <td>{{ accountWallet.ltcBalance }} LTC</td>\n      </tr>\n      <tr>\n        <td>BITCOIN CASH</td>\n        <td> $ {{ usdAmount.bch | number : '1.2-2' }} </td>\n        <td>{{ accountWallet.bchBalance }} BCH</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trades_trade_service__ = __webpack_require__("./src/app/trades/trade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = /** @class */ (function () {
    function AccountComponent(authService, router, tradeService) {
        this.authService = authService;
        this.router = router;
        this.tradeService = tradeService;
        this.usdAmount = {
            total: 0,
            usd: 0,
            btc: 0,
            eth: 0,
            ltc: 0,
            bch: 0
        };
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
        };
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserInfo()
            .subscribe(function (res) {
            _this.accountWallet = res.obj.wallet;
            _this.usdAmount.total = res.obj.wallet.balance;
            _this.usdAmount.usd = res.obj.wallet.balance;
        });
        this.tradeService.btcPrice()
            .subscribe(function (res) {
            _this.usdAmount.btc = _this.accountWallet.btcBalance * res;
            _this.usdAmount.total += _this.usdAmount.btc;
        });
        this.tradeService.ethPrice()
            .subscribe(function (res) {
            _this.usdAmount.eth = _this.accountWallet.ethBalance * res;
            _this.usdAmount.total += _this.usdAmount.eth;
        });
        this.tradeService.ltcPrice()
            .subscribe(function (res) {
            _this.usdAmount.ltc = _this.accountWallet.ltcBalance * res;
            _this.usdAmount.total += _this.usdAmount.ltc;
        });
        this.tradeService.bchPrice()
            .subscribe(function (res) {
            _this.usdAmount.bch = _this.accountWallet.bchBalance * res;
            _this.usdAmount.total += _this.usdAmount.bch;
        });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("./src/app/account/account.component.html"),
            styles: [__webpack_require__("./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__trades_trade_service__["a" /* TradeService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_logout_logout_component__ = __webpack_require__("./src/app/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_register_register_component__ = __webpack_require__("./src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_account_component__ = __webpack_require__("./src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chart_chart_component__ = __webpack_require__("./src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__trades_btc_btc_component__ = __webpack_require__("./src/app/trades/btc/btc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__trades_eth_eth_component__ = __webpack_require__("./src/app/trades/eth/eth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__trades_ltc_ltc_component__ = __webpack_require__("./src/app/trades/ltc/ltc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trades_bch_bch_component__ = __webpack_require__("./src/app/trades/bch/bch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__trades_trade_service__ = __webpack_require__("./src/app/trades/trade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//routes
var ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_11__account_account_component__["a" /* AccountComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_19__search_search_component__["a" /* SearchComponent */] },
    { path: 'trades/btc', component: __WEBPACK_IMPORTED_MODULE_13__trades_btc_btc_component__["a" /* BtcComponent */] },
    { path: 'trades/eth', component: __WEBPACK_IMPORTED_MODULE_14__trades_eth_eth_component__["a" /* EthComponent */] },
    { path: 'trades/ltc', component: __WEBPACK_IMPORTED_MODULE_15__trades_ltc_ltc_component__["a" /* LtcComponent */] },
    { path: 'trades/bch', component: __WEBPACK_IMPORTED_MODULE_16__trades_bch_bch_component__["a" /* BchComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__auth_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__auth_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_12__chart_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_13__trades_btc_btc_component__["a" /* BtcComponent */],
                __WEBPACK_IMPORTED_MODULE_14__trades_eth_eth_component__["a" /* EthComponent */],
                __WEBPACK_IMPORTED_MODULE_15__trades_ltc_ltc_component__["a" /* LtcComponent */],
                __WEBPACK_IMPORTED_MODULE_16__trades_bch_bch_component__["a" /* BchComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__search_search_component__["a" /* SearchComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(ROUTES),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__trades_trade_service__["a" /* TradeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (newUser) {
        var body = JSON.stringify(newUser);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post("users/register", body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            return result;
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.login = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post("users/login", body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            return result;
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('token') !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getUserInfo = function () {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.get('accounts/info' + token)
            .map(function (response) {
            var result = response.json();
            return result;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Roboto);\n\n/****** LOGIN MODAL ******/\n\na {\n  text-decoration: none;\n  color: #0d47a1;\n  outline:none;\n}\n\na:hover {\n  color:black\n}\n\n.loginmodal-container {\n  padding: 30px;\n  max-width: 350px;\n  width: 100% !important;\n  background-color: #F7F7F7;\n  margin: 0 auto;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  font-family: roboto;\n}\n\n.loginmodal-container h1 {\n  text-align: center;\n  font-size: 1.8em;\n  font-family: roboto;\n}\n\n.loginmodal-container input[type=submit] {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.loginmodal-container input[type=text], input[type=password] {\n  height: 44px;\n  font-size: 16px;\n  width: 100%;\n  margin-bottom: 10px;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-top: 1px solid #c0c0c0;\n  /* border-radius: 2px; */\n  padding: 0 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n.loginmodal-container input[type=text]:hover, input[type=password]:hover {\n  border: 1px solid #b9b9b9;\n  border-top: 1px solid #a0a0a0;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n}\n\n.loginmodal {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  height: 36px;\n  padding: 0 8px;\n/* border-radius: 3px; */\n/* -webkit-user-select: none;\n  user-select: none; */\n}\n\n.loginmodal-submit {\n  /* border: 1px solid #3079ed; */\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0,0,0,0.1); \n  background-color:#0d47a1;\n  padding: 17px 0px;\n  font-family: roboto;\n  font-size: 14px;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\n}\n\n.loginmodal-submit:hover {\n  /* border: 1px solid #2f5bb7; */\n  border: 0px;\n  text-shadow: 0 1px rgba(0,0,0,0.3);\n  background-color: #357ae8;\n  \n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\n}\n\n.loginmodal-container a {\n  text-decoration: none;\n  color: #666;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  -webkit-transition: opacity ease 0.5s;\n  transition: opacity ease 0.5s;\n}\n\n.login-help{\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" data-toggle=\"modal\" data-target=\"#login-modal\" data-backdrop=\"false\" style=\"font-size:16px;\">login</a>\n\n<div class=\"modal fade\" id=\"login-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n  <div class=\"modal-dialog\">\n  <div class=\"loginmodal-container\">\n    <button #closeLoginModal type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    <h1 style=\"color:#0d47a1\">Login</h1><br>\n    <form #form=\"ngForm\" (ngSubmit)=\"login(form.value)\" ngNativeValidate>\n    <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"enter username\" required>\n    <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"enter password\" required>\n    <input type=\"submit\" name=\"login\" class=\"login loginmodal-submit\" value=\"Login\">\n    </form>\n    <p class=\"text-danger\" style=\"text-align:center; font-size:12px\"> {{ desc }} </p>\n    \n\n    <!-- <div class=\"login-help\">\n    <a href=\"#\">Forgot Password</a>\n    </div> -->\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = {
            username: '',
            password: ''
        };
        this.desc = '';
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.authService.login(this.user)
            .subscribe(function (res) {
            if (res.error) {
                _this.desc = res.error;
                return;
            }
            _this.desc = '';
            localStorage.setItem('token', res.token);
            localStorage.setItem('userId', res.userId);
            _this.closeLoginModal.nativeElement.click();
            console.log("login success");
            _this.router.navigateByUrl('/');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('closeLoginModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LoginComponent.prototype, "closeLoginModal", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #0d47a1;\n  outline:none;\n}\na:hover {\n  color:black\n}"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" (click)=\"logout()\">logout</a>"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/');
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/auth/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/auth/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Roboto);\n\na {\n  text-decoration: none;\n  color: #0d47a1;\n  outline:none;\n}\n\na:hover {\n  color:black\n}\n\ndiv button {\n  outline:none;\n}\n\n/****** register MODAL ******/\n\n.registermodal-container {\n  padding: 30px;\n  max-width: 350px;\n  width: 100% !important;\n  background-color: #F7F7F7;\n  margin: 0 auto;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  font-family: roboto;\n}\n\n.registermodal-container h1 {\n  text-align: center;\n  font-size: 1.8em;\n  font-family: roboto;\n}\n\n.registermodal-container input[type=submit] {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.registermodal-container input[type=text], input[type=password] {\n  height: 44px;\n  font-size: 16px;\n  width: 100%;\n  margin-bottom: 10px;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-top: 1px solid #c0c0c0;\n  /* border-radius: 2px; */\n  padding: 0 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n.registermodal-container input[type=text]:hover, input[type=password]:hover {\n  border: 1px solid #b9b9b9;\n  border-top: 1px solid #a0a0a0;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n}\n\n.registermodal {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  height: 36px;\n  padding: 0 8px;\n/* border-radius: 3px; */\n/* -webkit-user-select: none;\n  user-select: none; */\n}\n\n.registermodal-submit {\n  /* border: 1px solid #3079ed; */\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0,0,0,0.1); \n  background-color:#0d47a1;\n  padding: 17px 0px;\n  font-family: roboto;\n  font-size: 14px;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\n}\n\n.registermodal-submit:hover {\n  /* border: 1px solid #2f5bb7; */\n  border: 0px;\n  text-shadow: 0 1px rgba(0,0,0,0.3);\n  background-color: #4d90fe;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\n}\n\n.registermodal-container a {\n  text-decoration: none;\n  color: #666;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  -webkit-transition: opacity ease 0.5s;\n  transition: opacity ease 0.5s;\n} \n"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" data-toggle=\"modal\" data-target=\"#register-modal\" data-backdrop=\"false\" style=\"font-size:16px\">register</a>\n\n<div class=\"modal fade\" id=\"register-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n  <div class=\"modal-dialog\">\n  <div class=\"registermodal-container\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #closeRegisterModal><span aria-hidden=\"true\">&times;</span></button>\n    <h1 style=\"color:#0d47a1\">Register</h1><br>\n    <form #form=\"ngForm\" (ngSubmit)=\"register(form.value)\" ngNativeValidate autocomplete=\"off\">\n      <input type=\"text\" [(ngModel)]=\"newUser.username\" name=\"username\" placeholder=\"username\" required>\n      <input type=\"password\" [(ngModel)]=\"newUser.password\" name=\"password\" placeholder=\"password\" required>\n      <input type=\"password\" [(ngModel)]=\"newUser.repassword\" name=\"repassword\" placeholder=\"confirm password\" required>\n      <input type=\"submit\" name=\"register\" class=\"register registermodal-submit\" value=\"register\">\n    </form>\n    <p class=\"text-danger\" style=\"text-align:center; font-size:12px\"> {{ desc }} </p>\n  \n  </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.newUser = {
            username: '',
            password: '',
            repassword: '',
        };
        this.desc = '';
    };
    RegisterComponent.prototype.register = function (registerForm) {
        var _this = this;
        //if passwords dont match
        if (this.newUser.password !== this.newUser.repassword) {
            console.log("passwords do not match");
            this.desc = 'the passwords do not match';
            return;
        }
        this.authService.register(this.newUser)
            .subscribe(function (res) {
            console.log(res);
            if (res.error) {
                _this.desc = "email already in use";
                return;
            }
            //success
            _this.closeRegisterModal.nativeElement.click(); //closes the register modal
            _this.newUser = {
                username: '',
                password: '',
                repassword: '',
            };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('closeRegisterModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], RegisterComponent.prototype, "closeRegisterModal", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__("./src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"graphContent\">\n  \n</div>"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
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
    };
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chart',
            template: __webpack_require__("./src/app/chart/chart.component.html"),
            styles: [__webpack_require__("./src/app/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n\n  <br><br><br>\n  <h1 style=\"color:#0d47a1\">cryptocurrency trade exchange simulator</h1>\n  <br><br>\n  <h4>...all users start with 50,000 USD! have fun!</h4>\n  <br><br>\n  <p>All trades have a 0.25% commission.</p>\n  <br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n  <p style=\"float:right\">chan yoon</p>\n  \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "div a {\n  color: #0d47a1;\n  font-size:16px;\n  outline:none;\n}\ndiv a:visited {\n  color:#0d47a1;\n}\nli a:visited {\n  color: #0d47a1;\n}\nli a:hover {\n  text-decoration:none;\n  color:black;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\n<nav class=\"navbar navbar-default navbar-static-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <div class=\"logo\">\n        <a class=\"navbar-brand\" routerLink=\"/home\" style=\"font-size:24px\">CTXS</a>\n      </div>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Trade<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/trades/btc\">BTC</a></li>\n              <li><a routerLink=\"/trades/eth\">ETH</a></li>\n              <li><a routerLink=\"/trades/ltc\">LTC</a></li>\n              <li><a routerLink=\"/trades/bch\">BCH</a></li>\n            </ul>\n          </li>\n        <li><a routerLink=\"/search\">search</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!isLoggedIn()\"><a><app-register></app-register></a></li>\n        <li *ngIf=\"!isLoggedIn()\"><a><app-login></app-login></a></li>\n        <li *ngIf=\"isLoggedIn()\"><a routerLink=\"/account\">account</a></li>\n        <li *ngIf=\"isLoggedIn()\"><a><app-logout></app-logout></a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn();
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-lg-6\">\n    <div class=\"input-group\">\n      <input id=\"search-term\" type=\"text\" class=\"form-control\"  value=\"{{ this.searchTerm }}\" />\n      <div class=\"input-group-btn\"> \n        <button type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"onSearch()\"\n        >\n        search</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.searchTerm = '';
    };
    SearchComponent.prototype.onSearch = function () {
        console.log(this.searchTerm);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/trades/bch/bch.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center;\n}\n.container .card {\n  width: 40%;\n  display: inline-block; \n  margin:0 15px 15px 15px;\n  vertical-align: top;\n}\n.card .card-header {\n  text-align: center;\n  color: #0d47a1;\n}\n@media only screen and (max-width: 768px) {\n  .container .card {\n    width:80%;\n  }\n  \n}"

/***/ }),

/***/ "./src/app/trades/bch/bch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"graphContent\">\n  </div>  \n</div>\n\n<hr>\n\n<div class=\"container\">\n\n  <form class=\"card\" #form1=\"ngForm\" (ngSubmit)=\"placeBuyOrder($event)\">\n      <h2 class=\"card-header\">\n        BUY\n      </h2>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" (change)=\"calculateBuyFeeAndTotal($event)\" >\n        <span class=\"input-group-addon\">$</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ buyOrder.fee }}\" disabled>\n        <span class=\"input-group-addon\">Fee</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\"  value=\"{{ buyOrder.total }}\" disabled>\n        <span class=\"input-group-addon\">Total (BCH)</span>\n      </div><br>\n      <button type=\"submit\" class=\"btn  btn-lg btn-success\">place buy order</button>\n      <br><br>\n      <p class=\"text-danger\">{{ buydesc }}</p>\n    </form>\n    \n    <form class=\"card\" #form2=\"ngForm\" (ngSubmit)=\"placeSellOrder(form2.value)\">\n      <h2 class=\"card-header\">\n        SELL\n      </h2>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" (change)=\"calculateSellFeeAndTotal($event)\">\n        <span class=\"input-group-addon\">BCH</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ sellOrder.fee }}\" disabled>\n        <span class=\"input-group-addon\">Fee</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ sellOrder.total }}\" disabled>\n        <span class=\"input-group-addon\">Total (USD)</span>\n      </div><br>\n      <button class=\"btn  btn-lg btn-danger\">place sell order</button>\n      <br><br>\n      <p class=\"text-danger\">{{ selldesc }}</p>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/trades/bch/bch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trade_service__ = __webpack_require__("./src/app/trades/trade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BchComponent = /** @class */ (function () {
    function BchComponent(tradeService) {
        this.tradeService = tradeService;
        this.buydesc = ' ';
        this.selldesc = ' ';
    }
    BchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createWidget();
        this.tradeService.bchPrice().subscribe(function (res) {
            _this.livePrice = res;
        });
        setInterval(function () {
            _this.tradeService.bchPrice().subscribe(function (res) {
                _this.livePrice = res;
            });
        }, 5000);
        this.buyOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
        this.sellOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    BchComponent.prototype.createWidget = function () {
        new TradingView.widget({
            "container_id": "graphContent",
            "height": "500",
            "width": "100%",
            "symbol": "COINBASE:BCHUSD",
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
    };
    BchComponent.prototype.placeBuyOrder = function (event) {
        var _this = this;
        if (this.buyOrder.amount <= 0 || isNaN(this.buyOrder.amount)) {
            this.buydesc = 'invalid input.';
            return;
        }
        //place buy order service
        this.tradeService.usdToBch(this.buyOrder)
            .subscribe(function (res) {
            if (res.error) {
                _this.buydesc = res.error;
                return;
            }
        });
        this.buydesc = '';
        this.buyOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    BchComponent.prototype.calculateBuyFeeAndTotal = function (event) {
        this.buyOrder.amount = parseFloat(event.target.value);
        this.buyOrder.fee = this.buyOrder.amount * .0025;
        this.buyOrder.total = (this.buyOrder.amount - this.buyOrder.fee) / this.livePrice;
        this.buyOrder.total = parseFloat(this.buyOrder.total.toFixed(8));
    };
    BchComponent.prototype.placeSellOrder = function (event) {
        var _this = this;
        if (this.sellOrder.amount <= 0 || isNaN(this.sellOrder.amount)) {
            this.selldesc = 'invalid input.';
            return;
        }
        //plaec sell order service
        this.tradeService.bchToUsd(this.sellOrder)
            .subscribe(function (res) {
            if (res.error) {
                _this.selldesc = res.error;
                return;
            }
        });
        this.selldesc = '';
        this.sellOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    BchComponent.prototype.calculateSellFeeAndTotal = function (event) {
        this.sellOrder.amount = parseFloat(event.target.value);
        this.sellOrder.fee = parseFloat(((this.sellOrder.amount * this.livePrice) * .0025).toFixed(2));
        this.sellOrder.total = (this.sellOrder.amount * this.livePrice) - this.sellOrder.fee;
        this.sellOrder.total = parseFloat(this.sellOrder.total.toFixed(2));
    };
    BchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bch',
            template: __webpack_require__("./src/app/trades/bch/bch.component.html"),
            styles: [__webpack_require__("./src/app/trades/bch/bch.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__trade_service__["a" /* TradeService */]])
    ], BchComponent);
    return BchComponent;
}());



/***/ }),

/***/ "./src/app/trades/btc/btc.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center;\n}\n.container .card {\n  width: 40%;\n  display: inline-block; \n  margin:0 15px 15px 15px;\n  vertical-align: top;\n}\n.card .card-header {\n  text-align: center;\n  color: #0d47a1;\n}\n@media only screen and (max-width: 650px) {\n  .container .card {\n    width:70%;\n  }\n  \n}"

/***/ }),

/***/ "./src/app/trades/btc/btc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"graphContent\">\n  </div>  \n</div>\n\n<hr>\n\n<div class=\"container\">\n\n  <form class=\"card\" #form1=\"ngForm\" (ngSubmit)=\"placeBuyOrder($event)\">\n      <h2 class=\"card-header\">\n        BUY\n      </h2>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" (change)=\"calculateBuyFeeAndTotal($event)\" >\n        <span class=\"input-group-addon\">$</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ buyOrder.fee }}\" disabled>\n        <span class=\"input-group-addon\">Fee</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\"  value=\"{{ buyOrder.total }}\" disabled>\n        <span class=\"input-group-addon\">Total (BTC)</span>\n      </div><br>\n      <button type=\"submit\" class=\"btn  btn-lg btn-success\">place buy order</button>\n      <br><br>\n      <p class=\"text-danger\">{{ buydesc }}</p>\n    </form>\n    \n    <form class=\"card\" #form2=\"ngForm\" (ngSubmit)=\"placeSellOrder(form2.value)\">\n      <h2 class=\"card-header\">\n        SELL\n      </h2>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" (change)=\"calculateSellFeeAndTotal($event)\">\n        <span class=\"input-group-addon\">BTC</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ sellOrder.fee }}\" disabled>\n        <span class=\"input-group-addon\">Fee</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ sellOrder.total }}\" disabled>\n        <span class=\"input-group-addon\">Total (USD)</span>\n      </div><br>\n      <button class=\"btn  btn-lg btn-danger\">place sell order</button>\n      <br><br>\n      <p class=\"text-danger\">{{ selldesc }}</p>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/trades/btc/btc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trade_service__ = __webpack_require__("./src/app/trades/trade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BtcComponent = /** @class */ (function () {
    function BtcComponent(tradeService) {
        this.tradeService = tradeService;
        this.buydesc = ' ';
        this.selldesc = ' ';
    }
    BtcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createWidget();
        this.tradeService.btcPrice().subscribe(function (res) {
            _this.livePrice = res;
        });
        setInterval(function () {
            _this.tradeService.btcPrice().subscribe(function (res) {
                _this.livePrice = res;
            });
        }, 5000);
        this.buyOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
        this.sellOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    BtcComponent.prototype.createWidget = function () {
        new TradingView.widget({
            "container_id": "graphContent",
            "height": "500",
            "width": "100%",
            "symbol": "COINBASE:BTCUSD",
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
    };
    BtcComponent.prototype.placeBuyOrder = function (event) {
        var _this = this;
        if (this.buyOrder.amount <= 0 || isNaN(this.buyOrder.amount)) {
            this.buydesc = 'invalid input.';
            return;
        }
        //place buy order service
        this.tradeService.usdToBtc(this.buyOrder)
            .subscribe(function (res) {
            if (res.error) {
                _this.buydesc = res.error;
                return;
            }
        });
        this.buydesc = '';
        this.buyOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    BtcComponent.prototype.calculateBuyFeeAndTotal = function (event) {
        this.buyOrder.amount = parseFloat(event.target.value);
        this.buyOrder.fee = this.buyOrder.amount * .0025;
        this.buyOrder.total = (this.buyOrder.amount - this.buyOrder.fee) / this.livePrice;
        this.buyOrder.total = parseFloat(this.buyOrder.total.toFixed(8));
    };
    BtcComponent.prototype.placeSellOrder = function (event) {
        var _this = this;
        if (this.sellOrder.amount <= 0 || isNaN(this.sellOrder.amount)) {
            this.selldesc = 'invalid input.';
            return;
        }
        //plaec sell order service
        this.tradeService.btcToUsd(this.sellOrder)
            .subscribe(function (res) {
            if (res.error) {
                _this.selldesc = res.error;
                return;
            }
        });
        this.selldesc = '';
        this.sellOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    BtcComponent.prototype.calculateSellFeeAndTotal = function (event) {
        this.sellOrder.amount = parseFloat(event.target.value);
        this.sellOrder.fee = parseFloat(((this.sellOrder.amount * this.livePrice) * .0025).toFixed(2));
        this.sellOrder.total = (this.sellOrder.amount * this.livePrice) - this.sellOrder.fee;
        this.sellOrder.total = parseFloat(this.sellOrder.total.toFixed(2));
    };
    BtcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-btc',
            template: __webpack_require__("./src/app/trades/btc/btc.component.html"),
            styles: [__webpack_require__("./src/app/trades/btc/btc.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__trade_service__["a" /* TradeService */]])
    ], BtcComponent);
    return BtcComponent;
}());



/***/ }),

/***/ "./src/app/trades/eth/eth.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center;\n}\n.container .card {\n  width: 40%;\n  display: inline-block; \n  margin:0 15px 15px 15px;\n  vertical-align: top;\n}\n.card .card-header {\n  text-align: center;\n  color: #0d47a1;\n}\n@media only screen and (max-width: 650px) {\n  .container .card {\n    width:70%;\n  }\n  \n}"

/***/ }),

/***/ "./src/app/trades/eth/eth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"graphContent\">\n  </div>  \n</div>\n\n<hr>\n\n<div class=\"container\">\n\n  <form class=\"card\" #form1=\"ngForm\" (ngSubmit)=\"placeBuyOrder($event)\">\n      <h2 class=\"card-header\">\n        BUY\n      </h2>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" (change)=\"calculateBuyFeeAndTotal($event)\" >\n        <span class=\"input-group-addon\">$</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ buyOrder.fee }}\" disabled>\n        <span class=\"input-group-addon\">Fee</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\"  value=\"{{ buyOrder.total }}\" disabled>\n        <span class=\"input-group-addon\">Total (ETH)</span>\n      </div><br>\n      <button type=\"submit\" class=\"btn  btn-lg btn-success\">place buy order</button>\n      <br><br>\n      <p class=\"text-danger\">{{ buydesc }}</p>\n    </form>\n    \n    <form class=\"card\" #form2=\"ngForm\" (ngSubmit)=\"placeSellOrder(form2.value)\">\n      <h2 class=\"card-header\">\n        SELL\n      </h2>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" (change)=\"calculateSellFeeAndTotal($event)\">\n        <span class=\"input-group-addon\">ETH</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ sellOrder.fee }}\" disabled>\n        <span class=\"input-group-addon\">Fee</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ sellOrder.total }}\" disabled>\n        <span class=\"input-group-addon\">Total (USD)</span>\n      </div><br>\n      <button class=\"btn  btn-lg btn-danger\">place sell order</button>\n      <br><br>\n      <p class=\"text-danger\">{{ selldesc }}</p>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/trades/eth/eth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trade_service__ = __webpack_require__("./src/app/trades/trade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EthComponent = /** @class */ (function () {
    function EthComponent(tradeService) {
        this.tradeService = tradeService;
        this.buydesc = ' ';
        this.selldesc = ' ';
    }
    EthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createWidget();
        this.tradeService.ethPrice().subscribe(function (res) {
            _this.livePrice = res;
        });
        setInterval(function () {
            _this.tradeService.ethPrice().subscribe(function (res) {
                _this.livePrice = res;
            });
        }, 5000);
        this.buyOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
        this.sellOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    EthComponent.prototype.createWidget = function () {
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
    };
    EthComponent.prototype.placeBuyOrder = function (event) {
        var _this = this;
        if (this.buyOrder.amount <= 0 || isNaN(this.buyOrder.amount)) {
            this.buydesc = 'invalid input.';
            return;
        }
        //place buy order service
        this.tradeService.usdToEth(this.buyOrder)
            .subscribe(function (res) {
            if (res.error) {
                _this.buydesc = res.error;
                return;
            }
        });
        this.buydesc = '';
        this.buyOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    EthComponent.prototype.calculateBuyFeeAndTotal = function (event) {
        this.buyOrder.amount = parseFloat(event.target.value);
        this.buyOrder.fee = this.buyOrder.amount * .0025;
        this.buyOrder.total = (this.buyOrder.amount - this.buyOrder.fee) / this.livePrice;
        this.buyOrder.total = parseFloat(this.buyOrder.total.toFixed(8));
    };
    EthComponent.prototype.placeSellOrder = function (event) {
        var _this = this;
        if (this.sellOrder.amount <= 0 || isNaN(this.sellOrder.amount)) {
            this.selldesc = 'invalid input.';
            return;
        }
        //plaec sell order service
        this.tradeService.ethToUsd(this.sellOrder)
            .subscribe(function (res) {
            if (res.error) {
                _this.selldesc = res.error;
                return;
            }
        });
        this.selldesc = '';
        this.sellOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    EthComponent.prototype.calculateSellFeeAndTotal = function (event) {
        this.sellOrder.amount = parseFloat(event.target.value);
        this.sellOrder.fee = parseFloat(((this.sellOrder.amount * this.livePrice) * .0025).toFixed(2));
        this.sellOrder.total = (this.sellOrder.amount * this.livePrice) - this.sellOrder.fee;
        this.sellOrder.total = parseFloat(this.sellOrder.total.toFixed(2));
    };
    EthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eth',
            template: __webpack_require__("./src/app/trades/eth/eth.component.html"),
            styles: [__webpack_require__("./src/app/trades/eth/eth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__trade_service__["a" /* TradeService */]])
    ], EthComponent);
    return EthComponent;
}());



/***/ }),

/***/ "./src/app/trades/ltc/ltc.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center;\n}\n.container .card {\n  width: 40%;\n  display: inline-block; \n  margin:0 15px 15px 15px;\n  vertical-align: top;\n}\n.card .card-header {\n  text-align: center;\n  color: #0d47a1;\n}\n@media only screen and (max-width: 650px) {\n  .container .card {\n    width:70%;\n  }\n  \n}"

/***/ }),

/***/ "./src/app/trades/ltc/ltc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"graphContent\">\n  </div>  \n</div>\n\n<hr>\n\n<div class=\"container\">\n\n  <form class=\"card\" #form1=\"ngForm\" (ngSubmit)=\"placeBuyOrder($event)\">\n      <h2 class=\"card-header\">\n        BUY\n      </h2>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" (change)=\"calculateBuyFeeAndTotal($event)\" >\n        <span class=\"input-group-addon\">$</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ buyOrder.fee }}\" disabled>\n        <span class=\"input-group-addon\">Fee</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\"  value=\"{{ buyOrder.total }}\" disabled>\n        <span class=\"input-group-addon\">Total (LTC)</span>\n      </div><br>\n      <button type=\"submit\" class=\"btn  btn-lg btn-success\">place buy order</button>\n      <br><br>\n      <p class=\"text-danger\">{{ buydesc }}</p>\n    </form>\n    \n    <form class=\"card\" #form2=\"ngForm\" (ngSubmit)=\"placeSellOrder(form2.value)\">\n      <h2 class=\"card-header\">\n        SELL\n      </h2>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" (change)=\"calculateSellFeeAndTotal($event)\">\n        <span class=\"input-group-addon\">LTC</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ sellOrder.fee }}\" disabled>\n        <span class=\"input-group-addon\">Fee</span>\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"0.00\" value=\"{{ sellOrder.total }}\" disabled>\n        <span class=\"input-group-addon\">Total (USD)</span>\n      </div><br>\n      <button class=\"btn  btn-lg btn-danger\">place sell order</button>\n      <br><br>\n      <p class=\"text-danger\">{{ selldesc }}</p>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/trades/ltc/ltc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LtcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trade_service__ = __webpack_require__("./src/app/trades/trade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LtcComponent = /** @class */ (function () {
    function LtcComponent(tradeService) {
        this.tradeService = tradeService;
        this.buydesc = ' ';
        this.selldesc = ' ';
    }
    LtcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createWidget();
        this.tradeService.ltcPrice().subscribe(function (res) {
            _this.livePrice = res;
        });
        setInterval(function () {
            _this.tradeService.ltcPrice().subscribe(function (res) {
                _this.livePrice = res;
            });
        }, 5000);
        this.buyOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
        this.sellOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    LtcComponent.prototype.createWidget = function () {
        new TradingView.widget({
            "container_id": "graphContent",
            "height": "500",
            "width": "100%",
            "symbol": "COINBASE:LTCUSD",
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
    };
    LtcComponent.prototype.placeBuyOrder = function (event) {
        var _this = this;
        if (this.buyOrder.amount <= 0 || isNaN(this.buyOrder.amount)) {
            this.buydesc = 'invalid input.';
            return;
        }
        //place buy order service
        this.tradeService.usdToLtc(this.buyOrder)
            .subscribe(function (res) {
            if (res.error) {
                _this.buydesc = res.error;
                return;
            }
        });
        this.buydesc = '';
        this.buyOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    LtcComponent.prototype.calculateBuyFeeAndTotal = function (event) {
        this.buyOrder.amount = parseFloat(event.target.value);
        this.buyOrder.fee = this.buyOrder.amount * .0025;
        this.buyOrder.total = (this.buyOrder.amount - this.buyOrder.fee) / this.livePrice;
        this.buyOrder.total = parseFloat(this.buyOrder.total.toFixed(8));
    };
    LtcComponent.prototype.placeSellOrder = function (event) {
        var _this = this;
        if (this.sellOrder.amount <= 0 || isNaN(this.sellOrder.amount)) {
            this.selldesc = 'invalid input.';
            return;
        }
        //plaec sell order service
        this.tradeService.ltcToUsd(this.sellOrder)
            .subscribe(function (res) {
            if (res.error) {
                _this.selldesc = res.error;
                return;
            }
        });
        this.selldesc = '';
        this.sellOrder = {
            amount: 0,
            fee: 0,
            total: 0
        };
    };
    LtcComponent.prototype.calculateSellFeeAndTotal = function (event) {
        this.sellOrder.amount = parseFloat(event.target.value);
        this.sellOrder.fee = parseFloat(((this.sellOrder.amount * this.livePrice) * .0025).toFixed(2));
        this.sellOrder.total = (this.sellOrder.amount * this.livePrice) - this.sellOrder.fee;
        this.sellOrder.total = parseFloat(this.sellOrder.total.toFixed(2));
    };
    LtcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ltc',
            template: __webpack_require__("./src/app/trades/ltc/ltc.component.html"),
            styles: [__webpack_require__("./src/app/trades/ltc/ltc.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__trade_service__["a" /* TradeService */]])
    ], LtcComponent);
    return LtcComponent;
}());



/***/ }),

/***/ "./src/app/trades/trade.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TradeService = /** @class */ (function () {
    function TradeService(http) {
        this.http = http;
    }
    TradeService.prototype.btcPrice = function () {
        return this.http.get('https://api.coinbase.com/v2/exchange-rates?currency=BTC')
            .map(function (response) {
            var result = response.json().data.rates.USD;
            return result;
        });
    };
    TradeService.prototype.ethPrice = function () {
        return this.http.get('https://api.coinbase.com/v2/exchange-rates?currency=ETH')
            .map(function (response) {
            var result = response.json().data.rates.USD;
            return result;
        });
    };
    TradeService.prototype.ltcPrice = function () {
        return this.http.get('https://api.coinbase.com/v2/exchange-rates?currency=LTC')
            .map(function (response) {
            var result = response.json().data.rates.USD;
            return result;
        });
    };
    TradeService.prototype.bchPrice = function () {
        return this.http.get('https://api.coinbase.com/v2/exchange-rates?currency=BCH')
            .map(function (response) {
            var result = response.json().data.rates.USD;
            return result;
        });
    };
    ////////////////////////
    TradeService.prototype.usdToBtc = function (buyOrder) {
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(buyOrder);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('transactions/usdbtc' + token, body, { headers: heads })
            .map(function (response) {
            var result = response.json();
            return result;
        });
    };
    TradeService.prototype.btcToUsd = function (sellOrder) {
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(sellOrder);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('transactions/btcusd' + token, body, { headers: heads })
            .map(function (response) {
            var result = response.json();
            return result;
        });
    };
    TradeService.prototype.usdToEth = function (buyOrder) {
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(buyOrder);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('transactions/usdeth' + token, body, { headers: heads })
            .map(function (response) {
            var result = response.json();
            return result;
        });
    };
    TradeService.prototype.ethToUsd = function (sellOrder) {
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(sellOrder);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('transactions/ethusd' + token, body, { headers: heads })
            .map(function (response) {
            var result = response.json();
            return result;
        });
    };
    TradeService.prototype.usdToBch = function (buyOrder) {
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(buyOrder);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('transactions/usdbch' + token, body, { headers: heads })
            .map(function (response) {
            var result = response.json();
            return result;
        });
    };
    TradeService.prototype.bchToUsd = function (sellOrder) {
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(sellOrder);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('transactions/bchusd' + token, body, { headers: heads })
            .map(function (response) {
            var result = response.json();
            return result;
        });
    };
    TradeService.prototype.usdToLtc = function (buyOrder) {
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(buyOrder);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('transactions/usdltc' + token, body, { headers: heads })
            .map(function (response) {
            var result = response.json();
            return result;
        });
    };
    TradeService.prototype.ltcToUsd = function (sellOrder) {
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(sellOrder);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('transactions/ltcusd' + token, body, { headers: heads })
            .map(function (response) {
            var result = response.json();
            return result;
        });
    };
    TradeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TradeService);
    return TradeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map