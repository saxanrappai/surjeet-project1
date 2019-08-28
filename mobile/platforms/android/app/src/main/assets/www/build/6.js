webpackJsonp([6],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyListHeaderLayout1Module", function() { return StickyListHeaderLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_1__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_affix__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StickyListHeaderLayout1Module = /** @class */ (function () {
    function StickyListHeaderLayout1Module() {
    }
    StickyListHeaderLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_1__["a" /* StickyListHeaderLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_1__["a" /* StickyListHeaderLayout1 */]),
                __WEBPACK_IMPORTED_MODULE_3_ion_affix__["a" /* IonAffixModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_1__["a" /* StickyListHeaderLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], StickyListHeaderLayout1Module);
    return StickyListHeaderLayout1Module;
}());

//# sourceMappingURL=sticky-list-header-layout-1.module.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAffix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapters_adapter_factory__ = __webpack_require__(779);


/**
 * Directive for creating affixed list headers. Apply it to ion-list-header and pass a reference to ion-content to it.
 *
 * @example
 * <ion-content #content>
 *     <ion-list>
 *         <ion-list-header ion-affix [content]="content">Group 1</ion-list-header>
 *         <ion-item *ngFor="let item of items">{{item}}</ion-item>
 *     </ion-list>
 * </ion-content>
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 *
 */
var IonAffix = (function () {
    function IonAffix(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onSticky = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    IonAffix.prototype.ngAfterViewInit = function () {
        var _this = this;
        // getting container
        this.scrollContainer = Object(__WEBPACK_IMPORTED_MODULE_1__adapters_adapter_factory__["a" /* adapterFactory */])(this.content);
        this.headerElement = this.element.nativeElement;
        this.containerElement = this.headerElement.parentElement;
        var headerHeight = this.headerElement.getBoundingClientRect().height;
        var right = window.innerWidth - this.headerElement.getBoundingClientRect().width - this.headerElement.getBoundingClientRect().left;
        var left = this.headerElement.getBoundingClientRect().left;
        var scrollClientTop = this.scrollContainer.getClientTop();
        var containerTop = this.containerElement.offsetTop;
        var containerBottom = containerTop + this.containerElement.getBoundingClientRect().height;
        // initially checking if affix needs to be shown
        this.updateSticky(this.scrollContainer.getScrollTop(), containerTop, containerBottom, scrollClientTop, headerHeight, left, right, true);
        var onScroll = function () {
            var scrollTop = _this.scrollContainer.getScrollTop();
            scrollClientTop = _this.scrollContainer.getClientTop();
            containerTop = _this.containerElement.offsetTop;
            containerBottom = containerTop + _this.containerElement.getBoundingClientRect().height;
            _this.updateSticky(scrollTop, containerTop, containerBottom, scrollClientTop, headerHeight, left, right, _this.scrollContainer.isScrollingDown());
        };
        // subscribing to scroll events
        this.scrollSubscription = this.scrollContainer.onScroll().subscribe(onScroll);
    };
    IonAffix.prototype.updateSticky = function (scrollTop, containerTop, containerBottom, scrollClientTop, headerHeight, left, right, downwards) {
        var _this = this;
        // check if scrollTop is within list boundaries
        if (scrollTop > 0 && scrollTop >= containerTop && scrollTop <= containerBottom) {
            if (!this.clone) {
                this.clone = this.headerElement.cloneNode(true);
                this.containerElement.insertBefore(this.clone, this.headerElement);
                this.scrollContainer.appendFixedHeader(this.headerElement);
                this.onSticky.emit({ sticky: true, affix: this });
                // for fancy transition efx if scrolling down
                if (downwards) {
                    this.applyStyles(left, right);
                }
                else {
                    this.applyStyles(0, 0);
                }
                setTimeout(function () {
                    _this.renderer.setStyle(_this.headerElement, 'right', '0px');
                    _this.renderer.setStyle(_this.headerElement, 'left', '0px');
                }, 0);
            }
            // transform vertical position to push fixed header up/down
            if (scrollTop <= containerBottom && scrollTop >= (containerBottom - headerHeight)) {
                var delta = scrollClientTop - (scrollTop - (containerBottom - headerHeight));
                this.renderer.setStyle(this.headerElement, 'transform', "translate3d(0px, " + delta + "px, 0px)");
                this.renderer.setStyle(this.headerElement, '-webkit-transform', "translate3d(0px, " + delta + "px, 0px)");
            }
            else {
                this.renderer.setStyle(this.headerElement, 'transform', "translate3d(0px, " + scrollClientTop + "px, 0px)");
                this.renderer.setStyle(this.headerElement, '-webkit-transform', "translate3d(0px, " + scrollClientTop + "px, 0px)");
            }
        }
        else {
            this.reset();
        }
    };
    IonAffix.prototype.reset = function () {
        if (this.clone) {
            this.containerElement.insertBefore(this.headerElement, this.clone);
            this.clearStyles();
            this.clone.remove();
            this.clone = null;
            this.onSticky.emit({ sticky: false, affix: this });
        }
    };
    IonAffix.prototype.applyStyles = function (left, right) {
        this.renderer.setStyle(this.headerElement, 'right', right + "px");
        this.renderer.setStyle(this.headerElement, 'left', left + "px");
        this.renderer.setStyle(this.headerElement, 'transition', 'left 0.1s ease-out, right 0.1s ease-out');
        this.renderer.setStyle(this.headerElement, 'z-index', '2');
        this.renderer.setStyle(this.headerElement, 'position', 'absolute');
        this.renderer.setStyle(this.headerElement, 'width', 'auto');
        this.renderer.setStyle(this.headerElement, 'top', '0px');
    };
    IonAffix.prototype.clearStyles = function () {
        this.renderer.removeStyle(this.headerElement, 'position');
        this.renderer.removeStyle(this.headerElement, 'z-index');
        this.renderer.removeStyle(this.headerElement, 'transition');
        this.renderer.removeStyle(this.headerElement, 'top');
        this.renderer.removeStyle(this.headerElement, 'transform');
        this.renderer.removeStyle(this.headerElement, '-webkit-transform');
        this.renderer.removeStyle(this.headerElement, 'left');
        this.renderer.removeStyle(this.headerElement, 'right');
        this.renderer.removeStyle(this.headerElement, 'width');
    };
    IonAffix.prototype.ngOnDestroy = function () {
        this.reset();
        this.scrollSubscription.unsubscribe();
    };
    IonAffix.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[ion-affix]'
                },] },
    ];
    /** @nocollapse */
    IonAffix.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], },
    ]; };
    IonAffix.propDecorators = {
        "content": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['content',] },],
        "onSticky": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    };
    return IonAffix;
}());

