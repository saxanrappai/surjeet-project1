webpackJsonp([41],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout2Module", function() { return LoginLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_2__ = __webpack_require__(786);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginLayout2Module = /** @class */ (function () {
    function LoginLayout2Module() {
    }
    LoginLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], LoginLayout2Module);
    return LoginLayout2Module;
}());

//# sourceMappingURL=login-layout-2.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginLayout2 = /** @class */ (function () {
    function LoginLayout2() {
        var _this = this;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.data = {
            "background": "assets/images/background/placeholder.jpg",
            "forgotPassword": "Forgot password?",
            "labelUsername": "USERNAME",
            "labelPassword": "PASSWORD",
            "title": "Login to your account",
            "username": "Enter your username",
            "password": "Enter your password",
            "login": "Log In",
            "facebookLogin": "Login with",
            "register": "Register",
            "logo": "assets/images/logo/1.png",
            "errorUser": "Field can't be empty",
            "errorPassword": "Field can't be empty"
        };
        this.onEvent = function (event) {
            if (event == "onLogin" && !_this.validate()) {
                return;
            }
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password
                });
            }
        };
    }
    LoginLayout2.prototype.validate = function () {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.username || this.username.length == 0) {
            this.isUsernameValid = false;
        }
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }
        return this.isPasswordValid && this.isUsernameValid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "events", void 0);
    LoginLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-layout-2',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\login\layout-2\login.html"*/'<!-- Theme Login pages - Login + logo 2 -->\n\n<ion-content has-header >\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row padding-left padding-right align-items-center>\n\n      <!-- <ion-col text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <img logo margin-top [src]="data.logo">\n\n      </ion-col> -->\n\n      <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 text-center>\n\n        <ion-item transparent text-center no-lines>\n\n          <!---Logo Title-->\n\n          <img src=\'../../../assets/veneer_logo.jpg\' class="logoImg"/>\n\n        </ion-item>\n\n        <form>\n\n          <!---Input field username-->\n\n          <ion-item margin-top transparent>\n\n            <ion-label stacked>{{data.labelUsername}}</ion-label>\n\n            <ion-input required type="text" [placeholder]="data.username" [(ngModel)]="username"\n\n              [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>\n\n          </ion-item>\n\n          <!---Input field password-->\n\n          <ion-item transparent>\n\n            <ion-label stacked>{{data.labelPassword}}</ion-label>\n\n            <ion-input required type="password" [placeholder]="data.password" [(ngModel)]="password"\n\n              [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label>\n\n          </ion-item>\n\n          <!-- <ion-item transparent>\n\n            <button ion-button button-clear text-capitalize clear no-padding no-margin float-right\n\n              (click)="onEvent(\'onForgot\')">{{data.forgotPassword}}</button>\n\n          </ion-item> -->\n\n          <div login-section>\n\n            <button ion-button default-button text-capitalize box-shadow\n\n              (click)="onEvent(\'onLogin\')">{{data.login}}</button>\n\n          </div>\n\n\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\login\layout-2\login.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayout2);
    return LoginLayout2;
}());

//# sourceMappingURL=login-layout-2.js.map

/***/ })

});
//# sourceMappingURL=41.js.map