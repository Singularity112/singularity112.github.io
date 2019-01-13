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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid></app-grid>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'Sudoku';
        document.body.style.background = '#f0f0f0';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cell.ts":
/*!*************************!*\
  !*** ./src/app/cell.ts ***!
  \*************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var Cell = /** @class */ (function () {
    function Cell(val, position) {
        this.similar = false;
        this.prediction = [];
        this.nonUsedPredictions = [];
        this.allowedRowSections = [];
        this.allowedRowPositions = [];
        this.allowedColSections = [];
        this.allowedColPositions = [];
        this.val = val;
        this.position = position;
        this.setPrediction();
    }
    Cell.prototype.setPrediction = function () {
        if (this.val) {
            return;
        }
        for (var i = 1; i <= 9; i++) {
            this.prediction.push(i);
        }
        this.refreshPredictions();
    };
    Cell.prototype.setNumber = function () {
        if (this.prediction.length === 1) {
            this.val = this.prediction[0];
        }
    };
    Cell.prototype.removePrediction = function (prediction) {
        this.nonUsedPredictions.push(prediction);
        this.refreshPredictions();
    };
    Cell.prototype.refreshPredictions = function () {
        var self = this;
        this.prediction = this.prediction.filter(function (el) {
            return !self.nonUsedPredictions.includes(el);
        });
        this.prediction = Array.from(new Set(this.prediction));
    };
    Cell.prototype.setAllowedRowSections = function (sections) {
        this.allowedRowSections = sections;
    };
    Cell.prototype.setAlloweRowPositions = function (positions) {
        this.allowedRowPositions = positions;
    };
    Cell.prototype.setAllowedColSections = function (sections) {
        this.allowedColSections = sections;
    };
    Cell.prototype.setAllowedColPositions = function (positions) {
        this.allowedColPositions = positions;
    };
    return Cell;
}());



/***/ }),

/***/ "./src/app/grid/grid.component.html":
/*!******************************************!*\
  !*** ./src/app/grid/grid.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"grid\" (click) = 'start();'>\n\t<div class=\"section\" *ngFor='let section of sections;'>\n\t\t<div *ngFor = 'let cell of section.cells' class = \"cell similar-{{cell.similar}}\" (click) = 'showSimilar(cell.val);'>\n\t\t\t{{cell.val == 0  ? '' : cell.val}}\n\n\t\t\t<div [hidden]= '!cell.prediction && cell.val == 0' *ngFor = 'let prediction of cell.prediction' class = \"prediction-{{prediction}} prediction\">\n\t\t\t\t{{prediction}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>"

/***/ }),