//# sourceMappingURL=ion-affix.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ion_affix_module__ = __webpack_require__(778);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ion_affix_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__ = __webpack_require__(765);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAffixModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__ = __webpack_require__(765);


var IonAffixModule = (function () {
    function IonAffixModule() {
    }
    IonAffixModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__["a" /* IonAffix */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__["a" /* IonAffix */]
                    ]
                },] },
    ];
    /** @nocollapse */
    IonAffixModule.ctorParameters = function () { return []; };
    return IonAffixModule;
}());

//# sourceMappingURL=ion-affix.module.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adapterFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_adapter__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scroll_adapter__ = __webpack_require__(783);



function adapterFactory(container) {
    if (container instanceof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* Content */]) {
        return new __WEBPACK_IMPORTED_MODULE_1__content_adapter__["a" /* ContentAdapter */](container);
    }
    else if (container instanceof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["x" /* Scroll */]) {
        return new __WEBPACK_IMPORTED_MODULE_2__scroll_adapter__["a" /* ScrollAdapter */](container);
    }
    throw 'Invalid container element (only ion-content and ion-scroll currently supported)';
}
//# sourceMappingURL=adapter-factory.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_merge__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_merge__);


/**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
var /**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
ContentAdapter = (function () {
    function ContentAdapter(content) {
        this.content = content;
    }
    ContentAdapter.prototype.onScroll = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].merge(this.content.ionScrollStart, this.content.ionScroll, this.content.ionScrollEnd);
    };
    ContentAdapter.prototype.getClientTop = function () {
        return this.content.getScrollElement().getBoundingClientRect().top;
    };
    ContentAdapter.prototype.getScrollTop = function () {
        return this.content.getScrollElement().scrollTop;
    };
    ContentAdapter.prototype.appendFixedHeader = function (headerElement) {
        this.content.getNativeElement().appendChild(headerElement);
    };
    ContentAdapter.prototype.isScrollingDown = function () {
        return this.content.directionY === 'down';
    };
    return ContentAdapter;
}());
/**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */

