(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-search-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/search/search-component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/search/search-component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-box-margin container-box\">\r\n  <div class=\"heading-mid searchFor\">Search For</div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 quote-fields search-main-select-mb\">\r\n      <select [(ngModel)]=\"selectedType\" class=\"form-control field-class searchSelect\">\r\n        <option>Select</option>\r\n        <option>Customer</option>\r\n        <option>Quote</option>\r\n        <option>Proposal</option>\r\n        <option>Policy</option>\r\n        <option>Endrosement</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"selectedType=='Customer'\">\r\n    <app-searchcustomer></app-searchcustomer>\r\n  </div>\r\n  <div *ngIf=\"selectedType=='Quote'\">\r\n    <app-searchquickquote></app-searchquickquote>\r\n  </div>\r\n  <div *ngIf=\"selectedType=='Proposal'\">\r\n    <app-searchproposal></app-searchproposal>\r\n  </div>\r\n  <div *ngIf=\"selectedType=='Policy'\">\r\n    <app-searchpolicy></app-searchpolicy>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/search/searchcustomer/searchcustomer.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/search/searchcustomer/searchcustomer.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" data-role=\"collapsible\" data-collapsed-icon=\"carat-d\" data-expanded-icon=\"carat-u\">\r\n  <div class=\"row col-lg-12 col-md-12 col-sm-12 searchFilter\">\r\n    Filter\r\n    <a type=\"button\" aria-expanded=\"false\" class=\"bTset\" data-toggle=\"collapse\" data-target=\"#filterId\">\r\n      <i class=\"fas fa-chevron-up\"></i>\r\n      <i class=\"fas fa-chevron-down\"></i>\r\n    </a>\r\n  </div>\r\n  <br />\r\n  <div id=\"filterId\" class=\"row col-lg-12 col-md-12 col-xs-12\">\r\n    <div class=\"row searchRowLine\">\r\n      <div class=\"col-md-12\">\r\n        <div *ngIf=\"isValidated\" class=\"row error\">\r\n          <div calss=\"error-text\"><span class=\"search-icon\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i></span>\r\n            <span> At least one search criteria is mandatory</span></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"searchRowLine\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n        <span class=\"has-float-label\">\r\n          <select class=\"form-control custom-form-control\" (change)=\"onLobChange($event, lob)\" id=\"lob\" name=\"lob\"\r\n            [(ngModel)]=\"lineOfBusiness\" #lob=\"ngModel\">\r\n            <option value=\"\" selected hidden>Select</option>\r\n            <option [value]=\"lob.code\" *ngFor=\"let lob of lobList\">{{\r\n                lob.name\r\n              }}</option>\r\n\r\n          </select>\r\n          <label for=\"lob\">LOB</label>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n        <span class=\"has-float-label\">\r\n          <select class=\"form-control custom-form-control\" name=\"product\" id=\"product\" #product=\"ngModel\"\r\n            [(ngModel)]=\"products\">\r\n            <option value=\"\" selected hidden>Select</option>\r\n            <option *ngFor=\"let lobProduct of lobProductList\">{{\r\n                lobProduct.name\r\n              }}</option>\r\n          </select>\r\n          <label for=\"product\">Product</label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"searchRowLine\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n        <span class=\"has-float-label\">\r\n          <input type=\"text\" class=\"form-control quote-textbox\" id=\"firstname\" placeholder=\"First Name\"\r\n            [(ngModel)]=\"searchParams1.firstname\" name=\"firstname\" #firstname=\"ngModel\" />\r\n          <label for=\"firstname\">First Name</label>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n        <span class=\"has-float-label\">\r\n          <input type=\"text\" class=\"form-control quote-textbox\" id=\"lastname\" placeholder=\"Last Name\" \r\n          [(ngModel)]=\"searchParams1.lastname\" name=\"lastname\" #lastname=\"ngModel\"/>\r\n          <label for=\"lastname\">Last Name</label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"searchRowLine\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n        <span class=\"has-float-label\">\r\n          <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"mobile_no\" placeholder=\"Mobile Number\"\r\n          [(ngModel)]=\"searchParams1.mobile_no\"  name=\"mobile_no\" #mobile_no=\"ngModel\"/>\r\n          <label for=\"mobile_no\">Mobile Number</label>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n        <span class=\"has-float-label\">\r\n          <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"email_id\" placeholder=\"email_id Id\" \r\n          [(ngModel)]=\"searchParams1.email_id\"  name=\"email_id\" #email_id=\"ngModel\"/>\r\n          <label for=\"email_id\">Email Id</label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"searchRowLine\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n        <span class=\"has-float-label\">\r\n          <input type=\"text\" class=\"form-control quote-textbox\" id=\"customer_id\" placeholder=\"Customer Id\"\r\n            [(ngModel)]=\"searchParams1.customer_id\" name=\"customer_id\" #customer_id=\"ngModel\" />\r\n          <label for=\"customer_id\">Customer Id</label>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n        <span class=\"has-float-label\">\r\n          <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"policy_no\" placeholder=\"policy_no\"\r\n          [(ngModel)]=\"searchParams1.policy_no\" name=\"policy_no\" #policy_no=\"ngModel\" />\r\n          <label for=\"policy_no\">Policy No</label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row searchRowLine\">\r\n      <div class=\"modal-footer\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\"></div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 searchBtn\">\r\n          <div class=\"col-md-6 col-lg-6\">\r\n            <button type=\"button\" (click)=\"clear()\" class=\" searchClearButton quote-search-button\">\r\n              Clear\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-6\">\r\n            <button type=\"button\" (click)=\"validations()\" class=\"searchSearchButton quote-search-button\">\r\n              Search\r\n            </button></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br />\r\n<div *ngIf=\"customerDetails!=null\" class=\"container-box customerData-search-filter\">\r\n  <div class=\"table-count-filter\">Found {{customerDetails.length}} Results</div>\r\n  <table class=\"table1\">\r\n    <thead>\r\n      <tr>\r\n        <th>Customer ID</th>\r\n        <th>Type</th>\r\n        <th>First Name</th>\r\n        <th>Last Name</th>\r\n        <th>Mobile</th>\r\n        <th>email_id ID</th>\r\n        <th>Products</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of customerDetails\" class=\"info\">\r\n        <td>{{ item.customer_id }}</td>\r\n        <td>{{ item.type }}</td>\r\n        <td>{{ item.firstname }}</td>\r\n        <td>{{ item.lastname }}</td>\r\n        <td>{{ item.mobile_no }}</td>\r\n        <td>{{ item.email_id_id }}</td>\r\n        <td>{{ item.product_name }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/search/searchpolicy/searchpolicy.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/search/searchpolicy/searchpolicy.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" data-role=\"collapsible\" data-collapsed-icon=\"carat-d\" data-expanded-icon=\"carat-u\">\r\n    <div class=\"row col-lg-12 col-md-12 col-sm-12 searchFilter\">\r\n        Filter\r\n        <a type=\"button\" aria-expanded=\"false\" class=\"bTset\" data-toggle=\"collapse\" data-target=\"#filterId\">\r\n            <i class=\"fas fa-chevron-up\"></i>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n        </a>\r\n    </div>\r\n    <span class=\"section-line\"></span>\r\n    <div id=\"searchPolicyForm\" class=\"row col-lg-12 col-md-12 col-xs-12\">\r\n        <div class=\"row searchRowLine\">\r\n            <div class=\"col-md-12\">\r\n                <div *ngIf=\"isFormSubmitInValid\" class=\"row error\">\r\n                    <div calss=\"error-text\"><span class=\"search-icon\"><i class=\"fa fa-info-circle\"\r\n                                aria-hidden=\"true\"></i></span>\r\n                        <span> At least one search criteria is mandatory</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <select class=\"form-control custom-form-control\" (change)=\"onLobChange($event, lob)\" id=\"lob\"\r\n                        name=\"lob\" [(ngModel)]=\"searchPolicyParams.lob\" #lob=\"ngModel\">\r\n                        <option value=\"\" selected hidden>Select</option>\r\n                        <option [value]=\"lob.code\" *ngFor=\"let lob of lobList\">{{lob.name}}</option>\r\n                    </select>\r\n                    <label for=\"lob\">LOB*</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <select class=\"form-control custom-form-control\" id=\"product\" name=\"product\" #product=\"ngModel\"\r\n                        [(ngModel)]=\"searchPolicyParams.product\">\r\n                        <option value=\"\" selected hidden>Select</option>\r\n                        <option [value]=\"lobProduct.code\" *ngFor=\"let lobProduct of lobProductList\">{{lobProduct.name}}\r\n                        </option>\r\n                    </select>\r\n                    <label for=\"product\">Product*</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control quote-textbox\" id=\"policy_no\" placeholder=\"Policy Number\"\r\n                        name=\"policy_no\" #policy_no=\"ngModel\" [(ngModel)]=\"searchParams1.policy_no\" />\r\n                    <label for=\"policy_no\">policy Number*</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <!-- <input\r\n        type=\"text\"\r\n        class=\"form-control quote-textbox\"\r\n        id=\"LastName\"\r\n        placeholder=\"Last Name\"\r\n        [(ngModel)]=\"searchParams.strLVCustomerName\"\r\n        name=\"LastName\"\r\n        #LastName=\"ngModel\"\r\n      /> -->\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control quote-textbox\" id=\"firstname\" placeholder=\"Customer Name\"\r\n                        name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"searchParams1.firstname\" />\r\n                    <label for=\"firstname\">Customer Name*</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\" searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"MobileNumber\"\r\n                        placeholder=\"Mobile Number\" />\r\n                    <label for=\"MobileNumber\">Mobile Number</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"Email\"\r\n                        placeholder=\"Email Id\" />\r\n                    <label for=\"Email\">Email Id</label>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <!-- <div class=\" searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control quote-textbox\" id=\"PremiumRangeFrom\"\r\n                        placeholder=\"Premium Range From\" name=\"premiumRangeFrom\" #premiumRangeFrom=\"ngModel\"\r\n                        [(ngModel)]=\"searchPolicyParams.premiumFrom\" />\r\n                    <label for=\"PremiumRangeFrom\">Premium Range From</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"PremiumRangeTo\"\r\n                        placeholder=\"Premium Range To\" name=\"premiumRangeTo\" #premiumRangeTo=\"ngModel\"\r\n                        [(ngModel)]=\"searchPolicyParams.premiumTo\" />\r\n                    <label for=\"PremiumRangeTo\">Premium Range To</label>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <!-- <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"searchRowLine\">\r\n                <div class=\"col-md-2 col-lg-2 viewlabel\">View by</div>\r\n                <div class=\"col-md-2 col-lg-2\">\r\n                    <input type=\"radio\" [value]=\"true\" [(ngModel)]=\"riskLocationIncludesBasement\"\r\n                        #riskIncludesbasement=\"ngModel\" name=\"payment-type\" />\r\n                    <label for=\"\" class=\"searchRadioLabel\">Creation Date</label>\r\n                </div>\r\n                <div class=\"col-md-2 col-lg-2 form-control-margin\">\r\n                    <input type=\"radio\" [value]=\"false\" [(ngModel)]=\"riskLocationIncludesBasement\"\r\n                        #riskIncludesbasement1=\"ngModel\" (change)=\"resetCustomSelection()\" name=\"payment-type1\" />\r\n                    <label for=\"\" class=\"searchRadioLabel\">Risk Start date</label>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"riskLocationIncludesBasement == false\" class=\" searchRowLine\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3 col-lg-3 quote-fields\">\r\n                        <div class=\"has-float-label\">\r\n                            <input type=\"date\" [(ngModel)]=\"searchPolicyParams.risk_start_frm\" id=\"riskStartFromDate\"\r\n                                name=\"riskStartFromDate\" #riskStartFromDate=\"ngModel\" class=\"form-control form-style\"\r\n                                placeholder=\"From\" />\r\n                            <label for=\"riskStartFromDate\">From</label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3 col-lg-3 quote-fields\">\r\n                        <div class=\"has-float-label\">\r\n                            <input type=\"date\" [(ngModel)]=\"searchPolicyParams.risk_start_to\" name=\"riskStartToDate\"\r\n                                #riskStartToDate=\"ngModel\" class=\"form-control form-style\" placeholder=\" To\" />\r\n                            <label for=\"riskStartFromTo\">To</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <!-- <div *ngIf=\"riskLocationIncludesBasement\" class=\" searchRowLine\">\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <select [(ngModel)]=\"veiwPolicy.viewBy\" name=\"veiwPolicySearchBy\" id=\"veiwPolicySearchBy\"\r\n                        #veiwPolicySearchBy=\"ngModel\" class=\"form-control custom-form-control\"\r\n                        (change)=\"onViewByChange($event)\">\r\n                        <option value=\"\" selected disabled hidden>Agreement Type</option>\r\n                        <option selected value=\"All\">All</option>\r\n                        <option value=\"Last 7days\">Last 7 days</option>\r\n                        <option value=\"Last 30days\">Last 30 days</option>\r\n                        <option value=\"Last 60days\">Last 60 days</option>\r\n                        <option value=\"Custom\">Custom</option>\r\n                    </select>\r\n                    <label for=\"veiwPolicySearchBy\">Date</label>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"veiwPolicy.viewBy=='Custom'\">\r\n                <div class=\"col-md-3 col-lg-3 quote-fields\">\r\n                    <div class=\"has-float-label\">\r\n                        <input type=\"date\" [(ngModel)]=\"searchPolicyParams.pol_start_frm\" id=\"customFromDate\"\r\n                            name=\"customFromDate\" #customFromDate=\"ngModel\" class=\"form-control form-style\"\r\n                            placeholder=\"From\" />\r\n                        <label for=\"customFromDate\">From</label>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3 col-lg-3 quote-fields\">\r\n                    <div class=\"has-float-label\">\r\n                        <input type=\"date\" [(ngModel)]=\"searchPolicyParams.pol_start_to\" name=\"customToDate\"\r\n                            #customToDate=\"ngModel\" class=\"form-control form-style\" placeholder=\" To\" />\r\n                        <label for=\"customToDate\">To</label>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\"></div>\r\n        </div> -->\r\n        <!-- <div class=\"col-md-12 col-lg-12\"></div> -->\r\n        <div class=\"searchRowLine\">\r\n            <div class=\"modal-footer\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 quote-fields\"></div>\r\n                <!-- <div *ngClass=\" (riskLocationIncludesBasement == false) ? 'col-lg-6 col-md-6 col-sm-12 searchBtn' : 'col-md-12 col-lg-12 searchBtn'\"> -->\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 searchBtn\">\r\n                    <div class=\"col-md-6 col-lg-6\">\r\n                        <button type=\"button\" (click)=\"clear()\" class=\" searchClearButton quote-search-button\">\r\n                            Clear\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-lg-6\">\r\n                        <button type=\"button\" (click)=\"validations()\" class=\"searchSearchButton quote-search-button\">\r\n                            Search\r\n                        </button></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"PolicySearchResults!=null && !isFormSubmitInValid\" class=\"container-box customerData-search-filter\">\r\n    <div class=\"table-count-filter\">Found {{PolicySearchResults.length}} Results</div>\r\n    <table class=\"table1\">\r\n        <thead>\r\n            <tr>\r\n                <th>Policy no</th>\r\n                <th>Policy Name</th>\r\n                <th>LOB</th>\r\n                <th>Product</th>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Quote No</th>\r\n                <th>State Date</th>\r\n                <th>End Date</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let policySearchResult of PolicySearchResults\" class=\"info\">\r\n                <td>{{ policySearchResult.policy_no }}</td>\r\n                <td>{{ policySearchResult.policy_name }}</td>\r\n                <td>{{ policySearchResult.lob_name }}</td>\r\n                <td>{{ policySearchResult.product_name }}</td>\r\n                <td>{{ policySearchResult.firstname }}</td>\r\n                <td>{{ policySearchResult.lastname }}</td>\r\n                <td>{{ policySearchResult.quote_no }}</td>\r\n                <td>{{ policySearchResult.policy_start_date }}</td>\r\n                <td>{{ policySearchResult.policy_end_date }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/search/searchproposal/searchproposal.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/search/searchproposal/searchproposal.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" data-role=\"collapsible\" data-collapsed-icon=\"carat-d\" data-expanded-icon=\"carat-u\">\r\n    <div class=\"row col-lg-12 col-md-12 col-sm-12 searchFilter\">\r\n        Filter\r\n        <a type=\"button\" aria-expanded=\"false\" class=\"bTset\" data-toggle=\"collapse\" data-target=\"#filterId\">\r\n            <i class=\"fas fa-chevron-up\"></i>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n        </a>\r\n    </div>\r\n    <span class=\"section-line\"></span>\r\n    <div id=\"searchProposalForm\" class=\"row col-lg-12 col-md-12 col-xs-12\">\r\n        <div class=\"row searchRowLine\">\r\n            <div class=\"col-md-12\">\r\n                <div *ngIf=\"isFormSubmitInValid\" class=\"row error\">\r\n                    <div calss=\"error-text\"><span class=\"search-icon\"><i class=\"fa fa-info-circle\"\r\n                                aria-hidden=\"true\"></i></span>\r\n                        <span> At least one search criteria is mandatory</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <select class=\"form-control custom-form-control\" (change)=\"onLobChange($event, lob)\" id=\"lob\"\r\n                        name=\"lob\" [(ngModel)]=\"searchProposalParams.lob\" #lob=\"ngModel\">\r\n                        <option value=\"\" selected hidden>Select</option>\r\n                        <option [value]=\"lob.code\" *ngFor=\"let lob of lobList\">{{lob.name}}</option>\r\n                    </select>\r\n                    <label for=\"lob\">LOB*</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <select class=\"form-control custom-form-control\" name=\"product\" #product=\"ngModel\"\r\n                        [(ngModel)]=\"searchProposalParams.product\">\r\n                        <option value=\"\" selected hidden>Select</option>\r\n                        <option [value]=\"lobProduct.code\" *ngFor=\"let lobProduct of lobProductList\">{{\r\n                        lobProduct.name\r\n                      }}</option>\r\n                    </select>\r\n                    <label for=\"product\">Product*</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control quote-textbox\" id=\"proposal_no\"\r\n                        placeholder=\"Proposal Number\" name=\"proposal_no\" #proposal_no=\"ngModel\"\r\n                        [(ngModel)]=\"searchParams1.proposal_no\" />\r\n                    <label for=\"proposal_no\">Proposal Number*</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <!-- <input\r\n        type=\"text\"\r\n        class=\"form-control quote-textbox\"\r\n        id=\"LastName\"\r\n        placeholder=\"Last Name\"\r\n        [(ngModel)]=\"searchParams.strLVCustomerName\"\r\n        name=\"LastName\"\r\n        #LastName=\"ngModel\"\r\n      /> -->\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control quote-textbox\" id=\"firstname\" placeholder=\"Customer Name\"\r\n                        name=\"firstname\" #customerName=\"ngModel\" [(ngModel)]=\"searchParams1.firstname\" />\r\n                    <label for=\"firstname\">Customer Name*</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\" searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"MobileNumber\"\r\n                        placeholder=\"Mobile Number\" />\r\n                    <label for=\"MobileNumber\">Mobile Number</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"Email\"\r\n                        placeholder=\"Email Id\" />\r\n                    <label for=\"Email\">Email Id</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\" searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control quote-textbox\" id=\"premiumRangeFrom\"\r\n                        placeholder=\"Premium Range From\" name=\"premiumRangeFrom\" #premiumRangeFrom=\"ngModel\"\r\n                        [(ngModel)]=\"searchProposalParams.premiumFrom\" />\r\n                    <label for=\"PremiumRangeFrom\">Premium Range From</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"PremiumRangeTo\"\r\n                        placeholder=\"Premium Range To\" name=\"premiumRangeTo\" #premiumRangeFrom=\"ngModel\"\r\n                        [(ngModel)]=\"searchProposalParams.premiumTo\" />\r\n                    <label for=\"PremiumRangeTo\">Premium Range To</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <div class=\"searchRowLine\">\r\n                <div class=\"col-md-2 col-lg-2 viewlabel\">View by</div>\r\n                <div class=\"col-md-2 col-lg-2\">\r\n                    <input type=\"radio\" [value]=\"true\" checked [(ngModel)]=\"riskLocationIncludesBasement\"\r\n                        #riskIncludesbasement=\"ngModel\" name=\"payment-type\" />\r\n                    <label for=\"\" class=\"searchRadioLabel\">Creation Date</label>\r\n                </div>\r\n                <div class=\"col-md-2 col-lg-2 form-control-margin\">\r\n                    <input type=\"radio\" [value]=\"false\" [(ngModel)]=\"riskLocationIncludesBasement\"\r\n                        #riskIncludesbasement1=\"ngModel\" (change)=\"resetCustomSelection()\" name=\"payment-type1\" />\r\n                    <label for=\"\" class=\"searchRadioLabel\">Risk Start date</label>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"riskLocationIncludesBasement == false\" class=\" searchRowLine\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3 col-lg-3 quote-fields\">\r\n                        <div class=\"has-float-label\">\r\n                            <input type=\"date\" [(ngModel)]=\"searchProposalParams.risk_start_frm\" id=\"riskStartFromDate\"\r\n                                name=\"riskStartFromDate\" #riskStartFromDate=\"ngModel\" class=\"form-control form-style\"\r\n                                placeholder=\"From\" />\r\n                            <label for=\"riskStartFromDate\">From</label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3 col-lg-3 quote-fields\">\r\n                        <div class=\"has-float-label\">\r\n                            <input type=\"date\" [(ngModel)]=\"searchProposalParams.risk_start_to\" id=\"riskStartFromTo\"\r\n                                name=\"riskStartToDate\" #riskStartToDate=\"ngModel\" class=\"form-control form-style\"\r\n                                placeholder=\" To\" />\r\n                            <label for=\"riskStartFromTo\">To</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <div *ngIf=\"riskLocationIncludesBasement\" class=\" searchRowLine\">\r\n            <!-- <div class=\"col-md-6 col-lg-6 col-xs-12 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                    <select [(ngModel)]=\"veiwProposal.viewBy\" name=\"veiwProposalSearchBy\"\r\n                        #veiwProposalSearchBy=\"ngModel\" class=\"form-control custom-form-control\"\r\n                        (change)=\"onViewByChange($event)\">\r\n                        <option value=\"\" selected disabled hidden>Agreement Type</option>\r\n                        <option selected value=\"All\">All</option>\r\n                        <option value=\"Last 7days\">Last 7 days</option>\r\n                        <option value=\"Last 30days\">Last 30 days</option>\r\n                        <option value=\"Last 60days\">Last 60 days</option>\r\n                        <option value=\"Custom\">Custom</option>\r\n                    </select>\r\n                    <label for=\"veiwPolicySearchBy\">Date</label>\r\n                </div>\r\n\r\n            </div>\r\n            <div *ngIf=\"veiwProposal.viewBy=='Custom'\">\r\n                <div class=\"col-md-3 col-lg-3 quote-fields\">\r\n                    <div class=\"has-float-label\">\r\n                        <input type=\"date\" [(ngModel)]=\"searchProposalParams.pol_start_frm\" name=\"customFromDate\"\r\n                            #customFromDate=\"ngModel\" class=\"form-control form-style\" placeholder=\"From\" />\r\n                        <label for=\"customFromDate\">From</label>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3 col-lg-3 quote-fields\">\r\n                    <div class=\"has-float-label\">\r\n                        <input type=\"date\" [(ngModel)]=\"searchProposalParams.pol_start_to\" name=\"customToDate\"\r\n                            #customToDate=\"ngModel\" class=\"form-control form-style\" placeholder=\" To\" />\r\n                        <label for=\"customToDate\">To</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\"></div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-12\"></div> -->\r\n            <div class=\"searchRowLine\">\r\n                <div class=\"modal-footer\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\"></div>\r\n                    <!-- <div *ngIf=\"walletStatementParams.viewBy!='Custom'\" class=\"col-lg-6 col-md-6 col-sm-12 quote-fields\"></div> -->\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12 searchBtn\">\r\n                        <div class=\"col-md-6 col-lg-6\">\r\n                            <button type=\"button\" (click)=\"clear()\" class=\" searchClearButton quote-search-button\">\r\n                                Clear\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6\">\r\n                            <button type=\"button\" (click)=\"validations()\"\r\n                                class=\"searchSearchButton quote-search-button\">\r\n                                Search\r\n                            </button></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"ProposalSearchResults!=null && !isFormSubmitInValid\" class=\"container-box customerData-search-filter\">\r\n        <div class=\"table-count-filter\">Found {{ProposalSearchResults.length}} Results</div>\r\n        <table class=\"table1\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Proposal no</th>\r\n                    <th>LOB</th>\r\n                    <th>Product</th>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Premium</th>\r\n                    <th>Date Created</th>\r\n                    <th>Status</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let proposalSearchResult of ProposalSearchResults\" class=\"info\">\r\n                    <td>{{ proposalSearchResult.proposal_no }}</td>\r\n                    <td>{{ proposalSearchResult.lob_name }}</td>\r\n                    <td>{{ proposalSearchResult.product_name }}</td>\r\n                    <td>{{ proposalSearchResult.firstname }}</td>\r\n                    <td>{{ proposalSearchResult.lastname }}</td>\r\n                    <td>{{ proposalSearchResult.premium_amount }}</td>\r\n                    <td>{{ proposalSearchResult.proposal_startdate }}</td>\r\n                    <td>{{ proposalSearchResult.proposal_status }}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/search/searchquickquote/searchquickquote.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/search/searchquickquote/searchquickquote.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" data-role=\"collapsible\" data-collapsed-icon=\"carat-d\" data-expanded-icon=\"carat-u\">\r\n    <div class=\"row col-lg-12 col-md-12 col-sm-12 searchFilter\">\r\n        Filter\r\n        <a type=\"button\" aria-expanded=\"false\" class=\"bTset\" data-toggle=\"collapse\" data-target=\"#filterId\">\r\n            <i class=\"fas fa-chevron-up\"></i>\r\n            <i class=\"fas fa-chevron-down\"></i>\r\n        </a>\r\n    </div>\r\n    <span class=\"section-line\"></span>\r\n    <div id=\"filterId\" class=\"row col-lg-12 col-md-12 col-xs-12\">\r\n        <div class=\"row searchRowLine\">\r\n            <div class=\"col-md-12\">\r\n                <div *ngIf=\"isFormSubmitInValid\" class=\"row error\">\r\n                    <div calss=\"error-text\"><span class=\"search-icon\"><i class=\"fa fa-info-circle\"\r\n                                aria-hidden=\"true\"></i></span>\r\n                        <span> At least one search criteria is mandatory</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                <select class=\"form-control custom-form-control\" (change)=\"onLobChange($event, lob)\" id=\"lob\" name=\"lob\"\r\n                    [(ngModel)]=\"searchQuoteParams.lob\" #lob=\"ngModel\">\r\n                    <option value=\"\" selected hidden>LOB</option>\r\n                    <option [value]=\"lob.code\" *ngFor=\"let lob of lobList\">{{lob.name}}</option>\r\n                </select>\r\n                <label for=\"lob\">LOB*</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                <select class=\"form-control custom-form-control\" name=\"product\" id=\"product\" #product=\"ngModel\"\r\n                    [(ngModel)]=\"searchQuoteParams.product\">\r\n                    <option value=\"\" selected hidden>Product</option>\r\n                    <option [value]=\"lobProduct.code\" *ngFor=\"let lobProduct of lobProductList\">{{\r\n                        lobProduct.name\r\n                      }}</option>\r\n                </select>\r\n                <label for=\"product\">Product*</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                <input type=\"text\" class=\"form-control quote-textbox\" id=\"quote_no\" placeholder=\"Quote Number\"\r\n                    name=\"quote_no\" #quote_no=\"ngModel\" [(ngModel)]=\"searchParams1.quote_no\" />\r\n                    <label for=\"quote_no\">Quote Number*</label>\r\n                </div>\r\n                </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <!-- <input\r\n        type=\"text\"\r\n        class=\"form-control quote-textbox\"\r\n        id=\"LastName\"\r\n        placeholder=\"Last Name\"\r\n        [(ngModel)]=\"searchParams.strLVCustomerName\"\r\n        name=\"LastName\"\r\n        #LastName=\"ngModel\"\r\n      /> -->\r\n      <div class=\"has-float-label\">\r\n                <input type=\"text\" class=\"form-control quote-textbox\" id=\"firstname\" placeholder=\"Customer Name\"\r\n                    name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"searchParams1.firstname\" />\r\n                    <label for=\"firstname\">Customer Name*</label>\r\n                </div>\r\n                </div>\r\n        </div>\r\n        <!-- <div class=\" searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"MobileNumber\" placeholder=\"Mobile Number\" />\r\n                <label for=\"MobileNumber\">Mobile Number</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                <input type=\"text\" class=\"form-control field-class quote-textbox\" id=\"Email\" placeholder=\"Email Id\" />\r\n                <label for=\"Email\">Email Id</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\" searchRowLine\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                <input type=\"text\" class=\"form-control quote-textbox\" id=\"premiumRangeFrom\"\r\n                    placeholder=\"Premium Range From\" name=\"premiumRangeFrom\" #premiumRangeFrom=\"ngModel\"\r\n                    [(ngModel)]=\"searchQuoteParams.premiumFrom\" />\r\n                    <label for=\"PremiumRangeFrom\">Premium Range From</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                <input type=\"text\" class=\"form-control field-class quote-textbox\" placeholder=\"Premium Range To\"\r\n                    name=\"premiumRangeTo\" #premiumRangeFrom=\"ngModel\" [(ngModel)]=\"searchQuoteParams.premiumTo\" />\r\n                    <label for=\"PremiumRangeTo\">Premium Range To</label>\r\n                </div>\r\n                </div>\r\n        </div> -->\r\n        <!-- <div class=\"searchRowLine\">\r\n            <div class=\"  col-md-6 col-lg-6 col-xs-12 quote-fields\">\r\n                <div class=\"has-float-label\">\r\n                <select [(ngModel)]=\"veiwQuote.viewBy\" name=\"veiwtransaction\" #veiwtransaction=\"ngModel\"\r\n                    class=\"form-control custom-form-control\" (change)=\"onViewByChange($event)\">\r\n                    <option value=\"\" selected disabled hidden>Agreement Type</option>\r\n                    <option selected value=\"All\">All</option>\r\n                    <option value=\"Last 7days\">Last 7 days</option>\r\n                    <option value=\"Last 30days\">Last 30 days</option>\r\n                    <option value=\"Last 60days\">Last 60 days</option>\r\n                    <option value=\"Custom\">Custom</option>\r\n                </select>\r\n                <label for=\"veiwPolicySearchBy\">Date</label>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"veiwQuote.viewBy=='Custom'\">\r\n                <div class=\"col-md-3 col-lg-3 quote-fields\">\r\n                    <div class=\"has-float-label\">\r\n                    <input type=\"date\" [(ngModel)]=\"searchQuoteParams.pol_start_frm\" name=\"customFromDate\"\r\n                        #customFromDate=\"ngModel\" class=\"form-control form-style\" placeholder=\"From\" />\r\n                        <label for=\"customFromDate\">From</label>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3 col-lg-3 quote-fields\">\r\n                    <div class=\"has-float-label\">\r\n                    <input type=\"date\" [(ngModel)]=\"searchQuoteParams.pol_start_to\" name=\"customToDate\"\r\n                        #customToDate=\"ngModel\" class=\"form-control form-style\" placeholder=\" To\" />\r\n                        <label for=\"customToDate\">To</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"col-md-12 col-lg-12\"></div>\r\n        <div class=\" searchRowLine\">\r\n            <div class=\"modal-footer\">\r\n                <div class=\"col-lg-6 col-md-6\"></div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 searchBtn\">\r\n                    <div class=\"col-md-6 col-lg-6\">\r\n                        <button type=\"button\" (click)=\"clear()\" class=\" searchClearButton quote-search-button\">\r\n                            Clear\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-lg-6 col-sm-12\">\r\n                        <button type=\"button\" (click)=\"validations()\" class=\"searchSearchButton quote-search-button\">\r\n                            Search\r\n                        </button></div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- {{searchQuoteParams.lob}}<br>\r\n        {{searchQuoteParams.product}}<br>\r\n        {{searchQuoteParams.customerName}}<br>\r\n        {{searchQuoteParams.documentNo}}<br>\r\n        {{searchQuoteParams.premiumFrom}}<br>\r\n        {{searchQuoteParams.premiumTo}}<br>\r\n        {{searchQuoteParams.viewBy}} -->\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"QuoteSearchResults!=null && !isFormSubmitInValid\" class=\"container-box customerData-search-filter\">\r\n    <div class=\"table-count-filter\">Found {{QuoteSearchResults.length}} Results</div>\r\n    <table class=\"table1\">\r\n        <thead>\r\n            <tr>\r\n                <th>Quote no</th>\r\n                <th>LOB</th>\r\n                <th>Product</th>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Status</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let quoteSearchResult of QuoteSearchResults\" class=\"info\">\r\n                <td>{{ quoteSearchResult.quote_no }}</td>\r\n                <td>{{ quoteSearchResult.lob_name }}</td>\r\n                <td>{{ quoteSearchResult.product_name }}</td>\r\n                <td>{{ quoteSearchResult.firstname }}</td>\r\n                <td>{{ quoteSearchResult.lastname }}</td>\r\n                <td>{{ quoteSearchResult.quote_status }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/form-error-info/form-error-info.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/form-error-info/form-error-info.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-info-horz-bar\">\r\n  <div class=\"d-inline-block info-icon\">\r\n    <i class=\"fa fa-exclamation\" aria-hidden=\"true\"></i>\r\n  </div>\r\n  <div class=\"d-inline-block\">\r\n    <span class=\"info-message\">At least one search criteria is mandatory</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/side-nav-bar/side-nav-bar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/side-nav-bar/side-nav-bar.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  [ngClass]=\"sideNavOpen ? 'side-nav-bar  ' : 'side-nav-bar side-nav-bar-close'\"\r\n>\r\n  <div class=\"icon-move-right\" (click)=\"toggleSideNav()\">\r\n    <i\r\n      [ngClass]=\"\r\n        sideNavOpen ? 'fa fa-angle-right rotate' : ' fa fa-angle-right '\r\n      \"\r\n      aria-hidden=\"true\"\r\n      style=\"font-size: 28px;\"\r\n    ></i>\r\n  </div>\r\n  <div [ngClass]=\"sideNavOpen ? 'pt-2 user-name ' : 'hide'\">\r\n    <h3>Hello</h3>\r\n  </div>\r\n\r\n  <div [ngClass]=\"sideNavOpen ? 'mb-0' : 'hide'\">\r\n    <i class=\"fa fa-star-o mr-2\" aria-hidden=\"true\"></i\r\n    ><span>Ramesh kannan</span>\r\n  </div>\r\n  <div></div>\r\n\r\n  <a routerLink=\"/wallet\" routerLinkActive=\"active\" class=\"side-nav-link\">\r\n    <div class=\"my-2\">\r\n      <p [ngClass]=\"sideNavOpen ? 'mb-0' : 'hide'\">\r\n        <small>Your Wallet Balance1</small>\r\n      </p>\r\n      <i class=\"fas fa-wallet\"></i\r\n      ><span [ngClass]=\"sideNavOpen ? 'mb-0' : 'hide'\"\r\n        ><i class=\"fa fa-inr ml-3 mr-1\" aria-hidden=\"true\"></i\r\n        ><small>1,50,000</small></span\r\n      >\r\n    </div>\r\n  </a>\r\n\r\n  <div class=\"my-2\">\r\n    <p [ngClass]=\"sideNavOpen ? 'mb-0' : 'hide'\">\r\n      <small>Your Credit Balance</small>\r\n    </p>\r\n    <i class=\"fa fa-credit-card-alt\" aria-hidden=\"true\"></i\r\n    ><span [ngClass]=\"sideNavOpen ? 'mb-0' : 'hide'\"\r\n      ><i class=\"fa fa-inr ml-3 mr-1\" aria-hidden=\"true\"></i\r\n      ><small>1,50,000</small></span\r\n    >\r\n  </div>\r\n  <div class=\"my-3\">\r\n    <i\r\n      class=\"fa fa-plus mr-2\"\r\n      style=\"font-size: 20px; font-weight: lighter;\"\r\n      aria-hidden=\"true\"\r\n    ></i\r\n    ><span [ngClass]=\"sideNavOpen ? 'mb-0' : 'hide'\">New</span>\r\n    <div [ngClass]=\"sideNavOpen ? 'mb-0' : 'hide'\">Quote</div>\r\n  </div>\r\n  <div class=\"\" style=\"margin-top: 80px;\">\r\n    <div class=\"py-2\">\r\n      <i class=\"fa fa-cog mr-2\" aria-hidden=\"true\"></i>\r\n      <span [ngClass]=\"sideNavOpen ? '' : 'hide'\">Customize</span>\r\n    </div>\r\n    <div class=\"py-2\">\r\n      <i class=\"fa fa-user mr-2\" aria-hidden=\"true\"></i>\r\n      <span [ngClass]=\"sideNavOpen ? '' : 'hide'\">My Profile</span>\r\n    </div>\r\n    <div class=\"py-2\">\r\n      <i class=\"fa fa-question-circle mr-2\" aria-hidden=\"true\"></i>\r\n      <span [ngClass]=\"sideNavOpen ? '' : 'hide'\">Help</span>\r\n    </div>\r\n\r\n    <div class=\"py-2\">\r\n      <i class=\"fa fa-sign-out mr-2\" aria-hidden=\"true\"></i>\r\n      <span [ngClass]=\"sideNavOpen ? '' : 'hide'\">Logout</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/icons/search-icon/search-icon.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/icons/search-icon/search-icon.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"16px\" height=\"20px\" viewBox=\"0 0 16 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <!-- Generator: Sketch 61.2 (89653) - https://sketch.com -->\r\n    <title>Search</title>\r\n    <desc>Created with Sketch.</desc>\r\n    <g id=\"New-quote\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"REQ014B_2\" transform=\"translate(-970.000000, -688.000000)\" fill=\"#1A1446\" fill-rule=\"nonzero\">\r\n            <g id=\"Group-15\" transform=\"translate(970.000000, 688.000000)\">\r\n                <g id=\"Search\">\r\n                    <path\r\n                        d=\"M11.7992615,1.91272727 C13.2515692,3.27151515 14.0435692,5.07333333 14.0281846,6.98666667 C14.0140308,8.72787879 13.3223385,10.4048485 12.1149538,11.6539394 L12.1254154,11.6654545 L11.9672615,11.8030303 C11.9100308,11.8575758 11.8528,11.9121212 11.7937231,11.9654545 L11.7869538,11.9575758 L11.4312615,12.2648485 L11.1340308,11.930303 C10.9691077,11.7442424 10.9844923,11.4636364 11.1684923,11.2963636 C12.3863385,10.1927273 13.0921846,8.61939394 13.1051077,6.98 C13.1180308,5.32060606 12.4288,3.75575758 11.1629538,2.57212121 C9.72726154,1.22909091 7.64849231,0.690909091 5.73772308,1.16909091 C3.8128,1.65090909 2.28849231,2.92969697 1.55433846,4.67818182 C0.831261538,6.40121212 0.975876923,8.38181818 1.94203077,9.97575758 C3.39126154,12.3672727 6.38264615,13.4454545 9.05833846,12.5369697 C9.2608,12.4684848 9.48541538,12.5460606 9.59926154,12.7254545 L13.0331077,18.1193939 C13.2694154,18.4612121 13.6195692,18.5121212 13.8700308,18.4927273 C14.2971077,18.4587879 14.7174154,18.1993939 14.8700308,17.8769697 C14.9629538,17.6793939 14.9383385,17.4872727 14.7943385,17.2884848 L11.7875692,12.8921212 L12.5531077,12.3848485 L15.5531077,16.7709091 C15.8854154,17.2290909 15.9426462,17.7618182 15.7069538,18.26 C15.4140308,18.8806061 14.7057231,19.3381818 13.9444923,19.3987879 C13.8884923,19.4030303 13.8324923,19.4054545 13.7777231,19.4054545 C13.1568,19.4054545 12.6103385,19.1236364 12.2608,18.6163636 L9.00664615,13.5060606 C6.01526154,14.3472727 2.75803077,13.0963636 1.14941538,10.4418182 C0.0349538462,8.60242424 -0.132430769,6.31818182 0.7008,4.33090909 C1.54756923,2.31454545 3.30018462,0.841212121 5.51003077,0.287878788 C7.72603077,-0.265454545 10.1352615,0.355757576 11.7992615,1.91272727 Z M6.76067692,1.95169697 C7.76313846,2.08260606 8.80436923,2.53230303 9.69298462,3.21836364 C10.8665231,4.1250303 11.6659077,5.34442424 11.8856,6.56381818 L10.9766769,6.72260606 C10.7963692,5.72078788 10.1206769,4.70381818 9.12313846,3.93351515 C8.36252308,3.34684848 7.48067692,2.96260606 6.63944615,2.85290909 L6.76067692,1.95169697 Z\"\r\n                        id=\"Combined-Shape\"></path>\r\n                </g>\r\n            </g>\r\n        </g>\r\n    </g>\r\n</svg>"

/***/ }),

