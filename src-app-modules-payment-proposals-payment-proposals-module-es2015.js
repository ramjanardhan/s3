(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-payment-proposals-payment-proposals-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/payment-proposals/payment-proposal.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/payment-proposals/payment-proposal.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-margin\">\r\n    <div class=\"main-select-box container-fluid custom-box-border\">\r\n      <div class=\"\">\r\n        <label for=\"payment-for\" class=\"light-medium-header main-search-label\"\r\n          >Make payment for</label\r\n        >\r\n        <select id=\"search-type\" class=\"form-control main-search-select\">\r\n          <option value=\"\" disabled selected hidden>Select</option>\r\n          <option value=\"Customer\">Pending Proposals</option>\r\n          <option value=\"saab\">Wallet Balance</option>\r\n          <option value=\"opel\">Proposal</option>\r\n          <option value=\"audi\">Policy</option>\r\n          <option value=\"audi\">Endorsement</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- payment for select box end -->\r\n  \r\n  <div class=\"list-box\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 col-lg-6\">\r\n        <h4 class=\"list-header\">Selected Pending Proposals 4</h4>\r\n      </div>\r\n      <div class=\"col-sm-6 col-lg-6 txt-right\">\r\n        <i class=\"fa fa-plus-circle d-inln-blok\" aria-hidden=\"true\"></i>\r\n        <p class=\"xs-text-regular d-inln-blok\">Add Proposal/Policy</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"search-table-border\"></div>\r\n    <table class=\"table table-search-result\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Proposal/Policy No</th>\r\n          <th scope=\"col\">Customer name</th>\r\n          <th scope=\"col\">Products</th>\r\n          <th scope=\"col\">Premium Amount</th>\r\n          <th scope=\"col\">Status</th>\r\n          <th scope=\"col\">Email ID</th>\r\n          <th scope=\"col\">Status</th>\r\n        </tr>\r\n      </thead>\r\n    </table>\r\n    <div class=\"search-table-border\"></div>\r\n    <div class=\"list-summary-section\">\r\n      <div class=\"xs-text-regular\">Total premium</div>\r\n      <i class=\"fa fa-inr d-inline-block icon-margin\" aria-hidden=\"true\"></i>\r\n      <p class=\"d-inline-block sm-text-bold\">30,000</p>\r\n    </div>\r\n  </div>\r\n  \r\n  <!--payment-options  -->\r\n  <div class=\"custom-box-border box-styles\">\r\n    <div class=\"light-medium-header\">Payment Options</div>\r\n    <div class=\"pay-opt-radio-btn\">\r\n      <div class=\"row radio-row-mrgn\">\r\n        <div class=\"col-2 radio-padding radio-btn-text\">Type</div>\r\n        <div class=\"col-6 radio-padding\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <input type=\"radio\" value=\"Single\" name=\"Type\" />\r\n              <label for=\"\" class=\"radio-label-styles\">Single</label>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <input type=\"radio\" value=\"Multiple\" name=\"Type\" />\r\n              <label for=\"\" class=\"radio-label-styles\">Multiple</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row radio-row-mrgn\">\r\n        <div class=\"col-2 radio-padding radio-btn-text\">Payment by</div>\r\n        <div class=\"col-6 radio-padding\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <input type=\"radio\" value=\"All\" name=\"Payment by\" />\r\n              <label for=\"\" class=\"radio-label-styles\">Intermedary</label>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <input type=\"radio\" value=\"All\" name=\"Payment y\" />\r\n              <label for=\"\" class=\"radio-label-styles\">Customer</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row radio-row-mrgn\">\r\n        <div class=\"col-2 radio-padding radio-btn-text\">Payment mode</div>\r\n        <div class=\"col-6 radio-padding\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <input type=\"radio\" value=\"All\" name=\"veiw transaction\" />\r\n              <label for=\"\" class=\"radio-label-styles\">Virtual Wallet</label>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <input type=\"radio\" value=\"All\" name=\"veiw transaction\" />\r\n              <label for=\"\" class=\"radio-label-styles\">Online</label>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <input type=\"radio\" value=\"All\" name=\"veiw transaction\" />\r\n              <label for=\"\" class=\"radio-label-styles\">Cheque/DD</label>\r\n            </div>\r\n            <div class=\"col-4 radio-padding\">\r\n              <input type=\"radio\" value=\"All\" name=\"veiw transaction\" />\r\n              <label for=\"\" class=\"radio-label-styles\">Cash</label>\r\n            </div>\r\n            <div class=\"col-4 radio-padding\">\r\n              <input type=\"radio\" value=\"All\" name=\"veiw transaction\" />\r\n              <label for=\"\" class=\"radio-label-styles\">Credit Balance</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"search-table-border\"></div>\r\n  \r\n    <div class=\"add-pymt-area\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <div class=\"xs-text-regular\">Current Wallet Balance</div>\r\n  \r\n          <div class=\"sm-text-bold\">\r\n            <i class=\"fa fa-inr d-inline-block icon-margin\" aria-hidden=\"true\"></i\r\n            >1,50,000\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Enter Payment Amount\"\r\n          />\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <div><button class=\"btn wt-button\">Add Payment</button></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- payment summary -->\r\n  <div class=\"custom-box-border box-styles\">\r\n    <div class=\"light-medium-header\">Payment Summary</div>\r\n    <div class=\"search-table-border\"></div>\r\n    <table class=\"table table-search-result\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Payment mode</th>\r\n          <th scope=\"col\">Payment by</th>\r\n          <th scope=\"col\">Amount</th>\r\n          <th scope=\"col\">Actions</th>\r\n        </tr>\r\n      </thead>\r\n    </table>\r\n    <div class=\"search-table-border\"></div>\r\n    <div class=\"pymt-sum-area\">\r\n      <div class=\"text-small-bold\">Payment for Pending Proposals</div>\r\n      <div class=\"row pymt-sum-amt-area\">\r\n        <div class=\"col-3\">\r\n          <div class=\"xs-text-regular\">Total Premium</div>\r\n          <div class=\"sm-text-bold\">1,50,000</div>\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <div class=\"xs-text-regular\">Total Payment</div>\r\n          <div class=\"sm-text-bold\">1,50,000</div>\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <div class=\"xs-text-regular\">Short fall</div>\r\n          <div class=\"sm-text-bold\">1,50,000</div>\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <div class=\"xs-text-regular\">Excess</div>\r\n          <div class=\"sm-text-bold\">1,50,000</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div><div class=\"search-table-border\"></div></div>\r\n    <div class=\"row\">\r\n      <div class=\"col-4\"></div>\r\n      <div class=\"col-4\"></div>\r\n      <div class=\"col-4\">\r\n        <div class=\"add-pymt-area\">\r\n          <button class=\"btn bl-button\">Make Payment</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/modules/payment-proposals/payment-proposal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/payment-proposals/payment-proposal.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentProposalComponent", function() { return PaymentProposalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");




let PaymentProposalComponent = class PaymentProposalComponent {
    constructor(datepipe, createQuoteService) {
        this.datepipe = datepipe;
        this.createQuoteService = createQuoteService;
    }
    ngOnInit() { }
};
PaymentProposalComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__["CreateQuoteService"] }
];
PaymentProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // selector: 'app-create-quote',
        template: __webpack_require__(/*! raw-loader!./payment-proposal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/payment-proposals/payment-proposal.component.html")
        //   styleUrls: ["./payment-proposal.component.css"],
    })
], PaymentProposalComponent);



/***/ }),

/***/ "./src/app/modules/payment-proposals/payment-proposals.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/payment-proposals/payment-proposals.module.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentProposalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentProposalModule", function() { return PaymentProposalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_proposal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-proposal.component */ "./src/app/modules/payment-proposals/payment-proposal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    {
        path: '',
        component: _payment_proposal_component__WEBPACK_IMPORTED_MODULE_3__["PaymentProposalComponent"]
    }
];
let PaymentProposalModule = class PaymentProposalModule {
};
PaymentProposalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [_payment_proposal_component__WEBPACK_IMPORTED_MODULE_3__["PaymentProposalComponent"]]
    })
], PaymentProposalModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-payment-proposals-payment-proposals-module-es2015.js.map