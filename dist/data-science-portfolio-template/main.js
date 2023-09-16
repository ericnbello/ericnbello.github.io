(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Add your routes (i.e. pages) in this section below!
var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'resume', component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var ngx_medium_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-medium-widget */ "./node_modules/ngx-medium-widget/fesm5/ngx-medium-widget.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_simplelinechart_simplelinechart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/simplelinechart/simplelinechart.component */ "./src/app/components/simplelinechart/simplelinechart.component.ts");
/* harmony import */ var _components_simplebarchart_simplebarchart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/simplebarchart/simplebarchart.component */ "./src/app/components/simplebarchart/simplebarchart.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_simplelinechart_simplelinechart_component__WEBPACK_IMPORTED_MODULE_11__["SimplelinechartComponent"],
                _components_simplebarchart_simplebarchart_component__WEBPACK_IMPORTED_MODULE_12__["SimplebarchartComponent"],
                _components_simplebarchart_simplebarchart_component__WEBPACK_IMPORTED_MODULE_12__["SimplebarchartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                ngx_medium_widget__WEBPACK_IMPORTED_MODULE_7__["MediumWidgetModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"page-footer\">\n  <div class=\"footer-wrap\">\n    <div class=\"resume-footer\">\n      <a href=\"/resume\" target=\"_blank\"><h5 class=\"white-text\">View my Resume</h5></a>\n      <p></p>\n    </div>\n    <div class=\"social-footer\">\n      <h5 class=\"white-text\">Let's Talk!</h5>\n      <ul class=\"social_list\">\n        <li><a href=\"https://www.github.com/ericbello\"><i class=\"fa fa-github\"></i></a></li>\n        <!-- <li><a href=\"###\"><i class=\"fa fa-medium\"></i></a></li> -->\n        <li><a href=\"https://www.twitter.com/ericnbello\"><i class=\"fa fa-twitter\"></i></a></li>\n        <li><a href=\"https://www.linkedin.com/in/ericnbello\"><i class=\"fa fa-linkedin\"></i></a></li>\n        <li><a href=\"mailto:ericnbello@gmail.com\"><i class=\"fa fa-envelope\"></i></a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n     © {{currentYear}} Eric Bello\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap\");\n/* You can add global styles to this file, and also import other style files */\n/* COLOR SCHEME */\n/* Color Theme Swatches in Hex */\nbody, nav {\n  font-family: 'Roboto', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: geometricPrecision;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  z-index: 1;\n  -webkit-font-smoothing: subpixel-antialiased; }\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: geometricPrecision;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none; }\nnav {\n  background-color: transparent !important;\n  box-shadow: none !important;\n  position: fixed !important;\n  z-index: 9999 !important; }\nnav a {\n    color: #343a40 !important;\n    margin: 0;\n    text-decoration: none;\n    z-index: 1 !important; }\nnav a.waves-effect.waves-light.btn.square-btn {\n    border-radius: 10px !important;\n    z-index: 0.25 !important; }\nnav i {\n    color: #343a40 !important; }\nnav a:hover {\n    text-decoration: none !important; }\n.square-btn {\n  height: 3em !important;\n  border-radius: 25px !important;\n  color: #14213d !important;\n  font-weight: 700;\n  font-size: 1em;\n  max-width: 150px;\n  background-color: #fff !important;\n  margin: 1em auto 1em 3em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 0.25; }\np.error_value {\n  margin: 0; }\ntd {\n  text-align: center !important; }\ntd.state_title {\n  text-align: center !important; }\n.medium-widget-article__clap {\n  font-family: 'Roboto', Arial, sans-serif;\n  font-weight: 700 !important;\n  color: #ddd !important; }\ng.tick line {\n  opacity: 0; }\ng.y-axis path, g.x-axis path {\n  opacity: 0; }\ng.x-axis text, g.y-axis text {\n  font-weight: 600;\n  color: #333;\n  font-size: 1em;\n  font-family: 'Montserrat', 'Roboto', 'Arial', sans-serif; }\ng.legend text {\n  font-family: 'Roboto', 'Arial', sans-serif;\n  font-family: 600;\n  font-size: 0.75em; }\n.page-footer {\n  background: #14213d; }\n.page-footer * {\n    color: #FFFFFF !important; }\n.page-footer .social_list {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n.page-footer li {\n    margin-right: 1em; }\n.page-footer .white-text {\n    font-size: 1em;\n    font-weight: 700; }\n.page-footer .footer-copyright {\n    font-size: 0.85em;\n    font-weight: 700;\n    max-width: 600px;\n    margin: auto;\n    background: transparent !important; }\n.col.l6.s12 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.footer-wrap {\n  max-width: 600px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n@media (max-width: 600px) {\n  .footer-wrap {\n    margin: auto;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 1em; }\n  .footer-copyright {\n    padding: 1em;\n    background: transparent !important; } }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentYear = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>Eric Bello Data Science Portfolio</title>\n  <meta name=\"robots\" content=\"follow, index\" />\n  <meta content=\"Portfolio site showcasing data science projects.\" name=\"description\" />\n  <meta\n    property=\"og:url\"\n    content=\"https://data.ericnbello.com\"\n  />\n  <link\n    rel=\"canonical\"\n    href=\"https://data.ericnbello.com\"\n  />\n  <meta property=\"og:type\" content=\"website\" />\n  <meta property=\"og:site_name\" content=\"Eric Bello Data Science Portfolio\" />\n  <meta property=\"og:description\" content=\"Portfolio site showcasing data science projects.\" />\n  <meta property=\"og:title\" content=\"Eric Bello Data Science Portfolio\" />\n  <meta property=\"og:image\" content=\"../../../src/assets/data.jpg\" />\n  <meta name=\"twitter:card\" content=\"summary_large_image\" />\n  <meta name=\"twitter:site\" content=\"@ericnbello\" />\n  <meta name=\"twitter:title\" content=\"Eric Bello - Twitter\" />\n  <!-- <meta name=\"twitter:description\" content={meta.description} /> -->\n  <!-- <meta name=\"twitter:image\" content={meta.image} /> -->\n  <!-- {meta.date && (\n    <meta property=\"article:published_time\" content={meta.date} />\n  )} -->\n</head>\n\n<!-- Navbar Component -->\n<app-navbar></app-navbar>\n\n<!-- Homepage html -->\n\n<!-- Top of Page With Opening Graphs Section -->\n<div>\n<div class=\"top\">\n  <div class=\"top-wrapper\" id=\"top\">\n      <app-simplebarchart *ngIf=\"fakecasesbar\" [data]=\"fakecasesbar\">\n      </app-simplebarchart>\n      <app-simplelinechart *ngIf=\"fakecases\" [data]=\"fakecases\">\n      </app-simplelinechart>\n      <div class=\"callout_jumbo\">\n        <div class=\"typewriter\">\n          <div class=\"line1\">\n            Hello, welcome <br> to my portfolio.\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n<!-- About Me Section -->\n\n<div class=\"aboutme-nav\" id=\"aboutme-nav\">\n  <div class=\"aboutme-header\">About Me</div>\n  <div class=\"aboutme-wrapper\">\n    <div class=\"svg-wrapper-me\">\n      <!-- EDIT CONTENT BELOW -->\n        <img alt=\"\" class=\"photo-me\" src=\"../../../assets/headshot.png\" />\n        <h5 class=\"aboutme-context\"><span class=''>Hey! I'm Eric, a data enthusiast with a degree in computer engineering. Leveraging my entrepreneurial background, I'm now focused on excelling in data analysis for impactful contributions.</span></h5>\n        <a href='https://docs.google.com/document/d/1NF134-9lN_q5IqUZ1cCP5mf3G96IG8JhF6JVmaRoCGY/edit?usp=sharing'  class=\"waves-effect waves-light btn square-btn navigate\">View Resume</a>\n      </div>\n    <div class=\"callout-wrapper\">\n      <!-- <div class=\"svg-wrapper-callout1\" >\n        <div class=\"call-out\"> -->\n            <!-- EDIT CONTENT BELOW -->\n          <!-- <h5 class=\"aboutme-context\"><span class='highlight'>Callout box</span></h5>  \n        </div>\n      </div> -->\n      <!-- <div class=\"svg-wrapper-callout2\">\n        <div class=\"call-out\"> -->\n              <!-- EDIT CONTENT BELOW -->\n          <!-- <h5 class=\"aboutme-context\"><span class='highlight'>Another callout box</span>\n          </h5>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</div>\n\n\n\n<!-- This is the projects content that will show on a larger screen (not mobile) -->\n\n<div class=\"projects-div\" id=\"navigate\">\n  <div class=\"projects-header\">Projects</div>\n  <div class=\"projects-wrapper\"  *ngIf=\"!mobile\">\n\n    <div class=\"project_one\">\n    </div>\n\n    <div class=\"project_one_context\">\n      <div class='proj-wrapper'>\n        <p class=\"project_description\">\n            <!-- EDIT CONTENT BELOW -->\n          <a href='#'>\n            <h5 class=\"project_title\"><span class='highlight-title'>Streaming Media Site Analytics</span></h5>\n          </a>\n            <span class='highlight-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </span>\n        </p>\n        <div style=\"display: flex;\">\n        <!-- <div> -->\n          <a href='https://streaming-web-app.firebaseapp.com' class=\"waves-effect waves-light btn square-btn navigate\">View Demo</a>\n          <a href='https://github.com/ericnbello/entertainment-web-app#data-analysis' class=\"waves-effect waves-light btn square-btn navigate\">Markdown</a>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"project_two_context\">\n      <div class='proj-wrapper'>\n        <p class=\"project_description\">\n              <!-- EDIT CONTENT BELOW -->\n          <a href='###' target='_blank'>\n            <h5 class=\"project_title\"><span class='highlight-title'>Weather Data Analytics</span></h5>\n          </a>\n          <span class='highlight-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n          </span>\n        </p>\n        <div style=\"display: flex;\">\n        <!-- <div> -->\n          <a href='https://streaming-web-app.firebaseapp.com' class=\"waves-effect waves-light btn square-btn navigate\">View Demo</a>\n          <a href='https://github.com/ericnbello/entertainment-web-app#data-analysis' class=\"waves-effect waves-light btn square-btn navigate\">Markdown</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"project_two\">\n    </div>\n\n    <div class=\"project_three\">\n    </div>\n\n    <div class=\"project_three_context\">\n      <div class='proj-wrapper'>\n        <p class=\"project_description\">\n            <!-- EDIT CONTENT BELOW -->\n          <a href='###'><h5 class=\"project_title\"><span class='highlight-title'>Project #3</span></h5></a>\n          <span class='highlight-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>\n        </p>\n        <div style=\"display: flex;\">\n        <!-- <div> -->\n          <a href='https://streaming-web-app.firebaseapp.com' class=\"waves-effect waves-light btn square-btn navigate\">View Demo</a>\n          <a href='https://github.com/ericnbello/entertainment-web-app#data-analysis' class=\"waves-effect waves-light btn square-btn navigate\">Markdown</a>\n        </div>\n      </div> \n    </div>\n\n   \n  <!-- <div class=\"project_four_context\">\n    <div class='proj-wrapper'>\n      <p class=\"project_description\"> -->\n          <!-- EDIT CONTENT BELOW -->\n        <!-- <a href='###'><h5 class=\"project_title\"><span class='highlight-title'>Project #4</span></h5></a>\n          <span class='highlight-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>\n      </p>\n      <a href='###' class=\"waves-effect waves-light btn square-btn navigate\">Read More</a>\n    </div>\n  </div>\n  <div class=\"project_four\">\n  </div> -->\n    \n\n    <!-- <div class=\"project_five\">\n    </div>\n\n    <div class=\"project_five_context\">\n      <div class='proj-wrapper'>\n        <p class=\"project_description\"> -->\n            <!-- EDIT CONTENT BELOW -->\n          <!-- <a href='###'><h5 class=\"project_title\"><span class='highlight-title'>Project #5</span></h5></a>\n            <span class='highlight-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>\n        </p>\n        <a href='###'  class=\"waves-effect waves-light btn square-btn navigate\">Go to site</a>\n      </div>\n    </div> \n\n  </div> -->\n\n  <!-- This is the projects content that will show on a mobile device -->\n  <div class=\"projects-wrapper\"  *ngIf=\"mobile\">\n\n    <div class=\"project_one\">\n    </div>\n\n    <div class=\"project_one_context\">\n      <div class='proj-wrapper'>\n        <p class=\"project_description\">\n              <!-- EDIT CONTENT BELOW -->\n          <a href='###'><h5 class=\"project_title\"><span class='highlight-title'>Project #1</span></h5></a>\n            <span class='highlight-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>\n        </p>\n        <a href='###'  class=\"waves-effect waves-light btn square-btn navigate\">Read more</a>\n      </div>\n    </div>\n    \n    <div class=\"project_two\">\n    </div>\n    <div class=\"project_two_context\">\n      <div class='proj-wrapper'>\n        <p class=\"project_description\">\n                  <!-- EDIT CONTENT BELOW -->\n          <a href='###' target='_blank'><h5 class=\"project_title\"><span class='highlight-title'>Project #2</span></h5></a>\n          <span class='highlight-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n          </span>\n        </p>\n        <a href='###' target='_blank' class=\"waves-effect waves-light btn square-btn navigate\">Explore</a>\n      </div>\n    </div>\n    <div class=\"project_three\">\n    </div>\n    <div class=\"project_three_context\">\n      <div class='proj-wrapper'>\n        <p class=\"project_description\">\n                  <!-- EDIT CONTENT BELOW -->\n          <a href='###'><h5 class=\"project_title\"><span class='highlight-title'>Project #3</span></h5></a>\n          <span class='highlight-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>\n        </p>\n        <a href='###' class=\"waves-effect waves-light btn square-btn navigate\">Read More</a>\n      </div>\n    </div>\n    <div class=\"project_four\">\n    </div>\n    <div class=\"project_four_context\">\n      <div class='proj-wrapper'>\n        <p class=\"project_description\">\n                  <!-- EDIT CONTENT BELOW -->\n          <a href='###'><h5 class=\"project_title\"><span class='highlight-title'>Project #4</span></h5></a>\n            <span class='highlight-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>\n        </p>\n        <a href='###' class=\"waves-effect waves-light btn square-btn navigate\">Read More</a>\n      </div>\n    </div>\n    <div class=\"project_five\">\n    </div>\n    <div class=\"project_five_context\">\n      <div class='proj-wrapper'>\n        <p class=\"project_description\">\n                  <!-- EDIT CONTENT BELOW -->\n          <a href='###'><h5 class=\"project_title\"><span class='highlight-title'>Project #5</span></h5></a>\n            <span class='highlight-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>\n        </p>\n        <a href='###'  class=\"waves-effect waves-light btn square-btn navigate\">Go to site</a>\n      </div>\n    </div>\n  </div>\n</div> \n\n<!-- Skills section -->\n<!-- EDIT CONTENT BELOW -->\n  <div class=\"mid1\" id=\"medium\">\n    <div class=\"medium-header\">Skills</div>\n    <div class=\"medium-posts\" >\n      <ul style=\"color: white;\">\n        <li><i class=\"material-icons\">chevron_right</i>Item 1</li>\n        <li><i class=\"material-icons\">chevron_right</i>Item 2</li>\n        <li><i class=\"material-icons\">chevron_right</i>Item 3</li>\n        <li><i class=\"material-icons\">chevron_right</i>Item 4</li>\n        <li><i class=\"material-icons\">chevron_right</i>Item 5</li>\n        <li><i class=\"material-icons\">chevron_right</i>Item 6</li>\n      </ul>\n    </div>\n  </div>\n\n\n<!-- Contact form area -->\n  <!-- EDIT CONTENT BELOW -->\n  <div class=\"section4\" id='section4'>\n    <div class=\"section4-header\">Contact Me</div>\n    <div class=\"info_div\">\n      <div class=\"section4-content\">\n        <form\n        action=\"https://formspree.io/f/mknyqeay\"\n        method=\"POST\"\n      >\n        <label>\n          Your name:\n          <input type=\"text\" name=\"name\" id=\"name\">\n        </label>\n        <label>\n          Your email:\n          <input type=\"email\" name=\"email\" id=\"email\">\n        </label>\n        <label>\n          Your message:\n          <textarea name=\"message\" id=\"message\"></textarea>\n        </label>\n        <!-- your other form fields go here -->\n        <button type=\"submit\">Send</button>\n      </form>\n      <!-- <p>You can put extra content here.\n        \n      </div>\n\n      <div class=\"parent\">\n        <div></div>\n        <div class=\"summary_final\">\n            <br>\n            <br>\n            <a href='###' class=\"waves-effect waves-light btn square-btn rpubs\">Button</a>\n          </div>\n        <div>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</div>\n\n<!-- Footer component loaded -->\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap\");\n/* You can add global styles to this file, and also import other style files */\n/* COLOR SCHEME */\n/* Color Theme Swatches in Hex */\nbody, nav {\n  font-family: 'Roboto', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: geometricPrecision;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  z-index: 1;\n  -webkit-font-smoothing: subpixel-antialiased; }\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: geometricPrecision;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none; }\nnav {\n  background-color: transparent !important;\n  box-shadow: none !important;\n  position: fixed !important;\n  z-index: 9999 !important; }\nnav a {\n    color: #343a40 !important;\n    margin: 0;\n    text-decoration: none;\n    z-index: 1 !important; }\nnav a.waves-effect.waves-light.btn.square-btn {\n    border-radius: 10px !important;\n    z-index: 0.25 !important; }\nnav i {\n    color: #343a40 !important; }\nnav a:hover {\n    text-decoration: none !important; }\n.square-btn {\n  height: 3em !important;\n  border-radius: 25px !important;\n  color: #14213d !important;\n  font-weight: 700;\n  font-size: 1em;\n  max-width: 150px;\n  background-color: #fff !important;\n  margin: 1em auto 1em 3em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 0.25; }\np.error_value {\n  margin: 0; }\ntd {\n  text-align: center !important; }\ntd.state_title {\n  text-align: center !important; }\n.medium-widget-article__clap {\n  font-family: 'Roboto', Arial, sans-serif;\n  font-weight: 700 !important;\n  color: #ddd !important; }\ng.tick line {\n  opacity: 0; }\ng.y-axis path, g.x-axis path {\n  opacity: 0; }\ng.x-axis text, g.y-axis text {\n  font-weight: 600;\n  color: #333;\n  font-size: 1em;\n  font-family: 'Montserrat', 'Roboto', 'Arial', sans-serif; }\ng.legend text {\n  font-family: 'Roboto', 'Arial', sans-serif;\n  font-family: 600;\n  font-size: 0.75em; }\nhtml, body {\n  background: #14213d;\n  -webkit-font-kerning: none;\n          font-kerning: none;\n  letter-spacing: inherit;\n  text-rendering: optimizeLegibility; }\n.area {\n  fill: rgba(221, 221, 221, 0.5); }\n.line {\n  stroke-width: 2; }\nstrong {\n  font-weight: 600 !important; }\n.top {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: auto;\n  height: auto;\n  position: relative;\n  background: -webkit-gradient(linear, left top, right top, from(#14213d), to(#000000));\n  background: linear-gradient(to right, #14213d, #000000); }\n@media (max-width: 600px) {\n    .top {\n      background-size: cover !important; } }\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    .top {\n      background-size: cover !important; } }\n.top .line1 {\n    font-family: 'Abril Fatface', 'Playfair Display', 'Roboto', 'Arial', sans-serif;\n    -webkit-font-kerning: none;\n            font-kerning: none;\n    font-size: 3em;\n    margin: 0 auto;\n    color: #FFFFFF;\n    line-height: 1.25em; }\n.top button {\n    display: -webkit-box !important;\n    display: flex !important;\n    -webkit-box-pack: center !important;\n            justify-content: center !important;\n    -webkit-box-align: center !important;\n            align-items: center !important; }\n.top-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 5;\n  max-width: 700px;\n  width: 100%;\n  height: 100vh;\n  max-height: 750px;\n  margin: auto;\n  -webkit-box-align: center;\n          align-items: center; }\n@media (max-width: 600px) {\n    .top-wrapper {\n      height: 85vh !important; } }\nsvg.jumbo {\n  position: absolute;\n  overflow: visible;\n  z-index: 8; }\nsvg.jumbobar {\n  position: absolute;\n  overflow: visible;\n  z-index: 8; }\n.typewriter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.callout_jumbo {\n  margin: 1em auto 10em auto; }\n.callout_jumbo a {\n    margin-left: 1em; }\n.aboutme-nav {\n  height: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background: #FFFFFF; }\n.aboutme-nav .aboutme-header {\n    max-width: 325px;\n    -webkit-box-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: auto;\n    padding: 1em;\n    font-size: 3em;\n    font-weight: 700;\n    color: #14213d;\n    font-family: 'Abril Fatface', 'Playfair Display', 'Roboto', 'Arial', sans-serif; }\n.aboutme-nav img {\n    max-height: 250px;\n    min-width: 250px;\n    z-index: 100;\n    border-radius: 50%;\n    image-rendering: auto;\n    image-rendering: crisp-edges;\n    margin-bottom: 1em; }\n.aboutme-nav .cci-photo {\n    max-width: 180px; }\n.aboutme-nav .cunysps-photo {\n    max-width: 180px; }\n.aboutme-nav .aboutme-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    flex-basis: auto;\n    align-items: center;\n    margin: 0em auto 3em auto; }\n@media (max-width: 900px) {\n      .aboutme-nav .aboutme-wrapper {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column; }\n        .aboutme-nav .aboutme-wrapper .cunysps-photo {\n          max-width: 180px;\n          margin: 1em 1em -1em auto; } }\n.aboutme-nav .svg-wrapper-me {\n    height: 600px;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    flex-basis: auto;\n    margin: 2em;\n    border: 3px solid rgba(51, 51, 51, 0.1);\n    padding: 2em;\n    background: #ddd; }\n@media only screen and (min-width: 992px) {\n      .aboutme-nav .svg-wrapper-me {\n        width: 600px; } }\n@media only screen and (max-width: 991px) {\n      .aboutme-nav .svg-wrapper-me {\n        height: 500px; } }\n.aboutme-nav .svg-wrapper-me .aboutme-context {\n      z-index: 100;\n      font-size: 1.30em;\n      z-index: 100;\n      max-width: 300px;\n      width: 90%;\n      text-align: center;\n      color: #14213d;\n      line-height: 1.55em; }\n.aboutme-nav .svg-wrapper-me .aboutme-context .highlight {\n        background-color: #eee;\n        padding: 0.1em;\n        color: #14213d; }\n.aboutme-nav .callout-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    flex-basis: auto;\n    margin: 3em 0;\n    width: 90%; }\n@media only screen and (min-width: 992px) {\n      .aboutme-nav .callout-wrapper {\n        width: 520px; } }\n@media only screen and (max-width: 991px) {\n      .aboutme-nav .callout-wrapper {\n        height: inherit; } }\n.aboutme-nav .callout-wrapper .svg-wrapper-callout1, .aboutme-nav .callout-wrapper .svg-wrapper-callout2 {\n      height: auto;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: flex;\n      min-height: 300px;\n      border: 3px solid rgba(51, 51, 51, 0.1);\n      background: #ddd;\n      margin: 5em auto;\n      width: 90%; }\n.aboutme-nav .callout-wrapper .svg-wrapper-callout1 h5, .aboutme-nav .callout-wrapper .svg-wrapper-callout2 h5 {\n        padding: 1em; }\n.aboutme-nav .callout-wrapper .call-out {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      max-width: 300px;\n      text-align: center;\n      color: #14213d; }\n.aboutme-nav .callout-wrapper .call-out a {\n        font-weight: 700;\n        color: inherit;\n        line-height: 1.25em; }\n.aboutme-nav .callout-wrapper .call-out h5 {\n        font-size: 1.30em;\n        line-height: 1.55em; }\n.aboutme-nav .callout-wrapper .aboutme-context {\n      z-index: 100;\n      text-align: center;\n      color: #14213d; }\n.aboutme-nav .callout-wrapper .aboutme-context h5 {\n        padding: 1em; }\n.aboutme-nav .callout-wrapper .aboutme-context .highlight {\n        background-color: #eee;\n        padding: 0.1em; }\n.projects-div {\n  height: auto;\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 24.1.1%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 1924.5 1081%22 style%3D%22enable-background%3Anew 0 0 1924.5 1081%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill%3A%23F2F2F2%3B%7D%09.st1%7Bfill%3A%23F2F2F2%3Bstroke%3A%23000000%3Bstroke-width%3A1.01%3Bstroke-miterlimit%3A10%3B%7D%3C%2Fstyle%3E%3Cg id%3D%22Layer_2_1_%22%3E%09%3Cg id%3D%22Layer_1-2%22%3E%09%09%3Cpath class%3D%22st0%22 d%3D%22M1924.5%2C0.9C1888.8%2C89%2C1819.6%2C210%2C1697%2C305.9c-60.5%2C47.3-123.9%2C79.3-489.2%2C187.8%09%09%09c-321.3%2C95.5-363.7%2C97.9-443%2C158.5C630.4%2C755%2C640.8%2C833.3%2C526.2%2C932C436%2C1009.6%2C281.4%2C1088.9%2C1%2C1077.4V1.4h1915l-0.5-0.5H1924.5z%22%09%09%09%2F%3E%09%09%3Cline class%3D%22st1%22 x1%3D%220.5%22 y1%3D%221081%22 x2%3D%220.5%22 y2%3D%220%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat center center;\n  background-size: cover;\n  margin-top: -7px; }\n.projects-wrapper {\n  display: -ms-grid;\n  display: grid;\n  grid-column-gap: 7.5px;\n  grid-row-gap: 6em;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  width: 97.5%;\n  max-width: 900px;\n  margin: auto;\n  background-color: #f9f9f9;\n  padding: 0.5em 0.5em 0.5em 0.5em; }\n@media (max-width: 600px) {\n    .projects-wrapper {\n      -ms-grid-columns: 1fr;\n          grid-template-columns: 1fr;\n      grid-row-gap: 0em;\n      width: 100%; } }\n.projects-header {\n  max-width: 300px;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: auto;\n  padding: 1em;\n  font-size: 3em;\n  font-weight: 700;\n  color: #14213d;\n  font-family: 'Abril Fatface', 'Playfair Display', 'Roboto', 'Arial', sans-serif; }\n.project_title {\n  font-weight: 400;\n  font-family: 'Abril Fatface', 'Playfair Display', 'Roboto', 'Arial', sans-serif;\n  text-align: center;\n  font-size: 2em;\n  margin: 1em auto;\n  max-width: 85%; }\n@media (max-width: 600px) {\n    .project_title {\n      padding: 0 1em; } }\n.project_title .highlight-title {\n    color: #14213d; }\n.project_title .Interaction--title-alt {\n    color: #14213d; }\n.project_one, .project_two, .project_three, .project_four, .project_five {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background: #FFFFFF;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border: 1px solid #e7e7e7; }\n.project_one a, .project_two a, .project_three a, .project_four a, .project_five a {\n    text-decoration: none;\n    color: inherit;\n    font-weight: 700; }\n.project_one a.project_screenshot, .project_two a.project_screenshot, .project_three a.project_screenshot, .project_four a.project_screenshot, .project_five a.project_screenshot {\n    margin: auto; }\n.project_one img.project_screenshot, .project_two img.project_screenshot, .project_three img.project_screenshot, .project_four img.project_screenshot, .project_five img.project_screenshot {\n    margin: 1em auto; }\n@media (max-width: 600px) {\n      .project_one img.project_screenshot, .project_two img.project_screenshot, .project_three img.project_screenshot, .project_four img.project_screenshot, .project_five img.project_screenshot {\n        width: 95vw;\n        max-width: 100%; } }\n.project_one .project_summary_header, .project_two .project_summary_header, .project_three .project_summary_header, .project_four .project_summary_header, .project_five .project_summary_header {\n    text-align: left;\n    padding: 1em;\n    margin: auto;\n    font-size: 1.35em;\n    font-weight: 700;\n    color: #FFFFFF; }\n@media (max-width: 600px) {\n      .project_one .project_summary_header, .project_two .project_summary_header, .project_three .project_summary_header, .project_four .project_summary_header, .project_five .project_summary_header {\n        text-align: left; } }\n.project_one .project_description, .project_two .project_description, .project_three .project_description, .project_four .project_description, .project_five .project_description {\n    text-align: left;\n    width: 90%;\n    max-width: 600px;\n    line-height: 1.5em;\n    font-size: 1.15em;\n    font-weight: 500;\n    margin: auto; }\n@media (max-width: 600px) {\n      .project_one .project_description, .project_two .project_description, .project_three .project_description, .project_four .project_description, .project_five .project_description {\n        text-align: left;\n        width: 80vw; } }\n.project_one .project_description .Interaction--desc, .project_two .project_description .Interaction--desc, .project_three .project_description .Interaction--desc, .project_four .project_description .Interaction--desc, .project_five .project_description .Interaction--desc {\n      color: #14213d; }\n.project_one .project_description .highlight-desc-alt, .project_two .project_description .highlight-desc-alt, .project_three .project_description .highlight-desc-alt, .project_four .project_description .highlight-desc-alt, .project_five .project_description .highlight-desc-alt {\n      color: #14213d; }\n.project_one {\n  background: url('entertainment-web-app-screenshot.png') center center no-repeat;\n  background-size: cover;\n  min-height: 400px;\n  position: relative;\n  min-width: 100%;\n  z-index: 1; }\n.project_one .highlight-title {\n    color: #14213d; }\n.project_one a {\n    visibility: visible; }\n.project_one .highlight-title {\n    color: #14213d;\n    background-color: rgba(255, 255, 255, 0.7);\n    line-height: 1.5em; }\n@media (max-width: 600px) {\n    .project_one {\n      max-width: 100%;\n      margin: auto; } }\n.project_two {\n  background: url('weather-screenshot.png') center center no-repeat;\n  background-size: cover;\n  min-height: 350px;\n  min-width: 100%;\n  margin-top: 4em; }\n.project_two .highlight-title {\n    color: #14213d;\n    background-color: rgba(255, 255, 255, 0.7);\n    line-height: 1.5em; }\n.project_two a {\n    visibility: visible; }\n@media (max-width: 600px) {\n    .project_two {\n      max-width: 100%;\n      margin: auto; } }\n.project_three {\n  background: url('sample3.jpg') center center no-repeat;\n  background-size: cover;\n  min-height: 400px;\n  min-width: 100%; }\n.project_three .highlight-title {\n    color: #14213d;\n    background-color: rgba(255, 255, 255, 0.7);\n    line-height: 1.5em; }\n.project_three a {\n    visibility: visible; }\n@media (max-width: 600px) {\n    .project_three {\n      max-width: 100%;\n      margin: auto; } }\n.project_one_context, .project_two_context, .project_three_context, .project_four_context, .project_five_context {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 2em;\n  line-height: 1.25em; }\n.project_one_context .highlight-desc a, .project_two_context .highlight-desc a, .project_three_context .highlight-desc a, .project_four_context .highlight-desc a, .project_five_context .highlight-desc a {\n    text-decoration: none;\n    color: #000000;\n    font-weight: 700; }\n.project_four {\n  background: url('sample4.jpg') center center no-repeat;\n  background-size: cover;\n  min-height: 400px;\n  position: relative;\n  min-width: 100%;\n  z-index: 1; }\n.project_four .highlight-title {\n    color: #14213d;\n    background-color: rgba(255, 255, 255, 0.7);\n    line-height: 1.5em; }\n.project_four a {\n    visibility: visible; }\n@media (max-width: 600px) {\n    .project_four {\n      max-width: 100%;\n      margin: auto; } }\n.project_five {\n  background: url('sample5.jpg') center center no-repeat;\n  background-size: cover;\n  min-height: 400px;\n  position: relative;\n  min-width: 100%;\n  z-index: 1; }\n.project_five .highlight-title {\n    color: #14213d; }\n.project_five a {\n    visibility: visible; }\n.project_five .highlight-title {\n    color: #14213d;\n    background-color: rgba(255, 255, 255, 0.7);\n    line-height: 1.5em; }\n@media (max-width: 600px) {\n    .project_five {\n      max-width: 100%;\n      margin: auto; } }\n.mid1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: auto;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 7em auto;\n  background: #14213d;\n  border-top: 2px solid #FFFFFF;\n  border-bottom: 2px solid #FFFFFF; }\n.mid1 h2 {\n    font-size: 1.5em; }\n@media (max-width: 600px) {\n    .mid1 {\n      border: none;\n      margin-bottom: 2em; } }\n.mid1 .medium-posts {\n    padding: 1em 0em 4em 0em; }\n.mid1 .medium-header {\n    max-width: 325px;\n    -webkit-box-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: auto;\n    padding: 1em;\n    font-size: 3em;\n    font-weight: 700;\n    color: white;\n    font-family: 'Abril Fatface', 'Playfair Display', 'Roboto', 'Arial', sans-serif; }\n.mid1 .medium-wrapper {\n    display: -webkit-box;\n    display: flex;\n    margin: 1em;\n    border: 4px solid #fca311; }\n@media (max-width: 600px) {\n      .mid1 .medium-wrapper {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column; }\n        .mid1 .medium-wrapper .mid1 {\n          max-width: 100%;\n          margin: 4em auto 0em auto; }\n        .mid1 .medium-wrapper .mid1-right {\n          margin: 0; } }\n.section4 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  height: auto;\n  background: #FFFFFF;\n  padding-bottom: 4em; }\n.section4 .section4-header {\n    max-width: 450px;\n    -webkit-box-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: auto;\n    padding: 1em;\n    font-size: 3em;\n    font-weight: 700;\n    color: #14213d;\n    font-family: 'Abril Fatface', 'Playfair Display', 'Roboto', 'Arial', sans-serif; }\n@media (max-width: 600px) {\n      .section4 .section4-header {\n        max-width: 350px; } }\n.section4 h2, .section4 h5 {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    color: #14213d;\n    font-weight: 700;\n    font-family: 'Playfair Display', 'Roboto', 'Arial', sans-serif;\n    padding: 10px;\n    text-align: center;\n    line-height: 1.55em; }\n.info_div {\n  width: 80%;\n  max-width: 600px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  padding: 1em;\n  line-height: 1.5em; }\n@media (max-width: 600px) {\n    .info_div {\n      background-size: cover !important; } }\n.info_div .section4-content p {\n    font-size: 1.2em; }\n@media (max-width: 600px) {\n    .info_div .section4-content {\n      margin: 0em 4em; } }\n@media (max-width: 600px) {\n    .info_div {\n      width: 100%; }\n      .info_div img {\n        width: 100%;\n        margin-bottom: 1.25em; } }\n.info_div li {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n.mid1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: auto;\n  max-width: 900px;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  padding: 1em;\n  height: auto; }\n.mid1 .medium-logo img {\n    max-width: 190px;\n    height: 3em; }\n.mid1 h2 {\n    margin: .25em auto 1em auto;\n    color: #ddd;\n    text-align: center;\n    border-color: #ddd;\n    font-family: 'Abril Fatface', 'Playfair Display', 'Roboto', 'Arial', sans-serif; }\n@media (max-width: 600px) {\n    .mid1 {\n      width: 100%; }\n      .mid1 img {\n        width: 100%; } }\n.mid1 h3 {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    color: #fff;\n    padding: 10px;\n    text-align: center;\n    font-family: 'Playfair Display', 'Roboto', 'Arial', sans-serif;\n    font-weight: 700; }\n.mid1 #medium-widget {\n    display: -webkit-box;\n    display: flex;\n    max-width: 600px;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    display: flex;\n    margin: 0em auto 0em auto; }\n.mid1 .medium-widget-article__grid {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n@media (max-width: 600px) {\n      .mid1 .medium-widget-article__grid {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        padding: 1em; }\n        .mid1 .medium-widget-article__grid .medium-widget-article__title {\n          text-align: left; }\n        .mid1 .medium-widget-article__grid .medium-widget-article__image img {\n          width: 95%;\n          margin-bottom: 3em; } }\n.mid1 .medium-widget-article__info {\n    margin-top: 15px !important;\n    margin-left: 0px !important;\n    margin-right: -5px !important; }\n.mid1 .medium-widget-article__description {\n    font-family: 'Roboto', Arial, sans-serif;\n    color: #ddd; }\n.mid1 .medium-widget-article__title {\n    font-family: 'Roboto', Arial, sans-serif;\n    font-weight: 700 !important;\n    color: #fff; }\n.mid1 .medium-widget-article__date {\n    font-family: 'Roboto', Arial, sans-serif;\n    font-weight: 700 !important;\n    color: #f2f2f2 !important;\n    background: #14213d !important;\n    border: 2px solid #F2F2F2 !important;\n    opacity: 0.5;\n    padding-left: 0.75em;\n    padding-right: 0.75em; }\n.mid1 .medium-widget-article__clap {\n    font-family: 'Roboto', Arial, sans-serif;\n    font-weight: 700 !important;\n    color: #14213d !important;\n    background: #FFFFFF;\n    opacity: 0.5;\n    padding-right: 0.5em; }\n.mid1 .medium-widget-article__image {\n    margin-right: 1em !important;\n    display: none; }\n.mid1 .medium-widget-article__image img {\n      margin: 0;\n      border-radius: 0 !important; }\n.mid1 .state_title {\n    text-align: center !important; }\n.mid1 td {\n    text-align: center !important; }\n.annotations {\n  stroke-width: 2px; }\n.myviz {\n  opacity: 0;\n  -webkit-animation: fadein 0s 2s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 0s 2s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  fill: #14213d; }\n.myviz path.subject {\n    fill-opacity: 1; }\n.mediumposts {\n  opacity: 0;\n  -webkit-animation: fadein 0s 4.5s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 0s 4.5s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  fill: #14213d; }\n.mediumposts path.subject {\n    fill-opacity: 1; }\n.mywork {\n  opacity: 0;\n  -webkit-animation: fadein 0s 6.5s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 0s 6.5s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  fill: #14213d; }\n.mywork path.subject {\n    fill-opacity: 1; }\n@keyframes fadein {\n  1% {\n    opacity: 0; }\n  25% {\n    opacity: 0.25; }\n  50% {\n    opacity: 0.5; }\n  100% {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  1% {\n    opacity: 0; }\n  25% {\n    opacity: 0.25; }\n  50% {\n    opacity: 0.5; }\n  100% {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.aboutme {\n  opacity: 0;\n  -webkit-animation: fadein 0s 1s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 0s 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n.aboutme path.subject {\n    fill-opacity: 1; }\n.myviz:hover {\n  cursor: pointer;\n  stroke-width: 3px;\n  fill-opacity: 1; }\n.myviz:hover text {\n    font-size: 1.05em; }\n.myviz:hover path.subject {\n    fill-opacity: 1; }\n.mywork:hover {\n  cursor: pointer;\n  stroke-width: 3px;\n  fill-opacity: 1; }\n.mywork:hover text {\n    font-size: 1.05em; }\n.mywork:hover path.subject {\n    fill-opacity: 1; }\n.aboutme:hover {\n  cursor: pointer;\n  stroke-width: 3px;\n  fill-opacity: 1; }\n.aboutme:hover text {\n    font-size: 1.05em; }\n.aboutme:hover path.subject {\n    fill-opacity: 1; }\n.mediumposts:hover {\n  cursor: pointer;\n  stroke-width: 3px;\n  fill-opacity: 1; }\n.mediumposts:hover text {\n    font-size: 1.05em; }\n.mediumposts:hover path.subject {\n    fill-opacity: 1; }\n.parent {\n  -webkit-box-pack: center;\n          justify-content: center;\n  line-height: 1.5em; }\n.parent_tb {\n  -webkit-box-pack: center;\n          justify-content: center;\n  line-height: 1.5em; }\n.summary_final {\n  text-align: left;\n  padding: 1em 2em 3em 2em;\n  max-width: 400px;\n  margin: 1em auto 3em auto;\n  line-height: 1.25em;\n  margin-bottom: 1em; }\n.annotation-subject {\n  fill-opacity: 1;\n  fill: #fca311; }\n.square-btn.navigate {\n  color: #fff !important;\n  min-width: 10em;\n  box-shadow: none;\n  display: -webkit-box;\n  display: flex;\n  margin: 2em auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  background: #fca311 !important;\n  border: 2px solid #fca311 !important;\n  text-transform: capitalize;\n  font-weight: 200; }\n.square-btn.rpubs {\n  color: #fff !important;\n  min-width: 10em;\n  box-shadow: none;\n  display: -webkit-box;\n  display: flex;\n  margin: 0 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  background: #fca311 !important;\n  border: 2px solid #fca311 !important;\n  text-transform: capitalize;\n  font-weight: 200; }\n.annotation-note-bg {\n  fill-opacity: 1;\n  width: 7.5em;\n  height: 2.25em;\n  -webkit-transform: translate(-9px, -3.5px);\n          transform: translate(-9px, -3.5px);\n  fill: #FFFFFF; }\n.annotation-note-title {\n  fill: #14213d;\n  fill-opacity: 1;\n  font-family: 'Roboto', 'FontAwesome', sans-serif;\n  -webkit-transform: translate(2px, 5px);\n          transform: translate(2px, 5px); }\n@media (max-width: 600px) {\n    .annotation-note-title {\n      font-family: 'Roboto', 'FontAwesome', sans-serif; } }\n.annotation-subject {\n  fill: #FFFFFF; }\npath.note-line {\n  opacity: 0; }\n.button-wrapper-abtme .btn-floating.btn-small.waves-effect.waves-light.navs {\n  border: 2px solid #fca311 !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  color: #fca311;\n  margin-right: 12px;\n  margin-left: 3px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.button-wrapper-abtme .btn-floating.btn-small.waves-effect.waves-light.navs i {\n    line-height: 25px !important;\n    color: #fca311 !important;\n    padding-right: 0.2em; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_jumbotron_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/jumbotron.json */ "./src/assets/jumbotron.json");
var _assets_jumbotron_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/Object.assign({}, _assets_jumbotron_json__WEBPACK_IMPORTED_MODULE_1__, {"default": _assets_jumbotron_json__WEBPACK_IMPORTED_MODULE_1__});
/* harmony import */ var _assets_jumbotronbar_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/jumbotronbar.json */ "./src/assets/jumbotronbar.json");
var _assets_jumbotronbar_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/Object.assign({}, _assets_jumbotronbar_json__WEBPACK_IMPORTED_MODULE_2__, {"default": _assets_jumbotronbar_json__WEBPACK_IMPORTED_MODULE_2__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.fakecases = _assets_jumbotron_json__WEBPACK_IMPORTED_MODULE_1__["fakedata"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.width = window.innerWidth;
        this.height = document.getElementById('top').clientHeight;
        if (this.width >= 600) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
        }
        this.drawJumbo();
        this.drawJumboBar();
    };
    HomeComponent.prototype.scroll = function (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    };
    HomeComponent.prototype.drawJumbo = function () {
        this.fakecases = _assets_jumbotron_json__WEBPACK_IMPORTED_MODULE_1___namespace;
    };
    HomeComponent.prototype.drawJumboBar = function () {
        this.fakecasesbar = _assets_jumbotronbar_json__WEBPACK_IMPORTED_MODULE_2___namespace;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav (scroll)=\"onWindowScroll($event)\" *ngIf=\"mobile\" class=\"navigation-mobile\">\n  <div class=\"nav-wrapper\">\n    <a href='/'><h5 class=\"name\">Eric Bello</h5></a>\n    <div class=\"button-wrapper\">\n      <a href=\"mailto:ericnbello@gmail.com\" class=\"btn-floating btn-small waves-effect waves-light white navs\"><i class=\"fa fa-envelope\"></i></a>\n      <a href=\"https://www.github.com/ericnbello\" target=\"_blank\" class=\"btn-floating btn-small waves-effect waves-light white navs\"><i class=\"fab fa-github\"></i></a>\n      <a href=\"https://www.linkedin.com/in/ericnbello\" target=\"_blank\" class=\"btn-floating btn-small waves-effect waves-light white navs\"><i class=\"fa fa-linkedin\"></i></a>\n    </div>\n  </div>\n</nav>\n\n<nav (scroll)=\"onWindowScroll($event)\" *ngIf=\"!mobile\">\n    <div class=\"nav-wrapper\">\n      <h5 class=\"name\">Eric Bello</h5>\n      <div class=\"button-wrapper\">\n        <a href=\"mailto:ericnbello@gmail.com\" class=\"btn-floating btn-small waves-effect waves-light white navs\"><i class=\"fa fa-envelope\"></i></a>\n        <a href=\"https://www.github.com/ericnbello\" target=\"_blank\" class=\"btn-floating btn-small waves-effect waves-light white navs\"><i class=\"fab fa-github\"></i></a>\n        <a href=\"https://www.linkedin.com/in/ericnbello\" target=\"_blank\" class=\"btn-floating btn-small waves-effect waves-light white navs\"><i class=\"fa fa-linkedin\"></i></a>\n      </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap\");\n/* You can add global styles to this file, and also import other style files */\n/* COLOR SCHEME */\n/* Color Theme Swatches in Hex */\nbody, nav {\n  font-family: 'Roboto', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: geometricPrecision;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  z-index: 1;\n  -webkit-font-smoothing: subpixel-antialiased; }\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: geometricPrecision;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none; }\nnav {\n  background-color: transparent !important;\n  box-shadow: none !important;\n  position: fixed !important;\n  z-index: 9999 !important; }\nnav a {\n    color: #343a40 !important;\n    margin: 0;\n    text-decoration: none;\n    z-index: 1 !important; }\nnav a.waves-effect.waves-light.btn.square-btn {\n    border-radius: 10px !important;\n    z-index: 0.25 !important; }\nnav i {\n    color: #343a40 !important; }\nnav a:hover {\n    text-decoration: none !important; }\n.square-btn {\n  height: 3em !important;\n  border-radius: 25px !important;\n  color: #14213d !important;\n  font-weight: 700;\n  font-size: 1em;\n  max-width: 150px;\n  background-color: #fff !important;\n  margin: 1em auto 1em 3em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 0.25; }\np.error_value {\n  margin: 0; }\ntd {\n  text-align: center !important; }\ntd.state_title {\n  text-align: center !important; }\n.medium-widget-article__clap {\n  font-family: 'Roboto', Arial, sans-serif;\n  font-weight: 700 !important;\n  color: #ddd !important; }\ng.tick line {\n  opacity: 0; }\ng.y-axis path, g.x-axis path {\n  opacity: 0; }\ng.x-axis text, g.y-axis text {\n  font-weight: 600;\n  color: #333;\n  font-size: 1em;\n  font-family: 'Montserrat', 'Roboto', 'Arial', sans-serif; }\ng.legend text {\n  font-family: 'Roboto', 'Arial', sans-serif;\n  font-family: 600;\n  font-size: 0.75em; }\nnav {\n  -webkit-font-smoothing: antialiased;\n  text-rendering: geometricPrecision;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  z-index: 1; }\n.nav-wrapper {\n  height: 50px;\n  width: 100vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #fff; }\n.nav-wrapper .name {\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n    font-family: 'Playfair Display', 'Arial', sans-serif;\n    font-weight: 900;\n    color: #fff;\n    margin: 0.025em 0 0.25em 0 !important; }\n.nav-wrapper .button-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n.nav-wrapper .button-wrapper .btn-floating.btn-small.waves-effect.waves-light.navs {\n      border: 2px solid #fff;\n      background-color: transparent !important;\n      margin-right: 12px;\n      margin-bottom: 5px;\n      box-shadow: none !important;\n      z-index: 1; }\n.nav-wrapper .button-wrapper .btn-floating.btn-small.waves-effect.waves-light.navs i {\n        line-height: 25px !important;\n        color: #fff !important; }\nnav.navigation-mobile {\n  height: 50px; }\nnav.navigation-mobile .nav-wrapper {\n    height: 50px; }\n.nav-wrapper.nav-wrapper-light {\n  background: #eee;\n  /* fallback for old browsers */\n  height: 50px;\n  width: 100vw;\n  z-index: 100;\n  border-bottom: 1px solid #14213d; }\n.nav-wrapper.nav-wrapper-light .name {\n    color: #14213d; }\n.nav-wrapper.nav-wrapper-light .button-wrapper .btn-floating.btn-small.waves-effect.waves-light.navs {\n    border: 2px solid #14213d !important;\n    color: #14213d; }\n.nav-wrapper.nav-wrapper-light .button-wrapper .btn-floating.btn-small.waves-effect.waves-light.navs i {\n      line-height: 25px !important;\n      color: #14213d !important; }\n.navs i {\n  width: initial !important;\n  vertical-align: baseline !important;\n  line-height: 51px !important; }\n.btn-floating.waves-effect.waves-light.top {\n  border: 3px solid #14213d;\n  background-color: transparent !important;\n  z-index: 1; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.mobile = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 767) {
            this.mobile = true;
        }
    };
    NavbarComponent.prototype.onWindowScroll = function (e) {
        var element = document.querySelector('.nav-wrapper');
        element.classList.add('nav-wrapper-light');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onWindowScroll", null);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/resume.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar-wrapper\">\n      <div class=\"profile-container\">\n          <h1 class=\"name\">Your Name</h1>\n          <h3 class=\"tagline\">Your Title</h3>\n      </div><!--//profile-container-->\n\n      <div class=\"contact-container container-block\">\n        <h2 class=\"container-block-title\">Contact</h2>\n          <ul class=\"list-unstyled contact-list\">\n              <li class=\"email\"><i class=\"fa fa-envelope\"></i><a href=\"###\">email address</a></li>\n              <li class=\"phone\"><i class=\"fa fa-phone\"></i><a href=\"###\">phone number</a></li>\n              <li class=\"linkedin\"><i class=\"fa fa-linkedin\"></i><a href=\"###\" target=\"_blank\">linkedin/...</a></li>\n              <li class=\"medium\"><i class=\"fa fa-medium\"></i><a href=\"###\" target=\"_blank\">medium/...</a></li>\n              <li class=\"github\"><i class=\"fa fa-github\"></i><a href=\"###\" target=\"_blank\">github/...</a></li>\n              <li class=\"twitter\"><i class=\"fa fa-twitter\"></i><a href=\"###\" target=\"_blank\">@...</a></li>\n          </ul>\n      </div><!--//contact-container-->\n      <div class=\"education-container container-block\">\n          <h2 class=\"container-block-title\">Education</h2>\n          <div class=\"item\">\n              <h4 class=\"degree\">Degree</h4>\n              <h5 class=\"meta\">School</h5>\n              <div class=\"time\">Years in school</div>\n          </div><!--//item-->\n      </div><!--//education-container-->\n\n  </div><!--//sidebar-wrapper-->\n\n  <div class=\"main-wrapper\">\n\n      <section class=\"section summary-section\">\n          <h2 class=\"section-title\"><i class=\"fa fa-user\"></i>Career Profile</h2>\n          <hr>\n          <div class=\"summary\">\n              <p>Add text that summarizes your work experience</p>\n          </div><!--//summary-->\n      </section><!--//section-->\n\n      <section class=\"section experiences-section\">\n          <h2 class=\"section-title\"><i class=\"fa fa-bar-chart\"></i>Data Engineering & Data Science Experience</h2>\n          <div class=\"company\"><a class=\"company-header\" href=\"###\" target=\"_blank\">Current Company Name,</a> City, State</div>\n          <div class=\"item\">\n                <div class=\"meta\">\n                  <div class=\"upper-row\">\n                      <h3 class=\"job-title\">Current Job Title</h3>\n                      <div class=\"time\">XXX - Present</div>\n                  </div><!--//upper-row-->\n              </div><!--//meta-->\n              <div class=\"details\">\n                <ul class=\"fa-ul\">\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility one.</li>\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility two.</li>\n                </ul>\n              </div><!--//details-->\n              <br>\n              <div class=\"meta\">\n                  <div class=\"upper-row\">\n                      <h3 class=\"job-title\">Previous Job Title</h3>\n                      <div class=\"time\">May 2019 - November 2020</div>\n                  </div><!--//upper-row-->\n              </div><!--//meta-->\n              <div class=\"details\">\n                <ul class=\"fa-ul\">\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility one.</li>\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility two.</li>                \n                </ul>\n              </div><!--//details-->\n              <br>\n              <div class=\"meta\">\n                  <div class=\"upper-row\">\n                      <h3 class=\"job-title\">Previous Job Title</h3>\n                      <div class=\"time\">April 2018 - May 2019</div>\n                  </div><!--//upper-row-->\n              </div><!--//meta-->\n              <div class=\"details\">\n                <ul class=\"fa-ul\">\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility one.</li>\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility two.</li>                \n                </ul>\n              </div><!--//details-->\n          </div><!--//item-->\n          \n          <hr>\n          <div class=\"company\"><a class=\"company-header\" href=\"###\" target=\"_blank\">Previous Company Name,</a> City, State</div>\n          <div class=\"item\">\n              <div class=\"meta\">\n                  <div class=\"upper-row\">\n                      <h3 class=\"job-title\">Previous Job Title</h3>\n                      <div class=\"time\">August 2017 - March 2018</div>\n                  </div><!--//upper-row-->\n              </div><!--//meta-->\n              <div class=\"details\">\n                <ul class=\"fa-ul\">\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility one.</li>\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility two.</li>                \n                </ul>\n              </div><!--//details-->\n              <br>\n              <div class=\"meta\">\n                  <div class=\"upper-row\">\n                      <h3 class=\"job-title\">Previous Job Title</h3>\n                      <div class=\"time\">October 2015 - August 2017</div>\n                  </div><!--//upper-row-->\n              </div><!--//meta-->\n              <div class=\"details\">\n                <ul class=\"fa-ul\">\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility one.</li>\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility two.</li>                </ul>\n              </div><!--//details-->\n          </div><!--//item-->\n      </section><!--//section-->\n\n      <section class=\"section projects-section\">\n          <h2 class=\"section-title\"><i class=\"fa fa-black-tie\"></i>Internships</h2>\n          <hr>\n          <div class=\"company\"><a class=\"company-header\" href=\"###\" target=\"_blank\">Previous Company Name,</a> City, State</div>\n          <div class=\"item\">\n              <div class=\"meta\">\n                  <div class=\"upper-row\">\n                      <h3 class=\"job-title\">Data Science Intern</h3>\n                      <div class=\"time\">May 2012 - August 2012</div>\n                  </div><!--//upper-row-->\n              </div><!--//meta-->\n              <div class=\"details\">\n                <ul class=\"fa-ul\">\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility one.</li>\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility two.</li>                     </ul>\n              </div><!--//details-->\n          </div><!--//item-->\n          <hr>\n          <div class=\"company\"><a class=\"company-header\" href=\"###\" target=\"_blank\">Company Name,</a> City, State</div>\n          <div class=\"item\">\n              <div class=\"meta\">\n                  <div class=\"upper-row\">\n                      <h3 class=\"job-title\">Data Science Intern</h3>\n                      <div class=\"time\">June 2011 - January 2012</div>\n                  </div><!--//upper-row-->\n              </div><!--//meta-->\n              <div class=\"details\">\n                <ul class=\"fa-ul\">\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility one.</li>\n                  <li><i class=\"fa-li fa fa-angle-right\"></i>Job responsibility two.</li>                     </ul>\n              </div><!--//details-->\n          </div><!--//item-->\n      </section>\n\n\n  </div><!--//main-body-->\n</div>"

/***/ }),