//# sourceMappingURL=content-adapter.js.map

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(782);
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(31);
rxjs_1.Observable.merge = rxjs_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(40);



/**
 * Adapter for ion-scroll.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
var /**
 * Adapter for ion-scroll.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
ScrollAdapter = (function () {
    function ScrollAdapter(scroll) {
        this.scroll = scroll;
        this.scrollingDown = false;
    }
    ScrollAdapter.prototype.onScroll = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].fromEvent(this.scroll._scrollContent.nativeElement, 'scroll')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function () { return _this.getScrollTop(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["pairwise"])(), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (scrollTops) { return _this.scrollingDown = scrollTops[0] - scrollTops[1] < 0; }));
    };
    ScrollAdapter.prototype.getClientTop = function () {
        return 0;
    };
    ScrollAdapter.prototype.getScrollTop = function () {
        return this.scroll._scrollContent.nativeElement.scrollTop;
    };
    ScrollAdapter.prototype.appendFixedHeader = function (headerElement) {
        this.scroll._scrollContent.nativeElement.parentElement.appendChild(headerElement);
    };
    ScrollAdapter.prototype.isScrollingDown = function () {
        return this.scrollingDown;
    };
    return ScrollAdapter;
}());
/**
 * Adapter for ion-scroll.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */

//# sourceMappingURL=scroll-adapter.js.map

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(785);
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(31);
rxjs_1.Observable.fromEvent = rxjs_1.fromEvent;
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyListHeaderLayout1; });
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


var StickyListHeaderLayout1 = /** @class */ (function () {
    function StickyListHeaderLayout1() {
        this.slider = {};
    }
    StickyListHeaderLayout1.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    StickyListHeaderLayout1.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], StickyListHeaderLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], StickyListHeaderLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], StickyListHeaderLayout1.prototype, "content", void 0);
    StickyListHeaderLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sticky-list-header-layout-1',template:/*ion-inline-start:"/var/www/html/surjeet-project1/mobile/src/components/list-view/sticky-list-header/layout-1/sticky-list-header.html"*/'<!-- Theme Sticky List Header - Basic -->\n\n<ion-content>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-list no-margin *ngFor="let item of data.items">\n\n            <!-- Header Top -->\n\n            <ion-item-divider text-capitalize no-margin no-lines header-title ion-affix\n\n              [content]="content">{{item.groupName}}\n\n            </ion-item-divider>\n\n            <ion-row>\n\n              <ion-col col-12 col-md-3 *ngFor="let element of item.items">\n\n                <ion-card no-margin (click)="onEvent(\'onItemClick\', element.title, $event)">\n\n                  <!-- Avatar -->\n\n                  <img [src]="element.image" alt="{{element.title}}" />\n\n                  <ion-card-content>\n\n                    <!-- Title -->\n\n                    <h2 item-title text-capitalize>{{element.title}}</h2>\n\n                    <ion-icon icon-medium name="time"></ion-icon>1h 50min\n\n                    <ion-icon icon-medium name="pie"></ion-icon> 6 Servings\n\n                    <ion-icon icon-medium name="stats"></ion-icon> 456 cals\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/var/www/html/surjeet-project1/mobile/src/components/list-view/sticky-list-header/layout-1/sticky-list-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StickyListHeaderLayout1);
    return StickyListHeaderLayout1;
}());

//# sourceMappingURL=sticky-list-header-layout-1.js.map

/***/ })

});
//# sourceMappingURL=6.js.map