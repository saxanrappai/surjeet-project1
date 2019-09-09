webpackJsonp([11],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailsPageModule", function() { return CartDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_details__ = __webpack_require__(847);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartDetailsPageModule = /** @class */ (function () {
    function CartDetailsPageModule() {
    }
    CartDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart_details__["a" /* CartDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart_details__["a" /* CartDetailsPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__cart_details__["a" /* CartDetailsPage */]]
        })
    ], CartDetailsPageModule);
    return CartDetailsPageModule;
}());

//# sourceMappingURL=cart-details.module.js.map

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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\pages\main-product\main-product.html"*/'<!---Image gallery components-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" class="menuIcon"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n\n \n  <div *ngIf="show">\n    <image-gallery-layout-1 [data]="params.data" [events]="params.events">\n    </image-gallery-layout-1>\n\n  </div>\n\n\n\n</ion-content>\n\n\n  \n<ion-footer>\n    <ion-toolbar>\n\n<ion-tabs selectedIndex="0">\n    <ion-tab tabIcon="home"  > </ion-tab>\n    <ion-tab tabIcon="cart"></ion-tab>\n    <ion-tab tabIcon="search" ></ion-tab>\n    <ion-tab tabIcon="settings"></ion-tab> \n  </ion-tabs>\n\n\n</ion-toolbar>  \n</ion-footer>\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\pages\main-product\main-product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1__services_HttpService__["a" /* HttpService */]])
    ], MainProductPage);
    return MainProductPage;
}());

//# sourceMappingURL=main-product.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_HttpService__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_product_main_product__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(212);
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
 * Generated class for the CartDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartDetailsPage = /** @class */ (function () {
    function CartDetailsPage(navCtrl, navParams, toastCtrl, storage, global, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.global = global;
        this.httpService = httpService;
        this.cartJsoon = {};
        this.data = [];
        this.data = this.global.selectedProducts;
        this.data.forEach(function (element) {
            var fullShowText = element.title;
            var arraySizes = element.size.split(",");
            var arrayUnits = element.unit_value.split(",");
            var totalInc = element.increament;
            for (var index = (arraySizes.length); index >= 0; index--) {
                var finalLen = 0;
                if (arrayUnits[index] != undefined) {
                    if (arrayUnits[index] >= totalInc) {
                        finalLen = arrayUnits[index] - totalInc;
                        totalInc = finalLen;
                        console.log('1:' + totalInc);
                        fullShowText = fullShowText + " <li> " + ((arraySizes[index] != '' && arraySizes[index] != undefined) ? arraySizes[index] : '0') + "-" + (-(totalInc - arrayUnits[index])) + "</li>";
                        break;
                    }
                    else {
                        finalLen = totalInc - arrayUnits[index];
                        totalInc = finalLen;
                        console.log('2:' + totalInc);
                        fullShowText = fullShowText + " <li> " + ((arraySizes[index] != '' && arraySizes[index] != undefined) ? arraySizes[index] : '0') + "-" + (finalLen - (totalInc - arrayUnits[index])) + "</li>";
                    }
                }
            }
            element.fullText = fullShowText;
        });
        // this.global.selectedProducts.forEach(element => {
        //   this.cartJsoon[element.product_id] = element.increament;
        // });
        // this.toastCtrl.showLoader();
        // this.storage.get('user_id').then((userID) => {
        //   this.httpService.getUserData(userID).subscribe(data => {
        //     if (data.data.user_status != '0') {
        //       this.storage.get('user_id').then((user_id) => {
        //         this.products = this.httpService.check_order(this.cartJsoon, user_id);
        //         this.products
        //           .subscribe(data => {
        //             //this.global.selectedProducts = [];
        //             this.toastCtrl.dismissLoader();
        //             console.log('cat list:' + JSON.stringify(data));
        //             // this.toastCtrl.presentToast("Order Placed Successfully");
        //             // this.navCtrl.setRoot(MainProductPage);
        //             let items = (data.items.replace('\\', ''));
        //             console.log(items);
        //             let list = JSON.parse(items);
        //             console.log(list);
        //             let productItems: string[] = [];
        //             let pIds: string[] = [];
        //             let pNames: string[] = [];
        //             for (let keys in list) {
        //               let s = keys;
        //               let m = '';
        //               for (let k in list[keys]) {
        //                 if (m != '') {
        //                   m = m + ' & ';
        //                 }
        //                 m = m + " " + k + " - " + list[keys][k];
        //               }
        //               // s = s + " :: " + m;
        //               productItems.push(m);
        //               pIds.push(keys);
        //               pNames.push()
        //             }
        //             console.log(JSON.stringify(productItems));
        //           });
        //       });
        //     } else {
        //       this.toastCtrl.dismissLoader();
        //       this.toastCtrl.presentToast("Store is inactive, Please Contact admin.");
        //     }
        //   });
        // });
        // console.log(this.data);
    }
    CartDetailsPage.prototype.onEvent = function (event, item, e) {
        var _this = this;
        if (e) {
            e.stopPropagation();
        }
        this.global.selectedProducts.forEach(function (element) {
            _this.cartJsoon[element.product_id] = element.increament;
        });
        this.toastCtrl.showLoader();
        this.storage.get('user_id').then(function (userID) {
            _this.httpService.getUserData(userID).subscribe(function (data) {
                if (data.data.user_status != '0') {
                    _this.storage.get('user_id').then(function (user_id) {
                        _this.products = _this.httpService.send_order(_this.cartJsoon, user_id);
                        _this.products
                            .subscribe(function (data) {
                            _this.global.selectedProducts = [];
                            _this.toastCtrl.dismissLoader();
                            console.log('cat list:' + JSON.stringify(data));
                            _this.toastCtrl.presentToast("Order Placed Successfully");
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_product_main_product__["a" /* MainProductPage */]);
                        });
                    });
                }
                else {
                    _this.toastCtrl.dismissLoader();
                    _this.toastCtrl.presentToast("Store is inactive, Please Contact admin.");
                }
            });
        });
    };
    CartDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CartDetailsPage.prototype.deleteFromCart = function (id) {
        for (var index = 0; index < this.global.selectedProducts.length; index++) {
            var element = this.global.selectedProducts[index];
            if (element.product_id == id) {
                this.global.selectedProducts.splice(index, 1);
            }
        }
    };
    CartDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\pages\cart-details\cart-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Order Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--Theme Google Card - Full Image Cards-->\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col no-padding col-12 col-md-6 *ngFor="let item of data;let i = index">\n        <ion-card background-size text-left>\n          <ion-item padding>\n            <h2>{{item.product_name}}</h2>\n            <p text-wrap [innerHTML]=\'item.fullText\'></p>\n            <div item-content>\n              <!-- {{item.increament}} Qty -->\n              <button ion-button (click)="deleteFromCart(item.product_id)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </div>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer no-lines>\n  <ion-row>\n    <ion-col>\n      <button ion-button block default-button (click)="onEvent(\'onButtonClick\', null, $event)">Place Order</button>\n    </ion-col>\n    <ion-col>\n\n      <button ion-button block default-button (click)="goBack()">Add More</button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\pages\cart-details\cart-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_0__services_toast_service__["a" /* ToastService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_HttpService__["a" /* HttpService */]])
    ], CartDetailsPage);
    return CartDetailsPage;
}());

//# sourceMappingURL=cart-details.js.map

/***/ })

});
//# sourceMappingURL=11.js.map