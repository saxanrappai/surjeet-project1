webpackJsonp([52],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableLayout1Module", function() { return ExpandableLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__ = __webpack_require__(791);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExpandableLayout1Module = /** @class */ (function () {
    function ExpandableLayout1Module() {
    }
    ExpandableLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__["a" /* ExpandableLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__["a" /* ExpandableLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__["a" /* ExpandableLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ExpandableLayout1Module);
    return ExpandableLayout1Module;
}());

//# sourceMappingURL=expandable-layout-1.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableLayout1; });
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


var ExpandableLayout1 = /** @class */ (function () {
    function ExpandableLayout1() {
    }
    ExpandableLayout1.prototype.onEvent = function (event, item, e) {
        console.log(event);
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ExpandableLayout1.prototype.displayImage = function (driverDetails) {
        if (driverDetails.length > 0) {
            return 'http://myshop.guidersmap.com//uploads/profile/' + driverDetails[0].driver_image;
        }
        else {
            return 'http://myshop.guidersmap.com//uploads/profile/driver.png';
        }
    };
    ExpandableLayout1.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ExpandableLayout1.prototype.isGroupShown = function (group) {
        return group.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExpandableLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExpandableLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], ExpandableLayout1.prototype, "content", void 0);
    ExpandableLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'expandable-layout-1',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\list-view\expandable\layout-1\expandable.html"*/'<ion-grid no-padding *ngIf="data != null">\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <ion-list no-margin>\n\n        <ul collapsible no-margin no-padding>\n\n          <li *ngFor="let group of data;">\n\n            <!-- List big image Header -->\n\n            <div collapsible-header (click)="toggleGroup(group)">\n\n              <ion-item no-lines item-divider>\n\n                <ion-avatar item-start>\n\n                  <img src="assets/images/background/green-bg.jpg" alt="title" />\n\n                </ion-avatar>\n\n                <h2 item-title>Order ID: {{group.sale_id}}</h2>\n\n                <h3 item-subtitle text-wrap>Total Quantity: {{group.quantity}}</h3>\n\n                <button ion-button round block style="background-color:grey !important" *ngIf="group.status==0">Order\n\n                  Pending</button>\n\n                <button ion-button round block style="background-color:green !important" *ngIf="group.status==1">Order\n\n                  Confirmed</button>\n\n                <button ion-button round block style="background-color:darkgreen !important" *ngIf="group.status==2">Out\n\n                  for Delivery</button>\n\n                <button ion-button round block style="background-color:darkred !important" *ngIf="group.status==3">Order\n\n                  cancelled</button>\n\n              </ion-item>\n\n            </div>\n\n            <!-- End List big image Header -->\n\n            <!-- List big image Body -->\n\n            <div item-accordion [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)"\n\n              style="overflow: scroll;">\n\n              <!-- <h2 subitem-subtitle>Category: {{group.category_title[0]}}</h2> -->\n\n              <p style="color:white;font-size: 14px;margin:0px;"> Driver Details: </p>\n\n              <div style="margin-left:20px" transparent no-lines *ngIf="group.driver_details.length>0">\n\n                <ion-avatar item-start>\n\n                  <img style="width:50px;height:50px" [src]="displayImage(group.driver_details)" alt="title" />\n\n                </ion-avatar>\n\n                <p style="color:white">Name: {{group.driver_details[0].driver_name}}</p>\n\n                <p style="color:white">Vehicle No: {{group.driver_details[0].driver_vehicle_no}}</p>\n\n                <p style="color:white">Mobile Number: {{group.driver_details[0].driver_phone}}</p>\n\n              </div>\n\n              <div style="margin-left:20px" *ngIf="group.driver_details.length==0">\n\n                <p style="color:white">Not Allocated</p>\n\n              </div>\n\n              <h1 subitem-subtitle>Product List :</h1>\n\n              <ion-item style="margin:0px" transparent no-lines>\n\n                <ion-row>\n\n                  <h2 col-2 text-center style="color:white">PID</h2>\n\n                  <h2 col-5 text-center style="color:white">PName</h2>\n\n                  <h2 col-5 text-center style="color:white">PItems</h2>\n\n                </ion-row>\n\n                <!-- Title -->\n\n                <!-- <p subitem-subtitle text-wrap style="margin:0px !important" *ngFor="let item of group.product_list;"\n\n                  (click)="onEvent(\'onItemClick\', item, $event)">{{item}}</p> -->\n\n\n\n                <ion-row subitem-subtitle text-wrap style="margin:0px !important"\n\n                  *ngFor="let item of group.product_list;let i = index">\n\n                  <p col-2 text-center style="color:white">{{group.pids[i]}}</p>\n\n                  <p col-5 text-center style="color:white">{{group.pTitles[i]}}</p>\n\n                  <p col-5 text-center style="color:white">{{item}}</p>\n\n                </ion-row>\n\n              </ion-item>\n\n              <!-- <button ion-button round block (click)="onEvent(\'onItemClick\', group, $event)" *ngIf="1>=group.status"\n\n                style="background-color:darkred !important;width:200px;display:block;margin:auto;margin-bottom:10px">Cancel\n\n                Order</button> -->\n\n            </div><!-- End List big image Body -->\n\n          </li>\n\n        </ul>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\list-view\expandable\layout-1\expandable.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableLayout1);
    return ExpandableLayout1;
}());

//# sourceMappingURL=expandable-layout-1.js.map

/***/ })

});
//# sourceMappingURL=52.js.map