/***/ "./src/app/core/models/SearchQPP.ts":
/*!******************************************!*\
  !*** ./src/app/core/models/SearchQPP.ts ***!
  \******************************************/
/*! exports provided: searchQPPModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchQPPModel", function() { return searchQPPModel; });
var searchQPPModel = /** @class */ (function () {
    function searchQPPModel(searchType) {
        this.userId = "2003";
        this.reqType = "";
        this.lob = "";
        this.product = "";
        this.documentNo = "";
        this.customerName = "";
        this.mobileNo = null;
        this.emailId = null;
        this.viewBy = "Last 7days";
        this.premiumFrom = "";
        this.premiumTo = "";
        this.pol_start_frm = "";
        this.pol_start_to = "";
        this.risk_start_frm = "";
        this.risk_start_to = "";
        this.reqType = searchType;
    }
    searchQPPModel.ctorParameters = function () { return [
        null
    ]; };
    return searchQPPModel;
}());



/***/ }),

/***/ "./src/app/core/services/search-service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/search-service.ts ***!
  \*************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
headers1 = headers1.append('Content-Type', 'application/json');
headers1 = headers1.append('Authorization', 'application/json');
var SearchService = /** @class */ (function () {
    function SearchService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceBaseUrl;
    }
    SearchService.prototype.searchQuote = function (searchQuoteParams) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7777/searchQuote", searchQuoteParams, { headers: headers1 });
    };
    SearchService.prototype.searchProposal = function (searchQuoteParams) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7777/searchProposal", searchQuoteParams, { headers: headers1 });
    };
    SearchService.prototype.searchPolicy = function (searchQuoteParams) {
        return this.httpClient.post("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7777/searchPolicy", searchQuoteParams, { headers: headers1 });
    };
    SearchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/modules/search/search-component.css":
