(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-payments-payments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/payments/payments.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/payments/payments.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"form-box\">\r\n    <form>\r\n      <select name=\"cars\" #loadMoney=\"ngModel\" [(ngModel)]=\"loadmoneyto\" id=\"load-money-to1\"\r\n        class=\"form-control custom-form-control\">\r\n        <option value=\"\" disabled selected hidden>Load money to</option>\r\n        <option value=\"/wallet\">Virtual Wallet</option>\r\n        <!-- <option value=\"/home/paymentpending\">Bussiness Transactions</option> -->\r\n      </select>\r\n    </form>\r\n    <br>\r\n    <form *ngIf=\"loadmoneyto =='/home/paymentpending'\">\r\n      <div class=\"\">\r\n        <p>Selected Proposals {{selectedPayments.length}}</p>\r\n      </div>\r\n      <div *ngIf=\"selectedPayments.length >= 0\" class=\"search-result-box\">\r\n        <table class=\"table table-search-result\">\r\n          <thead>\r\n            <tr>\r\n              <th>Proposal/Policy No</th>\r\n              <th>Customer name</th>\r\n              <th>Products</th>\r\n              <th>Premium Amount</th>\r\n              <th>Status</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let paymentItem of selectedPayments\">\r\n              <td>{{ paymentItem.refnumber }}</td>\r\n              <td>{{ paymentItem.customerName }}</td>\r\n              <td>{{paymentItem.productName}}</td>\r\n              <td>{{ paymentItem.totalPremium }}</td>\r\n              <td></td>\r\n              <td><i class=\"fa fa-trash-o\" (click)=\"deleteSelectedItem(paymentItem)\"></i></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"search-table-border\"></div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"\">\r\n    <div class=\"form-box payment-form-box\">\r\n      <form [formGroup]=\"loadMoneyToWalletForm\">\r\n        <div class=\"payment-type-row\">\r\n          <div class=\"payment-type\">Payment Type</div>\r\n          <div class=\"payment-type-option\">\r\n            <input type=\"radio\" value=\"single\" name=\"payment-type\" (click)=\"resetPaymentType()\" checked=\"checked\" />\r\n            <label for=\"\" class=\"\">Single</label>\r\n          </div>\r\n          <!-- <div class=\"payment-type-option\">\r\n            <input type=\"radio\" value=\"multiple\" name=\"payment-type\" (click)=\"setPaymentType()\" />\r\n            <label for=\"\" class=\"\">Multiple</label>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"isPaymentTypeSingle\">\r\n          <div class=\"col-md-6 col-lg-6 col-6\">\r\n            <select (change)=\"onChangePaymentTypeSingle()\" formControlName=\"paymentModeForSingle\" id=\"payment-mode\"\r\n              class=\"form-control custom-form-control\">\r\n              <option value=\"\" disabled selected hidden>Payment mode</option>\r\n              <!-- <option value=\"Virtual Wallet\">Virtual Wallet</option> -->\r\n              <option value=\"online\">Online</option>\r\n              <!-- <option value=\"cheque\">Cheque</option> -->\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-6 col-6\">\r\n            <input type=\"text\" (keyup)=\"displaySumAmount()\" placeholder=\"Amount\"\r\n              class=\"form-control custom-form-control\" formControlName=\"amountForSingle\"\r\n              (keypress)=\"isNumber($event)\" />\r\n            <span class=\"validationMsg\" *ngIf=\"loadMoneyToWalletForm.value.amount ==null && isAmountEmpty\">\r\n              Please enter amount</span>\r\n            <span class=\"validationMsg\" *ngIf=\"totalPremium != sumOfPayments && sumOfPayments != 0 && onClickmakePayment && loadmoneyto =='/home/paymentpending' \">\r\n              {{ totalPremium > sumOfPayments ?\r\n                'There is a shortfall. Please enter amount same as total amount to be paid.'\r\n              : 'There is an Excess. Please enter amount same as total amount to be paid.'}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!isPaymentTypeSingle\">\r\n          <div class=\"col-md-4 col-lg-4 col-4\">\r\n            <select (change)=\"onChangePaymentTypeMultiple()\" formControlName=\"paymentModeForMultiple\" id=\"payment-mode\"\r\n              class=\"form-control custom-form-control\">\r\n              <option value=\"\" disabled selected hidden>Payment mode</option>\r\n              <!-- <option value=\"Virtual Wallet\">Virtual Wallet</option> -->\r\n              <option value=\"online\">Online</option>\r\n              <!-- <option value=\"cheque\">Cheque</option> -->\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-4 col-lg-4 col-4\">\r\n            <input type=\"text\" placeholder=\"Amount\" class=\"form-control custom-form-control\"\r\n              formControlName=\"amountFormultiple\" (keypress)=\"isNumber($event)\" />\r\n            <span class=\"validationMsg\" *ngIf=\"loadMoneyToWalletForm.value.amount == null  && isAmountEmpty\">\r\n              Please enter amount</span>\r\n            <span class=\"validationMsg\" *ngIf=\"totalPremium != sumOfPayments && sumOfPayments != 0 && onClickmakePayment && loadmoneyto =='/home/paymentpending' \">\r\n              {{ totalPremium > sumOfPayments ?\r\n                 'There is a shortfall. Please enter amount same as total amount to be paid.'\r\n               : 'There is an Excess. Please enter amount same as total amount to be paid.'}}</span></div>\r\n\r\n          <div class=\"col-md-4 col-lg-4 col-4 add-payment-area\">\r\n            <button class=\"btn btn-white\" (click)=\"addPayment()\">\r\n              Add Payment\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <span class=\"validationMsg\" *ngIf=\"isDuplicatePaymentModeSelected\">\r\n          Multiple online or wallet payments are not allowed.</span>\r\n        <span class=\"validationMsg\" *ngIf=\"!isPaymentTypeSingle && isPaymentModeForMultiple\">\r\n          Please select payment mode as Online</span>\r\n        <span class=\"validationMsg\" *ngIf=\"isPaymentTypeSingle && isPaymentModeForSingle\">\r\n          Please select payment mode as Online</span>\r\n      </form>\r\n      <div *ngIf=\"!isPaymentTypeSingle && multiplePaymentsList.length > 0\" class=\"payment-list-table\">\r\n        <div class=\"custom-table\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <th scope=\"col\" style=\"width: 15%;\">\r\n                Payment mode\r\n              </th>\r\n              <th scope=\"col\" style=\"width: 10%;\">\r\n                Payment by\r\n              </th>\r\n              <th scope=\"col\" style=\"width: 5%; text-align: right;\">\r\n                Amount\r\n              </th>\r\n              <th scope=\"col\" style=\"text-align: right;\">\r\n                Actions\r\n              </th>\r\n            </tr>\r\n            <tr *ngFor=\"let payment of multiplePaymentsList; let i = index\" [ngClass]=\"\r\n                i % 2 == 0 ? 'table-row-bg-white' : 'table-row-bg-blue '\r\n              \">\r\n              <td>Online</td>\r\n              <td>Intermedairy</td>\r\n              <td>{{ payment.amountFormultiple }}</td>\r\n              <td class=\"text-right\">\r\n                <i class=\"fa fa-pencil icon-margin-right\" aria-hidden=\"true\" (click)=\"editPayment(i)\"></i><i\r\n                  class=\"fa fa-trash-o icon-margin-right\" aria-hidden=\"true\" (click)=\"deletePayment(i)\"></i>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div *ngIf=\"loadmoneyto != '/home/paymentpending'\" class=\"row payment-action-section\">\r\n          <div class=\"col-md-6 col-lg-6 col-6\">\r\n            <div class=\"wallet-icon-area\">\r\n              <i class=\"fas fa-wallet icon-pyamt-wallet\" aria-hidden=\"true\"></i>\r\n            </div>\r\n\r\n            <div class=\"wallet-current-balance\" [ngClass]=\"'border-right'\">\r\n              <div>\r\n                <i class=\"\" aria-hidden=\"true\"></i><span class=\"font-md-bold\">{{walletResponse | currency :\"₹ \"}}</span>\r\n              </div>\r\n              <div class=\"font-sm-regular\">Current Wallet Balance</div>\r\n            </div>\r\n            <div class=\"selected-payment-amount\">\r\n              <div>\r\n                <i class=\"fa fa-inr icon-rupee-md\" aria-hidden=\"true\"></i><span\r\n                  class=\"font-md-bold\">{{ sumOfPayments }}</span>\r\n              </div>\r\n              <div class=\"font-sm-regular\">Selected Payment</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-6 col-6 make-payment-btn-area\">\r\n            <button type=\"button\" (click)=\"makePayment()\" class=\"btn btn-blue w-60\">Make Payment</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"loadmoneyto == '/home/paymentpending'\" class=\"row payment-action-section\">\r\n          <div class=\"col-md-7 col-lg-7 col-7\">\r\n            <div\r\n              *ngIf=\"loadMoneyToWalletForm.value.paymentModeForSingle == 'Virtual Wallet' || loadMoneyToWalletForm.value.paymentModeForMultiple == 'Virtual Wallet'\"\r\n              class=\"wallet-icon-area\">\r\n              <i class=\"fas fa-wallet icon-pyamt-wallet\" aria-hidden=\"true\"></i>\r\n            </div>\r\n\r\n            <div\r\n              *ngIf=\"loadMoneyToWalletForm.value.paymentModeForSingle == 'Virtual Wallet' || loadMoneyToWalletForm.value.paymentModeForMultiple == 'Virtual Wallet'\"\r\n              class=\"wallet-current-balance\" [ngClass]=\"'border-right'\">\r\n              <div>\r\n                <i class=\"\" aria-hidden=\"true\"></i><span class=\"font-md-bold\">{{walletResponse | currency :\"₹ \"}}</span>\r\n              </div>\r\n              <div class=\"font-sm-regular\">Current Wallet Balance</div>\r\n            </div>\r\n            <div class=\"selected-payment-amount\">\r\n              <div>\r\n                <i class=\"fa fa-inr icon-rupee-md\" aria-hidden=\"true\"></i><span\r\n                  class=\"font-md-bold\">{{ totalPremium }}</span>\r\n              </div>\r\n              <div class=\"font-sm-regular\">Total Premium</div>\r\n            </div>\r\n            <div class=\"selected-payment-amount\">\r\n              <div>\r\n                <i class=\"fa fa-inr icon-rupee-md\" aria-hidden=\"true\"></i><span\r\n                  class=\"font-md-bold\">{{ sumOfPayments }}</span>\r\n              </div>\r\n              <div class=\"font-sm-regular\">Selected Payment</div>\r\n            </div>\r\n            <div class=\"selected-payment-amount\">\r\n              <div>\r\n                <i class=\"fa fa-inr icon-rupee-md\" aria-hidden=\"true\"></i><span\r\n                  class=\"font-md-bold\">{{totalPremium >= sumOfPayments && loadmoneyto =='/home/paymentpending' ? totalPremium-sumOfPayments : sumOfPayments- totalPremium}}</span>\r\n              </div>\r\n              <div class=\"font-sm-regular\">{{totalPremium >= sumOfPayments  && loadmoneyto =='/home/paymentpending' ? 'Short Fall' : 'Excess'}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-5 col-lg-5 col-5 make-payment-btn-area\">\r\n            <button type=\"button\" (click)=\"makePayment()\" class=\"btn btn-blue w-60\">Make Payment</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/services/payment-pending.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/payment-pending.service.ts ***!
  \**********************************************************/
/*! exports provided: PaymentPendingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPendingService", function() { return PaymentPendingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let PaymentPendingService = class PaymentPendingService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceBaseUrl}`;
    }
    getPaymentResult(CustomerId) {
        return this.httpClient.get(this.baseUrl + "api/proposal/dashboardResult/" + CustomerId + "/Payment Pending");
    }
};
PaymentPendingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PaymentPendingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
], PaymentPendingService);



/***/ }),

