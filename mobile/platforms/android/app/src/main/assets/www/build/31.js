webpackJsonp([31],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarLayout3Module", function() { return SearchBarLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchBarLayout3Module = /** @class */ (function () {
    function SearchBarLayout3Module() {
    }
    SearchBarLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__["a" /* SearchBarLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__["a" /* SearchBarLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__["a" /* SearchBarLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SearchBarLayout3Module);
    return SearchBarLayout3Module;
}());

//# sourceMappingURL=search-bar-layout-3.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarLayout3; });
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

var SearchBarLayout3 = /** @class */ (function () {
    function SearchBarLayout3() {
        this.searchTerm = "";
    }
    SearchBarLayout3.prototype.getItems = function (event) {
        var _this = this;
        if (!this.allItems) {
            this.allItems = this.data.items;
        }
        this.data.items = this.allItems.filter(function (item) {
            return item.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    SearchBarLayout3.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            if ('onTextChange' === event) {
                this.getItems(item);
                this.events[event](this.searchTerm);
            }
            else {
                this.events[event](item);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchBarLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchBarLayout3.prototype, "events", void 0);
    SearchBarLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-bar-layout-3',template:/*ion-inline-start:"/var/www/html/surjeet-project1/mobile/src/components/search-bar/layout-3/search-bar.html"*/'<!-- Theme Search bars - Search Field + Header 2 -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar no-padding>\n\n    <div header-section padding transparent>\n\n      <!-- Header Big Title -->\n\n      <h1 *ngIf="data != null" padding-left ion-text color="accent" search-bar-title>{{data.title}}</h1>\n\n      <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="onEvent(\'onTextChange\', $event)"></ion-searchbar>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<!--Content -->\n\n<ion-content>\n\n  <ion-grid no-padding>\n\n    <ion-row *ngIf="data != null">\n\n      <!-- List Search-->\n\n      <ion-col col-12 col-lg-6 col-xl-4  *ngFor="let item of data.items;">\n\n          <ion-card box-shadow padding (click)="onEvent(\'onItemClick\', item, $event)">\n\n            <img [src]="item.image" />\n\n             <ion-card-header>\n\n               <span font-bold ion-text small-font color="primary">{{item.time}}</span>\n\n               <h2 card-title>{{item.title}}</h2>\n\n               <p card-subtitle text-wrap>{{item.description}}</p>\n\n             </ion-card-header>\n\n            <ion-card-content>\n\n              <button ion-button button-icon-clear icon-start clear (click)="onEvent(\'onLikeClick\', item, $event)">\n\n                <ion-icon [ngClass]="{\'active\' : item.like.isActive}" [name]="item.like.icon"></ion-icon>\n\n                {{item.like.number}}\n\n              </button>\n\n\n\n              <button ion-button button-icon-clear icon-start clear (click)="onEvent(\'onCommentClick\', item, $event)">\n\n                <ion-icon [ngClass]="{\'active\' : item.comment.isActive}" [name]="item.comment.icon"></ion-icon>\n\n                {{item.comment.number}}\n\n              </button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/var/www/html/surjeet-project1/mobile/src/components/search-bar/layout-3/search-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarLayout3);
    return SearchBarLayout3;
}());

//# sourceMappingURL=search-bar-layout-3.js.map

/***/ })

});
//# sourceMappingURL=31.js.map