/***/ "./src/app/grid/grid.component.scss":
/*!******************************************!*\
  !*** ./src/app/grid/grid.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Sarabun\");\n#grid {\n  font-family: 'Sarabun', sans-serif;\n  width: auto;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n#grid .section {\n    display: grid;\n    grid-template-columns: repeat(3, 60px);\n    grid-template-rows: repeat(3, 60px);\n    grid-gap: 5px; }\n#grid .section:nth-child(even) .cell {\n      background: #4c4c4c;\n      color: white; }\n#grid .section:nth-child(5) .cell {\n      background: #4c4c4c;\n      color: white; }\n#grid .section .cell.similar-true {\n      background: lightgreen;\n      color: black; }\n#grid .cell {\n    border: 1px solid #bfbfbf;\n    position: relative;\n    font-size: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: white;\n    font-weight: 500;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n#grid .cell.similar-true {\n      background: lightgreen;\n      color: black; }\n#grid .prediction-1 {\n    top: 5px;\n    left: 5px; }\n#grid .prediction-2 {\n    top: 5px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n#grid .prediction-3 {\n    top: 5px;\n    right: 5px; }\n#grid .prediction-4 {\n    top: 50%;\n    left: 5px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n#grid .prediction-5 {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n#grid .prediction-6 {\n    top: 50%;\n    right: 5px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n#grid .prediction-7 {\n    bottom: 5px;\n    left: 5px; }\n#grid .prediction-8 {\n    bottom: 5px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n#grid .prediction-9 {\n    bottom: 5px;\n    right: 5px; }\n#grid .prediction {\n    color: lightgray;\n    height: 10px;\n    font-size: 15px;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC9DOlxcU3Vkb2t1XFxTdWRva3Uvc3JjXFxhcHBcXGdyaWRcXGdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQVk7QUFFWjtFQUNDLG1DQUFrQztFQUNsQyxZQUFXO0VBQ1gsY0FBYTtFQUNiLHNDQUFxQztFQUNyQyxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QseUNBQWdDO1VBQWhDLGlDQUFnQyxFQXdHaEM7QUFqSEQ7SUFZRSxjQUFhO0lBQ2IsdUNBQXNDO0lBQ3RDLG9DQUFtQztJQUNuQyxjQUFhLEVBb0JiO0FBbkNGO01BbUJJLG9CQUFtQjtNQUNuQixhQUFZLEVBQ1o7QUFyQko7TUEwQkksb0JBQW1CO01BQ25CLGFBQVksRUFDWjtBQTVCSjtNQWdDRyx1QkFBc0I7TUFDdEIsYUFBWSxFQUNaO0FBbENIO0lBc0NFLDBCQUF5QjtJQUN6QixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2QixrQkFBaUI7SUFDakIsaUJBQWdCO0lBQ2hCLHlFQUFrRSxFQU1sRTtBQXBERjtNQWlERyx1QkFBc0I7TUFDdEIsYUFBWSxFQUNaO0FBbkRIO0lBdURFLFNBQVE7SUFDUixVQUFTLEVBQ1Q7QUF6REY7SUE0REUsU0FBUTtJQUNSLFVBQVM7SUFDVCxvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQzNCO0FBL0RGO0lBa0VFLFNBQVE7SUFDUixXQUFVLEVBQ1Y7QUFwRUY7SUF1RUUsU0FBUTtJQUNSLFVBQVM7SUFDVCxvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQzNCO0FBMUVGO0lBNkVFLFNBQVE7SUFDUixVQUFTO0lBQ1QseUNBQWdDO1lBQWhDLGlDQUFnQyxFQUNoQztBQWhGRjtJQW1GRSxTQUFRO0lBQ1IsV0FBVTtJQUNWLG9DQUEyQjtZQUEzQiw0QkFBMkIsRUFDM0I7QUF0RkY7SUF5RkUsWUFBVztJQUNYLFVBQVMsRUFDVDtBQTNGRjtJQThGRSxZQUFXO0lBQ1gsVUFBUztJQUNULG9DQUEyQjtZQUEzQiw0QkFBMkIsRUFDM0I7QUFqR0Y7SUFvR0UsWUFBVztJQUNYLFdBQVUsRUFDVjtBQXRHRjtJQXlHRSxpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsd0JBQXVCLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TYXJhYnVuJyk7XHJcblxyXG4jZ3JpZHtcclxuXHRmb250LWZhbWlseTogJ1NhcmFidW4nLCBzYW5zLXNlcmlmO1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuXHRncmlkLWdhcDogMTVweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuXHQuc2VjdGlvbntcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA2MHB4KTtcclxuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDYwcHgpO1xyXG5cdFx0Z3JpZC1nYXA6IDVweDtcclxuXHJcblx0XHQmOm50aC1jaGlsZChldmVuKXtcclxuXHRcdFx0LmNlbGx7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzRjNGM0YztcclxuXHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQmOm50aC1jaGlsZCg1KXtcclxuXHRcdFx0LmNlbGx7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzRjNGM0YztcclxuXHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuY2VsbC5zaW1pbGFyLXRydWV7XHJcblx0XHRcdGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcblx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jZWxse1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGZvbnQtc2l6ZTogMzJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcblxyXG5cdFx0Ji5zaW1pbGFyLXRydWV7XHJcblx0XHRcdGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcblx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5wcmVkaWN0aW9uLTF7XHJcblx0XHR0b3A6IDVweDtcclxuXHRcdGxlZnQ6IDVweDtcclxuXHR9XHJcblxyXG5cdC5wcmVkaWN0aW9uLTJ7XHJcblx0XHR0b3A6IDVweDtcclxuXHRcdGxlZnQ6IDUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHR9XHJcblxyXG5cdC5wcmVkaWN0aW9uLTN7XHJcblx0XHR0b3A6IDVweDtcclxuXHRcdHJpZ2h0OiA1cHg7XHJcblx0fVxyXG5cclxuXHQucHJlZGljdGlvbi00e1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRsZWZ0OiA1cHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0fVxyXG5cclxuXHQucHJlZGljdGlvbi01e1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR9XHJcblxyXG5cdC5wcmVkaWN0aW9uLTZ7XHJcblx0XHR0b3A6IDUwJTtcclxuXHRcdHJpZ2h0OiA1cHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0fVxyXG5cclxuXHQucHJlZGljdGlvbi03e1xyXG5cdFx0Ym90dG9tOiA1cHg7XHJcblx0XHRsZWZ0OiA1cHg7XHJcblx0fVxyXG5cclxuXHQucHJlZGljdGlvbi04e1xyXG5cdFx0Ym90dG9tOiA1cHg7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0fVxyXG5cclxuXHQucHJlZGljdGlvbi05e1xyXG5cdFx0Ym90dG9tOiA1cHg7XHJcblx0XHRyaWdodDogNXB4O1xyXG5cdH1cclxuXHJcblx0LnByZWRpY3Rpb257XHJcblx0XHRjb2xvcjogbGlnaHRncmF5O1xyXG5cdFx0aGVpZ2h0OiAxMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/grid/grid.component.ts":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cell */ "./src/app/cell.ts");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section */ "./src/app/section.ts");




