webpackJsonp([13],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsLayout3Module", function() { return TabsLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_layout_3__ = __webpack_require__(846);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsLayout3Module = /** @class */ (function () {
    function TabsLayout3Module() {
    }
    TabsLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_layout_3__["a" /* TabsLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_layout_3__["a" /* TabsLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_layout_3__["a" /* TabsLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], TabsLayout3Module);
    return TabsLayout3Module;
}());

//# sourceMappingURL=tabs-layout-3.module.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsLayout3; });
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

var TabsLayout3 = /** @class */ (function () {
    function TabsLayout3() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], TabsLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], TabsLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('tabs'),
        __metadata("design:type", Object)
    ], TabsLayout3.prototype, "tabRef", void 0);
    TabsLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tabs-layout-3',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\tabs\layout-3\tabs.html"*/'<!-- Theme Tabs Header tab - text -->\n\n<ion-tabs #tabs tabsPlacement=\'top\' tabs-content>\n\n  <!-- Background -->\n\n  <ion-item  transparent text-center background-size no-lines [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n\n    <h1 header-title>{{data.title}}</h1>\n\n   </ion-item>\n\n    <ion-tab [tabTitle]="item.title" [root]="item.page" *ngFor="let item of data.data;let i = index">\n\n    </ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\tabs\layout-3\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsLayout3);
    return TabsLayout3;
}());

//# sourceMappingURL=tabs-layout-3.js.map

/***/ })

});
//# sourceMappingURL=13.js.map