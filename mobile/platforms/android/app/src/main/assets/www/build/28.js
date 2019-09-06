webpackJsonp([28],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentLayout3Module", function() { return SegmentLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__segment_layout_3__ = __webpack_require__(831);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SegmentLayout3Module = /** @class */ (function () {
    function SegmentLayout3Module() {
    }
    SegmentLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__segment_layout_3__["a" /* SegmentLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__segment_layout_3__["a" /* SegmentLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__segment_layout_3__["a" /* SegmentLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SegmentLayout3Module);
    return SegmentLayout3Module;
}());

//# sourceMappingURL=segment-layout-3.module.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentLayout3; });
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

var SegmentLayout3 = /** @class */ (function () {
    function SegmentLayout3() {
        var _this = this;
        this.selectedItem = "Page1";
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    SegmentLayout3.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    SegmentLayout3.prototype.isEnabled = function (value) {
        return this.selectedItem == value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], SegmentLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], SegmentLayout3.prototype, "events", void 0);
    SegmentLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'segment-layout-3',template:/*ion-inline-start:"C:\wamp64\www\surjeet-project1\mobile\src\components\segment\layout-3\segment.html"*/'<!-- Theme Segment - Segment Post -->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n\n  </ion-navbar>\n\n  <!--Segment Section -->\n\n  <ion-toolbar no-padding>\n\n    <div segment-block *ngIf="data != null">\n\n      <ion-segment has-header [(ngModel)]="selectedItem">\n\n        <ion-segment-button text-capitalize value="Page1">\n\n          {{data.segmentButton1}}\n\n        </ion-segment-button>\n\n        <ion-segment-button text-capitalize value="Page2">\n\n          {{data.segmentButton2}}\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<!-- Content-->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <!--- SETTINGS PAGE1 SCREEN -->\n\n    <ion-row *ngIf="isEnabled(\'Page1\')">\n\n        <ion-col col-12 col-lg-6 col-xl-4 *ngFor="let item of data.page1.items; let i= index"  (click)="onEvent(\'onItemClick\', item, $event)">\n\n          <!-- Card -->\n\n          <ion-card padding box-shadow (click)="onEvent(\'onItemClick\', item, $event)">\n\n            <img [src]="item.image" />\n\n             <ion-card-header>\n\n               <span font-bold font-small ion-text color="primary">{{item.time}}</span>\n\n               <h2 card-title>{{item.title}}</h2>\n\n               <p card-subtitle text-wrap>{{item.description}}</p>\n\n             </ion-card-header>\n\n            <ion-card-content no-padding>\n\n              <button ion-button button-icon-clear text-capitalize icon-start clear (click)="onEvent(\'onLike\', item, $event)">\n\n                <ion-icon [ngClass]="{\'active\' : item.like.isActive}" [name]="item.like.icon"></ion-icon>\n\n                {{item.like.number}}\n\n              </button>\n\n              <button ion-button button-icon-clear text-capitalize icon-start clear (click)="onEvent(\'onComment\', item, $event)">\n\n                <ion-icon  [ngClass]="{\'active\' : item.comment.isActive}" [name]="item.comment.icon"></ion-icon>\n\n                {{item.comment.number}}\n\n              </button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n    <!--- SETTINGS PAGE2 SCREEN -->\n\n    <ion-row *ngIf="isEnabled(\'Page2\')">\n\n      <ion-col col-12 col-lg-6 col-xl-4 *ngFor="let item of data.page2.items; let i= index" (click)="onEvent(\'onItemClick\', item, $event)">\n\n        <!-- Card -->\n\n        <ion-card padding box-shadow>\n\n          <img [src]="item.image" />\n\n           <ion-card-header>\n\n             <span font-bold font-small ion-text color="primary">{{item.time}}</span>\n\n             <h2 card-title>{{item.title}}</h2>\n\n             <p card-subtitle text-wrap>{{item.description}}</p>\n\n           </ion-card-header>\n\n          <ion-card-content no-padding>\n\n            <button ion-button button-icon-clear text-capitalize icon-start clear (click)="onEvent(\'onLike\', item, $event)">\n\n              <ion-icon [ngClass]="{\'active\' : item.like.isActive}" [name]="item.like.icon"></ion-icon>\n\n              {{item.like.number}}\n\n            </button>\n\n            <button ion-button button-icon-clear text-capitalize icon-start clear (click)="onEvent(\'onComment\', item, $event)">\n\n              <ion-icon  [ngClass]="{\'active\' : item.comment.isActive}" [name]="item.comment.icon"></ion-icon>\n\n              {{item.comment.number}}\n\n            </button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\wamp64\www\surjeet-project1\mobile\src\components\segment\layout-3\segment.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SegmentLayout3);
    return SegmentLayout3;
}());

//# sourceMappingURL=segment-layout-3.js.map

/***/ })

});
//# sourceMappingURL=28.js.map