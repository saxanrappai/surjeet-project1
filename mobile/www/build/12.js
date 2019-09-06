webpackJsonp([12],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylistPageModule", function() { return CategorylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorylist__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategorylistPageModule = /** @class */ (function () {
    function CategorylistPageModule() {
    }
    CategorylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categorylist__["a" /* CategorylistPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categorylist__["a" /* CategorylistPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__categorylist__["a" /* CategorylistPage */]
            ]
        })
    ], CategorylistPageModule);
    return CategorylistPageModule;
}());

//# sourceMappingURL=categorylist.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_HttpService__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(216);
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
 * Generated class for the CategorylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategorylistPage = /** @class */ (function () {
    function CategorylistPage(navCtrl, navParams, toastCtrl, httpService, platform, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.httpService = httpService;
        this.platform = platform;
        this.global = global;
        this.animateItems = [];
        this.data = [];
        console.log('enter');
        this.global.count++;
        this.data = this.navParams.get('data');
        this.global.category_title = this.navParams.get('title');
        console.log('cat data:' + this.data);
        // let events = this.getEventsForTheme();
        this.animateItems = [];
        var _loop_1 = function (i) {
            var that = this_1;
            setTimeout(function () {
                // that.animateItems[i] = that.data[i];
                that.animateItems.push(that.data[i]);
            }, 200 * i);
        };
        var this_1 = this;
        for (var i = 0; i < this.data.length; i++) {
            _loop_1(i);
        }
    }
    CategorylistPage.prototype.onitemclick = function (event, item, e) {
        var _this = this;
        if (item.sub_cat && item.sub_cat.length > 0) {
            this.navCtrl.push('CategorylistPage', {
                'title': item.title,
                'data': item.sub_cat
            });
        }
        else {
            // products: Observable<any>;
            // productsList: GetProducts;
            this.toastCtrl.showLoader();
            var products = this.httpService.getproducts(item.id);
            products
                .subscribe(function (data) {
                _this.toastCtrl.dismissLoader();
                var productsList = data;
                if (productsList.data && productsList.data.length > 0) {
                    _this.navCtrl.push('ProductpagePage', {
                        'products': productsList
                    });
                }
                else {
                    _this.toastCtrl.presentToast('No Products Available');
                }
            });
            // that.navCtrl.push('ProductpagePage', {
            //   'cat_id': item.id
            // });
        }
    };
    CategorylistPage.prototype.onEvent = function (event, item, e) {
        // if (this.events[event]) {
        //   this.events[event](item);
        // }
    };
    CategorylistPage.prototype.onItemClick = function (event, item, e) {
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
        // if (this.events[event]) {
        //   this.events[event](item);
        // }
    };
    // ngOnChanges(changes: { [propKey: string]: any }) {
    //   let that = this;
    //   that.data = changes['data'].currentValue;
    //   if (that.data) {
    //     that.animateItems = [];
    //     for (let i = 0; i < that.data.length; i++) {
    //       setTimeout(function () {
    //         that.animateItems.push(that.data[i]);
    //       }, 200 * i);
    //     }
    //   }
    // }
    CategorylistPage.prototype.search = function (search) {
        var dataSearch = [];
        if (search.target.value == '') {
            this.animateItems = this.data;
        }
        else {
            for (var index = 0; index < this.data.length; index++) {
                var element = this.data[index];
                if (element.title.toLowerCase().includes(search.target.value.toLowerCase())) {
                    dataSearch.push(element);
                }
                if (index == (this.data.length - 1)) {
                    this.animateItems = dataSearch;
                }
            }
        }
        // this.data.forEach(element => {
        //   if (element.title.toLowerCase().includes(search.target.value.toLowerCase())) {
        //     dataSearch.push(element);
        //   }
        // });
        // this.animateItems = dataSearch;
    };
    CategorylistPage.prototype.onCancelSearch = function () {
        this.animateItems = this.data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Content */])
    ], CategorylistPage.prototype, "content", void 0);
    CategorylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-category-list',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\pages\categorylist\categorylist.html"*/'<!--Animation components-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{global.category_title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!--Content-->\n\n\n\n<ion-content>\n\n  <!--PAGE APPEARANCE ANIMATIONS - Fade in left-->\n\n  <!-- <appearance-animation-layout-1 [data]="data" [events]="events">\n\n  </appearance-animation-layout-1> -->\n\n\n\n  <!--Theme Appearance animations - Fade in left-->\n\n  <ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list no-margin>\n\n          <ion-searchbar placeholder="Search" (ionInput)="search($event)" [showCancelButton]="true"\n\n            (ionCancel)="onCancelSearch()">\n\n          </ion-searchbar>\n\n          <ion-item item-divider no-lines [ngClass]="animateClass" *ngFor="let item of animateItems; let i = index;"\n\n            (click)="onitemclick(\'onItemClick\', item, $event)">\n\n            <ion-avatar item-start>\n\n              <img\n\n                [src]="(item.image == \'\') ? \'assets/images/background/placeholder.jpg\' : \'http://myshop.guidersmap.com/uploads/category/\'+item.image"\n\n                alt="{{item.title}}" />\n\n            </ion-avatar>\n\n            <h2 item-title>{{item.title}}</h2>\n\n            <!-- <ion-icon icon-small item-right>\n\n              <i class="icon" [ngClass]="{\'icon-heart\': item.favorite, \'icon-heart-outline\': !item.favorite}"></i>\n\n            </ion-icon> -->\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\pages\categorylist\categorylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_0__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */]])
    ], CategorylistPage);
    return CategorylistPage;
}());

//# sourceMappingURL=categorylist.js.map

/***/ })

});
//# sourceMappingURL=12.js.map