(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card-list></card-list>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'image-tooltips';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-list/card-list.component */ "./src/app/card-list/card-list.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _image_details_image_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-details/image-details.component */ "./src/app/image-details/image-details.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_5__["CardListComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _image_details_image_details_component__WEBPACK_IMPORTED_MODULE_7__["ImageDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-list/card-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/card-list/card-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, 300px);\r\n    grid-auto-rows: 300px;\r\n    grid-gap: 30px;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.add-image {\r\n    background-color: white;\r\n    border-radius: 40px;\r\n    box-shadow: 2px 4px 10px rgba(0,0,0,.2);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1saXN0L2NhcmQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztJQUMvQyxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jYXJkLWxpc3QvY2FyZC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDMwMHB4KTtcclxuICAgIGdyaWQtYXV0by1yb3dzOiAzMDBweDtcclxuICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYWRkLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggMTBweCByZ2JhKDAsMCwwLC4yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/card-list/card-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/card-list/card-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-list\">\n    <card *ngFor=\"let card of cards\" \n    [cardobj]=\"card\"\n    (onCardClick)=\"openDetails($event)\"></card>\n  \n    <div class=\"add-image\" (click)=\"openDetails(defaultCard)\">\n      ADD IMAGE\n    </div>\n  </div>\n</div>\n\n<image-details \n[isOpen]=\"isDetailsOpen\"\n(onClose)=\"changeImage($event)\"\n[cardobj]=\"currentCard\"\n[isNew]=\"isNew\"\n> </image-details>"

/***/ }),

/***/ "./src/app/card-list/card-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-list/card-list.component.ts ***!
  \**************************************************/
/*! exports provided: CardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListComponent", function() { return CardListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_card_list_service_card_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/card-list-service/card-list.service */ "./src/app/services/card-list-service/card-list.service.ts");



