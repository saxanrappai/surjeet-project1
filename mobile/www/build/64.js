webpackJsonp([64],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardReaderLayout1Module", function() { return CardReaderLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_reader_layout_1__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardReaderLayout1Module = /** @class */ (function () {
    function CardReaderLayout1Module() {
    }
    CardReaderLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__card_reader_layout_1__["a" /* CardReaderLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__card_reader_layout_1__["a" /* CardReaderLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__card_reader_layout_1__["a" /* CardReaderLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], CardReaderLayout1Module);
    return CardReaderLayout1Module;
}());

//# sourceMappingURL=card-reader-layout-1.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardReaderLayout1; });
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

var CardReaderLayout1 = /** @class */ (function () {
    function CardReaderLayout1() {
    }
    CardReaderLayout1.prototype.onEvent = function (event, result) {
        if (this.events[event]) {
            this.events[event](result);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CardReaderLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CardReaderLayout1.prototype, "events", void 0);
    CardReaderLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'card-reader-layout-1',template:/*ion-inline-start:"/var/www/html/surjeet-project1/mobile/src/components/card-reader/layout-1/card-reader.html"*/'<!--Theme Scanner - Click here-->\n\n<ion-content has-header>\n\n  <div *ngIf="data != null">\n\n  <ion-item *ngIf="data.cardType">\n\n    {{data.cardType}}\n\n  </ion-item>\n\n  <ion-item *ngIf="data.redactedCardNumber">\n\n    {{data.redactedCardNumber}}\n\n  </ion-item>\n\n  <ion-item *ngIf="data.cardNumber">\n\n    {{data.cardNumber}}\n\n  </ion-item>\n\n  <ion-item *ngIf="data.expiryMonth">\n\n    {{data.expiryMonth}}\n\n  </ion-item>\n\n  <ion-item *ngIf="data.expiryYear">\n\n    {{data.expiryYear}}\n\n  </ion-item>\n\n  <ion-item *ngIf="data.cvv">\n\n    {{data.cvv}}\n\n  </ion-item>\n\n  <ion-item *ngIf="data.postalCode">\n\n    {{data.postalCode}}\n\n  </ion-item>\n\n  <ion-item *ngIf="data.cardholderName">\n\n    {{data.cardholderName}}\n\n  </ion-item>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"/var/www/html/surjeet-project1/mobile/src/components/card-reader/layout-1/card-reader.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CardReaderLayout1);
    return CardReaderLayout1;
}());

//# sourceMappingURL=card-reader-layout-1.js.map

/***/ })

});
//# sourceMappingURL=64.js.map