/***/ "./src/app/components/resume/resume.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap\");\n/*\n * Template Name: Orbit - Responsive Resume/CV Template for Developers\n * Version: 1.0\n * Author: Xiaoying Riley\n * Twitter: @3rdwave_themes\n * License: Creative Commons Attribution 3.0 License\n * Website: http://themes.3rdwavemedia.com/\n*/\n/* styles-6.css */\n/* ======= Base ======= */\n/* You can add global styles to this file, and also import other style files */\n/* COLOR SCHEME */\n/* Color Theme Swatches in Hex */\nbody, nav {\n  font-family: 'Roboto', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: geometricPrecision;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  z-index: 1;\n  -webkit-font-smoothing: subpixel-antialiased; }\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: geometricPrecision;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none; }\nnav {\n  background-color: transparent !important;\n  box-shadow: none !important;\n  position: fixed !important;\n  z-index: 9999 !important; }\nnav a {\n    color: #343a40 !important;\n    margin: 0;\n    text-decoration: none;\n    z-index: 1 !important; }\nnav a.waves-effect.waves-light.btn.square-btn {\n    border-radius: 10px !important;\n    z-index: 0.25 !important; }\nnav i {\n    color: #343a40 !important; }\nnav a:hover {\n    text-decoration: none !important; }\n.square-btn {\n  height: 3em !important;\n  border-radius: 25px !important;\n  color: #14213d !important;\n  font-weight: 700;\n  font-size: 1em;\n  max-width: 150px;\n  background-color: #fff !important;\n  margin: 1em auto 1em 3em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 0.25; }\np.error_value {\n  margin: 0; }\ntd {\n  text-align: center !important; }\ntd.state_title {\n  text-align: center !important; }\n.medium-widget-article__clap {\n  font-family: 'Roboto', Arial, sans-serif;\n  font-weight: 700 !important;\n  color: #ddd !important; }\ng.tick line {\n  opacity: 0; }\ng.y-axis path, g.x-axis path {\n  opacity: 0; }\ng.x-axis text, g.y-axis text {\n  font-weight: 600;\n  color: #333;\n  font-size: 1em;\n  font-family: 'Montserrat', 'Roboto', 'Arial', sans-serif; }\ng.legend text {\n  font-family: 'Roboto', 'Arial', sans-serif;\n  font-family: 600;\n  font-size: 0.75em; }\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', 'Helvetica', 'Calibri', sans-serif;\n  color: #14213d;\n  background: #FFFFFF;\n  font-size: 15px;\n  /* padding: 30px; */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 700; }\na {\n  color: #14213d;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out; }\nli {\n  margin: 0.75em auto 0.75em auto; }\na:hover {\n  text-decoration: underline;\n  color: #000000; }\na:focus {\n  text-decoration: none; }\np {\n  line-height: 1.5em; }\n.wrapper {\n  background: #14213d;\n  max-width: 960px;\n  margin: 0 auto;\n  position: relative;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); }\n.sidebar-wrapper {\n  background: #14213d;\n  position: absolute;\n  right: 0;\n  width: 240px;\n  height: 100%;\n  min-height: 800px;\n  color: #FFFFFF; }\n@media (max-width: 600px) {\n    .sidebar-wrapper {\n      min-height: 650px; }\n      .sidebar-wrapper .container-block {\n        text-align: center; } }\n.sidebar-wrapper a {\n  color: #FFFFFF; }\n.sidebar-wrapper .profile-container {\n  padding: 30px;\n  background: rgba(0, 0, 0, 0.2);\n  text-align: center;\n  color: #FFFFFF; }\n.sidebar-wrapper .name {\n  font-size: 32px;\n  font-weight: 900;\n  margin-top: 0;\n  margin-bottom: 10px; }\n.sidebar-wrapper .tagline {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: 0; }\n.sidebar-wrapper .profile {\n  margin-bottom: 15px; }\n.sidebar-wrapper .contact-list .fa {\n  margin-right: 5px;\n  font-size: 18px;\n  vertical-align: middle; }\n.sidebar-wrapper .contact-list li {\n  margin-bottom: 15px; }\n.sidebar-wrapper .contact-list li:last-child {\n  margin-bottom: 0; }\n.sidebar-wrapper .contact-list .email .fa {\n  font-size: 14px; }\n.sidebar-wrapper .container-block {\n  padding: 30px; }\n.sidebar-wrapper .container-block-title {\n  text-transform: uppercase;\n  font-size: 18px;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 15px; }\n.sidebar-wrapper .degree {\n  margin-top: 0;\n  margin-bottom: 5px;\n  font-size: 16px; }\n.sidebar-wrapper .education-container .item {\n  margin-bottom: 15px; }\n.sidebar-wrapper .education-container .item:last-child {\n  margin-bottom: 0; }\n.sidebar-wrapper .education-container .meta {\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  margin-bottom: 0px;\n  margin-top: 0;\n  font-size: 14px; }\n.sidebar-wrapper .education-container .time {\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  margin-bottom: 0px; }\n.sidebar-wrapper .languages-container .lang-desc {\n  color: rgba(255, 255, 255, 0.6); }\n.sidebar-wrapper .languages-list {\n  margin-bottom: 0; }\n.sidebar-wrapper .languages-list li {\n  margin-bottom: 10px; }\n.sidebar-wrapper .languages-list li:last-child {\n  margin-bottom: 0; }\n.sidebar-wrapper .interests-list {\n  margin-bottom: 0; }\n.sidebar-wrapper .interests-list li {\n  margin-bottom: 10px; }\n.sidebar-wrapper .interests-list li:last-child {\n  margin-bottom: 0; }\n.main-wrapper {\n  background: #fff;\n  padding: 60px;\n  padding-right: 300px; }\n.main-wrapper .section-title {\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  color: #14213d;\n  position: relative;\n  margin-top: 0;\n  margin-bottom: 20px; }\n.main-wrapper .section-title .fa {\n  width: 30px;\n  height: 30px;\n  margin-right: 8px;\n  display: inline-block;\n  color: #FFFFFF;\n  border-radius: 50%;\n  background-clip: padding-box;\n  background: #14213d;\n  text-align: center;\n  padding-top: 8px;\n  font-size: 16px;\n  position: relative;\n  top: -2px; }\n.main-wrapper .section {\n  margin-bottom: 25px; }\n.main-wrapper .experiences-section .item {\n  margin-bottom: 25px; }\n.main-wrapper .upper-row {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 2px;\n  color: #14213d; }\n.main-wrapper .job-title {\n  color: rgba(45, 51, 63, 0.8);\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 600; }\n.main-wrapper .time {\n  position: relative;\n  right: 0;\n  top: 0;\n  color: rgba(45, 51, 63, 0.7);\n  font-size: 13px;\n  font-weight: 600; }\n.main-wrapper .company {\n  margin-bottom: 10px; }\n.main-wrapper .project-title {\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: 5px; }\n.main-wrapper .projects-section .intro {\n  margin-bottom: 0px; }\n.main-wrapper .projects-section .item {\n  margin-bottom: 15px; }\n.skillset .item {\n  margin-bottom: 15px;\n  overflow: hidden; }\n.skillset .level-title {\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 12px; }\n.skillset .level-bar {\n  height: 12px;\n  background: #FFFFFF; }\n.skillset .level-bar-inner {\n  height: 12px;\n  background: #14213d; }\n.footer {\n  padding: 30px;\n  padding-top: 60px; }\n.footer .copyright {\n  line-height: 1.6;\n  color: #14213d;\n  font-size: 13px; }\n/* Extra small devices (phones, less than 768px) */\n@media (max-width: 767px) {\n  .sidebar-wrapper {\n    position: static;\n    width: inherit; }\n  .main-wrapper {\n    padding: 30px; }\n  .main-wrapper .time {\n    position: static;\n    display: block;\n    margin-top: 5px; }\n  .main-wrapper .upper-row {\n    margin-bottom: 0; } }\n/* Small devices (tablets, 768px and up) */\n/* Medium devices (desktops, 992px and up) */\n@media (min-width: 992px) {\n  .skillset .level-title {\n    display: inline-block;\n    float: left;\n    width: 30%;\n    margin-bottom: 0; }\n  .skillset .level-bar {\n    display: inline-block;\n    width: 70%;\n    float: left;\n    position: relative;\n    top: 1px; } }\n/* Large devices (large desktops, 1200px and up) */\n/* Ex-Large devices (large desktops, 1200px and up) */\na.company-header {\n  /* color: #545E6C; */\n  color: #14213d;\n  font-weight: 700; }\na.publications {\n  font-weight: 700; }\np.resume-bold {\n  font-weight: 700; }\ndiv.company {\n  font-size: 17px;\n  /* color: #545E6C; */\n  color: #14213d;\n  font-weight: 700; }\n"

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/components/resume/resume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/components/simplebarchart/simplebarchart.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/simplebarchart/simplebarchart.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/simplebarchart/simplebarchart.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/simplebarchart/simplebarchart.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/simplebarchart/simplebarchart.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/simplebarchart/simplebarchart.component.ts ***!
  \***********************************************************************/
