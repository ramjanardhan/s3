(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/profile/editprodisplay/editprodisplay.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/profile/editprodisplay/editprodisplay.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form #userDetailsForm=\"ngForm\">\r\n    <div class=\"main-content-box\">\r\n      <div class=\"collapse-panel-header\">\r\n        <div class=\"collapse-panel-header-text-lg\">Personal Details</div>\r\n        <div>\r\n          <i class=\"fa fa-angle-up icon-style-md custom-icon-style\" data-toggle=\"collapse\"\r\n            data-target=\"#personaldetails\" aria-hidden=\"true\" (click)=\"rotateIcon(1)\"\r\n            [ngClass]=\"rotateIcon1 ? 'rotate' : ''\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"section-line\"></div>\r\n      <div id=\"personaldetails\" class=\"collapse in\">\r\n        <div class=\"row row-padding\">\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">First Name*</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\" [(ngModel)]=\"userDetails.name\"\r\n              name=\"firstName\" #firstName=\"ngModel\" />\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">Middle Name</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-padding\">\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">Last Name*</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">Date of Birth*</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\" [(ngModel)]=\"userDetails.dob\"\r\n              name=\"dob\" #dob=\"ngModel\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row row-padding\">\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">PAN Number*</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\" [(ngModel)]=\"userDetails.panNo\"\r\n              name=\"panNo\" #panNo=\"ngModel\" />\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">Aadhar Number*</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\" [(ngModel)]=\"userDetails.uidno\"\r\n              name=\"uidno\" #uidno=\"ngModel\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-padding\">\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">GSTIN Number*</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\"\r\n              [(ngModel)]=\"userDetails.serviceTaxRegistrationNo\" name=\"GSTIN\" #GSTIN=\"ngModel\" />\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div>\r\n            <h2 class=\"text-md-bold\">Contact Details</h2>\r\n          </div>\r\n          <div class=\"section-line\"></div>\r\n          <div class=\"row row-padding\">\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">Mobile Number*</label>\r\n              <input type=\"text\" disabled class=\"form-control custom-form-control\"\r\n                [(ngModel)]=\"userDetails.contactDetails.mobileNo\" name=\"mobileNumber\" #mobileNumber=\"ngModel\" />\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">Alternate Mobile Number</label>\r\n              <input type=\"text\" value=\"\" class=\"form-control custom-form-control\" name=\"alternateMobile\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"row row-padding\">\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">Email Id*</label>\r\n              <input type=\"text\" disabled class=\"form-control custom-form-control\" [(ngModel)]=\"userDetails.emailId\"\r\n                name=\"emailId\" #emailId=\"ngModel\" />\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">Alternate Email Id</label>\r\n              <input type=\"text\" class=\"form-control custom-form-control\" name=\"alternateEmailId\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"row row-padding\">\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">Address Line 01*</label>\r\n              <input type=\"text\" disabled class=\"form-control custom-form-control\"\r\n                [(ngModel)]=\"userDetails.mailLocation.addressLine1\" name=\"addressLine1\" #addressLine1=\"ngModel\" />\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">Address Line 02</label>\r\n              <input type=\"text\" disabled class=\"form-control custom-form-control\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"row row-padding\">\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">Picode*</label>\r\n              <input type=\"text\" disabled class=\"form-control custom-form-control\" name=\"pinCode\"\r\n                [(ngModel)]=\"userDetails.mailLocation.pinCode\" #pinCode=\"ngModel\" />\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">City*</label>\r\n              <input type=\"text\" disabled class=\"form-control custom-form-control\" name=\"city\"\r\n                [(ngModel)]=\"userDetails.mailLocation.pinCodeLocality\" #city=\"ngModel\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"row row-padding\">\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">State*</label>\r\n              <input type=\"text\" disabled class=\"form-control custom-form-control\" name=\"state\"\r\n                [(ngModel)]=\"userDetails.mailLocation.stateName\" #state=\"ngModel\" />\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">District*</label>\r\n              <input type=\"text\" disabled class=\"form-control custom-form-control\" name=\"district\"\r\n                [(ngModel)]=\"userDetails.mailLocation.cityDistrictName\" #district=\"ngModel\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div>\r\n            <h2 class=\"text-md-bold\">Emergency Contact Details</h2>\r\n          </div>\r\n          <div class=\"section-line\"></div>\r\n          <div class=\"row row-padding\">\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">Name*</label>\r\n              <input type=\"text\" class=\"form-control custom-form-control\" name=\"emergencyContactName\"\r\n                [(ngModel)]=\"userDetails.emergencyContactPersonName\" #emergencyContactName=\"ngModel\" />\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n              <label class=\"text-sm-light custom-label-style\">Mobile Number*</label>\r\n              <input type=\"text\" class=\"form-control custom-form-control\" name=\"emergencyContactNumber\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"main-content-box\">\r\n      <div class=\"collapse-panel-header\">\r\n        <div class=\"collapse-panel-header-text-lg\">My Bank Account Details</div>\r\n        <div>\r\n          <i class=\"fa fa-angle-up icon-style-md custom-icon-style\" data-toggle=\"collapse\" data-target=\"#bankdetails\"\r\n            aria-hidden=\"true\" (click)=\"rotateIcon(2)\" [ngClass]=\"rotateIcon2 ? 'rotate' : ''\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"section-line\"></div>\r\n      <div id=\"bankdetails\" class=\"collapse in\">\r\n        <div class=\"row row-padding\">\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">Account Number*</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <div>\r\n              <label class=\"text-sm-light custom-label-style\">Account Type</label>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n                <div class=\"radio-box\">\r\n                  <input type=\"radio\" value=\"\" name=\"accountType\" class=\"custom-form-radio-control\" disabled />\r\n                  <label for=\"accountType\" class=\"radio-label-md\">Savings</label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n                <div class=\"radio-box\">\r\n                  <input type=\"radio\" value=\"\" name=\"accountType\" class=\"custom-form-radio-control\" disabled checked />\r\n                  <label for=\"accountType\" class=\"radio-label-md\">Current</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-padding\">\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">IFSC code*</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\"\r\n              [(ngModel)]=\"userDetails.bankDetails.ifsccode\" name=\"ifscCode\" #ifscCode=\"ngModel\" />\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">Beneficiary Bank Name</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\"\r\n              [(ngModel)]=\"userDetails.bankDetails.bankName\" name=\"beneficiaryBankName\"\r\n              #beneficiaryBankName=\"ngModel\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-padding\">\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">MICR Code</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\"\r\n              [(ngModel)]=\"userDetails.bankDetails.micrcode\" name=\"micrCode\" #micrCode=\"ngModel\" />\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <label class=\"text-sm-light custom-label-style\">Beneficiary Branch Name</label>\r\n            <input type=\"text\" disabled class=\"form-control custom-form-control\"\r\n              [(ngModel)]=\"userDetails.bankDetails.bankBranchName\" name=\"beneficiaryBranchName\"\r\n              #beneficiaryBranchName=\"ngModel\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row row-padding btn-area\">\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\"></div>\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12 row padding-right-0\">\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12 btn-cancel-mb\">\r\n              <button class=\"btn btn-white\" data-toggle=\"modal\" data-target=\"#confirmation-modal\">\r\n                Cancel\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6 col-xs-12 padding-right-0\">\r\n              <button class=\"btn btn-blue\" (click)=\"saveUserProfileDetails(userDetailsForm)\">\r\n                Save\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- confirmation modal -->\r\n<div class=\"modal fade\" id=\"confirmation-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"close-btn\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"text-md-regular\">\r\n          <div>Unsaved changes will be discarded.</div>\r\n          <div>Do you want to continue?</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer row\">\r\n        <div class=\"col-md-5 col-lg-5\">\r\n          <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\" routerLink=\"/my-profile\">\r\n            Yes\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-5 col-lg-5\">\r\n          <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">\r\n            No\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/profile/main-profile/main-profile.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/profile/main-profile/main-profile.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n    <div class=\"page-top-links\">\r\n      <a [routerLink]=\"['editprofile']\"\r\n        ><i class=\"fa fa-pencil icon-margin\" aria-hidden=\"true\"></i\r\n        ><span class=\"mr-5\">Edit Profile</span></a\r\n      >\r\n      <a routerLink=\"\" routerLinkActive=\"active\">\r\n        <i class=\"fa fa-lock icon-margin\" aria-hidden=\"true\"></i\r\n        ><span class=\"\">Change Password</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"main-content-box\">\r\n    <div class=\"collapse-panel-header\">\r\n      <div class=\"collapse-panel-header-text-lg\">Personal Details</div>\r\n      <div>\r\n        <i\r\n          class=\"fa fa-angle-down icon-style-md custom-icon-style\"\r\n          data-toggle=\"collapse\"\r\n          data-target=\"#personaldetails\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"rotateIcon(1)\"\r\n          [ngClass]=\"rotateIcon1 ? 'rotate' : ''\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"section-line\"></div>\r\n    <div id=\"personaldetails\" class=\"collapse\">\r\n      <div class=\"row row-margin\">\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">First Name</div>\r\n          <!-- <div class=\"text-md-regular\">{{ userDetails.name }}</div> -->\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">Middle Name</div>\r\n          <div class=\"text-md-regular\"></div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">Last Name</div>\r\n          <div class=\"text-md-regular\"></div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">Date of Birth</div>\r\n          <div class=\"text-md-regular\">{{ userDetails.dob }}</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row-margin\">\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">PAN Number</div>\r\n          <div class=\"text-md-regular\">{{ userDetails.panNo }}</div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">Aadhar Number</div>\r\n          <div class=\"text-md-regular\">{{ userDetails.uidno }}</div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">GSTIN Number</div>\r\n          <div class=\"text-md-regular\">\r\n            {{ userDetails.serviceTaxRegistrationNo }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div><h2 class=\"text-md-bold\">Contact Details</h2></div>\r\n        <div class=\"section-line\"></div>\r\n        <div class=\"row row-margin\">\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n            <div class=\"text-sm-light\">Mobile Number</div>\r\n            <div class=\"text-md-regular\">\r\n              {{ userDetails.contactDetails.mobileNo }}\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n            <div class=\"text-sm-light\">Alternate Mobile Number</div>\r\n            <div class=\"text-md-regular\"></div>\r\n          </div>\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n            <div class=\"text-sm-light\">Email Id</div>\r\n            <div class=\"text-md-regular\">{{ userDetails.emailId }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row row-margin\">\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n            <div class=\"text-sm-light\">Alternate Email Id</div>\r\n            <div class=\"text-md-regular\">----</div>\r\n          </div>\r\n          <div class=\"col-md-6 col-lg-6 col-xs-12\">\r\n            <div class=\"text-sm-light\">Address Line 01</div>\r\n            <div class=\"text-md-regular\">\r\n              {{ userDetails.mailLocation.addressLine1 }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div><h2 class=\"text-md-bold\">Emergency Contact Details</h2></div>\r\n        <div class=\"section-line\"></div>\r\n        <div class=\"row row-margin\">\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n            <div class=\"text-sm-light\">Name</div>\r\n            <div class=\"text-md-regular\">\r\n              {{ userDetails.emergencyContactPersonName }}\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n            <div class=\"text-sm-light\">Mobile Number</div>\r\n            <div class=\"text-md-regular\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"main-content-box\">\r\n    <div class=\"collapse-panel-header\">\r\n      <div class=\"collapse-panel-header-text-lg\">My Official Details</div>\r\n      <div>\r\n        <i\r\n          class=\"fa fa-angle-down icon-style-md custom-icon-style\"\r\n          data-toggle=\"collapse\"\r\n          data-target=\"#officedetails\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"rotateIcon(2)\"\r\n          [ngClass]=\"rotateIcon2 ? 'rotate' : ''\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"section-line\"></div>\r\n    <div id=\"officedetails\" class=\"collapse\">\r\n      <div class=\"row row-margin\">\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">IMD Code</div>\r\n          <div class=\"text-md-regular\">{{ userDetails.id }}</div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">IRDAI License</div>\r\n          <div class=\"text-md-regular\">{{ userDetails.licenseNo }}</div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">License Expiry Date</div>\r\n          <div class=\"text-md-regular\">20/07/2022</div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">IMD Type</div>\r\n          <div class=\"text-md-regular\">{{ userDetails.imdType }}</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row-margin\">\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">Channel</div>\r\n          <div class=\"text-md-regular\">Agency</div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">Servicing Branch</div>\r\n          <div class=\"text-md-regular\">LGI Mumbai</div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div><h2 class=\"text-md-bold\">Sales/Relationship Manager</h2></div>\r\n        <div class=\"section-line\"></div>\r\n        <div class=\"row row-margin\">\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n            <div class=\"text-sm-light\">Name</div>\r\n            <div class=\"text-md-regular\">\r\n              {{ userDetails.developmentOfficerName }}\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n            <div class=\"text-sm-light\">Designation</div>\r\n            <div class=\"text-md-regular\"></div>\r\n          </div>\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n            <div class=\"text-sm-light\">Contact</div>\r\n            <div class=\"text-md-regular\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div><h2 class=\"text-md-bold\">Products</h2></div>\r\n        <div class=\"section-line\"></div>\r\n        <div class=\"row row-margin\">\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\"></div>\r\n          <div class=\"col-md-3 col-lg-3 col-xs-12\"></div>\r\n          <div class=\"col-md-2 col-lg-2 col-xs-6 text-center\"></div>\r\n          <div class=\"col-md-6 col-lg-6 col-xs-6 text-right\">\r\n            <i\r\n              class=\"fa fa-plus-circle disp-inline-block icon-margin\"\r\n              aria-hidden=\"true\"\r\n            ></i>\r\n            <div class=\"disp-inline-block text-md-regular\">\r\n              Request product\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div><h2 class=\"text-md-bold\">Transaction Type</h2></div>\r\n        <div class=\"section-line\"></div>\r\n        <div class=\"row row-margin\">\r\n          <div class=\"col-md-2 col-lg-2 col-xs-6 text-center\">\r\n            <div class=\"border-text\">Online</div>\r\n          </div>\r\n          <div class=\"col-md-2 col-lg-2 col-xs-6 text-center\">\r\n            <div class=\"border-text\">Manual</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div><h2 class=\"text-md-bold\">Payment Mode</h2></div>\r\n        <div class=\"section-line\"></div>\r\n        <div class=\"row row-margin\">\r\n          <div class=\"col-md-2 col-lg-2 col-xs-6 text-center\">\r\n            <div class=\"border-text\">Online</div>\r\n          </div>\r\n          <div class=\"col-md-2 col-lg-2 col-xs-6 text-center\">\r\n            <div class=\"border-text\">Cash</div>\r\n          </div>\r\n          <div class=\"col-md-2 col-lg-2 col-xs-6 text-center\"></div>\r\n          <div class=\"col-md-6 col-lg-6 col-xs-6 text-right\">\r\n            <i\r\n              class=\"fa fa-plus-circle disp-inline-block icon-margin\"\r\n              aria-hidden=\"true\"\r\n            ></i>\r\n            <div class=\"disp-inline-block text-md-regular\">\r\n              Request payment mode\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"main-content-box\">\r\n    <div class=\"collapse-panel-header\">\r\n      <div class=\"collapse-panel-header-text-lg\">My Bank Account Details</div>\r\n      <div>\r\n        <i\r\n          class=\"fa fa-angle-down icon-style-md custom-icon-style\"\r\n          data-toggle=\"collapse\"\r\n          data-target=\"#bankAccountDetails\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"rotateIcon(3)\"\r\n          [ngClass]=\"rotateIcon3 ? 'rotate' : ''\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"section-line\"></div>\r\n    <div id=\"bankAccountDetails\" class=\"collapse\">\r\n      <div class=\"row row-margin\">\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">Account Number</div>\r\n          <div class=\"text-md-regular\">\r\n            {{ userDetails.bankDetails.bankAccNumber }}\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">Account Type</div>\r\n          <div class=\"text-md-regular\">\r\n            {{ userDetails.bankDetails.bankAccounttype }}\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">IFSC code</div>\r\n          <div class=\"text-md-regular\">\r\n            {{ userDetails.bankDetails.ifsccode }}\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">Beneficiary Bank Name</div>\r\n          <div class=\"text-md-regular\">\r\n            {{ userDetails.bankDetails.bankName }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-margin\">\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">MICR Code</div>\r\n          <div class=\"text-md-regular\">\r\n            {{ userDetails.bankDetails.micrcode }}\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-xs-12\">\r\n          <div class=\"text-sm-light\">Beneficiary Branch Name</div>\r\n          <div class=\"text-md-regular\">\r\n            {{ userDetails.bankDetails.bankBranchName }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/profile/editprodisplay/editprodisplay.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/profile/editprodisplay/editprodisplay.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content-box {\r\n  background: #ffffff;\r\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n  padding: 12px 28px;\r\n  margin: 18px 0px;\r\n}\r\n\r\n.collapse-panel-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 28px 0px 12px;\r\n}\r\n\r\n.collapse-panel-header-text-lg {\r\n  font-weight: 300;\r\n  font-size: 24px;\r\n  color: #343741;\r\n}\r\n\r\n.icon-style-md {\r\n  font-size: 28px !important;\r\n  color: #06748c;\r\n}\r\n\r\n.section-line {\r\n  border: 1px solid #c0bfc0;\r\n  margin-bottom: 18px;\r\n}\r\n\r\n.custom-form-control {\r\n  height: 50px;\r\n  border: 1px solid #919191;\r\n  border-radius: 3px;\r\n}\r\n\r\n.row-padding {\r\n  padding: 12px 0px;\r\n}\r\n\r\n.custom-label-style {\r\n  font-weight: 500 !important;\r\n  margin: 0px;\r\n}\r\n\r\n.text-md-bold {\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  color: #343741;\r\n}\r\n\r\n.text-sm-light {\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  color: #707070;\r\n}\r\n\r\n.text-md-regular {\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #343741;\r\n}\r\n\r\n.btn-white {\r\n  width: 100%;\r\n  height: 44px;\r\n  border: 1px solid #1a1446;\r\n  background-color: #ffffff;\r\n  box-shadow: 0px 3px 0 0 #c0bfc0;\r\n  border-radius: 3px;\r\n  font-weight: 700 !important;\r\n  font-size: 16px;\r\n}\r\n\r\n.btn-blue {\r\n  width: 100%;\r\n  height: 44px;\r\n  border: 1px solid #99e3ea;\r\n  background-color: #99e3ea;\r\n  box-shadow: 0px 3px 0 0 #06748c;\r\n  border-radius: 3px;\r\n  font-weight: 700 !important;\r\n  font-size: 16px;\r\n}\r\n\r\n.padding-right-0 {\r\n  padding-right: 0px;\r\n}\r\n\r\n.btn-area {\r\n  padding: 24px 0px;\r\n}\r\n\r\n.custom-form-radio-control {\r\n  height: 34px;\r\n  width: 36 px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.radio-label-md {\r\n  font-weight: 300;\r\n  font-size: 16px;\r\n  color: #707070;\r\n  margin-left: 8px;\r\n}\r\n\r\n.radio-box {\r\n  padding: 6px 12px;\r\n  background-color: #e6e6e6;\r\n  border: 1px solid #919191;\r\n  border-radius: 3px;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  margin: 0px;\r\n}\r\n\r\n#confirmation-modal .modal-body {\r\n  min-height: auto;\r\n}\r\n\r\n#confirmation-modal .modal-content {\r\n  padding: 24px 24px 36px 64px !important;\r\n}\r\n\r\n#confirmation-modal .modal-header {\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n#confirmation-modal .modal-dialog {\r\n  margin: 150px auto !important;\r\n  width: 455px;\r\n}\r\n\r\n#confirmation-modal .modal-footer {\r\n  padding-left: 15px;\r\n}\r\n\r\n#confirmation-modal .close-btn {\r\n  font-size: 54px;\r\n  color: #1a1446;\r\n}\r\n\r\n.rotate {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .btn-cancel-mb{\r\n    padding: 0px 0px 0px 15px !important;\r\n    margin: 0px 0px 36px 0px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL2VkaXRwcm9kaXNwbGF5L2VkaXRwcm9kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLG9DQUFvQztJQUNwQyx3QkFBd0I7RUFDMUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9lZGl0cHJvZGlzcGxheS9lZGl0cHJvZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudC1ib3gge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBwYWRkaW5nOiAxMnB4IDI4cHg7XHJcbiAgbWFyZ2luOiAxOHB4IDBweDtcclxufVxyXG5cclxuLmNvbGxhcHNlLXBhbmVsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMjhweCAwcHggMTJweDtcclxufVxyXG4uY29sbGFwc2UtcGFuZWwtaGVhZGVyLXRleHQtbGcge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjMzQzNzQxO1xyXG59XHJcbi5pY29uLXN0eWxlLW1kIHtcclxuICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogIzA2NzQ4YztcclxufVxyXG4uc2VjdGlvbi1saW5lIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzBiZmMwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxOTE5MTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5yb3ctcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMTJweCAwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tbGFiZWwtc3R5bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnRleHQtbWQtYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMzNDM3NDE7XHJcbn1cclxuLnRleHQtc20tbGlnaHQge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi50ZXh0LW1kLXJlZ3VsYXIge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzQzNzQxO1xyXG59XHJcblxyXG4uYnRuLXdoaXRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzFhMTQ0NjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMCAwICNjMGJmYzA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5idG4tYmx1ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OWUzZWE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5ZTNlYTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDAgMCAjMDY3NDhjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5wYWRkaW5nLXJpZ2h0LTAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4uYnRuLWFyZWEge1xyXG4gIHBhZGRpbmc6IDI0cHggMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWZvcm0tcmFkaW8tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIHdpZHRoOiAzNiBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5yYWRpby1sYWJlbC1tZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4ucmFkaW8tYm94IHtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MTkxOTE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbiNjb25maXJtYXRpb24tbW9kYWwgLm1vZGFsLWJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbn1cclxuI2NvbmZpcm1hdGlvbi1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjRweCAyNHB4IDM2cHggNjRweCAhaW1wb3J0YW50O1xyXG59XHJcbiNjb25maXJtYXRpb24tbW9kYWwgLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbiNjb25maXJtYXRpb24tbW9kYWwgLm1vZGFsLWRpYWxvZyB7XHJcbiAgbWFyZ2luOiAxNTBweCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDQ1NXB4O1xyXG59XHJcbiNjb25maXJtYXRpb24tbW9kYWwgLm1vZGFsLWZvb3RlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbiNjb25maXJtYXRpb24tbW9kYWwgLmNsb3NlLWJ0biB7XHJcbiAgZm9udC1zaXplOiA1NHB4O1xyXG4gIGNvbG9yOiAjMWExNDQ2O1xyXG59XHJcbi5yb3RhdGUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuYnRuLWNhbmNlbC1tYntcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDE1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAzNnB4IDBweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/profile/editprodisplay/editprodisplay.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/profile/editprodisplay/editprodisplay.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditprodisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprodisplayComponent", function() { return EditprodisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");





let EditprodisplayComponent = class EditprodisplayComponent {
    constructor(createQuoteService, commonService, router) {
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.router = router;
        this.userSaveDetails = {
            alternateemail: "",
            alternatemobilenumber: "9876543211",
            emergencycontactname: "Siva",
            emergencycontactnumber: "1234567890",
            imdCode: "BSC5036312",
            pan: "CRMPK5581S",
            token: this.token,
        };
        this.rotateIcon1 = false;
        this.rotateIcon2 = false;
        this.searchParams = {
            imdCode: "BSC5036312",
            token: "29655fbd-b944-464e-8d3d-b9f8830b53e2",
        };
        this.gettoken();
    }
    ngOnInit() { }
    rotateIcon(iconID) {
        switch (iconID) {
            case 1:
                this.rotateIcon1 = !this.rotateIcon1;
                break;
            case 2:
                this.rotateIcon2 = !this.rotateIcon2;
                break;
        }
    }
    gettoken() {
        this.commonService.getToken().subscribe((res) => {
            this.token = res;
            this.userProfileDetails();
        }, (error) => {
            this.token = error.error.text; // body
            this.userProfileDetails();
        });
    }
    userProfileDetails() {
        this.searchParams.token = this.token;
        this.createQuoteService.userProfileDetails(this.searchParams).subscribe((res) => {
            this.userDetails = res;
            console.log(this.userDetails);
        }, (error) => () => { });
    }
    saveUserProfileDetails(userdetails) {
        this.userSaveDetails.emergencycontactname = this.userDetails.emergencyContactPersonName;
        this.userSaveDetails.token = this.token;
        this.createQuoteService
            .saveUserProfileDetails(this.userSaveDetails)
            .subscribe((res) => { }, (error) => {
            this.router.navigate(["/my-profile"]);
        });
    }
};
EditprodisplayComponent.ctorParameters = () => [
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_2__["CreateQuoteService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditprodisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-editprodisplay",
        template: __webpack_require__(/*! raw-loader!./editprodisplay.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/profile/editprodisplay/editprodisplay.component.html"),
        styles: [__webpack_require__(/*! ./editprodisplay.component.css */ "./src/app/modules/profile/editprodisplay/editprodisplay.component.css")]
    })
], EditprodisplayComponent);



