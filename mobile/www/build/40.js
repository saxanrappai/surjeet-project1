webpackJsonp([40],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLayout1Module", function() { return ProfileLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_layout_1__ = __webpack_require__(820);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileLayout1Module = /** @class */ (function () {
    function ProfileLayout1Module() {
    }
    ProfileLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_layout_1__["a" /* ProfileLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_layout_1__["a" /* ProfileLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile_layout_1__["a" /* ProfileLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ProfileLayout1Module);
    return ProfileLayout1Module;
}());

//# sourceMappingURL=profile-layout-1.module.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileLayout1; });
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


var ProfileLayout1 = /** @class */ (function () {
    function ProfileLayout1() {
        this.slider = {};
    }
    ProfileLayout1.prototype.slideHasChanged = function (slider, index) {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            }
            else {
                this.data.splice(index, 1);
            }
        }
    };
    ProfileLayout1.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    ProfileLayout1.prototype.onEvent = function (event, item, e) {
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
    ], ProfileLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProfileLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], ProfileLayout1.prototype, "content", void 0);
    ProfileLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profile-layout-1',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\profile\layout-1\profile.html"*/'<!--Theme Profile - Profie With Avatar-->\n\n<ion-content>\n\n  <ion-grid *ngIf="data != null">\n\n    <ion-col col-12>\n\n      <ion-card padding box-shadow>\n\n        <ion-avatar>\n\n          <img [src]="data.image" alt="">\n\n        </ion-avatar>\n\n        <ion-card-content text-center>\n\n          <h1>{{data.title}}</h1>\n\n          <p>{{data.subtitle}}</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <span text-center font-bold ion-text color="accent" text-uppercase margin-top>{{data.category}}</span>\n\n    <ion-col col-12 text-center *ngFor="let item of data.items;let i = index" (click)="onEvent(\'onItemClick\', item, $event)">\n\n      <ion-card padding box-shadow>\n\n        <ion-card-content text-center>\n\n          <span font-bold ion-text text-uppercase color="primary">{{item.category}}</span>\n\n          <h1 card-title margin-top text-wrap>{{item.title}}</h1>\n\n        </ion-card-content>\n\n        <button ion-button button-icon-clear text-capitalize icon-start clear (click)="onEvent(\'onLike\', item, $event)">\n\n          <ion-icon [ngClass]="{\'active\' : item.like.isActive}" [name]="item.like.icon"></ion-icon>\n\n           {{item.like.text}}\n\n        </button>\n\n        <button ion-button button-icon-clear text-capitalize icon-start clear (click)="onEvent(\'onComment\', item, $event)">\n\n          <ion-icon [ngClass]="{\'active\' : item.comment.isActive}" [name]="item.comment.icon"></ion-icon>\n\n          {{item.comment.number}} {{item.comment.text}}\n\n        </button>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\profile\layout-1\profile.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfileLayout1);
    return ProfileLayout1;
}());

//# sourceMappingURL=profile-layout-1.js.map

/***/ })

});
//# sourceMappingURL=40.js.map