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

/***/ "./src/app/_guard/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/_guard/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // const currentUser = this.auth.currentUserValue;
        // if (currentUser) {
        //     // authorised so return true
        //     return true;
        // }
        if (localStorage.getItem('METRO_ACCESS_TOKEN')) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["Auth"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guard/map.guard.ts":
/*!*************************************!*\
  !*** ./src/app/_guard/map.guard.ts ***!
  \*************************************/
/*! exports provided: MapGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapGuard", function() { return MapGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapGuard = /** @class */ (function () {
    function MapGuard() {
    }
    MapGuard.prototype.canDeactivate = function (component) {
        // if there are no pending changes, just allow deactivation; else confirm first
        return component.canDeactivate() ?
            true :
            // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
            // when navigating away from your angular app, the browser will show a generic warning message
            // see http://stackoverflow.com/a/42207299/7307355
            confirm('WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes.');
    };
    MapGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MapGuard);
    return MapGuard;
}());



/***/ }),

/***/ "./src/app/_guard/user.guard.ts":
/*!**************************************!*\
  !*** ./src/app/_guard/user.guard.ts ***!
  \**************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGuard = /** @class */ (function () {
    function UserGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    UserGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.auth.currentUserValue;
        if (currentUser && currentUser.role === 'user') {
            // authorised so return true
            return true;
        }
        // not user, redirect to dashboard page with the return url
        this.router.navigate(['/community'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    UserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["Auth"]])
    ], UserGuard);
    return UserGuard;
}());



/***/ }),

/***/ "./src/app/_interceptor/token.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/_interceptor/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (this.auth.getJwtToken()) {
            request = this.addToken(request, this.auth.getJwtToken());
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && error.status === 401) {
                return _this.handle401Error(request, next);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }
        }));
    };
    TokenInterceptor.prototype.addToken = function (request, token) {
        return request.clone({
            setHeaders: {
                'Authorization': "Bearer " + token
            }
        });
    };
    TokenInterceptor.prototype.handle401Error = function (request, next) {
        var _this = this;
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.auth.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (token) {
                _this.isRefreshing = false;
                _this.refreshTokenSubject.next(token.jwt);
                return next.handle(_this.addToken(request, token.jwt));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (token) { return token != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (jwt) {
                return next.handle(_this.addToken(request, jwt));
            }));
        }
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/_model/map.model.ts":
/*!*************************************!*\
  !*** ./src/app/_model/map.model.ts ***!
  \*************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
var Map = /** @class */ (function () {
    function Map() {
    }
    return Map;
}());



/***/ }),

/***/ "./src/app/_model/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/_model/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_pipe/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/_pipe/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    // transform(items: any[], searchText: string): any[] {
    //   if (!items) return [];
    //   if (!searchText) return items;
    //   searchText = searchText.toLowerCase();
    //   return items.filter(it => {
    //     console.log("it: " + it);
    //     return it.toLowerCase().includes(searchText);
    //   });
    // }
    FilterPipe.prototype.transform = function (mapList, filterValue) {
        if (!mapList || !filterValue)
            return mapList;
        filterValue = filterValue.toLowerCase();
        return mapList.filter(function (map) {
            return map.name.toLowerCase().includes(filterValue) ||
                map.firstname.toLowerCase().includes(filterValue) ||
                map.lastname.toLowerCase().includes(filterValue) ||
                map.email.toLowerCase().includes(filterValue);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'mapFilter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/_service/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/_service/auth.service.ts ***!
  \******************************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Auth = /** @class */ (function () {
    function Auth(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('LOGGED_USER')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(Auth.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Auth.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["config"].rootUrl + "/metro/auth/login", { username: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return _this.doLoginUser(data.user, data.tokens); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(email));
        // .pipe(map(data => {
        //   // login successful if there's a jwt token in the response
        //   // if (user && user.token) {
        //   if (data.user) {
        //     if(data.user.hasOwnProperty('password')) delete data.user.password;
        //     // store user details and jwt token in local storage to keep user logged in between page refreshes
        //     localStorage.setItem('currentUser', JSON.stringify(data.user));
        //     this.currentUserSubject.next(data.user);
        //   }
        //   return data;
        // }));
    };
    Auth.prototype.logout = function () {
        this.doLogoutUser();
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["config"].rootUrl + "/metro/auth/logout", {
            'refreshToken': this.getRefreshToken()
        });
    };
    // logout() {
    //   localStorage.removeItem(this.JWT_TOKEN);
    //   localStorage.removeItem(this.REFRESH_TOKEN);
    //   // localStorage.removeItem('currentUser');
    //   // this.currentUserSubject.next(null);
    //   return this.http.post<any>(`${this.rootUrl}/metro/auth/logout`, {
    //     'refreshToken': this.getRefreshToken()
    //   });
    // }
    Auth.prototype.refreshToken = function () {
        var _this = this;
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["config"].rootUrl + "/metro/auth/refresh", {
            'refreshToken': this.getRefreshToken()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (tokens) {
            _this.storeJwtToken(tokens.jwt);
        }));
    };
    Object.defineProperty(Auth.prototype, "loggedIn", {
        get: function () {
            return !!this.getJwtToken();
        },
        enumerable: true,
        configurable: true
    });
    Auth.prototype.getJwtToken = function () {
        return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].JWT_TOKEN);
    };
    Auth.prototype.doLoginUser = function (user, tokens) {
        this.storeUser(user);
        this.storeTokens(tokens);
    };
    Auth.prototype.doLogoutUser = function () {
        this.removeUser();
        this.removeTokens();
    };
    Auth.prototype.storeUser = function (user) {
        localStorage.setItem('LOGGED_USER', JSON.stringify(user));
        this.currentUserSubject.next(user);
    };
    Auth.prototype.removeUser = function () {
        localStorage.removeItem('LOGGED_USER');
        this.currentUserSubject.next(null);
    };
    Auth.prototype.getRefreshToken = function () {
        return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].REFRESH_TOKEN);
    };
    Auth.prototype.storeJwtToken = function (jwt) {
        localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].JWT_TOKEN, jwt);
    };
    Auth.prototype.storeTokens = function (tokens) {
        localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].JWT_TOKEN, tokens.jwt);
        localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].REFRESH_TOKEN, tokens.refreshToken);
    };
    Auth.prototype.removeTokens = function () {
        localStorage.removeItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].JWT_TOKEN);
        localStorage.removeItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].REFRESH_TOKEN);
    };
    Auth.prototype.updateLocalStoragelUser = function (user) {
        localStorage.removeItem('LOGGED_USER');
        this.currentUserSubject.next(null);
        localStorage.setItem('LOGGED_USER', JSON.stringify(user));
        this.currentUserSubject.next(user);
    };
    Auth = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Auth);
    return Auth;
}());



/***/ }),

