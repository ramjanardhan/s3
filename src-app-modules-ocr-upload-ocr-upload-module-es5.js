(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ocr-upload-ocr-upload-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/ocr-upload/ocr-upload.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/ocr-upload/ocr-upload.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n#alert\r\n{\r\n  top: 22%;\r\n  width: 25%;\r\n}\r\n</style>\r\n\r\n<div class=\"heading-top\">OCR Upload</div>\r\n\r\n<div class=\"container-box\">\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 quote-fields\">\r\n      <span class=\"has-float-label\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"batchid\" placeholder=\"Batch ID\"\r\n         name=\"batchid\" [(ngModel)]=\"batchid\"/>\r\n        <label for=\"batchid\">Batch ID</label>\r\n      </span>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 quote-fields\">\r\n        <label for=\"file\" class=\"custom-file-label\"\r\n        >{{msg}} </label>\r\n        <input type=\"file\"\r\n        id=\"file\"\r\n        class=\"custom-file-input\"\r\n        placeholder=\"Chose file\"\r\n        (change)=\"handleFileInput($event.target.files)\"> \r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12\"> \r\n      <button type=\"button\" (click)=\"fileRetryUpload()\" class=\"quote-search-button1\">\r\n        Upload \r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n <!-- Start Alert Screen -->\r\n<div class=\"container\">\r\n  <!-- The Modal -->\r\n  <div class=\"modal\" id=\"AlertModal\">\r\n    <div class=\"modal-dialog\" id=\"alert\">\r\n      <div class=\"modal-content\">\r\n      \r\n        <!-- Modal Header -->\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Alert</h4>\r\n          <button type=\"button\" class=\"close\" onclick=\"alertscreenbtnback()\">&times;</button>\r\n        </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          <div style=\"font-size: 12px;\">\r\n              {{sucesserror}}\r\n         </div>\r\n        </div>\r\n\r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" onclick=\"alertscreenbtnback()\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ocr-upload/ocr-upload.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/ocr-upload/ocr-upload.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* common styles */\r\n.main-content-box {\r\n    background: #ffffff;\r\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n    padding: 12px 28px;\r\n    margin: 18px 0px;\r\n  }\r\n.collapse-panel-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 28px 0px 12px;\r\n  }\r\n.collapse-panel-header-text-lg {\r\n    font-weight: 300;\r\n    font-size: 24px;\r\n    color: #343741;\r\n  }\r\n.icon-style-md {\r\n    font-size: 28px !important;\r\n    color: #06748c;\r\n  }\r\n.section-line {\r\n    border: 1px solid #c0bfc0;\r\n    margin-bottom: 18px;\r\n  }\r\n.text-sm-light {\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    color: #707070;\r\n  }\r\n.text-md-regular {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #343741;\r\n  }\r\n.text-md-bold {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    color: #343741;\r\n  }\r\n.row-margin {\r\n    margin-top: 28px;\r\n    margin-bottom: 32px;\r\n  }\r\n/* end of common styles */\r\n.page-top-links {\r\n    text-align: right;\r\n    margin-top: 32px;\r\n  }\r\n.page-top-links a {\r\n    text-decoration: none;\r\n    margin: 0px 24px;\r\n    font-size: 16px;\r\n    color: #343741;\r\n  }\r\n.page-top-links a:last-child {\r\n    margin-right: 0px;\r\n  }\r\n.icon-margin {\r\n    margin: 0px 8px;\r\n  }\r\n.rotate {\r\n    transform: rotate(180deg);\r\n  }\r\n.custom-icon-style {\r\n    padding-top: 6px;\r\n  }\r\n.border-text {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #000000;\r\n    padding: 8px 0px;\r\n    background-color: #ffffff;\r\n    border: 1px solid #c0bfc0;\r\n    border-radius: 3px;\r\n  }\r\n.disp-inline-block {\r\n    display: inline-block;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vY3ItdXBsb2FkL29jci11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSxtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0EseUJBQXlCO0FBQ3pCO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29jci11cGxvYWQvb2NyLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29tbW9uIHN0eWxlcyAqL1xyXG4ubWFpbi1jb250ZW50LWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIHBhZGRpbmc6IDEycHggMjhweDtcclxuICAgIG1hcmdpbjogMThweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xsYXBzZS1wYW5lbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDI4cHggMHB4IDEycHg7XHJcbiAgfVxyXG4gIC5jb2xsYXBzZS1wYW5lbC1oZWFkZXItdGV4dC1sZyB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICMzNDM3NDE7XHJcbiAgfVxyXG4gIC5pY29uLXN0eWxlLW1kIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwNjc0OGM7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLWxpbmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYmZjMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG4gIC50ZXh0LXNtLWxpZ2h0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICB9XHJcbiAgLnRleHQtbWQtcmVndWxhciB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMzNDM3NDE7XHJcbiAgfVxyXG4gIC50ZXh0LW1kLWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMzQzNzQxO1xyXG4gIH1cclxuICAucm93LW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB9XHJcbiAgLyogZW5kIG9mIGNvbW1vbiBzdHlsZXMgKi9cclxuICAucGFnZS10b3AtbGlua3Mge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIH1cclxuICAucGFnZS10b3AtbGlua3MgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW46IDBweCAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMzNDM3NDE7XHJcbiAgfVxyXG4gIC5wYWdlLXRvcC1saW5rcyBhOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uLW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDBweCA4cHg7XHJcbiAgfVxyXG4gIC5yb3RhdGUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgLmN1c3RvbS1pY29uLXN0eWxlIHtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgfVxyXG4gIC5ib3JkZXItdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5kaXNwLWlubGluZS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/ocr-upload/ocr-upload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/ocr-upload/ocr-upload.component.ts ***!
  \************************************************************/
/*! exports provided: OcrUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcrUploadComponent", function() { return OcrUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");






var OcrUploadComponent = /** @class */ (function () {
    function OcrUploadComponent(datepipe, createQuoteService, commonService) {
        this.datepipe = datepipe;
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.fileToUpload = null;
        this.msg = "No file chosen";
        this.sucesserror = "";
    }
    OcrUploadComponent.prototype.ngOnInit = function () {
    };
    OcrUploadComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        this.msg = this.fileToUpload.name;
    };
    OcrUploadComponent.prototype.fileRetryUpload = function () {
        var _this = this;
        // if(this.batchid == "" || this.batchid == "undefined")
        // {
        //   this.sucesserror = 'Please enter BatchID';
        //   $("#AlertModal").show();
        // }
        var fileExt = this.fileToUpload.name.substr(this.fileToUpload.name.lastIndexOf('.') + 1);
        if (fileExt != "xlsx") {
            this.msg = "No file chosen";
            this.sucesserror = 'Please upload excel file';
            jquery__WEBPACK_IMPORTED_MODULE_3__("#AlertModal").show();
        }
        var formData = new FormData();
        formData.append('file', this.fileToUpload);
        this.createQuoteService
            .retryuploadFile(formData)
            .subscribe(function (res) {
            console.log(res);
            if (res != "") {
                _this.msg = "No file chosen";
                _this.sucesserror = 'File uploaded sucessfully';
                jquery__WEBPACK_IMPORTED_MODULE_3__("#AlertModal").show();
            }
        }, function (error) { return function () {
        }; });
    };
    OcrUploadComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_4__["CreateQuoteService"] },
        { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    OcrUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // selector: 'app-create-quote',
            template: __webpack_require__(/*! raw-loader!./ocr-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/ocr-upload/ocr-upload.component.html"),
            styles: [__webpack_require__(/*! ./ocr-upload.component.css */ "./src/app/modules/ocr-upload/ocr-upload.component.css")]
        })
    ], OcrUploadComponent);
    return OcrUploadComponent;
}());



/***/ }),

/***/ "./src/app/modules/ocr-upload/ocr-upload.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/ocr-upload/ocr-upload.module.ts ***!
  \*********************************************************/
/*! exports provided: OcrUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcrUploadModule", function() { return OcrUploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ocr_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ocr-upload.component */ "./src/app/modules/ocr-upload/ocr-upload.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var routes = [
    {
        path: '',
        component: _ocr_upload_component__WEBPACK_IMPORTED_MODULE_3__["OcrUploadComponent"]
    }
];
var OcrUploadModule = /** @class */ (function () {
    function OcrUploadModule() {
    }
    OcrUploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_ocr_upload_component__WEBPACK_IMPORTED_MODULE_3__["OcrUploadComponent"]]
        })
    ], OcrUploadModule);
    return OcrUploadModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-ocr-upload-ocr-upload-module-es5.js.map