/*! exports provided: SimplebarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplebarchartComponent", function() { return SimplebarchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _assets_jumbotronbar_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/jumbotronbar.json */ "./src/assets/jumbotronbar.json");
var _assets_jumbotronbar_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/Object.assign({}, _assets_jumbotronbar_json__WEBPACK_IMPORTED_MODULE_2__, {"default": _assets_jumbotronbar_json__WEBPACK_IMPORTED_MODULE_2__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimplebarchartComponent = /** @class */ (function () {
    function SimplebarchartComponent() {
    }
    SimplebarchartComponent.prototype.ngOnInit = function () {
        var fakeDataBar = _assets_jumbotronbar_json__WEBPACK_IMPORTED_MODULE_2__["fakedatabar"];
        this.currentCasesBar = fakeDataBar[Object.keys(fakeDataBar)[Object.keys(fakeDataBar).length - 1]];
        var width = window.innerWidth;
        var height = document.getElementById('top').clientHeight;
        var widthsvg = document.getElementById('top').clientWidth;
        var yheight = 250;
        if (width >= 600) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
        }
        if (width <= 600) {
            yheight = 200;
        }
        this.drawfakeCasesBar(width, height, this.data, yheight, widthsvg);
    };
    SimplebarchartComponent.prototype.drawfakeCasesBar = function (width, height, datapull, yheight, widthsvg) {
        datapull = datapull.fakedatabar;
        if (width >= 450) {
            width = widthsvg;
        }
        var parseTime = d3__WEBPACK_IMPORTED_MODULE_1__["timeParse"]('%m/%d/%Y');
        var xBar = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().range([0, width]).padding(0.05);
        var yBar = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, yheight]);
        xBar.domain(datapull.map(function (d) { return parseTime(d.date); }));
        yBar.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](datapull, function (d) { return d.cases; })]);
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.top-wrapper').append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('x', 0)
            .attr('y', 0)
            .attr('class', 'jumbobar')
            .append('g')
            .attr('transform', 'translate(0, 0)');
        svg.selectAll('.bar')
            .data(datapull)
            .enter().append('rect')
            .attr('x', function (d) { return xBar(parseTime(d.date)); })
            .attr('width', xBar.bandwidth())
            .attr('y', function (d) { return height - yBar(d.cases); })
            .attr('height', function (d) { return yBar(d.cases); })
            .attr('fill', '#738A90');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SimplebarchartComponent.prototype, "data", void 0);
    SimplebarchartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simplebarchart',
            template: __webpack_require__(/*! ./simplebarchart.component.html */ "./src/app/components/simplebarchart/simplebarchart.component.html"),
            styles: [__webpack_require__(/*! ./simplebarchart.component.scss */ "./src/app/components/simplebarchart/simplebarchart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimplebarchartComponent);
    return SimplebarchartComponent;
}());



