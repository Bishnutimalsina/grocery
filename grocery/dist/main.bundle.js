webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: "<router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_activity_indicator_component__ = __webpack_require__("../../../../../src/app/components/activity-indicator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_grocery_list_component__ = __webpack_require__("../../../../../src/app/pages/list/grocery-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_item_status_pipe__ = __webpack_require__("../../../../../src/app/pages/list/item-status.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ].concat(__WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* navigatableComponents */], [
                __WEBPACK_IMPORTED_MODULE_7__components_activity_indicator_component__["a" /* ActivityIndicator */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_grocery_list_component__["a" /* GroceryList */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_item_status_pipe__["a" /* ItemStatusPipe */]
            ]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routing__["b" /* routes */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigatableComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_list_list_component__ = __webpack_require__("../../../../../src/app/pages/list/list.component.ts");


var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_0__pages_login_login_component__["a" /* LoginComponent */] },
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_1__pages_list_list_component__["a" /* ListComponent */] }
];
var navigatableComponents = [
    __WEBPACK_IMPORTED_MODULE_0__pages_login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_1__pages_list_list_component__["a" /* ListComponent */]
];


/***/ }),

/***/ "../../../../../src/app/components/activity-indicator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityIndicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivityIndicator = (function () {
    function ActivityIndicator() {
        this.isLoading = false;
        this.message = "Loading";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("isLoading"),
        __metadata("design:type", Object)
    ], ActivityIndicator.prototype, "isLoading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("message"),
        __metadata("design:type", Object)
    ], ActivityIndicator.prototype, "message", void 0);
    ActivityIndicator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "activity-indicator",
            template: "\n    <div [class.hidden]=\"!isLoading\">\n      <img src=\"./assets/loading.gif\">\n      <span>{{ message }}</span>\n    </div>\n  ",
            styles: ["\n    div {\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      padding: 0.5em;\n      background: white;\n      border: solid 1px #c8cccf;\n      border-width: 1px 0 0 1px;\n      display: flex;\n    }\n    img {\n      height: 50px;\n    }\n    span {\n      line-height: 50px;\n    }\n  "]
        })
    ], ActivityIndicator);
    return ActivityIndicator;
}());



/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });




/***/ }),

/***/ "../../../../../src/app/pages/list/grocery-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceryList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_grocery_grocery_list_service__ = __webpack_require__("../../../../../src/app/shared/grocery/grocery-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroceryList = (function () {
    function GroceryList(store) {
        this.store = store;
        this.loaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    GroceryList.prototype.ngOnInit = function () {
        var _this = this;
        this.store.load()
            .subscribe(function () { return _this.loaded.emit("loaded"); });
    };
    GroceryList.prototype.imageSource = function (grocery) {
        if (grocery.deleted) {
            return grocery.done ? "./assets/selected.png" : "./assets/nonselected.png";
        }
        return grocery.done ? "./assets/checked.png" : "./assets/unchecked.png";
    };
    GroceryList.prototype.toggleDone = function (grocery) {
        if (grocery.deleted) {
            grocery.done = !grocery.done;
            return;
        }
        this.store.toggleDoneFlag(grocery)
            .subscribe(function () { }, function () { alert("An error occurred managing your grocery list"); });
    };
    GroceryList.prototype.delete = function (grocery) {
        grocery.deleting = true;
        this.store.setDeleteFlag(grocery)
            .subscribe(function () { }, function () { return alert("An error occurred while deleting an item from your list."); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GroceryList.prototype, "showDeleted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], GroceryList.prototype, "loaded", void 0);
    GroceryList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "grocery-list",
            template: "\n    <ul>\n      <li *ngFor=\"let grocery of store.items | async | itemStatus:showDeleted\">\n        <img\n          [src]=\"imageSource(grocery)\"\n          (click)=\"toggleDone(grocery)\">\n        <span\n          [class.done]=\"grocery.done && !grocery.deleted\">{{ grocery.name }}</span>\n        <button\n          *ngIf=\"!grocery.deleted && !grocery.deleting\"\n          (click)=\"delete(grocery)\">&times;</button>\n        <img\n          *ngIf=\"!grocery.deleted && grocery.deleting\"\n          src=\"./assets/loading.gif\">\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__("../../../../../src/app/pages/list/grocery-list.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_grocery_grocery_list_service__["a" /* GroceryStore */]])
    ], GroceryList);
    return GroceryList;
}());



/***/ }),

