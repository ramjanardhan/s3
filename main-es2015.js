(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!flage\"> \r\n    <app-login-page (toggle)=\"addItem($event)\"></app-login-page>\r\n</div>\r\n\r\n<div *ngIf=\"flage\"> \r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" />\r\n\r\n  <style>\r\n    /* body {\r\n      font-family: \"Lato\", sans-serif;\r\n    } */\r\n\r\n    .sidebar {\r\n      height: 100%;\r\n      position: fixed;\r\n      z-index: 1;\r\n      top: 96px;\r\n      left: 0;\r\n      background-color: #727782;\r\n      overflow-x: hidden;\r\n      transition: 0.5s;\r\n      /* padding-top: 60px; */\r\n      /*change*/\r\n      padding: 8px 12px;\r\n      white-space: nowrap;\r\n    }\r\n\r\n    .sidebar a {\r\n      padding: 8px 8px 8px 32px;\r\n      text-decoration: none;\r\n      font-size: 15px;\r\n      color: #818181;\r\n      display: block;\r\n      transition: 0.3s;\r\n    }\r\n\r\n    .sidebar a:hover {\r\n      color: #f1f1f1;\r\n    }\r\n\r\n    .sidebar .closebtn {\r\n      position: absolute;\r\n      top: 0;\r\n      right: 25px;\r\n      font-size: 36px;\r\n      margin-left: 50px;\r\n    }\r\n\r\n    .material-icons,\r\n    .icon-text {\r\n      vertical-align: middle;\r\n    }\r\n\r\n    .material-icons {\r\n      padding-bottom: 3px;\r\n    }\r\n\r\n    #main {\r\n      transition: margin-left 0.5s;\r\n      padding: 16px 0px;\r\n      margin-left: 52px;\r\n    }\r\n\r\n    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n\r\n    @media screen and (max-height: 450px) {\r\n      .sidebar {\r\n        padding-top: 8px;\r\n        /*change*/\r\n        padding-right: 12px;\r\n        /*add*/\r\n      }\r\n\r\n      .sidebar a {\r\n        font-size: 15px;\r\n      }\r\n    }\r\n\r\n    /* tej styles */\r\n    .icn-styl {\r\n      font-size: 32px !important;\r\n      color: white;\r\n    }\r\n\r\n    .txt-right {\r\n      text-align: right;\r\n    }\r\n  </style>\r\n</head>\r\n\r\n<body>\r\n\r\n  <div [ngClass]=\"!mini ? 'text-right' : 'text-center'\">\r\n    <i (click)=\"toggleSidebar()\" [ngClass]=\"\r\n        !mini ? 'mobileicon displayarrow  fa fa-angle-left icn-styl' : 'mobileicon  fa fa-angle-right icn-styl'\r\n      \" aria-hidden=\"true\"></i>\r\n  </div>\r\n  <div id=\"mySidebar\" class=\"sidebar highlight\" (click)=\"toggleSidebar()\">\r\n    <div [ngClass]=\"!mini ? 'text-right iconshow' : 'text-center iconshow'\">\r\n      <i [ngClass]=\"\r\n          !mini ? 'fa fa-angle-left icn-styl' : 'fa fa-angle-right icn-styl'\r\n        \" aria-hidden=\"true\"></i>\r\n    </div>\r\n    <div class=\"mobilestyles\">\r\n      <div>\r\n        <h1 [ngClass]=\"!mini ? 'nav-bar-hello' : 'nav-bar-hello hide'\">Hello</h1>\r\n        <P [ngClass]=\"\r\n          !mini\r\n            ? 'xs-font-regular nav-bar-text'\r\n            : 'xs-font-regular nav-bar-text hide'\r\n        \">Ramesh Kannan</P>\r\n      </div>\r\n      <div [ngClass]=\"\r\n        !mini ? 'nav-bar-text icn-sm-styl' : 'nav-bar-text icn-sm-styl hide'\r\n      \">\r\n        <i class=\"fa fa-star-o icn-sm-styl\" aria-hidden=\"true\"></i>\r\n        <small>Platinum</small>\r\n      </div>\r\n      <div class=\"nav-line\" [ngClass]=\"!mini ? '' : 'hide'\"></div>\r\n      <a [routerLink]=\"['/wallet']\" class=\"lnk-pd\">\r\n        <div [ngClass]=\"!mini ? '' : 'text-center'\">\r\n          <i class=\"fas fa-wallet disp-inlin-blk icn-md-styl\" [ngClass]=\"!mini ? 'icn-mr' : ''\"></i>\r\n          <div [ngClass]=\"\r\n            !mini\r\n              ? 'disp-inlin-blk nav-bar-text'\r\n              : 'disp-inlin-blk nav-bar-text hide'\r\n          \">\r\n            Your Wallet Balance\r\n          </div>\r\n          <div [ngClass]=\"!mini ? 'side-text' : 'side-text hide'\">\r\n            <small><i class=\"\" aria-hidden=\"true\"></i>{{ walletResponse | currency: \"₹ \" }}</small>\r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <a href=\"#\" class=\"lnk-pd\">\r\n        <div [ngClass]=\"!mini ? '' : 'text-center'\">\r\n          <i class=\"fa fa-credit-card disp-inlin-blk icn-md-styl\" [ngClass]=\"!mini ? 'icn-mr' : ''\"></i>\r\n          <div [ngClass]=\"\r\n            !mini\r\n              ? 'disp-inlin-blk nav-bar-text'\r\n              : 'disp-inlin-blk nav-bar-text hide'\r\n          \">\r\n            Your Credit Balance\r\n          </div>\r\n          <div [ngClass]=\"!mini ? 'side-text' : 'side-text hide'\">\r\n            <small>\r\n              <i class=\"fa fa-inr icn-sm-styl\" aria-hidden=\"true\"></i>\r\n              1,50,000</small>\r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <a [routerLink]=\"['/newquote']\" href=\"#\" class=\"lnk-pd\">\r\n        <div [ngClass]=\"!mini ? '' : 'text-center'\">\r\n          <i class=\"fa fa-plus disp-inlin-blk icn-md-styl\" [ngClass]=\"!mini ? 'icn-mr' : ''\"></i>\r\n          <div [ngClass]=\"\r\n            !mini\r\n              ? 'disp-inlin-blk nav-bar-text'\r\n              : 'disp-inlin-blk nav-bar-text hide'\r\n          \">\r\n            New Quote\r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <a [routerLink]=\"['/create-section']\" href=\"#\" class=\"lnk-pd\">\r\n        <div [ngClass]=\"!mini ? '' : 'text-center'\">\r\n          <i class=\"fa fa-plus disp-inlin-blk icn-md-styl\" [ngClass]=\"!mini ? 'icn-mr' : ''\"></i>\r\n          <div [ngClass]=\"\r\n            !mini\r\n              ? 'disp-inlin-blk nav-bar-text'\r\n              : 'disp-inlin-blk nav-bar-text hide'\r\n          \">\r\n            Create Section\r\n          </div>\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"user-tools-blk\" [ngClass]=\"!mini ? '' : 'text-center'\">\r\n        <a [routerLink]=\"['/sharequotecustomer']\" href=\"#\" class=\"lnk-pd\">\r\n          <div class=\"\">\r\n            <i class=\"fa fa-cog disp-inlin-blk icn-md-styl\" [ngClass]=\"!mini ? 'icn-mr' : ''\"></i>\r\n            <div [ngClass]=\"\r\n              !mini\r\n                ? 'disp-inlin-blk nav-bar-text'\r\n                : 'disp-inlin-blk nav-bar-text hide'\r\n            \">\r\n              Customize\r\n            </div>\r\n          </div>\r\n        </a>\r\n\r\n        <a [routerLink]=\"['/my-profile']\" href=\"#\" class=\"lnk-pd\">\r\n          <div class=\"\">\r\n            <i class=\"fa fa-user disp-inlin-blk icn-md-styl\" [ngClass]=\"!mini ? 'icn-mr' : ''\"></i>\r\n            <div [ngClass]=\"\r\n              !mini\r\n                ? 'disp-inlin-blk nav-bar-text'\r\n                : 'disp-inlin-blk nav-bar-text hide'\r\n            \">\r\n              My Profile\r\n            </div>\r\n          </div>\r\n        </a>\r\n\r\n        <!-- <a [routerLink]=\"['/file-upload']\" href=\"#\" class=\"lnk-pd\">\r\n          <div class=\"\">\r\n            <i class=\"fas fa-file-upload disp-inlin-blk icn-md-styl\" [ngClass]=\"!mini ? 'icn-mr' : ''\"></i>\r\n            <div [ngClass]=\"\r\n              !mini\r\n                ? 'disp-inlin-blk nav-bar-text'\r\n                : 'disp-inlin-blk nav-bar-text hide'\r\n            \">\r\n              File Upload\r\n            </div>\r\n          </div>\r\n        </a> -->\r\n\r\n        <a [routerLink]=\"['/newproposal']\" class=\"lnk-pd\">\r\n          <div class=\"\">\r\n            <i class=\"fa fa-question disp-inlin-blk icn-md-styl\" [ngClass]=\"!mini ? 'icn-mr' : ''\"></i>\r\n            <div [ngClass]=\"\r\n              !mini\r\n                ? 'disp-inlin-blk nav-bar-text'\r\n                : 'disp-inlin-blk nav-bar-text hide'\r\n            \">\r\n              Help\r\n            </div>\r\n          </div>\r\n        </a>\r\n\r\n        <a href=\"#\" class=\"lnk-pd\">\r\n          <div class=\"\">\r\n            <i class=\"fa fa-sign-out disp-inlin-blk icn-md-styl\" [ngClass]=\"!mini ? 'icn-mr' : ''\"></i>\r\n            <div [ngClass]=\"\r\n              !mini\r\n                ? 'disp-inlin-blk nav-bar-text'\r\n                : 'disp-inlin-blk nav-bar-text hide'\r\n            \">\r\n              Logout\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"main\">\r\n    <div id=\"\" class=\"tabcontent\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</body>\r\n<app-loader></app-loader>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/login-page/login-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/login-page/login-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\" style=\"background-color: #1D2831;\"> \r\n\r\n\r\n  <div class=\"page-header-section\">\r\n      <div>\r\n          <img class=\"logo-liberty\"\r\n              src=\"https://www.valuemomentum.com/wp-content/themes/valuemomentum/assets/dist/img/refresh/logos/logo-white-header.png\" alt=\"Value Momentum Logo\" />\r\n      </div>\r\n     \r\n  </div>\r\n  <div class=\"row page-content\">\r\n      <div class=\"col-lg-6 text-main-large\">\r\n          <div style=\"color: white;\">Welcome to the</div>\r\n          <div style=\"color: white;\">Value Momentum</div>\r\n         \r\n      </div>\r\n      <div class=\"col-lg-6 log-in-form\">\r\n          <div id=\"login-by-password\">\r\n              <div class=\"form-content\">\r\n                  <p class=\"text-large\">Sign In</p>\r\n                  <form>\r\n                      <div>\r\n                          <input class=\"form-control custom-input\" placeholder=\"UserID\" />\r\n                          <input class=\"form-control custom-input\" type=\"password\" placeholder=\"Password\" />\r\n                      </div>\r\n                      <div class=\"btn-row\">\r\n                        <button class=\"btn btn-custom\" (click)=\"login()\">Log in</button>\r\n                      </div>\r\n                      <p class=\"form-side-text\">Trouble signing in?</p>\r\n                      <p class=\"text-center m-0\" style=\"color: white;\">-OR-</p>\r\n                      <div class=\"btn-row\">\r\n                          <button class=\"btn btn-custom\" onclick=\"displayOtpScreen(event)\">Log in with\r\n                              OTP</button>\r\n                      </div>\r\n                  </form>\r\n              </div>\r\n          </div>\r\n          <div id=\"login-by-otp\" class=\"hide\">\r\n              <div class=\"form-content\">\r\n                  <p class=\"text-large\">Sign in with OTP</p>\r\n                  <p style=\"color:white;\">Request an OTP code via mobile no. or email</p>\r\n                  <form>\r\n                      <div>\r\n                          <div class=\"row mx-0\">\r\n                              <div class=\"col-lg-6 pl-0\">\r\n                                  <div class=\"radio-box\">\r\n                                      <input type=\"radio\" id=\"by-mobile\" checked name=\"otp-by\"\r\n                                          class=\"custom-radio\" onclick=\"displayMobileTextBox()\">\r\n                                      <label for=\"by-mobile\" style=\"color:white;\">Mobile No.</label>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-lg-6 pr-0\">\r\n                                  <div class=\"radio-box\">\r\n                                      <input type=\"radio\" id=\"by-email\" name=\"otp-by\" class=\"custom-radio\"\r\n                                          onclick=\"displayEmailTextBox()\">\r\n                                      <label for=\"by-email\" style=\"color:white;\">Email</label>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <input class=\"form-control custom-input\" placeholder=\"Mobile Number\"\r\n                              id=\"mobileTextBox\" />\r\n                          <input class=\"form-control custom-input hide\" placeholder=\"Email Id\"\r\n                              id=\"emailTextBox\" />\r\n                      </div>\r\n                      <div class=\"btn-row\">\r\n                          <button class=\"btn btn-custom \" id=\"request-otp-btn\"\r\n                              onclick=\"displayOtpTextBox()\">Request OTP</button>\r\n                      </div>\r\n                  </form>\r\n                  <p ><a class=\"sign-in-link\" onclick=\"displaySignIn()\" style=\"color:white;\">\r\n                          < Back to Sign in</a>\r\n                  </p>\r\n              </div>\r\n          </div>\r\n          <div id=\"enter-otp-screen\" class=\"hide\">\r\n              <div class=\"form-content\">\r\n                  <p class=\"text-large\">Enter OTP Code</p>\r\n                  <p class=\"mb-0\">An OTP has been send to</p>\r\n                  <p>+91 XXXX XX674</p>\r\n                  <form>\r\n                      <div class=\"otp-text-box\">\r\n                          <input class=\"form-control custom-input\" placeholder=\"Enter Code\" id=\"mobileTextBox\" />\r\n                      </div>\r\n                      <p>Didn't receive an OTP? <span>Resend</span></p>\r\n                      <button class=\"btn btn-custom\" id=\"submit-otp-btn\">\r\n                          Submit\r\n                      </button>\r\n                  </form>\r\n                  <p >\r\n                      <a class=\"sign-in-link\" onclick=\"displayBackOTPScreen()\">\r\n                          < Back</a>\r\n                  </p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>  -->\r\n<div class=\"page-header-section\">\r\n    <div>\r\n        <img class=\"logo-liberty\"\r\n            src=\"https://www.valuemomentum.com/wp-content/themes/valuemomentum/assets/dist/img/refresh/logos/logo-white-header.png\" alt=\"Value Momentum Logo\" />\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!user\" id=\"okta-login-container\">\r\n    <div *ngIf=\"user\">\r\n    Hello {{user}}\r\n    <button (click)=\"logout()\">Logout</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header \">\r\n  <div class=\"mb-header\">\r\n    <img src=\"./assets/images/logo-2.png\" class=\"logo\"/>\r\n    <a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon menu hamb-menu\" onclick=\"myFunction()\">&#9776;</a>\r\n  </div>\r\n  <div class=\"header-right mb-menu\">\r\n    <div class=\"topnav\" id=\"myTopnav\">\r\n      <!-- <a [routerLink]=\"['/home']\" class=\"\">Home</a> -->\r\n      <a [routerLink]=\"['/section-dashboard']\">Discussion Forum Dashboard</a>\r\n      <a [routerLink]=\"['/file-upload']\">File Upload</a>\r\n      <a [routerLink]=\"['/search']\">Search</a>\r\n      <a [routerLink]=\"['/ocr-upload']\">OCR</a>\r\n      <a [routerLink]=\"['/payments']\">Payments</a>\r\n\r\n      <!-- <a [routerLink]=\"['/home']\" class=\"\">Home</a> -->\r\n     \r\n      <!-- <div class=\"dropdown\">\r\n        <button class=\"dropbtn\">Products\r\n          <i class=\"fa fa-caret-down\"></i>\r\n        </button>\r\n        <div class=\"dropdown-content\">\r\n          <nav id=\"mysidebarmenu\" class=\"amazonmenu\">\r\n            <ul>\r\n              <li  *ngFor=\"let menu of lobList\" ><a href=\"#\">\r\n                  <span class=\"menu-left-arrow\">\r\n                    < </span>{{menu.name}}</a>\r\n                <div id=\"second-menus\">\r\n                  <ul>\r\n                    <li  *ngFor=\"let menuItem of menu.products\" ><a href=\"#\">{{menuItem.name}}</a>\r\n                      <div>\r\n                        <span class=\"menu-heading\">{{menuItem.name}}</span>\r\n                        <span><a href=\"#\">Create Quote</a></span>\r\n                      </div>\r\n                  </ul>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div> -->\r\n  \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- <script>\r\nfunction myFunction() {\r\n  var x = document.getElementById(\"myTopnav\");\r\n  if (x.className === \"topnav\") {\r\n    x.className += \" responsive\";\r\n  } else {\r\n    x.className = \"topnav\";\r\n  }\r\n}\r\n</script> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/loader/loader.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/loader/loader.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.hidden]=\"!show\">\r\n  <div\r\n       style=\"position:fixed;top:50%;left:50%;width: 90px; height: auto; overflow: hidden; z-index: 1002;\">\r\n    <div *ngIf=\"show\" class=\"loader\"></div>\r\n  </div>\r\n  <div class=\"ui-widget-overlay\" style=\"position:fixed;z-index: 1001;\"></div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");




const routes = [
    {
        path: '', component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | src-app-modules-section-dashboard-section-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-section-dashboard-section-dashboard-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/section-dashboard/section-dashboard.module */ "./src/app/modules/section-dashboard/section-dashboard.module.ts")).then(m => m.SectionDashboardModule)
            },
            {
                path: 'create-quote',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-create-quote-create-quote-module */ "src-app-modules-create-quote-create-quote-module").then(__webpack_require__.bind(null, /*! src/app/modules/create-quote/create-quote.module */ "./src/app/modules/create-quote/create-quote.module.ts")).then(m => m.CreateQuoteModule)
            },
            {
                path: 'file-upload',
                loadChildren: () => Promise.all(/*! import() | src-app-modules-file-upload-file-upload-module */[__webpack_require__.e("default~src-app-modules-create-post-create-post-module~src-app-modules-create-section-create-section~3bda645c"), __webpack_require__.e("src-app-modules-file-upload-file-upload-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/file-upload/file-upload.module */ "./src/app/modules/file-upload/file-upload.module.ts")).then(m => m.FileUploadModule)
            },
            {
                path: 'ocr-upload',
                loadChildren: () => Promise.all(/*! import() | src-app-modules-ocr-upload-ocr-upload-module */[__webpack_require__.e("default~src-app-modules-create-post-create-post-module~src-app-modules-create-section-create-section~3bda645c"), __webpack_require__.e("src-app-modules-ocr-upload-ocr-upload-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/ocr-upload/ocr-upload.module */ "./src/app/modules/ocr-upload/ocr-upload.module.ts")).then(m => m.OcrUploadModule)
            },
            {
                path: 'file-reupload',
                loadChildren: () => Promise.all(/*! import() | src-app-modules-file-reupload-file-reupload-module */[__webpack_require__.e("default~src-app-modules-create-post-create-post-module~src-app-modules-create-section-create-section~3bda645c"), __webpack_require__.e("src-app-modules-file-reupload-file-reupload-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/file-reupload/file-reupload.module */ "./src/app/modules/file-reupload/file-reupload.module.ts")).then(m => m.FileReUploadModule)
            },
            {
                path: 'topic-dashboard/:item.section.id/:item.section.name',
                loadChildren: () => Promise.all(/*! import() | src-app-modules-topic-dashboard-topic-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-topic-dashboard-topic-dashboard-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/topic-dashboard/topic-dashboard.module */ "./src/app/modules/topic-dashboard/topic-dashboard.module.ts")).then(m => m.TopicDashboardModule)
            },
            {
                path: 'post-dashboard/:item.id/:item.content',
                loadChildren: () => Promise.all(/*! import() | src-app-modules-post-dashboard-post-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-modules-post-dashboard-post-dashboard-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/post-dashboard/post-dashboard.module */ "./src/app/modules/post-dashboard/post-dashboard.module.ts")).then(m => m.PostDashboardModule)
            },
            {
                path: 'create-section',
                loadChildren: () => Promise.all(/*! import() | src-app-modules-create-section-create-section-module */[__webpack_require__.e("default~src-app-modules-create-post-create-post-module~src-app-modules-create-section-create-section~3bda645c"), __webpack_require__.e("common"), __webpack_require__.e("src-app-modules-create-section-create-section-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/create-section/create-section.module */ "./src/app/modules/create-section/create-section.module.ts")).then(m => m.CreateSectionModule)
            },
            {
                path: 'create-topic',
                loadChildren: () => Promise.all(/*! import() | src-app-modules-create-topic-create-topic-module */[__webpack_require__.e("default~src-app-modules-create-post-create-post-module~src-app-modules-create-section-create-section~3bda645c"), __webpack_require__.e("common"), __webpack_require__.e("src-app-modules-create-topic-create-topic-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/create-topic/create-topic.module */ "./src/app/modules/create-topic/create-topic.module.ts")).then(m => m.CreateTopicModule)
            },
            {
                path: 'create-post',
                loadChildren: () => Promise.all(/*! import() | src-app-modules-create-post-create-post-module */[__webpack_require__.e("default~src-app-modules-create-post-create-post-module~src-app-modules-create-section-create-section~3bda645c"), __webpack_require__.e("common"), __webpack_require__.e("src-app-modules-create-post-create-post-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/create-post/create-post.module */ "./src/app/modules/create-post/create-post.module.ts")).then(m => m.CreatePostModule)
            },
            {
                path: 'wallet',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-walletstatement-walletstatement-module */ "src-app-modules-walletstatement-walletstatement-module").then(__webpack_require__.bind(null, /*! src/app/modules/walletstatement/walletstatement.module */ "./src/app/modules/walletstatement/walletstatement.module.ts")).then(m => m.WalletstatementModule)
            },
            {
                path: 'search',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-search-search-module */ "src-app-modules-search-search-module").then(__webpack_require__.bind(null, /*! src/app/modules/search/search.module */ "./src/app/modules/search/search.module.ts")).then(m => m.SearchModule)
            },
            {
                path: 'payment-proposal',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-payment-proposals-payment-proposals-module */ "src-app-modules-payment-proposals-payment-proposals-module").then(__webpack_require__.bind(null, /*! src/app/modules/payment-proposals/payment-proposals.module */ "./src/app/modules/payment-proposals/payment-proposals.module.ts")).then(m => m.PaymentProposalModule)
            },
            {
                path: 'my-profile',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-profile-profile-module */ "src-app-modules-profile-profile-module").then(__webpack_require__.bind(null, /*! src/app/modules/profile/profile.module */ "./src/app/modules/profile/profile.module.ts")).then(m => m.ProfileModule)
            },
            {
                path: 'payments',
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-payments-payments-module */ "src-app-modules-payments-payments-module").then(__webpack_require__.bind(null, /*! src/app/modules/payments/payments.module */ "./src/app/modules/payments/payments.module.ts")).then(m => m.PaymentsModule)
            }
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.flage = false;
        this.title = "Partner-Portal";
    }
    ngOnInit() {
        // this.flage = localStorage.getItem('flage');
    }
    addItem(flage) {
        this.flage = flage;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _modules_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/login-page/login-page.component */ "./src/app/modules/login-page/login-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









//import { CustomerProposalComponent } from './modules/home/customer-proposal/customer-proposal.component';





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            //CustomerProposalComponent,
            _modules_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"],
            _modules_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"],
        ],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _core_models__WEBPACK_IMPORTED_MODULE_7__["LoaderInterceptorService"],
                multi: true
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/interceptors/loader-interceptor.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/interceptors/loader-interceptor.service.ts ***!
  \*****************************************************************/
/*! exports provided: LoaderInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptorService", function() { return LoaderInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/core/services/loader.service.ts");





let LoaderInterceptorService = class LoaderInterceptorService {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        console.log('loader interceptor works.');
        this.showLoader();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                this.onEnd();
            }
        }, (err) => {
            this.onEnd();
        }));
    }
    onEnd() {
        this.hideLoader();
    }
    showLoader() {
        this.loaderService.show();
    }
    hideLoader() {
        this.loaderService.hide();
    }
};
LoaderInterceptorService.ctorParameters = () => [
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
LoaderInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderInterceptorService);



/***/ }),

/***/ "./src/app/core/models/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: LoaderInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interceptors_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/loader-interceptor.service */ "./src/app/core/interceptors/loader-interceptor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptorService", function() { return _interceptors_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_0__["LoaderInterceptorService"]; });




/***/ }),

/***/ "./src/app/core/services/common-service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/common-service.ts ***!
  \*************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const httpOptions = {
    responseType: 'blob',
};
let CommonService = class CommonService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceBaseUrl}`;
    }
    getToken() {
        return this.httpClient.get(this.baseUrl + "api/authenticate/v1/token");
    }
    getDashboardCount(CustomerId) {
        return this.httpClient.get(this.baseUrl + "api/proposal/dashboardCount/" + CustomerId);
    }
    getCustomerType() {
        return this.httpClient.get(this.baseUrl + "api/product/v1/customerTypeData");
    }
    getLOBs() {
        return this.httpClient.get(this.baseUrl + "api/product/lineOfBusiness");
    }
    getProductsByLOB() {
        return this.httpClient.get(this.baseUrl + "api/product/LOBList");
    }
    getSalutation(customerType) {
        switch (customerType) {
            case "Individual": return this.httpClient.get(this.baseUrl + "api/product/v1/getSalutations");
        }
    }
    getProductsByLOBCode(lobCode) {
        return this.httpClient.get(this.baseUrl + "api/product/products/" + lobCode);
    }
    buildingHeightData() {
        return this.httpClient.get(this.baseUrl + "api/proposal/v1/buildingHeightData");
    }
    agreementTypeData() {
        return this.httpClient.get(this.baseUrl + "api/proposal/v1/agreementTypeData");
    }
    getCoverages() {
        return this.httpClient.get(this.baseUrl + "api/proposal/v1/coverages");
    }
    downloadCustomerProposalDataBrochure(data) {
        return this.httpClient.post(this.baseUrl + "api/document/staticDocumentDownload", data, httpOptions);
    }
    getCustomerProposal() {
        return this.httpClient.get(this.baseUrl + "api/proposal/202008190000115");
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
], CommonService);



/***/ }),

/***/ "./src/app/core/services/create-quote-service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/create-quote-service.ts ***!
  \*******************************************************/
/*! exports provided: CreateQuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuoteService", function() { return CreateQuoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
headers1 = headers1.append('Content-Type', 'application/json');
headers1 = headers1.append('Authorization', 'application/json');
let CreateQuoteService = class CreateQuoteService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceBaseUrl}`;
    }
    searchCustomerDetails(searchCustomerDetails) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7777/searchCustomer", searchCustomerDetails, { headers: headers1 });
    }
    makePayment(inputForPayment) {
        return this.httpClient.post(this.baseUrl + "api/payment/gatewayPayU", inputForPayment, { headers: headers1, responseType: 'text' });
    }
    saveNewProposal(propsalDetails) {
        return this.httpClient.post(this.baseUrl + "api/proposal/saveProposalInDb", propsalDetails, { headers: headers1, responseType: 'text' });
    }
    saveUserProfileDetails(searchCustomerDetails) {
        return this.httpClient.post(this.baseUrl + "api/agent/v1/saveUserProfileDetails", searchCustomerDetails);
    }
    userProfileDetails(searchParams) {
        return this.httpClient.get(this.baseUrl + "api/agent/v1/userProfileDetails/" + searchParams.imdCode, {
            headers: {
                'token': searchParams.token
            }
        });
    }
    getCustomerDetailsById(searchCustomerDetails) {
        return this.httpClient.post(this.baseUrl + "api/customer/v1/searchLovCustomer", searchCustomerDetails);
    }
    createQuoteDetails(createQuoteDetails) {
        return this.httpClient.post(this.baseUrl + "api/customer/v1/duplicateCustomer", createQuoteDetails);
    }
    getVirtualWallet(userID) {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7776/balance/" + userID);
    }
    getNewProposal(quoteNumber) {
        return this.httpClient.get(this.baseUrl + "api/quote/" + quoteNumber);
    }
    uploadFile(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'multipart/form-data');
        const httpOptions = { headers: headers };
        return this.httpClient.post('http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7779/excelupload', data, httpOptions);
    }
    retryuploadFile(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'multipart/form-data');
        const httpOptions = { headers: headers };
        return this.httpClient.post('http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7779/excelreupload', data, httpOptions);
    }
    getuploadedData() {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7779/tutorials");
    }
};
CreateQuoteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CreateQuoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
], CreateQuoteService);



