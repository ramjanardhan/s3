(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-topic-dashboard-topic-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/topic-dashboard/topic-dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/topic-dashboard/topic-dashboard.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"heading-top\">Discussion Fourm Dashboard</div>\r\n<div class=\"page-top-links\">\r\n  <a [routerLink]=\"['/section-dashboard']\" routerLinkActive=\"active\">\r\n    <i class=\"fas fa-home icon-margin\" aria-hidden=\"true\"></i\r\n    ><span style=\"font-size: 12px;\">Value Momentum Support Forum</span>\r\n  </a>\r\n  <a [routerLink]=\"['/section-dashboard']\" routerLinkActive=\"active\">\r\n    <i class=\"fa fa-angle-right icon-margin\" aria-hidden=\"true\"></i\r\n    ><span style=\"font-size: 12px;\">{{name}}</span>\r\n  </a>\r\n</div>\r\n<br>\r\n<div class=\"container-box\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n      <!-- <a [routerLink]=\"['/section-dashboard']\" style=\"font-size: 16px;\">{{name}}</a> -->\r\n      <h3>{{name}}</h3><br>\r\n      <table style=\"width: 100%;font-size: 12px;\" *ngIf=\"topicDataList!=null\">\r\n        <thead>\r\n          <tr class=\"grid-style\"> \r\n            <th colspan=\"2\" class=\"dashboard-heading\">Topics</th>\r\n            <th class=\"dashboard-heading\">Last Post</th> \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of topicDataList\" class=\"alert alert-light\"> \r\n            <td style=\"width: 5%;\">\r\n              <i class=\"far fa-comments section-icon1\"></i>\r\n            </td>\r\n            <td style=\"width: 75%;\" valign=\"top\">\t\r\n              <a [routerLink]=\"['/post-dashboard',item.id,item.content]\" class=\"dashboard-content\">{{item.content}}</a><br>\r\n              <span class=\"dashboard-content\">By</span>&nbsp;<span style=\"color: red;\">Vam</span><br>\r\n              <span class=\"dashboard-content\">1 Reply · {{item.views}} Views</span>\r\n            </td>\r\n            <td style=\"width: 20%;\" valign=\"top\"><a [routerLink]=\"['/topic-dashboard']\">{{item.lastUpdateDate}}</a></td>      \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/topic-dashboard/topic-dashboard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/topic-dashboard/topic-dashboard.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* common styles */\r\n.main-content-box {\r\n    background: #ffffff;\r\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n    padding: 12px 28px;\r\n    margin: 18px 0px;\r\n  }\r\n.collapse-panel-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 28px 0px 12px;\r\n  }\r\n.collapse-panel-header-text-lg {\r\n    font-weight: 300;\r\n    font-size: 24px;\r\n    color: #343741;\r\n  }\r\n.icon-style-md {\r\n    font-size: 28px !important;\r\n    color: #06748c;\r\n  }\r\n.section-line {\r\n    border: 1px solid #c0bfc0;\r\n    margin-bottom: 18px;\r\n  }\r\n.text-sm-light {\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    color: #707070;\r\n  }\r\n.text-md-regular {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #343741;\r\n  }\r\n.text-md-bold {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    color: #343741;\r\n  }\r\n.row-margin {\r\n    margin-top: 28px;\r\n    margin-bottom: 32px;\r\n  }\r\n/* end of common styles */\r\n.page-top-links {\r\n    text-align: left;\r\n    margin-top: 32px;\r\n  }\r\n.page-top-links a {\r\n    text-decoration: none;\r\n    /* margin: 0px 24px; */\r\n    font-size: 16px;\r\n    color: #343741;\r\n  }\r\n.page-top-links a:last-child {\r\n    margin-right: 0px;\r\n  }\r\n.icon-margin {\r\n    margin: 0px 8px;\r\n  }\r\n.rotate {\r\n    transform: rotate(180deg);\r\n  }\r\n.custom-icon-style {\r\n    padding-top: 6px;\r\n  }\r\n.border-text {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #000000;\r\n    padding: 8px 0px;\r\n    background-color: #ffffff;\r\n    border: 1px solid #c0bfc0;\r\n    border-radius: 3px;\r\n  }\r\n.disp-inline-block {\r\n    display: inline-block;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90b3BpYy1kYXNoYm9hcmQvdG9waWMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsY0FBYztFQUNoQjtBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNBLHlCQUF5QjtBQUN6QjtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy90b3BpYy1kYXNoYm9hcmQvdG9waWMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb21tb24gc3R5bGVzICovXHJcbi5tYWluLWNvbnRlbnQtYm94IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgcGFkZGluZzogMTJweCAyOHB4O1xyXG4gICAgbWFyZ2luOiAxOHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbGxhcHNlLXBhbmVsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMjhweCAwcHggMTJweDtcclxuICB9XHJcbiAgLmNvbGxhcHNlLXBhbmVsLWhlYWRlci10ZXh0LWxnIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzM0Mzc0MTtcclxuICB9XHJcbiAgLmljb24tc3R5bGUtbWQge1xyXG4gICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzA2NzQ4YztcclxuICB9XHJcbiAgLnNlY3Rpb24tbGluZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBiZmMwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcbiAgLnRleHQtc20tbGlnaHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gIH1cclxuICAudGV4dC1tZC1yZWd1bGFyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzM0Mzc0MTtcclxuICB9XHJcbiAgLnRleHQtbWQtYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzNDM3NDE7XHJcbiAgfVxyXG4gIC5yb3ctbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gIH1cclxuICAvKiBlbmQgb2YgY29tbW9uIHN0eWxlcyAqL1xyXG4gIC5wYWdlLXRvcC1saW5rcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICB9XHJcbiAgLnBhZ2UtdG9wLWxpbmtzIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLyogbWFyZ2luOiAwcHggMjRweDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzQzNzQxO1xyXG4gIH1cclxuICAucGFnZS10b3AtbGlua3MgYTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICBcclxuICAuaWNvbi1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAwcHggOHB4O1xyXG4gIH1cclxuICAucm90YXRlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gIC5jdXN0b20taWNvbi1zdHlsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIH1cclxuICAuYm9yZGVyLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBiZmMwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAuZGlzcC1pbmxpbmUtYmxvY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/modules/topic-dashboard/topic-dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/topic-dashboard/topic-dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopicDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDashboardComponent", function() { return TopicDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");
/* harmony import */ var src_app_core_services_discussion_forum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/discussion-forum.service */ "./src/app/core/services/discussion-forum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TopicDashboardComponent = /** @class */ (function () {
    function TopicDashboardComponent(datepipe, createQuoteService, commonService, discussionforumService, _Activatedroute) {
        this.datepipe = datepipe;
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.discussionforumService = discussionforumService;
        this._Activatedroute = _Activatedroute;
        this.topiccount = 0;
    }
    TopicDashboardComponent.prototype.ngOnInit = function () {
        debugger;
        this.id = this._Activatedroute.snapshot.paramMap.get("item.section.id");
        this.name = this._Activatedroute.snapshot.paramMap.get("item.section.name");
        this.url = window.location.href;
        localStorage.setItem('section', this.name);
        localStorage.setItem('url', this.url);
        this.getAllTopics(this.id);
        console.log(this.id);
    };
    TopicDashboardComponent.prototype.getAllTopics = function (id) {
        var _this = this;
        this.discussionforumService
            .getAllTopicsBysectionID(id)
            .subscribe(function (res) {
            _this.topicDataList = res;
            console.log(_this.topicDataList);
        }, function (error) { return function () {
        }; });
    };
    TopicDashboardComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__["CreateQuoteService"] },
        { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: src_app_core_services_discussion_forum_service__WEBPACK_IMPORTED_MODULE_5__["DiscussionForumService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    TopicDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // selector: 'app-create-quote',
            template: __webpack_require__(/*! raw-loader!./topic-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/topic-dashboard/topic-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./topic-dashboard.component.css */ "./src/app/modules/topic-dashboard/topic-dashboard.component.css")]
        })
    ], TopicDashboardComponent);
    return TopicDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/topic-dashboard/topic-dashboard.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/topic-dashboard/topic-dashboard.module.ts ***!
  \*******************************************************************/
/*! exports provided: TopicDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDashboardModule", function() { return TopicDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _topic_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic-dashboard.component */ "./src/app/modules/topic-dashboard/topic-dashboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var routes = [
    {
        path: '',
        component: _topic_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["TopicDashboardComponent"]
    }
];
var TopicDashboardModule = /** @class */ (function () {
    function TopicDashboardModule() {
    }
    TopicDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_topic_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["TopicDashboardComponent"]]
        })
    ], TopicDashboardModule);
    return TopicDashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-topic-dashboard-topic-dashboard-module-es5.js.map