/***/ "./src/app/_service/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/_service/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapService = /** @class */ (function () {
    function MapService(http) {
        this.http = http;
        this.rootUrl = "http://localhost:3000";
    }
    MapService.prototype.getMap = function (mid) {
        return this.http.get(this.rootUrl + ("/metro/api/v1/maps/" + mid));
    };
    MapService.prototype.getMaps = function (page, limit) {
        return this.http.get(this.rootUrl + ("/metro/api/v1/maps/?page=" + page + "&limit=" + limit));
    };
    MapService.prototype.createMap = function (map) {
        return this.http.post(this.rootUrl + "/metro/api/v1/maps", map);
    };
    MapService.prototype.saveMap = function (map, mid) {
        return this.http.put(this.rootUrl + ("/metro/api/v1/maps/" + mid), map);
    };
    MapService.prototype.deleteMap = function (mid) {
        return this.http.delete(this.rootUrl + ("/metro/api/v1/maps/" + mid));
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/_service/theme.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_service/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeService = /** @class */ (function () {
    function ThemeService() {
        this.themeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentTheme')));
        this.themeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentTheme')));
        this.theme = this.themeSubject.asObservable();
    }
    ThemeService.prototype.setTheme = function (theme) {
        localStorage.removeItem('currentTheme');
        this.themeSubject.next(null);
        localStorage.setItem('currentTheme', JSON.stringify(theme));
        this.themeSubject.next(theme);
    };
    ThemeService.prototype.getTheme = function () {
        return JSON.parse(localStorage.getItem('currentTheme')) || this.theme;
    };
    ThemeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/app/_service/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/_service/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.signup = function (user) {
        var body = {
            role: "user",
            enabled: true,
            email: user.email,
            password: user.password,
            lastname: user.lastname,
            firstname: user.firstname,
            avatar: _config__WEBPACK_IMPORTED_MODULE_2__["config"].DEFAULT_AVATAR
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["config"].rootUrl + "/metro/auth/signup", body);
    };
    UserService.prototype.getUser = function (uid) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["config"].rootUrl + ("/metro/api/v1/users/" + uid));
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["config"].rootUrl + "/metro/api/v1/users");
    };
    UserService.prototype.getMaps = function (uid) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["config"].rootUrl + ("/metro/api/v1/users/" + uid + "/maps/"));
    };
    UserService.prototype.verifyPassword = function (password, uid) {
        var body = {
            id: uid,
            password: password
        };
        return this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["config"].rootUrl + ("/metro/api/v1/users/" + uid + "/password"), body);
    };
    UserService.prototype.updateEmail = function (email, uid) {
        var body = {
            id: uid,
            email: email
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_2__["config"].rootUrl + ("/metro/api/v1/users/" + uid + "/email"), body);
    };
    UserService.prototype.updateName = function (firstname, lastname, uid) {
        var body = {
            id: uid,
            firstname: firstname,
            lastname: lastname
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_2__["config"].rootUrl + ("/metro/api/v1/users/" + uid + "/name"), body);
    };
    UserService.prototype.updatePassword = function (password, uid) {
        var body = {
            id: uid,
            password: password
        };
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_2__["config"].rootUrl + ("/metro/api/v1/users/" + uid + "/password"), body);
    };
    UserService.prototype.updteEnabled = function (user, uid) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_2__["config"].rootUrl + ("/metro/api/v1/users/" + user.id + "/enabled"), user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-grid-list cols=\"3\" *ngIf=\"!users\">\n  <mat-grid-tile></mat-grid-tile>\n  <mat-grid-tile>\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n  </mat-grid-tile>\n  <mat-grid-tile></mat-grid-tile>\n</mat-grid-list> -->\n\n<div class=\"center loading-spinner\" *ngIf=\"!users\">\n  <h6>Loading data...</h6><br>\n  <mat-spinner class=\"center\" color=\"accent\"></mat-spinner>\n</div>\n\n<div class=\"center\" *ngIf=\"users && users.length === 0\">\n  <mat-card class=\"loading-spinner\">\n    <h4>No users data</h4>\n  </mat-card>\n</div>\n\n<div *ngIf=\"users\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n      <!-- Email Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n      </ng-container>\n\n      <!-- Firstname Column -->\n      <ng-container matColumnDef=\"firstname\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Firstname </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.firstname}} </td>\n      </ng-container>\n\n      <!-- Lastname Column -->\n      <ng-container matColumnDef=\"lastname\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Lastname </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.lastname}} </td>\n      </ng-container>\n\n      <!-- Role Column -->\n      <ng-container matColumnDef=\"role\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Role </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.role}} </td>\n      </ng-container>\n\n      <!-- Enabled Column -->\n      <ng-container matColumnDef=\"enabled\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Enabled </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <!-- private &nbsp;&nbsp; -->\n          <mat-slide-toggle color=\"accent\" [checked]=\"row.enabled\" [disabled]=\"row.role === 'admin'\"\n            (change)=\"enabledOnChange(row, $event)\"></mat-slide-toggle>\n          <!-- &nbsp;&nbsp; public -->\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.operation-btn {\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9wZXJhdGlvbi1idG4ge1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_model/user.model */ "./src/app/_model/user.model.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_service/user.service */ "./src/app/_service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(snackBar, userService) {
        this.snackBar = snackBar;
        this.userService = userService;
        this.loading = false;
        this.updating = false;
        this.users = [];
        this.displayedColumns = ['email', 'firstname', 'lastname', 'role', 'enabled'];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AdminComponent.prototype.enabledOnChange = function (row, element) {
        var _this = this;
        this.loading = true;
        var user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        user.id = row.id;
        user.enabled = element.checked;
        this.userService.updteEnabled(user, user.id)
            .subscribe(function () {
            _this.loading = false;
            _this.snackBar.open("update user successfully", "OK", {
                duration: 2000
            });
            _this.refresh();
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.error, "OK", {
                duration: 2000
            });
            _this.refresh();
        });
    };
    AdminComponent.prototype.refresh = function () {
        var _this = this;
        this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            _this.users = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AdminComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AdminComponent.prototype, "sort", void 0);
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");
/* harmony import */ var _guard_map_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guard/map.guard */ "./src/app/_guard/map.guard.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guard/auth.guard */ "./src/app/_guard/auth.guard.ts");
/* harmony import */ var _guard_user_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_guard/user.guard */ "./src/app/_guard/user.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/community', pathMatch: 'full', canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    // { path: 'user/:uid', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], canLoad: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], canLoad: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'community', component: _community_community_component__WEBPACK_IMPORTED_MODULE_8__["CommunityComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], canLoad: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'map/:mid', component: _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], canLoad: [_guard_user_guard__WEBPACK_IMPORTED_MODULE_11__["UserGuard"]], canDeactivate: [_guard_map_guard__WEBPACK_IMPORTED_MODULE_9__["MapGuard"]] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<div class=\"wrapper\" [ngClass]=\"theme === undefined ? '' : theme + '-theme'\">\n  <!-- <app-nav *ngIf=\"auth.loggedIn\"></app-nav> -->\n\n  <div class=\"content mat-app-background\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <div class=\"footer\">\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <div class=\"row\">\n          <div class=\"col l12 m12 s12\">\n            <span>&#169; {{year}} - Shizheng Yang</span>\n          </div>\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column; }\n  .wrapper .content {\n    flex: 1 0 auto;\n    overflow: scroll; }\n  .wrapper .footer {\n    text-align: center; }\n  .wrapper .footer span {\n      font-size: 14px;\n      width: 75px;\n      padding: 0 0 0 3px;\n      overflow: hidden;\n      text-align: left;\n      white-space: nowrap;\n      transition: width 0.5s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxjQUFhO0VBQ2IsdUJBQXNCLEVBb0J2QjtFQTNCRDtJQVVJLGVBQWM7SUFDZCxpQkFBZ0IsRUFDakI7RUFaSDtJQWVJLG1CQUFrQixFQVduQjtFQTFCSDtNQWtCTSxnQkFBZTtNQUNmLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsaUJBQWdCO01BQ2hCLGlCQUFnQjtNQUNoQixvQkFBbUI7TUFDbkIsdUJBQXNCLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAuY29udGVudCB7XG4gICAgZmxleDogMSAwIGF1dG87XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICBwYWRkaW5nOiAwIDAgMCAzcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xuICAgIH1cbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_service/theme.service */ "./src/app/_service/theme.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(themeService, auth) {
        this.themeService = themeService;
        this.auth = auth;
        this.title = 'Metropolist';
        this.year = new Date().getFullYear();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeSubscription = this.themeService.theme.subscribe(function (t) {
            _this.theme = t;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.themeSubscription.unsubscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["Auth"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_interceptor/token.interceptor */ "./src/app/_interceptor/token.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_service/user.service */ "./src/app/_service/user.service.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _guard_map_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_guard/map.guard */ "./src/app/_guard/map.guard.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");
/* harmony import */ var _service_theme_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_service/theme.service */ "./src/app/_service/theme.service.ts");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_pipe/filter.pipe */ "./src/app/_pipe/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























function tokenGetter() {
    return localStorage.getItem('METRO_ACCESS_TOKEN');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_19__["BottomSheetOperationSheet"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_17__["DeleteMapDialog"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_17__["CreateMapDialog"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["DeleteUserDialog"],
                _community_community_component__WEBPACK_IMPORTED_MODULE_23__["CommunityComponent"],
                _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:4200'],
                        blacklistedRoutes: []
                    }
                }),
            ],
            providers: [
                _service_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"],
                _service_theme_service__WEBPACK_IMPORTED_MODULE_24__["ThemeService"],
                _guard_map_guard__WEBPACK_IMPORTED_MODULE_20__["MapGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [_user_user_component__WEBPACK_IMPORTED_MODULE_17__["CreateMapDialog"], _user_user_component__WEBPACK_IMPORTED_MODULE_17__["DeleteMapDialog"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["DeleteUserDialog"], _map_map_component__WEBPACK_IMPORTED_MODULE_19__["BottomSheetOperationSheet"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/community/community.component.html":
/*!****************************************************!*\
  !*** ./src/app/community/community.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<mat-progress-bar *ngIf=\"loading\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n<div class=\"container\">\n  <div class=\"center loading-spinner\" *ngIf=\"!maps\">\n    <h6>Loading data...</h6><br>\n    <mat-spinner class=\"center\" color=\"accent\"></mat-spinner>\n  </div>\n\n  <div class=\"center\" *ngIf=\"maps && maps.length === 0\">\n    <mat-card class=\"loading-spinner\">\n      <h4>The community is empty right now,</h4>\n      <h4>Go\n        <button mat-raised-button color=\"accent\" matTooltip=\"Create map\" matTooltipClass=\"tooltip-black\"\n          [routerLink]=\"['/dashboard']\">\n          <h4>Make</h4>\n        </button>\n        a map</h4>\n    </mat-card>\n  </div>\n\n  <div class=\"row\" *ngIf=\"maps && maps.length > 0\">\n    <div class=\"col l12 m12 s12\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"col l4 m6 s12\" *ngFor=\"let map of maps | mapFilter : filterValue\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{map.firstname}} {{map.lastname}}</mat-card-title>\n          <mat-card-subtitle>{{map.email}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image class=\"map-img\" src=\"{{map.img}}\" alt=\"map\" />\n        <mat-card-content>\n          <p>{{map.name}}</p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-stroked-button class=\"card-btn\" (click)=\"viewMap(map.id)\">VIEW</button>\n          <button mat-stroked-button class=\"card-btn\">DOWNLOAD</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n\n    <div class=\"col l12 m12 s12\" *ngIf=\"maps && maps.length > 0\">\n      <mat-paginator [length]=\"length\" [pageIndex]=\"pageIndex\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\n        (page)=\"pageEvent = onPageChange($event)\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/community/community.component.scss":
/*!****************************************************!*\
  !*** ./src/app/community/community.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-spinner {\n  margin-top: 20%; }\n\n.example-card {\n  padding: 5%;\n  margin: 5% 0;\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url('avatar-0.jpg');\n  background-size: cover; }\n\n.map-img {\n  margin: 0;\n  max-width: 100%;\n  max-height: 100%; }\n\n.card-btn {\n  margin: 1%; }\n\n@media only screen and (max-width: 600px) {\n  .community-container {\n    padding: 2%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvY29tbXVuaXR5L2NvbW11bml0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxzQ0FBdUQ7RUFDdkQsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsVUFBUztFQUNULGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0U7SUFDRSxZQUFXLEVBQ1osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9jb21tdW5pdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1zcGlubmVyIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4uZXhhbXBsZS1jYXJkIHsgXG4gIHBhZGRpbmc6IDUlO1xuICBtYXJnaW46IDUlIDA7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvYXZhdGFyLTAuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tYXAtaW1nIHtcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkLWJ0biB7XG4gIG1hcmdpbjogMSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbW11bml0eS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/community/community.component.ts":
/*!**************************************************!*\
  !*** ./src/app/community/community.component.ts ***!
  \**************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_service/map.service */ "./src/app/_service/map.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_service/user.service */ "./src/app/_service/user.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommunityComponent = /** @class */ (function () {
    function CommunityComponent(snackBar, dialog, auth, router, mapService, userService) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.auth = auth;
        this.router = router;
        this.mapService = mapService;
        this.userService = userService;
        this.loading = false;
        this.length = 0;
        this.pageIndex = 0;
        this.pageSize = 3;
        this.maps = null;
        this.pageSizeOptions = [3, 6, 9, 12];
        this.displayedColumns = ['name', 'img', 'createDate', 'editDate', 'isVisible', 'operation'];
    }
    CommunityComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    CommunityComponent.prototype.onPageChange = function (page) {
        this.pageIndex = page.pageIndex;
        this.pageSize = page.pageSize;
        this.refresh();
    };
    CommunityComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
    };
    CommunityComponent.prototype.viewMap = function (id) {
        this.router.navigate(['/map/' + id]);
    };
    CommunityComponent.prototype.refresh = function () {
        var _this = this;
        this.mapService.getMaps(this.pageIndex + 1, this.pageSize).subscribe(function (data) {
            var maps = data['maps'];
            _this.maps = maps.map(function (m) {
                _this.userService.getUser(m.uid).subscribe(function (user) {
                    m.firstname = user.firstname || '';
                    m.lastname = user.lastname || '';
                    m.email = user.email || '';
                    m.avatar = user.avatar || '';
                });
                return m;
            });
            _this.length = data['mapCount'];
            _this.pageIndex = data['currentPage'] - 1;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CommunityComponent.prototype, "paginator", void 0);
    CommunityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-community',
            template: __webpack_require__(/*! ./community.component.html */ "./src/app/community/community.component.html"),
            styles: [__webpack_require__(/*! ./community.component.scss */ "./src/app/community/community.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["Auth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], CommunityComponent);
    return CommunityComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <app-user *ngIf=\"isUser\"></app-user>\n  <app-admin *ngIf=\"isAdmin\"></app-admin>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-container {\n  padding: 0% 10% 10% 10%; }\n\n@media only screen and (max-width: 600px) {\n  .dashboard-container {\n    padding: 0% 10% 10% 10%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFO0lBQ0Usd0JBQXVCLEVBQ3hCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jb250YWluZXIge1xuICBwYWRkaW5nOiAwJSAxMCUgMTAlIDEwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCUgMTAlIDEwJSAxMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.currentUserSubscription = this.auth.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
            if (_this.currentUser && _this.currentUser.role === 'user') {
                _this.isUser = true;
            }
            else {
                _this.isUser = false;
            }
            if (_this.currentUser && _this.currentUser.role === 'admin') {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["Auth"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"loading\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n<div class=\"login-container\">\n\t<mat-card class=\"login-card\">\n\t\t<img mat-card-image src=\"assets/images/metropolist.png\"\n\t\t\talt=\"Metropolist\">\n\t\t<mat-card-header class=\"login-header\">\n\t\t\t<mat-card-title>Log in</mat-card-title>\n\t\t\t<mat-card-subtitle>to continue to Metropolist</mat-card-subtitle>\n\t\t</mat-card-header>\n\n\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t<mat-form-field class=\"form-field\" appearance=\"outline\">\n\t\t\t\t<mat-label>Email</mat-label>\n\t\t\t\t<input matInput required formControlName=\"email\" placeholder=\"\">\n\t\t\t\t<mat-error *ngIf=\"loginForm.controls['email'].errors?.required\">Email is required.</mat-error>\n\t\t\t\t<mat-error *ngIf=\"loginForm.controls['email'].errors?.email\">Email should be typed in right format.\n\t\t\t\t</mat-error>\n\t\t\t</mat-form-field>\n\n\t\t\t<mat-form-field class=\"form-field\" appearance=\"outline\">\n\t\t\t\t<mat-label>Password</mat-label>\n\t\t\t\t<input matInput required formControlName=\"password\" placeholder=\"\"\n\t\t\t\t\t[type]=\"hide ? 'password' : 'text'\">\n\t\t\t\t<mat-icon matSuffix class=\"pointer\" (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}\n\t\t\t\t</mat-icon>\n\t\t\t\t<mat-error *ngIf=\"loginForm.controls['password'].errors?.required\">Confirm password is required.\n\t\t\t\t</mat-error>\n\t\t\t\t<mat-error *ngIf=\"loginForm.controls['password'].errors?.minLength\">Minimum 3 characters needed.\n\t\t\t\t</mat-error>\n\t\t\t</mat-form-field>\n\n\t\t\t<mat-card-actions>\n\t\t\t\t<a [routerLink]=\"['/signup']\">Create account</a>\n\t\t\t\t<button mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid || loading\" type=\"submit\">\n\t\t\t\t\tLog in\n\t\t\t\t</button>\n\t\t\t</mat-card-actions>\n\t\t</form>\n\t</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  padding: 5%;\n  height: auto;\n  max-height: 80%;\n  display: block;\n  text-align: center;\n  flex-direction: column; }\n\n.login-card {\n  width: 420px;\n  height: inherit;\n  max-width: 90%;\n  margin-top: 3%;\n  padding: 3%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.login-card .login-header {\n    margin-left: 25%; }\n\n.login-card > * {\n  margin: auto;\n  width: 60%;\n  padding: 3% 0; }\n\n@media only screen and (max-width: 600px) {\n  .login-container {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    max-width: 100%;\n    max-height: 100%; }\n  .login-card {\n    margin: 0;\n    max-width: 100%;\n    max-height: 100%;\n    padding: 30% 0 0 0; }\n    .login-card .login-header {\n      margin-left: 20%; }\n  .login-card > * {\n    margin: auto;\n    width: 70%;\n    padding: 2%; }\n  .login-card > * {\n    margin: auto;\n    width: 70%;\n    padding: 2%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG1CQUFrQjtFQUNsQix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixlQUFjO0VBQ2QsZUFBYztFQUNkLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsbUJBQWtCLEVBS25COztBQVpEO0lBVUksaUJBQWdCLEVBQ2pCOztBQUdIO0VBQ0UsYUFBWTtFQUNaLFdBQVU7RUFDVixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRTtJQUNFLFVBQVM7SUFDVCxXQUFVO0lBQ1YsYUFBWTtJQUNaLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ2pCO0VBRUQ7SUFDRSxVQUFTO0lBQ1QsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsbUJBQWtCLEVBS25CO0lBVEQ7TUFPSSxpQkFBZ0IsRUFDakI7RUFHSDtJQUNFLGFBQVk7SUFDWixXQUFVO0lBQ1YsWUFBVyxFQUNaO0VBRUQ7SUFDRSxhQUFZO0lBQ1osV0FBVTtJQUNWLFlBQVcsRUFDWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcbiAgcGFkZGluZzogNSU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogODAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubG9naW4tY2FyZCB7XG4gIHdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHBhZGRpbmc6IDMlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gIC5sb2dpbi1oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbn1cblxuLmxvZ2luLWNhcmQgPiAqIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAzJSAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5sb2dpbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5sb2dpbi1jYXJkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMzAlIDAgMCAwO1xuXG4gICAgLmxvZ2luLWhlYWRlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIH1cbiAgfVxuXG4gIC5sb2dpbi1jYXJkID4gKiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMiU7XG4gIH1cblxuICAubG9naW4tY2FyZCA+ICoge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, formBuilder, auth, snackBar) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.snackBar = snackBar;
        this.hide = true;
        this.loading = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserSubscription = this.auth.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        // if user is already logged in, redirecting to /dashboard
        if (this.currentUser) {
            this.router.navigate(['/community']);
        }
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/community';
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        // this.userService.login(this.loginForm.value)
        this.auth.login(this.f.email.value, this.f.password.value)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]).then(function () {
                _this.snackBar.open("welcome to Metropolist, " + data, "OK", {
                    duration: 4000
                });
            });
        }, function (error) {
            _this.loading = false;
            _this.router.navigate(['/login']).then(function () {
                if (error) {
                    _this.snackBar.open(error.error.msg, "OK", {
                        duration: error.error.status === 'invalid' ? 5000 : 60000
                    });
                }
            });
            ;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/bottom-sheet-operation-sheet.html":
/*!*******************************************************!*\
  !*** ./src/app/map/bottom-sheet-operation-sheet.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"loading\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n<mat-nav-list>\n    <a mat-list-item *ngIf=\"isOwner\" (click)=\"saveMap()\">\n      <span mat-line>Save Map</span>\n      <span mat-line>Save current map</span>\n    </a>\n  \n    <a mat-list-item (click)=\"downloadMap('png')\">\n      <span mat-line>Download Map as PNG</span>\n      <span mat-line>Get the map in .png format</span>\n    </a>\n<!-- \n    <a mat-list-item (click)=\"downloadMap('jpeg')\">\n      <span mat-line>Download Map as JPEG</span>\n      <span mat-line>Get an image in .jpg or .jpeg format</span>\n    </a>\n  \n    <a mat-list-item (click)=\"downloadMap('pdf')\">\n      <span mat-line>Download Map as PDF</span>\n      <span mat-line>Get an image in .pdf format</span>\n    </a> -->\n\n    <a mat-list-item (click)=\"downloadMap('svg')\">\n        <span mat-line>Download Map as SVG</span>\n        <span mat-line>Get the map in .svg format</span>\n      </a>\n  </mat-nav-list>"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [map]=\"mapWithoutData\"></app-nav>\n<mat-progress-bar *ngIf=\"loading\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n<div class=\"row map-container\">\n  <div class=\"col xl10 l10 m9 s12 canvas-container\">\n    <!-- <div class=\"row canvas-info\">\n      <div class=\"col l12 m12 s12 canvas-info\">\n        <mat-card>\n          it's card\n        </mat-card>\n      </div>\n    </div> -->\n    <div class=\"canvas-panel\" style=\"position: relative;\">\n      <canvas id=\"myCanvas\" width=\"1190\" height=\"750\">\n        Your browser does not support canvas\n      </canvas>\n\n      <canvas id=\"cursorCanvas\" width=\"1190\" height=\"750\">\n        Your browser does not support canvas\n      </canvas>\n    </div>\n  </div>\n\n  <div class=\"col xl2 l2 m3 s12 operation-container\">\n    <mat-list>\n      <mat-list-item>\n        <h2 mat-subheader color=\"warn\">resize map</h2>\n        <button mat-raised-button color=\"accent\" matTooltip=\"Resize\" matTooltipClass=\"tooltip-black\"\n          (click)=\"Resize()\">Resize</button>\n      </mat-list-item>\n\n      <h2 mat-subheader color=\"warn\">render new map</h2>\n      <mat-list-item>\n        <mat-form-field class=\"sites-field\">\n          <input id=\"input-sites\" matInput placeholder=\"sites\" type=\"number\" [(ngModel)]=\"sites\">\n        </mat-form-field>\n        <button class=\"render-btn\" mat-raised-button color=\"accent\" matTooltip=\"Render\" matTooltipClass=\"tooltip-black\"\n          (click)=\"newGraphics()\">Render</button>\n      </mat-list-item>\n\n      <div class=\"mat-table\">\n        <div class=\"mat-header-row\">\n          <div class=\"mat-header-cell\">Layer</div>\n          <div class=\"mat-header-cell\">View</div>\n          <div class=\"mat-header-cell\">Edit</div>\n        </div>\n        <div class=\"mat-row\">\n          <div class=\"mat-cell\">elevation</div>\n          <div class=\"mat-cell\">\n            <mat-checkbox id=\"elevation-view-checkbox\" [(ngModel)]=\"elevation_view_checked\"\n              (change)=\"checkboxOnChange($event, 'view')\"></mat-checkbox>\n          </div>\n          <div class=\"mat-cell\">\n            <mat-checkbox id=\"elevation-edit-checkbox\" [(ngModel)]=\"elevation_edit_checked\"\n              (change)=\"checkboxOnChange($event, 'edit')\"></mat-checkbox>\n          </div>\n        </div>\n\n        <div class=\"mat-row\">\n          <div class=\"mat-cell\">affluence</div>\n          <div class=\"mat-cell\">\n            <mat-checkbox id=\"affluence-view-checkbox\" [(ngModel)]=\"affluence_view_checked\"\n              (change)=\"checkboxOnChange($event, 'view')\"></mat-checkbox>\n          </div>\n          <div class=\"mat-cell\">\n            <mat-checkbox id=\"affluence-edit-checkbox\" [(ngModel)]=\"affluence_edit_checked\"\n              (change)=\"checkboxOnChange($event, 'edit')\"></mat-checkbox>\n          </div>\n        </div>\n\n        <div class=\"mat-row\">\n          <div class=\"mat-cell\">desirability</div>\n          <div class=\"mat-cell\">\n            <mat-checkbox id=\"desirability-view-checkbox\" [(ngModel)]=\"desirability_view_checked\"\n              (change)=\"checkboxOnChange($event, 'view')\"></mat-checkbox>\n          </div>\n          <div class=\"mat-cell\">\n            <mat-checkbox id=\"desirability-edit-checkbox\" [(ngModel)]=\"desirability_edit_checked\"\n              (change)=\"checkboxOnChange($event, 'edit')\"></mat-checkbox>\n          </div>\n        </div>\n\n        <div class=\"mat-row\">\n          <div class=\"mat-cell\">district</div>\n          <div class=\"mat-cell\">\n            <mat-checkbox id=\"district-view-checkbox\" [(ngModel)]=\"district_view_checked\"\n              (change)=\"checkboxOnChange($event, 'view')\"></mat-checkbox>\n          </div>\n          <div class=\"mat-cell\">\n            <mat-checkbox id=\"district-edit-checkbox\" [(ngModel)]=\"district_edit_checked\"\n              (change)=\"checkboxOnChange($event, 'edit')\"></mat-checkbox>\n          </div>\n        </div>\n\n        <div class=\"mat-row\">\n          <div class=\"mat-cell\">building</div>\n          <div class=\"mat-cell\">\n            <mat-checkbox id=\"building-view-checkbox\" [(ngModel)]=\"building_view_checked\"\n              (change)=\"checkboxOnChange($event, 'view')\"></mat-checkbox>\n          </div>\n          <div class=\"mat-cell\">\n            <mat-checkbox id=\"building-edit-checkbox\" [(ngModel)]=\"building_edit_checked\"\n              (change)=\"checkboxOnChange($event, 'edit')\"></mat-checkbox>\n          </div>\n        </div>\n      </div>\n\n      <p mat-subheader>settings</p>\n      <mat-list-item>\n        show name&nbsp;&nbsp;\n        <mat-slide-toggle id=\"streetNameSwitch\" (change)=\"streetNameSwitchOnChange($event)\"></mat-slide-toggle>\n        &nbsp;&nbsp;hide\n      </mat-list-item>\n\n      <mat-list-item>\n        increase&nbsp;&nbsp;\n        <mat-slide-toggle id=\"elevationSwitch\" (change)=\"elevationSwitchOnChange($event)\"></mat-slide-toggle>\n        &nbsp;&nbsp;decrease\n      </mat-list-item>\n\n      <mat-list-item>\n        <label for=\"incrementSlider\">increment:</label>\n        <mat-slider id=\"incrementSlider\" thumbLabel tickInterval=\"0.15\" min=\"0\" max=\"1\" step=\"0.01\" value=\"0.15\"\n          (change)=\"incrementSliderOnChange($event)\" aria-label=\"increment\"></mat-slider>\n      </mat-list-item>\n\n      <mat-list-item>\n        <label for=\"waterLineSlider\">waterline:</label>\n        <mat-slider id=\"waterLineSlider\" thumbLabel tickInterval=\"0.15\" min=\"0\" max=\"1\" step=\"0.01\" value=\"0.15\"\n          (change)=\"waterLineSliderOnChange($event)\" aria-label=\"waterline\"></mat-slider>\n      </mat-list-item>\n\n      <mat-list-item>\n        <button mat-raised-button color=\"accent\" matTooltip=\"Show contourline\" matTooltipClass=\"tooltip-black\"\n          (click)=\"showContourLine()\">Show\n          Contourline</button>\n      </mat-list-item>\n    </mat-list>\n  </div>\n\n  <button mat-fab class=\"open-btn\" color=\"accent\" matTooltip=\"Save/Download\" matTooltipClass=\"tooltip-black\"\n    (click)=\"openBottomSheet()\" [disabled]=\"loading\">\n    <mat-icon aria-label=\"save map\">build</mat-icon>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".open-btn {\n  right: 3%;\n  bottom: 3%;\n  position: fixed; }\n\nmat-sidenav {\n  width: 15%; }\n\nmat-slider {\n  min-width: 120px;\n  width: 120px; }\n\nmat-progress-bar {\n  position: fixed;\n  top: 0; }\n\ntable {\n  width: 100%; }\n\n.mat-table {\n  display: block;\n  padding-left: 10px; }\n\n.mat-row,\n.mat-header-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: dashed;\n  align-items: center;\n  min-height: 48px; }\n\n.mat-cell,\n.mat-header-cell {\n  flex: 1;\n  text-align: center;\n  display: table-cell;\n  word-wrap: break-word;\n  vertical-align: middle; }\n\n.sites-field {\n  width: 100px; }\n\n.render-btn {\n  margin-left: 10px; }\n\n.map-container {\n  display: flex; }\n\n.canvas-container {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding: 0; }\n\n.operation-container {\n  flex: 0 1 auto;\n  overflow: scroll; }\n\n.canvas-info, .canvas-panel {\n  margin: 0;\n  padding: 0; }\n\ncanvas {\n  width: 100%; }\n\n#myCanvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  background-color: #cbc5b9; }\n\n#cursorCanvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1; }\n\n@media only screen and (max-width: 600px) {\n  .map-container {\n    display: inherit; }\n  .canvas-container {\n    position: relative;\n    width: 100%;\n    min-height: 450px; }\n  .operation-container {\n    position: relative;\n    width: 100%; } }\n\n@media only screen and (max-width: 450px) {\n  .canvas-container {\n    min-height: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVM7RUFDVCxXQUFVO0VBQ1YsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixPQUFNLEVBQ1A7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCLEVBQ25COztBQUVEOztFQUVFLGNBQWE7RUFDYix5QkFBd0I7RUFDeEIsNEJBQTJCO0VBQzNCLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDakI7O0FBRUQ7O0VBRUUsUUFBTztFQUNQLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsc0JBQXFCO0VBQ3JCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsVUFBUztFQUNULFdBQVUsRUFDWDs7QUFFRDtFQUNFLGVBQWM7RUFDZCxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxVQUFTO0VBQ1QsV0FBVSxFQUNYOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsV0FBVTtFQUNWLDBCQUFvQyxFQUNyQzs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLFdBQVUsRUFDWDs7QUFFRDtFQUNFO0lBQ0UsaUJBQWdCLEVBQ2pCO0VBRUQ7SUFDRSxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLGtCQUFpQixFQUNsQjtFQUVEO0lBQ0UsbUJBQWtCO0lBQ2xCLFlBQVcsRUFDWixFQUFBOztBQUdIO0VBQ0U7SUFDRSxrQkFBaUIsRUFDbEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3Blbi1idG4ge1xuICByaWdodDogMyU7XG4gIGJvdHRvbTogMyU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMTUlO1xufVxuXG5tYXQtc2xpZGVyIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0LXJvdyxcbi5tYXQtaGVhZGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZGFzaGVkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xufVxuXG4ubWF0LWNlbGwsXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zaXRlcy1maWVsZCB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnJlbmRlci1idG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1hcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2FudmFzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm9wZXJhdGlvbi1jb250YWluZXIge1xuICBmbGV4OiAwIDEgYXV0bztcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmNhbnZhcy1pbmZvLCAuY2FudmFzLXBhbmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI215Q2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMsIDE5NywgMTg1KTtcbn1cblxuI2N1cnNvckNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYXAtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICB9XG5cbiAgLmNhbnZhcy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgfVxuXG4gIC5vcGVyYXRpb24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY2FudmFzLWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent, BottomSheetOperationSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOperationSheet", function() { return BottomSheetOperationSheet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _model_map_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_model/map.model */ "./src/app/_model/map.model.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_service/user.service */ "./src/app/_service/user.service.ts");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_service/map.service */ "./src/app/_service/map.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var MapComponent = /** @class */ (function () {
    function MapComponent(snackBar, route, mapService, userService, bottomSheet, auth) {
        this.snackBar = snackBar;
        this.route = route;
        this.mapService = mapService;
        this.userService = userService;
        this.bottomSheet = bottomSheet;
        this.auth = auth;
        this.loading = false;
        // map settings
        this.sites = 128;
        this.VIEW_MODES = new Set(['elevation']);
        this.EDIT_MODES = new Set();
        this.elevation_view_checked = true;
        this.affluence_view_checked = false;
        this.desirability_view_checked = false;
        this.district_view_checked = false;
        this.building_view_checked = false;
        this.elevation_edit_checked = false;
        this.affluence_edit_checked = false;
        this.desirability_edit_checked = false;
        this.district_edit_checked = false;
        this.building_edit_checked = false;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserSubscription = this.auth.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.currentMap = new _model_map_model__WEBPACK_IMPORTED_MODULE_6__["Map"]();
        this.route.params.subscribe(function (params) {
            _this.mapService.getMap(params['mid'])
                .subscribe(function (data) {
                _this.currentMap = data;
                _this.mapWithoutData = {
                    id: data.id,
                    uid: data.uid,
                    name: data.name,
                    isVisible: data.isVisible,
                    createDate: data.createDate,
                    editDate: data.editDate,
                };
                _this.userService.getUser(_this.currentMap.uid).subscribe(function (user) {
                    _this.mapWithoutData.firstname = user.firstname || '';
                    _this.mapWithoutData.lastname = user.lastname || '';
                    _this.mapWithoutData.email = user.email || '';
                    _this.mapWithoutData.avatar = user.avatar || '';
                });
                _this.canvas = d3.select("#myCanvas").node();
                _this.cursorCanvas = d3.select("#cursorCanvas").node();
                if (data.data) {
                    _this.metro = new Metro(_this.canvas, _this.cursorCanvas, data.data);
                }
                else {
                    _this.metro = new Metro(_this.canvas, _this.cursorCanvas);
                }
            }, function (error) {
                _this.loading = false;
                _this.snackBar.open(error.error.error, "OK", {
                    duration: 4000
                });
            });
        });
    };
    MapComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    // resize map
    MapComponent.prototype.Resize = function () {
        this.metro.state.transform.x = 0;
        this.metro.state.transform.y = 0;
        this.metro.state.transform.k = 1;
        this.metro.render();
    };
    // new graphics
    MapComponent.prototype.newGraphics = function () {
        this.metro.graphics = this.metro.newGraphics(this.sites);
    };
    // onChange event of view-check-box elements
    MapComponent.prototype.checkboxOnChange = function (element, type) {
        var isChecked = element.checked;
        var layerName = element.source.id.slice(0, element.source.id.indexOf('-'));
        // change map's layers
        this.metro.checkboxOnChange(type, layerName, isChecked);
        // change dom element
        this.changeModes(type, layerName, isChecked, element);
    };
    // onChange event of viewLayer + editLayer
    MapComponent.prototype.changeModes = function (type, layerName, isChecked, element) {
        if (type === 'view') {
            if (isChecked) {
                this.VIEW_MODES.add(layerName);
            }
            else {
                if (this.VIEW_MODES.size === 1) {
                    element.checked = true;
                    return;
                }
                else if (this.VIEW_MODES.has(layerName)) {
                    this.EDIT_MODES.delete(layerName);
                    this.VIEW_MODES.delete(layerName);
                    switch (layerName) {
                        case 'elevation':
                            this.elevation_edit_checked = false;
                            break;
                        case 'affluence':
                            this.affluence_edit_checked = false;
                            break;
                        case 'desirability':
                            this.desirability_edit_checked = false;
                            break;
                        case 'district':
                            this.district_edit_checked = false;
                            break;
                        case 'building':
                            this.building_edit_checked = false;
                            break;
                    }
                }
            }
        }
        else {
            if (isChecked) {
                this.VIEW_MODES.add(layerName);
                this.EDIT_MODES.add(layerName);
                switch (layerName) {
                    case 'elevation':
                        this.elevation_view_checked = true;
                        break;
                    case 'affluence':
                        this.affluence_view_checked = true;
                        break;
                    case 'desirability':
                        this.desirability_view_checked = true;
                        break;
                    case 'district':
                        this.district_view_checked = true;
                        break;
                    case 'building':
                        this.building_view_checked = true;
                        break;
                }
            }
            else {
                this.EDIT_MODES.delete(layerName);
            }
        }
    };
    // show contour line
    MapComponent.prototype.showContourLine = function () {
        this.metro.drawContourLine();
    };
    // show street names
    MapComponent.prototype.streetNameSwitchOnChange = function (element) {
        this.metro.streetNameSwitchOnChange(!element.checked);
    };
    // onChange event of elevation switch
    MapComponent.prototype.elevationSwitchOnChange = function (element) {
        this.metro.elevationSwitchOnChange(element.checked);
    };
    // onChange event of increment slider
    MapComponent.prototype.incrementSliderOnChange = function (element) {
        this.metro.incrementSliderOnChange(element.value);
    };
    // onChange event of waterline slider
    MapComponent.prototype.waterLineSliderOnChange = function (element) {
        this.metro.waterLineSliderOnChange(element.value);
    };
    MapComponent.prototype.openBottomSheet = function () {
        var _this = this;
        var bottomSheetRef = this.bottomSheet.open(BottomSheetOperationSheet, {
            data: {
                isSaved: this.isSaved,
                metro: this.metro,
                canvas: this.canvas,
                currentMap: this.currentMap,
                currentUser: this.currentUser,
            },
        });
        bottomSheetRef.afterDismissed().subscribe(function (result) {
            if (!result) {
                _this.isSaved = false;
            }
            else {
                _this.isSaved = result.isSaved;
            }
        });
    };
    MapComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key === 'Enter') {
            this.newGraphics();
        }
    };
    // @HostListener allows us to also guard against browser refresh, close, etc.
    MapComponent.prototype.canDeactivate = function () {
        // insert logic to check if there are pending changes here;
        // returning true will navigate without confirmation
        // returning false will show a confirm dialog before navigating away
        if (this.isSaved) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MapComponent.prototype, "handleKeyboardEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], MapComponent.prototype, "canDeactivate", null);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_9__["Auth"]])
    ], MapComponent);
    return MapComponent;
}());

var BottomSheetOperationSheet = /** @class */ (function () {
    function BottomSheetOperationSheet(snackBar, mapService, data, bottomSheetRef) {
        this.snackBar = snackBar;
        this.mapService = mapService;
        this.data = data;
        this.bottomSheetRef = bottomSheetRef;
        this.isOwner = false;
        this.CanvasToBMP = {
            /**
             * Convert a canvas element to ArrayBuffer containing a BMP file
             * with support for 32-bit (alpha).
             *
             * Note that CORS requirement must be fulfilled.
             *
             * @param {HTMLCanvasElement} canvas - the canvas element to convert
             * @return {ArrayBuffer}
             */
            toArrayBuffer: function (canvas) {
                var w = canvas.width, h = canvas.height, w4 = w * 4, idata = canvas.getContext("2d").getImageData(0, 0, w, h), data32 = new Uint32Array(idata.data.buffer), // 32-bit representation of canvas
                stride = Math.floor((32 * w + 31) / 32) * 4, // row length incl. padding
                pixelArraySize = stride * h, // total bitmap size
                fileLength = 122 + pixelArraySize, // header size is known + bitmap
                file = new ArrayBuffer(fileLength), // raw byte buffer (returned)
                view = new DataView(file), // handle endian, reg. width etc.
                pos = 0, x, y = 0, p, s = 0, a, v;
                // write file header
                setU16(0x4d42); // BM
                setU32(fileLength); // total length
                pos += 4; // skip unused fields
                setU32(0x7a); // offset to pixels
                // DIB header
                setU32(108); // header size
                setU32(w);
                setU32(-h >>> 0); // negative = top-to-bottom
                setU16(1); // 1 plane
                setU16(32); // 32-bits (RGBA)
                setU32(3); // no compression (BI_BITFIELDS, 3)
                setU32(pixelArraySize); // bitmap size incl. padding (stride x height)
                setU32(2835); // pixels/meter h (~72 DPI x 39.3701 inch/m)
                setU32(2835); // pixels/meter v
                pos += 8; // skip color/important colors
                setU32(0xff0000); // red channel mask
                setU32(0xff00); // green channel mask
                setU32(0xff); // blue channel mask
                setU32(0xff000000); // alpha channel mask
                setU32(0x57696e20); // " win" color space
                // bitmap data, change order of ABGR to BGRA
                while (y < h) {
                    p = 0x7a + y * stride; // offset + stride x height
                    x = 0;
                    while (x < w4) {
                        v = data32[s++]; // get ABGR
                        a = v >>> 24; // alpha channel
                        view.setUint32(p + x, (v << 8) | a); // set BGRA
                        x += 4;
                    }
                    y++;
                }
                return file;
                // helper method to move current buffer position
                function setU16(data) { view.setUint16(pos, data, true); pos += 2; }
                function setU32(data) { view.setUint32(pos, data, true); pos += 4; }
            },
            /**
             * Converts a canvas to BMP file, returns a Blob representing the
             * file. This can be used with URL.createObjectURL().
             * Note that CORS requirement must be fulfilled.
             *
             * @param {HTMLCanvasElement} canvas - the canvas element to convert
             * @return {Blob}
             */
            toBlob: function (canvas) {
                return new Blob([this.toArrayBuffer(canvas)], {
                    type: "image/bmp"
                });
            },
            /**
             * Converts the canvas to a data-URI representing a BMP file.
             * Note that CORS requirement must be fulfilled.
             *
             * @param canvas
             * @return {string}
             */
            toDataURL: function (canvas) {
                var buffer = new Uint8Array(this.toArrayBuffer(canvas)), bs = "", i = 0, l = buffer.length;
                while (i < l)
                    bs += String.fromCharCode(buffer[i++]);
                return "data:image/bmp;base64," + btoa(bs);
            }
        };
    }
    BottomSheetOperationSheet.prototype.ngOnInit = function () {
        if (this.data.currentMap.uid !== this.data.currentUser.id) {
            this.isOwner = false;
        }
        else {
            this.isOwner = true;
        }
    };
    BottomSheetOperationSheet.prototype.dismiss = function (isSaved) {
        this.bottomSheetRef.dismiss({ isSaved: isSaved });
        event.preventDefault();
    };
    BottomSheetOperationSheet.prototype.downloadMap = function (format) {
        var name = this.data.currentMap.name, offsetX = this.data.metro.state.transform.x, offsetY = this.data.metro.state.transform.y, realZoomFactor = this.data.metro.state.transform.k, realCanvas = this.data.metro.state.canvas, fakeCanvas = document.createElement('canvas');
        fakeCanvas.width = this.data.metro.state.width() * this.data.metro.state.ZOOM_FACTOR.max;
        fakeCanvas.height = this.data.metro.state.height() * this.data.metro.state.ZOOM_FACTOR.max;
        // let fakeCanvas: any = new OffscreenCanvas(this.data.metro.state.width() * 4, this.data.metro.state.height() * 4);
        // let gl = fakeCanvas.getContext('2d');
        // const fakeCanvasContext = fakeCanvas.getContext('2d');
        // fakeCanvasContext.drawImage(this.data.metro.state.canvas, 0, 0);
        this.data.metro.state.transform.x = 0;
        this.data.metro.state.transform.y = 0;
        this.data.metro.state.transform.k = this.data.metro.state.ZOOM_FACTOR.max;
        this.data.metro.state.canvas = fakeCanvas;
        document.body.appendChild(fakeCanvas);
        this.data.metro.render();
        document.body.removeChild(fakeCanvas);
        // const blob = fakeCanvas.convertToBlob({
        //   type: "image/jpeg",
        //   quality: 1
        // });
        // saveAs(blob, name);
        this.data.metro.state.canvas.toBlob(function (blob) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, name);
        });
        // this.saveCanvasAs(this.data.canvas, format);
        // this.saveImageURL( this.data.canvas, format);
        this.data.metro.state.transform.x = offsetX;
        this.data.metro.state.transform.y = offsetY;
        this.data.metro.state.transform.k = realZoomFactor;
        this.data.metro.state.canvas = realCanvas;
        // let arrayBuffer = this.CanvasToBMP.toArrayBuffer(this.data.canvas);
        // saveAs(new Blob([arrayBuffer], { type: "image/png" }), this.data.currentMap.name, true);
        this.dismiss(false);
    };
    BottomSheetOperationSheet.prototype.saveImageURL = function (canvas, format) {
        var _this = this;
        canvas.toBlob(function (blob) {
            var imageObj = new Image();
            var url = URL.createObjectURL(blob);
            imageObj.crossOrigin = 'anonymous';
            imageObj.onload = function () {
                // no longer need to read the blob so it's revoked
                canvas.getContext('2d').drawImage(imageObj, 0, 10);
                URL.revokeObjectURL(url);
            };
            _this.download(url);
        });
    };
    BottomSheetOperationSheet.prototype.saveCanvasAs = function (canvas, format) {
        //// get image data and transform mime type to application/octet-stream
        // let canvasDataUrl = canvas.toDataURL({
        //   format: format,
        //   multiplier: this.data.metro.state.ZOOM_FACTOR.max
        // }, 1.0)
        var bitmap = canvas.transferToImageBitmap();
        var url = URL.createObjectURL(bitmap);
        // let canvasDataUrl = bitmap.toString('base64');
        // let canvasDataUrl = canvas.toDataURL(format, 1.0);
        this.download(url);
    };
    BottomSheetOperationSheet.prototype.download = function (url) {
        var link = document.createElement('a'); // create an anchor tag
        // set parameters for downloading
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.setAttribute('download', this.data.currentMap.name + '.' + 'blob');
        // compat mode for dispatching click on your anchor
        if (document.createEvent) {
            var evtObj = document.createEvent('MouseEvents');
            evtObj.initEvent('click', true, true);
            link.dispatchEvent(evtObj);
        }
        else if (link.click) {
            link.click();
        }
    };
    BottomSheetOperationSheet.prototype.saveMap = function () {
        var _this = this;
        this.loading = true;
        var map = new _model_map_model__WEBPACK_IMPORTED_MODULE_6__["Map"]();
        map.id = this.data.currentMap.id;
        map.uid = this.data.currentMap.uid;
        map.name = this.data.currentMap.name;
        map.img = this.data.canvas.toDataURL();
        map.isVisible = this.data.currentMap.isVisible;
        map.data = this.convertGraphics2Object(this.data.metro.graphics);
        map.editDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US');
        // console.log("saving map...", map);
        this.mapService.saveMap(map, map.id)
            .subscribe(function () {
            _this.loading = false;
            _this.snackBar.open("save map successfully", "OK", {
                duration: 4000
            });
            _this.dismiss(true);
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.error, "OK", {
                duration: 4000
            });
            _this.dismiss(false);
        });
    };
    BottomSheetOperationSheet.prototype.convertGraphics2Object = function (graphics) {
        var data = {
            currentCastle: graphics.currentCastle,
            sites: graphics.sites.map(processSite),
            edges: graphics.edges.map(processEdge),
            links: graphics.links.map(processLink),
            triangles: graphics.triangles.map(function (t) { return t.map(processSite); }),
            polygons: graphics.polygons.map(stringify),
            vertices: graphics.vertices.map(processVertex),
        };
        return data;
        function processLink(l) {
            return {
                source: processSite(l.source),
                target: processSite(l.target),
            };
        }
        // convert site to object
        function processSite(s) {
            return {
                x: s[0],
                y: s[1],
                type: s.type,
                wall: s.wall,
                index: s.index,
                color: s.color,
                delta: s.delta,
                elevation: s.elevation,
                affluence: s.affluence,
                isBoundary: s.isBoundary,
                desirability: s.desirability,
            };
        }
        // convert edge to object
        function processEdge(e) {
            if (e === null || e === undefined || !e[0] || !e[1])
                return;
            return {
                startPoint: {
                    x: e[0][0],
                    y: e[0][1],
                    vertexIndex: e[0].vertexIndex || null,
                    edgeIndex: e[0].edgeIndex || null,
                },
                endPoint: {
                    x: e[1][0],
                    y: e[1][1],
                    vertexIndex: e[1].vertexIndex || null,
                    edgeIndex: e[1].edgeIndex || null,
                },
                left: e.left,
                right: e.hasOwnProperty('right') && e.right !== null ? e.right : null,
            };
        }
        // convert vertex to object
        function processVertex(v) {
            return {
                x: v[0],
                y: v[1],
                edgeIndex: v.edgeIndex,
                vertexIndex: v.vertexIndex,
            };
        }
        // convert polygon to string
        function stringify(obj) {
            if (obj === undefined) {
                obj = [];
            }
            var type = typeof obj;
            if (type === 'string') {
                return '"' + obj + '"';
            }
            else if (type === 'number' || type === 'undefined' || type === 'boolean') {
                return obj + '';
            }
            var kv = [];
            for (var prop in obj) {
                kv.push(stringify(prop) + ':' + stringify(obj[prop]));
            }
            if (Array.isArray(obj)) {
                kv.push('"length":' + obj.length);
            }
            return "{" + kv.join(',') + '}';
        }
    };
    BottomSheetOperationSheet = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bottom-sheet-operation-sheet',
            template: __webpack_require__(/*! ./bottom-sheet-operation-sheet.html */ "./src/app/map/bottom-sheet-operation-sheet.html"),
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _service_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]])
    ], BottomSheetOperationSheet);
    return BottomSheetOperationSheet;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z6\">\n  <mat-toolbar-row class=\"toolbar\">\n    <span *ngIf=\"!map\" class=\"nav-img-span pointer\" [routerLink]=\"['/community']\">\n      <img class=\"nav-img\" src=\"assets/images/metropolist.png\" alt=\"Metropolist\" width=\"282\" height=\"40\">\n    </span>\n\n    <span *ngIf=\"map\">\n      <h6 *ngIf=\"currentUser.id !== map.uid\">{{map.firstname}} {{map.lastname}}({{map.email}}): </h6>\n      <h4>{{map.name}}</h4>\n    </span>\n\n    <span class=\"example-spacer\"></span>\n\n    <button class=\"nav-btn\" mat-icon-button [routerLink]=\"['/community']\" matTooltip=\"Community\"\n      matTooltipClass=\"tooltip-black\">\n      <mat-icon class=\"md-24 pointer\">home</mat-icon>\n    </button>\n\n    <button class=\"nav-btn\" mat-icon-button [routerLink]=\"['/dashboard']\" matTooltip=\"Dashboard\"\n      matTooltipClass=\"tooltip-black\">\n      <mat-icon class=\"md-24 pointer\">dashboard</mat-icon>\n    </button>\n\n    <button class=\"nav-btn\" mat-icon-button [matMenuTriggerFor]=\"theme\" matTooltip=\"Theme\"\n      matTooltipClass=\"tooltip-black\">\n      <mat-icon class=\"md-24 pointer\">format_color_fill</mat-icon>\n    </button>\n\n    <button class=\"nav-btn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon class=\"md-24 pointer\">account_circle</mat-icon>\n    </button>\n\n    <mat-menu #theme=\"matMenu\">\n      <button mat-menu-item color=\"accent\" [disabled]=\"currentTheme === 'default'\" (click)=\"onChangeTheme('default')\">\n        <mat-icon aria-label=\"default theme\">brightness_5</mat-icon>\n        <span>Default Theme</span>\n        <mat-icon aria-label=\"check\" *ngIf=\"currentTheme === 'default'\" [ngStyle]=\"{'color': 'green'}\">check</mat-icon>\n      </button>\n\n      <button mat-menu-item color=\"accent\" [disabled]=\"currentTheme === 'dark'\" (click)=\"onChangeTheme('dark')\">\n        <mat-icon aria-label=\"dark theme\">brightness_4</mat-icon>\n        <span>Dark Theme</span>\n        <mat-icon aria-label=\"check\" *ngIf=\"currentTheme === 'dark'\" [ngStyle]=\"{'color': 'green'}\">check</mat-icon>\n      </button>\n\n      <button mat-menu-item color=\"accent\" [disabled]=\"currentTheme === 'nature'\" (click)=\"onChangeTheme('nature')\">\n        <mat-icon aria-label=\"nature theme\">brightness_6</mat-icon>\n        <span>Nature Theme</span>\n        <mat-icon aria-label=\"check\" *ngIf=\"currentTheme ==='nature'\" [ngStyle]=\"{'color': 'green'}\">check</mat-icon>\n      </button>\n\n      <button mat-menu-item color=\"accent\" [disabled]=\"currentTheme === 'light'\" (click)=\"onChangeTheme('light')\">\n        <mat-icon aria-label=\"light theme\">brightness_7</mat-icon>\n        <span>Light Theme</span>\n        <mat-icon aria-label=\"check\" *ngIf=\"currentTheme === 'light'\" [ngStyle]=\"{'color': 'green'}\">check</mat-icon>\n      </button>\n    </mat-menu>\n\n    <mat-menu #menu=\"matMenu\">\n      <mat-card *ngIf=\"currentUser\">\n        <mat-card-header class=\"sidenav-card-hrader\">\n          <div mat-card-avatar class=\"avatar pointer mat-elevation-z2\" [routerLink]=\"['/profile']\"></div>\n          <mat-card-title class=\"sidenav-card-title\">{{currentUser.firstname}} {{currentUser.lastname}}</mat-card-title>\n          <mat-card-subtitle class=\"sidenav-card-title\">{{currentUser.email}}</mat-card-subtitle>\n        </mat-card-header>\n      </mat-card>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\">\n          <button mat-menu-item [routerLink]=\"['/profile']\">\n            <mat-icon>account_box</mat-icon>\n            <span>Profile</span>\n          </button>\n        </mat-list-item>\n        <mat-list-item role=\"listitem\">\n          <button mat-menu-item [routerLink]=\"['/settings']\">\n            <mat-icon>settings</mat-icon>\n            <span>Settings</span>\n          </button>\n        </mat-list-item>\n        <mat-list-item role=\"listitem\">\n          <button mat-menu-item (click)=\"logout()\">\n            <mat-icon>input</mat-icon>\n            <span>Log out</span>\n          </button>\n        </mat-list-item>\n      </mat-list>\n    </mat-menu>\n\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-img {\n  width: 100%;\n  height: auto;\n  margin-top: 3%;\n  max-width: 282px;\n  max-height: 40px; }\n\n.nav-btn {\n  margin: 3px; }\n\n.theme-icon {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  margin: 6px;\n  border-radius: 50%;\n  overflow: hidden; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.sidenav-card-title {\n  max-width: 100%;\n  word-wrap: break-word; }\n\n.avatar {\n  width: 50px;\n  height: 50px;\n  background-image: url('avatar-0.jpg');\n  background-size: cover; }\n\n@media only screen and (max-width: 993px) {\n  .nav-btn {\n    margin: 1px; } }\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    margin: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osZUFBYztFQUNkLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2Ysc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixzQ0FBdUQ7RUFDdkQsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0U7SUFDRSxZQUFXLEVBQ1osRUFBQTs7QUFHSDtFQUNFO0lBQ0UsVUFBUyxFQUNWLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWF4LXdpZHRoOiAyODJweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbn1cblxuLm5hdi1idG4ge1xuICBtYXJnaW46IDNweDtcbn1cblxuLnRoZW1lLWljb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5zaWRlbmF2LWNhcmQtdGl0bGUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2F2YXRhci0wLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTNweCkge1xuICAubmF2LWJ0biB7XG4gICAgbWFyZ2luOiAxcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2LWJ0biB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_service/theme.service */ "./src/app/_service/theme.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavComponent = /** @class */ (function () {
    function NavComponent(router, themeService, auth, snackBar) {
        var _this = this;
        this.router = router;
        this.themeService = themeService;
        this.auth = auth;
        this.snackBar = snackBar;
        this.map = null;
        this.currentUserSubscription = this.auth.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentThemeSubscription = this.themeService.theme.subscribe(function (t) {
            _this.currentTheme = t === null ? 'default' : t;
        });
    };
    NavComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
        this.currentThemeSubscription.unsubscribe();
    };
    NavComponent.prototype.onChangeTheme = function (theme) {
        var _this = this;
        this.themeService.setTheme(theme);
        this.currentThemeSubscription = this.themeService.theme.subscribe(function (t) {
            _this.currentTheme = t;
        });
    };
    // goProfile() {
    //   this.router.navigate(['/user/' + this.currentUser.id]);
    // }
    NavComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout();
        this.router.navigate(['/login']).then(function () {
            _this.snackBar.open("Logout successfully", "OK", {
                duration: 5000
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "map", void 0);
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"row\">\n    <div class=\"col l12 m12 s12\">\n        <h1>404</h1>\n        <h2>Not Found</h2>\n        <div class=\"frame\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n        <!-- <canvas id=\"canvas\" style=\"position: fixed; top: 0; left: 0; z-index: -1000;\"></canvas> -->\n        <canvas id=\"canvas\"></canvas>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0; }\n\ncanvas {\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n\n.caps {\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-animation: as 8s linear infinite;\n          animation: as 8s linear infinite; }\n\n.caps img {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n@-webkit-keyframes as {\n  0% {\n    opacity: 0; }\n  10% {\n    opacity: .3; }\n  20% {\n    opacity: .1; }\n  30% {\n    opacity: .5; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: .8; }\n  55% {\n    opacity: 0; }\n  55% {\n    opacity: 0; } }\n\n@keyframes as {\n  0% {\n    opacity: 0; }\n  10% {\n    opacity: .3; }\n  20% {\n    opacity: .1; }\n  30% {\n    opacity: .5; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: .8; }\n  55% {\n    opacity: 0; }\n  55% {\n    opacity: 0; } }\n\n.frame {\n  z-index: 3;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 19%, rgba(0, 0, 0, 0.9) 100%);\n  /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#00000000', endColorstr = '#e6000000', GradientType = 1);\n  /* IE6-9 fallback on horizontal gradient */ }\n\n.frame div {\n  position: absolute;\n  left: 0;\n  top: -20%;\n  width: 100%;\n  height: 20%;\n  background-color: rgba(0, 0, 0, 0.12);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  -webkit-animation: asd 12s linear infinite;\n          animation: asd 12s linear infinite; }\n\n.frame div:nth-child(1) {\n  -webkit-animation-delay: 0;\n          animation-delay: 0; }\n\n.frame div:nth-child(2) {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s; }\n\n.frame div:nth-child(3) {\n  -webkit-animation-delay: 8s;\n          animation-delay: 8s; }\n\n@-webkit-keyframes asd {\n  0% {\n    top: -20%; }\n  100% {\n    top: 100%; } }\n\n@keyframes asd {\n  0% {\n    top: -20%; }\n  100% {\n    top: 100%; } }\n\nh1 {\n  z-index: 3;\n  position: absolute;\n  font: bold 200px/200px Arial, sans-serif;\n  left: 50%;\n  top: 50%;\n  margin-top: -100px;\n  width: 100%;\n  margin-left: -50%;\n  height: 200px;\n  text-align: center;\n  color: transparent;\n  text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\n  -webkit-animation: asdd 2s linear infinite;\n          animation: asdd 2s linear infinite; }\n\n@-webkit-keyframes asdd {\n  0% {\n    text-shadow: 0 0 30px rgba(0, 0, 0, 0.5); }\n  33% {\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n  66% {\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.2); }\n  100% {\n    text-shadow: 0 0 40px rgba(0, 0, 0, 0.8); } }\n\n@keyframes asdd {\n  0% {\n    text-shadow: 0 0 30px rgba(0, 0, 0, 0.5); }\n  33% {\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n  66% {\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.2); }\n  100% {\n    text-shadow: 0 0 40px rgba(0, 0, 0, 0.8); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFTO0VBQ1QsV0FBVSxFQUNYOztBQUVEO0VBQ0UsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsT0FBTTtFQUNOLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxPQUFNO0VBQ04sWUFBVztFQUNYLGFBQVk7RUFDWixXQUFVO0VBQ1YseUNBQWdDO1VBQWhDLGlDQUFnQyxFQUNqQzs7QUFFRDtFQUNFLGVBQWM7RUFDZCxZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0U7SUFDSSxXQUFVLEVBQUE7RUFFZDtJQUNJLFlBQVcsRUFBQTtFQUVmO0lBQ0ksWUFBVyxFQUFBO0VBRWY7SUFDSSxZQUFXLEVBQUE7RUFFZjtJQUNJLFdBQVUsRUFBQTtFQUVkO0lBQ0ksWUFBVyxFQUFBO0VBRWY7SUFDSSxXQUFVLEVBQUE7RUFFZDtJQUNJLFdBQVUsRUFBQSxFQUFBOztBQXZCaEI7RUFDRTtJQUNJLFdBQVUsRUFBQTtFQUVkO0lBQ0ksWUFBVyxFQUFBO0VBRWY7SUFDSSxZQUFXLEVBQUE7RUFFZjtJQUNJLFlBQVcsRUFBQTtFQUVmO0lBQ0ksV0FBVSxFQUFBO0VBRWQ7SUFDSSxZQUFXLEVBQUE7RUFFZjtJQUNJLFdBQVUsRUFBQTtFQUVkO0lBQ0ksV0FBVSxFQUFBLEVBQUE7O0FBSWhCO0VBQ0UsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsT0FBTTtFQUNOLFlBQVc7RUFDWCxhQUFZO0VBQ2lILFlBQVk7RUFDaUQscUJBQXFCO0VBQy9FLDBCQUEwQjtFQUMvQixlQUFlO0VBQ2QsV0FBVztFQUN2SSxtSEFBa0g7RUFBRSxTQUFTO0VBQzdILDZIQUE0SDtFQUFFLDJDQUEyQyxFQUUxSzs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsVUFBUztFQUNULFlBQVc7RUFDWCxZQUFXO0VBQ1gsc0NBQW9DO0VBQ3BDLHdDQUFzQztFQUN0QywyQ0FBa0M7VUFBbEMsbUNBQWtDLEVBQ25DOztBQUVEO0VBQ0UsMkJBQWtCO1VBQWxCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLDRCQUFtQjtVQUFuQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSw0QkFBbUI7VUFBbkIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0U7SUFDSSxVQUFTLEVBQUE7RUFFYjtJQUNJLFVBQVMsRUFBQSxFQUFBOztBQUxmO0VBQ0U7SUFDSSxVQUFTLEVBQUE7RUFFYjtJQUNJLFVBQVMsRUFBQSxFQUFBOztBQUlmO0VBQ0UsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQix5Q0FBd0M7RUFDeEMsVUFBUztFQUNULFNBQVE7RUFDUixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQix5Q0FBdUM7RUFDdkMsMkNBQWtDO1VBQWxDLG1DQUFrQyxFQUNuQzs7QUFFRDtFQUNFO0lBQ0kseUNBQXVDLEVBQUE7RUFFM0M7SUFDSSx5Q0FBdUMsRUFBQTtFQUUzQztJQUNJLHlDQUF1QyxFQUFBO0VBRTNDO0lBQ0kseUNBQXVDLEVBQUEsRUFBQTs7QUFYN0M7RUFDRTtJQUNJLHlDQUF1QyxFQUFBO0VBRTNDO0lBQ0kseUNBQXVDLEVBQUE7RUFFM0M7SUFDSSx5Q0FBdUMsRUFBQTtFQUUzQztJQUNJLHlDQUF1QyxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmNhbnZhcyB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FwcyB7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGFzIDhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmNhcHMgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgYXMge1xuICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwJSB7XG4gICAgICBvcGFjaXR5OiAuMztcbiAgfVxuICAyMCUge1xuICAgICAgb3BhY2l0eTogLjE7XG4gIH1cbiAgMzAlIHtcbiAgICAgIG9wYWNpdHk6IC41O1xuICB9XG4gIDQwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgICBvcGFjaXR5OiAuODtcbiAgfVxuICA1NSUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICA1NSUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uZnJhbWUge1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDApIDE5JSwgcmdiYSgwLCAwLCAwLCAwLjkpIDEwMCUpOyAvKiBGRjMuNisgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgcmdiYSgwLCAwLCAwLCAwKSksIGNvbG9yLXN0b3AoMTklLCByZ2JhKDAsIDAsIDAsIDApKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDAsIDAsIDAsIDAuOSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwKSAxOSUsIHJnYmEoMCwgMCwgMCwgMC45KSAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwKSAxOSUsIHJnYmEoMCwgMCwgMCwgMC45KSAxMDAlKTsgLyogT3BlcmEgMTIrICovXG4gIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDApIDE5JSwgcmdiYSgwLCAwLCAwLCAwLjkpIDEwMCUpOyAvKiBJRTEwKyAqL1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTklLCByZ2JhKDAsIDAsIDAsIDAuOSkgMTAwJSk7IC8qIFczQyAqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyID0gJyMwMDAwMDAwMCcsIGVuZENvbG9yc3RyID0gJyNlNjAwMDAwMCcsIEdyYWRpZW50VHlwZSA9IDEpOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG5cbn1cblxuLmZyYW1lIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAuMyk7XG4gIGFuaW1hdGlvbjogYXNkIDEycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5mcmFtZSBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuXG4uZnJhbWUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XG59XG5cbi5mcmFtZSBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiA4cztcbn1cblxuQGtleWZyYW1lcyBhc2Qge1xuICAwJSB7XG4gICAgICB0b3A6IC0yMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgICB0b3A6IDEwMCU7XG4gIH1cbn1cblxuaDEge1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQ6IGJvbGQgMjAwcHgvMjAwcHggQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNTAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xuICBhbmltYXRpb246IGFzZGQgMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGFzZGQge1xuICAwJSB7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gIH1cbiAgMzMlIHtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIC40KTtcbiAgfVxuICA2NiUge1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICB9XG4gIDEwMCUge1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgLjgpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        // js source https://codepen.io/moklick/pen/zKleC  
        var Application = (function () {
            var canvas;
            var ctx;
            var imgData;
            var pix;
            var WIDTH;
            var HEIGHT;
            var flickerInterval;
            var init = function () {
                canvas = d3.select('#canvas').node();
                ctx = canvas.getContext('2d');
                canvas.width = WIDTH = 700;
                canvas.height = HEIGHT = 500;
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, WIDTH, HEIGHT);
                ctx.fill();
                imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
                pix = imgData.data;
                flickerInterval = setInterval(flickering, 30);
            };
            var flickering = function () {
                for (var i = 0; i < pix.length; i += 4) {
                    var color = (Math.random() * 255) + 50;
                    pix[i] = color;
                    pix[i + 1] = color;
                    pix[i + 2] = color;
                }
                ctx.putImageData(imgData, 0, 0);
            };
            return {
                init: init
            };
        }());
        Application.init();
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/profile/delete-user-dialog.html":
/*!*************************************************!*\
  !*** ./src/app/profile/delete-user-dialog.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Are you sure to delete the account: {{data.user.email}}? </h2>\n<div mat-dialog-content>\n    <h5>Once you delete your account, you can't recover it unless you contact the administrator.</h5>\n    <h5>Contact Email: yang.shizhen@uwlax.edu</h5>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"data.user\" (click)=\"onDelete()\" [disabled]=\"!data.user\">Delete</button>\n  <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<mat-progress-bar *ngIf=\"loading\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n<div class=\"container\">\n  <mat-tab-group mat-stretch-tabs class=\"mat-elevation-z4\">\n    <mat-tab label=\"Personal Info\">\n      <mat-card class=\"padding-0 mat-elevation-z0\">\n        <mat-card-header class=\"profile-backgound\" [ngStyle]=\"{'background-image': getBackground()}\"\n          (mouseenter)=\"isBgEnter = true\" (mouseleave)=\"isBgEnter = false\">\n          <button mat-icon-button class=\"mat-elevation-z1 bg-camera-btn\" *ngIf=\"isBgEnter\" type=\"button\"\n            matTooltip=\"Upload background image\" matTooltipClass=\"tooltip-black\">\n            <mat-icon>camera_alt</mat-icon>\n          </button>\n        </mat-card-header>\n\n        <mat-card-header class=\"profile-header\">\n          <div class=\"profile-avatar center\" (mouseenter)=\"isEnter = true\" (mouseleave)=\"isEnter = false\">\n            <button mat-icon-button class=\"mat-elevation-z1 avatar-camera-btn\" *ngIf=\"isEnter\" type=\"button\"\n              matTooltip=\"Upload avatar\" matTooltipClass=\"tooltip-black\">\n              <mat-icon>camera_alt</mat-icon>\n            </button>\n            <img mat-card-avatar src=\"{{currentUser.avatar}}\" class=\"avatar mat-elevation-z2\" />\n          </div>\n          <!-- <button mat-icon-button class=\"mat-elevation-z0 edit-btn\">\n              <mat-icon>edit</mat-icon>\n            </button> -->\n        </mat-card-header>\n        <mat-card-title class=\"profile-username center\" *ngIf=\"currentUser\">{{currentUser.firstname}}\n          {{currentUser.lastname}}</mat-card-title>\n      </mat-card>\n\n      <div class=\"row\">\n        <div class=\"col l6 s12\">\n          <form [formGroup]=\"emailForm\" (ngSubmit)=\"onUpdateEmail()\">\n            <mat-card class=\"profile-card mat-elevation-z4\">\n              <mat-card-header class=\"update-header\">\n                Change Email\n                <button mat-icon-button class=\"update-btn\" type=\"submit\" matTooltip=\"Update email\"\n                  matTooltipClass=\"tooltip-black\" *ngIf=\"emailForm.valid && isEmailChanged\">\n                  <mat-icon>refresh</mat-icon>\n                </button>\n              </mat-card-header>\n              <mat-card-content>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Email\" formControlName=\"email\">\n                  <mat-error *ngIf=\"emailForm.controls['email'].errors?.email\">Email should be typed in right format.\n                  </mat-error>\n                </mat-form-field>\n              </mat-card-content>\n            </mat-card>\n          </form>\n        </div>\n\n        <div class=\"col l6 s12\">\n          <form [formGroup]=\"passwordForm\" (ngSubmit)=\"verifyPassword()\" *ngIf=\"!isConfirmed\">\n            <mat-card class=\"profile-card mat-elevation-z4\">\n              <mat-card-header class=\"update-header\">\n                Change Password\n                <button mat-icon-button class=\"update-btn\" type=\"submit\" matTooltip=\"Verify\"\n                  matTooltipClass=\"tooltip-black\">\n                  <mat-icon>arrow_forward</mat-icon>\n                </button>\n              </mat-card-header>\n              <mat-card-content>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Verify old password\" formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\">\n                  <mat-icon matSuffix (click)=\"hide = !hide\" class=\"pointer\">{{hide ? 'visibility_off' : 'visibility'}}\n                  </mat-icon>\n                  <mat-error *ngIf=\"passwordForm.controls['password'].errors?.minLength\">Minimum 3 characters needed.\n                  </mat-error>\n                </mat-form-field>\n              </mat-card-content>\n            </mat-card>\n          </form>\n\n          <form [formGroup]=\"confirmPasswordForm\" (ngSubmit)=\"onUpdatePassword()\" *ngIf=\"isConfirmed\">\n            <mat-card class=\"profile-card mat-elevation-z4\">\n              <mat-card-header class=\"update-header\">\n                Change Password\n                <button mat-icon-button class=\"update-btn\" type=\"button\" matTooltip=\"Go back\"\n                  matTooltipClass=\"tooltip-black\" (click)=\"isConfirmed = false\">\n                  <mat-icon>arrow_back</mat-icon>\n                </button>\n                <button mat-icon-button class=\"change-password-btn\" type=\"submit\" matTooltip=\"Change password\"\n                  matTooltipClass=\"tooltip-black\" *ngIf=\"confirmPasswordForm.valid\">\n                  <mat-icon>refresh</mat-icon>\n                </button>\n              </mat-card-header>\n              <mat-card-content>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"New password\" formControlName=\"newPassword\"\n                    [type]=\"hide ? 'password' : 'text'\">\n                  <mat-icon matSuffix (click)=\"hide = !hide\" class=\"pointer\">{{hide ? 'visibility_off' : 'visibility'}}\n                  </mat-icon>\n                  <mat-error *ngIf=\"confirmPasswordForm.controls['newPassword'].errors?.minLength\">Minimum 3 characters\n                    needed</mat-error>\n                </mat-form-field>\n\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Confirm new password\" formControlName=\"confirmNewPassword\"\n                    [type]=\"hide ? 'password' : 'text'\" [errorStateMatcher]=\"passwordMatcher\">\n                  <mat-icon matSuffix (click)=\"hide = !hide\" class=\"pointer\">{{hide ? 'visibility_off' : 'visibility'}}\n                  </mat-icon>\n                  <mat-error *ngIf=\"confirmPasswordForm.controls['confirmNewPassword'].errors?.minLength\">Minimum 3\n                    characters needed</mat-error>\n                  <mat-error *ngIf=\"confirmPasswordForm.hasError('notSame')\">Passwords do not match</mat-error>\n                </mat-form-field>\n              </mat-card-content>\n            </mat-card>\n          </form>\n        </div>\n\n        <div class=\"col l6 s12\">\n          <form [formGroup]=\"nameForm\" (ngSubmit)=\"onUpdateName()\">\n            <mat-card class=\"profile-card mat-elevation-z4\">\n              <mat-card-header class=\"update-header\">\n                Change Name\n                <button mat-icon-button class=\"update-btn\" type=\"submit\" matTooltip=\"Update name\"\n                  matTooltipClass=\"tooltip-black\" *ngIf=\"nameForm.valid && isNameChanged\">\n                  <mat-icon>refresh</mat-icon>\n                </button>\n              </mat-card-header>\n              <mat-card-content>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Firstname\" formControlName=\"firstname\">\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Lastname\" formControlName=\"lastname\">\n                </mat-form-field>\n              </mat-card-content>\n            </mat-card>\n          </form>\n        </div>\n\n        <!-- <div class=\"col l6 s12\">\n          <form [formGroup]=\"deleteForm\" (ngSubmit)=\"onBlock()\">\n            <mat-card class=\"profile-card mat-elevation-z4\">\n              <mat-card-header class=\"update-header\">\n                Delete account\n              </mat-card-header>\n              <mat-card-content>\n                <mat-form-field class=\"example-full-width\">\n                  <textarea matInput placeholder=\"Leave a reason\" formControlName=\"reason\"></textarea>\n                </mat-form-field>\n              </mat-card-content>\n              <mat-card-actions>\n                <button mat-raised-button class=\"delete-btn\" type=\"button\" color=\"warn\" [disabled]=\"deleteForm.invalid\"\n                  (click)=\"openDeleteDialog()\">Delete\n                </button>\n              </mat-card-actions>\n            </mat-card>\n          </form>\n        </div> -->\n\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Preferences\">\n      <div class=\"row\">\n        <form [formGroup]=\"emailForm\" (ngSubmit)=\"onUpdateEmail()\">\n\n          <div class=\"col l6 s12\">\n            <!--Date tile-->\n            <mat-card class=\"profile-card mat-elevation-z4\">\n              <mat-card-header class=\"update-header\">Date Format</mat-card-header>\n              <mat-card-content>\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Date format\">\n                    <mat-option value=\"YYYY-MM-DD\">YYYY-MM-DD</mat-option>\n                    <mat-option value=\"MM-DD-YYYY\">MM-DD-YYYY</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </mat-card-content>\n            </mat-card>\n          </div>\n\n          <div class=\"col l6 s12\">\n            <!--Map display tile-->\n            <mat-card class=\"profile-card mat-elevation-z4\">\n              <mat-card-header class=\"update-header\">Map display mode</mat-card-header>\n              <mat-card-content>\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Map display\">\n                    <mat-option value=\"list\">list</mat-option>\n                    <mat-option value=\"thumbnail\">thumbnail</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </mat-card-content>\n            </mat-card>\n          </div>\n\n          <button mat-raised-button class=\"setting-btn\" type=\"button\" disabled color=\"primary\">Save</button>\n        </form>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-card {\n  max-width: 100%;\n  margin: 24px; }\n\n.profile-backgound {\n  height: 300px;\n  max-width: 100%;\n  max-height: 480px;\n  cursor: pointer;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.profile-header {\n  margin-top: -60px;\n  overflow: hidden; }\n\n.profile-username {\n  font-size: 32px; }\n\n.edit-btn {\n  position: absolute;\n  top: 190px;\n  right: 12px;\n  width: 48px;\n  height: 48px; }\n\n.bg-camera-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 48px;\n  height: 48px;\n  background: rgba(0, 0, 0, 0.26);\n  color: white; }\n\n.avatar-camera-btn {\n  position: absolute;\n  left: 50%;\n  width: 48px;\n  height: 48px;\n  margin-top: 36px;\n  margin-left: -16px;\n  background: rgba(0, 0, 0, 0.26);\n  color: white; }\n\n.profile-avatar {\n  width: 124px;\n  height: 124px;\n  border-radius: 50%; }\n\n.avatar {\n  width: 120px;\n  height: 120px;\n  cursor: pointer;\n  margin-top: -1.5px;\n  margin-left: -16px;\n  border: 2px solid #fff; }\n\n.padding-0 {\n  padding: 0; }\n\n.profile-input {\n  margin: 10px; }\n\n.example-full-width {\n  width: 100%; }\n\n.update-header {\n  margin: 0 0 16px -32px !important; }\n\n.update-btn {\n  position: absolute;\n  right: 8px;\n  top: 8px; }\n\n.change-password-btn {\n  position: absolute;\n  right: 56px;\n  top: 8px; }\n\n.setting-btn {\n  position: absolute;\n  right: 24px;\n  bottom: -24px; }\n\n.delete-btn {\n  position: absolute;\n  right: 8px;\n  bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZiw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBVztFQUNYLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFlBQVc7RUFDWCxZQUFXO0VBQ1gsYUFBWTtFQUNaLGdDQUE0QjtFQUM1QixhQUE2QixFQUM5Qjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGdDQUE0QjtFQUM1QixhQUE2QixFQUFFOztBQUVqQztFQUdFLGFBQVk7RUFDWixjQUFhO0VBQ2IsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0Usa0NBQWlDLEVBQ2xDOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixTQUFRLEVBQ1Q7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFNBQVEsRUFDVDs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsY0FBYSxFQUNkOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI0cHg7XG59XG5cbi5wcm9maWxlLWJhY2tnb3VuZCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDgwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucHJvZmlsZS1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2ZpbGUtdXNlcm5hbWUge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5lZGl0LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOTBweDtcbiAgcmlnaHQ6IDEycHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5iZy1jYW1lcmEtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMjYpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLmF2YXRhci1jYW1lcmEtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjI2KTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7fVxuXG4ucHJvZmlsZS1hdmF0YXIge1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEyNHB4O1xuICBoZWlnaHQ6IDEyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogLTEuNXB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG5cbi5wYWRkaW5nLTAge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucHJvZmlsZS1pbnB1dCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXBkYXRlLWhlYWRlciB7XG4gIG1hcmdpbjogMCAwIDE2cHggLTMycHggIWltcG9ydGFudDtcbn1cblxuLnVwZGF0ZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG4gIHRvcDogOHB4O1xufVxuXG4uY2hhbmdlLXBhc3N3b3JkLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDU2cHg7XG4gIHRvcDogOHB4O1xufVxuXG4uc2V0dGluZy1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNHB4O1xuICBib3R0b206IC0yNHB4O1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgYm90dG9tOiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: MyErrorStateMatcher, ProfileComponent, DeleteUserDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserDialog", function() { return DeleteUserDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_service/user.service */ "./src/app/_service/user.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dialog, formBuilder, userService, auth, snackBar) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.auth = auth;
        this.snackBar = snackBar;
        this.hide = true;
        this.loading = false;
        this.isEnter = false;
        this.isBgEnter = false;
        this.isEmailChanged = false;
        this.isNameChanged = false;
        this.isConfirmed = false;
        this.passwordMatcher = new MyErrorStateMatcher();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserSubscription = this.auth.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.emailForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.currentUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, this.ValidateEmail(this.currentUser.email)])
        });
        this.nameForm = this.formBuilder.group({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.currentUser.firstname, [this.ValidateFirstname(this.currentUser.firstname)]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.currentUser.lastname, [this.ValidateLastname(this.currentUser.lastname)])
        });
        this.passwordForm = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
        });
        this.confirmPasswordForm = this.formBuilder.group({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            confirmNewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])
        }, { validator: this.ValidatePassword });
        this.deleteForm = this.formBuilder.group({
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    ProfileComponent.prototype.onUpdateEmail = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.emailForm.invalid || !this.isEmailChanged) {
            return;
        }
        this.loading = true;
        this.userService.updateEmail(this.emailForm.value.email, this.currentUser.id)
            .subscribe(function (data) {
            _this.loading = false;
            _this.auth.updateLocalStoragelUser(data);
            _this.ngOnInit();
            _this.snackBar.open("email updated successfully", "OK", {
                duration: 4000
            });
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.msg, "OK", {
                duration: 4000
            });
        });
    };
    ProfileComponent.prototype.onUpdateName = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.nameForm.invalid || !this.isNameChanged) {
            return;
        }
        this.loading = true;
        this.userService.updateName(this.nameForm.value.firstname, this.nameForm.value.lastname, this.currentUser.id)
            .subscribe(function (data) {
            _this.loading = false;
            _this.auth.updateLocalStoragelUser(data);
            _this.ngOnInit();
            _this.snackBar.open("name updated successfully", "OK", {
                duration: 4000
            });
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.msg, "OK", {
                duration: 4000
            });
        });
    };
    ProfileComponent.prototype.onUpdatePassword = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.confirmPasswordForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.updatePassword(this.confirmPasswordForm.value.confirmNewPassword, this.currentUser.id)
            .subscribe(function (data) {
            _this.loading = false;
            _this.ngOnInit();
            _this.isConfirmed = false;
            _this.snackBar.open(data.msg, "OK", {
                duration: 4000
            });
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.msg, "OK", {
                duration: 4000
            });
        });
    };
    ProfileComponent.prototype.verifyPassword = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.passwordForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.verifyPassword(this.passwordForm.value.password, this.currentUser.id)
            .subscribe(function (data) {
            if (data) {
                _this.loading = false;
                _this.isConfirmed = true;
                _this.passwordForm.controls['password'].setValue("");
                _this.snackBar.open("password verified", "OK", {
                    duration: 4000
                });
            }
            else {
                _this.snackBar.open("incorrect password, please try again", "OK", {
                    duration: 4000
                });
            }
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.msg, "OK", {
                duration: 4000
            });
        });
    };
    ProfileComponent.prototype.ValidateEmail = function (email) {
        var _this = this;
        return function (control) {
            if (control.value === email || control.value === "") {
                _this.isEmailChanged = false;
            }
            else {
                _this.isEmailChanged = true;
            }
            return null;
        };
    };
    ProfileComponent.prototype.ValidateFirstname = function (name) {
        var _this = this;
        return function (control) {
            if (control.value === name || control.value === "") {
                _this.isNameChanged = false;
            }
            else {
                _this.isNameChanged = true;
            }
            return null;
        };
    };
    ProfileComponent.prototype.ValidateLastname = function (name) {
        var _this = this;
        return function (control) {
            if (control.value === name || control.value === "") {
                _this.isNameChanged = false;
            }
            else {
                _this.isNameChanged = true;
            }
            return null;
        };
    };
    ProfileComponent.prototype.ValidatePassword = function (group) {
        var password = group.controls.newPassword.value;
        var confirmPassword = group.controls.confirmNewPassword.value;
        return password === confirmPassword && confirmPassword !== "" ? null : { 'notSame': true };
    };
    ProfileComponent.prototype.openDeleteDialog = function () {
        this.dialog.open(DeleteUserDialog, {
            width: '320px',
            data: { user: this.currentUser }
        });
    };
    ProfileComponent.prototype.getBackground = function () {
        return 'url(assets/images/bg-0.jpg)';
        // return 'url(https://material.angular.io/assets/img/examples/shiba1.jpg)';
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["Auth"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ProfileComponent);
    return ProfileComponent;
}());

