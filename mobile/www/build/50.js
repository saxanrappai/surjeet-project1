webpackJsonp([50],{

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
            selector: 'expandable-layout-3',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\list-view\expandable\layout-3\expandable.html"*/'<!-- Themes Expandable - Filters Products -->\n\n<ion-grid had-header no-padding *ngIf="data != null">\n\n  <ion-row>\n\n    <ion-col col-12 no-padding no-margin>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        <ion-list>\n\n            <ion-item  *ngFor="let group of data;"  (click)="onEvent(\'onItemClick\', group, $event)">\n\n              <ion-thumbnail item-start>\n\n                <img [src]="group.displayImage">\n\n              </ion-thumbnail>\n\n              <h2>{{group.product_name}}</h2>\n\n              <p>{{group.unit_value_total}} QTY</p>\n\n              <button ion-button clear item-end><ion-icon name="cart" class="cartIcon"  ></ion-icon></button>\n\n            </ion-item>\n\n          </ion-list>\n\n  \n\n\n\n      <!-- Header -->\n\n      <!-- \n\n      <ion-list no-margin> \n\n        <ion-searchbar placeholder="Search" (ionInput)="search($event)" [showCancelButton]="true"\n\n          (ionCancel)="onCancelSearch()">\n\n        </ion-searchbar>  \n\n        <ul no-margin no-padding class="collapsible">\n\n          <li no-margin *ngFor="let group of data;"> \n\n            <div class="collapsible-header" item-divider no-padding (click)="onEvent(\'onItemClick\', group, $event)">\n\n              <ion-item no-lines>\n\n                <ion-avatar item-start>\n\n                  <img [src]="group.displayImage" />\n\n                </ion-avatar>\n\n                <h2 item-title text-capitalize>{{group.product_name}}</h2> \n\n                <div item-content>\n\n                  <span span-small>{{group.unit_value_total}} QTY</span>\n\n                  <ion-icon icon-small item-end>\n\n                  </ion-icon>\n\n                </div>\n\n              </ion-item>\n\n            </div>\n\n          </li>\n\n        </ul>\n\n      </ion-list>\n\n\n\n    -->\n\n\n\n\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\list-view\expandable\layout-3\expandable.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableLayout3);
    return ExpandableLayout3;
}());

//# sourceMappingURL=expandable-layout-3.js.map

/***/ })

});
//# sourceMappingURL=50.js.map