/*!*****************************************************!*\
  !*** ./src/app/modules/search/search-component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchContaner{\r\n    width: 1101px;\r\n    height: 770px;\r\n    display: flex;margin-top: 60px;\r\n}\r\n.searchFor{\r\n    margin-left: 50px;\r\n    height: 28px;\r\n    margin-top:20px;\r\n}\r\n.searchSelect{\r\n    margin-left: 50px;\r\n    width: 93%;\r\n    height: 50px;\r\n}\r\n.searchFilter{\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    padding-bottom: 10px;\r\n    width: 90%;\r\n    border-bottom: 1px solid #c0bfc0;\r\n    margin-left: 66px\r\n\r\n}\r\n.searchRowLine{\r\n    margin-left: 50px;\r\n}\r\n.pRowLine{\r\n    margin-left: 68px;\r\n}\r\n.searchBtn{\r\n    text-align: right;\r\n}\r\n.section-line{\r\n    border-bottom: 1px solid #c0bfc0;\r\n    margin-bottom: 18px;\r\n  }\r\n/* media queries */\r\n@media only screen and (max-width: 600px) {\r\n    .searchSelect{\r\n        margin-left: 0px;\r\n        width: 100%;\r\n    }\r\n    .searchFor{\r\n        margin: 8px 0px;\r\n        font-size: 18px;\r\n    }\r\n    .search-main-select-mb{\r\n        padding-right: 24px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvc2VhcmNoLWNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWEsQ0FBQyxnQkFBZ0I7QUFDbEM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEM7O0FBRUo7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxtQkFBbUI7RUFDckI7QUFFQSxrQkFBa0I7QUFDbEI7SUFDRTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL3NlYXJjaC1jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaENvbnRhbmVye1xyXG4gICAgd2lkdGg6IDExMDFweDtcclxuICAgIGhlaWdodDogNzcwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O21hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuLnNlYXJjaEZvcntcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbi5zZWFyY2hTZWxlY3R7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnNlYXJjaEZpbHRlcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzBiZmMwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY2cHhcclxuXHJcbn1cclxuLnNlYXJjaFJvd0xpbmV7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG4ucFJvd0xpbmV7XHJcbiAgICBtYXJnaW4tbGVmdDogNjhweDtcclxufVxyXG5cclxuLnNlYXJjaEJ0bntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5zZWN0aW9uLWxpbmV7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYmZjMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5cclxuICAvKiBtZWRpYSBxdWVyaWVzICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnNlYXJjaFNlbGVjdHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaEZvcntcclxuICAgICAgICBtYXJnaW46IDhweCAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1tYWluLXNlbGVjdC1tYntcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/search/search-component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/search/search-component.ts ***!
  \****************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(createQuoteService, commonService) {
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.lineOfBusiness = '';
        this.products = '';
        this.searchParams = {
            strLVTokenID: this.token,
            strLVCustomerName: "",
            strLVCustomerId: "",
            strLVCustomerType: "I",
            strLVState: "",
            strLVCityDistrict: "",
            strLVAreaVillage: "",
            strLVPincode: "",
            strLVPincodeLocality: "",
            strLVIntrEmpTag: "",
            strLVUserId: "",
        };
        this.selectedType = "Select";
        this.isValidated = false;
        this.gettoken();
    }
    ;
    SearchComponent.prototype.getLOBs = function () {
        var _this = this;
        this.commonService.getLOBs().subscribe(function (res) {
            _this.lobList = res;
        });
    };
    SearchComponent.prototype.onLobChange = function (event, lob) {
        this.lobCode = event.target.value;
        console.log(lob.control);
        this.getProductsByLobCode(this.lobCode);
    };
    SearchComponent.prototype.getProductsByLobCode = function (lobCode) {
        var _this = this;
        this.commonService
            .getProductsByLOBCode(lobCode)
            .subscribe(function (res) { return (_this.lobProductList = res); });
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.getLOBs();
    };
    SearchComponent.prototype.clear = function () {
        this.isValidated = false;
        this.customerDetails = [];
        this.searchParams.strLVCustomerName = "";
        this.searchParams.strLVCustomerId = "";
        this.searchParams.strLVCustomerType = "I";
        this.searchParams.strLVState = "";
        this.searchParams.strLVCityDistrict = "";
        this.searchParams.strLVAreaVillage = "";
        this.searchParams.strLVPincode = "";
        this.searchParams.strLVPincodeLocality = "";
        this.searchParams.strLVIntrEmpTag = "";
        this.searchParams.strLVUserId = "";
        this.customerDetails = null;
    };
    SearchComponent.prototype.validations = function () {
        if (this.searchParams.strLVCustomerName == "" &&
            this.searchParams.strLVCustomerId == "") {
            this.isValidated = true;
        }
        else {
            this.isValidated = false;
            this.getCustomerDetails();
        }
    };
    SearchComponent.prototype.getCustomerDetails = function () {
        var _this = this;
        this.searchParams.strLVTokenID = this.token;
        if (!this.isValidated) {
            this.createQuoteService
                .searchCustomerDetails(this.searchParams)
                .subscribe(function (res) {
                _this.customerDetails = res;
                _this.customerDetails = _this.customerDetails.lovtypes.lovtype;
            }, function (error) { return function () {
            }; });
        }
    };
    SearchComponent.prototype.gettoken = function () {
        var _this = this;
        this.commonService.getToken().subscribe(function (res) {
            _this.token = res;
        }, function (error) {
            _this.token = error.error.text; // body
        });
    };
    SearchComponent.ctorParameters = function () { return [
        { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_2__["CreateQuoteService"] },
        { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search",
            template: __webpack_require__(/*! raw-loader!./search-component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/search/search-component.html"),
            styles: [__webpack_require__(/*! ./search-component.css */ "./src/app/modules/search/search-component.css")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/search/search.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/search/search.module.ts ***!
  \*************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-component */ "./src/app/modules/search/search-component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _searchcustomer_searchcustomer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchcustomer/searchcustomer.component */ "./src/app/modules/search/searchcustomer/searchcustomer.component.ts");
/* harmony import */ var _searchpolicy_searchpolicy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchpolicy/searchpolicy.component */ "./src/app/modules/search/searchpolicy/searchpolicy.component.ts");
/* harmony import */ var _searchproposal_searchproposal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchproposal/searchproposal.component */ "./src/app/modules/search/searchproposal/searchproposal.component.ts");
/* harmony import */ var _searchquickquote_searchquickquote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchquickquote/searchquickquote.component */ "./src/app/modules/search/searchquickquote/searchquickquote.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");











var routes = [
    {
        path: '',
        component: _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
    }
];
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
                _searchcustomer_searchcustomer_component__WEBPACK_IMPORTED_MODULE_6__["SearchcustomerComponent"],
                _searchpolicy_searchpolicy_component__WEBPACK_IMPORTED_MODULE_7__["SearchpolicyComponent"],
                _searchproposal_searchproposal_component__WEBPACK_IMPORTED_MODULE_8__["SearchproposalComponent"],
                _searchquickquote_searchquickquote_component__WEBPACK_IMPORTED_MODULE_9__["SearchquickquoteComponent"],]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/modules/search/searchcustomer/searchcustomer.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/search/searchcustomer/searchcustomer.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchContaner{\r\n    width: 1101px;\r\n    height: 770px;\r\n    display: flex;margin-top: 60px;\r\n}\r\n.searchFor{\r\n    margin-left: 68px;\r\n    height: 28px;\r\n    margin-top:20px;\r\n}\r\n.searchSelect{\r\n    margin-left: 68px;\r\n    width: 642px;\r\n    height: 50px;\r\n}\r\n.searchFilter{\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    padding-bottom: 10px;\r\n    width: 90%;\r\n    border-bottom: 1px solid #c0bfc0;\r\n    margin-left: 66px\r\n\r\n}\r\n.searchRowLine{\r\n    margin-left: 50px;\r\n}\r\n.pRowLine{\r\n    margin-left: 68px;\r\n}\r\n.bTset{\r\n    float: right;\r\n    margin-left: auto;\r\n    /* text-decoration:underline ; */\r\n    border: none;\r\n    background-color: #ffffff ;\r\n    display: inherit;\r\n}\r\n.searchBtn{\r\n    text-align: right;\r\n}\r\n.section-line{\r\n    border-bottom: 1px solid #c0bfc0;\r\n    margin-bottom: 18px;\r\n  }\r\n.searchBtn{\r\n    text-align: right;\r\n   \r\n    \r\n}\r\n.searchBtn>div:last-child{\r\n    padding-right: 0px;\r\n}\r\n.searchClearButton{\r\n    width: 177px;\r\n    height: 44px;\r\n    background: #FFFFFF;\r\n    border: 1px solid #1A1446;\r\n    box-shadow: 0 3px 0 0 #C0BFC0;\r\n    border-radius: 3px;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    color: #1A1446;\r\n    letter-spacing: 0;\r\n}\r\n.searchSearchButton{\r\n    width: 200px;\r\n    height: 44px;\r\n    background: #727782;\r\n    border: 1px solid #727782;\r\n    box-shadow: 0 3px 0 0 #727782;\r\n    border-radius: 3px;\r\n   font-weight: 700;\r\n    font-size: 16px;\r\n    color: white;\r\n    letter-spacing: 0;\r\n}\r\n/* media queries */\r\n@media only screen and (max-width: 600px) {\r\n.searchFilter{\r\n    margin-left: 0px;\r\n    margin-right: 0px !important;\r\n    width: 100%;\r\n}\r\n\r\n.searchRowLine{\r\n    margin-left: 0px;\r\n}\r\n.modal-footer{\r\n    padding-left: 15px !important;\r\n}\r\n.searchClearButton{\r\n    width: 100%;\r\n}\r\n.searchSearchButton{\r\n    width: 100%;\r\n}\r\n.clear-btn-mb{\r\n    padding-top: 8px;\r\n    padding-bottom: 14px;\r\n    padding-left: 0px;\r\n\r\n}\r\n.search-btn-mb{\r\n    padding-top: 14px;\r\n    padding-bottom: 8px;\r\n    padding-right: 15px !important;\r\n    padding-left: 0px;\r\n}\r\n.searchBtn{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n.col-xs-12{\r\n    padding-right: 0px;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvc2VhcmNoY3VzdG9tZXIvc2VhcmNoY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYSxDQUFDLGdCQUFnQjtBQUNsQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQzs7QUFFSjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDRTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixrQkFBa0I7R0FDbkIsZ0JBQWdCO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NlYXJjaC9zZWFyY2hjdXN0b21lci9zZWFyY2hjdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaENvbnRhbmVye1xyXG4gICAgd2lkdGg6IDExMDFweDtcclxuICAgIGhlaWdodDogNzcwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O21hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuLnNlYXJjaEZvcntcclxuICAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbi5zZWFyY2hTZWxlY3R7XHJcbiAgICBtYXJnaW4tbGVmdDogNjhweDtcclxuICAgIHdpZHRoOiA2NDJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4uc2VhcmNoRmlsdGVye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgICBtYXJnaW4tbGVmdDogNjZweFxyXG5cclxufVxyXG4uc2VhcmNoUm93TGluZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbi5wUm93TGluZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xyXG59XHJcbi5iVHNldHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSA7ICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmIDtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuLnNlYXJjaEJ0bntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5zZWN0aW9uLWxpbmV7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYmZjMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG4gIC5zZWFyY2hCdG57XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgXHJcbiAgICBcclxufVxyXG4uc2VhcmNoQnRuPmRpdjpsYXN0LWNoaWxke1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbiAgLnNlYXJjaENsZWFyQnV0dG9ue1xyXG4gICAgd2lkdGg6IDE3N3B4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQTE0NDY7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwIDAgI0MwQkZDMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzFBMTQ0NjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcbi5zZWFyY2hTZWFyY2hCdXR0b257XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzI3NzgyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcyNzc4MjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjNzI3NzgyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi8qIG1lZGlhIHF1ZXJpZXMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4uc2VhcmNoRmlsdGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaFJvd0xpbmV7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoQ2xlYXJCdXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2VhcmNoU2VhcmNoQnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNsZWFyLWJ0bi1tYntcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG5cclxufVxyXG4uc2VhcmNoLWJ0bi1tYntcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbi5zZWFyY2hCdG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4uY29sLXhzLTEye1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/search/searchcustomer/searchcustomer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/search/searchcustomer/searchcustomer.component.ts ***!
  \***************************************************************************/
/*! exports provided: SearchcustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchcustomerComponent", function() { return SearchcustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");




var SearchcustomerComponent = /** @class */ (function () {
    function SearchcustomerComponent(createQuoteService, commonService) {
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.lineOfBusiness = '';
        this.products = '';
        this.searchParams = {
            strLVTokenID: this.token,
            strLVCustomerName: "",
            strLVCustomerId: "",
            strLVCustomerType: "I",
            strLVState: "",
            strLVCityDistrict: "",
            strLVAreaVillage: "",
            strLVPincode: "",
            strLVPincodeLocality: "",
            strLVIntrEmpTag: "",
            strLVUserId: "",
        };
        this.searchParams1 = {
            user_id: "2003",
            firstname: null,
            lastname: null,
            mobile_no: null,
            email_id: null,
            customer_id: null,
            policy_no: null
        };
        this.selectedType = "Select";
        this.isValidated = false;
        this.gettoken();
    }
    ;
    SearchcustomerComponent.prototype.getLOBs = function () {
        var _this = this;
        this.commonService.getLOBs().subscribe(function (res) {
            _this.lobList = res;
        });
    };
    SearchcustomerComponent.prototype.onLobChange = function (event, lob) {
        this.lobCode = event.target.value;
        console.log(lob.control);
        this.getProductsByLobCode(this.lobCode);
    };
    SearchcustomerComponent.prototype.getProductsByLobCode = function (lobCode) {
        var _this = this;
        this.commonService
            .getProductsByLOBCode(lobCode)
            .subscribe(function (res) { return (_this.lobProductList = res); });
    };
    SearchcustomerComponent.prototype.ngOnInit = function () {
        this.getLOBs();
    };
    SearchcustomerComponent.prototype.clear = function () {
        this.isValidated = false;
        this.customerDetails = [];
        // this.searchParams.strLVCustomerName = "";
        // this.searchParams.strLVCustomerId = "";
        // this.searchParams.strLVCustomerType = "I";
        // this.searchParams.strLVState = "";
        // this.searchParams.strLVCityDistrict = "";
        // this.searchParams.strLVAreaVillage = "";
        // this.searchParams.strLVPincode = "";
        // this.searchParams.strLVPincodeLocality = "";
        // this.searchParams.strLVIntrEmpTag = "";
        // this.searchParams.strLVUserId = "";
        this.searchParams1.firstname = null;
        this.searchParams1.lastname = null,
            this.searchParams1.mobile_no = null,
            this.searchParams1.email_id = null,
            this.searchParams1.customer_id = null,
            this.searchParams1.policy_no = null;
        this.customerDetails = null;
    };
    SearchcustomerComponent.prototype.validations = function () {
        if (this.searchParams1.firstname == null &&
            this.searchParams1.customer_id == null) {
            this.isValidated = true;
        }
        else {
            this.isValidated = false;
            this.getCustomerDetails();
        }
    };
    SearchcustomerComponent.prototype.getCustomerDetails = function () {
        var _this = this;
        //this.searchParams.strLVTokenID = this.token;
        if (!this.isValidated) {
            this.createQuoteService
                .searchCustomerDetails(this.searchParams1)
                .subscribe(function (res) {
                _this.customerDetails = res;
                //this.customerDetails = this.customerDetails.lovtypes.lovtype;
            }, function (error) { return function () {
            }; });
        }
    };
    SearchcustomerComponent.prototype.gettoken = function () {
        var _this = this;
        this.commonService.getToken().subscribe(function (res) {
            _this.token = res;
        }, function (error) {
            _this.token = error.error.text; // body
        });
    };
    SearchcustomerComponent.ctorParameters = function () { return [
        { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_2__["CreateQuoteService"] },
        { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    SearchcustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchcustomer',
            template: __webpack_require__(/*! raw-loader!./searchcustomer.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/search/searchcustomer/searchcustomer.component.html"),
            styles: [__webpack_require__(/*! ./searchcustomer.component.css */ "./src/app/modules/search/searchcustomer/searchcustomer.component.css")]
        })
    ], SearchcustomerComponent);
    return SearchcustomerComponent;
}());



