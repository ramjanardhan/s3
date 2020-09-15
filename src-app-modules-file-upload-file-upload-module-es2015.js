(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-file-upload-file-upload-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/file-upload/file-upload.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/file-upload/file-upload.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n#alert\r\n{\r\n  top: 40%;\r\n  width: 25%;\r\n}\r\n</style>\r\n\r\n<div class=\"heading-top\">File Upload</div>\r\n<div class=\"page-top-links\">\r\n  <a [routerLink]=\"['/create-topic']\">\r\n    <span class=\"mr-5\"></span></a\r\n  >\r\n  <a [routerLink]=\"['/file-reupload']\">\r\n    <i class=\"fas fa-file-upload\" aria-hidden=\"true\">&nbsp; </i\r\n    ><span class=\"\">File Retry Upload</span>\r\n  </a>\r\n</div>\r\n<br>\r\n<div class=\"container-box\">\r\n    <div class=\"row\">\r\n      \r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n        <a href=\"./assets/Templates/Sample.xlsx\" class=\"quote-search-button2\" style=\"color: white;line-height: 60px;\">\r\n           Download Template &nbsp;&nbsp;<i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-lg-10 col-md-10 col-sm-10\"></div>\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col-lg-10 col-md-10 col-sm-10\">\r\n          <label for=\"file\" class=\"custom-file-label\"\r\n          >{{msg}} </label>\r\n          <input type=\"file\"\r\n          id=\"file\"\r\n          class=\"custom-file-input\"\r\n          placeholder=\"Chose file\"\r\n          (change)=\"handleFileInput($event.target.files)\"> \r\n      </div>\r\n      <div class=\"col-lg-2 col-md-2 col-sm-2\"> \r\n        <button type=\"button\" (click)=\"excelUpload()\" class=\"quote-search-button1\">\r\n          Upload \r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <div class=\"row\">\r\n    <div class=\"col-lg-10 col-md-10 col-sm-10\"></div>\r\n    <div class=\"col-lg-2 col-md-2 col-sm-2\">\r\n    <div class=\"dropdown\">\r\n      <button onclick=\"myFunction()\" class=\"dropbtn\">Download &nbsp;&nbsp;<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></button>\r\n      <div id=\"myDropdown\" class=\"dropdown-content\">\r\n        <a href=\"http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7779/downloadexcel\">Export to excel</a>\r\n        <a href=\"http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7779/downloadpdf\">Export to pdf</a>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n        <table style=\"width: 100%;font-size: 12px;\" *ngIf=\"uploaddata!=null\">\r\n          <thead>\r\n            <tr class=\"grid-style\"> \r\n              <th>Proposal No</th> \r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>LOB Name</th>\r\n              <th>Product Name</th>\r\n              <th>Proposal Startdate</th>\r\n              <th>Proposal Status</th> \r\n              <th>User ID</th> \r\n              <th>UW Approved</th> \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of uploaddata\" class=\"alert alert-light\">\r\n              <td>{{item.uploadPID}}</td> \r\n              <td>{{item.firstname}}</td>\r\n              <td>{{item.lastname}}</td>     \r\n              <td>{{item.lob_name}}</td>    \r\n              <td>{{item.product_name}}</td> \r\n              <td>{{item.proposal_startdate}}</td> \r\n              <td>{{item.proposal_status}}</td> \r\n              <td>{{item.user_id}}</td> \r\n              <td>{{item.uw_approved}}</td> \r\n            </tr>\r\n          </tbody>\r\n        </table> \r\n      </div>\r\n    </div>\r\n</div>\r\n <!-- Start Alert Screen -->\r\n<div class=\"container\">\r\n  <!-- The Modal -->\r\n  <div class=\"modal\" id=\"AlertModal\">\r\n    <div class=\"modal-dialog\" id=\"alert\">\r\n      <div class=\"modal-content\">\r\n      \r\n        <!-- Modal Header -->\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Alert</h4>\r\n          <button type=\"button\" class=\"close\" onclick=\"alertscreenbtnback()\">&times;</button>\r\n        </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          <div style=\"font-size: 12px;\">\r\n              {{sucesserror}}\r\n         </div>\r\n        </div>\r\n\r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" onclick=\"alertscreenbtnback()\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/core/services/file-upload.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/file-upload.service.ts ***!
  \******************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
headers1 = headers1.append('Content-Type', 'application/json');
headers1 = headers1.append('Authorization', 'application/json');
let FileUploadService = class FileUploadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceBaseUrl}`;
    }
    // uploadFile(data: FormData): Observable<string> 
    // {
    //   console.log(data);
    //   let headers = new HttpHeaders();
    //   headers.append('Content-Type', 'multipart/form-data');
    //   const httpOptions = { headers: headers };
    //   return this.httpClient.post<string>('http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7779/excelupload',
    //   data,httpOptions);
    // }
    uploadFile(data) {
        console.log(data);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        const httpOptions = { headers: headers };
        return this.httpClient.post('http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7779/excelupload', data, httpOptions);
    }
    getuploadedData() {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7779/tutorials");
    }
};
FileUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FileUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
], FileUploadService);



/***/ }),

/***/ "./src/app/modules/file-upload/file-upload.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/file-upload/file-upload.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* common styles */\r\n.main-content-box {\r\n    background: #ffffff;\r\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n    padding: 12px 28px;\r\n    margin: 18px 0px;\r\n  }\r\n.collapse-panel-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 28px 0px 12px;\r\n  }\r\n.collapse-panel-header-text-lg {\r\n    font-weight: 300;\r\n    font-size: 24px;\r\n    color: #343741;\r\n  }\r\n.icon-style-md {\r\n    font-size: 28px !important;\r\n    color: #06748c;\r\n  }\r\n.section-line {\r\n    border: 1px solid #c0bfc0;\r\n    margin-bottom: 18px;\r\n  }\r\n.text-sm-light {\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    color: #707070;\r\n  }\r\n.text-md-regular {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #343741;\r\n  }\r\n.text-md-bold {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    color: #343741;\r\n  }\r\n.row-margin {\r\n    margin-top: 28px;\r\n    margin-bottom: 32px;\r\n  }\r\n/* end of common styles */\r\n.page-top-links {\r\n    text-align: right;\r\n    margin-top: 32px;\r\n  }\r\n.page-top-links a {\r\n    text-decoration: none;\r\n    margin: 0px 24px;\r\n    font-size: 16px;\r\n    color: #343741;\r\n  }\r\n.page-top-links a:last-child {\r\n    margin-right: 0px;\r\n  }\r\n.icon-margin {\r\n    margin: 0px 8px;\r\n  }\r\n.rotate {\r\n    transform: rotate(180deg);\r\n  }\r\n.custom-icon-style {\r\n    padding-top: 6px;\r\n  }\r\n.border-text {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #000000;\r\n    padding: 8px 0px;\r\n    background-color: #ffffff;\r\n    border: 1px solid #c0bfc0;\r\n    border-radius: 3px;\r\n  }\r\n.disp-inline-block {\r\n    display: inline-block;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDQSx5QkFBeUI7QUFDekI7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbW1vbiBzdHlsZXMgKi9cclxuLm1haW4tY29udGVudC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI4cHg7XHJcbiAgICBtYXJnaW46IDE4cHggMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29sbGFwc2UtcGFuZWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAyOHB4IDBweCAxMnB4O1xyXG4gIH1cclxuICAuY29sbGFwc2UtcGFuZWwtaGVhZGVyLXRleHQtbGcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMzQzNzQxO1xyXG4gIH1cclxuICAuaWNvbi1zdHlsZS1tZCB7XHJcbiAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDY3NDhjO1xyXG4gIH1cclxuICAuc2VjdGlvbi1saW5lIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuICAudGV4dC1zbS1saWdodCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgfVxyXG4gIC50ZXh0LW1kLXJlZ3VsYXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzQzNzQxO1xyXG4gIH1cclxuICAudGV4dC1tZC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzM0Mzc0MTtcclxuICB9XHJcbiAgLnJvdy1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC8qIGVuZCBvZiBjb21tb24gc3R5bGVzICovXHJcbiAgLnBhZ2UtdG9wLWxpbmtzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICB9XHJcbiAgLnBhZ2UtdG9wLWxpbmtzIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiAwcHggMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzQzNzQxO1xyXG4gIH1cclxuICAucGFnZS10b3AtbGlua3MgYTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICBcclxuICAuaWNvbi1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAwcHggOHB4O1xyXG4gIH1cclxuICAucm90YXRlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gIC5jdXN0b20taWNvbi1zdHlsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIH1cclxuICAuYm9yZGVyLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBiZmMwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAuZGlzcC1pbmxpbmUtYmxvY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/modules/file-upload/file-upload.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/file-upload/file-upload.component.ts ***!
  \**************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");
/* harmony import */ var src_app_core_services_file_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/file-upload.service */ "./src/app/core/services/file-upload.service.ts");







let FileUploadComponent = class FileUploadComponent {
    constructor(datepipe, createQuoteService, commonService, fileuploadService) {
        this.datepipe = datepipe;
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.fileuploadService = fileuploadService;
        this.fileToUpload = null;
        this.msg = "No file chosen";
        this.sucesserror = "";
    }
    ngOnInit() {
        this.getuploadedData();
    }
    handleFileInput(files) {
        this.fileToUpload = files.item(0);
        this.msg = this.fileToUpload.name;
    }
    excelUpload() {
        if (this.msg == "No file chosen") {
            this.sucesserror = 'Please select excel file for upload';
            jquery__WEBPACK_IMPORTED_MODULE_3__("#AlertModal").show();
        }
        var fileExt = this.fileToUpload.name.substr(this.fileToUpload.name.lastIndexOf('.') + 1);
        if (fileExt != "xlsx") {
            this.msg = "No file chosen";
            this.sucesserror = 'Please upload excel file';
            jquery__WEBPACK_IMPORTED_MODULE_3__("#AlertModal").show();
        }
        let formData = new FormData();
        formData.append('file', this.fileToUpload);
        this.fileuploadService
            .uploadFile(formData)
            .subscribe((res) => {
            console.log(res);
            if (res != "") {
                this.response = res;
                this.msg = "No file chosen";
                this.getuploadedData();
                this.sucesserror = this.response.message;
                jquery__WEBPACK_IMPORTED_MODULE_3__("#AlertModal").show();
            }
        }, (error) => {
            this.sucesserror = 'There is some problem for uploading the sheet. Please contact to Administrator';
            jquery__WEBPACK_IMPORTED_MODULE_3__("#AlertModal").show();
        });
    }
    getuploadedData() {
        this.fileuploadService
            .getuploadedData()
            .subscribe((res) => {
            this.uploaddata = res;
        }, (error) => {
            this.sucesserror = 'There is some problem for getting the uploaded data. Please contact to Administrator';
            jquery__WEBPACK_IMPORTED_MODULE_3__("#AlertModal").show();
        });
    }
};
FileUploadComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_4__["CreateQuoteService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_core_services_file_upload_service__WEBPACK_IMPORTED_MODULE_6__["FileUploadService"] }
];
FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // selector: 'app-create-quote',
        template: __webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/file-upload/file-upload.component.html"),
        styles: [__webpack_require__(/*! ./file-upload.component.css */ "./src/app/modules/file-upload/file-upload.component.css")]
    })
], FileUploadComponent);



/***/ }),

/***/ "./src/app/modules/file-upload/file-upload.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/file-upload/file-upload.module.ts ***!
  \***********************************************************/
/*! exports provided: FileUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-upload.component */ "./src/app/modules/file-upload/file-upload.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    {
        path: '',
        component: _file_upload_component__WEBPACK_IMPORTED_MODULE_3__["FileUploadComponent"]
    }
];
let FileUploadModule = class FileUploadModule {
};
FileUploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["FileUploadComponent"]]
    })
], FileUploadModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-file-upload-file-upload-module-es2015.js.map