/***/ }),

/***/ "./src/app/modules/profile/main-profile/main-profile.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/profile/main-profile/main-profile.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* common styles */\r\n.main-content-box {\r\n  background: #ffffff;\r\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n  padding: 12px 28px;\r\n  margin: 18px 0px;\r\n}\r\n.collapse-panel-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 28px 0px 12px;\r\n}\r\n.collapse-panel-header-text-lg {\r\n  font-weight: 300;\r\n  font-size: 24px;\r\n  color: #343741;\r\n}\r\n.icon-style-md {\r\n  font-size: 28px !important;\r\n  color: #06748c;\r\n}\r\n.section-line {\r\n  border: 1px solid #c0bfc0;\r\n  margin-bottom: 18px;\r\n}\r\n.text-sm-light {\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  color: #707070;\r\n}\r\n.text-md-regular {\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #343741;\r\n}\r\n.text-md-bold {\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  color: #343741;\r\n}\r\n.row-margin {\r\n  margin-top: 28px;\r\n  margin-bottom: 32px;\r\n}\r\n/* end of common styles */\r\n.page-top-links {\r\n  text-align: right;\r\n  margin-top: 32px;\r\n}\r\n.page-top-links a {\r\n  text-decoration: none;\r\n  margin: 0px 24px;\r\n  font-size: 16px;\r\n  color: #343741;\r\n}\r\n.page-top-links a:last-child {\r\n  margin-right: 0px;\r\n}\r\n.icon-margin {\r\n  margin: 0px 8px;\r\n}\r\n.rotate {\r\n  transform: rotate(180deg);\r\n}\r\n.custom-icon-style {\r\n  padding-top: 6px;\r\n}\r\n.border-text {\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #000000;\r\n  padding: 8px 0px;\r\n  background-color: #ffffff;\r\n  border: 1px solid #c0bfc0;\r\n  border-radius: 3px;\r\n}\r\n.disp-inline-block {\r\n  display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL21haW4tcHJvZmlsZS9tYWluLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7RUFDRSxtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0EseUJBQXlCO0FBQ3pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvbWFpbi1wcm9maWxlL21haW4tcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29tbW9uIHN0eWxlcyAqL1xyXG4ubWFpbi1jb250ZW50LWJveCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIHBhZGRpbmc6IDEycHggMjhweDtcclxuICBtYXJnaW46IDE4cHggMHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2UtcGFuZWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAyOHB4IDBweCAxMnB4O1xyXG59XHJcbi5jb2xsYXBzZS1wYW5lbC1oZWFkZXItdGV4dC1sZyB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICMzNDM3NDE7XHJcbn1cclxuLmljb24tc3R5bGUtbWQge1xyXG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDY3NDhjO1xyXG59XHJcbi5zZWN0aW9uLWxpbmUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG4udGV4dC1zbS1saWdodCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLnRleHQtbWQtcmVndWxhciB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMzNDM3NDE7XHJcbn1cclxuLnRleHQtbWQtYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMzNDM3NDE7XHJcbn1cclxuLnJvdy1tYXJnaW4ge1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG4vKiBlbmQgb2YgY29tbW9uIHN0eWxlcyAqL1xyXG4ucGFnZS10b3AtbGlua3Mge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuLnBhZ2UtdG9wLWxpbmtzIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDBweCAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzM0Mzc0MTtcclxufVxyXG4ucGFnZS10b3AtbGlua3MgYTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmljb24tbWFyZ2luIHtcclxuICBtYXJnaW46IDBweCA4cHg7XHJcbn1cclxuLnJvdGF0ZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4uY3VzdG9tLWljb24tc3R5bGUge1xyXG4gIHBhZGRpbmctdG9wOiA2cHg7XHJcbn1cclxuLmJvcmRlci10ZXh0IHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiA4cHggMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYmZjMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmRpc3AtaW5saW5lLWJsb2NrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/profile/main-profile/main-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/profile/main-profile/main-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: MainProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProfileComponent", function() { return MainProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/create-quote-service */ "./src/app/core/services/create-quote-service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common-service */ "./src/app/core/services/common-service.ts");




let MainProfileComponent = class MainProfileComponent {
    constructor(createQuoteService, commonService) {
        this.createQuoteService = createQuoteService;
        this.commonService = commonService;
        this.rotateIcon1 = false;
        this.rotateIcon2 = false;
        this.rotateIcon3 = false;
        this.searchParams = {
            imdCode: "BSC5036312",
            token: this.token,
        };
        this.gettoken();
    }
    ngOnInit() { }
    rotateIcon(iconID) {
        switch (iconID) {
            case 1:
                this.rotateIcon1 = !this.rotateIcon1;
                break;
            case 2:
                this.rotateIcon2 = !this.rotateIcon2;
                break;
            case 3:
                this.rotateIcon3 = !this.rotateIcon3;
                break;
        }
    }
    userProfileDetails() {
        this.searchParams.token = this.token;
        this.createQuoteService.userProfileDetails(this.searchParams).subscribe((res) => {
            this.filtersLoaded = Promise.resolve(true);
            this.userDetails = res;
            console.log(this.userDetails);
        }, (error) => () => { });
    }
    gettoken() {
        this.commonService.getToken().subscribe((res) => {
            this.token = res;
            this.userProfileDetails();
        }, (error) => {
            this.token = error.error.text; // body
            this.userProfileDetails();
        });
    }
};
MainProfileComponent.ctorParameters = () => [
    { type: src_app_core_services_create_quote_service__WEBPACK_IMPORTED_MODULE_2__["CreateQuoteService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
MainProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-main-profile",
        template: __webpack_require__(/*! raw-loader!./main-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/profile/main-profile/main-profile.component.html"),
        styles: [__webpack_require__(/*! ./main-profile.component.css */ "./src/app/modules/profile/main-profile/main-profile.component.css")]
    })
], MainProfileComponent);



/***/ }),

/***/ "./src/app/modules/profile/profile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editprodisplay_editprodisplay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editprodisplay/editprodisplay.component */ "./src/app/modules/profile/editprodisplay/editprodisplay.component.ts");
/* harmony import */ var _main_profile_main_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-profile/main-profile.component */ "./src/app/modules/profile/main-profile/main-profile.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







const routes = [
    {
        path: '',
        component: _main_profile_main_profile_component__WEBPACK_IMPORTED_MODULE_4__["MainProfileComponent"]
    },
    {
        path: 'editprofile',
        component: _editprodisplay_editprodisplay_component__WEBPACK_IMPORTED_MODULE_3__["EditprodisplayComponent"]
    }
];
let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [_main_profile_main_profile_component__WEBPACK_IMPORTED_MODULE_4__["MainProfileComponent"], _editprodisplay_editprodisplay_component__WEBPACK_IMPORTED_MODULE_3__["EditprodisplayComponent"]]
    })
], ProfileModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-profile-profile-module-es2015.js.map