webpackJsonp([10,63],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenGalleryModule", function() { return FullScreenGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_screen_gallery__ = __webpack_require__(789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FullScreenGalleryModule = /** @class */ (function () {
    function FullScreenGalleryModule() {
    }
    FullScreenGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__full_screen_gallery__["a" /* FullScreenGallery */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__full_screen_gallery__["a" /* FullScreenGallery */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__full_screen_gallery__["a" /* FullScreenGallery */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], FullScreenGalleryModule);
    return FullScreenGalleryModule;
}());

//# sourceMappingURL=full-screen-gallery.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_full_screen_gallery_full_screen_gallery_module__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__product_details__["a" /* ProductDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__product_details__["a" /* ProductDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_full_screen_gallery_full_screen_gallery_module__["FullScreenGalleryModule"]
            ],
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());

//# sourceMappingURL=product-details.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenGallery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FullScreenGallery = /** @class */ (function () {
    function FullScreenGallery(navCtrl, navParams, imgViewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.imgViewCtrl = imgViewCtrl;
        this.isLocked = false;
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
        this.onDoubleClick = function (e, slides) {
            _this.isLocked = !_this.isLocked;
            slides.lockSwipes(_this.isLocked);
        };
        this.sliderOptions = {
            pager: true
        };
    }
    FullScreenGallery.prototype.ngAfterViewInit = function () {
        this.sliderOptions = {
            pager: true,
            zoom: true,
            initialSlide: this.data.index
        };
    };
    FullScreenGallery.prototype.onImageClick = function (url) {
        var imageViewer = this.imgViewCtrl.create(url);
        imageViewer.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FullScreenGallery.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FullScreenGallery.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
    ], FullScreenGallery.prototype, "slider", void 0);
    FullScreenGallery = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'full-screen-gallery',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\full-screen-gallery\full-screen-gallery.html"*/'<!--Screen Gallery-->\n\n<ion-slides style="height:80% !important" #slider pager="true" [initialSlide]="data.index">\n\n    <ion-slide *ngFor="let item of data;">\n\n        <img [src]="item.url" #myImage style="width: 70%;height: 100%;border-radius: 5%;"\n\n            (click)="onImageClick(myImage)" />\n\n    </ion-slide>\n\n</ion-slides>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\full-screen-gallery\full-screen-gallery.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], FullScreenGallery);
    return FullScreenGallery;
}());

