webpackJsonp([60],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceAnimationLayout1Module", function() { return AppearanceAnimationLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_1__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppearanceAnimationLayout1Module = /** @class */ (function () {
    function AppearanceAnimationLayout1Module() {
    }
    AppearanceAnimationLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_1__["a" /* AppearanceAnimationLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_1__["a" /* AppearanceAnimationLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_1__["a" /* AppearanceAnimationLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppearanceAnimationLayout1Module);
    return AppearanceAnimationLayout1Module;
}());

//# sourceMappingURL=appearance-animation-layout-1.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_global__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppearanceAnimationLayout1 = /** @class */ (function () {
    function AppearanceAnimationLayout1(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.mainItems = [];
        this.animateItems = [];
        this.animateClass = { 'fade-in-left-item': true };
    }
    AppearanceAnimationLayout1.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    AppearanceAnimationLayout1.prototype.onItemClick = function (event, item, e) {
        // let that = this;
        // if (item.sub_cat) {
        //     // this.animateItems = [];
        //     //this.global.category_title = item.title;
        //     // for (let i = 0; i < item.sub_cat.length; i++) {
        //     //     setTimeout(function () {
        //     //         that.animateItems.push(item.sub_cat[i]);
        //     //     }, 200 * i);
        //     // }
        //     that.navCtrl.push('CategorylistPage', {
        //         title: item.title,
        //         data: item.sub_cat
        //     });
        // } else {
        //     that.navCtrl.push('ProductpagePage', {
        //         'cat_id': item.id
        //     });
        // }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    AppearanceAnimationLayout1.prototype.ngOnChanges = function (changes) {
        var that = this;
        that.data = changes['data'].currentValue;
        if (that.data) {
            that.animateItems = [];
            var _loop_1 = function (i) {
                setTimeout(function () {
                    that.animateItems.push(that.data[i]);
                }, 200 * i);
            };
            for (var i = 0; i < that.data.length; i++) {
                _loop_1(i);
            }
        }
    };
    AppearanceAnimationLayout1.prototype.search = function (search) {
        var dataSearch = [];
        this.data.forEach(function (element) {
            if (element.title.toLowerCase().includes(search.target.value.toLowerCase())) {
                dataSearch.push(element);
            }
        });
        this.animateItems = dataSearch;
    };
    AppearanceAnimationLayout1.prototype.onCancelSearch = function () {
        this.animateItems = this.data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */])
    ], AppearanceAnimationLayout1.prototype, "content", void 0);
    AppearanceAnimationLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'appearance-animation-layout-1',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\list-view\appearance-animation\layout-1\appearance-animation.html"*/'<!--Theme Appearance animations - Fade in left-->\n\n<ion-content>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <ion-list no-margin>\n\n                    <ion-searchbar placeholder="Search" (ionInput)="search($event)" [showCancelButton]="true"\n\n                        (ionCancel)="onCancelSearch()">\n\n                    </ion-searchbar>\n\n                    <ion-item item-divider no-lines [ngClass]="animateClass"\n\n                        *ngFor="let item of animateItems; let i = index;"\n\n                        (click)="onEvent(\'onItemClick\', item, $event)">\n\n                        <ion-avatar item-start>\n\n                            <img [src]="(item.image == \'\') ? \'assets/images/background/placeholder.jpg\' : \'http://myshop.guidersmap.com/uploads/category/\'+item.image"\n\n                                alt="{{item.title}}" />\n\n                        </ion-avatar>\n\n                        <h2 item-title>{{item.title}}</h2>\n\n                        <ion-icon icon-small item-right (click)="onEvent(\'onFavorite\', item, $event)">\n\n                            <i class="icon"\n\n                                [ngClass]="{\'icon-heart\': item.favorite, \'icon-heart-outline\': !item.favorite}"></i>\n\n                        </ion-icon>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\list-view\appearance-animation\layout-1\appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_global_global__["a" /* GlobalProvider */]])
    ], AppearanceAnimationLayout1);
    return AppearanceAnimationLayout1;
}());

//# sourceMappingURL=appearance-animation-layout-1.js.map

/***/ })

});
//# sourceMappingURL=60.js.map