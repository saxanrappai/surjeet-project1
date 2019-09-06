webpackJsonp([37],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLayout4Module", function() { return ProfileLayout4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_layout_4__ = __webpack_require__(823);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileLayout4Module = /** @class */ (function () {
    function ProfileLayout4Module() {
    }
    ProfileLayout4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_layout_4__["a" /* ProfileLayout4 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_layout_4__["a" /* ProfileLayout4 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile_layout_4__["a" /* ProfileLayout4 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ProfileLayout4Module);
    return ProfileLayout4Module;
}());

//# sourceMappingURL=profile-layout-4.module.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileLayout4; });
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

var ProfileLayout4 = /** @class */ (function () {
    function ProfileLayout4() {
    }
    ProfileLayout4.prototype.onEvent = function (event, item, e) {
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
    ], ProfileLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProfileLayout4.prototype, "events", void 0);
    ProfileLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profile-layout-4',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\profile\layout-4\profile.html"*/'<!--Theme Profile- Profile With Slider-->\n\n<ion-content>\n\n  <ion-grid *ngIf="data != null">\n\n    <ion-col col-12 text-center>\n\n      <ion-card profile padding text-center box-shadow>\n\n        <ion-avatar>\n\n          <img [src]="data.image" alt="">\n\n        </ion-avatar>\n\n        <ion-card-content text-center>\n\n          <h1 ion-text color="secondary">{{data.title}}</h1>\n\n          <p ion-text color="secondary">{{data.subtitle}}</p>\n\n        </ion-card-content>\n\n        <ion-row no-padding>\n\n          <ion-col no-padding>\n\n            <button ion-button button-clear clear no-padding>\n\n              <h2 small-font font-bold ion-text color="secondary">{{data.valueFollowers}}</h2>\n\n              <span ion-text text-capitalize color="secondary">{{data.followers}}</span>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col no-padding>\n\n            <button ion-button button-clear clear no-padding>\n\n              <span small-font font-bold ion-text color="secondary">{{data.valueFollowing}}</span>\n\n              <span ion-text text-capitalize color="secondary">{{data.following}}</span>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col no-padding>\n\n            <button ion-button button-clear clear no-padding>\n\n              <span small-font font-bold ion-text color="secondary">{{data.valueRecipes}}</span>\n\n              <span ion-text text-capitalize color="secondary">{{data.recipes}}</span>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n    </ion-col>\n\n    <!-- Slider -->\n\n    <ion-col col-12 text-center padding-top>\n\n      <span category ion-text font-bold padding-top text-uppercase color="accent">{{data.category}}</span>\n\n      <ion-slides pager="true">\n\n        <ion-slide *ngFor="let item of data.items;let i = index" (click)="onEvent(\'onItemClick\', item, $event)">\n\n          <ion-col col-12 text-center>\n\n            <ion-card padding-bottom box-shadow>\n\n              <img [src]="item.backgroundCard">\n\n              <ion-card-content text-center>\n\n                <span text-uppercase font-bold ion-text color="accent">{{item.category}}</span>\n\n                <h1 card-title margin-top text-wrap>{{item.title}}</h1>\n\n              </ion-card-content>\n\n              <button ion-button button-icon-clear text-capitalize icon-start clear (click)="onEvent(\'onLike\', item, $event)">\n\n                <ion-icon [ngClass]="{\'active\' : item.like.isActive}" [name]="item.like.icon"></ion-icon>\n\n               {{item.like.text}}\n\n              </button>\n\n              <button ion-button button-icon-clear text-capitalize icon-start clear (click)="onEvent(\'onComment\', item, $event)">\n\n                <ion-icon [ngClass]="{\'active\' : item.comment.isActive}" [name]="item.comment.icon"></ion-icon>\n\n                {{item.comment.number}} {{item.comment.text}}\n\n              </button>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-col>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\profile\layout-4\profile.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfileLayout4);
    return ProfileLayout4;
}());

//# sourceMappingURL=profile-layout-4.js.map

/***/ })

});
//# sourceMappingURL=37.js.map