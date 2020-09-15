(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-create-quote-create-quote-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/create-quote/create-quote.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/create-quote/create-quote.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heading-top\">New Quote</div>\r\n\r\n<div class=\"container-box\">\r\n  <div class=\"heading-mid\">Add Details</div>\r\n\r\n  <div class=\"row border-bottom\">\r\n    <div class=\"col-lg-12 col-sm-12 col-md-12 no-padding\">\r\n      <div class=\"heading-low\">Customer Details\r\n        <a type=\"button\" aria-expanded=\"false\" class=\"bTset\" data-toggle=\"collapse\" data-target=\"#filterId\">\r\n          <i class=\"fas fa-chevron-down\"></i>\r\n          <i class=\"fas fa-chevron-up\"></i>\r\n        </a></div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-sm-6 col-md-6\"></div>\r\n  </div>\r\n  <div id=\"filterId\" class=\"\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-2 col-sm-2 col-md-2\"></div>\r\n      <div class=\"col-lg-6 col-sm-6 col-md-6 quote-fields\">\r\n        <div class=\"text-right search-modeltex\">\r\n          <a data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n            <i class=\"fa fa-search\" aria-header=\"true\"></i>Search Existing\r\n            Customer</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 col-md-8 col-sm-8 quote-fields\">\r\n        <select name=\"customerType\" [(ngModel)]=\"customerTypes\" (change)=\"\r\n      onChangeCustomerType(customerTypes)\r\n    \" class=\"form-control field-class\" #customerType=\"ngModel\">\r\n          <option value=\"\" disabled selected hidden>Customer Type</option>\r\n          <option *ngFor=\"let customerType of customerTypeList\">{{ customerType.type }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <select class=\"shareRowIn form-control field-class\" name=\"salutation\" #salutation=\"ngModel\" [(ngModel)]=\"salutations\"\r\n         >\r\n          <option value=\"\" disabled selected hidden>Salutation</option>\r\n          <option *ngFor=\"let salutation of salutationList\">{{\r\n                      salutation.name\r\n                    }}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"customerName\" placeholder=\"First Name\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.firstName\" name=\"customerName\" #customerName=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"middleName\" placeholder=\"Middle Name\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.middleName\" name=\"middleName\" #middleName=\"ngModel\" />\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"LastName1\" placeholder=\"Last Name*\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.lastName\" name=\"LastName1\" #LastName1=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"date\" class=\"form-control quote-textbox\" id=\"date\" placeholder=\"Date Of Birth\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.dob\" name=\"date\" #date=\"ngModel\" />\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"email\" class=\"form-control quote-textbox\" id=\"email\" placeholder=\"Email ID*\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.emailId\" name=\"email\" #email=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"email\" class=\"form-control quote-textbox\" id=\"AlternateEmail\" placeholder=\"Alternate Email ID\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.secondaryEmailId\" name=\"AlternateEmail\"\r\n          #AlternateEmail=\"ngModel\" />\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"mobileNo\" placeholder=\"Mobile Number*\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.contactDetails.mobileNo\" name=\"mobileNo\" #mobileNo=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"alternateMobileNo\"\r\n          placeholder=\"Alternate Mobile Number\" [(ngModel)]=\"createQuoteData.objCVCustomer.contactDetails.mobileNo2\"\r\n          name=\"alternateMobileNo\" #alternateMobileNo=\"ngModel\" />\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <select class=\"form-control field-class\">\r\n          <option>GST Exeption Category</option>\r\n          <option>1</option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option>4</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"PANNumber\" placeholder=\"PAN Number\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.contactDetails.mobileNo2\" name=\"PANNumber\" #PANNumber=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row border-bottom\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 no-padding\">\r\n      <div class=\"heading-low\">Mailing Address\r\n        <a type=\"button\" aria-expanded=\"false\" class=\"bTset\" data-toggle=\"collapse\" data-target=\"#filterId2\">\r\n          <i class=\"fa fa-chevron-up\"></i>\r\n          <i class=\"fa fa-chevron-down\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <div id=\"filterId2\" class=\"\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"addressLine1\" placeholder=\"Address Line 1*\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.mailLocation.addressLine1\" name=\"addressLine1\"\r\n          #addressLine1=\"ngModel\" />\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"addressLine2\" placeholder=\"Address Line 2\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.mailLocation.addressLine2\" name=\"addressLine2\"\r\n          #addressLine2=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"areaVillageName\" placeholder=\"Area/Locality*\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.mailLocation.areaVillageName\" name=\"areaVillageName\"\r\n          #areaVillageName=\"ngModel\" />\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"cityDistrictName\" placeholder=\"Town/City*\"\r\n          [(ngModel)]=\"\r\n          createQuoteData.objCVCustomer.mailLocation.cityDistrictName\r\n        \" name=\"cityDistrictName\" #cityDistrictName=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"division\" placeholder=\"District\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.mailLocation.division\" name=\"division\" #division=\"ngModel\" />\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"stateName\" placeholder=\"State\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.mailLocation.stateName\" name=\"stateName\" #stateName=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n        <input type=\"text\" class=\"form-control quote-textbox\" id=\"pinCode\" placeholder=\"Pincode\"\r\n          [(ngModel)]=\"createQuoteData.objCVCustomer.mailLocation.pinCode\" name=\"pinCode\" #pinCode=\"ngModel\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"modal-footer\">\r\n      <div class=\"col-md-5\"></div>\r\n      <div class=\"col-md-4\">\r\n        <button type=\"button\" (click)=\"createQuoteDetails()\" class=\"btn btn-primary quote-search-button\">\r\n          Submit\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <h3 class=\"modal-title search-heading\" id=\"exampleModalLabel\">\r\n              <span>Search existing customer</span>\r\n            </h3>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"removeModelData()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\" style=\"\">\r\n          <div class=\"col-md-8\">\r\n            <div *ngIf=\"isValidated\" class=\"row error\">\r\n\r\n              <div calss=\"error-text\"><span class=\"search-icon\"><i class=\"fa fa-info-circle\"\r\n                    aria-hidden=\"true\"></i></span>\r\n                <span> At least one search criteria is mandatory</span></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin: 18px 2px;\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n                <input type=\"text\" class=\"form-control quote-textbox\" id=\"customerName1\" placeholder=\"First Name\"\r\n                  [(ngModel)]=\"searchParams.strLVCustomerName\" name=\"customerName1\" #customerName1=\"ngModel\" />\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n                <!-- <input\r\n                  type=\"text\"\r\n                  class=\"form-control quote-textbox\"\r\n                  id=\"LastName\"\r\n                  placeholder=\"Last Name\"\r\n                  [(ngModel)]=\"searchParams.strLVCustomerName\"\r\n                  name=\"LastName\"\r\n                  #LastName=\"ngModel\"\r\n                /> -->\r\n                <input type=\"text\" class=\"form-control quote-textbox\" id=\"LastName\" placeholder=\"Last Name\"\r\n                  name=\"LastName\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin: 18px 2px;\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n                <input type=\"text\" class=\"form-control field-class quote-textbox\" placeholder=\"Mobile Number\" />\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields\">\r\n                <input type=\"text\" class=\"form-control field-class quote-textbox\" placeholder=\"Email Id\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"margin: 18px 2px;\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields-no-padding\">\r\n                <input type=\"text\" class=\"form-control quote-textbox\" id=\"CustomerId\" placeholder=\"Customer Id\"\r\n                  [(ngModel)]=\"searchParams.strLVCustomerId\" name=\"CustomerId\" #CustomerId=\"ngModel\" />\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 quote-fields-no-padding\">\r\n                <input type=\"text\" class=\"form-control field-class quote-textbox\" placeholder=\"Policy/Quoate Number\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\"></div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" (click)=\"validations()\" class=\"btn btn-primary quote-search-button-model\">\r\n                Search\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"customerDetails != null\">\r\n          <div class=\"table-count\">\r\n            Found {{ customerDetails.length }} Results\r\n          </div>\r\n          <div class=\"customerData-search\">\r\n            <table class=\"table1\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Customer ID</th>\r\n                  <th scope=\"col\">Type</th>\r\n                  <th scope=\"col\">First Name</th>\r\n                  <th scope=\"col\">Last Name</th>\r\n                  <th scope=\"col\">Mobile</th>\r\n                  <th scope=\"col\">Email ID</th>\r\n                  <th scope=\"col\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of customerDetails\" class=\"info\">\r\n                  <td>{{ item.customerID }}</td>\r\n                  <td>{{ item.customerType }}</td>\r\n                  <td>{{ item.name }}</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td> <button class=\"model-button\" type=\"button\" (click)=\"getCustomerDetailsById(item.customerID)\"\r\n                      data-dismiss=\"modal\">Select</button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/create-quote/create-quote.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/create-quote/create-quote.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3JlYXRlLXF1b3RlL2NyZWF0ZS1xdW90ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/create-quote/create-quote.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/create-quote/create-quote.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuoteComponent", function() { return CreateQuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");





let CreateQuoteComponent = class CreateQuoteComponent {
    constructor(datepipe, createQuoteService, commonService) {
        this.datepipe = datepipe;
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
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
        this.searchParamsByID = {
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
        this.isValidated = false;
        this.createQuoteData = {
            strLVTokenID: this.token,
            objCVCustomer: {
                affiliationFlag: "",
                annualIncome: "",
                bloodGroup: "",
                businessName: "",
                chequeAcceptence: "",
                contactNo: "",
                contactPerson: "",
                country: "",
                countryName: "",
                countryofBirth: "",
                countryofBirthName: "",
                customerInitials: "",
                customerStatus: "",
                customerTier: 0,
                customerTierList: {
                    keyValuePairList: [
                        {
                            id: "",
                            name: "",
                        },
                    ],
                },
                customerTierName: "",
                customerType: "I",
                customerUniqueID: "",
                customerUniqueNumber: "",
                designation: "0",
                doNotDirectory: 0,
                domainname: "",
                drivingLicenseno: "",
                fatherName: "",
                firstName: "",
                industry: "",
                industryOthers: "",
                interEmpTag: "",
                intermediaryId: "",
                isBlackListedLogicRequired: false,
                isGlobalClient: false,
                isJapaneseClient: false,
                isParent: false,
                isThinCustomer: false,
                lastName: "",
                maidenName: "",
                maritalStatus: "Married",
                masterPinCode: "",
                middleName: "",
                motherName: "",
                nationality: "Indian",
                occupation: 0,
                officeExtn: "",
                paidUpCapital: "0",
                parentCustomerCode: "",
                parentCustomerName: "",
                passportNo: "",
                paymentMode: "",
                permanentLocation: {
                    apartmentName: "",
                    isForeignLoc: 0,
                    locationCode: "23000077212",
                    streetName: "",
                    titleBarName: "",
                    addressLine1: "AddressLine1",
                    addressLine2: "AddressLine2",
                    addressLine3: "AddressLine3",
                    areaVillageCode: "",
                    areaVillageName: "",
                    cityDistrictCode: "100033",
                    cityDistrictName: "SIDDIPET",
                    contactDetails: {
                        faxISD: "",
                        faxNo: "12",
                        faxSTD: "10",
                        landLineISD: "91",
                        landLineNo: "67001222",
                        landLineSTD: "",
                        mobileISD: "91",
                        mobileISD2: "",
                        mobileISD3: "",
                        mobileNo: "9876543211",
                        mobileNo2: "",
                        mobileNo3: "",
                    },
                    division: "",
                    divisionCode: "",
                    endDate: "",
                    errorText: "",
                    id: "",
                    name: "",
                    pinCode: "",
                    pinCodeLocality: "callout",
                    region: "South Region",
                    startDate: "02/06/2020",
                    stateCode: "37",
                    stateName: "",
                    userID: "N1527909",
                },
                permanentLocationCode: "23000077212",
                permanentLocationSameAsMailLocation: true,
                pincodeLocality: "",
                registrationNumber: "",
                registrationOffice: "",
                remarks: "",
                salutation: "MR",
                salutationOthers: "",
                secondaryEmailId: "",
                serviceTaxRegNo: "",
                tanNo: "",
                typeOfCompany: "",
                appSessionID: "",
                bankDetails: {
                    bankAccNumber: "",
                    bankAccounttype: "0",
                    bankBranchCode: "0",
                    bankBranchName: "",
                    bankCode: 0,
                    bankName: "",
                },
                contactDetails: {
                    faxISD: "",
                    faxNo: "12",
                    faxSTD: "10",
                    landLineISD: "91",
                    landLineNo: "67001222",
                    landLineSTD: "",
                    mobileISD: "91",
                    mobileISD2: "",
                    mobileISD3: "",
                    mobileNo: "",
                    mobileNo2: "",
                    mobileNo3: "",
                },
                dob: "01/01/1970",
                emailId: "",
                endDate: "dd/mm/yyyy",
                errorText: "",
                gender: "",
                id: "",
                mailLocation: {
                    apartmentName: "",
                    isForeignLoc: 0,
                    locationCode: "23000077212",
                    streetName: "",
                    titleBarName: "",
                    addressLine1: "",
                    addressLine2: "",
                    addressLine3: "AddressLine3",
                    areaVillageCode: "",
                    areaVillageName: "",
                    cityDistrictCode: "100033",
                    cityDistrictName: "",
                    contactDetails: {
                        faxISD: "0",
                        faxNo: "12",
                        faxSTD: "10",
                        landLineISD: "91",
                        landLineNo: "675887645",
                        landLineSTD: "91",
                        mobileISD: "",
                        mobileISD2: "",
                        mobileISD3: "",
                        mobileNo: "9876543210",
                        mobileNo2: "9999999999",
                        mobileNo3: "9999999999",
                    },
                    division: "",
                    divisionCode: "",
                    endDate: "",
                    errorText: "",
                    id: "",
                    name: "",
                    pinCode: "",
                    pinCodeLocality: "GAJWEL",
                    region: "South Region",
                    startDate: "02/06/2020",
                    stateCode: "37",
                    stateName: "",
                    userID: "N1527909",
                },
                mailLocationCode: "23000077212",
                name: "INDO AUTOTECH LIMITED",
                panNo: "SSYHY1111A",
                sessionID: "",
                startDate: "02/06/2020",
                userID: "N1527909",
                userRole: "",
            },
            addCustomerIfNotDuplicate: true,
        };
        this.customerTypes = '';
        this.salutations = '';
        this.gettoken();
    }
    getCustomerTypeList() {
        this.commonService.getCustomerType().subscribe((res) => {
            this.customerTypeList = res;
        });
    }
    onChangeCustomerType(customerType) {
        if (customerType == "Individual") {
            this.commonService.getSalutation(customerType).subscribe((res) => {
                this.salutationList = res;
            });
        }
        else {
            this.salutationList = [
                {
                    name: "No Options For selected Customer Type",
                },
            ];
        }
    }
    ngOnInit() {
        this.getCustomerTypeList();
        // this.createQuoteService.getToken().subscribe(
        //   (res) => {
        //     this.searchParamsByID.strLVTokenID=res.toString();
        //     this.createQuoteData.strLVTokenID=res.toString();
        //   },
        //   (error) => () => {
        //   }
        // );
    }
    gettoken() {
        this.commonService.getToken().subscribe((res) => {
            this.token = res;
        }, (error) => {
            this.token = error.error.text;
        });
    }
    validations() {
        if (this.searchParams.strLVCustomerName == "" &&
            this.searchParams.strLVCustomerId == "") {
            this.isValidated = true;
        }
        else {
            this.isValidated = false;
            this.getCustomerDetails();
        }
    }
    getCustomerDetails() {
        this.searchParams.strLVTokenID = this.token;
        if (!this.isValidated) {
            this.createQuoteService
                .searchCustomerDetails(this.searchParams)
                .subscribe((res) => {
                this.customerDetails = res;
                this.customerDetails = this.customerDetails.lovtypes.lovtype;
            }, (error) => () => {
            });
        }
    }
    removeModelData() {
        this.customerDetails = null;
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
    }
    createQuoteDetails() {
        this.createQuoteData.objCVCustomer.dob = this.datepipe.transform(this.createQuoteData.objCVCustomer.dob, "dd/MM/yyyy");
        this.createQuoteData.strLVTokenID = this.token;
        this.createQuoteService.createQuoteDetails(this.createQuoteData).subscribe((res) => {
            this.createQuoteResponse = res;
        }, (error) => {
            alert(error.error.text);
        });
    }
    getCustomerDetailsById(customerID) {
        this.searchParamsByID.strLVTokenID = this.token;
        this.searchParamsByID.strLVCustomerId = customerID;
        this.createQuoteService
            .getCustomerDetailsById(this.searchParamsByID)
            .subscribe((res) => {
            this.customerDetailsBySelect = res;
            this.customerDetailsBySelect = this.customerDetailsBySelect.lovtypes.lovtype[0];
            this.createQuoteData.objCVCustomer.mailLocation.areaVillageName = this.customerDetailsBySelect.areaVillage;
            this.createQuoteData.objCVCustomer.mailLocation.cityDistrictName = this.customerDetailsBySelect.cityDistrict;
            this.createQuoteData.objCVCustomer.customerUniqueID = this.customerDetailsBySelect.customerID;
            this.createQuoteData.objCVCustomer.firstName = this.customerDetailsBySelect.customerName;
            this.createQuoteData.objCVCustomer.customerType = "I";
            this.createQuoteData.objCVCustomer.mailLocation.pinCode = this.customerDetailsBySelect.pinCode;
            this.createQuoteData.objCVCustomer.mailLocation.pinCodeLocality = this.customerDetailsBySelect.pinCodeLocality;
            this.createQuoteData.objCVCustomer.mailLocation.stateName = this.customerDetailsBySelect.state;
            this.removeModelData();
        }, (error) => () => {
        });
    }
};
CreateQuoteComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_3__["CreateQuoteService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
CreateQuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // selector: 'app-create-quote',
        template: __webpack_require__(/*! raw-loader!./create-quote.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/create-quote/create-quote.component.html"),
        styles: [__webpack_require__(/*! ./create-quote.component.css */ "./src/app/modules/create-quote/create-quote.component.css")]
    })
], CreateQuoteComponent);



/***/ }),

/***/ "./src/app/modules/create-quote/create-quote.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/create-quote/create-quote.module.ts ***!
  \*************************************************************/
/*! exports provided: CreateQuoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuoteModule", function() { return CreateQuoteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_quote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-quote.component */ "./src/app/modules/create-quote/create-quote.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    {
        path: '',
        component: _create_quote_component__WEBPACK_IMPORTED_MODULE_3__["CreateQuoteComponent"]
    }
];
let CreateQuoteModule = class CreateQuoteModule {
};
CreateQuoteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [_create_quote_component__WEBPACK_IMPORTED_MODULE_3__["CreateQuoteComponent"]]
    })
], CreateQuoteModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-create-quote-create-quote-module-es2015.js.map