var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.Rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
        this.Cols = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
        this.matrix = [
            [[4, 2, 7],
                [9, 0, 5],
                [6, 0, 3]],
            [[1, 0, 0],
                [0, 0, 6],
                [0, 0, 0]],
            [[0, 6, 8],
                [3, 0, 0],
                [1, 0, 0]],
            [[2, 0, 0],
                [3, 4, 0],
                [8, 0, 1]],
            [[0, 1, 0],
                [0, 6, 7],
                [0, 5, 0]],
            [[4, 0, 0],
                [0, 5, 1],
                [0, 2, 0]],
            [[0, 9, 0],
                [7, 0, 4],
                [0, 3, 2]],
            [[0, 0, 0],
                [3, 0, 0],
                [0, 9, 4]],
            [[7, 3, 0],
                [2, 0, 9],
                [6, 0, 0]]
        ];
        this.sections = [];
    }
    GridComponent.prototype.setSection = function () {
        var self = this;
        self.matrix.forEach(function (Mval, Mindex) {
            var section = [];
            var position = 0;
            Mval.forEach(function (sectionVal, sectionIndex) {
                sectionVal.forEach(function (cellVal, cellIndex) {
                    section.push(new _cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](cellVal, position));
                    position++;
                });
            });
            self.sections.push(new _section__WEBPACK_IMPORTED_MODULE_3__["Section"](section, Mindex));
        });
    };
    GridComponent.prototype.setValue = function (value, section, position) {
        this.sections[section].setValue(value, position);
    };
    GridComponent.prototype.showSimilar = function (val) {
        this.sections.forEach(function (section) {
            section.showSimilar(val);
        });
    };
    GridComponent.prototype.removePrediction = function (prediction, section, position) {
        this.sections[section].cells[position].removePrediction(prediction);
    };
    GridComponent.prototype.setAllowedRows = function () {
        var self = this;
        this.sections.forEach(function (section, secIndex) {
            section.cells.forEach(function (cell, cellIndex) {
                if (cell.val) {
                    return;
                }
                var position = cell.position;
                var allowedSections;
                var allowedPositions;
                for (var _i = 0, _a = self.Rows; _i < _a.length; _i++) {
                    var el = _a[_i];
                    if (el.includes(secIndex)) {
                        allowedSections = el;
                        break;
                    }
                }
                for (var _b = 0, _c = self.Rows; _b < _c.length; _b++) {
                    var el = _c[_b];
                    if (el.includes(position)) {
                        allowedPositions = el;
                        break;
                    }
                }
                cell.setAlloweRowPositions(allowedPositions);
                cell.setAllowedRowSections(allowedSections);
            });
        });
    };
    GridComponent.prototype.setAllowedCols = function () {
        var self = this;
        this.sections.forEach(function (section, secIndex) {
            section.cells.forEach(function (cell, cellIndex) {
                if (cell.val) {
                    return;
                }
                var position = cell.position;
                var allowedSections;
                var allowedPositions;
                for (var _i = 0, _a = self.Cols; _i < _a.length; _i++) {
                    var el = _a[_i];
                    if (el.includes(secIndex)) {
                        allowedSections = el;
                        break;
                    }
                }
                for (var _b = 0, _c = self.Cols; _b < _c.length; _b++) {
                    var el = _c[_b];
                    if (el.includes(position)) {
                        allowedPositions = el;
                        break;
                    }
                }
                cell.setAllowedColPositions(allowedPositions);
                cell.setAllowedColSections(allowedSections);
            });
        });
    };
    GridComponent.prototype.makeRowPredictions = function () {
        var self = this;
        this.sections.forEach(function (section, secIndex) {
            section.cells.forEach(function (cell, cellIndex) {
                if (cell.val) {
                    cell.removePrediction(cell.val);
                    return;
                }
                var usedNumbers = [];
                cell.allowedRowSections.forEach(function (section, secIndex) {
                    cell.allowedRowPositions.forEach(function (pos, cellIndex) {
                        usedNumbers.push(self.sections[section].cells[pos].val);
                    });
                });
                usedNumbers = Array.from(new Set(usedNumbers));
                usedNumbers.forEach(function (el) {
                    cell.removePrediction(el);
                });
            });
        });
    };
    GridComponent.prototype.makeColPredictions = function () {
        var self = this;
        this.sections.forEach(function (section, secIndex) {
            section.cells.forEach(function (cell, cellIndex) {
                if (cell.val) {
                    cell.removePrediction(cell.val);
                    return;
                }
                var usedNumbers = [];
                cell.allowedColSections.forEach(function (section, secIndex) {
                    cell.allowedColPositions.forEach(function (pos, cellIndex) {
                        usedNumbers.push(self.sections[section].cells[pos].val);
                    });
                });
                usedNumbers = Array.from(new Set(usedNumbers));
                usedNumbers.forEach(function (el) {
                    cell.removePrediction(el);
                });
            });
        });
    };
    GridComponent.prototype.setNumbers = function () {
        this.sections.forEach(function (section, secIndex) {
            section.cells.forEach(function (cell, cellIndex) {
                if (cell.val) {
                    return;
                }
                cell.setNumber();
            });
        });
    };
    GridComponent.prototype.makeSectionPrediction = function () {
        this.sections.forEach(function (section, secIndex) {
            section.cells.forEach(function (cell, cellIndex) {
                if (cell.val) {
                    return;
                }
                var sectionNumbers = [];
                section.cells.forEach(function (checkedCell, cellIndex) {
                    sectionNumbers.push(checkedCell.val);
                });
                sectionNumbers = Array.from(new Set(sectionNumbers));
                sectionNumbers.forEach(function (el) {
                    cell.removePrediction(el);
                });
            });
        });
    };
    GridComponent.prototype.CompleteSudoku = function () {
        var self = this;
        var emptyCells = 1;
        var iterations = 100;
        var empty = 1;
        while (empty > 0 && iterations > 0) {
            self.makeRowPredictions();
            self.makeColPredictions();
            self.makeSectionPrediction();
            self.setNumbers();
            empty = 0;
            iterations--;
            this.sections.forEach(function (section, secIndex) {
                empty += section.getNumberOfEmpty();
            });
        }
    };
    GridComponent.prototype.start = function () {
        var _this = this;
        this.setAllowedRows();
        this.setAllowedCols();
        setTimeout(function (e) {
            _this.makeRowPredictions();
        }, 2000);
        setTimeout(function (e) {
            _this.makeColPredictions();
        }, 5000);
        this.makeSectionPrediction();
        setTimeout(function (e) {
            _this.CompleteSudoku();
            _this.setNumbers();
        }, 6000);
    };
    GridComponent.prototype.ngOnInit = function () {
        this.setSection();
    };
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/grid/grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/section.ts":
/*!****************************!*\
  !*** ./src/app/section.ts ***!
  \****************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
var Section = /** @class */ (function () {
    function Section(cells, position) {
        this.cells = cells;
        this.position = position;
    }
    Section.prototype.resetSimilar = function () {
        this.cells.forEach(function (cell) {
            cell.similar = false;
        });
    };
    Section.prototype.showSimilar = function (val) {
        this.resetSimilar();
        this.cells.forEach(function (cell) {
            if (cell.val == val) {
                cell.similar = true;
            }
            else {
                cell.similar = false;
            }
        });
    };
    Section.prototype.setValue = function (value, position) {
        this.cells[position].val = value;
    };
    Section.prototype.getNumberOfEmpty = function () {
        var empty = 0;
        this.cells.forEach(function (el) {
            if (el.val) {
                empty++;
            }
        });
        return empty;
    };
    return Section;
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

module.exports = __webpack_require__(/*! C:\Sudoku\Sudoku\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map