/*=====================================================================================================
                                            Delete User
======================================================================================================*/
var DeleteUserDialog = /** @class */ (function () {
    function DeleteUserDialog(router, userService, auth, snackBar, dialogRef, data) {
        this.router = router;
        this.userService = userService;
        this.auth = auth;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loading = false;
    }
    DeleteUserDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteUserDialog.prototype.onDelete = function () {
        var _this = this;
        this.loading = true;
        this.auth.logout();
        this.userService.updteEnabled(this.data.user, this.data.user.id)
            .subscribe(function (data) {
            _this.loading = false;
            if (data.enabled === false) {
                _this.router.navigate(['/login']).then(function () {
                    _this.auth.logout();
                    _this.snackBar.open("account deleted, good bye :)", "OK", {
                        duration: 4000
                    });
                });
            }
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.error, "OK", {
                duration: 4000
            });
        });
    };
    DeleteUserDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-user-dialog',
            template: __webpack_require__(/*! ./delete-user-dialog.html */ "./src/app/profile/delete-user-dialog.html"),
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["Auth"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeleteUserDialog);
    return DeleteUserDialog;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"loading\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n<div class=\"signup-container\">\n  <mat-card class=\"signup-card\">\n    <img mat-card-image src=\"assets/images/metropolist.png\"\n      alt=\"Metropolist\">\n    <mat-card-header class=\"signup-header\">\n      <mat-card-title>Create your Account</mat-card-title>\n      <mat-card-subtitle>to start with Metropolist</mat-card-subtitle>\n    </mat-card-header>\n\n    <div class=\"row\">\n      <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\">\n        <input type=\"hidden\" formControlName=\"$key\">\n        <div class=\"col l12 s12\">\n          <mat-form-field class=\"form-field\" appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input formControlName=\"email\" matInput placeholder=\"\" required>\n            <mat-error *ngIf=\"signUpForm.controls['email'].errors?.required\">Email is required.</mat-error>\n            <mat-error *ngIf=\"signUpForm.controls['email'].errors?.email\">Email should be typed in right format.\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col l6 s12\">\n          <mat-form-field class=\"form-field\" appearance=\"outline\">\n            <mat-label>Firstname</mat-label>\n            <input formControlName=\"firstname\" matInput placeholder=\"\" required>\n            <mat-error>Firstname is required.</mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col l6 s12\">\n          <mat-form-field class=\"form-field\" appearance=\"outline\">\n            <mat-label>Lastname</mat-label>\n            <input formControlName=\"lastname\" matInput placeholder=\"\" required>\n            <mat-error>Lastname is required.</mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col l12 s12\">\n          <mat-form-field class=\"form-field\" appearance=\"outline\">\n            <mat-label>Password</mat-label>\n            <input formControlName=\"password\" matInput required placeholder=\"\" [type]=\"hide ? 'password' : 'text'\">\n            <mat-icon matSuffix (click)=\"hide = !hide\" class=\"pointer\">{{hide ? 'visibility_off' : 'visibility'}}\n            </mat-icon>\n            <mat-error *ngIf=\"signUpForm.controls['password'].errors?.required\">Password is required.</mat-error>\n            <mat-error *ngIf=\"signUpForm.controls['password'].errors?.minLength\">Minimum 6 characters needed.</mat-error>\n            <mat-error *ngIf=\"signUpForm.controls['password'].errors?.pattern\">Lowercase, uppercase and number needed.</mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col l12 s12\">\n          <mat-form-field class=\"form-field\" appearance=\"outline\">\n            <mat-label>Confirm</mat-label>\n            <input formControlName=\"confirmPassword\" matInput required placeholder=\"\"\n              [type]=\"hide ? 'password' : 'text'\" [errorStateMatcher]=\"passwordMatcher\">\n            <mat-icon matSuffix (click)=\"hide = !hide\" class=\"pointer\">{{hide ? 'visibility_off' : 'visibility'}}\n            </mat-icon>\n            <mat-error *ngIf=\"signUpForm.hasError('notSame')\">Passwords do not match.</mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col l12 s12\">\n            <a [routerLink]=\"['/login']\">Log in instead</a>\n            <!-- <p>Already have an account? Go <a mat-stroked-button [routerLink]=\"['/login']\">Log in instead</a></p> -->\n          </div>\n        </div>\n\n        <mat-card-actions>\n          <a mat-raised-button color=\"warn\" (click)=\"onClear()\">Clear</a>\n          <button mat-raised-button color=\"primary\" [disabled]=\"signUpForm.invalid || loading\" type=\"submit\">Sign\n            up</button>\n        </mat-card-actions>\n      </form>\n    </div>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-container {\n  padding: 5%;\n  height: auto;\n  max-height: 80%;\n  display: block;\n  text-align: center;\n  flex-direction: column; }\n\n.signup-card {\n  width: 560px;\n  height: inherit;\n  max-width: 90%;\n  padding: 5% 0 3% 0;\n  margin-left: auto;\n  margin-right: auto; }\n\n.signup-card .signup-header {\n    margin-left: 30%; }\n\n.signup-card > * {\n  width: 50%;\n  padding: 0; }\n\n@media only screen and (max-width: 600px) {\n  .signup-container {\n    padding: 0;\n    height: 100%;\n    max-width: 100%;\n    max-height: 100%; }\n  .signup-card {\n    padding: 10% 0 0 0;\n    max-width: 100%;\n    max-height: 100%; }\n    .signup-card .signup-header {\n      margin-left: 20%; }\n  .signup-card > * {\n    margin: auto;\n    width: 70%;\n    padding: 2%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUtuQjs7QUFYRDtJQVNJLGlCQUFnQixFQUNqQjs7QUFHSDtFQUNFLFdBQVU7RUFDVixXQUFVLEVBQ1g7O0FBRUQ7RUFDRTtJQUNFLFdBQVU7SUFDVixhQUFZO0lBQ1osZ0JBQWU7SUFDZixpQkFBZ0IsRUFDakI7RUFFRDtJQUNFLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLGlCQUFnQixFQUtqQjtJQVJEO01BTUksaUJBQWdCLEVBQ2pCO0VBR0g7SUFDRSxhQUFZO0lBQ1osV0FBVTtJQUNWLFlBQVcsRUFDWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNSU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogODAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lnbnVwLWNhcmQge1xuICB3aWR0aDogNTYwcHg7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDUlIDAgMyUgMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAuc2lnbnVwLWhlYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxufVxuXG4uc2lnbnVwLWNhcmQgPiAqIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2lnbnVwLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5zaWdudXAtY2FyZCB7XG4gICAgcGFkZGluZzogMTAlIDAgMCAwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuXG4gICAgLnNpZ251cC1oZWFkZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICB9XG4gIH1cblxuICAuc2lnbnVwLWNhcmQgPiAqIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: MyErrorStateMatcher, SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_service/user.service */ "./src/app/_service/user.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());

