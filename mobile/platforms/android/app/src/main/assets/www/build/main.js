webpackJsonp([68],{

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = {
    "IS_FIREBASE_ENABLED": false,
    "SHOW_START_WIZARD": false,
    "SUBSCRIBE": false,
    "TOAST": {
        "duration": 1000,
        "position": "buttom"
    },
    "FIREBASE_CONFIG": {
        apiKey: "AIzaSyD-fdhbdUrrnWa1TuIk6iLH9TJT69qeGDU",
        authDomain: "organic-food-green.firebaseapp.com",
        databaseURL: "https://organic-food-green.firebaseio.com",
        projectId: "organic-food-green",
        storageBucket: "",
        messagingSenderId: "376664871667"
    },
    "MAP_KEY": {
        "apiKey": 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg'
    }
};
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(http, network, eventCtrl) {
        this.http = http;
        this.network = network;
        this.eventCtrl = eventCtrl;
        this.selectedProducts = [];
        this.category_title = '';
        this.data = [];
        this.count = 0;
        console.log('Hello GlobalProvider Provider');
        this.previousStatus = ConnectionStatusEnum.Online;
    }
    GlobalProvider.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Online) {
                _this.eventCtrl.publish('network:offline');
            }
            _this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Offline) {
                _this.eventCtrl.publish('network:online');
            }
            _this.previousStatus = ConnectionStatusEnum.Online;
        });
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Events */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 252;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/alert/layout-1/alert-layout-1.module": [
		694,
		67
	],
	"../components/alert/layout-2/alert-layout-2.module": [
		695,
		66
	],
	"../components/alert/layout-3/alert-layout-3.module": [
		696,
		65
	],
	"../components/card-reader/layout-1/card-reader-layout-1.module": [
		697,
		64
	],
	"../components/full-screen-gallery/full-screen-gallery.module": [
		689,
		63
	],
	"../components/image-gallery/layout-1/image-gallery-layout-1.module": [
		690,
		62
	],
	"../components/image-gallery/layout-2/image-gallery-layout-2.module": [
		698,
		61
	],
	"../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module": [
		699,
		60
	],
	"../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module": [
		700,
		59
	],
	"../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module": [
		701,
		58
	],
	"../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module": [
		702,
		57
	],
	"../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module": [
		754,
		56
	],
	"../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module": [
		703,
		55
	],
	"../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module": [
		704,
		54
	],
	"../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module": [
		705,
		53
	],
	"../components/list-view/expandable/layout-1/expandable-layout-1.module": [
		691,
		52
	],
	"../components/list-view/expandable/layout-2/expandable-layout-2.module": [
		706,
		51
	],
	"../components/list-view/expandable/layout-3/expandable-layout-3.module": [
		692,
		50
	],
	"../components/list-view/google-card/layout-1/google-card-layout-1.module": [
		707,
		49
	],
	"../components/list-view/google-card/layout-2/google-card-layout-2.module": [
		708,
		48
	],
	"../components/list-view/google-card/layout-3/google-card-layout-3.module": [
		709,
		47
	],
	"../components/list-view/google-card/layout-4/google-card-layout-4.module": [
		710,
		46
	],
	"../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module": [
		711,
		6
	],
	"../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module": [
		712,
		5
	],
	"../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module": [
		713,
		4
	],
	"../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module": [
		714,
		45
	],
	"../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module": [
		715,
		44
	],
	"../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module": [
		716,
		43
	],
	"../components/login/layout-1/login-layout-1.module": [
		717,
		42
	],
	"../components/login/layout-2/login-layout-2.module": [
		687,
		41
	],
	"../components/profile/layout-1/profile-layout-1.module": [
		718,
		40
	],
	"../components/profile/layout-2/profile-layout-2.module": [
		719,
		39
	],
	"../components/profile/layout-3/profile-layout-3.module": [
		720,
		38
	],
	"../components/profile/layout-4/profile-layout-4.module": [
		721,
		37
	],
	"../components/profile/layout-5/profile-layout-5.module": [
		722,
		36
	],
	"../components/register/layout-1/register-layout-1.module": [
		723,
		35
	],
	"../components/register/layout-2/register-layout-2.module": [
		724,
		34
	],
	"../components/search-bar/layout-1/search-bar-layout-1.module": [
		725,
		33
	],
	"../components/search-bar/layout-2/search-bar-layout-2.module": [
		726,
		32
	],
	"../components/search-bar/layout-3/search-bar-layout-3.module": [
		727,
		31
	],
	"../components/segment/layout-1/segment-layout-1.module": [
		728,
		30
	],
	"../components/segment/layout-2/segment-layout-2.module": [
		729,
		29
	],
	"../components/segment/layout-3/segment-layout-3.module": [
		730,
		28
	],
	"../components/select/layout-1/select-layout-1.module": [
		731,
		27
	],
	"../components/select/layout-2/select-layout-2.module": [
		732,
		26
	],
	"../components/select/layout-3/select-layout-3.module": [
		733,
		25
	],
	"../components/select/layout-4/select-layout-4.module": [
		734,
		24
	],
	"../components/select/layout-5/select-layout-5.module": [
		735,
		23
	],
	"../components/select/layout-6/select-layout-6.module": [
		736,
		22
	],
	"../components/spinner/spinner.module": [
		737,
		21
	],
	"../components/splash-screen/layout-1/splash-screen-layout-1.module": [
		738,
		20
	],
	"../components/splash-screen/layout-2/splash-screen-layout-2.module": [
		739,
		19
	],
	"../components/splash-screen/layout-3/splash-screen-layout-3.module": [
		688,
		18
	],
	"../components/sub-image-gallery/layout-1/sub-image-gallery-layout-1.module": [
		740,
		17
	],
	"../components/sub-image-gallery/layout-2/sub-image-gallery-layout-2.module": [
		741,
		16
	],
	"../components/tabs/layout-1/tabs-layout-1.module": [
		742,
		15
	],
	"../components/tabs/layout-2/tabs-layout-2.module": [
		743,
		14
	],
	"../components/tabs/layout-3/tabs-layout-3.module": [
		744,
		13
	],
	"../pages/cart-details/cart-details.module": [
		745,
		11
	],
	"../pages/categorylist/categorylist.module": [
		746,
		12
	],
	"../pages/home/home.module": [
		747,
		0
	],
	"../pages/intro-page/intro-page.module": [
		748,
		3
	],
	"../pages/login/login.module": [
		693,
		2
	],
	"../pages/main-product/main-product.module": [
		749,
		9
	],
	"../pages/myorders/myorders.module": [
		750,
		8
	],
	"../pages/product-details/product-details.module": [
		751,
		10
	],
	"../pages/productpage/productpage.module": [
		752,
		7
	],
	"../pages/splashscreen/splashscreen.module": [
		753,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 293;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl, loadingCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].TOAST;
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'loading...'
        });
        this.loading.present();
    };
    ToastService.prototype.dismissLoader = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* LoadingController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(172);
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
 * Created by DRAGAN on 3/22/2017.
 */


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.BASE_URL = 'http:/myshop.guidersmap.com/';
        this.GET_PRODUCT_URL = this.BASE_URL + 'index.php/api/get_products';
        this.GET_CATEGORY_URL = this.BASE_URL + 'index.php/api/get_categories';
        this.ADD_ORDER_URL = this.BASE_URL + "index.php/api/sent_order";
        // public static String LOGIN_URL = BASE_URL + "index.php/api/login";
        this.pageNumberStack = [];
    }
    HttpService.prototype.sendData = function (email) {
        return this.http.get("http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL=" + encodeURI(email) + "&b_2c0f7baa8dc004a62ff3922e3_456928d791");
    };
    HttpService.prototype.getproducts = function (cat_id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('cat_id', cat_id);
        return this.http.get('http://myshop.guidersmap.com/index.php/api/get_products', { params: params });
    };
    HttpService.prototype.getUserData = function (user_id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('user_id', user_id);
        return this.http.get('http://myshop.guidersmap.com/index.php/api/get_user_data', { params: params });
    };
    HttpService.prototype.getCategories = function () {
        return this.http.get('http://myshop.guidersmap.com/index.php/api/get_categories');
    };
    HttpService.prototype.getOrderList = function (user_id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('user_id', user_id);
        return this.http.get('http://myshop.guidersmap.com/index.php/api/my_order_list', { params: params });
    };
    HttpService.prototype.cancelOrder = function (sale_id, user_id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('user_id', user_id).set('sale_id', sale_id);
        return this.http.get('http://myshop.guidersmap.com/index.php/api/cancel_order_by_id', { params: params });
    };
    HttpService.prototype.updateToken = function (userId, token) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('user_id', userId).set('token', token);
        return this.http.get('http://myshop.guidersmap.com/index.php/api/update_token', { params: params });
    };
    HttpService.prototype.send_order = function (products, str_id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('id', JSON.stringify(products)).set('store_id', str_id);
        return this.http.get('http://myshop.guidersmap.com/index.php/api/sent_order', { params: params });
    };
    HttpService.prototype.check_order = function (products, str_id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('id', JSON.stringify(products)).set('store_id', str_id);
        return this.http.get('http://myshop.guidersmap.com/index.php/api/check_order', { params: params });
    };
    HttpService.prototype.doLogin = function (email, password) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('user_email', email).set('password', password);
        return this.http.get('http://myshop.guidersmap.com/index.php/api/app_login', { params: params });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=HttpService.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = /** @class */ (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoadingService.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuService = /** @class */ (function () {
    function MenuService() {
        var _this = this;
        this.getId = function () { return 'menu'; };
        this.getTitle = function () { return 'UIAppTemplate'; };
        this.getAllThemes = function () {
            return [
                { "title": "Home", "theme": "listViews", "icon": "ios-albums-outline", "listView": true, "component": "", "singlePage": false },
                { "title": "My Orders", "theme": "listViews", "icon": "ios-list-box-outline", "listView": true, "component": "", "singlePage": false },
                { "title": "Logout", "theme": "listViews", "icon": "ios-log-out", "listView": true, "component": "", "singlePage": false }
                // { "title": "List Views", "theme": "listViews", "icon": "ios-list-box-outline", "listView": true, "component": "", "singlePage": false },
                // { "title": "Parallax", "theme": "parallax", "icon": "ios-albums-outline", "listView": false, "component": "", "singlePage": false },
                // { "title": "Login Pages", "theme": "login", "icon": "ios-lock-outline", "listView": false, "component": "", "singlePage": false },
                // { "title": "Register Pages", "theme": "register", "icon": "ios-contact-outline", "listView": false, "component": "", "singlePage": false },
                // { "title": "Image Gallery", "theme": "imageGallery", "icon": "ios-apps-outline", "listView": false, "component": "", "singlePage": false },
            ];
        };
        this.getDataForTheme = function () {
            return {
                "image": "assets/images/avatar/10.jpg",
                "title": "Profile name"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: {},
                events: _this.getEventsForTheme(item)
            };
        };
    }
    MenuService.prototype.load = function (item) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            observer.next(_this.getDataForTheme());
            observer.complete();
        });
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(486);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_local_notifications__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_app_settings__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loading_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_card_io__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_analytics__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_global_global__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_gallery_modal__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_HttpService__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_storage__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_fcm__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_img_viewer__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19_ionic_gallery_modal__["b" /* GalleryModalModule */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/alert/layout-1/alert-layout-1.module#AlertLayout1Module', name: 'AlertLayout1', segment: 'alert-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/alert/layout-2/alert-layout-2.module#AlertLayout2Module', name: 'AlertLayout2', segment: 'alert-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/alert/layout-3/alert-layout-3.module#AlertLayout3Module', name: 'AlertLayout3', segment: 'alert-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/full-screen-gallery/full-screen-gallery.module#FullScreenGalleryModule', name: 'FullScreenGallery', segment: 'full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/card-reader/layout-1/card-reader-layout-1.module#CardReaderLayout1Module', name: 'CardReaderLayout1', segment: 'card-reader-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-1/image-gallery-layout-1.module#ImageGalleryLayout1Module', name: 'ImageGalleryLayout1', segment: 'image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-2/image-gallery-layout-2.module#ImageGalleryLayout2Module', name: 'ImageGalleryLayout2', segment: 'image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module#AppearanceAnimationLayout1Module', name: 'AppearanceAnimationLayout1', segment: 'appearance-animation-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module#AppearanceAnimationLayout2Module', name: 'AppearanceAnimationLayout2', segment: 'appearance-animation-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module#AppearanceAnimationLayout3Module', name: 'AppearanceAnimationLayout3', segment: 'appearance-animation-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module#AppearanceAnimationLayout4Module', name: 'AppearanceAnimationLayout4', segment: 'appearance-animation-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module#DragAndDropLayout1Module', name: 'DragAndDropLayout1', segment: 'drag-and-drop-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module#DragAndDropLayout2Module', name: 'DragAndDropLayout2', segment: 'drag-and-drop-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module#DragAndDropLayout3Module', name: 'DragAndDropLayout3', segment: 'drag-and-drop-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-1/expandable-layout-1.module#ExpandableLayout1Module', name: 'ExpandableLayout1', segment: 'expandable-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-2/expandable-layout-2.module#ExpandableLayout2Module', name: 'ExpandableLayout2', segment: 'expandable-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-3/expandable-layout-3.module#ExpandableLayout3Module', name: 'ExpandableLayout3', segment: 'expandable-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-1/google-card-layout-1.module#GoogleCardLayout1Module', name: 'GoogleCardLayout1', segment: 'google-card-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-2/google-card-layout-2.module#GoogleCardLayout2Module', name: 'GoogleCardLayout2', segment: 'google-card-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-3/google-card-layout-3.module#GoogleCardLayout3Module', name: 'GoogleCardLayout3', segment: 'google-card-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-4/google-card-layout-4.module#GoogleCardLayout4Module', name: 'GoogleCardLayout4', segment: 'google-card-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module#StickyListHeaderLayout1Module', name: 'StickyListHeaderLayout1', segment: 'sticky-list-header-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module#StickyListHeaderLayout2Module', name: 'StickyListHeaderLayout2', segment: 'sticky-list-header-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module#StickyListHeaderLayout3Module', name: 'StickyListHeaderLayout3', segment: 'sticky-list-header-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module#SwipeToDismissLayout1Module', name: 'SwipeToDismissLayout1', segment: 'swipe-to-dismiss-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module#SwipeToDismissLayout2Module', name: 'SwipeToDismissLayout2', segment: 'swipe-to-dismiss-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module#SwipeToDismissLayout3Module', name: 'SwipeToDismissLayout3', segment: 'swipe-to-dismiss-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-1/login-layout-1.module#LoginLayout1Module', name: 'LoginLayout1', segment: 'login-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-2/login-layout-2.module#LoginLayout2Module', name: 'LoginLayout2', segment: 'login-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/profile/layout-1/profile-layout-1.module#ProfileLayout1Module', name: 'ProfileLayout1', segment: 'profile-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/profile/layout-2/profile-layout-2.module#ProfileLayout2Module', name: 'ProfileLayout2', segment: 'profile-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/profile/layout-3/profile-layout-3.module#ProfileLayout3Module', name: 'ProfileLayout3', segment: 'profile-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/profile/layout-4/profile-layout-4.module#ProfileLayout4Module', name: 'ProfileLayout4', segment: 'profile-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/profile/layout-5/profile-layout-5.module#ProfileLayout5Module', name: 'ProfileLayout5', segment: 'profile-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-1/register-layout-1.module#RegisterLayout1Module', name: 'RegisterLayout1', segment: 'register-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-2/register-layout-2.module#RegisterLayout2Module', name: 'RegisterLayout2', segment: 'register-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-1/search-bar-layout-1.module#SearchBarLayout1Module', name: 'SearchBarLayout1', segment: 'search-bar-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-2/search-bar-layout-2.module#SearchBarLayout2Module', name: 'SearchBarLayout2', segment: 'search-bar-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-3/search-bar-layout-3.module#SearchBarLayout3Module', name: 'SearchBarLayout3', segment: 'search-bar-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/segment/layout-1/segment-layout-1.module#SegmentLayout1Module', name: 'SegmentLayout1', segment: 'segment-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/segment/layout-2/segment-layout-2.module#SegmentLayout2Module', name: 'SegmentLayout2', segment: 'segment-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/segment/layout-3/segment-layout-3.module#SegmentLayout3Module', name: 'SegmentLayout3', segment: 'segment-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-1/select-layout-1.module#SelectLayout1Module', name: 'SelectLayout1', segment: 'select-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-2/select-layout-2.module#SelectLayout2Module', name: 'SelectLayout2', segment: 'select-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-3/select-layout-3.module#SelectLayout3Module', name: 'SelectLayout3', segment: 'select-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-4/select-layout-4.module#SelectLayout4Module', name: 'SelectLayout4', segment: 'select-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-5/select-layout-5.module#SelectLayout5Module', name: 'SelectLayout5', segment: 'select-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-6/select-layout-6.module#SelectLayout6Module', name: 'SelectLayout6', segment: 'select-layout-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-1/splash-screen-layout-1.module#SplashScreenLayout1Module', name: 'SplashScreenLayout1', segment: 'splash-screen-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-2/splash-screen-layout-2.module#SplashScreenLayout2Module', name: 'SplashScreenLayout2', segment: 'splash-screen-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-3/splash-screen-layout-3.module#SplashScreenLayout3Module', name: 'SplashScreenLayout3', segment: 'splash-screen-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/sub-image-gallery/layout-1/sub-image-gallery-layout-1.module#SubImageGalleryLayout1Module', name: 'SubImageGalleryLayout1', segment: 'sub-image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/sub-image-gallery/layout-2/sub-image-gallery-layout-2.module#SubImageGalleryLayout2Module', name: 'SubImageGalleryLayout2', segment: 'sub-image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-1/tabs-layout-1.module#TabsLayout1Module', name: 'TabsLayout1', segment: 'tabs-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-2/tabs-layout-2.module#TabsLayout2Module', name: 'TabsLayout2', segment: 'tabs-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-3/tabs-layout-3.module#TabsLayout3Module', name: 'TabsLayout3', segment: 'tabs-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart-details/cart-details.module#CartDetailsPageModule', name: 'CartDetailsPage', segment: 'cart-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categorylist/categorylist.module#CategorylistPageModule', name: 'CategorylistPage', segment: 'categorylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro-page/intro-page.module#IntroPageModule', name: 'IntroPage', segment: 'intro-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-product/main-product.module#MainProductPageModule', name: 'MainProductPage', segment: 'main-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myorders/myorders.module#MyordersPageModule', name: 'MyordersPage', segment: 'myorders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productpage/productpage.module#ProductpagePageModule', name: 'ProductpagePage', segment: 'productpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splashscreen/splashscreen.module#SplashscreenPageModule', name: 'SplashscreenPage', segment: 'splashscreen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module#AppearanceAnimationLayout5Module', name: 'AppearanceAnimationLayout5', segment: 'appearance-animation-layout-5', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__services_app_settings__["a" /* AppSettings */].FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_24_ionic_img_viewer__["b" /* IonicImageViewerModule */]
                // AngularFireDatabaseModule, AngularFireAuthModule, AngularFirestoreModule,
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_card_io__["a" /* CardIO */],
                __WEBPACK_IMPORTED_MODULE_9__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_10__services_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_20__services_HttpService__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */],
                    useClass: __WEBPACK_IMPORTED_MODULE_19_ionic_gallery_modal__["a" /* GalleryModalHammerConfig */]
                },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_global_global__["a" /* GlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_fcm__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_menu_service__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, menu, nativeStorage, globalProvider, firebase, localNotifications, events, network, menuService) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.menu = menu;
        this.nativeStorage = nativeStorage;
        this.globalProvider = globalProvider;
        this.firebase = firebase;
        this.localNotifications = localNotifications;
        this.events = events;
        this.network = network;
        this.menuService = menuService;
        this.selectedProducts = [];
        this.rootPage = "";
        this.initializeApp();
        //Change Color StatusBar
        this.statusBar.backgroundColorByName("white");
        this.pages = menuService.getAllThemes();
        this.leftMenuTitle = menuService.getTitle();
        this.menuService.load(null).subscribe(function (snapshot) {
            _this.params = snapshot;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log('platform ready');
            _this.nativeStorage.get('loggedin').then(function (isLoggedIn) {
                console.log('native storage:' + isLoggedIn);
                if (isLoggedIn != null && isLoggedIn) {
                    _this.rootPage = 'MainProductPage';
                }
                else {
                    _this.rootPage = 'LoginPage';
                }
            });
            /* saxan
                  // Okay, so the platform is ready and our plugins are available.
                  // Here you can do any higher level native things you might need.
                  this.firebase.getToken()
                    .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
                    .catch(error => console.error('Error getting token', error));
            
                  this.firebase.onNotification()
                    .subscribe(data => {
                      console.log(`User opened a notification ${data}`);
                      this.localNotifications.schedule([{
                        title: data.title,
                        text: data.body
                      }]);
                    });
            */
            _this.statusBar.styleDefault();
            localStorage.setItem("mailChimpLocal", "true");
            _this.globalProvider.initializeNetworkEvents();
            // Offline event
            _this.events.subscribe('network:offline', function () {
                alert('network:offline ==> ' + _this.network.type);
            });
            // Online event
            _this.events.subscribe('network:online', function () {
                // alert('network:online ==> ' + this.network.type);
            });
        });
    };
    MyApp.prototype.presentProfileModal = function () {
        //const profileModal = this.modalCtrl.create("IntroPage");
        //profileModal.present();
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page
        console.log('open page:' + JSON.stringify(page));
        if (page.title == 'Logout') {
            this.nativeStorage.set('loggedin', false);
            this.nav.setRoot('LoginPage');
        }
        else if (page.title == 'My Orders') {
            this.nav.setRoot('MyordersPage');
        }
        else {
            this.nav.setRoot('MainProductPage');
        }
        // if (page.singlePage) {
        //   this.menu.open();
        //   this.nav.push(this.getPageForOpen(page.theme), {
        //     service: this.getServiceForPage(page.theme),
        //     page: page,
        //     componentName: page.theme
        //   });
        // } else {
        //   console.log('Item pages:' + JSON.stringify(page));
        //   this.nav.setRoot("ItemsPage", {
        //     componentName: page.theme
        //   });
        // }
    };
    MyApp.prototype.getPageForOpen = function (value) {
        return null;
    };
    MyApp.prototype.getServiceForPage = function (value) {
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\app\app.html"*/'<!---Settings Main Header-->\n\n<ion-split-pane when="md">\n\n  <!-- Menu Main Top -->\n\n  <ion-menu menu [content]="content" *ngIf="params != null">\n\n    <!-- Menu Main List -->\n\n    <ion-content transparent>\n\n      <ion-item text-center padding transparent no-lines>\n\n        <ion-avatar>\n\n          <img src="assets/images/background/green-bg.jpg" />\n\n        </ion-avatar>\n\n        <h3 margin-top ion-text text-wrap>{{params.title}}</h3>\n\n      </ion-item>\n\n      <ion-list no-margin>\n\n        <button transparent menuClose ion-item item-title no-lines item-divider *ngFor="let p of pages"\n\n          (click)="openPage(p)">\n\n          <ion-icon icon-small item-left>\n\n            <ion-icon name="{{p.icon}}"></ion-icon>\n\n          </ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false" main></ion-nav>\n\n</ion-split-pane>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__services_menu_service__["a" /* MenuService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[371]);
//# sourceMappingURL=main.js.map