/***/ }),

/***/ "./src/app/components/simplelinechart/simplelinechart.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/simplelinechart/simplelinechart.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/simplelinechart/simplelinechart.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/simplelinechart/simplelinechart.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/simplelinechart/simplelinechart.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/simplelinechart/simplelinechart.component.ts ***!
  \*************************************************************************/
/*! exports provided: SimplelinechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplelinechartComponent", function() { return SimplelinechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_svg_annotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-svg-annotation */ "./node_modules/d3-svg-annotation/indexRollupNext.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimplelinechartComponent = /** @class */ (function () {
    function SimplelinechartComponent() {
    }
    SimplelinechartComponent.prototype.ngOnInit = function () {
        var width = window.innerWidth;
        var height = document.getElementById('top').clientHeight;
        var widthsvg = document.getElementById('top').clientWidth;
        if (width >= 600) {
            this.mobile = false;
        }
        else {
            this.mobile = true;
        }
        var yheight = 250;
        var anote4 = 50;
        var anote3 = 36;
        var anote2 = 20;
        var annote = 10;
        var mobiley = 40;
        var mobilex = 20;
        if (width <= 600) {
            yheight = 200;
            anote4 = 50;
            anote3 = 33;
            anote2 = 17;
            annote = 8;
            mobiley = 20;
            mobilex = 20;
        }
        this.drawfakeCases(width, height, this.data, yheight, annote, anote2, anote3, anote4, widthsvg, mobiley, mobilex);
    };
    SimplelinechartComponent.prototype.drawfakeCases = function (width, height, datapull, yheight, annote, anote2, anote3, anote4, widthsvg, mobiley, mobilex) {
        datapull = datapull.fakedata;
        if (width >= 450) {
            width = widthsvg;
        }
        var parseTime = d3__WEBPACK_IMPORTED_MODULE_1__["timeParse"]('%m/%d/%Y');
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleTime"]().range([0, width]);
        x.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](datapull, function (d) { return parseTime(d.date); }));
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, yheight]);
        y.domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](datapull, function (d) { return d.cases; })]);
        var area = d3__WEBPACK_IMPORTED_MODULE_1__["area"]()
            .x(function (d) { return x(parseTime(d.date)); })
            .y0(height)
            .y1(function (d) { return height - y(d.cases); })
            .curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveMonotoneX"]);
        var valueline = d3__WEBPACK_IMPORTED_MODULE_1__["line"]()
            .x(function (d) { return x(parseTime(d.date)); })
            .y(function (d) { return height - y(d.cases); })
            .curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveMonotoneX"]);
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.top-wrapper').append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('x', 0)
            .attr('y', 0)
            .attr('class', 'jumbo')
            .append('g')
            .attr('transform', 'translate(0, 0)')
            .append('svg')
            .attr('id', 'annotate')
            .attr('width', width)
            .attr('height', height)
            .append('a');
        svg.append('path')
            .datum(datapull)
            .attr('class', 'area')
            .attr('d', area);
        var path = svg.append('path')
            .datum(datapull)
            .attr('class', 'line')
            .attr('fill', 'none')
            .attr('stroke-width', '3px')
            .attr('stroke', '#f2f2f2')
            .attr('d', valueline);
        var annotations = [
            {
                note: {
                    title: 'My Projects'
                },
                type: d3_svg_annotation__WEBPACK_IMPORTED_MODULE_2__["annotationCalloutCircle"],
                subject: {
                    radius: 5,
                    radiusPadding: 0
                },
                className: 'myviz',
                color: ['#dddddd'],
                x: x(parseTime(datapull[anote2].date)),
                y: height - y(datapull[anote2].cases),
                align: 'middle',
                dy: 30,
                dx: 30
            },
            {
                note: {
                    title: 'Contact Me'
                },
                type: d3_svg_annotation__WEBPACK_IMPORTED_MODULE_2__["annotationCalloutCircle"],
                subject: {
                    radius: 5,
                    radiusPadding: 0
                },
                className: 'mywork',
                color: ['#dddddd'],
                x: x(parseTime(datapull[anote4].date)),
                y: height - y(datapull[anote4].cases),
                dy: -20,
                dx: -90
            },
            {
                note: {
                    title: 'Skills'
                },
                type: d3_svg_annotation__WEBPACK_IMPORTED_MODULE_2__["annotationCalloutCircle"],
                subject: {
                    radius: 5,
                    radiusPadding: 0
                },
                className: 'mediumposts',
                color: ['#dddddd'],
                x: x(parseTime(datapull[anote3].date)),
                y: height - y(datapull[anote3].cases),
                dy: 40,
                dx: 20
            },
            {
                note: {
                    title: 'About Me'
                },
                type: d3_svg_annotation__WEBPACK_IMPORTED_MODULE_2__["annotationCalloutCircle"],
                subject: {
                    radius: 5,
                    radiusPadding: 0
                },
                className: 'aboutme',
                color: ['#dddddd'],
                x: x(parseTime(datapull[annote].date)),
                y: height - y(datapull[annote].cases),
                dy: mobiley,
                dx: mobilex
            }
        ];
        var makeAnnotations = d3_svg_annotation__WEBPACK_IMPORTED_MODULE_2__["annotation"]().annotations(annotations);
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#annotate')
            .append('g')
            .attr('class', 'annotation-group')
            .call(makeAnnotations);
        d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('.annotation-note-bg')
            .attr('rx', 10)
            .attr('ry', 10);
        var totalLength = path.node().getTotalLength();
        path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
            .attr('stroke-dashoffset', totalLength)
            .transition()
            .on('start', function repeat() {
            d3__WEBPACK_IMPORTED_MODULE_1__["active"](this)
                .duration(7000)
                .ease(d3__WEBPACK_IMPORTED_MODULE_1__["easeLinear"])
                .attr('stroke-dashoffset', 0);
        });
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.myviz')
            .on('click', function () {
            d3__WEBPACK_IMPORTED_MODULE_1__["transition"]()
                .duration(7500)
                .tween('scroll', document.getElementById('navigate').scrollIntoView({ behavior: 'smooth' }));
        });
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.aboutme')
            .on('click', function () {
            d3__WEBPACK_IMPORTED_MODULE_1__["transition"]()
                .duration(7500)
                .tween('scroll', document.getElementById('aboutme-nav').scrollIntoView({ behavior: 'smooth' }));
        });
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.mediumposts')
            .on('click', function () {
            d3__WEBPACK_IMPORTED_MODULE_1__["transition"]()
                .duration(7500)
                .tween('scroll', document.getElementById('medium').scrollIntoView({ behavior: 'smooth' }));
        });
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.mywork')
            .on('click', function () {
            d3__WEBPACK_IMPORTED_MODULE_1__["transition"]()
                .duration(7500)
                .tween('scroll', document.getElementById('section4').scrollIntoView({ behavior: 'smooth' }));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SimplelinechartComponent.prototype, "data", void 0);
    SimplelinechartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simplelinechart',
            template: __webpack_require__(/*! ./simplelinechart.component.html */ "./src/app/components/simplelinechart/simplelinechart.component.html"),
            styles: [__webpack_require__(/*! ./simplelinechart.component.scss */ "./src/app/components/simplelinechart/simplelinechart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimplelinechartComponent);
    return SimplelinechartComponent;
}());



/***/ }),