/***/ }),

/***/ "./src/app/core/services/loader.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    show() {
        this.loaderSubject.next({ show: true });
    }
    hide() {
        this.loaderSubject.next({ show: false });
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "./src/app/core/services/okta.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/okta.service.ts ***!
  \***********************************************/
/*! exports provided: Okta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Okta", function() { return Okta; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-signin-widget */ "./node_modules/@okta/okta-signin-widget/dist/js/okta-sign-in.entry.js");
/* harmony import */ var _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_2__);



let Okta = class Okta {
    constructor() {
        this.widget = new _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_2___default.a({
            baseUrl: 'https://dev-955247.okta.com',
            clientId: '0oayooo3u3ZCzmTZK4x6',
            redirectUri: 'http://localhost:4200/implicit/callback'
        });
    }
    getWidget() {
        return this.widget;
    }
};
Okta = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Okta);



/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");





let HomeComponent = class HomeComponent {
    constructor(commonService, datepipe, createQuoteService) {
        this.commonService = commonService;
        this.datepipe = datepipe;
        this.createQuoteService = createQuoteService;
        this.mini = true;
        this.gettoken();
    }
    ngOnInit() {
        this.getVirtualWallet();
    }
    toggleSidebar() {
        if (this.mini) {
            document.getElementById("mySidebar").style.width = "240px";
            document.getElementById("main").style.marginLeft = "236px";
            var elem = document.getElementById("mySidebar");
            elem.classList.remove("highlight");
            this.mini = false;
        }
        else {
            document.getElementById("mySidebar").style.width = "3.9%";
            document.getElementById("main").style.marginLeft = "52px";
            var elem = document.getElementById("mySidebar");
            elem.className += " highlight";
            this.mini = true;
        }
    }
    gettoken() {
        this.commonService.getToken().subscribe((res) => {
            this.token = res;
        }, (error) => {
            localStorage.setItem("token", error.error.text);
        });
    }
    getVirtualWallet() {
        this.userID = 1;
        this.createQuoteService.getVirtualWallet(this.userID).subscribe((res) => {
            this.walletResponse = res;
            this.walletResponse = this.walletResponse.closingBalance;
        }, (error) => {
            // alert(error.error.text);
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__["CreateQuoteService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/home.component.html"),
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/login-page/login-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/login-page/login-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\");\r\n\r\nbody {\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.logo-liberty {\r\n    height: 120px;\r\n}\r\n\r\n.page-header-section {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 20px 45px 0px 45px;\r\n}\r\n\r\n.help-icon {\r\n    height: 18px;\r\n    width: 18px;\r\n}\r\n\r\n.help-text {\r\n    margin-top: 8px;\r\n    padding-right: 24px;\r\n}\r\n\r\n.page-content {\r\n    /* padding: 0px 85px; */\r\n   \r\n        padding: 27px 85px;\r\n    \r\n}\r\n\r\n.text-main-large {\r\n    font-size: 48px;\r\n    font-weight: 300;\r\n    padding: 120px 20px;\r\n}\r\n\r\n.log-in-form {\r\n    padding-right: 80px;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.form-content {\r\n    padding: 30px 80px 40px;\r\n    border: 2px solid #d7d7d7;\r\n    border-radius: 4px;\r\n    background-color: #727782;\r\n}\r\n\r\n.custom-input {\r\n    height: 52px !important;\r\n    margin: 24px 0px !important;\r\n    border: 2px solid #d7d7d7 !important;\r\n}\r\n\r\n.text-large {\r\n    font-size: 28px;\r\n    font-weight: 400;\r\n    color: white;\r\n}\r\n\r\n.btn-custom {\r\n    width: 100%;\r\n    background-color: #eaeaea;\r\n    height: 48px;\r\n    font-size: 16px;\r\n    font-weight: 700 !important;\r\n}\r\n\r\n.form-side-text {\r\n    padding: 24px 0px;\r\n    margin-bottom: 0px;\r\n    color: white;\r\n}\r\n\r\n.btn-row {\r\n    margin-top: 24px;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.radio-box {\r\n    border: 2px solid #d7d7d7;\r\n    border-radius: 4px;\r\n    padding: 12px 15px;\r\n}\r\n\r\n.custom-radio {\r\n    margin: 0px\r\n}\r\n\r\nlabel {\r\n    margin: 0px;\r\n}\r\n\r\n#request-otp-btn {\r\n    margin-top: 36px;\r\n    margin-bottom: 64px;\r\n}\r\n\r\n.sign-in-link {\r\n    text-decoration: none;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.sign-in-link:hover {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.otp-text-box {\r\n    margin-bottom: 64px;\r\n}\r\n\r\n#submit-otp-btn {\r\n    margin-bottom: 64px;\r\n}\r\n\r\n.login-header\r\n{\r\n    background-color: #1D2831;\r\n    height: 730px;\r\n}\r\n\r\n.logo-top-margin\r\n{\r\n    margin-top: 35px;\r\n}\r\n\r\n:host {\r\n    display: block;\r\n    border: 1px solid black;\r\n    background-color:#1D2831;\r\n    height: 730px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0dBQWdHOztBQUVoRztJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1Qjs7UUFFbkIsa0JBQWtCOztBQUUxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dvLWxpYmVydHkge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQ1cHggMHB4IDQ1cHg7XHJcbn1cclxuXHJcbi5oZWxwLWljb24ge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbn1cclxuXHJcbi5oZWxwLXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcclxufVxyXG5cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgICAvKiBwYWRkaW5nOiAwcHggODVweDsgKi9cclxuICAgXHJcbiAgICAgICAgcGFkZGluZzogMjdweCA4NXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi50ZXh0LW1haW4tbGFyZ2Uge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHBhZGRpbmc6IDEyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5sb2ctaW4tZm9ybSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMzBweCA4MHB4IDQwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDdkN2Q3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzc4MjtcclxufVxyXG5cclxuLmN1c3RvbS1pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMjRweCAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkN2Q3ZDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtbGFyZ2Uge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1jdXN0b20ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1zaWRlLXRleHQge1xyXG4gICAgcGFkZGluZzogMjRweCAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yYWRpby1ib3gge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q3ZDdkNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxufVxyXG5cclxuLmN1c3RvbS1yYWRpbyB7XHJcbiAgICBtYXJnaW46IDBweFxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuI3JlcXVlc3Qtb3RwLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxufVxyXG5cclxuLnNpZ24taW4tbGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaWduLWluLWxpbms6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ub3RwLXRleHQtYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XHJcbn1cclxuXHJcbiNzdWJtaXQtb3RwLWJ0biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG59XHJcbi5sb2dpbi1oZWFkZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMjgzMTtcclxuICAgIGhlaWdodDogNzMwcHg7XHJcbn1cclxuLmxvZ28tdG9wLW1hcmdpblxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG59XHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxRDI4MzE7XHJcbiAgICBoZWlnaHQ6IDczMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/login-page/login-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/login-page/login-page.component.ts ***!
  \************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");
/* harmony import */ var src_app_core_services_okta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/okta.service */ "./src/app/core/services/okta.service.ts");






//import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
let LoginPageComponent = class LoginPageComponent {
    constructor(datepipe, createQuoteService, commonService, okta, changeDetectorRef) {
        this.datepipe = datepipe;
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.okta = okta;
        this.changeDetectorRef = changeDetectorRef;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loginFlage = true;
        this.oktaSignIn = okta.getWidget();
    }
    //login()
    //{
    //this.sideNavOpen = !this.sideNavOpen;
    //this.toggle.emit(this.loginFlage);
    //}
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.user = yield this.oktaSignIn.authClient.token.getUserInfo();
            }
            catch (error) {
                this.showLogin();
            }
        });
    }
    showLogin() {
        this.oktaSignIn.renderEl({ el: '#okta-login-container' }, (response) => {
            if (response.status === 'SUCCESS') {
                this.user = response.tokens.idToken.claims.email;
                this.toggle.emit(this.loginFlage);
                this.oktaSignIn.remove();
                this.changeDetectorRef.detectChanges();
            }
        });
    }
    logout() {
        this.oktaSignIn.authClient.signOut(() => {
            this.user = undefined;
            this.showLogin();
        });
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__["CreateQuoteService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_core_services_okta_service__WEBPACK_IMPORTED_MODULE_5__["Okta"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginPageComponent.prototype, "toggle", void 0);
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/login-page/login-page.component.html"),
        styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/modules/login-page/login-page.component.css")]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/shared/components/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.topnav {\r\n  overflow: hidden;\r\n}\r\n\r\n.topnav a {\r\n  float: left;\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n}\r\n\r\n.active {\r\n  color: #000;\r\n}\r\n\r\n.topnav .icon {\r\n  display: none;\r\n}\r\n\r\n.hamb-menu{\r\n  display: none;\r\n}\r\n\r\n.mb-header{\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown {\r\n  float: left;\r\n  overflow: hidden;\r\n  position: unset;\r\n}\r\n\r\n.dropdown .dropbtn {\r\n  font-size: 16px;    \r\n  border: none;\r\n  outline: none;\r\n  padding: 19px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  float: none;\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n.topnav a:hover, .dropdown:hover .dropbtn:hover {\r\n  color: white;\r\n  background-color: #1b1449;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav a, .dropdown .dropbtn {\r\n    display: none;\r\n  }\r\n  .topnav a.icon {\r\n    float: right;\r\n    display: block;\r\n  }\r\n  .logo{\r\n\r\n    width: 100px;\r\n    height: 40px;\r\n  }\r\n  .mb-header{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 12px 12px;\r\n  }\r\n  .hamb-menu{\r\n    display: block;\r\n    padding: 4px 8px;\r\n  }\r\n\r\n  .mb-menu{\r\n    position: absolute;\r\n    background-color: #ffffff;\r\n    width: 100%;\r\n  }\r\n  .menu-left-arrow{\r\n    display: none;\r\n  }\r\n  .dropbtn:hover {\r\n    color: #343741 !important;\r\n    background-color: white!important;\r\n    text-decoration: underline;\r\n\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav.responsive {position: relative;}\r\n  .topnav.responsive .icon {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  .topnav.responsive a {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n  .topnav.responsive .dropdown {float: none;}\r\n  .topnav.responsive .dropdown-content {position: relative;}\r\n  .topnav.responsive .dropdown .dropbtn {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n\r\n  .amazonmenu > ul{\r\n    background: white;\r\n    width: 100% !important; /* width of main menu */\r\n    position: relative !important;\r\n    right: 0px !important;\r\n  }\r\n  .amazonmenu ul li a{\r\n    text-align: left !important;\r\n    font-size: 16px !important;\r\n  }\r\n  .amazonmenu ul li > div, .amazonmenu ul li > ul{\r\n    position: relative !important;\r\n  }\r\n\r\n  .amazonmenu ul li > div, .amazonmenu ul li > ul{ /* Sub menus (Could be a DIV or UL wrapper) style */\r\n    background-color: white !important;\r\n    display: none;\r\n    font-weight: normal;\r\n    min-width:  190px;\r\n    min-height: auto!important;\r\n      right: 100%;\r\n    padding: 10px;\r\n    position: relative!important;\r\n    top: 0;\r\n    box-sizing: border-box;\r\n    z-index: 1000;\r\n  }\r\n\r\n  .topnav a{\r\n    color: #343741!important;\r\n  }\r\n\r\n  .topnav a:hover {\r\n    color: #343741;\r\n    background-color:white !important;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .amazonmenu ul{\r\n    background-color: white;\r\n    padding-left: 24px!important ;\r\n  }\r\n  .dropdown-content:before{\r\n    display: none;\r\n    border: none;\r\n  }\r\n  .amazonmenu ul li a:hover, .amazonmenu ul li.hassub.selected > a{\r\n    background-color: yellow !important;\r\n  }\r\n}\r\n\r\n/*megamenu*/\r\n\r\n.amazonmenu ul{\r\n\r\n\tlist-style: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\r\n}\r\n\r\n.amazonmenu ul li{\r\n\tposition: static; /* menu li items should have position set to static */\r\n}\r\n\r\n.amazonmenu > ul{\r\n\tbackground: white;\r\n\tborder-radius: 5px;\r\n\twidth: 200px; /* width of main menu */\r\n\tposition: absolute;\r\n    right: 38px;\r\n}\r\n\r\n.amazonmenu > ul li a{\r\n\tcolor: black;\r\n\tdisplay: block;\r\n\toverflow: auto;\r\n\tpadding: 10px 0;\r\n\tposition: relative;\r\n\ttext-decoration: none;\r\n  text-indent: 10px;\r\n  text-align: right;\r\n  padding-right: 16px;\r\n}\r\n\r\n.amazonmenu > ul li.hassub > a::after{ /* Arrow to indicate this item has sub menu (LI elements with sub menus have a \".hassub\" class). */\r\n\tborder: 5px solid transparent;\r\n\tborder-left-color: #fff; /* Default color of arrow */\r\n\tcontent: '';\r\n\theight: 0;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n    top: 35%;\r\n    width: 0;\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.amazonmenu > ul li.hassub.selected > a::after{ /* Style of arrow when corresponding sub menu is open (LI element has a \"selected\" class during this state */\r\n\tborder-left-color: #000;\r\n}\r\n\r\n.amazonmenu ul li a:hover, .amazonmenu ul li.hassub.selected > a{ /* style of hover and selected menu item links */\r\n\tbackground: none;\r\n    text-decoration: underline;\r\n}\r\n\r\n.amazonmenu ul li > div, .amazonmenu ul li > ul{ /* Sub menus (Could be a DIV or UL wrapper) style */\r\n\tbackground: white;\r\n\r\n\tdisplay: none;\r\n\tfont-weight: normal;\r\n\tmin-width:  190px;\r\n  min-height: 157px;\r\n  \tright: 100%;\r\n\tpadding: 10px;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbox-sizing: border-box;\r\n\tz-index: 1000;\r\n}\r\n\r\n/* ###### CSS Media queries ###### */\r\n\r\n@media screen and (max-width: 480px){ /* When screen size is 480px */\r\n\t.amazonmenu ul li > div, .amazonmenu ul li > ul{\r\n\t\tleft: 30px; /* Stack the sub menus so they take up less space */\r\n\t}\r\n\r\n\t.amazonmenu > ul li.hassub.selected::after{ /* Add \"veil\" to parent menus */\r\n\t\tbackground: #eee;\r\n\t\tcontent: '';\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\topacity: .8;\r\n\t\tpointer-events: none;\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\twidth: 100%;\r\n\t\tz-index: 1;\r\n\t}\r\n}\r\n\r\nspan.menu-heading {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding-left: 60px;\r\n  border-bottom: solid 1px #ddd;\r\n  padding-bottom: 6px;\r\n}\r\n\r\n#second-menus  {\r\n  background: #F5F5F5  !important;\r\n}\r\n\r\n.dropdown-content:before {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 7px solid transparent;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-bottom-color: #fff;\r\n  position: absolute;\r\n  top: -7px;\r\n  left: 70px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQywwQkFBMEI7O0VBRTVCO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0Isa0JBQWtCLENBQUM7RUFDdkM7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07RUFDUjtFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7RUFDQSw4QkFBOEIsV0FBVyxDQUFDO0VBQzFDLHNDQUFzQyxrQkFBa0IsQ0FBQztFQUN6RDtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQixFQUFFLHVCQUF1QjtJQUMvQyw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUEsaURBQWlELG1EQUFtRDtJQUNsRyxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMEJBQTBCO01BQ3hCLFdBQVc7SUFDYixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLE1BQU07SUFHTixzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlDQUFpQztJQUNqQywwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkO0VBQ0E7SUFDRSxtQ0FBbUM7RUFDckM7QUFDRjs7QUFHQSxXQUFXOztBQUVYOztDQUVDLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsVUFBVTtDQUdWLHNCQUFzQjs7QUFFdkI7O0FBRUE7Q0FDQyxnQkFBZ0IsRUFBRSxxREFBcUQ7QUFDeEU7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFlBQVksRUFBRSx1QkFBdUI7Q0FDckMsa0JBQWtCO0lBQ2YsV0FBVztBQUNmOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixxQkFBcUI7RUFDcEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUEsdUNBQXVDLGtHQUFrRztDQUN4SSw2QkFBNkI7Q0FDN0IsdUJBQXVCLEVBQUUsMkJBQTJCO0NBQ3BELFdBQVc7Q0FDWCxTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLE9BQU87SUFDSixRQUFRO0lBQ1IsUUFBUTtJQUNSLHlCQUF5QjtBQUM3Qjs7QUFFQSxnREFBZ0QsNEdBQTRHO0NBQzNKLHVCQUF1QjtBQUN4Qjs7QUFFQSxrRUFBa0UsZ0RBQWdEO0NBQ2pILGdCQUFnQjtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFFQSxpREFBaUQsbURBQW1EO0NBQ25HLGlCQUFpQjs7Q0FFakIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixpQkFBaUI7RUFDaEIsaUJBQWlCO0dBQ2hCLFdBQVc7Q0FDYixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLE1BQU07Q0FHTixzQkFBc0I7Q0FDdEIsYUFBYTtBQUNkOztBQUdBLG9DQUFvQzs7QUFFcEMsc0NBQXNDLDhCQUE4QjtDQUNuRTtFQUNDLFVBQVUsRUFBRSxtREFBbUQ7Q0FDaEU7O0NBRUEsNENBQTRDLCtCQUErQjtFQUMxRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxVQUFVO0NBQ1g7QUFDRDs7QUFHQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBS0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udG9wbmF2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udG9wbmF2IGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4udG9wbmF2IC5pY29uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaGFtYi1tZW51e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tYi1oZWFkZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5kcm9wZG93biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogdW5zZXQ7XHJcbn1cclxuXHJcbi5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgZm9udC1zaXplOiAxNnB4OyAgICBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxOXB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRvcG5hdiBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG46aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxNDQ5O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAudG9wbmF2IGEsIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAudG9wbmF2IGEuaWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmxvZ297XHJcblxyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICAubWItaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbiAgfVxyXG4gIC5oYW1iLW1lbnV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgfVxyXG5cclxuICAubWItbWVudXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm1lbnUtbGVmdC1hcnJvd3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5kcm9wYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzQzNzQxICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSB7cG9zaXRpb246IHJlbGF0aXZlO31cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmRyb3Bkb3duIHtmbG9hdDogbm9uZTt9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5kcm9wZG93bi1jb250ZW50IHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuYW1hem9ubWVudSA+IHVse1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyAvKiB3aWR0aCBvZiBtYWluIG1lbnUgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYW1hem9ubWVudSB1bCBsaSBhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hbWF6b25tZW51IHVsIGxpID4gZGl2LCAuYW1hem9ubWVudSB1bCBsaSA+IHVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYW1hem9ubWVudSB1bCBsaSA+IGRpdiwgLmFtYXpvbm1lbnUgdWwgbGkgPiB1bHsgLyogU3ViIG1lbnVzIChDb3VsZCBiZSBhIERJViBvciBVTCB3cmFwcGVyKSBzdHlsZSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWluLXdpZHRoOiAgMTkwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlIWltcG9ydGFudDtcclxuICAgIHRvcDogMDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gIH1cclxuXHJcbiAgLnRvcG5hdiBhe1xyXG4gICAgY29sb3I6ICMzNDM3NDEhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRvcG5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzQzNzQxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAuYW1hem9ubWVudSB1bHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4IWltcG9ydGFudCA7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1jb250ZW50OmJlZm9yZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIC5hbWF6b25tZW51IHVsIGxpIGE6aG92ZXIsIC5hbWF6b25tZW51IHVsIGxpLmhhc3N1Yi5zZWxlY3RlZCA+IGF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKm1lZ2FtZW51Ki9cclxuXHJcbi5hbWF6b25tZW51IHVse1xyXG5cclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbn1cclxuXHJcbi5hbWF6b25tZW51IHVsIGxpe1xyXG5cdHBvc2l0aW9uOiBzdGF0aWM7IC8qIG1lbnUgbGkgaXRlbXMgc2hvdWxkIGhhdmUgcG9zaXRpb24gc2V0IHRvIHN0YXRpYyAqL1xyXG59XHJcblxyXG4uYW1hem9ubWVudSA+IHVse1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHR3aWR0aDogMjAwcHg7IC8qIHdpZHRoIG9mIG1haW4gbWVudSAqL1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzOHB4O1xyXG59XHJcblxyXG4uYW1hem9ubWVudSA+IHVsIGxpIGF7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG5cdHBhZGRpbmc6IDEwcHggMDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtaW5kZW50OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5hbWF6b25tZW51ID4gdWwgbGkuaGFzc3ViID4gYTo6YWZ0ZXJ7IC8qIEFycm93IHRvIGluZGljYXRlIHRoaXMgaXRlbSBoYXMgc3ViIG1lbnUgKExJIGVsZW1lbnRzIHdpdGggc3ViIG1lbnVzIGhhdmUgYSBcIi5oYXNzdWJcIiBjbGFzcykuICovXHJcblx0Ym9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6ICNmZmY7IC8qIERlZmF1bHQgY29sb3Igb2YgYXJyb3cgKi9cclxuXHRjb250ZW50OiAnJztcclxuXHRoZWlnaHQ6IDA7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLmFtYXpvbm1lbnUgPiB1bCBsaS5oYXNzdWIuc2VsZWN0ZWQgPiBhOjphZnRlcnsgLyogU3R5bGUgb2YgYXJyb3cgd2hlbiBjb3JyZXNwb25kaW5nIHN1YiBtZW51IGlzIG9wZW4gKExJIGVsZW1lbnQgaGFzIGEgXCJzZWxlY3RlZFwiIGNsYXNzIGR1cmluZyB0aGlzIHN0YXRlICovXHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5hbWF6b25tZW51IHVsIGxpIGE6aG92ZXIsIC5hbWF6b25tZW51IHVsIGxpLmhhc3N1Yi5zZWxlY3RlZCA+IGF7IC8qIHN0eWxlIG9mIGhvdmVyIGFuZCBzZWxlY3RlZCBtZW51IGl0ZW0gbGlua3MgKi9cclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5hbWF6b25tZW51IHVsIGxpID4gZGl2LCAuYW1hem9ubWVudSB1bCBsaSA+IHVseyAvKiBTdWIgbWVudXMgKENvdWxkIGJlIGEgRElWIG9yIFVMIHdyYXBwZXIpIHN0eWxlICovXHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRtaW4td2lkdGg6ICAxOTBweDtcclxuICBtaW4taGVpZ2h0OiAxNTdweDtcclxuICBcdHJpZ2h0OiAxMDAlO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuXHJcbi8qICMjIyMjIyBDU1MgTWVkaWEgcXVlcmllcyAjIyMjIyMgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsgLyogV2hlbiBzY3JlZW4gc2l6ZSBpcyA0ODBweCAqL1xyXG5cdC5hbWF6b25tZW51IHVsIGxpID4gZGl2LCAuYW1hem9ubWVudSB1bCBsaSA+IHVse1xyXG5cdFx0bGVmdDogMzBweDsgLyogU3RhY2sgdGhlIHN1YiBtZW51cyBzbyB0aGV5IHRha2UgdXAgbGVzcyBzcGFjZSAqL1xyXG5cdH1cclxuXHJcblx0LmFtYXpvbm1lbnUgPiB1bCBsaS5oYXNzdWIuc2VsZWN0ZWQ6OmFmdGVyeyAvKiBBZGQgXCJ2ZWlsXCIgdG8gcGFyZW50IG1lbnVzICovXHJcblx0XHRiYWNrZ3JvdW5kOiAjZWVlO1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0b3BhY2l0eTogLjg7XHJcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5zcGFuLm1lbnUtaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGRkO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcblxyXG4jc2Vjb25kLW1lbnVzICB7XHJcbiAgYmFja2dyb3VuZDogI0Y1RjVGNSAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQ6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI2NjYztcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC03cHg7XHJcbiAgbGVmdDogNzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.ulPadding = 12;
    }
    ngOnInit() {
        this.commonService.getProductsByLOB().subscribe((res) => {
            this.lobList = res;
        });
        // jQuery(function () {
        //   amazonmenu.init({
        //     menuid: 'mysidebarmenu'
        //   })
        // })
        // $(document).ready(function () {
        //   $(".menu").click(function () {
        //     var x = document.getElementById("myTopnav");
        //     if (x.className === "topnav") {
        //       x.className += " responsive";
        //     } else {
        //       x.className = "topnav";
        //     }
        //   });
        // });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 80px;\r\n  height: 80px;\r\n  -webkit-animation: spin 2s linear infinite; /* Safari */\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n\r\n/* Safari */\r\n\r\n\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDLEVBQUUsV0FBVztFQUN2RCxrQ0FBa0M7QUFDcEM7OztBQUVBLFdBQVc7OztBQUNYO0VBQ0U7SUFDRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjs7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4vKiBTYWZhcmkgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/loader.service */ "./src/app/core/services/loader.service.ts");



let LoaderComponent = class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state) => {
            this.show = state.show;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
LoaderComponent.ctorParameters = () => [
    { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/shared/components/loader/loader.component.css")]
    })
], LoaderComponent);



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
const environment = {
    production: false,
    serviceBaseUrl: 'https://sjpj2b4b3i.execute-api.ap-south-1.amazonaws.com/dev/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\foundational-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map