var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, userService, router, snackBar, auth) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.snackBar = snackBar;
        this.auth = auth;
        this.hide = true;
        this.loading = false;
        this.passwordMatcher = new MyErrorStateMatcher();
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserSubscription = this.auth.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        // if user is already logged in, redirecting to /dashboard
        if (this.currentUser) {
            this.router.navigate(['/dashboard']);
        }
        this.signUpForm = this.formBuilder.group({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
            // password: new FormControl('', [Validators.minLength(3), Validators.required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        }, { validator: this.ValidatePassword });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    SignupComponent.prototype.onClear = function () {
        this.signUpForm.reset();
        this.signUpForm.setValue({
            $key: null,
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            confirmPassword: '',
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.signUpForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.signup(this.signUpForm.value)
            .subscribe(function (data) {
            _this.router.navigate(['/login']).then(function () {
                _this.snackBar.open("Sign up successfully!", "OK", {
                    duration: 4000
                });
            });
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.msg, "OK", {
                duration: 4000
            });
        });
    };
    SignupComponent.prototype.ValidatePassword = function (group) {
        var password = group.controls.password.value;
        var confirmPassword = group.controls.confirmPassword.value;
        return confirmPassword === password ? null : { 'notSame': true };
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["Auth"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/create-map-dialog.html":
/*!*********************************************!*\
  !*** ./src/app/user/create-map-dialog.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>What's the name of your new map?</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput #mapName [(ngModel)]=\"data.mapName\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data.mapName\" (click)=\"onCreate()\" [disabled]=\"!data.mapName || loading\">Create</button>\n  <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n</div>"

/***/ }),

/***/ "./src/app/user/delete-map-dialog.html":
/*!*********************************************!*\
  !*** ./src/app/user/delete-map-dialog.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Are you sure to delete map:</h1>\n<div mat-dialog-content>\n    <h4>{{data.mapName}}?</h4>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"data.mapName\" (click)=\"onDelete()\" [disabled]=\"!data.mapName || loading\">Delete</button>\n  <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Search for user</mat-label>\n    <input matInput>\n    <mat-icon matSuffix class=\"pointer\" (click)=\"onSearch()\">search</mat-icon>\n    <mat-hint>email, firstname, lastname...</mat-hint>\n  </mat-form-field>\n</p> -->\n<div class=\"center loading-spinner\" *ngIf=\"!maps\">\n  <h6>Loading data...</h6><br>\n  <mat-spinner class=\"center\" color=\"accent\"></mat-spinner>\n</div>\n\n<div class=\"center\" *ngIf=\"maps && maps.length === 0\">\n  <mat-card class=\"loading-spinner\">\n    <h4>You don't have any map</h4>\n    <h4>Go\n      <button mat-raised-button color=\"accent\" matTooltip=\"Create Map\" matTooltipClass=\"tooltip-black\"\n        (click)=\"openCreateDialog()\">\n        <h4>Create</h4>\n      </button>\n      one</h4>\n  </mat-card>\n</div>\n\n<div *ngIf=\"maps && maps.length !== 0\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <div class=\"mat-elevation-z8 table\">\n    <!-- <mat-progress-bar *ngIf=\"loading\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar> -->\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n      </ng-container>\n\n      <!-- CreateDate Column -->\n      <ng-container matColumnDef=\"createDate\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Create Date </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.createDate}} </td>\n      </ng-container>\n\n      <!-- EditDate Column -->\n      <ng-container matColumnDef=\"editDate\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Edit Date </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.editDate}} </td>\n      </ng-container>\n\n      <!-- isVisible Column -->\n      <ng-container matColumnDef=\"isVisible\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> isVisible </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <!-- private &nbsp;&nbsp; -->\n          <mat-slide-toggle color=\"accent\" [checked]=\"row.isVisible\"\n            (change)=\"isVisibleOnChange(row, $event)\"></mat-slide-toggle>\n          <!-- &nbsp;&nbsp; public -->\n        </td>\n      </ng-container>\n\n      <!-- Img Column -->\n      <ng-container matColumnDef=\"img\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <img class=\"map-img\" src=\"{{row.img}}\" />\n        </td>\n      </ng-container>\n\n      <!-- Operation Column -->\n      <ng-container matColumnDef=\"operation\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Operation </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <button class=\"operation-btn\" mat-icon-button (click)=\"editMap(row.id)\" matTooltip=\"Edit\"\n            matTooltipClass=\"tooltip-black\">\n            <mat-icon aria-label=\"edit\" class=\"example-icon\">edit</mat-icon>\n          </button>\n          <button class=\"operation-btn\" mat-icon-button (click)=\"openDeleteDialog(row.id,row.name)\" matTooltip=\"Delete\"\n            matTooltipClass=\"tooltip-black\">\n            <mat-icon aria-label=\"delete\" class=\"example-icon\">delete</mat-icon>\n          </button>\n          <button class=\"operation-btn\" mat-icon-button matTooltip=\"Download\" matTooltipClass=\"tooltip-black\">\n            <mat-icon aria-label=\"download\" class=\"example-icon\">get_app</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n  </div>\n</div>\n\n<div class=\"example-button-row\">\n  <button mat-fab class=\"create-btn\" color=\"accent\" matTooltip=\"Create Map\" matTooltipClass=\"tooltip-black\"\n    (click)=\"openCreateDialog()\">\n    <mat-icon aria-label=\"create a map\">add</mat-icon>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-btn {\n  right: 3%;\n  bottom: 3%;\n  position: fixed; }\n\n.table {\n  margin-bottom: 5%; }\n\n.map-img {\n  margin-top: 3%;\n  width: 142px;\n  height: 92px;\n  max-width: 100%;\n  max-height: 100%; }\n\n.loading-spinner {\n  margin-top: 20%; }\n\n@media only screen and (max-width: 600px) {\n  .map-img {\n    width: 71px;\n    height: 46px; }\n  .operation-btn {\n    margin: 0; }\n  .loading-spinner {\n    margin-top: 40%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWxleXlzei9Eb2N1bWVudHMvR2l0SHViL01ldHJvcG9saXN0L21ldHJvLWZyb250ZW5kL3NyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBUztFQUNULFdBQVU7RUFDVixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxhQUFZO0VBQ1osYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRTtJQUNFLFlBQVc7SUFDWCxhQUFZLEVBQ2I7RUFFRDtJQUNFLFVBQVMsRUFDVjtFQUVEO0lBQ0UsZ0JBQWUsRUFDaEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtYnRuIHtcbiAgcmlnaHQ6IDMlO1xuICBib3R0b206IDMlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4ubWFwLWltZyB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICB3aWR0aDogMTQycHg7XG4gIGhlaWdodDogOTJweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYXAtaW1nIHtcbiAgICB3aWR0aDogNzFweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gIH1cblxuICAub3BlcmF0aW9uLWJ0biB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmxvYWRpbmctc3Bpbm5lciB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent, DeleteMapDialog, CreateMapDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMapDialog", function() { return DeleteMapDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMapDialog", function() { return CreateMapDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_map_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_model/map.model */ "./src/app/_model/map.model.ts");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_service/map.service */ "./src/app/_service/map.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_service/user.service */ "./src/app/_service/user.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_service/auth.service */ "./src/app/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var UserComponent = /** @class */ (function () {
    function UserComponent(snackBar, dialog, router, mapService, userService, auth) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.mapService = mapService;
        this.userService = userService;
        this.auth = auth;
        this.loading = false;
        this.maps = null;
        this.displayedColumns = ['name', 'img', 'createDate', 'editDate', 'isVisible', 'operation'];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserSubscription = this.auth.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.refresh();
        this.refresh();
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.currentUserSubscription.unsubscribe();
    };
    UserComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    UserComponent.prototype.isVisibleOnChange = function (row, element) {
        var _this = this;
        this.loading = true;
        var map = new _model_map_model__WEBPACK_IMPORTED_MODULE_4__["Map"]();
        map.id = row.id;
        map.isVisible = element.checked;
        this.mapService.saveMap(map, map.id)
            .subscribe(function () {
            _this.loading = false;
            _this.snackBar.open("update map successfully", "OK", {
                duration: 2000
            });
            _this.refresh();
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.error, "OK", {
                duration: 2000
            });
            _this.refresh();
        });
    };
    UserComponent.prototype.editMap = function (id) {
        this.router.navigate(['/map/' + id]);
    };
    UserComponent.prototype.openDeleteDialog = function (id, name) {
        var _this = this;
        var dialogRef = this.dialog.open(DeleteMapDialog, {
            width: '320px',
            data: { mapName: name, id: id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.mapName = result;
            _this.refresh();
        });
    };
    UserComponent.prototype.openCreateDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(CreateMapDialog, {
            width: '250px',
            data: { mapName: this.mapName, uid: this.currentUser.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.mapName = result;
            _this.refresh();
        });
    };
    UserComponent.prototype.refresh = function () {
        var _this = this;
        this.userService.getMaps(this.currentUser.id).subscribe(function (data) {
            _this.maps = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UserComponent.prototype, "sort", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["Auth"]])
    ], UserComponent);
    return UserComponent;
}());