/***/ "./src/app/modules/payments/payments.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/payments/payments.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".payment-type {\r\n  display: inline-block;\r\n  margin-right: 28px;\r\n  font-size: 16px;\r\n  color: #707070;\r\n  font-weight: 300;\r\n}\r\n.payment-type-option {\r\n  display: inline-block !important;\r\n  margin-right: 28px;\r\n}\r\n.payment-type-option input {\r\n  height: 18px !important;\r\n  width: 18px !important;\r\n}\r\n.validationMsg{\r\n  color: red;\r\n  font-weight: bold;\r\n}\r\n.payment-type-option label {\r\n  font-size: 16px;\r\n  font-weight: 500 !important;\r\n  color: #343741 !important;\r\n  margin: 0px 8px;\r\n}\r\n.form-box {\r\n  background: #ffffff;\r\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n  padding: 32px 42px;\r\n  margin: 24px 0px;\r\n}\r\n.payment-form-box {\r\n  padding-bottom: 0px;\r\n}\r\n.custom-form-control {\r\n  height: 50px;\r\n  background: #ffffff;\r\n  border: 1px solid #919191;\r\n  border-radius: 3px;\r\n  color: #000000;\r\n}\r\n.payment-type-row {\r\n  margin-top: 12px;\r\n  margin-bottom: 36px;\r\n}\r\n.payment-action-section {\r\n  padding: 28px 42px;\r\n  background-color: #727782;\r\n  margin: 42px -42px 0px;\r\n}\r\n.icon-pyamt-wallet {\r\n  font-size: 48px;\r\n  color: #ffffff;\r\n}\r\n.wallet-current-balance {\r\n  display: inline-block;\r\n  color: #ffffff;\r\n  padding-right: 32px;\r\n}\r\n.border-right {\r\n  border-right: 1px solid #ffffff;\r\n}\r\n.wallet-icon-area {\r\n  margin: 0px 16px 0px 0px;\r\n  display: inline-block;\r\n}\r\n.add-payment-area button {\r\n  font-size: 16px;\r\n  width: 93%;\r\n}\r\n.add-payment-area {\r\n  text-align: right;\r\n}\r\n.btn-blue {\r\n  background: #727782;\r\n    border: 1px solid white;\r\n    box-shadow: 0 3px 0 0 white;\r\n    border-radius: 3px;\r\n    color: white;\r\n    font-weight: 700;\r\n    height: 50px;\r\n}\r\n.w-60 {\r\n  width: 60% !important;\r\n}\r\n.make-payment-btn-area {\r\n  padding-right: 0px;\r\n  text-align: right;\r\n}\r\n.make-payment-btn-area button {\r\n  font-size: 16px;\r\n}\r\n.font-md-bold {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n.icon-rupee-md {\r\n  font-size: 20px;\r\n  font-weight: 300 !important;\r\n  margin-right: 4px;\r\n}\r\n.font-sm-regular {\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n.btn-white {\r\n  background: #ffffff;\r\n  border: 1px solid #1a1446;\r\n  box-shadow: 0 3px 0 0 #c0bfc0;\r\n  border-radius: 3px;\r\n  height: 50px;\r\n  color: #1a1446;\r\n  font-weight: 700;\r\n}\r\n.btn {\r\n  width: 100%;\r\n}\r\n.payment-list-table {\r\n  margin-top: 42px;\r\n}\r\n.custom-table {\r\n  border: 1px solid #c0bfc0 !important;\r\n  border-radius: 4px !important;\r\n}\r\n.payment-list-table .table {\r\n  margin-bottom: 16px;\r\n}\r\n.payment-list-table table th {\r\n  border: none;\r\n  background-color: #f5f5f5;\r\n}\r\n.payment-list-table table tr td {\r\n  border: none;\r\n}\r\n.payment-list-table table tr {\r\n  height: 50px;\r\n}\r\n.table-row-bg-blue {\r\n  background-color: #f2fcfc;\r\n}\r\n.table-row-bg-white {\r\n  background-color: #ffffff;\r\n}\r\n.selected-payment-amount {\r\n  color: #ffffff;\r\n  display: inline-block;\r\n  margin-left: 24px;\r\n}\r\n.icon-margin-right {\r\n  margin-right: 16px;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  .form-box{\r\n    padding: 24px 12px;\r\n  }\r\n\r\n  .payment-action-section{\r\n    padding: 24px 12px;\r\n    margin: 12px -12px 0px;\r\n  }\r\n\r\n  .wallet-icon-area{\r\n    margin-right: 12px;\r\n  }\r\n\r\n  .font-md-bold{\r\n    font-size: 18px;\r\n  }\r\n  .font-sm-regular{\r\n    font-size: 12px;\r\n  }\r\n  .selected-payment-amount{\r\n    margin-left: 62px;\r\n    margin-top: 12px;\r\n  }\r\n  .make-payment-btn-area{\r\n    padding: 12px 0px;\r\n  }\r\n  .w-60{\r\n    width: 100% !important;\r\n  }\r\n  .form-margin-mb{\r\n    margin: 24px 0px;\r\n  }\r\n\r\n  .add-payment-area button{\r\n    width: 100%;\r\n  }\r\n\r\n  .payment-type-option{\r\n    display: block !important;\r\n  }\r\n  .payment-form-box{\r\n    padding-bottom: 0px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0lBQ2pCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LXR5cGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLnBheW1lbnQtdHlwZS1vcHRpb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMjhweDtcclxufVxyXG5cclxuLnBheW1lbnQtdHlwZS1vcHRpb24gaW5wdXQge1xyXG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnZhbGlkYXRpb25Nc2d7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBheW1lbnQtdHlwZS1vcHRpb24gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMzNDM3NDEgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCA4cHg7XHJcbn1cclxuLmZvcm0tYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgcGFkZGluZzogMzJweCA0MnB4O1xyXG4gIG1hcmdpbjogMjRweCAwcHg7XHJcbn1cclxuLnBheW1lbnQtZm9ybS1ib3gge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTE5MTkxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnBheW1lbnQtdHlwZS1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxufVxyXG5cclxuLnBheW1lbnQtYWN0aW9uLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDI4cHggNDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI3NzgyO1xyXG4gIG1hcmdpbjogNDJweCAtNDJweCAwcHg7XHJcbn1cclxuLmljb24tcHlhbXQtd2FsbGV0IHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi53YWxsZXQtY3VycmVudC1iYWxhbmNlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZy1yaWdodDogMzJweDtcclxufVxyXG5cclxuLmJvcmRlci1yaWdodCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG5cclxuLndhbGxldC1pY29uLWFyZWEge1xyXG4gIG1hcmdpbjogMHB4IDE2cHggMHB4IDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmFkZC1wYXltZW50LWFyZWEgYnV0dG9uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDkzJTtcclxufVxyXG4uYWRkLXBheW1lbnQtYXJlYSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmJ0bi1ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiAjNzI3NzgyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwIDAgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi53LTYwIHtcclxuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1ha2UtcGF5bWVudC1idG4tYXJlYSB7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubWFrZS1wYXltZW50LWJ0bi1hcmVhIGJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZm9udC1tZC1ib2xkIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmljb24tcnVwZWUtbWQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5mb250LXNtLXJlZ3VsYXIge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYnRuLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYTE0NDY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMCAwICNjMGJmYzA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBjb2xvcjogIzFhMTQ0NjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucGF5bWVudC1saXN0LXRhYmxlIHtcclxuICBtYXJnaW4tdG9wOiA0MnB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXRhYmxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzBiZmMwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBheW1lbnQtbGlzdC10YWJsZSAudGFibGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWxpc3QtdGFibGUgdGFibGUgdGgge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4ucGF5bWVudC1saXN0LXRhYmxlIHRhYmxlIHRyIHRkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5wYXltZW50LWxpc3QtdGFibGUgdGFibGUgdHIge1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnRhYmxlLXJvdy1iZy1ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmY2ZjO1xyXG59XHJcbi50YWJsZS1yb3ctYmctd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnNlbGVjdGVkLXBheW1lbnQtYW1vdW50IHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi5pY29uLW1hcmdpbi1yaWdodCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmZvcm0tYm94e1xyXG4gICAgcGFkZGluZzogMjRweCAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnBheW1lbnQtYWN0aW9uLXNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiAyNHB4IDEycHg7XHJcbiAgICBtYXJnaW46IDEycHggLTEycHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLndhbGxldC1pY29uLWFyZWF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuZm9udC1tZC1ib2xke1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuZm9udC1zbS1yZWd1bGFye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuc2VsZWN0ZWQtcGF5bWVudC1hbW91bnR7XHJcbiAgICBtYXJnaW4tbGVmdDogNjJweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG4gIC5tYWtlLXBheW1lbnQtYnRuLWFyZWF7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICB9XHJcbiAgLnctNjB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZm9ybS1tYXJnaW4tbWJ7XHJcbiAgICBtYXJnaW46IDI0cHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFkZC1wYXltZW50LWFyZWEgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucGF5bWVudC10eXBlLW9wdGlvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYXltZW50LWZvcm0tYm94e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/payments/payments.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/payments/payments.component.ts ***!
  \********************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_payment_pending_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/payment-pending.service */ "./src/app/core/services/payment-pending.service.ts");







