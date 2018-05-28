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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n    <layout-header></layout-header>\n    <router-outlet></router-outlet>\n    <layout-footer></layout-footer>"

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
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _home_home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.routing.module */ "./src/app/home/home.routing.module.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _home_home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomeRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n    <div id=\"header-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\" role=\"listbox\">\n            <!-- Slide One - Set the background image for this slide in the line below -->\n            <div class=\"carousel-item active\" style=\"background-image: url('/assets/images/header.jpg')\">\n                <div class=\"carousel-content w-75 card card-header-item p-0\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <img src=\"/assets/images/header-2.jpg\" class=\"img img-fluid img-thumbnail\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"py-4 px-4\">\n                                <h1 class=\"text-header\">KOKO <small>& FRIENDS</small></h1>\n                                <h6>A Post Hardcore Band from Philippines</h6>\n                                <hr>\n                                <p>Koko and Friends is a Post Hardcore band from the Philippines. The band formed in the year 2009, from the city of Tayabas, a well known city in Quezon Province. </p>\n                                <br>\n                                <p>Our Members: Sherwin Ablaña Dapito on Vocals, Kenny Denver Sedenio on guitar 1, Ryan Abellanosa on guitar 2, Jan Joseph Yerro on Bass, and Dinno Boy Collantes on drums.</p>\n                                <br>\n                                <button class=\"btn view-more\">Check us out</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Slide Two - Set the background image for this slide in the line below -->\n            <div class=\"carousel-item\" style=\"background-image: url('/assets/images/header-1.jpg')\">\n                <div class=\"carousel-content w-75 card card-header-item p-0\">\n                    <div class=\"row\">\n                        \n                        <div class=\"col-md-6\">\n                            <div class=\"py-5 px-5\">\n                                <h1 class=\"text-header\">NEW ALBUM</h1>\n                                <h4>Coming Soon</h4>\n                                <br>\n                                <p>Influences: Urbandub, Imbue no Kudos, Subscapular, Love me Butch, Four Year Strong, Sent by Ravens, The Color Morale, Close Your Eyes, Saosin, Bullet for my Valentine, Wilabaliw, Deftones, Join the Club</p>\n                             \n                                <br><br>\n                                <button class=\"btn view-more\">View More</button>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <img src=\"/assets/images/header-3.jpg\" class=\"img img-fluid img-thumbnail\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#header-carousel\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#header-carousel\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n</header>\n\n<div class=\"container-fluid\">\n    <div class=\"container px-5\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center py-5\">\n                <h2 class=\"text-gray-dark text-uppercase\">Dates & Tours</h2>\n                <h4 class=\"text-muted\">Join Now and Listen to Our Music</h4>\n                \n                <br><br>\n\n                <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34788460&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe>\n\n                <br><br><br><br>\n                <table class=\"table\">\n\n                  <tbody>\n                    <tr>\n                      <td>JUL 06</td>\n                      <td>Starlight Theatre</td>\n                      <td>KANSAS CITY, MO</td>\n                      <td>\n                          <button class=\"btn btn-danger mr-2 px-5 py-2\">VIP</button>\n                          <button class=\"btn btn-default px-5 py-2\">Ticket</button>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>JUL 07</td>\n                      <td>Hollywood Casino Amphitheatre</td>\n                      <td>ST. LOUIS, MO</td>\n                      <td>\n                          <button class=\"btn btn-danger mr-2 px-5 py-2\">VIP</button>\n                          <button class=\"btn btn-default px-5 py-2\">Ticket</button>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>JUL 09</td>\n                      <td>DTE Energy Music Theatre</td>\n                      <td>DETROIT, MI</td>\n                      <td>\n                          <button class=\"btn btn-danger mr-2 px-5 py-2\">VIP</button>\n                          <button class=\"btn btn-default px-5 py-2\">Ticket</button>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>JUL 10</td>\n                      <td>Ravinia</td>\n                      <td>HIGHLAND PARK, IL</td>\n                      <td>\n                          <button class=\"btn btn-danger mr-2 px-5 py-2\">VIP</button>\n                          <button class=\"btn btn-default px-5 py-2\">Ticket</button>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>JUL 12</td>\n                      <td>Ruoff Home Mortgage Music Center</td>\n                      <td>NOBLESVILLE, IN</td>\n                      <td>\n                          <button class=\"btn btn-danger mr-2 px-5 py-2\">VIP</button>\n                          <button class=\"btn btn-default px-5 py-2\">Ticket</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>          \n            </div>\n        </div>\n    </div>\n</div>\n\n<!---->\n<div class=\"container-fluid shadow py-5 bg-contactus shadow\">\n    <div class=\"container px-5\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center py-5\">\n                <h2 class=\"text-header text-uppercase\">Contact us for booking</h2>\n                <h5 class=\"text-light\">Do you have a gig for us?</h5>\n                \n                <br><br>\n                <button class=\"btn btn-default px-5 py-3 mr-3 btn-sm\">Tour & Schedule</button>\n                <button class=\"btn btn-danger px-5 py-3 btn-sm\">Contact Us for Booking</button>       \n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container-fluid\">\n    <div class=\"container pb-5\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <section class=\"page-section about-heading\">\n                  <div class=\"container\">\n                    <img class=\"img img-fluid rounded about-heading-img mb-3 mb-lg-0  shadow-sm\" src=\"/assets/images/header-4.jpg\" alt=\"\">\n                    <div class=\"about-heading-content\">\n                      <div class=\"row\">\n                        <div class=\"col-xl-9 col-lg-10 mx-auto\">\n                          <div class=\"bg-faded rounded p-5  shadow-sm\">\n                            <h2 class=\"section-heading mb-4\">\n                              <span class=\"section-heading-upper\">Loud Music, Strong Neck</span>\n                              <span class=\"section-heading-lower\">About Koko & Friends</span>\n                            </h2>\n                            <p class=\"px-5 text-left\">Koko and Friends is a Post Hardcore band from the Philippines. The band formed in the year 2009, from the city of Tayabas, a well known city in Quezon Province. The reason why Koko and friends is the name of our band is because of Francis Jabola Abrigo (a.k.a Koko). Koko is our former bassist. Koko leave the band last year(2010) because of personal issues, like his career. Koko love of music never end there. He is just probably busy about his work and we understand him. We continue performing even without Koko. We replace Koko by Jan Joseph Yerro.</p><br>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </section>\n            </div>\n\n            <div class=\"col-md-6\">\n                <iframe class=\"shadow-sm\" src=\"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fryanabellanosa19%2Fvideos%2F1881681238516840%2F&show_text=0\" width=\"100%\" height=\"315\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" allowFullScreen=\"true\"></iframe>\n            </div>\n            <div class=\"col-md-6\">\n                <iframe class=\"shadow-sm\" src=\"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdinnokelz.collantes%2Fvideos%2F10209009441192712%2F&show_text\" width=\"100%\" height=\"315\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" allowFullScreen=\"true\"></iframe>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n\n\n<div class=\"container-fluid bg-about\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center py-5\">\n                <h2 class=\"text-uppercase text-white\">Our Gallery</h2>\n                <h3 class=\"text-light\">Band Gigs and Moments</h3>\n                <br><br>\n\n                <div class=\"row\" id=\"galleryImages\">\n                    <div class=\"col-md-4 box text-center mb-3\">\n                        <div class=\"card card-hover-shadow\" style=\"background-color: rgba(255, 255,255, 0);\">\n                            <div class=\"card-block\">\n                                <img src=\"/assets/images/PhotoG.jpg\" id=\"myImg\"\n                                class=\"img-fluid imageGallery\" style=\"width: 450px; border: 1px solid #e2e2e2\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4 box text-center mb-3\">\n                        <div class=\"card card-hover-shadow\" style=\"background-color: rgba(255, 255,255, 0);\">\n                            <div class=\"card-block\">\n                                <img src=\"/assets/images/PhotoG2.jpg\" id=\"myImg2\"\n                                class=\"img-fluid imageGallery\" style=\"width: 450px; border: 1px solid #e2e2e2\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4 box text-center mb-3\">\n                        <div class=\"card card-hover-shadow\" style=\"background-color: rgba(255, 255,255, 0);\">\n                            <div class=\"card-block\">\n                                <img src=\"/assets/images/PhotoG3.jpg\" id=\"myImg3\"\n                                class=\"img-fluid imageGallery\" style=\"width: 450px; border: 1px solid #e2e2e2\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4 box text-center mb-3\">\n                        <div class=\"card card-hover-shadow\" style=\"background-color: rgba(255, 255,255, 0);\">\n                            <div class=\"card-block\">\n                                <img src=\"/assets/images/PhotoG4.jpg\" id=\"myImg4\"\n                                class=\"img-fluid imageGallery\" style=\"width: 450px; border: 1px solid #e2e2e2\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4 box text-center\">\n                        <div class=\"card card-hover-shadow\" style=\"background-color: rgba(255, 255,255, 0);\">\n                            <div class=\"card-block\">\n                                <img src=\"/assets/images/PhotoG5.jpg\" id=\"myImg5\"\n                                class=\"img-fluid imageGallery\" style=\"width: 450px; border: 1px solid #e2e2e2\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4 box text-center\">\n                        <div class=\"card card-hover-shadow\" style=\"background-color: rgba(255, 255,255, 0);\">\n                            <div class=\"card-block\">\n                                <img src=\"/assets/images/PhotoG6.jpg\" id=\"myImg6\"\n                                class=\"img-fluid imageGallery\" style=\"width: 450px; border: 1px solid #e2e2e2\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4 box text-center\">\n                        <div class=\"card card-hover-shadow\" style=\"background-color: rgba(255, 255,255, 0);\">\n                            <div class=\"card-block\">\n                                <img src=\"/assets/images/PhotoG7.jpg\" id=\"myImg7\"\n                                class=\"img-fluid imageGallery\" style=\"width: 450px; border: 1px solid #e2e2e2\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4 box text-center\">\n                        <div class=\"card card-hover-shadow\" style=\"background-color: rgba(255, 255,255, 0);\">\n                            <div class=\"card-block\">\n                                <img src=\"/assets/images/PhotoG8.jpg\" id=\"myImg8\"\n                                class=\"img-fluid imageGallery\" style=\"width: 450px; border: 1px solid #e2e2e2\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4 box text-center\">\n                        <div class=\"card card-hover-shadow\" style=\"background-color: rgba(255, 255,255, 0);\">\n                            <div class=\"card-block\">\n                                <img src=\"/assets/images/PhotoG9.jpg\" id=\"myImg9\"\n                                class=\"img-fluid imageGallery\" style=\"width: 450px; border: 1px solid #e2e2e2\">\n                            </div>\n                        </div>\n                    </div>\n                </div> \n\n                \n            </div>\n        </div>\n\n    </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social {\n  color: whitesmoke !important;\n  font-weight: 500px !important; }\n\n.social:hover {\n  color: #ad1457 !important;\n  font-weight: 500px !important; }\n\n.bg-img {\n  background: url(/assets/images/header.jpg) no-repeat center center;\n  background-size: cover;\n  z-index: 0; }\n\n.bg-img:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(230, 114, 41, 0.7);\n  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(230, 114, 41, 0.7)), color-stop(100%, rgba(255, 240, 222, 0.7)));\n  background: linear-gradient(45deg, rgba(230, 114, 41, 0.7) 0%, rgba(255, 240, 222, 0.7) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e67229', endColorstr='#fff0de', GradientType=1 ); }\n\np {\n  font-size: 13px !important; }\n\n.mid {\n  height: 600px; }\n\n.text-main {\n  color: #a7ffeb; }\n\n.about {\n  font-size: 15px !important; }\n\n.container-text {\n  position: relative;\n  text-align: center;\n  color: white; }\n\n.h3-home {\n  position: relative !important;\n  color: white !important; }\n\n.navigation-button:hover {\n  color: #ad1457; }\n\n.carousel-item {\n  height: 85vh;\n  min-height: 300px;\n  background: no-repeat center center scroll;\n  background-size: cover; }\n\n.carousel-item:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(230, 114, 41, 0.7);\n  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(230, 114, 41, 0.7)), color-stop(100%, rgba(255, 240, 222, 0.7)));\n  background: linear-gradient(45deg, rgba(230, 114, 41, 0.7) 0%, rgba(255, 240, 222, 0.7) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e67229', endColorstr='#fff0de', GradientType=1 ); }\n\n.carousel-content {\n  position: absolute;\n  top: 25%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  z-index: 20;\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n\nh1 {\n  font-size: 50px !important;\n  font-family: arial; }\n\n.view-more {\n  color: #64ffda;\n  border: solid 1px #64ffda;\n  border-radius: 0;\n  padding: 14px 30px 14px 30px;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.view-more:hover {\n  color: black;\n  border: solid 1px gray;\n  border-radius: 0;\n  padding: 14px 30px 14px 30px;\n  background-color: rgba(255, 255, 255, 0.4); }\n\n.card-header-item {\n  background: rgba(0, 0, 0, 0.5); }\n\n.form-control {\n  background-color: white; }\n\n.text-header {\n  color: #64ffda; }\n\n.text-content {\n  font-weight: 100;\n  color: #64ffda; }\n\n.bg-gray {\n  background-color: whitesmoke; }\n\nh2 {\n  font-weight: 200; }\n\n@media (min-width: 992px) {\n  .about-heading .about-heading-img {\n    position: relative;\n    z-index: 0; }\n  .about-heading .about-heading-content {\n    margin-top: -20%;\n    position: relative;\n    z-index: 1; } }\n\n.page-section {\n  margin-top: 5rem;\n  margin-bottom: 5rem; }\n\n.section-heading {\n  text-transform: uppercase; }\n\n.section-heading .section-heading-upper {\n    display: block;\n    font-size: 1rem;\n    font-weight: 800; }\n\n.section-heading .section-heading-lower {\n    display: block;\n    font-size: 3rem;\n    font-weight: 100; }\n\n.bg-faded {\n  background: rgba(255, 240, 222, 0.9);\n  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(255, 240, 222, 0.9)), color-stop(100%, rgba(255, 240, 222, 0.9)));\n  background: linear-gradient(45deg, rgba(255, 240, 222, 0.9) 0%, rgba(255, 240, 222, 0.9) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e67229', endColorstr='#fff0de', GradientType=1 ); }\n\ntd {\n  font-size: 15px !important; }\n\ntr {\n  padding-top: 20px !important;\n  padding-bottom: 20px !important; }\n\n.bg-about {\n  background: url(/assets/images/band.jpg);\n  background-size: cover; }\n\n.bg-gallery {\n  background: url(/assets/images/band2.jpg) no-repeat center center;\n  background-size: cover; }\n\n.bg-contactus {\n  background: url(/assets/images/band3.jpg);\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent(el) {
        this.el = el;
        this.state = 'hide';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset;
        if (scrollPosition <= 250) {
            this.state = 'show';
        }
        else {
            this.state = 'hide';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "checkScroll", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home.routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var homeRoute = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(homeRoute)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            ]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"py-5 bg-dark\">\n\t<div class=\"container\">\n\t\t<div class=\"row gap-y\">\n\t\t\t<div class=\"col-12 col-md-12 col-lg-6\">\n\t\t\t\t<h6 class=\"heading-alt footer-text fs-14 mb-16 pl-0\">\n\t\t\t\t\tKOKO & FRIENDS\n\t\t\t\t</h6>\n\t\t\t\t<p class=\"text-light\">Koko and Friends is a Post Hardcore band from the Philippines. The band formed in the year 2009, from the city of Tayabas, a well known city in Quezon Province.</p>\n\t\t\t\t<hr>\n\t\t\t\t<p class=\"text-muted\">Copyright © 2018.</p>\n\t\t\t</div>\n\t\n\t\t</div>\n\t</div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-text {\n  color: #a7ffeb !important; }\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
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
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top bg-dark px-5\" [ngClass]=\"fixed ? '': ''\" (scroll)=\"onWindowScroll($event)\">\n  <a class=\"navbar-brand\" href=\"#\">KOKO <span><small>& FRIENDS</small></span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">News <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Media</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Music</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Gallery</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Connect</a>\n      </li>\n\n      <li class=\"nav-item d-none d-md-block d-lg-block mx-2\">\n        <a class=\"nav-link\">|</a> \n      </li>\n      <li class=\"nav-item d-none d-md-block d-lg-block\">\n        <a class=\"social nav-link\" href=\"https://www.facebook.com/sherwin.dapito\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n      </li>\n      <li class=\"nav-item d-none d-md-block d-lg-block\">\n        <a class=\"social nav-link\" href=\"\"><i class=\"fa fa-twitter\"></i></a>\n      </li>\n      <li class=\"nav-item d-none d-md-block d-lg-block\">\n        <a class=\"social nav-link\" href=\"\"><i class=\"fa fa-google\"></i></a>\n      </li>\n      <li class=\"nav-item d-none d-md-block d-lg-block\">\n        <a class=\"social nav-link\" href=\"\"><i class=\"fa fa-instagram\"></i></a>\n      </li>\n\n      <li class=\"nav-item d-md-none d-lg-none d-none d-sm-block d-block social-min\">\n        <hr>\n        <a href=\"https://www.facebook.com/sherwin.dapito\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n        <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n        <a href=\"\"><i class=\"fa fa-google\"></i></a>\n        <a href=\"\"><i class=\"fa fa-instagram\"></i></a>\n      </li>\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  text-transform: uppercase !important;\n  letter-spacing: 3px;\n  color: #a7ffeb !important; }\n\n.nav-link:hover {\n  color: whitesmoke !important; }\n\n.active {\n  color: whitesmoke !important; }\n\n.navbar-dark {\n  background: rgba(0, 0, 0, 0.8) !important; }\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.fixed = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onWindowScroll = function (e) {
        var number = e.target.documentElement.scrollTop;
        if (number > 80) {
            this.fixed = true;
        }
        else if (this.fixed && number < 70) {
            this.fixed = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
var environment = {
    production: false
};
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

module.exports = __webpack_require__(/*! C:\Users\Sarwin\Desktop\Sarwin\Projects\koko-and-friend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map