/*=====================================================================================================
                                            Delete Map
======================================================================================================*/
var DeleteMapDialog = /** @class */ (function () {
    function DeleteMapDialog(mapService, snackBar, dialogRef, data) {
        this.mapService = mapService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loading = false;
    }
    DeleteMapDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteMapDialog.prototype.onDelete = function () {
        var _this = this;
        this.loading = true;
        this.mapService.deleteMap(this.data.id)
            .subscribe(function (data) {
            _this.loading = false;
            _this.snackBar.open(_this.data.mapName + " delete successfully", "OK", {
                duration: 4000
            });
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.error, "OK", {
                duration: 4000
            });
        });
    };
    DeleteMapDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-map-dialog',
            template: __webpack_require__(/*! ./delete-map-dialog.html */ "./src/app/user/delete-map-dialog.html"),
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_service_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeleteMapDialog);
    return DeleteMapDialog;
}());

/*=====================================================================================================
                                            Create Map
======================================================================================================*/
var CreateMapDialog = /** @class */ (function () {
    function CreateMapDialog(router, mapService, snackBar, dialogRef, data) {
        this.router = router;
        this.mapService = mapService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CreateMapDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateMapDialog.prototype.onCreate = function () {
        var _this = this;
        this.loading = true;
        var createDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US');
        var map = new _model_map_model__WEBPACK_IMPORTED_MODULE_4__["Map"]();
        map.uid = this.data.uid;
        map.name = this.data.mapName;
        map.createDate = createDate;
        map.editDate = createDate;
        map.isVisible = false;
        map.img = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="; // The Tiniest Gif Ever
        this.mapService.createMap(map)
            .subscribe(function (data) {
            _this.loading = false;
            _this.router.navigate(['/map/' + data]);
            _this.snackBar.open(_this.data.mapName + " created successfully", "OK", {
                duration: 4000
            });
        }, function (error) {
            _this.loading = false;
            _this.snackBar.open(error.error.error, "OK", {
                duration: 4000
            });
        });
    };
    CreateMapDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-map-dialog',
            template: __webpack_require__(/*! ./create-map-dialog.html */ "./src/app/user/create-map-dialog.html"),
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], CreateMapDialog);
    return CreateMapDialog;
}());



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    rootUrl: 'http://localhost:3000',
    JWT_TOKEN: 'METRO_ACCESS_TOKEN',
    REFRESH_TOKEN: 'METRO_REFRESH_TOKEN',
    DEFAULT_AVATAR: 'assets/images/avatar-0.jpg'
};


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /Users/haleyysz/Documents/GitHub/Metropolist/metro-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map