(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-post-dashboard-post-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/post-dashboard/post-dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/post-dashboard/post-dashboard.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"heading-top\">Discussion Fourm Dashboard</div>\r\n<div class=\"page-top-links\">\r\n  <a [routerLink]=\"['/section-dashboard']\" routerLinkActive=\"active\">\r\n    <i class=\"fas fa-home icon-margin\" aria-hidden=\"true\"></i\r\n    ><span style=\"font-size: 12px;\">Value Momentum Support Forum</span>\r\n  </a>\r\n  <a [routerLink]=\"['/section-dashboard']\" routerLinkActive=\"active\">\r\n    <i class=\"fa fa-angle-right icon-margin\" aria-hidden=\"true\"></i\r\n    ><span style=\"font-size: 12px;\">{{name}}</span>\r\n  </a>\r\n  <a  href=\"{{url}}\">\r\n    <i class=\"fa fa-angle-right icon-margin\" aria-hidden=\"true\"></i\r\n    ><span style=\"font-size: 12px;\">{{content}}</span>\r\n  </a>\r\n</div>\r\n<br>\r\n<div class=\"container-box\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n      <!-- <a href=\"{{url}}\">url</a> -->\r\n      <!-- <a [routerLink]=\"['/section-dashboard']\" style=\"font-size: 16px;\">{{name}}</a> -->\r\n      <!-- <a [routerLink]=\"['/topic-dashboard',item.section.id,item.section.name']\" style=\"font-size: 16px;\">{{content}}</a> -->\r\n     <h3>{{content}}</h3><br>\r\n      <!-- <h3>{{name}}</h3><br> -->\r\n      <table style=\"width: 100%;font-size: 12px;\" *ngIf=\"postDataList!=null\">\r\n        <thead>\r\n          <tr style=\"height: 40px;\" class=\"grid-style\"> \r\n            <th class=\"dashboard-heading\" colspan=\"2\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of postDataList\" class=\"alert alert-light\"> \r\n            <td class=\"post-col-1\" valign=\"top\">\r\n              <i class=\"fa fa-user-circle section-icon\" style=\"margin-left: 25px;\"></i><br><br>\r\n\r\n              <div *ngIf=\"item.rate==0\" style=\"margin-left: 25px;\">\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,1)\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,2)\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,3)\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,4)\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,5)\"></i>\r\n              </div>\r\n              <div *ngIf=\"item.rate==1\" style=\"margin-left: 25px;\">\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,2)\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,3)\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,4)\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,5)\"></i>\r\n              </div>\r\n              <div *ngIf=\"item.rate==2\" style=\"margin-left: 25px;\">\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,3)\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,4)\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,5)\"></i>\r\n              </div>\r\n              <div *ngIf=\"item.rate==3\" style=\"margin-left: 25px;\">\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,4)\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,5)\"></i>\r\n              </div>\r\n              <div *ngIf=\"item.rate==4\" style=\"margin-left: 25px;\">\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star mt-35\" aria-hidden=\"true\" (click)=\"postRate(item.id,5)\"></i>\r\n              </div>\r\n              <div *ngIf=\"item.rate==5\" style=\"margin-left: 25px;\">\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>&nbsp;\r\n                <i class=\"fa fa-star star-icon mt-35\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </td>\r\n            <td class=\"post-col-2\"  valign=\"top\">\r\n              <span class=\"dashboard-content\">{{item.content}}</span><br><br>\r\n\r\n              <i class=\"fa fa-thumbs-down mr-130\" aria-hidden=\"true\" (click)=\"postDownVote(item.id)\"></i>\r\n              &nbsp;<span style=\"color: red;font-weight: bold;\" class=\"mr-130\">{{item.downvote}}</span>\r\n\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>\r\n              <i class=\"fa fa-thumbs-up mr-130\" aria-hidden=\"true\" (click)=\"postUpVote(item.id)\"></i></span>\r\n              &nbsp;<span style=\"color: green;font-weight: bold;\" class=\"mr-130\">{{item.upvote}}</span>\r\n            </td>   \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/post-dashboard/post-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/post-dashboard/post-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* common styles */\r\n.main-content-box {\r\n    background: #ffffff;\r\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n    padding: 12px 28px;\r\n    margin: 18px 0px;\r\n  }\r\n.collapse-panel-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 28px 0px 12px;\r\n  }\r\n.collapse-panel-header-text-lg {\r\n    font-weight: 300;\r\n    font-size: 24px;\r\n    color: #343741;\r\n  }\r\n.icon-style-md {\r\n    font-size: 28px !important;\r\n    color: #06748c;\r\n  }\r\n.section-line {\r\n    border: 1px solid #c0bfc0;\r\n    margin-bottom: 18px;\r\n  }\r\n.text-sm-light {\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    color: #707070;\r\n  }\r\n.text-md-regular {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #343741;\r\n  }\r\n.text-md-bold {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    color: #343741;\r\n  }\r\n.row-margin {\r\n    margin-top: 28px;\r\n    margin-bottom: 32px;\r\n  }\r\n/* end of common styles */\r\n.page-top-links {\r\n    text-align: left;\r\n    margin-top: 32px;\r\n  }\r\n.page-top-links a {\r\n    text-decoration: none;\r\n    /* margin: 0px 24px; */\r\n    font-size: 16px;\r\n    color: #343741;\r\n  }\r\n.page-top-links a:last-child {\r\n    margin-right: 0px;\r\n  }\r\n.icon-margin {\r\n    margin: 0px 8px;\r\n  }\r\n.rotate {\r\n    transform: rotate(180deg);\r\n  }\r\n.custom-icon-style {\r\n    padding-top: 6px;\r\n  }\r\n.border-text {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #000000;\r\n    padding: 8px 0px;\r\n    background-color: #ffffff;\r\n    border: 1px solid #c0bfc0;\r\n    border-radius: 3px;\r\n  }\r\n.disp-inline-block {\r\n    display: inline-block;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0LWRhc2hib2FyZC9wb3N0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDQSx5QkFBeUI7QUFDekI7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC1kYXNoYm9hcmQvcG9zdC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbW1vbiBzdHlsZXMgKi9cclxuLm1haW4tY29udGVudC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI4cHg7XHJcbiAgICBtYXJnaW46IDE4cHggMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29sbGFwc2UtcGFuZWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAyOHB4IDBweCAxMnB4O1xyXG4gIH1cclxuICAuY29sbGFwc2UtcGFuZWwtaGVhZGVyLXRleHQtbGcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMzQzNzQxO1xyXG4gIH1cclxuICAuaWNvbi1zdHlsZS1tZCB7XHJcbiAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDY3NDhjO1xyXG4gIH1cclxuICAuc2VjdGlvbi1saW5lIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuICAudGV4dC1zbS1saWdodCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgfVxyXG4gIC50ZXh0LW1kLXJlZ3VsYXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzQzNzQxO1xyXG4gIH1cclxuICAudGV4dC1tZC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzM0Mzc0MTtcclxuICB9XHJcbiAgLnJvdy1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC8qIGVuZCBvZiBjb21tb24gc3R5bGVzICovXHJcbiAgLnBhZ2UtdG9wLWxpbmtzIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIH1cclxuICAucGFnZS10b3AtbGlua3MgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvKiBtYXJnaW46IDBweCAyNHB4OyAqL1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMzNDM3NDE7XHJcbiAgfVxyXG4gIC5wYWdlLXRvcC1saW5rcyBhOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uLW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDBweCA4cHg7XHJcbiAgfVxyXG4gIC5yb3RhdGUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgLmN1c3RvbS1pY29uLXN0eWxlIHtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgfVxyXG4gIC5ib3JkZXItdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5kaXNwLWlubGluZS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/post-dashboard/post-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/post-dashboard/post-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: PostDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDashboardComponent", function() { return PostDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");
/* harmony import */ var src_app_core_services_discussion_forum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/discussion-forum.service */ "./src/app/core/services/discussion-forum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Models_postlike_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/postlike.model */ "./src/app/Models/postlike.model.ts");








let PostDashboardComponent = class PostDashboardComponent {
    constructor(datepipe, createQuoteService, commonService, discussionforumService, _Activatedroute) {
        this.datepipe = datepipe;
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.discussionforumService = discussionforumService;
        this._Activatedroute = _Activatedroute;
        this.objPostLike = new src_app_Models_postlike_model__WEBPACK_IMPORTED_MODULE_7__["PostLike"]();
    }
    ngOnInit() {
        this.id = this._Activatedroute.snapshot.paramMap.get("item.id");
        this.content = this._Activatedroute.snapshot.paramMap.get("item.content");
        this.name = localStorage.getItem('section');
        this.url = localStorage.getItem('url');
        this.getAllPosts(this.id);
        console.log(this.id);
    }
    getAllPosts(id) {
        this.discussionforumService
            .getAllPostDashboardDataByTopicID(id)
            .subscribe((res) => {
            this.postDataList = res;
            console.log(this.postDataList);
        }, (error) => {
        });
    }
    postDownVote(postID) {
        this.objPostLike.id = postID;
        this.objPostLike.downvote = 1;
        this.objPostLike.upvote = 0;
        this.discussionforumService.
            postLikeAndDisLike(this.objPostLike)
            .subscribe((res) => {
            this.respone = res;
            this.getAllPosts(this.id);
        });
    }
    postUpVote(postID) {
        this.objPostLike.id = postID;
        this.objPostLike.upvote = 1;
        this.objPostLike.downvote = 0;
        this.discussionforumService.
            postLikeAndDisLike(this.objPostLike)
            .subscribe((res) => {
            this.respone = res;
            this.getAllPosts(this.id);
        });
    }
    postRate(postID, postRate) {
        this.objPostLike.id = postID;
        this.objPostLike.rate = postRate;
        this.discussionforumService.
            postRate(this.objPostLike)
            .subscribe((res) => {
            this.respone = res;
            this.getAllPosts(this.id);
        });
    }
};
PostDashboardComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__["CreateQuoteService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_core_services_discussion_forum_service__WEBPACK_IMPORTED_MODULE_5__["DiscussionForumService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
PostDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // selector: 'app-create-quote',
        template: __webpack_require__(/*! raw-loader!./post-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/post-dashboard/post-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./post-dashboard.component.css */ "./src/app/modules/post-dashboard/post-dashboard.component.css")]
    })
], PostDashboardComponent);



/***/ }),

/***/ "./src/app/modules/post-dashboard/post-dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/post-dashboard/post-dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: PostDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDashboardModule", function() { return PostDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-dashboard.component */ "./src/app/modules/post-dashboard/post-dashboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    {
        path: '',
        component: _post_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["PostDashboardComponent"]
    }
];
let PostDashboardModule = class PostDashboardModule {
};
PostDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [_post_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["PostDashboardComponent"]]
    })
], PostDashboardModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-post-dashboard-post-dashboard-module-es2015.js.map