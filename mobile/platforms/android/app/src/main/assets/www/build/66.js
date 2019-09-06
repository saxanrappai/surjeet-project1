webpackJsonp([66],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertLayout2Module", function() { return AlertLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_layout_2__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertLayout2Module = /** @class */ (function () {
    function AlertLayout2Module() {
    }
    AlertLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alert_layout_2__["a" /* AlertLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alert_layout_2__["a" /* AlertLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__alert_layout_2__["a" /* AlertLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AlertLayout2Module);
    return AlertLayout2Module;
}());

//# sourceMappingURL=alert-layout-2.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertLayout2 = /** @class */ (function () {
    function AlertLayout2(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertLayout2.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    AlertLayout2.prototype.presentAlert = function (item) {
        var alert = this.alertCtrl.create({
            title: "DIALOG WARNING",
            message: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
            subTitle: item.title,
            cssClass: "alert-warning",
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], AlertLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], AlertLayout2.prototype, "events", void 0);
    AlertLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'alert-layout-2',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\alert\layout-2\alert.html"*/'<!--Theme Alert - Alert Warning-->\n\n<ion-content>\n\n  <ion-grid no-padding>\n\n    <ion-row  *ngIf="data != null">\n\n      <ion-col col-12 col-lg-6 col-xl-4 *ngFor="let item of data.items; let i = index" (click)="presentAlert(item)">\n\n        <!-- Card -->\n\n        <ion-card padding box-shadow>\n\n          <img [src]="item.image" />\n\n           <ion-card-header text-center>\n\n             <h2 card-title>{{item.title}}</h2>\n\n             <span ion-text font-bold text-capitalize color="primary">{{item.category}}</span>\n\n           </ion-card-header>\n\n          <ion-card-content>\n\n            <ion-row no-padding>\n\n              <ion-col text-right no-padding>\n\n                <button ion-button button-icon-clear icon-start clear>\n\n                  <ion-icon [name]="item.iconLike"></ion-icon>\n\n                  {{item.numberLike}}\n\n                </button>\n\n              </ion-col>\n\n              <ion-col text-left no-padding>\n\n                <button ion-button button-icon-clear icon-start clear>\n\n                  <ion-icon [name]="item.iconComment"></ion-icon>\n\n                  {{item.numberCommnet}}\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\alert\layout-2\alert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertLayout2);
    return AlertLayout2;
}());

//# sourceMappingURL=alert-layout-2.js.map

/***/ })

});
//# sourceMappingURL=66.js.map