/***/ }),

/***/ "./src/app/modules/search/searchpolicy/searchpolicy.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/search/searchpolicy/searchpolicy.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchContaner{\r\n    width: 1101px;\r\n    height: 770px;\r\n    display: flex;margin-top: 60px;\r\n}\r\n.searchFor{\r\n    margin-left: 68px;\r\n    height: 28px;\r\n    margin-top:20px;\r\n}\r\n.searchSelect{\r\n    margin-left: 68px;\r\n    width: 642px;\r\n    height: 50px;\r\n}\r\n.searchFilter{\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    padding-bottom: 10px;\r\n    width: 90%;\r\n    border-bottom: 1px solid #c0bfc0;\r\n    margin-left: 66px\r\n\r\n}\r\n.searchRowLine{\r\n    margin-left: 50px;\r\n}\r\n.pRowLine{\r\n    margin-left: 68px;\r\n}\r\n.bTset{\r\n    float: right;\r\n    margin-left: auto;\r\n    /* text-decoration:underline ; */\r\n    border: none;\r\n    background-color: #ffffff ;\r\n    display: inherit;\r\n}\r\n.searchBtn{\r\n    text-align: right;\r\n    padding-right: 0px !important;\r\n    \r\n}\r\n.searchBtn>div:last-child{\r\n    padding-right: 0px !important;\r\n}\r\n.section-line{\r\n    border-bottom: 1px solid #c0bfc0;\r\n    margin-bottom: 18px;\r\n}\r\n.searchRadioBtn{\r\n      margin-top: 20px;\r\n}\r\n.searchRadioLabel{\r\n    margin-left: 10px !important;\r\n    font-size: 16px !important;\r\n    color: #343741 !important;\r\n    font-weight: 700;\r\n}\r\n.viewlabel{\r\n    font-size: 16px;\r\n}\r\n.datePadding{\r\n    margin-left: 15px;\r\n}\r\n.searchClearButton{\r\n    width: 177px;\r\n    height: 44px;\r\n    background: #FFFFFF;\r\n    border: 1px solid #1A1446;\r\n    box-shadow: 0 3px 0 0 #C0BFC0;\r\n    border-radius: 3px;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    color: #1A1446;\r\n    letter-spacing: 0;\r\n}\r\n.searchSearchButton{\r\n    width: 200px;\r\n    height: 44px;\r\n    background: #727782;\r\n    border: 1px solid #727782;\r\n    box-shadow: 0 3px 0 0 #727782;\r\n    border-radius: 3px;\r\n   font-weight: 700;\r\n    font-size: 16px;\r\n    color: white;\r\n    letter-spacing: 0;\r\n}\r\n/* media queries for mobile */\r\n@media only screen and (max-width: 600px) {\r\n    .searchFilter{\r\n        margin-left: 0px;\r\n        margin-right: 0px !important;\r\n        width: 100%;\r\n    }\r\n    \r\n    .searchRowLine{\r\n        margin-left: 0px;\r\n    }\r\n    .modal-footer{\r\n        padding-left: 15px !important;\r\n    }\r\n    .searchClearButton{\r\n        width: 100%;\r\n    }\r\n    .searchSearchButton{\r\n        width: 100%;\r\n    }\r\n    .clear-btn-mb{\r\n        padding-top: 8px;\r\n        padding-bottom: 14px;\r\n        padding-left: 0px;\r\n        padding-right: 0px !important;\r\n    \r\n    }\r\n    .search-btn-mb{\r\n        padding-top: 14px;\r\n        padding-bottom: 8px;\r\n        padding-right: 15px !important;\r\n        padding-left: 0px;\r\n    }\r\n    .searchBtn{\r\n        padding-left: 0px;\r\n        padding-right: 0px;\r\n    }\r\n    .col-xs-12{\r\n        padding-right: 0px;\r\n    }\r\n\r\n    .modal-footer .quote-fields{\r\n        margin-bottom: 0px !important;\r\n    }\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvc2VhcmNocG9saWN5L3NlYXJjaHBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhLENBQUMsZ0JBQWdCO0FBQ2xDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDOztBQUVKO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7O0FBRWpDO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7QUFDQTtNQUNNLGdCQUFnQjtBQUN0QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixrQkFBa0I7R0FDbkIsZ0JBQWdCO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFHQSw2QkFBNkI7QUFFN0I7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQiw0QkFBNEI7UUFDNUIsV0FBVztJQUNmOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQiw2QkFBNkI7O0lBRWpDO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvc2VhcmNocG9saWN5L3NlYXJjaHBvbGljeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaENvbnRhbmVye1xyXG4gICAgd2lkdGg6IDExMDFweDtcclxuICAgIGhlaWdodDogNzcwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O21hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuLnNlYXJjaEZvcntcclxuICAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbi5zZWFyY2hTZWxlY3R7XHJcbiAgICBtYXJnaW4tbGVmdDogNjhweDtcclxuICAgIHdpZHRoOiA2NDJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4uc2VhcmNoRmlsdGVye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgICBtYXJnaW4tbGVmdDogNjZweFxyXG5cclxufVxyXG4uc2VhcmNoUm93TGluZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbi5wUm93TGluZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xyXG59XHJcbi5iVHNldHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSA7ICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmIDtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuLnNlYXJjaEJ0bntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4uc2VhcmNoQnRuPmRpdjpsYXN0LWNoaWxke1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlY3Rpb24tbGluZXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzBiZmMwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG4uc2VhcmNoUmFkaW9CdG57XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnNlYXJjaFJhZGlvTGFiZWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzM0Mzc0MSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4udmlld2xhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5kYXRlUGFkZGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5zZWFyY2hDbGVhckJ1dHRvbntcclxuICAgIHdpZHRoOiAxNzdweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMUExNDQ2O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMCAwICNDMEJGQzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMxQTE0NDY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG4uc2VhcmNoU2VhcmNoQnV0dG9ue1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzcyNzc4MjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Mjc3ODI7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwIDAgIzcyNzc4MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5cclxuLyogbWVkaWEgcXVlcmllcyBmb3IgbW9iaWxlICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuc2VhcmNoRmlsdGVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaFJvd0xpbmV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5tb2RhbC1mb290ZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoQ2xlYXJCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoU2VhcmNoQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNsZWFyLWJ0bi1tYntcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJ0bi1tYntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2hCdG57XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbC14cy0xMntcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWZvb3RlciAucXVvdGUtZmllbGRze1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/search/searchpolicy/searchpolicy.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/search/searchpolicy/searchpolicy.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchpolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchpolicyComponent", function() { return SearchpolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_models_SearchQPP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/SearchQPP */ "./src/app/core/models/SearchQPP.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/search-service */ "./src/app/core/services/search-service.ts");






var SearchpolicyComponent = /** @class */ (function () {
    function SearchpolicyComponent(commonService, datePipe, searchService) {
        this.commonService = commonService;
        this.datePipe = datePipe;
        this.searchService = searchService;
        this.riskLocationIncludesBasement = true;
        this.veiwPolicy = {
            viewBy: 'Last 7days'
        };
        this.searchPolicyParams = new src_app_core_models_SearchQPP__WEBPACK_IMPORTED_MODULE_2__["searchQPPModel"]('POLICY');
        this.PolicySearchResults = null;
        this.searchParams1 = {
            user_id: "2003",
            firstname: null,
            policy_no: null
        };
    }
    SearchpolicyComponent.prototype.ngOnInit = function () {
        this.getLOBs();
    };
    SearchpolicyComponent.prototype.resetCustomSelection = function () {
        this.veiwPolicy.viewBy = "Last 7days";
    };
    SearchpolicyComponent.prototype.getLOBs = function () {
        var _this = this;
        this.commonService.getLOBs().subscribe(function (res) {
            _this.lobList = res;
        });
    };
    SearchpolicyComponent.prototype.getProductsByLobCode = function (lobCode) {
        var _this = this;
        console.log(lobCode);
        this.commonService
            .getProductsByLOBCode(lobCode)
            .subscribe(function (res) { return (_this.lobProductList = res); });
    };
    SearchpolicyComponent.prototype.onLobChange = function (event, lob) {
        this.lobCode = event.target.value;
        console.log(this.lobCode);
        this.getProductsByLobCode(this.lobCode);
    };
    SearchpolicyComponent.prototype.onViewByChange = function (event) {
        this.searchPolicyParams.viewBy = event.target.value;
    };
    SearchpolicyComponent.prototype.validations = function () {
        var _this = this;
        if ((this.searchPolicyParams.lob == "") && (this.searchPolicyParams.product == "") && (this.searchPolicyParams.customerName == "") && (this.searchPolicyParams.documentNo == "") && (this.searchPolicyParams.emailId == null) && (this.searchPolicyParams.mobileNo == null)) {
            this.isFormSubmitInValid = true;
        }
        else {
            this.isFormSubmitInValid = false;
            console.log(this.searchPolicyParams);
            // console.log(this.searchQuoteParams.pol_start_frm);
            if (this.veiwPolicy.viewBy == "Custom") {
                this.searchPolicyParams.pol_start_frm = this.datePipe.transform(this.searchPolicyParams.pol_start_frm, 'dd-MMM-yy');
                this.searchPolicyParams.pol_start_to = this.datePipe.transform(this.searchPolicyParams.pol_start_to, 'dd-MMM-yy');
            }
            this.searchService.searchPolicy(this.searchParams1).subscribe(function (res) {
                _this.PolicySearchResults = res;
                console.log(res, _this.PolicySearchResults);
            });
        }
    };
    SearchpolicyComponent.prototype.clear = function () {
        this.searchParams1.firstname = null;
        this.searchParams1.policy_no = null;
        this.PolicySearchResults = null;
    };
    SearchpolicyComponent.ctorParameters = function () { return [
        { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] }
    ]; };
    SearchpolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchpolicy',
            template: __webpack_require__(/*! raw-loader!./searchpolicy.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/search/searchpolicy/searchpolicy.component.html"),
            styles: [__webpack_require__(/*! ./searchpolicy.component.css */ "./src/app/modules/search/searchpolicy/searchpolicy.component.css")]
        })
    ], SearchpolicyComponent);
    return SearchpolicyComponent;
}());



