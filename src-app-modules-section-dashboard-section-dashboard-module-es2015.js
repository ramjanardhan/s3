(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-section-dashboard-section-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/section-dashboard/section-dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/section-dashboard/section-dashboard.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"heading-top\">Discussion Fourm Dashboard</div>\r\n<div class=\"page-top-links\">\r\n  <a [routerLink]=\"['/section-dashboard']\" routerLinkActive=\"active\">\r\n    <i class=\"fas fa-home icon-margin\" aria-hidden=\"true\"></i\r\n    ><span style=\"font-size: 12px;\">Value Momentum Support Forum</span>\r\n  </a>\r\n</div>\r\n<br>\r\n<div class=\"container-box\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n        <h3>Value Momentum Support Forum</h3><br>\r\n        <table style=\"width: 100%;font-size: 12px;\" *ngIf=\"sectionDataList!=null\">\r\n          <thead>\r\n            <tr class=\"grid-style\"> \r\n              <th colspan=\"2\" class=\"dashboard-heading\">Value Momentum Forum</th>\r\n              <th class=\"dashboard-heading\">Last Post</th> \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of sectionDataList\" class=\"alert alert-light\"> \r\n              <td style=\"width: 5%;\">\r\n                <i class=\"fas fa-thumbtack section-icon1\"></i>\r\n              </td>\r\n              <td style=\"width: 75%;\" valign=\"top\">\t\r\n                <a [routerLink]=\"['/topic-dashboard',item.section.id,item.section.name]\" class=\"dashboard-content\">{{item.section.name}}</a><br>\r\n                <span class=\"dashboard-content\">{{item.section.description}}</span><br>\r\n                <span class=\"dashboard-content\">{{item.topicCount}} Topics · {{item.postCount}} Posts</span>\r\n              </td>\r\n              <td style=\"width: 20%;\" valign=\"top\"><a [routerLink]=\"['/topic-dashboard']\">{{item.lastTopic}}</a></td>      \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/section-dashboard/section-dashboard.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/section-dashboard/section-dashboard.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* common styles */\r\n.main-content-box {\r\n    background: #ffffff;\r\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n    padding: 12px 28px;\r\n    margin: 18px 0px;\r\n  }\r\n.collapse-panel-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 28px 0px 12px;\r\n  }\r\n.collapse-panel-header-text-lg {\r\n    font-weight: 300;\r\n    font-size: 24px;\r\n    color: #343741;\r\n  }\r\n.icon-style-md {\r\n    font-size: 28px !important;\r\n    color: #06748c;\r\n  }\r\n.section-line {\r\n    border: 1px solid #c0bfc0;\r\n    margin-bottom: 18px;\r\n  }\r\n.text-sm-light {\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    color: #707070;\r\n  }\r\n.text-md-regular {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #343741;\r\n  }\r\n.text-md-bold {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    color: #343741;\r\n  }\r\n.row-margin {\r\n    margin-top: 28px;\r\n    margin-bottom: 32px;\r\n  }\r\n/* end of common styles */\r\n.page-top-links {\r\n    text-align: left;\r\n    margin-top: 32px;\r\n  }\r\n.page-top-links a {\r\n    text-decoration: none;\r\n    margin: 0px 24px;\r\n    font-size: 16px;\r\n    color: #343741;\r\n  }\r\n.page-top-links a:last-child {\r\n    margin-right: 0px;\r\n  }\r\n.icon-margin {\r\n    margin: 0px 8px;\r\n  }\r\n.rotate {\r\n    transform: rotate(180deg);\r\n  }\r\n.custom-icon-style {\r\n    padding-top: 6px;\r\n  }\r\n.border-text {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #000000;\r\n    padding: 8px 0px;\r\n    background-color: #ffffff;\r\n    border: 1px solid #c0bfc0;\r\n    border-radius: 3px;\r\n  }\r\n.disp-inline-block {\r\n    display: inline-block;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWN0aW9uLWRhc2hib2FyZC9zZWN0aW9uLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDQSx5QkFBeUI7QUFDekI7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VjdGlvbi1kYXNoYm9hcmQvc2VjdGlvbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbW1vbiBzdHlsZXMgKi9cclxuLm1haW4tY29udGVudC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI4cHg7XHJcbiAgICBtYXJnaW46IDE4cHggMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29sbGFwc2UtcGFuZWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAyOHB4IDBweCAxMnB4O1xyXG4gIH1cclxuICAuY29sbGFwc2UtcGFuZWwtaGVhZGVyLXRleHQtbGcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMzQzNzQxO1xyXG4gIH1cclxuICAuaWNvbi1zdHlsZS1tZCB7XHJcbiAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDY3NDhjO1xyXG4gIH1cclxuICAuc2VjdGlvbi1saW5lIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuICAudGV4dC1zbS1saWdodCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgfVxyXG4gIC50ZXh0LW1kLXJlZ3VsYXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzQzNzQxO1xyXG4gIH1cclxuICAudGV4dC1tZC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzM0Mzc0MTtcclxuICB9XHJcbiAgLnJvdy1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC8qIGVuZCBvZiBjb21tb24gc3R5bGVzICovXHJcbiAgLnBhZ2UtdG9wLWxpbmtzIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIH1cclxuICAucGFnZS10b3AtbGlua3MgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW46IDBweCAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMzNDM3NDE7XHJcbiAgfVxyXG4gIC5wYWdlLXRvcC1saW5rcyBhOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uLW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDBweCA4cHg7XHJcbiAgfVxyXG4gIC5yb3RhdGUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgLmN1c3RvbS1pY29uLXN0eWxlIHtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgfVxyXG4gIC5ib3JkZXItdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5kaXNwLWlubGluZS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/section-dashboard/section-dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/section-dashboard/section-dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: SectionDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionDashboardComponent", function() { return SectionDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");
/* harmony import */ var src_app_core_services_discussion_forum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/discussion-forum.service */ "./src/app/core/services/discussion-forum.service.ts");






let SectionDashboardComponent = class SectionDashboardComponent {
    constructor(datepipe, createQuoteService, commonService, discussionforumService) {
        this.datepipe = datepipe;
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.discussionforumService = discussionforumService;
        this.topiccount = 0;
    }
    ngOnInit() {
        this.getSectionDashboardDetails();
    }
    getSectionDashboardDetails() {
        this.discussionforumService
            .getSectionDashboardDetails()
            .subscribe((res) => {
            this.sectionDataList = res;
            console.log(this.sectionDataList);
        }, (error) => () => {
        });
    }
};
SectionDashboardComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__["CreateQuoteService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_core_services_discussion_forum_service__WEBPACK_IMPORTED_MODULE_5__["DiscussionForumService"] }
];
SectionDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // selector: 'app-create-quote',
        template: __webpack_require__(/*! raw-loader!./section-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/section-dashboard/section-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./section-dashboard.component.css */ "./src/app/modules/section-dashboard/section-dashboard.component.css")]
    })
], SectionDashboardComponent);



/***/ }),

/***/ "./src/app/modules/section-dashboard/section-dashboard.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/section-dashboard/section-dashboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: SectionDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionDashboardModule", function() { return SectionDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _section_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-dashboard.component */ "./src/app/modules/section-dashboard/section-dashboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    {
        path: '',
        component: _section_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["SectionDashboardComponent"]
    }
];
let SectionDashboardModule = class SectionDashboardModule {
};
SectionDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [_section_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["SectionDashboardComponent"]]
    })
], SectionDashboardModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-section-dashboard-section-dashboard-module-es2015.js.map