//# sourceMappingURL=full-screen-gallery.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(364);
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
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(navCtrl, navParams, global, modalCtrl, toastCtrl, platform, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.params = {};
        this.iconAdd = 'ios-add-outline';
        this.iconRemove = 'ios-remove-outline';
        this.show = false;
        this.unitValue = '0';
        this.sizeChart = '';
        this.images = [];
        this.imHolders = [];
        // imHolders: any = [];
        this.imArray = [];
        this.product = JSON.parse(this.navParams.get('product'));
        console.log(this.product);
        var array = JSON.parse("[" + this.product.unit_value + "]");
        var arraySizes = this.product.size.split(",");
        var arrayUnits = this.product.unit_value.split(",");
        for (var index = 0; index < arraySizes.length; index++) {
            var element = arraySizes[index];
            this.sizeChart = this.sizeChart + " <li> " + element + " - " + ((arrayUnits[index] != '' && arrayUnits[index] != undefined) ? arrayUnits[index] : '0') + "</li>";
        }
        array.forEach(function (element) {
            if (element != '0') {
                _this.show = true;
                _this.unitValue = _this.unitValue + element;
            }
        });
        if (this.product.product_image != '') {
            if (this.product.product_image.includes("[")) {
                this.images = JSON.parse(this.product.product_image);
                for (var index = 0; index < this.images.length; index++) {
                    var element = this.images[index];
                    if (element != null) {
                        var im = { url: 'http://myshop.guidersmap.com/uploads/products/' + element, type: 'jpg' };
                        this.imArray.push(im);
                    }
                    if (index == (this.images.length - 1)) {
                        this.params.data = this.imArray;
                    }
                }
                // this.images.forEach(element => {
                //   let im = { url: 'http://myshop.guidersmap.com/uploads/products/' + element, type: 'jpg' };
                //   this.imArray.push(im);
                // });
            }
            else {
                var im = { url: 'http://myshop.guidersmap.com/uploads/products/' + this.product.product_image, type: 'jpg' };
                this.imArray.push(im);
                this.params.data = this.imArray;
            }
        }
        else {
            var im = { url: 'assets/images/background/placeholder.jpg', type: 'jpg' };
            this.imArray.push(im);
            this.params.data = this.imArray;
        }
        // this.platform.registerBackButtonAction(() => {
        //   if (this.alertCtrl != null) {
        //     this.alert.dismiss();
        //   }
        // });
    }
    // openZoom() {
    //   this.modal = this.modalCtrl.create(GalleryModal, {
    //     photos: this.imArray,
    //     initialSlide: 0,
    //   });
    //   this.modal.present();
    // }
    ProductDetailsPage.prototype.onIncrement = function (group, e) {
        if (e) {
            // event.preventDefault();
            e.stopPropagation();
        }
        if (group.increament < this.unitValue) {
            group.increament++;
        }
    };
    ProductDetailsPage.prototype.onDecrement = function (group, e) {
        if (e) {
            e.stopPropagation();
        }
        if (group.increament > 0) {
            group.increament--;
        }
    };
    ProductDetailsPage.prototype.addtoCart = function () {
        if (this.product.increament > 0) {
            var isThere = false;
            if (this.global.selectedProducts.length == 0) {
                this.global.selectedProducts.push(this.product);
                console.log(this.product.product_id + "---" + this.product.increament);
            }
            else {
                for (var index = 0; index < this.global.selectedProducts.length; index++) {
                    var element = this.global.selectedProducts[index];
                    if (element.product_id == this.product.product_id) {
                        isThere = true;
                        element.increament = +this.product.increament;
                    }
                    if (index == (this.global.selectedProducts.length - 1)) {
                        if (isThere == false) {
                            this.global.selectedProducts.push(this.product);
                        }
                    }
                }
            }
            // this.global.selectedProducts.forEach(element => {
            //   if (element.product_id == this.product.id) {
            //     element.increament = element.increament + this.product.increament;
            //   }
            // });
            // this.global.selectedProducts.push(this.product);
            console.log(this.global.selectedProducts);
            this.navCtrl.pop();
            this.navCtrl.push('CartDetailsPage');
            // this.toastCtrl.presentToast('Added to cart');
        }
    };
    ProductDetailsPage.prototype.showSizeChart = function () {
        this.alert = this.alertCtrl.create({
            title: this.product.product_name,
            message: this.sizeChart,
            cssClass: "info-dialog",
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok clicked');
                    }
                }
            ]
        });
        this.alert.present();
    };
    ProductDetailsPage.prototype.ionViewWillLeave = function () {
        if (this.modal != null) {
            this.modal.dismiss();
        }
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\pages\product-details\product-details.html"*/'<!--\n\n  Generated template for the ProductDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{product.product_name}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="showSizeChart()" clear>\n\n        <ion-icon name="information-circle" style="zoom:1.5;" float-right>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding style=\'margin-top:5px;\'>\n\n  <full-screen-gallery [data]="params.data"></full-screen-gallery>\n\n  <div text-center class="item-accordion">\n\n\n\n\n\n    <!-- <ion-item>\n\n      <div col-8>\n\n        <div> {{product.product_name}}</div>\n\n        <div> {{(product.product_description!=\'\')?product.product_description:\'-\'}}</div>\n\n      </div>\n\n      <button col-4 ion-button default-button (click)="showSizeChart()">sizes</button>\n\n    </ion-item> -->\n\n\n\n    <ion-item transparent no-lines *ngIf="show">\n\n      <div round (click)="onDecrement(product, $event)" style="margin-top:5px;">\n\n        <ion-icon [name]="iconRemove"></ion-icon>\n\n      </div>\n\n      <div round style="margin-top:5px;">\n\n        {{product.increament}}\n\n      </div>\n\n      <div round (click)="onIncrement(product, $event)" style="margin-top:5px;">\n\n        <ion-icon [name]="iconAdd"></ion-icon>\n\n      </div>\n\n      <button ion-button default-button *ngIf="show" (click)="addtoCart()">Add to Cart</button>\n\n    </ion-item>\n\n    <ion-item padding-top transparent no-lines *ngIf="!show">\n\n      <div round>\n\n        No Stock\n\n      </div>\n\n    </ion-item>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\pages\product-details\product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=10.js.map