/***/ }),

/***/ "./src/app/modules/search/searchproposal/searchproposal.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/search/searchproposal/searchproposal.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchContaner{\r\n    width: 1101px;\r\n    height: 770px;\r\n    display: flex;margin-top: 60px;\r\n}\r\n.searchFor{\r\n    margin-left: 68px;\r\n    height: 28px;\r\n    margin-top:20px;\r\n}\r\n.searchSelect{\r\n    margin-left: 68px;\r\n    width: 642px;\r\n    height: 50px;\r\n}\r\n.searchFilter{\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    padding-bottom: 10px;\r\n    width: 90%;\r\n    border-bottom: 1px solid #c0bfc0;\r\n    margin-left: 66px\r\n\r\n}\r\n.searchRowLine{\r\n    margin-left: 50px;\r\n}\r\n.pRowLine{\r\n    margin-left: 68px;\r\n}\r\n.bTset{\r\n    float: right;\r\n    margin-left: auto;\r\n    /* text-decoration:underline ; */\r\n    border: none;\r\n    background-color: #ffffff ;\r\n    display: inherit;\r\n}\r\n.searchBtn{\r\n    text-align: right;\r\n    padding-right: 0px !important;\r\n    \r\n}\r\n.searchBtn>div:last-child{\r\n    padding-right: 0px !important;\r\n}\r\n.section-line{\r\n    border-bottom: 1px solid #c0bfc0;\r\n    margin-bottom: 18px;\r\n}\r\n.searchRadioBtn{\r\n      margin-top: 20px;\r\n}\r\n.searchRadioLabel{\r\n    margin-left: 10px !important;\r\n    font-size: 16px !important;\r\n    color: #343741 !important;\r\n    font-weight: 700;\r\n}\r\n.viewlabel{\r\n    font-size: 16px;\r\n}\r\n.datePadding{\r\n    margin-left: 15px;\r\n}\r\n.searchClearButton{\r\n    width: 177px;\r\n    height: 44px;\r\n    background: #FFFFFF;\r\n    border: 1px solid #1A1446;\r\n    box-shadow: 0 3px 0 0 #C0BFC0;\r\n    border-radius: 3px;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    color: #1A1446;\r\n    letter-spacing: 0;\r\n}\r\n.searchSearchButton{\r\n    width: 200px;\r\n    height: 44px;\r\n    background: #727782;\r\n    border: 1px solid #727782;\r\n    box-shadow: 0 3px 0 0 #727782;\r\n    border-radius: 3px;\r\n   font-weight: 700;\r\n    font-size: 16px;\r\n    color: #1A1446;\r\n    letter-spacing: 0;\r\n}\r\n/* media quries */\r\n@media only screen and (max-width: 600px) {\r\n    .searchFilter{\r\n        margin-left: 0px;\r\n        margin-right: 0px !important;\r\n        width: 100%;\r\n    }\r\n    \r\n    .searchRowLine{\r\n        margin-left: 0px;\r\n    }\r\n    .modal-footer{\r\n        padding-left: 15px !important;\r\n    }\r\n    .searchClearButton{\r\n        width: 100%;\r\n    }\r\n    .searchSearchButton{\r\n        width: 100%;\r\n    }\r\n    .clear-btn-mb{\r\n        padding-top: 8px;\r\n        padding-bottom: 14px;\r\n        padding-left: 0px;\r\n        padding-right: 0px !important;\r\n    \r\n    }\r\n    .search-btn-mb{\r\n        padding-top: 14px;\r\n        padding-bottom: 8px;\r\n        padding-right: 15px !important;\r\n        padding-left: 0px;\r\n    }\r\n    .searchBtn{\r\n        padding-left: 0px;\r\n        padding-right: 0px;\r\n    }\r\n    .col-xs-12{\r\n        padding-right: 0px;\r\n    }\r\n\r\n    .modal-footer .quote-fields{\r\n        margin-bottom: 0px !important;\r\n    }\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvc2VhcmNocHJvcG9zYWwvc2VhcmNocHJvcG9zYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYSxDQUFDLGdCQUFnQjtBQUNsQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQzs7QUFFSjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCOztBQUVqQztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7TUFDTSxnQkFBZ0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0dBQ25CLGdCQUFnQjtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBRUEsaUJBQWlCO0FBRWpCO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsNEJBQTRCO1FBQzVCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsNkJBQTZCOztJQUVqQztJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7SUFDQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL3NlYXJjaHByb3Bvc2FsL3NlYXJjaHByb3Bvc2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoQ29udGFuZXJ7XHJcbiAgICB3aWR0aDogMTEwMXB4O1xyXG4gICAgaGVpZ2h0OiA3NzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7bWFyZ2luLXRvcDogNjBweDtcclxufVxyXG4uc2VhcmNoRm9ye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuLnNlYXJjaFNlbGVjdHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xyXG4gICAgd2lkdGg6IDY0MnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zZWFyY2hGaWx0ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYmZjMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NnB4XHJcblxyXG59XHJcbi5zZWFyY2hSb3dMaW5le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuLnBSb3dMaW5le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY4cHg7XHJcbn1cclxuLmJUc2V0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIDsgKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgO1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG4uc2VhcmNoQnRue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcbi5zZWFyY2hCdG4+ZGl2Omxhc3QtY2hpbGR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uc2VjdGlvbi1saW5le1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcbi5zZWFyY2hSYWRpb0J0bntcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uc2VhcmNoUmFkaW9MYWJlbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMzQzNzQxICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi52aWV3bGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmRhdGVQYWRkaW5ne1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLnNlYXJjaENsZWFyQnV0dG9ue1xyXG4gICAgd2lkdGg6IDE3N3B4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQTE0NDY7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwIDAgI0MwQkZDMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzFBMTQ0NjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcbi5zZWFyY2hTZWFyY2hCdXR0b257XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzI3NzgyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcyNzc4MjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjNzI3NzgyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMxQTE0NDY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLyogbWVkaWEgcXVyaWVzICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuc2VhcmNoRmlsdGVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaFJvd0xpbmV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5tb2RhbC1mb290ZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoQ2xlYXJCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoU2VhcmNoQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNsZWFyLWJ0bi1tYntcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJ0bi1tYntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2hCdG57XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbC14cy0xMntcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWZvb3RlciAucXVvdGUtZmllbGRze1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/search/searchproposal/searchproposal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/search/searchproposal/searchproposal.component.ts ***!
  \***************************************************************************/
