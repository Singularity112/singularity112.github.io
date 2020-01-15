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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-post-list></app-post-list>\n\n"

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
        this.title = 'privatbank';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _posts_post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/post/post.component */ "./src/app/posts/post/post.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_short_desc_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/short-desc.pipe */ "./src/app/pipes/short-desc.pipe.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__["PostListComponent"],
                _posts_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"],
                _pipes_short_desc_pipe__WEBPACK_IMPORTED_MODULE_7__["ShortDescPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pipes/short-desc.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/short-desc.pipe.ts ***!
  \******************************************/
/*! exports provided: ShortDescPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortDescPipe", function() { return ShortDescPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShortDescPipe = /** @class */ (function () {
    function ShortDescPipe() {
    }
    ShortDescPipe.prototype.transform = function (value, textSize) {
        var formated = value.length > textSize ? value.substring(0, textSize) : value;
        return formated + '...';
    };
    ShortDescPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'shortDesc' })
    ], ShortDescPipe);
    return ShortDescPipe;
}());



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n    grid-auto-rows: 200px;\r\n    grid-gap: 15px;\r\n}\r\n\r\n.pagination {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-top: 50px;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.pag-item {\r\n    cursor: pointer;\r\n    border: 1px solid black;\r\n    padding: 5px;\r\n    font-size: 15px;\r\n    font-family: sans-serif;\r\n    margin-right: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XHJcbiAgICBncmlkLWdhcDogMTVweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZy1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    Last clicked post: {{lastClicked}}\n</div>\n\n<div class=\"post-list\">\n  <app-post *ngFor=\"let post of postsInCurrentPage\"\n            description={{post.body}} \n            title={{post.title}}\n            id={{post.id}}\n            (clicked)=\"onClicked($event)\">\n    </app-post>\n</div>\n\n<div class=\"pagination\">\n    <div class=\"pag-item\" (click)=\"showPostsInPage(1)\">\n        first\n    </div>\n    <div class=\"pag-item\" *ngFor=\"let page of ' '.repeat(pages).split(''), let i = index\" (click)=\"showPostsInPage(i + 1)\">\n        {{i + 1}}\n    </div>\n    <div class=\"pag-item\" (click)=\"showPostsInPage(pages)\">\n        last\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/post.service */ "./src/app/posts/service/post.service.ts");



var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService) {
        this.postService = postService;
        this.currentPage = 1;
        this.postsInPage = 10;
        this.firstPage = 1;
    }
    PostListComponent.prototype.ngOnInit = function () {
        this.initPosts();
    };
    PostListComponent.prototype.initPosts = function () {
        var _this = this;
        var subscribe = this.postService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
            _this.showPostsInPage(1);
            _this.calculatePages();
            subscribe.unsubscribe();
        });
    };
    PostListComponent.prototype.showPostsInPage = function (page) {
        var _this = this;
        this.postsInCurrentPage = this.posts.filter(function (post) { return post.id > _this.postsInPage * (page - 1) && post.id <= _this.postsInPage * page; });
    };
    PostListComponent.prototype.calculatePages = function () {
        this.pages = Math.ceil(this.posts.length / this.postsInPage);
    };
    PostListComponent.prototype.onClicked = function (id) {
        this.lastClicked = id;
    };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/posts/post/post.component.css":
/*!***********************************************!*\
  !*** ./src/app/posts/post/post.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post {\r\n    padding: 10px 20px;\r\n    border: 1px solid lightgray;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    font-family: sans-serif;\r\n    background: white;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.post-title {\r\n    font-size: 18px;\r\n    color: black;\r\n}\r\n\r\n.post-description {\r\n    font-size: 14px;\r\n    color: black;\r\n    margin-top: auto;\r\n}\r\n\r\n.post-button {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    margin-top: 10px;\r\n    background: blue;\r\n    color: white;\r\n    font-size: 12px;\r\n    line-height: 12px;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5wb3N0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBvc3QtZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuLnBvc3QtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/posts/post/post.component.html":
/*!************************************************!*\
  !*** ./src/app/posts/post/post.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post\">\n  <div class=\"post-title\">\n    {{ title || 'No Title' }}\n  </div>\n  <div class=\"post-description\">\n    {{ description | shortDesc : 45 }}\n  </div>\n  <div class=\"post-button\" (click)=\"onClick(id)\">\n    trigger onclick, id: {{ id }}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/posts/post/post.component.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/post/post.component.ts ***!
  \**********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostComponent = /** @class */ (function () {
    function PostComponent() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.onClick = function (id) {
        this.clicked.emit(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PostComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PostComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PostComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "clicked", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/posts/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/posts/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/service/post.service.ts":
/*!***********************************************!*\
  !*** ./src/app/posts/service/post.service.ts ***!
  \***********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.protocol = 'https://';
        this.base = 'jsonplaceholder.typicode.com';
        this.postsUrl = '/posts';
    }
    PostService.prototype.getPosts = function () {
        return this.http.get(this.protocol + this.base + this.postsUrl);
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
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

module.exports = __webpack_require__(/*! D:\angular-new\privatbank\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map