/***/ "../../../../../src/app/pages/list/grocery-list.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\nli img {\n  height: 30px;\n}\nli span {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: inline-block;\n  padding: 0 1em;\n}\n.done {\n  text-decoration: line-through;\n}\nli button {\n  background-color: #9C9C9C;\n  font-weight: bold;\n  height: 35px;\n  width: 35px;\n  line-height: 35px;\n  padding: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/list/item-status.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemStatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ItemStatusPipe = (function () {
    function ItemStatusPipe() {
        this.value = [];
    }
    ItemStatusPipe.prototype.transform = function (items, deleted) {
        if (items && items.length) {
            this.value = items.filter(function (grocery) {
                return grocery.deleted === deleted;
            });
        }
        return this.value;
    };
    ItemStatusPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: "itemStatus"
        })
    ], ItemStatusPipe);
    return ItemStatusPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pages/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_grocery_grocery_list_service__ = __webpack_require__("../../../../../src/app/shared/grocery/grocery-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_config__ = __webpack_require__("../../../../../src/app/shared/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(_router, store) {
        this._router = _router;
        this.store = store;
        this.grocery = "";
        this.isLoading = false;
        this.isShowingRecent = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        if (!__WEBPACK_IMPORTED_MODULE_3__shared_config__["a" /* Config */].token) {
            this._router.navigate(["Login"]);
            return;
        }
        this.isLoading = true;
    };
    ListComponent.prototype.hideLoadingIndicator = function () {
        this.isLoading = false;
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        this.store.add(this.grocery)
            .subscribe(function () {
            _this.grocery = "";
        }, function () {
            alert("An error occurred while adding a grocery to your list.");
        });
    };
    ListComponent.prototype.toggleRecent = function () {
        var _this = this;
        if (this.isShowingRecent) {
            this.store.restore()
                .subscribe(function () { _this.isShowingRecent = false; }, function () { alert("An error occurred while adding groceries to your list."); });
        }
        else {
            this.isShowingRecent = true;
        }
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "list",
            template: __webpack_require__("../../../../../src/app/pages/list/list.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/list/list.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_grocery_grocery_list_service__["a" /* GroceryStore */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_grocery_grocery_list_service__["a" /* GroceryStore */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/list/list.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\ninput {\n  -webkit-box-flex: 5;\n      -ms-flex: 5;\n          flex: 5;\n  margin-right: 0.5em;\n}\n\nhr {\n  border: 0;\n  border-bottom: solid 1px #c8cccf;\n  margin: 3em 0 1em 0;\n}\n\n.link-container {\n  overflow: hidden;\n}\n.link-container button {\n  float: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/list/list.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-page\">\n  <h1>Add a Grocery</h1> \n\n  <form (submit)=\"add()\">\n    <input name=\"grocery\" type=\"text\" required [(ngModel)]=\"grocery\">\n    <button>Add</button>\n  </form>\n\n  <hr>\n\n  <div class=\"link-container\">\n    <button class=\"secondary\" (click)=\"toggleRecent()\">\n      {{ isShowingRecent ? 'Done' : 'Add from history' }}\n    </button>\n  </div>\n\n  <grocery-list\n    [showDeleted]=\"isShowingRecent\"\n    (loaded)=\"hideLoadingIndicator()\"></grocery-list>\n</div>\n\n<activity-indicator [isLoading]=\"isLoading\"></activity-indicator>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_user__ = __webpack_require__("../../../../../src/app/shared/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_user_user__["a" /* User */]();
    }
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address");
            return;
        }
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._userService.login(this.user)
            .subscribe(function () {
            _this.isAuthenticating = false;
            _this._router.navigate(["/list"]);
        }, function () {
            alert("Unfortunately we were not able to log you in to the system");
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this._userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.isAuthenticating = false;
            _this.toggleDisplay();
        }, function () {
            alert("Unfortunately we were unable to create your account.");
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "login",
            template: __webpack_require__("../../../../../src/app/pages/login/login.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_user_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  display: block;\n  width: 100%;\n}\nimg[src*=gif] {\n  height: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [class.dark]=\"!isLoggingIn\">\n  <header>\n    <span class=\"avatar\">\n      <img src=\"./assets/logo.png\" alt=\"Groceries logo\">\n    </span>\n  </header>\n\n  <h1>GROCERIES</h1>\n  <form (submit)=\"submit()\">\n    <div>\n      <label>\n        Email:\n        <input name=\"email\" type=\"email\" required autocapitalize=\"off\" autocorrect=\"off\" [(ngModel)]=\"user.email\" [disabled]=\"isAuthenticating\">\n      </label>\n    </div>\n\n    <div>\n      <label>\n        Password:\n        <input name=\"password\" type=\"password\" required [(ngModel)]=\"user.password\" [disabled]=\"isAuthenticating\">\n      </label>\n    </div>\n\n    <div class=\"center\">\n      <button class=\"big\" [disabled]=\"isAuthenticating\">\n        <img [hidden]=\"!isAuthenticating\" src=\"./assets/loading.gif\">\n        <span [hidden]=\"isAuthenticating\">{{ isLoggingIn ? 'Login' : 'Register' }}</span>\n      </button>\n      <button type=\"button\" class=\"plain\" (click)=\"toggleDisplay()\" [disabled]=\"isAuthenticating\">\n        <span>{{ isLoggingIn ? 'Sign Up' : 'Back to Login' }}</span>\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {
    function Config() {
    }
    Object.defineProperty(Config, "token", {
        get: function () {
            return localStorage.getItem("token");
        },
        set: function (theToken) {
            localStorage.setItem("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    Config.hasActiveToken = function () {
        return !!localStorage.getItem("token");
    };
    Config.apiUrl = "https://api.everlive.com/v1/GWfRtXi1Lwt4jcqK/";
    return Config;
}());



/***/ }),

/***/ "../../../../../src/app/shared/grocery/grocery-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceryStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("../../../../../src/app/shared/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grocery__ = __webpack_require__("../../../../../src/app/shared/grocery/grocery.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GroceryStore = (function () {
    function GroceryStore(_http) {
        this._http = _http;
        this.items = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._allItems = [];
    }
    GroceryStore.prototype.load = function () {
        var _this = this;
        var headers = this.getHeaders();
        headers.append("X-Everlive-Sort", JSON.stringify({ ModifiedAt: -1 }));
        return this._http.get(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].apiUrl + "Groceries", {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            data.Result.forEach(function (grocery) {
                _this._allItems.push(new __WEBPACK_IMPORTED_MODULE_6__grocery__["a" /* Grocery */](grocery.Id, grocery.Name, grocery.Done || false, grocery.Deleted || false));
                _this.publishUpdates();
            });
        })
            .catch(this.handleErrors);
    };
    GroceryStore.prototype.add = function (name) {
        var _this = this;
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].apiUrl + "Groceries", JSON.stringify({ Name: name }), { headers: this.getHeaders() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            _this._allItems.unshift(new __WEBPACK_IMPORTED_MODULE_6__grocery__["a" /* Grocery */](data.Result.Id, name, false, false));
            _this.publishUpdates();
        })
            .catch(this.handleErrors);
    };
    GroceryStore.prototype._put = function (id, data) {
        return this._http.put(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].apiUrl + "Groceries/" + id, JSON.stringify(data), { headers: this.getHeaders() })
            .catch(this.handleErrors);
    };
    GroceryStore.prototype.setDeleteFlag = function (item) {
        var _this = this;
        return this._put(item.id, { Deleted: true, Done: false })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            item.deleted = true;
            item.done = false;
            _this.publishUpdates();
        });
    };
    GroceryStore.prototype.restore = function () {
        var _this = this;
        var indeces = [];
        this._allItems.forEach(function (grocery) {
            if (grocery.deleted && grocery.done) {
                indeces.push(grocery.id);
            }
        });
        var headers = this.getHeaders();
        headers.append("X-Everlive-Filter", JSON.stringify({
            "Id": {
                "$in": indeces
            }
        }));
        return this._http.put(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].apiUrl + "Groceries", JSON.stringify({
            Deleted: false,
            Done: false
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            _this._allItems.forEach(function (grocery) {
                grocery.deleting = false;
                if (grocery.deleted && grocery.done) {
                    grocery.deleted = false;
                    grocery.done = false;
                }
            });
            _this.publishUpdates();
        })
            .catch(this.handleErrors);
    };
    GroceryStore.prototype.toggleDoneFlag = function (item) {
        var _this = this;
        return this._put(item.id, { Done: !item.done })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            item.done = !item.done;
            _this.publishUpdates();
        });
    };
    GroceryStore.prototype.deleteForever = function (item) {
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].apiUrl + "Groceries/" + item.id, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    GroceryStore.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].token);
        return headers;
    };
    GroceryStore.prototype.publishUpdates = function () {
        this.items.next(this._allItems.slice());
    };
    GroceryStore.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error);
    };
    GroceryStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GroceryStore);
    return GroceryStore;
}());



/***/ }),

/***/ "../../../../../src/app/shared/grocery/grocery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grocery; });
var Grocery = (function () {
    function Grocery(id, name, done, deleted) {
        this.id = id;
        this.name = name;
        this.done = done;
        this.deleted = deleted;
        this.deleting = false;
    }
    return Grocery;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("../../../../../src/app/shared/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.register = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* Config */].apiUrl + "Users", JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    UserService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* Config */].apiUrl + "oauth/token", JSON.stringify({
            username: user.email,
            password: user.password,
            grant_type: "password"
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            __WEBPACK_IMPORTED_MODULE_6__config__["a" /* Config */].token = data.Result.access_token;
        })
            .catch(this.handleErrors);
    };
    UserService.prototype.resetPassword = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* Config */].apiUrl + "Users/resetpassword", JSON.stringify({
            Email: email
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.email);
    };
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__("../../../../../src/app/index.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map