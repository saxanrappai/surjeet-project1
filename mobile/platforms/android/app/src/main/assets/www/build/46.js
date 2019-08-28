webpackJsonp([46],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleCardLayout4Module", function() { return GoogleCardLayout4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_card_layout_4__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoogleCardLayout4Module = /** @class */ (function () {
    function GoogleCardLayout4Module() {
    }
    GoogleCardLayout4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_4__["a" /* GoogleCardLayout4 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__google_card_layout_4__["a" /* GoogleCardLayout4 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_4__["a" /* GoogleCardLayout4 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], GoogleCardLayout4Module);
    return GoogleCardLayout4Module;
}());

//# sourceMappingURL=google-card-layout-4.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout4; });
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

var GoogleCardLayout4 = /** @class */ (function () {
    function GoogleCardLayout4() {
    }
    GoogleCardLayout4.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout4.prototype, "events", void 0);
    GoogleCardLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'google-card-layout-4',template:/*ion-inline-start:"/var/www/html/surjeet-project1/mobile/src/components/list-view/google-card/layout-4/google-card.html"*/'<!--Theme Google Card - Reviev cards-->\n\n<ion-content>\n\n  <ion-grid no-padding>\n\n    <ion-row *ngIf="data != null">\n\n      <ion-col col-12 col-lg-6 col-xl-4 *ngFor="let item of data.items;let i = index">\n\n        <!-- Card -->\n\n        <ion-card padding (click)="onEvent(\'onItemClick\', item, $event)">\n\n          <img [src]="item.image" />\n\n           <ion-card-header>\n\n             <span>{{item.time}}</span>\n\n             <h2 card-title>{{item.title}}</h2>\n\n             <p card-subtitle text-wrap>{{item.description}}</p>\n\n           </ion-card-header>\n\n          <ion-card-content no-padding>\n\n            <ion-row no-padding>\n\n              <ion-col col-auto no-padding *ngIf="item.like != null">\n\n                <button ion-button button-icon-clear icon-start text-capitalize clear small (click)="onEvent(\'onLike\', item, $event)">\n\n                  <ion-icon [ngClass]="{\'active\' : item.like.isActive}" [name]="item.like.icon"></ion-icon>\n\n                  {{item.like.number}} {{item.like.text}}\n\n                </button>\n\n              </ion-col>\n\n              <ion-col col-auto no-padding *ngIf="item.comment != null">\n\n                <button ion-button button-icon-clear icon-start text-capitalize clear small (click)="onEvent(\'onComment\', item, $event)">\n\n                <ion-icon  [ngClass]="{\'active\' : item.comment.isActive}" [name]="item.comment.icon"></ion-icon>\n\n                {{item.comment.number}} {{item.comment.text}}\n\n              </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/var/www/html/surjeet-project1/mobile/src/components/list-view/google-card/layout-4/google-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleCardLayout4);
    return GoogleCardLayout4;
}());

//# sourceMappingURL=google-card-layout-4.js.map

/***/ })

});
//# sourceMappingURL=46.js.map