let PaymentsComponent = class PaymentsComponent {
    constructor(commonservice, location, router, route, createQuoteService) {
        this.commonservice = commonservice;
        this.location = location;
        this.router = router;
        this.route = route;
        this.createQuoteService = createQuoteService;
        this.totalPremium = 0;
        this.shortFallPremium = 0;
        this.selectedPremium = 0;
        this.isDuplicatePaymentModeSelected = false;
        this.isPaymentTypeSingle = true;
        this.paymentAmount = 1234;
        this.editPaymentRecord = false;
        this.sumOfPayments = 0;
        this.loadMoneyToWalletForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            amountForSingle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            amountFormultiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            paymentModeForSingle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            paymentModeForMultiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.isPaymentModeForMultiple = false;
        this.isPaymentModeForSingle = false;
        this.isAmountEmpty = false;
        this.inputForPayment = {
            paymentDetails: {
                transactionId: "94204CE9030820162402E1DK",
                amount: 0,
                productInfo: "testing",
                firstName: "testing",
                emailAddress: "swargam@gmail.com",
                phoneNumber: "8143283098"
            }
        };
        this.loadmoneyto = "";
        this.multiplePaymentsList = [];
        this.onClickmakePayment = false;
        this.getVirtualWallet();
    }
    onChangeLoadMoney() {
        this.multiplePaymentsList = [];
    }
    getPayementCalDetails() {
        this.selectedPayments.forEach(item => {
            this.totalPremium = item.totalPremium + this.totalPremium;
        });
        if (this.isPaymentTypeSingle) {
            if (this.loadMoneyToWalletForm.value.amountForSingle != null) {
                this.selectedPremium = parseFloat(this.loadMoneyToWalletForm.value.amountForSingle);
            }
            else {
                this.selectedPremium = 0;
            }
        }
        if (!this.isPaymentTypeSingle) {
            if (this.loadMoneyToWalletForm.value.amountFormultiple != null) {
                this.selectedPremium = parseFloat(this.loadMoneyToWalletForm.value.amountFormultiple);
            }
            else {
                this.selectedPremium = 0;
            }
        }
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.routerFrom == "/home/paymentpending") {
                this.loadmoneyto = params.routerFrom;
                this.selectedPayments = Object.assign([], JSON.parse(localStorage.getItem('selectedPayments')));
                this.getPayementCalDetails();
            }
            else if (params.routerFrom == "/wallet") {
                this.selectedPayments = [];
                this.loadmoneyto = params.routerFrom;
            }
            else {
                this.selectedPayments = [];
                this.loadmoneyto = "";
            }
        });
    }
    deleteSelectedItem(paymentItem) {
        const index = this.selectedPayments.indexOf(paymentItem);
        if (index !== -1) {
            this.selectedPayments.splice(index, 1);
        }
        localStorage.setItem('selectedPayments', JSON.stringify(this.selectedPayments));
        this.totalPremium = 0;
        this.getPayementCalDetails();
    }
    validation() {
        if (this.isPaymentTypeSingle) {
            if (this.loadMoneyToWalletForm.value.paymentModeForSingle == 'online') {
                if (this.loadMoneyToWalletForm.value.amountForSingle != null) {
                    this.inputForPayment.paymentDetails.amount = parseFloat(this.loadMoneyToWalletForm.value.amountForSingle);
                    this.isPaymentModeForSingle = false;
                    this.isAmountEmpty = false;
                }
                else {
                    this.isAmountEmpty = true;
                }
            }
            else {
                this.isPaymentModeForSingle = true;
            }
        }
        if (this.multiplePaymentsList.length == 0) {
            if (!this.isPaymentTypeSingle) {
                if (this.loadMoneyToWalletForm.value.paymentModeForMultiple == 'online') {
                    if (this.loadMoneyToWalletForm.value.amountFormultiple != null) {
                        this.isPaymentModeForMultiple = false;
                        this.isAmountEmpty = false;
                        this.totalPremium = 0;
                        this.getPayementCalDetails();
                    }
                    else {
                        this.isAmountEmpty = true;
                    }
                }
                else {
                    this.isPaymentModeForMultiple = true;
                }
            }
        }
    }
    makePayment() {
        this.payment();
        // this.onClickmakePayment = true;
        // if (this.loadmoneyto == '/wallet') {
        //   this.payment();
        // }
        // else if (this.loadmoneyto == '/home/paymentpending') {
        //   if (this.totalPremium == this.sumOfPayments) {
        //   this.payment();
        //   }
        // }
    }
    payment() {
        var myWindow = window.open("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7776", "_self");
    }
    payment1() {
        this.validation();
        if (this.isPaymentTypeSingle) {
            if (!this.isPaymentModeForSingle &&
                !this.isAmountEmpty) {
                // this.createQuoteService.getTransactionId().subscribe(
                //   (res) => {
                //     this.inputForPayment.paymentDetails.transactionId = res.toString();
                this.inputForPayment.paymentDetails.transactionId = (Math.random() * 10000000000000000).toString();
                this.createQuoteService.makePayment(this.inputForPayment).subscribe((res) => {
                    this.onClickmakePayment = false;
                    console.log(res);
                    localStorage.removeItem("selectedPayments");
                    var myWindow = window.open("", "_self");
                    myWindow.document.write(res);
                }, (error) => {
                    console.log(error);
                });
                //   },
                //   (error: HttpErrorResponse) => {
                //   }
                // );
            }
        }
        else {
            if (!this.isPaymentModeForMultiple &&
                !this.isAmountEmpty) {
                this.inputForPayment.paymentDetails.transactionId = (Math.random() * 10000000000000000).toString();
                this.createQuoteService.makePayment(this.inputForPayment).subscribe((res) => {
                    this.onClickmakePayment = false;
                    var myWindow = window.open("", "_self");
                    myWindow.document.write(res);
                }, (error) => {
                    console.log(error);
                });
            }
        }
    }
    setPaymentType() {
        this.isPaymentTypeSingle = false;
        this.loadMoneyToWalletForm.value.amount = null;
        this.loadMoneyToWalletForm.patchValue({
            paymentModeForMultiple: '',
            paymentModeForSingle: ''
        });
        this.multiplePaymentsList = [];
        this.sumOfPayments = 0;
    }
    getVirtualWallet() {
        //this.LedgerAccountCode = 1060000310;
        this.userID = 1;
        this.createQuoteService.getVirtualWallet(this.userID).subscribe((res) => {
            this.walletResponse = res;
            this.walletResponse = this.walletResponse.closingBalance;
        }, (error) => {
            // alert(error.error.text);
        });
    }
    displaySumAmount() {
        if (this.loadMoneyToWalletForm.value.amountForSingle == "") {
            this.loadMoneyToWalletForm.value.amountForSingle = 0;
        }
        this.sumOfPayments = parseFloat(this.loadMoneyToWalletForm.value.amountForSingle);
        this.selectedPremium = this.totalPremium - this.sumOfPayments;
    }
    resetPaymentType() {
        this.loadMoneyToWalletForm.patchValue({
            amountFormultiple: 0,
            amountForSingle: 0
        });
        this.isPaymentTypeSingle = true;
        this.loadMoneyToWalletForm.value.amount = null;
        this.loadMoneyToWalletForm.patchValue({
            paymentModeForMultiple: '',
            paymentModeForSingle: ''
        });
        this.multiplePaymentsList = [];
        this.sumOfPayments = 0;
    }
    onChangePaymentTypeSingle() {
        this.loadMoneyToWalletForm.patchValue({
            amountFormultiple: null,
            amountForSingle: null
        });
        if (this.loadMoneyToWalletForm.value.paymentModeForSingle == 'online') {
            this.isPaymentModeForSingle = false;
        }
        else {
            this.isPaymentModeForSingle = true;
        }
        this.sumOfPayments = 0;
    }
    onChangePaymentTypeMultiple() {
        this.loadMoneyToWalletForm.patchValue({
            amountFormultiple: null,
            amountForSingle: null
        });
        this.isDuplicatePaymentModeSelected = false;
        if (this.loadMoneyToWalletForm.value.paymentModeForMultiple == 'online') {
            this.isPaymentModeForMultiple = false;
        }
        else {
            this.isPaymentModeForMultiple = true;
        }
        this.sumOfPayments = 0;
    }
    addPayment() {
        this.validation();
        if (!this.isPaymentModeForMultiple && !this.isAmountEmpty) {
            if (!this.multiplePaymentsList.some((item) => item.paymentMode == this.loadMoneyToWalletForm.value.paymentMode)) {
                this.isDuplicatePaymentModeSelected = false;
                this.loadMoneyToWalletForm.patchValue({
                    amountFormultiple: parseFloat(this.loadMoneyToWalletForm.value.amountFormultiple).toFixed(2),
                });
                if (this.editPaymentRecord == true) {
                    this.multiplePaymentsList[this.editRecordIndex] = this.loadMoneyToWalletForm.value;
                    this.editPaymentRecord = false;
                }
                else {
                    this.isPaymentModeForMultiple = false;
                    this.multiplePaymentsList.push(this.loadMoneyToWalletForm.value);
                }
                this.calulatePaymentListSum();
                this.loadMoneyToWalletForm.reset();
                this.loadMoneyToWalletForm.patchValue({
                    paymentModeForMultiple: '',
                });
            }
            else {
                this.isDuplicatePaymentModeSelected = true;
            }
        }
    }
    deletePayment(i) {
        this.multiplePaymentsList.splice(i, 1);
        this.calulatePaymentListSum();
    }
    editPayment(i) {
        this.loadMoneyToWalletForm.setValue(this.multiplePaymentsList[i]);
        this.editPaymentRecord = true;
        this.editRecordIndex = i;
    }
    calulatePaymentListSum() {
        this.sumOfPayments = 0;
        for (let payment of this.multiplePaymentsList) {
            this.sumOfPayments =
                parseFloat(this.sumOfPayments.toString()) + parseFloat(payment.amountFormultiple);
            this.inputForPayment.paymentDetails.amount = this.sumOfPayments;
            this.selectedPremium = this.totalPremium - this.sumOfPayments;
        }
    }
    isNumber(event) {
        const pattern = /[0-9.]/;
        const inputChar = event.key;
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
        this.isAmountEmpty = false;
    }
};
PaymentsComponent.ctorParameters = () => [
    { type: src_app_core_services_payment_pending_service__WEBPACK_IMPORTED_MODULE_6__["PaymentPendingService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_5__["CreateQuoteService"] }
];
PaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-payments",
        template: __webpack_require__(/*! raw-loader!./payments.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/payments/payments.component.html"),
        styles: [__webpack_require__(/*! ./payments.component.css */ "./src/app/modules/payments/payments.component.css")]
    })
], PaymentsComponent);



/***/ }),

/***/ "./src/app/modules/payments/payments.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/payments/payments.module.ts ***!
  \*****************************************************/
/*! exports provided: PaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsModule", function() { return PaymentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments.component */ "./src/app/modules/payments/payments.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    {
        path: '',
        component: _payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]
    },
    {
        path: ':mode/:unmappedstatus/:mihpayid/:PG_TYPE/:txind/:status',
        component: _payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]
    },
    {
        path: ':routerFrom',
        component: _payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]
    }
];
let PaymentsModule = class PaymentsModule {
};
PaymentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]]
    })
], PaymentsModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-payments-payments-module-es2015.js.map