/*! exports provided: SearchproposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchproposalComponent", function() { return SearchproposalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/search-service */ "./src/app/core/services/search-service.ts");
/* harmony import */ var src_app_core_models_SearchQPP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/SearchQPP */ "./src/app/core/models/SearchQPP.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var SearchproposalComponent = /** @class */ (function () {
    function SearchproposalComponent(commonService, datePipe, searchService) {
        this.commonService = commonService;
        this.datePipe = datePipe;
        this.searchService = searchService;
        this.riskLocationIncludesBasement = true;
        this.veiwProposal = {
            viewBy: 'Last 7days'
        };
        this.searchProposalParams = new src_app_core_models_SearchQPP__WEBPACK_IMPORTED_MODULE_3__["searchQPPModel"]('PROPOSAL');
        this.ProposalSearchResults = null;
        this.searchParams1 = {
            user_id: "2003",
            firstname: null,
            proposal_no: null
        };
    }
    SearchproposalComponent.prototype.ngOnInit = function () {
        this.getLOBs();
    };
    SearchproposalComponent.prototype.resetCustomSelection = function () {
        this.veiwProposal.viewBy = "Last 7days";
    };
    SearchproposalComponent.prototype.getLOBs = function () {
        var _this = this;
        this.commonService.getLOBs().subscribe(function (res) {
            _this.lobList = res;
        });
    };
    SearchproposalComponent.prototype.getProductsByLobCode = function (lobCode) {
        var _this = this;
        console.log(lobCode);
        this.commonService
            .getProductsByLOBCode(lobCode)
            .subscribe(function (res) { return (_this.lobProductList = res); });
    };
    SearchproposalComponent.prototype.onLobChange = function (event, lob) {
        this.lobCode = event.target.value;
        console.log(this.lobCode);
        this.getProductsByLobCode(this.lobCode);
    };
    SearchproposalComponent.prototype.onViewByChange = function (event) {
        this.searchProposalParams.viewBy = event.target.value;
    };
    SearchproposalComponent.prototype.validations = function () {
        var _this = this;
        if ((this.searchProposalParams.lob == "") && (this.searchProposalParams.product == "") && (this.searchProposalParams.customerName == "") && (this.searchProposalParams.documentNo == "") && (this.searchProposalParams.emailId == null) && (this.searchProposalParams.mobileNo == null)) {
            this.isFormSubmitInValid = true;
        }
        else {
            this.isFormSubmitInValid = false;
            console.log(this.searchProposalParams);
            // console.log(this.searchQuoteParams.pol_start_frm);
            if (this.veiwProposal.viewBy == "Custom") {
                this.searchProposalParams.pol_start_frm = this.datePipe.transform(this.searchProposalParams.pol_start_frm, 'dd-MMM-yy');
                this.searchProposalParams.pol_start_to = this.datePipe.transform(this.searchProposalParams.pol_start_to, 'dd-MMM-yy');
            }
            this.searchService.searchProposal(this.searchParams1).subscribe(function (res) {
                _this.ProposalSearchResults = res;
                console.log(res);
            });
        }
    };
    SearchproposalComponent.prototype.clear = function () {
        this.searchParams1.firstname = null;
        this.searchParams1.proposal_no = null;
        this.ProposalSearchResults = null;
    };
    SearchproposalComponent.ctorParameters = function () { return [
        { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }
    ]; };
    SearchproposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchproposal',
            template: __webpack_require__(/*! raw-loader!./searchproposal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/search/searchproposal/searchproposal.component.html"),
            styles: [__webpack_require__(/*! ./searchproposal.component.css */ "./src/app/modules/search/searchproposal/searchproposal.component.css")]
        })
    ], SearchproposalComponent);
    return SearchproposalComponent;
}());