/***/ "./src/assets/jumbotron.json":
/*!***********************************!*\
  !*** ./src/assets/jumbotron.json ***!
  \***********************************/
/*! exports provided: fakedata, default */
/***/ (function(module) {

module.exports = {"fakedata":[{"date":"03/01/2020","cases":0.2},{"date":"03/02/2020","cases":0.7},{"date":"03/03/2020","cases":1.45},{"date":"03/04/2020","cases":1.65},{"date":"03/05/2020","cases":2},{"date":"03/06/2020","cases":2.2},{"date":"03/07/2020","cases":2.45},{"date":"03/08/2020","cases":2.5},{"date":"03/09/2020","cases":2.375},{"date":"03/10/2020","cases":2.875},{"date":"03/11/2020","cases":3.25},{"date":"03/12/2020","cases":3.4},{"date":"03/13/2020","cases":3.6},{"date":"03/14/2020","cases":3.7},{"date":"03/15/2020","cases":4},{"date":"03/16/2020","cases":3.95},{"date":"03/17/2020","cases":4},{"date":"03/18/2020","cases":4.25},{"date":"03/19/2020","cases":4.5},{"date":"03/20/2020","cases":4.6},{"date":"03/21/2020","cases":4.65},{"date":"03/22/2020","cases":5.05},{"date":"03/23/2020","cases":5.2},{"date":"03/24/2020","cases":5.1},{"date":"03/25/2020","cases":5.25},{"date":"03/26/2020","cases":5.3},{"date":"03/27/2020","cases":5.4},{"date":"03/28/2020","cases":5.35},{"date":"03/29/2020","cases":5.6},{"date":"03/30/2020","cases":5.55},{"date":"03/31/2020","cases":5.9},{"date":"04/01/2020","cases":5.33},{"date":"04/02/2020","cases":5.45},{"date":"04/03/2020","cases":5.8},{"date":"04/04/2020","cases":5.95},{"date":"04/05/2020","cases":6.1},{"date":"04/06/2020","cases":6},{"date":"04/07/2020","cases":6.3},{"date":"04/08/2020","cases":6.25},{"date":"04/09/2020","cases":6.4},{"date":"04/10/2020","cases":6.7},{"date":"04/11/2020","cases":6.5},{"date":"04/12/2020","cases":6.6},{"date":"04/13/2020","cases":6.9},{"date":"04/14/2020","cases":7.1},{"date":"04/15/2020","cases":7.35},{"date":"04/16/2020","cases":7.2},{"date":"04/17/2020","cases":7.4},{"date":"04/18/2020","cases":7.25},{"date":"04/19/2020","cases":7.5},{"date":"04/20/2020","cases":7.7},{"date":"04/21/2020","cases":7.63}]};

/***/ }),

