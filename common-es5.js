(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/Models/post.model.ts":
/*!**************************************!*\
  !*** ./src/app/Models/post.model.ts ***!
  \**************************************/
/*! exports provided: TopicPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPost", function() { return TopicPost; });
var TopicPost = /** @class */ (function () {
    function TopicPost() {
        this.id = null;
        this.content = null;
    }
    return TopicPost;
}());



/***/ }),

/***/ "./src/app/Models/postlike.model.ts":
/*!******************************************!*\
  !*** ./src/app/Models/postlike.model.ts ***!
  \******************************************/
/*! exports provided: PostLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLike", function() { return PostLike; });
var PostLike = /** @class */ (function () {
    function PostLike() {
    }
    return PostLike;
}());



/***/ }),

/***/ "./src/app/Models/section.model.ts":
/*!*****************************************!*\
  !*** ./src/app/Models/section.model.ts ***!
  \*****************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
var Section = /** @class */ (function () {
    function Section() {
        this.name = null;
        this.description = null;
        this.id = null;
    }
    return Section;
}());



/***/ }),

/***/ "./src/app/Models/topic.model.ts":
/*!***************************************!*\
  !*** ./src/app/Models/topic.model.ts ***!
  \***************************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
var Topic = /** @class */ (function () {
    function Topic() {
        this.id = null;
        this.title = null;
        this.content = null;
        this.section = null;
    }
    return Topic;
}());



/***/ }),

/***/ "./src/app/core/services/discussion-forum.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/discussion-forum.service.ts ***!
  \***********************************************************/
/*! exports provided: DiscussionForumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionForumService", function() { return DiscussionForumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_Models_section_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/section.model */ "./src/app/Models/section.model.ts");
/* harmony import */ var src_app_Models_topic_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/topic.model */ "./src/app/Models/topic.model.ts");
/* harmony import */ var src_app_Models_post_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/post.model */ "./src/app/Models/post.model.ts");
/* harmony import */ var src_app_Models_postlike_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/postlike.model */ "./src/app/Models/postlike.model.ts");








var headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
headers1 = headers1.append('Content-Type', 'application/json');
//headers1 = headers1.append('Authorization', 'application/json');
var DiscussionForumService = /** @class */ (function () {
    function DiscussionForumService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceBaseUrl;
        this.sectionObj = new src_app_Models_section_model__WEBPACK_IMPORTED_MODULE_4__["Section"]();
        this.objTopic = new src_app_Models_topic_model__WEBPACK_IMPORTED_MODULE_5__["Topic"]();
        this.objPost = new src_app_Models_post_model__WEBPACK_IMPORTED_MODULE_6__["TopicPost"]();
        this.objPostLike = new src_app_Models_postlike_model__WEBPACK_IMPORTED_MODULE_7__["PostLike"]();
    }
    DiscussionForumService.prototype.getAllSections = function () {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/section/getAllSections");
    };
    DiscussionForumService.prototype.getAllTopics = function () {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/topic/getAllTopics");
    };
    DiscussionForumService.prototype.createSectionDetails = function (sectionObj) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/section/newSection", sectionObj, { headers: headers1, responseType: 'text' });
    };
    DiscussionForumService.prototype.createTopicDetails = function (objTopic) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/topic/newTopic", objTopic, { headers: headers1, responseType: 'text' });
    };
    DiscussionForumService.prototype.createPostDetails = function (objPost) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/topic/" + objPost.id, objPost, { headers: headers1, responseType: 'text' });
    };
    DiscussionForumService.prototype.getSectionDashboardDetails = function () {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/section/getSectionData");
    };
    DiscussionForumService.prototype.getAllTopicsBysectionID = function (sectionID) {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/topic/getAllTopicsBySectionId/" + sectionID);
    };
    DiscussionForumService.prototype.getAllPostDashboardDataByTopicID = function (topicID) {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/post/getAllPostsByTopicId/" + topicID);
    };
    DiscussionForumService.prototype.postLikeAndDisLike = function (objPostLike) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/post/saveLike", objPostLike, { headers: headers1, responseType: 'text' });
    };
    DiscussionForumService.prototype.postRate = function (objPostLike) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/post/saveRate", objPostLike, { headers: headers1, responseType: 'text' });
    };
    DiscussionForumService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DiscussionForumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
    ], DiscussionForumService);
    return DiscussionForumService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map