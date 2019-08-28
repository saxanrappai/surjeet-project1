webpackJsonp([63],{

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
            selector: 'full-screen-gallery',template:/*ion-inline-start:"/var/www/html/surjeet-project1/mobile/src/components/full-screen-gallery/full-screen-gallery.html"*/'<!--Screen Gallery-->\n\n<ion-slides style="height:80% !important" #slider pager="true" [initialSlide]="data.index">\n\n    <ion-slide *ngFor="let item of data;">\n\n        <img [src]="item.url" #myImage style="width: 70%;height: 100%;border-radius: 5%;"\n\n            (click)="onImageClick(myImage)" />\n\n    </ion-slide>\n\n</ion-slides>\n\n'/*ion-inline-end:"/var/www/html/surjeet-project1/mobile/src/components/full-screen-gallery/full-screen-gallery.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], FullScreenGallery);
    return FullScreenGallery;
}());

//# sourceMappingURL=full-screen-gallery.js.map

/***/ })

});
//# sourceMappingURL=63.js.map