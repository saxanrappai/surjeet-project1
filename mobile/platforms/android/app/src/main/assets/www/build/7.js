webpackJsonp([7,50],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableLayout3Module", function() { return ExpandableLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_layout_3__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExpandableLayout3Module = /** @class */ (function () {
    function ExpandableLayout3Module() {
    }
    ExpandableLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_3__["a" /* ExpandableLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expandable_layout_3__["a" /* ExpandableLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_3__["a" /* ExpandableLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ExpandableLayout3Module);
    return ExpandableLayout3Module;
}());

//# sourceMappingURL=expandable-layout-3.module.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductpagePageModule", function() { return ProductpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productpage__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list_view_expandable_layout_3_expandable_layout_3_module__ = __webpack_require__(692);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductpagePageModule = /** @class */ (function () {
    function ProductpagePageModule() {
    }
    ProductpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productpage__["a" /* ProductpagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productpage__["a" /* ProductpagePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_list_view_expandable_layout_3_expandable_layout_3_module__["ExpandableLayout3Module"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ProductpagePageModule);
    return ProductpagePageModule;
}());

//# sourceMappingURL=productpage.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableLayout3; });
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


var ExpandableLayout3 = /** @class */ (function () {
    function ExpandableLayout3() {
        this.mainItems = [];
        this.iconAdd = 'ios-add-outline';
        this.iconRemove = 'ios-remove-outline';
        console.log(this.data);
    }
    ExpandableLayout3.prototype.ngOnChanges = function (changes) {
        console.log('cu data:' + JSON.stringify(this.data));
        this.data = changes['data'].currentValue;
        this.mainItems = this.data;
    };
    ExpandableLayout3.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ExpandableLayout3.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ExpandableLayout3.prototype.isGroupShown = function (group) {
        return group.show;
    };
    ExpandableLayout3.prototype.onIncrement = function (group, e) {
        if (e) {
            // event.preventDefault();
            e.stopPropagation();
        }
        if (group.increament < group.unit_value) {
            group.increament++;
        }
    };
    ExpandableLayout3.prototype.onDecrement = function (group, e) {
        if (e) {
            e.stopPropagation();
        }
        if (group.increament > 0) {
            group.increament--;
        }
    };
    ExpandableLayout3.prototype.search = function (search) {
        var dataSearch = [];
        this.mainItems.forEach(function (element) {
            if (element.product_name.toLowerCase().includes(search.target.value.toLowerCase())) {
                dataSearch.push(element);
            }
        });
        this.data = dataSearch;
    };
    ExpandableLayout3.prototype.onCancelSearch = function () {
        this.data = this.mainItems;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExpandableLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExpandableLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], ExpandableLayout3.prototype, "content", void 0);
    ExpandableLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'expandable-layout-3',template:/*ion-inline-start:"/var/www/html/surjeet-project1/mobile/src/components/list-view/expandable/layout-3/expandable.html"*/'<!-- Themes Expandable - Filters Products -->\n\n<ion-grid had-header no-padding *ngIf="data != null">\n\n  <ion-row>\n\n    <ion-col col-12 no-padding no-margin>\n\n      <!-- Header -->\n\n      <ion-list no-margin>\n\n        <ion-searchbar placeholder="Search" (ionInput)="search($event)" [showCancelButton]="true"\n\n          (ionCancel)="onCancelSearch()">\n\n        </ion-searchbar>\n\n        <!--- List Content -->\n\n        <ul no-margin no-padding class="collapsible">\n\n          <li no-margin *ngFor="let group of data;">\n\n            <!-- Expandable - Filters Products - Header-->\n\n            <!-- <div class="collapsible-header" item-divider no-padding (click)="toggleGroup(group)"> -->\n\n            <div class="collapsible-header" item-divider no-padding (click)="onEvent(\'onItemClick\', group, $event)">\n\n              <ion-item no-lines>\n\n                <ion-avatar item-start>\n\n                  <img [src]="group.displayImage" />\n\n                </ion-avatar>\n\n                <h2 item-title text-capitalize>{{group.product_name}}</h2>\n\n                <!-- <p item-subtitle text-capitalize>{{group.size}}</p> -->\n\n                <div item-content>\n\n                  <span span-small>{{group.unit_value_total}} QTY</span>\n\n                  <ion-icon icon-small item-end>\n\n                  </ion-icon>\n\n                </div>\n\n              </ion-item>\n\n            </div>\n\n          </li>\n\n        </ul>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"/var/www/html/surjeet-project1/mobile/src/components/list-view/expandable/layout-3/expandable.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableLayout3);
    return ExpandableLayout3;
}());

//# sourceMappingURL=expandable-layout-3.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(216);
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
 * Generated class for the ProductpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductpagePage = /** @class */ (function () {
    function ProductpagePage(navCtrl, navParams, toastCtrl, global) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.global = global;
        // products: Observable<any>;
        this.params = {};
        this.show = false;
        this.iconAdd = 'ios-add-outline';
        this.iconRemove = 'ios-remove-outline';
        this.title = '';
        this.getEventsForTheme = function () {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    //that.toastCtrl.presentToast('clicked' + JSON.stringify(item));
                    that.navCtrl.push("ProductDetailsPage", {
                        'product': JSON.stringify(item)
                    });
                },
                'onRates': function (index) {
                    // that.toastCtrl.presentToast("Rates " + (index + 1));
                },
                'onCheckBoxClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onButtonClick': function (item) {
                    //that.toastCtrl.presentToast("Continue");
                    if (that.global.selectedProducts) {
                        that.navCtrl.push('CartDetailsPage');
                    }
                    else {
                        that.toastCtrl.presentToast('No Items in cart');
                    }
                },
                'onButtonAddClick': function (item) {
                    console.log(JSON.stringify(item));
                    that.toastCtrl.presentToast('Added to cart');
                    // that.toastCtrl.presentToast("Add" + JSON.stringify(item));
                }
            };
        };
        this.params.events = this.getEventsForTheme();
        this.productsList = this.navParams.get('products');
        this.productsList.data.forEach(function (element) {
            element.increament = '0';
            if (element.unit_value.includes(',')) {
                var qtys = element.unit_value.split(',');
                var qty_1 = 0;
                qtys.forEach(function (unit) {
                    qty_1 = qty_1 + Number(unit);
                });
                element.unit_value_total = String(qty_1);
            }
            if (element.product_image != '') {
                if (element.product_image.includes("[")) {
                    var images = JSON.parse(element.product_image);
                    element.displayImage = 'http://myshop.guidersmap.com/uploads/products/' + images[0];
                }
                else {
                    element.displayImage = 'http://myshop.guidersmap.com/uploads/products/' + element.product_image;
                }
            }
            else {
                element.displayImage = 'assets/images/background/placeholder.jpg';
            }
        });
        this.params.data = this.productsList.data;
        this.show = true;
        this.title = this.productsList.data[0].title;
        console.log('cat list:' + JSON.stringify(this.productsList.data));
        // this.products = this.httpService.getproducts(this.navParams.get('cat_id'));
        // this.products
        //   .subscribe(data => {
        //     this.productsList = data;
        //   });
    }
    ProductpagePage.prototype.onEvent = function (event, item, e) {
        if (this.global.selectedProducts.length > 0) {
            this.navCtrl.push('CartDetailsPage');
        }
        else {
            this.toastCtrl.presentToast('No Items in cart');
        }
    };
    ProductpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/var/www/html/surjeet-project1/mobile/src/pages/productpage/productpage.html"*/'<!--\n  Generated template for the ProductpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="show">\n    <expandable-layout-3 [data]="productsList.data" [events]="params.events"></expandable-layout-3>\n  </div>\n</ion-content>\n<ion-footer no-lines>\n  <ion-toolbar padding-bottom>\n    <!-- Footer Button -->\n    <button ion-button block default-button (click)="onEvent(\'onButtonClick\', null, $event)">Go to Cart</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/surjeet-project1/mobile/src/pages/productpage/productpage.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], ProductpagePage);
    return ProductpagePage;
}());

//# sourceMappingURL=productpage.js.map

/***/ })

});
//# sourceMappingURL=7.js.map