/***/ "./src/assets/jumbotronbar.json":
/*!**************************************!*\
  !*** ./src/assets/jumbotronbar.json ***!
  \**************************************/
/*! exports provided: fakedatabar, default */
/***/ (function(module) {

module.exports = {"fakedatabar":[{"date":"03/01/2020","cases":0.1},{"date":"03/02/2020","cases":0.5},{"date":"03/03/2020","cases":1.4},{"date":"03/04/2020","cases":1.9},{"date":"03/05/2020","cases":2.1},{"date":"03/06/2020","cases":2.3},{"date":"03/07/2020","cases":2.6},{"date":"03/08/2020","cases":2.4},{"date":"03/09/2020","cases":2.35},{"date":"03/10/2020","cases":3.4},{"date":"03/11/2020","cases":3.1},{"date":"03/12/2020","cases":3.7},{"date":"03/13/2020","cases":3.5},{"date":"03/14/2020","cases":3.9},{"date":"03/15/2020","cases":4.1},{"date":"03/16/2020","cases":3.8},{"date":"03/17/2020","cases":4.2},{"date":"03/18/2020","cases":4.3},{"date":"03/19/2020","cases":4.7},{"date":"03/20/2020","cases":4.5},{"date":"03/21/2020","cases":4.8},{"date":"03/22/2020","cases":5.3},{"date":"03/23/2020","cases":5.1},{"date":"03/24/2020","cases":5.05},{"date":"03/25/2020","cases":5.14},{"date":"03/26/2020","cases":5.27},{"date":"03/27/2020","cases":5.35},{"date":"03/28/2020","cases":5.37},{"date":"03/29/2020","cases":5.45},{"date":"03/30/2020","cases":5.57},{"date":"03/31/2020","cases":5.75},{"date":"04/01/2020","cases":5.45},{"date":"04/02/2020","cases":5.4},{"date":"04/03/2020","cases":5.6},{"date":"04/04/2020","cases":5.9},{"date":"04/05/2020","cases":6},{"date":"04/06/2020","cases":6.05},{"date":"04/07/2020","cases":6.1},{"date":"04/08/2020","cases":6.27},{"date":"04/09/2020","cases":6.325},{"date":"04/10/2020","cases":6.55},{"date":"04/11/2020","cases":6.6},{"date":"04/12/2020","cases":6.55},{"date":"04/13/2020","cases":6.75},{"date":"04/14/2020","cases":7},{"date":"04/15/2020","cases":7.22},{"date":"04/16/2020","cases":7.3},{"date":"04/17/2020","cases":7.3},{"date":"04/18/2020","cases":7.32},{"date":"04/19/2020","cases":7.4},{"date":"04/20/2020","cases":7.6},{"date":"04/21/2020","cases":7.66}]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import { initializeApp } from "firebase/app@7.0";
// import { getAnalytics } from "firebase/analytics";
var environment = {
    production: false,
};
// initializeApp(environment.firebase);
// const analytics = getAnalytics(app);
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ericbello/projects/data-science-portfolio-template/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map