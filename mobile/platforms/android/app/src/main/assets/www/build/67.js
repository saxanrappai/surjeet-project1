webpackJsonp([67],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertLayout1Module", function() { return AlertLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_layout_1__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertLayout1Module = /** @class */ (function () {
    function AlertLayout1Module() {
    }
    AlertLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alert_layout_1__["a" /* AlertLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alert_layout_1__["a" /* AlertLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__alert_layout_1__["a" /* AlertLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AlertLayout1Module);
    return AlertLayout1Module;
}());

//# sourceMappingURL=alert-layout-1.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertLayout1; });
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


var AlertLayout1 = /** @class */ (function () {
    function AlertLayout1(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertLayout1.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    AlertLayout1.prototype.presentAlert = function (item) {
        var alert = this.alertCtrl.create({
            title: "DIALOG INFO",
            message: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
            subTitle: item.title,
            cssClass: "info-dialog",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
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
    ], AlertLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], AlertLayout1.prototype, "events", void 0);
    AlertLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'alert-layout-1',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\alert\layout-1\alert.html"*/'<!--Theme Alert - Alert Info -->\n\n<ion-content padding-top>\n\n<ion-grid no-padding>\n\n  <ion-row *ngIf="data != null">\n\n    <ion-col col-12 col-lg-4 *ngFor="let item of data.items; let i = index" (click)="presentAlert(item)">\n\n      <ion-card text-left box-shadow margin-bottom padding>\n\n          <img [src]="item.image" />\n\n        <ion-card-content no-padding margin-top >\n\n          <span span-small>{{item.price}}</span>\n\n          <h2 item-title text-capitalize>{{item.title}}</h2>\n\n          <h1 ion-text small-font color="primary">{{item.subtitle}}</h1>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\alert\layout-1\alert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertLayout1);
    return AlertLayout1;
}());

//# sourceMappingURL=alert-layout-1.js.map

/***/ })

});
//# sourceMappingURL=67.js.map