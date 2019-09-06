webpackJsonp([49],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleCardLayout1Module", function() { return GoogleCardLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoogleCardLayout1Module = /** @class */ (function () {
    function GoogleCardLayout1Module() {
    }
    GoogleCardLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__["a" /* GoogleCardLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__["a" /* GoogleCardLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__["a" /* GoogleCardLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], GoogleCardLayout1Module);
    return GoogleCardLayout1Module;
}());

//# sourceMappingURL=google-card-layout-1.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout1; });
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

var GoogleCardLayout1 = /** @class */ (function () {
    function GoogleCardLayout1() {
    }
    GoogleCardLayout1.prototype.onEvent = function (event, item, e) {
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
    ], GoogleCardLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout1.prototype, "events", void 0);
    GoogleCardLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'google-card-layout-1',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\list-view\google-card\layout-1\google-card.html"*/'<!--Theme Google Card - Full Image Cards-->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col no-padding col-12 col-md-6 *ngFor="let item of data.items;let i = index">\n\n        <ion-card background-size text-left (click)="onEvent(\'onItemClick\', item, $event)">\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img [src]="item.avatar">\n\n            </ion-avatar>\n\n            <h2>{{item.title}}</h2>\n\n            <p>{{item.data}}</p>\n\n            <div item-content>\n\n              {{item.time}}\n\n            </div>\n\n          </ion-item>\n\n          <img [src]="item.backgroundImage">\n\n          <ion-card-content>\n\n            <p card-body-text>{{item.description}}</p>\n\n          </ion-card-content>\n\n          <ion-row>\n\n            <ion-col col-auto *ngIf="item.like != null">\n\n              <button ion-button button-icon-clear icon-start clear small (click)="onEvent(\'onLike\', item, $event)">\n\n                <ion-icon [ngClass]="{\'active\' : item.like.isActive}" [name]="item.like.icon"></ion-icon>\n\n                <div text-capitalize>{{item.like.number}} {{item.like.text}}</div>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col col-auto *ngIf="item.comment != null">\n\n              <button ion-button button-icon-clear icon-start clear small (click)="onEvent(\'onComment\', item, $event)">\n\n                <ion-icon  [ngClass]="{\'active\' : item.comment.isActive}" [name]="item.comment.icon"></ion-icon>\n\n                <div text-capitalize>{{item.comment.number}} {{item.comment.text}}</div>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\list-view\google-card\layout-1\google-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleCardLayout1);
    return GoogleCardLayout1;
}());

//# sourceMappingURL=google-card-layout-1.js.map

/***/ })

});
//# sourceMappingURL=49.js.map