/***/ }),

/***/ "./src/app/modules/search/searchquickquote/searchquickquote.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/search/searchquickquote/searchquickquote.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchContaner{\r\n    width: 1101px;\r\n    height: 770px;\r\n    display: flex;margin-top: 60px;\r\n}\r\n.searchFor{\r\n    margin-left: 68px;\r\n    height: 28px;\r\n    margin-top:20px;\r\n}\r\n.searchSelect{\r\n    margin-left: 68px;\r\n    width: 642px;\r\n    height: 50px;\r\n}\r\n.searchFilter{\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    padding-bottom: 10px;\r\n    width: 90%;\r\n    border-bottom: 1px solid #c0bfc0;\r\n    margin-left: 66px\r\n\r\n}\r\n.searchRowLine{\r\n    margin-left: 50px;\r\n    margin-bottom: 18px;\r\n}\r\n.pRowLine{\r\n    margin-left: 68px;\r\n}\r\n.bTset{\r\n    float: right;\r\n    margin-left: auto;\r\n    /* text-decoration:underline ; */\r\n    border: none;\r\n    background-color: #ffffff ;\r\n    display: inherit;\r\n}\r\n.searchBtn{\r\n    text-align: right;\r\n}\r\n.section-line{\r\n    border-bottom: 1px solid #c0bfc0;\r\n    margin-bottom: 18px;\r\n  }\r\n.searchBtn{\r\n    text-align: right;\r\n    padding-right: 0px !important;\r\n    \r\n}\r\n.searchBtn>div:last-child{\r\n    padding-right: 0px !important;\r\n}\r\n.searchClearButton{\r\n    width: 177px;\r\n    height: 44px;\r\n    background: #FFFFFF;\r\n    border: 1px solid #1A1446;\r\n    box-shadow: 0 3px 0 0 #C0BFC0;\r\n    border-radius: 3px;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    color: #1A1446;\r\n    letter-spacing: 0;\r\n}\r\n.searchSearchButton{\r\n    width: 200px;\r\n    height: 44px;\r\n    background: #727782;\r\n    border: 1px solid #727782;\r\n    box-shadow: 0 3px 0 0 #727782;\r\n    border-radius: 3px;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    color: white;\r\n    letter-spacing: 0;\r\n}\r\n.search-result-box {\r\n    background: #FFFFFF;\r\nbox-shadow: 0 0 10px 0 rgba(0,0,0,0.16);\r\npadding: 24px;\r\n}\r\n/* media queries */\r\n@media only screen and (max-width: 600px) {\r\n    .searchFilter{\r\n        margin-left: 0px;\r\n        margin-right: 0px !important;\r\n        width: 100%;\r\n    }\r\n    \r\n    .searchRowLine{\r\n        margin-left: 0px;\r\n    }\r\n    .modal-footer{\r\n        padding-left: 15px !important;\r\n    }\r\n    .searchClearButton{\r\n        width: 100%;\r\n    }\r\n    .searchSearchButton{\r\n        width: 100%;\r\n    }\r\n    .clear-btn-mb{\r\n        padding-top: 8px;\r\n        padding-bottom: px;\r\n        padding-left: 0px;\r\n    \r\n    }\r\n    .search-btn-mb{\r\n        padding-top: 14px;\r\n        padding-bottom: 8px;\r\n        padding-right: 15px !important;\r\n        padding-left: 0px;\r\n    }\r\n    .searchBtn{\r\n        padding-left: 0px;\r\n        padding-right: 0px;\r\n    }\r\n    .col-xs-12{\r\n        padding-right: 0px;\r\n    }\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvc2VhcmNocXVpY2txdW90ZS9zZWFyY2hxdWlja3F1b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWEsQ0FBQyxnQkFBZ0I7QUFDbEM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEM7O0FBRUo7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLDZCQUE2Qjs7QUFFakM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qix1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiO0FBRUEsa0JBQWtCO0FBRWxCO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsNEJBQTRCO1FBQzVCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixpQkFBaUI7O0lBRXJCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvc2VhcmNocXVpY2txdW90ZS9zZWFyY2hxdWlja3F1b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoQ29udGFuZXJ7XHJcbiAgICB3aWR0aDogMTEwMXB4O1xyXG4gICAgaGVpZ2h0OiA3NzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7bWFyZ2luLXRvcDogNjBweDtcclxufVxyXG4uc2VhcmNoRm9ye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuLnNlYXJjaFNlbGVjdHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xyXG4gICAgd2lkdGg6IDY0MnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zZWFyY2hGaWx0ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYmZjMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NnB4XHJcblxyXG59XHJcbi5zZWFyY2hSb3dMaW5le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcbi5wUm93TGluZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xyXG59XHJcbi5iVHNldHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSA7ICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmIDtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuLnNlYXJjaEJ0bntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5zZWN0aW9uLWxpbmV7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYmZjMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG4gIC5zZWFyY2hCdG57XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuLnNlYXJjaEJ0bj5kaXY6bGFzdC1jaGlsZHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiAgLnNlYXJjaENsZWFyQnV0dG9ue1xyXG4gICAgd2lkdGg6IDE3N3B4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQTE0NDY7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwIDAgI0MwQkZDMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzFBMTQ0NjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcbi5zZWFyY2hTZWFyY2hCdXR0b257XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzI3NzgyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcyNzc4MjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjNzI3NzgyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsMCwwLDAuMTYpO1xyXG5wYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4vKiBtZWRpYSBxdWVyaWVzICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuc2VhcmNoRmlsdGVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaFJvd0xpbmV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5tb2RhbC1mb290ZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoQ2xlYXJCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoU2VhcmNoQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNsZWFyLWJ0bi1tYntcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1idG4tbWJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoQnRue1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5jb2wteHMtMTJ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/search/searchquickquote/searchquickquote.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/search/searchquickquote/searchquickquote.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchquickquoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchquickquoteComponent", function() { return SearchquickquoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_models_SearchQPP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/models/SearchQPP */ "./src/app/core/models/SearchQPP.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");
/* harmony import */ var src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/search-service */ "./src/app/core/services/search-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var SearchquickquoteComponent = /** @class */ (function () {
    function SearchquickquoteComponent(commonService, searchSearvice, datePipe) {
        this.commonService = commonService;
        this.searchSearvice = searchSearvice;
        this.datePipe = datePipe;
        this.veiwQuote = {
            viewBy: 'Last 7days'
        };
        this.searchQuoteParams = new _core_models_SearchQPP__WEBPACK_IMPORTED_MODULE_2__["searchQPPModel"]('QUOTE');
        this.QuoteSearchResults = null;
        this.searchParams1 = {
            user_id: "2003",
            quote_no: null,
            firstname: null,
        };
    }
    SearchquickquoteComponent.prototype.ngOnInit = function () {
        this.getLOBs();
    };
    SearchquickquoteComponent.prototype.getLOBs = function () {
        var _this = this;
        this.commonService.getLOBs().subscribe(function (res) {
            _this.lobList = res;
        });
    };
    SearchquickquoteComponent.prototype.getProductsByLobCode = function (lobCode) {
        var _this = this;
        console.log(lobCode);
        this.commonService
            .getProductsByLOBCode(lobCode)
            .subscribe(function (res) { return (_this.lobProductList = res); });
    };
    SearchquickquoteComponent.prototype.onLobChange = function (event, lob) {
        this.lobCode = event.target.value;
        console.log(this.lobCode);
        this.getProductsByLobCode(this.lobCode);
    };
    // setQuoteSearchDates(viewBy){
    //   switch(viewBy){
    //     case 'Last 7days': this.searchQuoteParams.risk_start_to=this.date.getDate()+'-'+this.date.getMonth()+'-'+this.date.getFullYear().toString().
    //     case 'Last 30days':
    //     case 'Last 60days':
    //     case 'Custom':
    //     case 'All':
    //   }
    // }
    SearchquickquoteComponent.prototype.onViewByChange = function (event) {
        this.searchQuoteParams.viewBy = event.target.value;
    };
    SearchquickquoteComponent.prototype.validations = function () {
        var _this = this;
        if ((this.searchQuoteParams.lob == "") && (this.searchQuoteParams.product == "") && (this.searchQuoteParams.documentNo == "") && (this.searchQuoteParams.emailId == null) && (this.searchQuoteParams.mobileNo == null)) {
            this.isFormSubmitInValid = true;
        }
        else {
            this.isFormSubmitInValid = false;
            console.log(this.searchQuoteParams);
            // console.log(this.searchQuoteParams.pol_start_frm);
            if (this.veiwQuote.viewBy == "Custom") {
                this.searchQuoteParams.pol_start_frm = this.datePipe.transform(this.searchQuoteParams.pol_start_frm, 'dd-MMM-yy');
                this.searchQuoteParams.pol_start_to = this.datePipe.transform(this.searchQuoteParams.pol_start_to, 'dd-MMM-yy');
            }
            this.searchSearvice.searchQuote(this.searchParams1).subscribe(function (res) {
                _this.QuoteSearchResults = res;
                console.log(res);
            });
        }
    };
    SearchquickquoteComponent.prototype.clear = function () {
        this.searchParams1.firstname = null;
        this.searchParams1.quote_no = null;
        this.QuoteSearchResults = null;
    };
    SearchquickquoteComponent.ctorParameters = function () { return [
        { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
    ]; };
    SearchquickquoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchquickquote',
            template: __webpack_require__(/*! raw-loader!./searchquickquote.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/search/searchquickquote/searchquickquote.component.html"),
            styles: [__webpack_require__(/*! ./searchquickquote.component.css */ "./src/app/modules/search/searchquickquote/searchquickquote.component.css")]
        })
    ], SearchquickquoteComponent);
    return SearchquickquoteComponent;
}());