var CardListComponent = /** @class */ (function () {
    function CardListComponent(cardService) {
        this.cardService = cardService;
        this.isDetailsOpen = false;
        this.cards = [];
        this.isNew = false;
        this.defaultCard = {
            image: 'https://via.placeholder.com/300',
            top: '20px',
            left: '30px',
            text: 'tooltip',
            color: '#ffffff'
        };
    }
    CardListComponent.prototype.openDetails = function (item) {
        this.isNew = item === this.defaultCard ? true : false;
        this.currentCard = this.isNew ? Object.assign({}, item) : item;
        this.isDetailsOpen = true;
    };
    CardListComponent.prototype.changeImage = function (data) {
        if (data.action === 'delete') {
            this.cards = this.cards.filter(function (obj) {
                return obj !== data.card;
            });
        }
        if (data.isNew) {
            this.cards.push(data.card);
        }
        this.isDetailsOpen = data.state;
        this.cardService.saveCards(this.cards).subscribe(function (res) {
            console.log(res);
        });
    };
    // probably this will be async call
    CardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardService.getCards().subscribe(function (cards) {
            _this.cards = cards;
        });
        this.currentCard = this.defaultCard;
    };
    CardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card-list',
            template: __webpack_require__(/*! ./card-list.component.html */ "./src/app/card-list/card-list.component.html"),
            styles: [__webpack_require__(/*! ./card-list.component.css */ "./src/app/card-list/card-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_card_list_service_card_list_service__WEBPACK_IMPORTED_MODULE_2__["CardListService"]])
    ], CardListComponent);
    return CardListComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    background-color: white;\r\n    border-radius: 40px;\r\n    box-shadow: 2px 4px 10px rgba(0,0,0,.2);\r\n    position: relative;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    min-width: 300px;\r\n    min-height: 300px;\r\n}\r\n\r\n.card-image {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;    \r\n}\r\n\r\n.card-image img {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.card,\r\n.card-image, \r\n.card-image img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.card-tooltip {\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 30px;\r\n    opacity: 0;\r\n    -webkit-transition-delay: 0;\r\n            transition-delay: 0;\r\n}\r\n\r\n.card-tooltip-container {\r\n    position: absolute;\r\n    z-index: 5;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    background-color: rgba(0,0,0,.4);\r\n    color: white;\r\n    font-size: 25px;\r\n    -webkit-transition-duration: 0.1s;\r\n            transition-duration: 0.1s;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.card:hover .card-tooltip-container {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.card:hover .card-tooltip {\r\n    opacity: 1;\r\n    -webkit-transition-delay: 0.1s;\r\n            transition-delay: 0.1s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDViwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCAxMHB4IHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDsgICAgXHJcbn1cclxuXHJcbi5jYXJkLWltYWdlIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQsXHJcbi5jYXJkLWltYWdlLCBcclxuLmNhcmQtaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC10b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMDtcclxufVxyXG5cclxuLmNhcmQtdG9vbHRpcC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC40KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmNhcmQtdG9vbHRpcC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5jYXJkLXRvb2x0aXAge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" (click)=\"cardClick()\">\n  <div class=\"card-image\">\n    <img src=\"{{cardobj.image}}\" alt=\"\">\n  </div>\n  <div class=\"card-tooltip-container\">\n    <div class=\"card-tooltip\" [ngStyle]=\"{'top' : cardobj.top, 'left': cardobj.left, 'color' : cardobj.color}\">\n      {{cardobj.text}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.onCardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardComponent.prototype.cardClick = function () {
        this.onCardClick.emit(this.cardobj);
    };
    CardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "cardobj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CardComponent.prototype, "onCardClick", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/image-details/image-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/image-details/image-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-details-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: none;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    z-index: 10;\r\n    background-color: rgba(0,0,0,.4);\r\n}\r\n\r\n.image-details-container.open {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.data-col {\r\n    margin-top: 10px;\r\n}\r\n\r\n.row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.container {\r\n    padding: 30px;\r\n    background-color: white;\r\n}\r\n\r\n.close {\r\n    cursor: pointer;\r\n    padding: 10px 0;\r\n    font-size: 18px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    border: 2px solid black;\r\n}\r\n\r\n.delete {\r\n    cursor: pointer;\r\n    padding: 10px 0;\r\n    font-size: 18px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    border: 2px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtZGV0YWlscy9pbWFnZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLWRldGFpbHMvaW1hZ2UtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC40KTtcclxufVxyXG5cclxuLmltYWdlLWRldGFpbHMtY29udGFpbmVyLm9wZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmRhdGEtY29sIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/image-details/image-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/image-details/image-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-details-container\" [class.open]=\"isOpen\">\n  <div class=\"container row\">\n    <div class=\"image-col\">\n      <card [cardobj]=\"cardobj\"></card>\n    </div>\n    <div class=\"data-col\">\n      <label>\n        Tooltip text\n        <input type=\"text\" [(ngModel)]=\"cardobj.text\">\n      </label>\n      <hr>\n      <label>\n        Tooltip color\n        <input [(colorPicker)]=\"cardobj.color\" [style.background]=\"cardobj.color\">\n      </label>\n      <hr>\n      <label>\n        Tooltip offset top\n        <input type=\"text\" [(ngModel)]=\"cardobj.top\">\n      </label>\n      <hr>\n      <label>\n        Tooltip offset left\n        <input type=\"text\" [(ngModel)]=\"cardobj.left\">\n      </label>\n      <hr>\n      <label>\n        image\n        <input type=\"file\" (change)=\"uploadFile($event)\">\n      </label>\n      <div class=\"close\" (click)=\"save()\">\n        SAVE\n      </div>\n      <div class=\"delete\" (click)=\"delete()\" [hidden]=\"isNew\">\n        DELETE\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/image-details/image-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/image-details/image-details.component.ts ***!
  \**********************************************************/
/*! exports provided: ImageDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailsComponent", function() { return ImageDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageDetailsComponent = /** @class */ (function () {
    function ImageDetailsComponent() {
        this.isOpen = false;
        this.isNew = false;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ImageDetailsComponent.prototype.save = function () {
        this.closeModal();
        this.onClose.emit({
            card: this.cardobj,
            isNew: this.isNew,
            state: this.isOpen,
            action: null
        });
    };
    ImageDetailsComponent.prototype.delete = function () {
        this.closeModal();
        this.onClose.emit({
            card: this.cardobj,
            state: this.isOpen,
            action: 'delete'
        });
    };
    ImageDetailsComponent.prototype.closeModal = function () {
        this.isOpen = false;
    };
    ImageDetailsComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var reader;
        reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (e) {
            _this.cardobj.image = e.target.result;
        };
    };
    ImageDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ImageDetailsComponent.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageDetailsComponent.prototype, "cardobj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ImageDetailsComponent.prototype, "isNew", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ImageDetailsComponent.prototype, "onClose", void 0);
    ImageDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'image-details',
            template: __webpack_require__(/*! ./image-details.component.html */ "./src/app/image-details/image-details.component.html"),
            styles: [__webpack_require__(/*! ./image-details.component.css */ "./src/app/image-details/image-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageDetailsComponent);
    return ImageDetailsComponent;
}());



/***/ }),

/***/ "./src/app/services/card-list-service/card-list.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/card-list-service/card-list.service.ts ***!
  \*****************************************************************/
/*! exports provided: CardListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListService", function() { return CardListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



// import { HttpClient } from '@angular/common/http';
var CardListService = /** @class */ (function () {
    // private http: HttpClient
    function CardListService() {
        this.exampleCardsResponse = [
            {
                image: 'https://wwmt.com/resources/media/5a03e514-9fd4-4aef-b381-2ea1203c4ee0-large16x9_MGN_1280x720_81029P00CBPHG.jpg?1567013387771',
                text: 'tooltip',
                top: '20px',
                left: '30px',
                color: '#ffffff'
            },
            {
                image: 'https://cdn.royalcanin-weshare-online.io/5iJXPmYBaxEApS7LZga1/v1/ec7a-your-guide-to-buying-a-kitten-article-cat',
                text: 'sadfsamfsa',
                top: '70px',
                left: '90px',
                color: '#444444'
            },
            {
                image: 'https://wwmt.com/resources/media/5a03e514-9fd4-4aef-b381-2ea1203c4ee0-large16x9_MGN_1280x720_81029P00CBPHG.jpg?1567013387771',
                text: 'tooltip',
                top: '20px',
                left: '30px',
                color: '#ffffff'
            },
            {
                image: 'https://cdn.royalcanin-weshare-online.io/5iJXPmYBaxEApS7LZga1/v1/ec7a-your-guide-to-buying-a-kitten-article-cat',
                text: 'sadfsamfsa',
                top: '70px',
                left: '90px',
                color: '#444444'
            },
            {
                image: 'https://wwmt.com/resources/media/5a03e514-9fd4-4aef-b381-2ea1203c4ee0-large16x9_MGN_1280x720_81029P00CBPHG.jpg?1567013387771',
                text: 'tooltip',
                top: '20px',
                left: '30px',
                color: '#ffffff'
            },
            {
                image: 'https://cdn.royalcanin-weshare-online.io/5iJXPmYBaxEApS7LZga1/v1/ec7a-your-guide-to-buying-a-kitten-article-cat',
                text: 'sadfsamfsa',
                top: '70px',
                left: '90px',
                color: '#444444'
            },
        ];
    }
    CardListService.prototype.getCards = function () {
        // return this.http.get('/api/cards');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.exampleCardsResponse);
    };
    CardListService.prototype.saveCards = function (cards) {
        // return this.http.post('/api/save', cards);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('success');
    };
    CardListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardListService);
    return CardListService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular-image\image-tooltips\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map