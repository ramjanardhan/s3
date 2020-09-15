(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap\");\r\n/* You can add global styles to this file, and also import other style files */\r\n/* You can add global styles to this file, and also import other style files */\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  font-family: \"Roboto\", sans-serif !important;\r\n}\r\n/* Style the tab */\r\n.tab {\r\n  float: left;\r\n  border: 1px solid #ccc;\r\n  background-color: #1b1449;\r\n  width: 15%;\r\n  height: 1265px;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  display: block;\r\n  background-color: inherit;\r\n  color: #ffffff;\r\n  padding: 22px 16px;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n.liberty-logo {\r\n  margin-left: 32px;\r\n}\r\n/* Change background color of buttons on hover */\r\n/*.tab button:hover {\r\n    background-color: #ddd;\r\n  }*/\r\n/* Create an active/current \"tab button\" class */\r\n.tab button.active {\r\n  background-color: #ccc;\r\n}\r\n/* Style the tab content */\r\n.tabcontent {\r\n  float: left;\r\n  padding: 0 48px 0 48px;\r\n  border-left: none;\r\n  background-color: rgb(245, 245, 245);\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  padding-top: 30px;\r\n}\r\n.modal-lg {\r\n  width: 85% !important;\r\n}\r\n.heading-mid {\r\n  font-size: 24px;\r\n  color: #343741;\r\n  margin-bottom: 20px;\r\n}\r\n.heading-top {\r\n  font-size: 20px;\r\n  color: #000000;\r\n  height: 10%;\r\n  margin: 18px 0px;\r\n  /* font-weight: 300; */\r\n}\r\n.heading-low {\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  color: #343741;\r\n}\r\n.form-label {\r\n  font-size: 14px;\r\n  color: #343741;\r\n  font-weight: 500;\r\n}\r\n.border-bottom {\r\n  border-bottom: solid 1px;\r\n  width: 84%;\r\n  margin-bottom: 15px;\r\n  padding-bottom: 10px;\r\n  margin-left: 0px;\r\n}\r\n.border-bottom-filter {\r\n  margin-left: 15px;\r\n}\r\n.field-class {\r\n  background: #ffffff;\r\n  border: 1px solid #919191;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n/* header css */\r\n.header {\r\n  background-color: #1D2831;\r\n  padding: 16px 10px;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 999;\r\n}\r\n.header a {\r\n  float: left;\r\n\r\n  text-align: center;\r\n  padding: 12px;\r\n  text-decoration: none;\r\n\r\n  border-radius: 4px;\r\n  font-size: 20px;\r\n  color: #343741;\r\n  letter-spacing: 0;\r\n  line-height: 32px;\r\n  font-weight: 500;\r\n}\r\n.header a.logo {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n.header a:hover {\r\n  background-color: #1b1449;\r\n  color: #fff;\r\n}\r\n.header-right {\r\n  float: right;\r\n}\r\n@media screen and (max-width: 500px) {\r\n  .header a {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n\r\n  .header-right {\r\n    float: none;\r\n  }\r\n}\r\n.container-box {\r\n  padding: 39px;\r\n  background: #ffffff;\r\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n}\r\n.menu-icon {\r\n  position: fixed;\r\n  left: 12.4%;\r\n  color: white;\r\n}\r\n.menu-icon:hover {\r\n  color: white;\r\n}\r\n.menu-icon.collapsed {\r\n  left: 50px;\r\n}\r\n.welcome-user-message {\r\n  font-size: 48px;\r\n  font-weight: 300 !important;\r\n  padding: 0px 15px;\r\n  margin: 40px 0px;\r\n}\r\n.quote-textbox {\r\n  background: #ffffff;\r\n  border: 1px solid #919191;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n.quote-search-button {\r\n  background: #727782;\r\n  border: 1px solid #727782;\r\n  box-shadow: 0 3px 0 0 #727782;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n  width: 155px;\r\n}\r\n.quote-search-button-model {\r\n  background: #99e3ea;\r\n  border: 1px solid #99e3ea;\r\n  box-shadow: 0 3px 0 0 #06748c;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n  width: 155px;\r\n  margin-right: 30%;\r\n}\r\n.clear-button {\r\n  background: #ffffff;\r\n  border: 1px solid #1a1446;\r\n  box-shadow: 0 3px 0 0 #c0bfc0;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n.clear-button-text {\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  color: #1a1446;\r\n  letter-spacing: 0;\r\n  text-align: center;\r\n}\r\n.customerData {\r\n  overflow: scroll;\r\n  height: 300px;\r\n}\r\n.customerData-search {\r\n  min-height: 201px;\r\n  background: #ffffff;\r\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n}\r\n/* Start of horizontal error info styles */\r\n.error-info-horz-bar {\r\n  height: 52px;\r\n  border: 1px solid #e92243;\r\n  border-radius: 3px;\r\n  background-color: #fff4f5;\r\n}\r\n.info-error-icon {\r\n  background: #e92243;\r\n  color: #ffffff;\r\n  padding: 14px 24px;\r\n}\r\n/* End of horizontal error info styles */\r\n/* start common styles */\r\n.form-control {\r\n  font-size: 16px;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-weight: 300;\r\n  font-size: 16px;\r\n  color: #707070;\r\n  letter-spacing: 0;\r\n  background: #ffffff;\r\n  border: 1px solid #919191;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n/* end of common */\r\n/*customer search model*/\r\n/* .modal-content {\r\n  padding: 52px !important;\r\n} */\r\n.error {\r\n  background: #fff4f5;\r\n  border: 1px solid #e92243;\r\n  border-radius: 3px;\r\n  line-height: 3;\r\n  margin-left: 0px;\r\n  margin-right: 17px;\r\n}\r\n.error svg {\r\n  color: #fff;\r\n}\r\nspan.search-icon {\r\n  background: red;\r\n  padding: 14px;\r\n  margin-right: 8px;\r\n}\r\n.search-heading {\r\n  font-size: 24px;\r\n  color: #343741;\r\n  margin-left: 16px;\r\n}\r\n.search-modeltex a {\r\n  font-size: 16px;\r\n  color: #343741;\r\n  font-weight: 500;\r\n}\r\n.quote-fields {\r\n  margin-bottom: 25px;\r\n}\r\n.quote-fields-no-padding {\r\n  margin-bottom: 5px;\r\n}\r\n.quote-fields input,\r\n.quote-fields select {\r\n  height: 50px;\r\n  background: #ffffff;\r\n  border: 1px solid #919191;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n.quote-fields-no-padding input,\r\n.quote-fields-no-padding select {\r\n  height: 50px;\r\n  background: #ffffff;\r\n  border: 1px solid #919191;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n.no-padding {\r\n  padding-left: 0 !important;\r\n}\r\n.table-count {\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  color: #343741;\r\n  margin: 18px 0;\r\n}\r\n.container-box.customerData-search-filter table {\r\n  width: 100%\r\n}\r\n.table-count-filter {\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  color: #343741;\r\n  padding: 40px 0px 5px 8px;\r\n}\r\n.customerData-search-filter {\r\n  min-height: 201px;\r\n  background: #ffffff;\r\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n  padding: 0 20px;\r\n}\r\n.container-box-margin {\r\n  margin-top: 7%;\r\n}\r\n.dashboard-boxes {\r\n  background: #ffffff;\r\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\r\n  padding: 0px;\r\n}\r\n.info-card-header {\r\n  background: #727782;\r\n  padding: 15px;\r\n}\r\n.payment {\r\n  padding-left: 30px;\r\n  font-size: 14px;\r\n  color: #707070;\r\n  font-weight: 500;\r\n}\r\nspan.payment-span {\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n  color: #000;\r\n  padding-right: 9px;\r\n}\r\n.dashboard-buttons {\r\n  background: #727782;\r\n  border: 1px solid #727782;\r\n  box-shadow: 0 3px 0 0 #727782;\r\n  border-radius: 3px;\r\n  margin-bottom: 15px;\r\n  height: 34px;\r\n  width: 40%;\r\n  color: white;\r\n  font-weight: 700;\r\n}\r\n.dashboard-row {\r\n  margin-left: 5px;\r\n}\r\n.button-border {\r\n  border-top: 1px solid #c0bfc0;\r\n  padding: 20px 0px;\r\n}\r\n.nav-bar-name-border {\r\n  border-bottom: solid 1px;\r\n}\r\n.model-button {\r\n  font-size: 14px;\r\n  color: #000000;\r\n  border: none;\r\n  background: none;\r\n  font-weight: 900;\r\n  color: #99e3ea;\r\n  font-weight: 500;\r\n}\r\ntable1 {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\ntd,\r\nth {\r\n  border: 1px solid #dddddd;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntr:nth-child(even) {\r\n  background-color: #dddddd40;\r\n}\r\n.customerData-search table {\r\n  min-width: 1011px;\r\n}\r\n/*tej css */\r\n.nav-bar-name-border {\r\n  border-bottom: solid 1px;\r\n}\r\n.font-lg-bold {\r\n  font-size: 48px !important;\r\n  font-weight: 700 !important;\r\n  color: white;\r\n}\r\n.font-md-regular {\r\n  font-size: 24px !important;\r\n  font-weight: 500 !important;\r\n  color: white;\r\n}\r\n/* tej styles */\r\n.nav-bar-hello {\r\n  color: white !important;\r\n  /* padding-left: 64px; tejupdate */\r\n  opacity: 0.4; /*tejadd*/\r\n  font-size: 32px !important;\r\n  margin: 0px;\r\n}\r\n.xs-font-regular {\r\n  font-size: 16px;\r\n}\r\n.nav-bar-text {\r\n  color: white;\r\n  margin-bottom: 0px;\r\n}\r\n.nav-line {\r\n  opacity: 0.5;\r\n  border: 1px solid white;\r\n  margin-top: 12px;\r\n}\r\n.icn-sm-styl {\r\n  margin-right: 4px;\r\n  font-size: 14px;\r\n}\r\n.disp-inlin-blk {\r\n  display: inline-block;\r\n}\r\n.lnk-pd {\r\n  padding: 14px 0px !important;\r\n}\r\n.icn-md-styl {\r\n  color: white;\r\n  font-size: 20px !important;\r\n  margin: 2px 0px 2px 0px !important;\r\n}\r\n.icn-mr {\r\n  margin-right: 12px !important;\r\n}\r\n.side-text {\r\n  color: white;\r\n  margin-left: 28px !important;\r\n}\r\n.user-tools-blk {\r\n  margin: 18px 0px;\r\n}\r\n.hide {\r\n  display: none;\r\n}\r\n.bTset {\r\n  float: right;\r\n  margin-left: auto;\r\n  text-decoration:underline ;\r\n  border: none;\r\n  background-color: #ffffff;\r\n  display: inherit;\r\n}\r\n/*vishal */\r\n.inputField {\r\n  float: right;\r\n  margin-right: 20px;\r\n  width: 300px;\r\n}\r\n.myPContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: whitesmoke;\r\n  outline: none;\r\n}\r\n.subContainer {\r\n  width: 923px;\r\n  padding: 30px;\r\n  /* height: 165px; */\r\n  position: 290px 253px;\r\n  opacity: 100%;\r\n  margin: 30px;\r\n  background-color: #ffffff;\r\n}\r\n.editPContainer {\r\n  display: flex;\r\n}\r\n.bs-example {\r\n  margin: 20px;\r\n}\r\n.accordion .fa {\r\n  margin-right: 0.5rem;\r\n}\r\n.editBtnset {\r\n  float: right;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n  border: none;\r\n  margin-left: 5px;\r\n  margin-right: 32px;\r\n}\r\n.editBtnsetMain {\r\n  display: flex;\r\n}\r\n.editBtnset:focus {\r\n  outline: 0 !important;\r\n}\r\n.profileContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: whitesmoke;\r\n}\r\na[aria-expanded=\"true\"] .fa-chevron-down {\r\n  display: none;\r\n}\r\na[aria-expanded=\"false\"] .fa-chevron-up {\r\n  display: none;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  .header {\r\n    background-color: #ffd000;\r\n    padding: 0;\r\n    position: relative;\r\n    /* width: 100%; */\r\n    z-index: 999;\r\n}\r\n\r\n.liberty-logo {\r\n  float: left;\r\n  width: 100px;\r\n  margin-top: 8px;\r\n}\r\n\r\ndiv#mySidebar {\r\n}\r\n.welcome-user-message {\r\n  font-size: 18px;\r\n  font-weight: 300 !important;\r\n  padding: 0px 15px;\r\n  margin: 15px 0px;\r\n}\r\n#main {\r\n  transition: margin-left 0.5s;\r\n  padding: 0 !important;\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.tabcontent {\r\n  padding: 0 23px 0 7px;\r\n  width: 100%;\r\n   margin-top: 0px; \r\n}\r\n.font-lg-bold {\r\n  font-size: 24px !important;\r\n  font-weight: 700 !important;\r\n} \r\n.font-md-regular {\r\n    font-size: 14px !important;\r\n    font-weight: 500 !important;\r\n}\r\n\r\nspan.payment-span {\r\n  font-size: 14px;\r\n}\r\n.dashboard-boxes {\r\n  margin-bottom: 16px;\r\n}\r\n.info-card-header {\r\n  background: #727782;\r\n  padding-left: 29px;\r\n}\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  .header {\r\n    background-color: #ffd000;\r\n    padding: 0;\r\n    position: relative;\r\n    /* width: 100%; */\r\n    z-index: 999;\r\n}\r\n \r\n.liberty-logo {\r\n  float: left;\r\n  width: 100px;\r\n  margin-top: 8px;\r\n}\r\n.highlight {\r\n  display: none;\r\n}\r\n.welcome-user-message {\r\n  font-size: 18px;\r\n  font-weight: 300 !important;\r\n  padding: 0px 15px;\r\n  margin: 15px 0px;\r\n}\r\n#main {\r\n  transition: margin-left 0.5s;\r\n  padding: 0 !important;\r\n  margin-left: 0 !important;\r\n}\r\n \r\n.tabcontent {\r\n  padding: 0 23px 0 7px;\r\n  width: 100%;\r\n   margin-top: 0px; \r\n}\r\n.font-lg-bold {\r\n  font-size: 24px !important;\r\n  font-weight: 700 !important;\r\n} \r\n.font-md-regular {\r\n    font-size: 14px !important;\r\n    font-weight: 500 !important;\r\n}\r\n \r\nspan.payment-span {\r\n  font-size: 14px;\r\n}\r\n.dashboard-boxes {\r\n  margin-bottom: 16px;\r\n}\r\n.info-card-header {\r\n  background: #727782;\r\n  padding-left: 29px;\r\n}\r\ni.mobileicon {\r\n  background: #1b1449;\r\n  padding: 0 14px;\r\n  left: 0;\r\n  border-radius: 5px;\r\n  position: fixed;\r\n}\r\n.displayarrow {\r\n  display: none;\r\n \r\n}\r\n.iconshow {\r\n  display: none;\r\n}\r\n.sidebar {\r\n  top: 87px !important;\r\n}\r\n\r\n.highlight {\r\n  display: none;\r\n  }\r\n\r\n}\r\n.hbox {\r\n  min-height: 234px;\r\n}\r\ninput:focus::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\ninput:focus::-moz-placeholder {\r\n  color: transparent;\r\n}\r\ninput:focus::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\ninput:focus::placeholder {\r\n  color: transparent;\r\n}\r\n.custom-file-label\r\n{\r\n  left: 16px !important;\r\n  height: calc(2.9em + .75rem + 2px) !important;\r\n  font-size: 12px !important;\r\n  font-weight: bolder !important;\r\n  line-height: 3.0 !important;\r\n  position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    \r\n    padding: .375rem .75rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n}\r\n.custom-file-label::after \r\n{\r\n  font-weight: bolder !important;\r\n  padding: .375rem 4.75rem !important;\r\n  height: calc(2.5em + .75rem) !important;\r\n  font-size: 14px !important;\r\n  background: #727782 !important;\r\n  color: #fff !important;\r\n  line-height: 2.5 !important;\r\n  position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 3;\r\n    display: block;\r\n    content: \"Browse\";\r\n    border-left: inherit;\r\n    border-radius: 0 .25rem .25rem 0;\r\n}\r\n.custom-file-input {\r\n  position: relative;\r\n  z-index: 2;\r\n  width: 100%;\r\n  height: calc(1.5em + .75rem + 2px);\r\n  margin: 0;\r\n  opacity: 0;\r\n}\r\n.dropdown-menu>li>a {\r\n  font-size: 12px !important;\r\n}\r\n.alert-success {\r\n  font-size: 14px !important;\r\n}\r\n.alert-danger\r\n{\r\n  font-size: 14px !important;\r\n}\r\n.close \r\n{\r\n  font-size: 2.5rem !important;\r\n}\r\n.btn-danger \r\n{\r\n  font-size: 12px !important;\r\n}\r\n/* .modal-content \r\n{\r\n  height: 200px !important;\r\n} */\r\n.modal-header {\r\n  padding: 8px !important;\r\n  border-bottom: 1px solid #e5e5e5 !important;\r\n}\r\n.modal-header .close {\r\n  margin-top: -27px !important;\r\n}\r\n.dropbtn {\r\n  background-color: #727782;\r\n  color: white;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n\r\n  border: 1px solid #727782;\r\n  box-shadow: 0 3px 0 0 #727782;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n  width: 135px;\r\n  font-size: 12px;\r\n  font-weight: bolder;\r\n \r\n  line-height: 23px;\r\n}\r\n.dropbtn:hover, .dropbtn:focus {\r\n  background-color: #727782;\r\n}\r\n.dropdown {\r\n  float: left;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n  overflow: auto;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n.dropdown-content a {\r\n  color: white;\r\n  padding: 2px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 13px;\r\n  background-color:transparent;\r\n}\r\n.dropdown a:hover {background-color: #343741;}\r\n.show {display: block;}\r\n.dropdown-content {\r\n  min-width: 135px !important;\r\n  right: 0px !important;\r\n  background-color: #727782 !important;\r\n}\r\n.quote-search-button1 {\r\n  background: #727782;\r\n  border: 1px solid #727782;\r\n  box-shadow: 0 3px 0 0 #727782;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n  width: 135px;\r\n  font-size: 12px;\r\n  font-weight: bolder;\r\n  height: 42px;\r\n  color: white;\r\n  line-height: 23px;\r\n}\r\n.quote-search-button2 {\r\n  background: #727782;\r\n  border: 9px solid #727782;\r\n  box-shadow: 0 3px 0 0 #727782;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n  font-size: 12px;\r\n  font-weight: bolder;\r\n  height: 42px;\r\n  color: white;\r\n}\r\n.section-label\r\n{\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #343741;\r\n}\r\n.section-icon\r\n{\r\n    color: gainsboro;\r\n    font-size: 100px !important;\r\n    margin-left: 4px;\r\n}\r\n.dashboard-heading\r\n{\r\n  font-size: 15px;\r\n}\r\n.dashboard-content\r\n{\r\n  font-size: 13px;\r\n}\r\n.star-icon\r\n{\r\n    color: orange;\r\n}\r\n.grid-style\r\n{\r\n  background-color: #727782 !important;\r\n  color: white !important;\r\n  font-size: 12px !important;\r\n}\r\n.option-Heading\r\n{\r\n  margin-right: -2rem!important;\r\n  color: #000000;\r\n}\r\n.post-col-1\r\n{\r\n  width: 15%;\r\n  max-height: 500px;\r\n  height: 250px;\r\n}\r\n.post-col-2\r\n{\r\n  width: 85%;\r\n}\r\n.mr-130\r\n{\r\n  margin-top: 130px;\r\n}\r\n.mt-35\r\n{\r\n  margin-top: 35px;\r\n}\r\n.section-icon1\r\n{\r\n    color: #727782;\r\n    font-size: 50px !important;\r\n    margin-left: 4px;\r\n}\r\n#okta-login-container {\r\n  /* margin: 0 auto; */\r\n  max-width: 400px;\r\n  border: 1px solid silver;\r\n  padding: 20px;\r\n  box-shadow: 5px 5px 5px 0 silver;\r\n  margin-top: 150px;\r\n  margin-left: 900px;\r\n  /* background-color: #727782; */\r\n}\r\n#okta-login-container input {\r\n  margin-bottom: 5px;\r\n  width: 100%;\r\n  padding: 5px;\r\n}\r\n#okta-login-container input[type=checkbox] {\r\n  width: 25px;\r\n}\r\n.okta-form-title\r\n{\r\n  color: white !important;\r\n}\r\n.okta-form-label\r\n{\r\n  color: white !important;\r\n}\r\n.link\r\n{\r\n  color: white !important;\r\n}\r\n#input41\r\n{\r\n  color: white !important;\r\n}\r\nlabel{\r\n  color: white !important;\r\n}\r\np{\r\n  color: red !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,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ZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgdGFiICovXHJcbi50YWIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMTQ0OTtcclxuICB3aWR0aDogMTUlO1xyXG4gIGhlaWdodDogMTI2NXB4O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyBpbnNpZGUgdGhlIHRhYiAqL1xyXG4udGFiIGJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAyMnB4IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5saWJlcnR5LWxvZ28ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXHJcbi8qLnRhYiBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICB9Ki9cclxuXHJcbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCBcInRhYiBidXR0b25cIiBjbGFzcyAqL1xyXG4udGFiIGJ1dHRvbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xyXG4udGFiY29udGVudCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMCA0OHB4IDAgNDhweDtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1sZyB7XHJcbiAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmhlYWRpbmctbWlkIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICMzNDM3NDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmhlYWRpbmctdG9wIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgbWFyZ2luOiAxOHB4IDBweDtcclxuICAvKiBmb250LXdlaWdodDogMzAwOyAqL1xyXG59XHJcblxyXG4uaGVhZGluZy1sb3cge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMzQzNzQxO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzQzNzQxO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XHJcbiAgd2lkdGg6IDg0JTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLWZpbHRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5maWVsZC1jbGFzcyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTE5MTkxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi8qIGhlYWRlciBjc3MgKi9cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEMjgzMTtcclxuICBwYWRkaW5nOiAxNnB4IDEwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLmhlYWRlciBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMzQzNzQxO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgYS5sb2dvIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oZWFkZXIgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMTQ0OTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmhlYWRlci1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5oZWFkZXIgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItcmlnaHQge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5jb250YWluZXItYm94IHtcclxuICBwYWRkaW5nOiAzOXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxufVxyXG4ubWVudS1pY29uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMTIuNCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWVudS1pY29uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1lbnUtaWNvbi5jb2xsYXBzZWQge1xyXG4gIGxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi53ZWxjb21lLXVzZXItbWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICBtYXJnaW46IDQwcHggMHB4O1xyXG59XHJcbi5xdW90ZS10ZXh0Ym94IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MTkxOTE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnF1b3RlLXNlYXJjaC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICM3Mjc3ODI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzcyNzc4MjtcclxuICBib3gtc2hhZG93OiAwIDNweCAwIDAgIzcyNzc4MjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHdpZHRoOiAxNTVweDtcclxufVxyXG5cclxuLnF1b3RlLXNlYXJjaC1idXR0b24tbW9kZWwge1xyXG4gIGJhY2tncm91bmQ6ICM5OWUzZWE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5ZTNlYTtcclxuICBib3gtc2hhZG93OiAwIDNweCAwIDAgIzA2NzQ4YztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHdpZHRoOiAxNTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxufVxyXG5cclxuLmNsZWFyLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMWExNDQ2O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjYzBiZmMwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmNsZWFyLWJ1dHRvbi10ZXh0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFhMTQ0NjtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b21lckRhdGEge1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmN1c3RvbWVyRGF0YS1zZWFyY2gge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxufVxyXG4vKiBTdGFydCBvZiBob3Jpem9udGFsIGVycm9yIGluZm8gc3R5bGVzICovXHJcbi5lcnJvci1pbmZvLWhvcnotYmFyIHtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5MjI0MztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjRmNTtcclxufVxyXG4uaW5mby1lcnJvci1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjZTkyMjQzO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDE0cHggMjRweDtcclxufVxyXG4vKiBFbmQgb2YgaG9yaXpvbnRhbCBlcnJvciBpbmZvIHN0eWxlcyAqL1xyXG4vKiBzdGFydCBjb21tb24gc3R5bGVzICovXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MTkxOTE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4vKiBlbmQgb2YgY29tbW9uICovXHJcbi8qY3VzdG9tZXIgc2VhcmNoIG1vZGVsKi9cclxuLyogLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDUycHggIWltcG9ydGFudDtcclxufSAqL1xyXG4uZXJyb3Ige1xyXG4gIGJhY2tncm91bmQ6ICNmZmY0ZjU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5MjI0MztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbn1cclxuLmVycm9yIHN2ZyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuc3Bhbi5zZWFyY2gtaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjMzQzNzQxO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcbi5zZWFyY2gtbW9kZWx0ZXggYSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzQzNzQxO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnF1b3RlLWZpZWxkcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4ucXVvdGUtZmllbGRzLW5vLXBhZGRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ucXVvdGUtZmllbGRzIGlucHV0LFxyXG4ucXVvdGUtZmllbGRzIHNlbGVjdCB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxOTE5MTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ucXVvdGUtZmllbGRzLW5vLXBhZGRpbmcgaW5wdXQsXHJcbi5xdW90ZS1maWVsZHMtbm8tcGFkZGluZyBzZWxlY3Qge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MTkxOTE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLm5vLXBhZGRpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtY291bnQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMzQzNzQxO1xyXG4gIG1hcmdpbjogMThweCAwO1xyXG59XHJcbi5jb250YWluZXItYm94LmN1c3RvbWVyRGF0YS1zZWFyY2gtZmlsdGVyIHRhYmxlIHtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4udGFibGUtY291bnQtZmlsdGVyIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzM0Mzc0MTtcclxuICBwYWRkaW5nOiA0MHB4IDBweCA1cHggOHB4O1xyXG59XHJcblxyXG4uY3VzdG9tZXJEYXRhLXNlYXJjaC1maWx0ZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItYm94LW1hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogNyU7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtYm94ZXMge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmluZm8tY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICM3Mjc3ODI7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnBheW1lbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5zcGFuLnBheW1lbnQtc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZy1yaWdodDogOXB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWJ1dHRvbnMge1xyXG4gIGJhY2tncm91bmQ6ICM3Mjc3ODI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzcyNzc4MjtcclxuICBib3gtc2hhZG93OiAwIDNweCAwIDAgIzcyNzc4MjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uZGFzaGJvYXJkLXJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uYnV0dG9uLWJvcmRlciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjMGJmYzA7XHJcbiAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5uYXYtYmFyLW5hbWUtYm9yZGVyIHtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XHJcbn1cclxuXHJcbi5tb2RlbC1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjOTllM2VhO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnRhYmxlMSB7XHJcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkNDA7XHJcbn1cclxuLmN1c3RvbWVyRGF0YS1zZWFyY2ggdGFibGUge1xyXG4gIG1pbi13aWR0aDogMTAxMXB4O1xyXG59XHJcbi8qdGVqIGNzcyAqL1xyXG5cclxuLm5hdi1iYXItbmFtZS1ib3JkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcclxufVxyXG5cclxuLmZvbnQtbGctYm9sZCB7XHJcbiAgZm9udC1zaXplOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZm9udC1tZC1yZWd1bGFyIHtcclxuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIHRlaiBzdHlsZXMgKi9cclxuLm5hdi1iYXItaGVsbG8ge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIC8qIHBhZGRpbmctbGVmdDogNjRweDsgdGVqdXBkYXRlICovXHJcbiAgb3BhY2l0eTogMC40OyAvKnRlamFkZCovXHJcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi54cy1mb250LXJlZ3VsYXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLm5hdi1iYXItdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm5hdi1saW5lIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuLmljbi1zbS1zdHlsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5kaXNwLWlubGluLWJsayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5sbmstcGQge1xyXG4gIHBhZGRpbmc6IDE0cHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmljbi1tZC1zdHlsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAycHggMHB4IDJweCAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaWNuLW1yIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGUtdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2VyLXRvb2xzLWJsayB7XHJcbiAgbWFyZ2luOiAxOHB4IDBweDtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5iVHNldCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qdmlzaGFsICovXHJcblxyXG4uaW5wdXRGaWVsZCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuLm15UENvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnN1YkNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkyM3B4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgLyogaGVpZ2h0OiAxNjVweDsgKi9cclxuICBwb3NpdGlvbjogMjkwcHggMjUzcHg7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBtYXJnaW46IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uZWRpdFBDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJzLWV4YW1wbGUge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG4uYWNjb3JkaW9uIC5mYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuLmVkaXRCdG5zZXQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG59XHJcbi5lZGl0QnRuc2V0TWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZWRpdEJ0bnNldDpmb2N1cyB7XHJcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9maWxlQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSAuZmEtY2hldnJvbi1kb3duIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmFbYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdIC5mYS1jaGV2cm9uLXVwIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDAwMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLmxpYmVydHktbG9nbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuZGl2I215U2lkZWJhciB7XHJcbn1cclxuLndlbGNvbWUtdXNlci1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gIG1hcmdpbjogMTVweCAwcHg7XHJcbn1cclxuI21haW4ge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJjb250ZW50IHtcclxuICBwYWRkaW5nOiAwIDIzcHggMCA3cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgIG1hcmdpbi10b3A6IDBweDsgXHJcbn1cclxuLmZvbnQtbGctYm9sZCB7XHJcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG59IFxyXG4uZm9udC1tZC1yZWd1bGFyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zcGFuLnBheW1lbnQtc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5kYXNoYm9hcmQtYm94ZXMge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLmluZm8tY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICM3Mjc3ODI7XHJcbiAgcGFkZGluZy1sZWZ0OiAyOXB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQwMDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuIFxyXG4ubGliZXJ0eS1sb2dvIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5oaWdobGlnaHQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLndlbGNvbWUtdXNlci1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gIG1hcmdpbjogMTVweCAwcHg7XHJcbn1cclxuI21haW4ge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIFxyXG4udGFiY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAyM3B4IDAgN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICBtYXJnaW4tdG9wOiAwcHg7IFxyXG59XHJcbi5mb250LWxnLWJvbGQge1xyXG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxufSBcclxuLmZvbnQtbWQtcmVndWxhciB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxufVxyXG4gXHJcbnNwYW4ucGF5bWVudC1zcGFuIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmRhc2hib2FyZC1ib3hlcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4uaW5mby1jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzcyNzc4MjtcclxuICBwYWRkaW5nLWxlZnQ6IDI5cHg7XHJcbn1cclxuaS5tb2JpbGVpY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjMWIxNDQ5O1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmRpc3BsYXlhcnJvdyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuIFxyXG59XHJcbi5pY29uc2hvdyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2lkZWJhciB7XHJcbiAgdG9wOiA4N3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oaWdobGlnaHQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG4uaGJveCB7XHJcbiAgbWluLWhlaWdodDogMjM0cHg7XHJcbn1cclxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS1sYWJlbFxyXG57XHJcbiAgbGVmdDogMTZweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogY2FsYygyLjllbSArIC43NXJlbSArIDJweCkgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDMuMCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcbi5jdXN0b20tZmlsZS1sYWJlbDo6YWZ0ZXIgXHJcbntcclxuICBmb250LXdlaWdodDogYm9sZGVyICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogLjM3NXJlbSA0Ljc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBjYWxjKDIuNWVtICsgLjc1cmVtKSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICM3Mjc3ODIgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjUgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiQnJvd3NlXCI7XHJcbiAgICBib3JkZXItbGVmdDogaW5oZXJpdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgLjI1cmVtIC4yNXJlbSAwO1xyXG59XHJcbi5jdXN0b20tZmlsZS1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcclxuICBtYXJnaW46IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uZHJvcGRvd24tbWVudT5saT5hIHtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG4uYWxlcnQtc3VjY2VzcyB7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFsZXJ0LWRhbmdlclxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNsb3NlIFxyXG57XHJcbiAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uYnRuLWRhbmdlciBcclxue1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC5tb2RhbC1jb250ZW50IFxyXG57XHJcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG59ICovXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xyXG4gIG1hcmdpbi10b3A6IC0yN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Mjc3ODI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3Mjc3ODI7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMCAwICM3Mjc3ODI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogMTM1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiBcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxufVxyXG5cclxuLmRyb3BidG46aG92ZXIsIC5kcm9wYnRuOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI3NzgyO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmRyb3Bkb3duIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMzNDM3NDE7fVxyXG5cclxuLnNob3cge2Rpc3BsYXk6IGJsb2NrO31cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogMTM1cHggIWltcG9ydGFudDtcclxuICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzc4MiAhaW1wb3J0YW50O1xyXG59XHJcbi5xdW90ZS1zZWFyY2gtYnV0dG9uMSB7XHJcbiAgYmFja2dyb3VuZDogIzcyNzc4MjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNzI3NzgyO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjNzI3NzgyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgd2lkdGg6IDEzNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGhlaWdodDogNDJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbn1cclxuLnF1b3RlLXNlYXJjaC1idXR0b24yIHtcclxuICBiYWNrZ3JvdW5kOiAjNzI3NzgyO1xyXG4gIGJvcmRlcjogOXB4IHNvbGlkICM3Mjc3ODI7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMCAwICM3Mjc3ODI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWN0aW9uLWxhYmVsXHJcbntcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzM0Mzc0MTtcclxufVxyXG4uc2VjdGlvbi1pY29uXHJcbntcclxuICAgIGNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICBmb250LXNpemU6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcbi5kYXNoYm9hcmQtaGVhZGluZ1xyXG57XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5kYXNoYm9hcmQtY29udGVudFxyXG57XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5zdGFyLWljb25cclxue1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG4uZ3JpZC1zdHlsZVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzc4MiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5vcHRpb24tSGVhZGluZ1xyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMnJlbSFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnBvc3QtY29sLTFcclxue1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG4ucG9zdC1jb2wtMlxyXG57XHJcbiAgd2lkdGg6IDg1JTtcclxufVxyXG4ubXItMTMwXHJcbntcclxuICBtYXJnaW4tdG9wOiAxMzBweDtcclxufVxyXG4ubXQtMzVcclxue1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuLnNlY3Rpb24taWNvbjFcclxue1xyXG4gICAgY29sb3I6ICM3Mjc3ODI7XHJcbiAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbiNva3RhLWxvZ2luLWNvbnRhaW5lciB7XHJcbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAwIHNpbHZlcjtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogOTAwcHg7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzcyNzc4MjsgKi9cclxufVxyXG5cclxuI29rdGEtbG9naW4tY29udGFpbmVyIGlucHV0IHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4jb2t0YS1sb2dpbi1jb250YWluZXIgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcbi5va3RhLWZvcm0tdGl0bGVcclxue1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5va3RhLWZvcm0tbGFiZWxcclxue1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5saW5rXHJcbntcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4jaW5wdXQ0MVxyXG57XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxubGFiZWx7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxucHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\foundational-ui\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map