/***/ }),

/***/ "./src/app/shared/Pipes/custom.datePipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/Pipes/custom.datePipe.ts ***!
  \*************************************************/
/*! exports provided: CustomDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatePipe", function() { return CustomDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var CustomDatePipe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomDatePipe, _super);
    function CustomDatePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDatePipe.prototype.transform = function (value, args) {
        return _super.prototype.transform.call(this, value, "dd-MM-yyyy");
    };
    CustomDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'customDate'
        })
    ], CustomDatePipe);
    return CustomDatePipe;
}(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]));



/***/ }),

/***/ "./src/app/shared/components/form-error-info/form-error-info.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/form-error-info/form-error-info.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvcm0tZXJyb3ItaW5mby9mb3JtLWVycm9yLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/form-error-info/form-error-info.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/form-error-info/form-error-info.component.ts ***!
  \********************************************************************************/
/*! exports provided: FormErrorInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorInfoComponent", function() { return FormErrorInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormErrorInfoComponent = /** @class */ (function () {
    function FormErrorInfoComponent() {
    }
    FormErrorInfoComponent.prototype.ngOnInit = function () {
    };
    FormErrorInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-error-info',
            template: __webpack_require__(/*! raw-loader!./form-error-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/form-error-info/form-error-info.component.html"),
            styles: [__webpack_require__(/*! ./form-error-info.component.css */ "./src/app/shared/components/form-error-info/form-error-info.component.css")]
        })
    ], FormErrorInfoComponent);
    return FormErrorInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/side-nav-bar/side-nav-bar.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/side-nav-bar/side-nav-bar.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGUtbmF2LWJhci9zaWRlLW5hdi1iYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/side-nav-bar/side-nav-bar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/side-nav-bar/side-nav-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: SideNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavBarComponent", function() { return SideNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideNavBarComponent = /** @class */ (function () {
    function SideNavBarComponent() {
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sideNavOpen = false;
    }
    SideNavBarComponent.prototype.toggleSideNav = function () {
        this.sideNavOpen = !this.sideNavOpen;
        this.toggle.emit(this.sideNavOpen);
    };
    SideNavBarComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SideNavBarComponent.prototype, "toggle", void 0);
    SideNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav-bar',
            template: __webpack_require__(/*! raw-loader!./side-nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/side-nav-bar/side-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-nav-bar.component.css */ "./src/app/shared/components/side-nav-bar/side-nav-bar.component.css")]
        })
    ], SideNavBarComponent);
    return SideNavBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/icons/search-icon/search-icon.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/icons/search-icon/search-icon.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pY29ucy9zZWFyY2gtaWNvbi9zZWFyY2gtaWNvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/icons/search-icon/search-icon.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/icons/search-icon/search-icon.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIconComponent", function() { return SearchIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchIconComponent = /** @class */ (function () {
    function SearchIconComponent() {
    }
    SearchIconComponent.prototype.ngOnInit = function () {
    };
    SearchIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-icon',
            template: __webpack_require__(/*! raw-loader!./search-icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/icons/search-icon/search-icon.component.html"),
            styles: [__webpack_require__(/*! ./search-icon.component.css */ "./src/app/shared/icons/search-icon/search-icon.component.css")]
        })
    ], SearchIconComponent);
    return SearchIconComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_side_nav_bar_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/side-nav-bar/side-nav-bar.component */ "./src/app/shared/components/side-nav-bar/side-nav-bar.component.ts");
/* harmony import */ var _components_form_error_info_form_error_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/form-error-info/form-error-info.component */ "./src/app/shared/components/form-error-info/form-error-info.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _icons_search_icon_search_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/search-icon/search-icon.component */ "./src/app/shared/icons/search-icon/search-icon.component.ts");
/* harmony import */ var _Pipes_custom_datePipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pipes/custom.datePipe */ "./src/app/shared/Pipes/custom.datePipe.ts");









// const routes: Routes = [
//     {
//         path: '',
//         component: WalletstatementComponent
//     }
// ];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
            // exports: [RouterModule],
            declarations: [_components_side_nav_bar_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideNavBarComponent"], _components_form_error_info_form_error_info_component__WEBPACK_IMPORTED_MODULE_4__["FormErrorInfoComponent"], _icons_search_icon_search_icon_component__WEBPACK_IMPORTED_MODULE_7__["SearchIconComponent"], _Pipes_custom_datePipe__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipe"]],
            exports: [_icons_search_icon_search_icon_component__WEBPACK_IMPORTED_MODULE_7__["SearchIconComponent"], _Pipes_custom_datePipe__WEBPACK_IMPORTED_MODULE_8__["CustomDatePipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-search-search-module-es5.js.map