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
class TopicPost {
    constructor() {
        this.id = null;
        this.content = null;
    }
}


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
class PostLike {
}


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
class Section {
    constructor() {
        this.name = null;
        this.description = null;
        this.id = null;
    }
}


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
class Topic {
    constructor() {
        this.id = null;
        this.title = null;
        this.content = null;
        this.section = null;
    }
}


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_Models_section_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/section.model */ "./src/app/Models/section.model.ts");
/* harmony import */ var src_app_Models_topic_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/topic.model */ "./src/app/Models/topic.model.ts");
/* harmony import */ var src_app_Models_post_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/post.model */ "./src/app/Models/post.model.ts");
/* harmony import */ var src_app_Models_postlike_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/postlike.model */ "./src/app/Models/postlike.model.ts");








let headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
headers1 = headers1.append('Content-Type', 'application/json');
//headers1 = headers1.append('Authorization', 'application/json');
let DiscussionForumService = class DiscussionForumService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceBaseUrl}`;
        this.sectionObj = new src_app_Models_section_model__WEBPACK_IMPORTED_MODULE_4__["Section"]();
        this.objTopic = new src_app_Models_topic_model__WEBPACK_IMPORTED_MODULE_5__["Topic"]();
        this.objPost = new src_app_Models_post_model__WEBPACK_IMPORTED_MODULE_6__["TopicPost"]();
        this.objPostLike = new src_app_Models_postlike_model__WEBPACK_IMPORTED_MODULE_7__["PostLike"]();
    }
    getAllSections() {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/section/getAllSections");
    }
    getAllTopics() {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/topic/getAllTopics");
    }
    createSectionDetails(sectionObj) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/section/newSection", sectionObj, { headers: headers1, responseType: 'text' });
    }
    createTopicDetails(objTopic) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/topic/newTopic", objTopic, { headers: headers1, responseType: 'text' });
    }
    createPostDetails(objPost) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/topic/" + objPost.id, objPost, { headers: headers1, responseType: 'text' });
    }
    getSectionDashboardDetails() {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/section/getSectionData");
    }
    getAllTopicsBysectionID(sectionID) {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/topic/getAllTopicsBySectionId/" + sectionID);
    }
    getAllPostDashboardDataByTopicID(topicID) {
        return this.httpClient.get("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/post/getAllPostsByTopicId/" + topicID);
    }
    postLikeAndDisLike(objPostLike) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/post/saveLike", objPostLike, { headers: headers1, responseType: 'text' });
    }
    postRate(objPostLike) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7780/post/saveRate", objPostLike, { headers: headers1, responseType: 'text' });
    }
};
DiscussionForumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DiscussionForumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
], DiscussionForumService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map