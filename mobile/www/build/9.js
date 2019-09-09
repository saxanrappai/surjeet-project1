webpackJsonp([9,62],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryLayout1Module", function() { return ImageGalleryLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_1__ = __webpack_require__(790);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageGalleryLayout1Module = /** @class */ (function () {
    function ImageGalleryLayout1Module() {
    }
    ImageGalleryLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_1__["a" /* ImageGalleryLayout1 */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_1__["a" /* ImageGalleryLayout1 */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_1__["a" /* ImageGalleryLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ImageGalleryLayout1Module);
    return ImageGalleryLayout1Module;
}());

//# sourceMappingURL=image-gallery-layout-1.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProductPageModule", function() { return MainProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_product__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_layout_1_image_gallery_layout_1_module__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_footer_common_footer__ = __webpack_require__(856);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MainProductPageModule = /** @class */ (function () {
    function MainProductPageModule() {
    }
    MainProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_product__["a" /* MainProductPage */],
                __WEBPACK_IMPORTED_MODULE_4__components_common_footer_common_footer__["a" /* CommonFooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main_product__["a" /* MainProductPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_image_gallery_layout_1_image_gallery_layout_1_module__["ImageGalleryLayout1Module"]
            ],
        })
    ], MainProductPageModule);
    return MainProductPageModule;
}());

//# sourceMappingURL=main-product.module.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_fcm__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_HttpService__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MainProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainProductPage = /** @class */ (function () {
    function MainProductPage(navCtrl, navParams, platform, nativeStorage, firebase, localNotifications, toastCtrl, httpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.nativeStorage = nativeStorage;
        this.firebase = firebase;
        this.localNotifications = localNotifications;
        this.toastCtrl = toastCtrl;
        this.httpService = httpService;
        this.params = {};
        this.show = false;
        this.getEventsForTheme = function () {
            var that = _this;
            return {
                'onClick': function (item) {
                    if (item.sub_cat && item.sub_cat.length > 0) {
                        console.log(item.sub_cat);
                        that.navCtrl.push('CategorylistPage', {
                            'title': item.title,
                            'data': item.sub_cat
                        });
                    }
                    else {
                        that.toastCtrl.showLoader();
                        var products = that.httpService.getproducts(item.id);
                        products
                            .subscribe(function (data) {
                            that.toastCtrl.dismissLoader();
                            var productsList = data;
                            if (productsList.data && productsList.data.length > 0) {
                                that.navCtrl.push('ProductpagePage', {
                                    'products': productsList
                                });
                            }
                            else {
                                that.toastCtrl.presentToast('No Products Available');
                            }
                        });
                        // that.toastCtrl.presentToast('No Products Available');
                    }
                },
                'onFavorite': function (item) {
                    item.favorite = !item.favorite;
                },
            };
        };
        //this.toastCtrl.showLoader();
        this.products = this.httpService.getCategories();
        this.products
            .subscribe(function (data) {
            // this.toastCtrl.dismissLoader();
            _this.productsList = data;
            _this.params.data = _this.productsList.data;
            _this.params.events = _this.getEventsForTheme();
            //   console.log('cat list:' + JSON.stringify(this.params.data));
            _this.show = true;
        });
        this.initializeApp();
    }
    MainProductPage.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log('platform ready');
            _this.nativeStorage.get('user_id').then(function (userID) {
                console.log('native storage userid:' + userID);
                _this.firebase.getToken()
                    .then(function (token) {
                    console.log("The token is " + token);
                    _this.httpService.updateToken(userID, token)
                        .subscribe(function (data) {
                    });
                })
                    .catch(function (error) { return console.error('Error getting token', error); });
                _this.firebase.onNotification()
                    .subscribe(function (data) {
                    console.log("User opened a notification " + data);
                    _this.localNotifications.schedule([{
                            title: data.title,
                            text: data.body
                        }]);
                });
                _this.firebase.onTokenRefresh()
                    .subscribe(function (token) {
                    console.log("Got a new token " + token);
                    _this.httpService.updateToken(userID, token)
                        .subscribe(function (data) {
                    });
                });
            });
        });
    };
    MainProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\pages\main-product\main-product.html"*/'<!---Image gallery components-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" class="menuIcon"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n\n\n\n</ion-content>\n\n\n  <div *ngIf="show">\n    <image-gallery-layout-1 [data]="params.data" [events]="params.events">\n    </image-gallery-layout-1>\n\n  </div>\n\n\n\n\n<common-footer [iconSelected]="home"></common-footer>'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\pages\main-product\main-product.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_native_fcm__["a" /* FCM */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__services_HttpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_HttpService__["a" /* HttpService */]) === "function" && _h || Object])
    ], MainProductPage);
    return MainProductPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=main-product.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryLayout1; });
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


var ImageGalleryLayout1 = /** @class */ (function () {
    function ImageGalleryLayout1(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.selectedItem = 0;
        this.selectedItemPage = "0";
        this.items = [];
        this.display_image = 'assets/images/background/placeholder.jpg';
        this.openSubGallery = function (group, title) {
            console.log(JSON.stringify(group));
            _this.navCtrl.push('CategorylistPage', {
                title: title,
                data: group
            });
        };
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    ImageGalleryLayout1.prototype.changeDataSet = function (tab) {
        if (this.data && this.data[tab]) {
            this.selectedItem = tab;
            this.selectedItemPage = tab;
            this.title = this.data[tab].title;
            if (this.data[tab].sub_cat) {
                this.items = this.data[tab].sub_cat;
                console.log('on s:' + this.items);
            }
        }
        else {
            this.items = [];
        }
    };
    ImageGalleryLayout1.prototype.ngOnChanges = function (changes) {
        console.log('cu data:' + JSON.stringify(this.data.sub_cat));
        this.data = changes['data'].currentValue;
        this.items = this.data[0].sub_cat;
        this.title = this.data[0].title;
        this.display_image = (this.data[0].image == '') ? 'assets/images/background/placeholder.jpg' : 'http://myshop.guidersmap.com/uploads/category/' + this.data[0].image;
        // this.changeDataSet(this.selectedItem);
    };
    ImageGalleryLayout1.prototype.ngAfterViewInit = function () {
        // this.changeDataSet(this.selectedItem);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageGalleryLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageGalleryLayout1.prototype, "events", void 0);
    ImageGalleryLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'image-gallery-layout-1',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\image-gallery\layout-1\image-gallery-layout-1.html"*/'<!--Theme Gallery for Full gallery 1-->\n\n<ion-grid *ngIf="data != null">\n\n  <div segment-block transparent>\n\n    <ion-segment has-header [(ngModel)]="selectedItemPage">\n\n      <ion-segment-button text-capitalize value="0" (ionSelect)="changeDataSet(0)">\n\n        Veneer\n\n      </ion-segment-button>\n\n      <ion-segment-button text-capitalize value="1" (ionSelect)=" changeDataSet(1)">\n\n        Laminate\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <!-- <ion-row no-padding> [style.backgroundImage]="\'url(\' + display_image + \')\'" -->\n\n  <ion-row no-padding>\n\n    <ion-col col-12 padding-top>\n\n      <!-- <h1 header-title no-padding no-margin>{{title}}</h1> -->\n\n    </ion-col>\n\n    <div *ngIf="data[selectedItem].sub_cat">\n\n      <ion-col col-12 col-sm-3 col-md-6 col-lg-4 col-xl-3\n\n        *ngFor="let group of data[selectedItem].sub_cat;let i = index;">\n\n        <ion-card box-shadow (click)="onEvent(\'onClick\', group, $event)">\n\n          <img class="tileImage"\n\n            [src]="(group.image == \'\') ? \'assets/images/background/placeholder.jpg\' : \'http://myshop.guidersmap.com/uploads/category/\'+group.image" />\n\n          <ion-card-content>\n\n            <h2 gallery-title text-capitalize>{{group.title}}</h2>\n\n            <!-- <p gallery-subtitle>{{group.items.length}} image(s)</p> -->\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </div>\n\n    <div *ngIf="!data[selectedItem].sub_cat">\n\n      <ion-col col-12 col-sm-3 col-md-6 col-lg-4 col-xl-3>\n\n        <ion-card box-shadow>\n\n          <ion-card-content>\n\n            <h2 gallery-title text-capitalize>No Items</h2>\n\n            <!-- <p gallery-subtitle>{{group.items.length}} image(s)</p> -->\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </div>\n\n\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\image-gallery\layout-1\image-gallery-layout-1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], ImageGalleryLayout1);
    return ImageGalleryLayout1;
}());

//# sourceMappingURL=image-gallery-layout-1.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonFooterComponent; });
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

/**
 * Generated class for the ComponentsCommonFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CommonFooterComponent = /** @class */ (function () {
    function CommonFooterComponent() {
        console.log('Hello ComponentsCommonFooterComponent Component');
        this.text = 'Hello World';
        this.initializeApp();
    }
    CommonFooterComponent.prototype.initializeApp = function () {
        console.log("iconSelected", this.iconSelected);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CommonFooterComponent.prototype, "iconSelected", void 0);
    CommonFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'common-footer',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\common-footer\common-footer.html"*/'\n<ion-footer>\n    <ion-toolbar>\n   \n   \n        <ion-tabs>\n            <ion-tab tabIcon="home" class="active" ></ion-tab>\n            <ion-tab tabIcon="cart"></ion-tab>\n            <ion-tab tabIcon="search" ></ion-tab>\n            <ion-tab tabIcon="settings"></ion-tab>\n          </ion-tabs>\n    \n    \n    \n  \n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\common-footer\common-footer.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CommonFooterComponent);
    return CommonFooterComponent;
}());

//# sourceMappingURL=common-footer.js.map

/***/ })

});
//# sourceMappingURL=9.js.map