(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-create-post-create-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/create-post/create-post.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/create-post/create-post.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n#alert\r\n{\r\n  top: 22%;\r\n  width: 25%;\r\n}\r\n</style>\r\n\r\n<div class=\"heading-top\">Create Post</div>\r\n\r\n<div class=\"container-box\">\r\n  <div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 quote-fields\">\r\n    <span class=\"has-float-label\">\r\n      <select class=\"form-control custom-form-control\" name=\"topic\" id=\"topic\" (change)=\"onSectionChange($event)\">\r\n        <option value=\"\" selected hidden>Select</option>\r\n        <option [value]=\"topic.id\" *ngFor=\"let topic of topicList\">{{topic.title}}</option>\r\n      </select>\r\n      <label for=\"topic\">Topic</label>\r\n    </span>\r\n  </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 quote-fields\">\r\n        <textarea type=\"text\" class=\"form-control quote-textbox\" id=\"content\" placeholder=\"Content\"\r\n        name=\"content\" rows=\"7\" [(ngModel)]=\"objPost.content\"></textarea>\r\n    </div>\r\n  </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-1 col-md-1 col-sm-1\">\r\n        <button type=\"button\" (click)=\"createPostDetails()\" class=\"quote-search-button1\">\r\n          Save\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\r\n        <div class=\"col-lg-1 col-md-1 col-sm-1\">\r\n          <a [routerLink]=\"['/create-topic']\"><button type=\"button\" class=\"quote-search-button1\">\r\n            Back \r\n          </button></a>\r\n        </div>\r\n    </div>\r\n</div>\r\n <!-- Start Alert Screen -->\r\n<div class=\"container\">\r\n  <!-- The Modal -->\r\n  <div class=\"modal\" id=\"AlertModal\">\r\n    <div class=\"modal-dialog\" id=\"alert\">\r\n      <div class=\"modal-content\">\r\n      \r\n        <!-- Modal Header -->\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Alert</h4>\r\n          <button type=\"button\" class=\"close\" onclick=\"alertscreenbtnback()\">&times;</button>\r\n        </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          <div style=\"font-size: 12px;\">\r\n              {{sucesserror}}\r\n         </div>\r\n        </div>\r\n\r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-danger\" onclick=\"alertscreenbtnback()\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/create-post/create-post.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/create-post/create-post.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JlYXRlLXBvc3QvY3JlYXRlLXBvc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/create-post/create-post.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/create-post/create-post.component.ts ***!
  \**************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");
/* harmony import */ var src_app_core_services_discussion_forum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/discussion-forum.service */ "./src/app/core/services/discussion-forum.service.ts");
/* harmony import */ var src_app_Models_post_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/post.model */ "./src/app/Models/post.model.ts");








let CreatePostComponent = class CreatePostComponent {
    constructor(datepipe, createQuoteService, commonService, discussionfourmService) {
        this.datepipe = datepipe;
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.discussionfourmService = discussionfourmService;
        this.sucesserror = "";
        this.objPost = new src_app_Models_post_model__WEBPACK_IMPORTED_MODULE_7__["TopicPost"]();
    }
    ngOnInit() {
        this.getTopicList();
    }
    onSectionChange(event) {
        this.objPost.id = event.target.value;
        console.log(this.objPost.id);
    }
    getTopicList() {
        this.discussionfourmService.getAllTopics().subscribe((res) => {
            this.topicList = res;
            console.log(res);
        });
    }
    createPostDetails() {
        if (this.objPost.id == "" || this.objPost.id == null) {
            this.sucesserror = "Please select Topic for creating Post";
            jquery__WEBPACK_IMPORTED_MODULE_3__("#AlertModal").show();
            return;
        }
        if (this.objPost.content == "" || this.objPost.content == null) {
            this.sucesserror = "Please enter content";
            jquery__WEBPACK_IMPORTED_MODULE_3__("#AlertModal").show();
            return;
        }
        this.discussionfourmService.createPostDetails(this.objPost).subscribe((res) => {
            this.respone = res;
            console.log(this.respone);
            this.objPost.content = "";
            this.objPost.id = "";
            this.sucesserror = "Post Created Successfully";
            jquery__WEBPACK_IMPORTED_MODULE_3__("#AlertModal").show();
        });
    }
};
CreatePostComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_4__["CreateQuoteService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_core_services_discussion_forum_service__WEBPACK_IMPORTED_MODULE_6__["DiscussionForumService"] }
];
CreatePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // selector: 'app-create-quote',
        template: __webpack_require__(/*! raw-loader!./create-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/create-post/create-post.component.html"),
        styles: [__webpack_require__(/*! ./create-post.component.css */ "./src/app/modules/create-post/create-post.component.css")]
    })
], CreatePostComponent);



/***/ }),

/***/ "./src/app/modules/create-post/create-post.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/create-post/create-post.module.ts ***!
  \***********************************************************/
/*! exports provided: CreatePostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostModule", function() { return CreatePostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-post.component */ "./src/app/modules/create-post/create-post.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    {
        path: '',
        component: _create_post_component__WEBPACK_IMPORTED_MODULE_3__["CreatePostComponent"]
    }
];
let CreatePostModule = class CreatePostModule {
};
CreatePostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [_create_post_component__WEBPACK_IMPORTED_MODULE_3__["CreatePostComponent"]]
    })
], CreatePostModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-create-post-create-post-module-es2015.js.map