webpackJsonp([36],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLayout5Module", function() { return ProfileLayout5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_layout_5__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileLayout5Module = /** @class */ (function () {
    function ProfileLayout5Module() {
    }
    ProfileLayout5Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_layout_5__["a" /* ProfileLayout5 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_layout_5__["a" /* ProfileLayout5 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile_layout_5__["a" /* ProfileLayout5 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ProfileLayout5Module);
    return ProfileLayout5Module;
}());

//# sourceMappingURL=profile-layout-5.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileLayout5; });
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


var ProfileLayout5 = /** @class */ (function () {
    function ProfileLayout5() {
        this.slider = {};
    }
    ProfileLayout5.prototype.slideHasChanged = function (slider, index) {
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
    ProfileLayout5.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    ProfileLayout5.prototype.onEvent = function (event, item, e) {
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
    ], ProfileLayout5.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProfileLayout5.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], ProfileLayout5.prototype, "content", void 0);
    ProfileLayout5 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profile-layout-5',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\profile\layout-5\profile.html"*/'<!--Profile- Profile 1-->\n\n<ion-content *ngIf="data != null" background-size [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n\n  <ion-grid >\n\n    <ion-row>\n\n    <ion-col col-12>\n\n      <ion-card transparent text-center>\n\n        <ion-item transparent text-center>\n\n          <ion-avatar>\n\n            <img [src]="data.image" alt="">\n\n          </ion-avatar>\n\n          <h1 ion-text color="secondary">{{data.title}}</h1>\n\n          <p text-wrap ion-text color="secondary">{{data.subtitle}}</p>\n\n        </ion-item>\n\n        <ion-row no-padding>\n\n          <ion-col>\n\n            <button ion-button button-clear clear no-padding>\n\n              <span small-font font-bold ion-text color="secondary">{{data.valueFollowers}}</span>\n\n              <span ion-text text-capitalize color="secondary">{{data.followers}}</span>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button button-clear clear no-padding>\n\n              <span small-font font-bold ion-text color="secondary">{{data.valueFollowing}}</span>\n\n              <span ion-text text-capitalize color="secondary">{{data.following}}</span>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button button-clear clear no-padding>\n\n              <span small-font font-bold ion-text color="secondary">{{data.valueRecipes}}</span>\n\n              <span ion-text text-capitalize color="secondary">{{data.recipes}}</span>\n\n            </button>\n\n          </ion-col>\n\n          <!-- Social Button-->\n\n          <ion-col col-12 text-center>\n\n            <button ion-button icon-only button-icon (click)="onEvent(\'onFacebook\', data, $event)">\n\n             <ion-icon [name]="data.iconFacebook"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only button-icon (click)="onEvent(\'onTwitter\', data, $event)">\n\n              <ion-icon [name]="data.iconTwitter"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only button-icon (click)="onEvent(\'onInstagram\', data, $event)">\n\n              <ion-icon [name]="data.iconInstagram"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <!-- Info Author-->\n\n          <ion-col col-12 text-left *ngIf="data != null">\n\n          <div description *ngFor="let item of data.items;let i = index">\n\n            <ion-card transparent padding>\n\n              <h1 item-text ion-text color="accent">{{item.about}}</h1>\n\n              <p text-wrap item-subtext padding-top>\n\n                {{item.description}}</p>\n\n              <h1 item-text padding-top ion-text color="accent">{{item.content}}</h1>\n\n              <ion-icon padding-top icon-medium [name]="item.iconPhone"></ion-icon>{{item.phone}}\n\n              <div clearfix></div>\n\n              <ion-icon padding-top icon-medium [name]="item.iconMail"></ion-icon>{{item.mail}}\n\n              <div clearfix></div>\n\n              <ion-icon padding-top icon-medium [name]="item.iconGlobe"></ion-icon>{{item.globe}}\n\n              </ion-card>\n\n              \n\n        \n\n          </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n    </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\profile\layout-5\profile.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProfileLayout5);
    return ProfileLayout5;
}());

//# sourceMappingURL=profile-layout-5.js.map

/***/ })

});
//# sourceMappingURL=36.js.map