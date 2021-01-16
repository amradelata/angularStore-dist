(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\projets\1framwork\Angular\1angularStore\src\main.ts */"zUnb");


/***/ }),

/***/ "0OIs":
/*!********************************************************!*\
  !*** ./src/app/sign-up-form/sign-up-form.component.ts ***!
  \********************************************************/
/*! exports provided: SignUpFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpFormComponent", function() { return SignUpFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "U0XV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SignUpFormComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r1.email, " ", item_r1.bassword, " ");
} }
class SignUpFormComponent {
    constructor(_usersService) {
        this._usersService = _usersService;
        this.addUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.users = [];
        this.error = [];
    }
    ngOnInit() {
        this._usersService.serchinuserarry().subscribe((data) => {
            this.users = data;
        }, (err) => {
            this.error = err;
        });
    }
    onSubmit() {
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.email.match(mailformat)) {
            const user = {
                id: Math.floor((Math.random() * 400) + 200),
                firstName: 'string',
                email: this.email,
                password: this.password,
                userphone: 4545,
                userstat: 'hkjhkj',
                Latitude: 54564,
                Longitude: 5465456
            };
            this.addUser.emit(user);
            this._usersService.addUser(user).subscribe((user) => this.users.push(user));
            // console.log(this.email, this.password)
            this.email = "",
                this.password = null;
        }
        else if (this.users.length > 0) {
            alert("this _username_ taken");
            return;
        }
        else {
            alert("You have entered an invalid email address!");
        }
    }
}
SignUpFormComponent.ɵfac = function SignUpFormComponent_Factory(t) { return new (t || SignUpFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"])); };
SignUpFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpFormComponent, selectors: [["app-sign-up-form"]], outputs: { addUser: "addUser" }, decls: 28, vars: 3, consts: [[1, "Login", "hero", "is-primary", "is-fullheight"], [1, "hero-body"], [1, "container"], [1, "columns", "is-centered"], [1, "column", "is-5-tablet", "is-4-desktop", "is-3-widescreen"], ["action", "", 1, "box", 3, "ngSubmit"], [1, "field"], ["for", "", 1, "label"], [1, "control", "has-icons-left"], ["type", "email", "name", "email", "placeholder", "e.g. bobsmith@gmail.com", 1, "input", 3, "ngModel", "ngModelChange"], [1, "icon", "is-small", "is-left"], [1, "fa", "fa-envelope"], ["name", "password", "type", "password", "placeholder", "*******", 1, "input", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-lock"], ["for", "", 1, "checkbox"], ["type", "checkbox"], [1, "button", "is-success"], [4, "ngFor", "ngForOf"]], template: function SignUpFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpFormComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpFormComponent_Template_input_ngModelChange_17_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignUpFormComponent_div_27_Template, 2, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up-form',
                templateUrl: './sign-up-form.component.html',
                styleUrls: ['./sign-up-form.component.css']
            }]
    }], function () { return [{ type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }]; }, { addUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "5P1i":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class LoginFormComponent {
    constructor() { }
    onSubmit() {
        console.log(this.email);
        console.log(this.password);
    }
    ngOnInit() {
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], decls: 27, vars: 2, consts: [[1, "Login", "hero", "is-primary", "is-fullheight"], [1, "hero-body"], [1, "container"], [1, "columns", "is-centered"], [1, "column", "is-5-tablet", "is-4-desktop", "is-3-widescreen"], ["action", "", 1, "box", 3, "ngSubmit"], [1, "field"], ["for", "", 1, "label"], [1, "control", "has-icons-left"], ["type", "email", "name", "email", "placeholder", "e.g. bobsmith@gmail.com", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], [1, "icon", "is-small", "is-left"], [1, "fa", "fa-envelope"], ["name", "password", "type", "password", "placeholder", "*******", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-lock"], ["for", "", 1, "checkbox"], ["type", "checkbox"], [1, "button", "is-success"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginFormComponent_Template_input_ngModelChange_17_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-form',
                templateUrl: './login-form.component.html',
                styleUrls: ['./login-form.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9FFt":
/*!*****************************************************!*\
  !*** ./src/app/products/blazer/blazer.component.ts ***!
  \*****************************************************/
/*! exports provided: BlazerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlazerComponent", function() { return BlazerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "vuCO");
/* harmony import */ var _productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productsnav/productsnav.component */ "KNyi");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "CJFX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/shop", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function BlazerComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, "url(" + item_r1.img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.price, " EGP");
} }
class BlazerComponent {
    constructor(_prodactsService) {
        this._prodactsService = _prodactsService;
        this.prodacts = [];
        this.mycategory = [];
        this.error = [];
    }
    ngOnInit() {
        this.pathname = window.location.pathname.substring(1);
        this._prodactsService.getProdacts().subscribe((data) => {
            this.prodacts = data;
            let result = data.filter(obj => {
                return obj.category === this.pathname;
            });
            this.mycategory = result;
        }, (err) => {
            this.error = err;
        });
    }
}
BlazerComponent.ɵfac = function BlazerComponent_Factory(t) { return new (t || BlazerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"])); };
BlazerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlazerComponent, selectors: [["app-blazer"]], decls: 4, vars: 1, consts: [[1, "cards"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "img", 3, "ngStyle"], [1, "shopcontent"], [1, "is-size-5"], [1, "is-size-5", "has-text-info"]], template: function BlazerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-productsnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlazerComponent_a_3_Template, 7, 8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mycategory);
    } }, directives: [_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__["ProductsnavComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGF6ZXIuY29tcG9uZW50LmNzcyJ9 */", ".cards[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: row wrap;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        width: calc(20% - 20px);\n        margin: 9px;\n        border: 1px solid #95afc0;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n        text-align: center;\n        padding: 5px 0;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        height: 250px;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlazerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blazer',
                templateUrl: './blazer.component.html',
                styleUrls: ['./blazer.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CJFX":
/*!*********************************************************!*\
  !*** ./src/app/products/carousel/carousel.component.ts ***!
  \*********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");



class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 22, vars: 0, consts: [[1, "carousel"], ["autoplay", "true", "loop", "true", "cellsToShow", "1", "height", "500", "dots", "true", "arrowsTheme", "dark"], [1, "carousel-cell"], [1, "img"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */", ".carousel[_ngcontent-%COMP%] {\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n        margin-bottom: 20px;\n    }\n\n    .carousel-container[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        \n        height: 600px;\n        background-image: url('../assets/img/2.png');\n        background-size: cover;\n        background-position: center center;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HsBO":
/*!*******************************************************!*\
  !*** ./src/app/products/t-shirt/t-shirt.component.ts ***!
  \*******************************************************/
/*! exports provided: TShirtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TShirtComponent", function() { return TShirtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "vuCO");
/* harmony import */ var _productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productsnav/productsnav.component */ "KNyi");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "CJFX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/shop", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function TShirtComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, "url(" + item_r1.img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.price, " EGP");
} }
class TShirtComponent {
    constructor(_prodactsService) {
        this._prodactsService = _prodactsService;
        this.prodacts = [];
        this.mycategory = [];
        this.error = [];
    }
    ngOnInit() {
        this.pathname = window.location.pathname.substring(1);
        this._prodactsService.getProdacts().subscribe((data) => {
            this.prodacts = data;
            let result = data.filter(obj => {
                return obj.category === this.pathname;
            });
            this.mycategory = result;
        }, (err) => {
            this.error = err;
        });
    }
}
TShirtComponent.ɵfac = function TShirtComponent_Factory(t) { return new (t || TShirtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"])); };
TShirtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TShirtComponent, selectors: [["app-t-shirt"]], decls: 4, vars: 1, consts: [[1, "cards"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "img", 3, "ngStyle"], [1, "shopcontent"], [1, "is-size-5"], [1, "is-size-5", "has-text-info"]], template: function TShirtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-productsnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TShirtComponent_a_3_Template, 7, 8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mycategory);
    } }, directives: [_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__["ProductsnavComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0LXNoaXJ0LmNvbXBvbmVudC5jc3MifQ== */", ".cards[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: row wrap;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        width: calc(20% - 20px);\n        margin: 9px;\n        border: 1px solid #95afc0;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n        text-align: center;\n        padding: 5px 0;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        height: 250px;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TShirtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-t-shirt',
                templateUrl: './t-shirt.component.html',
                styleUrls: ['./t-shirt.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"] }]; }, null); })();


/***/ }),

/***/ "JPMA":
/*!*************************************************!*\
  !*** ./src/app/products/suit/suit.component.ts ***!
  \*************************************************/
/*! exports provided: SuitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuitComponent", function() { return SuitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "vuCO");
/* harmony import */ var _productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productsnav/productsnav.component */ "KNyi");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "CJFX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/shop", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function SuitComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, "url(" + item_r1.img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.price, " EGP");
} }
class SuitComponent {
    constructor(_prodactsService) {
        this._prodactsService = _prodactsService;
        this.prodacts = [];
        this.mycategory = [];
        this.error = [];
    }
    ngOnInit() {
        this.pathname = window.location.pathname.substring(1);
        this._prodactsService.getProdacts().subscribe((data) => {
            this.prodacts = data;
            let result = data.filter(obj => {
                return obj.category === this.pathname;
            });
            this.mycategory = result;
        }, (err) => {
            this.error = err;
        });
    }
}
SuitComponent.ɵfac = function SuitComponent_Factory(t) { return new (t || SuitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"])); };
SuitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuitComponent, selectors: [["app-suit"]], decls: 4, vars: 1, consts: [[1, "cards"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "img", 3, "ngStyle"], [1, "shopcontent"], [1, "is-size-5"], [1, "is-size-5", "has-text-info"]], template: function SuitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-productsnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SuitComponent_a_3_Template, 7, 8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mycategory);
    } }, directives: [_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__["ProductsnavComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWl0LmNvbXBvbmVudC5jc3MifQ== */", ".cards[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: row wrap;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        width: calc(20% - 20px);\n        margin: 9px;\n        border: 1px solid #95afc0;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n        text-align: center;\n        padding: 5px 0;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        height: 250px;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-suit',
                templateUrl: './suit.component.html',
                styleUrls: ['./suit.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"] }]; }, null); })();


/***/ }),

/***/ "KNyi":
/*!***************************************************************!*\
  !*** ./src/app/products/productsnav/productsnav.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductsnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsnavComponent", function() { return ProductsnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ProductsnavComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsnavComponent.ɵfac = function ProductsnavComponent_Factory(t) { return new (t || ProductsnavComponent)(); };
ProductsnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsnavComponent, selectors: [["app-productsnav"]], decls: 25, vars: 0, consts: [[1, "level", "productsnav"], [1, "level-item", "has-text-centered"], ["routerLink", "/Blazer", "routerLinkActive", "active"], ["routerLink", "/Coat", "routerLinkActive", "active"], ["routerLink", "/Jacket", "routerLinkActive", "active"], ["routerLink", "/Shirt", "routerLinkActive", "active"], ["routerLink", "/Shoes", "routerLinkActive", "active"], ["routerLink", "/Suit", "routerLinkActive", "active"], ["routerLink", "/T-shirt", "routerLinkActive", "active"], ["routerLink", "/Pants", "routerLinkActive", "active"]], template: function ProductsnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Blazer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Coat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Suit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "T-shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".productsnav[_ngcontent-%COMP%]{\r\n    padding: 10px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InByb2R1Y3RzbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHNuYXZ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productsnav',
                templateUrl: './productsnav.component.html',
                styleUrls: ['./productsnav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "N82d":
/*!***************************************************!*\
  !*** ./src/app/products/shoes/shoes.component.ts ***!
  \***************************************************/
/*! exports provided: ShoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoesComponent", function() { return ShoesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "vuCO");
/* harmony import */ var _productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productsnav/productsnav.component */ "KNyi");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "CJFX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/shop", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function ShoesComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, "url(" + item_r1.img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.price, " EGP");
} }
class ShoesComponent {
    constructor(_prodactsService) {
        this._prodactsService = _prodactsService;
        this.prodacts = [];
        this.mycategory = [];
        this.error = [];
    }
    ngOnInit() {
        this.pathname = window.location.pathname.substring(1);
        this._prodactsService.getProdacts().subscribe((data) => {
            this.prodacts = data;
            let result = data.filter(obj => {
                return obj.category === this.pathname;
            });
            this.mycategory = result;
        }, (err) => {
            this.error = err;
        });
    }
}
ShoesComponent.ɵfac = function ShoesComponent_Factory(t) { return new (t || ShoesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"])); };
ShoesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoesComponent, selectors: [["app-shoes"]], decls: 4, vars: 1, consts: [[1, "cards"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "img", 3, "ngStyle"], [1, "shopcontent"], [1, "is-size-5"], [1, "is-size-5", "has-text-info"]], template: function ShoesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-productsnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShoesComponent_a_3_Template, 7, 8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mycategory);
    } }, directives: [_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__["ProductsnavComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9lcy5jb21wb25lbnQuY3NzIn0= */", ".cards[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: row wrap;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        width: calc(20% - 20px);\n        margin: 9px;\n        border: 1px solid #95afc0;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n        text-align: center;\n        padding: 5px 0;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        height: 250px;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shoes',
                templateUrl: './shoes.component.html',
                styleUrls: ['./shoes.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"] }]; }, null); })();


/***/ }),

/***/ "QoiG":
/*!**************************************************************!*\
  !*** ./src/app/products/products/products-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProductsRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _prodacts_detail_prodacts_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prodacts-detail/prodacts-detail.component */ "wgHt");
/* harmony import */ var _blazer_blazer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blazer/blazer.component */ "9FFt");
/* harmony import */ var _coat_coat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../coat/coat.component */ "qluc");
/* harmony import */ var _jacket_jacket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jacket/jacket.component */ "VraU");
/* harmony import */ var _pants_pants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pants/pants.component */ "jQ65");
/* harmony import */ var _shirt_shirt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shirt/shirt.component */ "tex7");
/* harmony import */ var _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shoes/shoes.component */ "N82d");
/* harmony import */ var _suit_suit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../suit/suit.component */ "JPMA");
/* harmony import */ var _t_shirt_t_shirt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../t-shirt/t-shirt.component */ "HsBO");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cart/cart.component */ "XWLF");















const routes = [
    { path: 'shop/:id', component: _prodacts_detail_prodacts_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProdactsDetailComponent"] },
    { path: 'Blazer', component: _blazer_blazer_component__WEBPACK_IMPORTED_MODULE_3__["BlazerComponent"] },
    { path: 'Coat', component: _coat_coat_component__WEBPACK_IMPORTED_MODULE_4__["CoatComponent"] },
    { path: 'Jacket', component: _jacket_jacket_component__WEBPACK_IMPORTED_MODULE_5__["JacketComponent"] },
    { path: 'Shirt', component: _shirt_shirt_component__WEBPACK_IMPORTED_MODULE_7__["ShirtComponent"] },
    { path: 'Shoes', component: _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_8__["ShoesComponent"] },
    { path: 'Suit', component: _suit_suit_component__WEBPACK_IMPORTED_MODULE_9__["SuitComponent"] },
    { path: 'T-shirt', component: _t_shirt_t_shirt_component__WEBPACK_IMPORTED_MODULE_10__["TShirtComponent"] },
    { path: 'Pants', component: _pants_pants_component__WEBPACK_IMPORTED_MODULE_6__["PantsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"] },
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_prodacts_detail_prodacts_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProdactsDetailComponent"], _blazer_blazer_component__WEBPACK_IMPORTED_MODULE_3__["BlazerComponent"], _coat_coat_component__WEBPACK_IMPORTED_MODULE_4__["CoatComponent"], _jacket_jacket_component__WEBPACK_IMPORTED_MODULE_5__["JacketComponent"], _shirt_shirt_component__WEBPACK_IMPORTED_MODULE_7__["ShirtComponent"], _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_8__["ShoesComponent"], _suit_suit_component__WEBPACK_IMPORTED_MODULE_9__["SuitComponent"], _t_shirt_t_shirt_component__WEBPACK_IMPORTED_MODULE_10__["TShirtComponent"], _pants_pants_component__WEBPACK_IMPORTED_MODULE_6__["PantsComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"]];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "x0d2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-footer/my-footer.component */ "ucDN");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-my-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-my-footer");
    } }, directives: [_my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_1__["MyNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_3__["MyFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "U0XV":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-type': 'application/json'
    })
};
class UsersService {
    constructor(http) {
        this.http = http;
        this.userUrl = "https://pharmacy-databeas.herokuapp.com/userCustomer-information";
    }
    getusers() {
        return this.http.get(this.userUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandeler) // handle the error
        );
    }
    errorHandeler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    }
    //  addUser
    addUser(user) {
        return this.http.post(this.userUrl, user, httpOptions);
        // .pipe(delay(1500))// simulate network delay
    }
    serchinuserarry() {
        return this.http.get(`https://pharmacy-databeas.herokuapp.com/userCustomer-information/?email=${this.email}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandeler) // handle the error
        );
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "VWvK":
/*!*********************************************************!*\
  !*** ./src/app/products/products/products.component.ts ***!
  \*********************************************************/
/*! exports provided: ProdactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdactsComponent", function() { return ProdactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "vuCO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../productsnav/productsnav.component */ "KNyi");






function ProdactsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdactsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/shop", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function ProdactsComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, "url(" + item_r3.img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.price, " EGP");
} }
class ProdactsComponent {
    constructor(_prodactsService, router) {
        this._prodactsService = _prodactsService;
        this.router = router;
        this.prodacts = [];
        this.error = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true; //show loading
        this._prodactsService.getProdacts().subscribe((data) => {
            this.prodacts = data;
            this.loading = false;
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
}
ProdactsComponent.ɵfac = function ProdactsComponent_Factory(t) { return new (t || ProdactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProdactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdactsComponent, selectors: [["app-prodacts"]], decls: 6, vars: 3, consts: [[1, "myshop"], ["class", "center", 4, "ngIf"], ["class", " loading", 4, "ngIf"], [1, "cards"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "center"], [1, "loading"], [1, "sk-chase"], [1, "sk-chase-dot"], [1, "card", 3, "routerLink"], [1, "img", 3, "ngStyle"], [1, "shopcontent"], [1, "is-size-5"], [1, "is-size-5", "has-text-info"]], template: function ProdactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdactsComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProdactsComponent_div_2_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-productsnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProdactsComponent_a_5_Template, 7, 8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prodacts.length === 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.prodacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_4__["ProductsnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".cards[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n  }\r\n  .card[_ngcontent-%COMP%] {\r\n    width: calc(20% - 20px);\r\n    margin: 9px;\r\n    border: 1px solid #95afc0;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    \r\n    text-align: center;\r\n    padding: 5px 0;\r\n  }\r\n  .img[_ngcontent-%COMP%] {\r\n    height: 250px;\r\n    background-size: contain;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n  }\r\n  .loading[_ngcontent-%COMP%]{\r\n    z-index: 99999999999;\r\n    position: absolute;\r\n    background-color: #ccc;\r\n    bottom: 0;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .sk-chase[_ngcontent-%COMP%] {\r\n    \r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    animation: sk-chase 2.5s infinite linear both;\r\n    \r\n  }\r\n  .sk-chase-dot[_ngcontent-%COMP%] {\r\n    \r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0; \r\n    animation: sk-chase-dot 2.0s infinite ease-in-out both; \r\n  }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    display: block;\r\n    width: 25%;\r\n    height: 25%;\r\n    background-color: #130f40;\r\n    border-radius: 100%;\r\n    animation: sk-chase-dot-before 2.0s infinite ease-in-out both; \r\n  }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(1) { animation-delay: -1.1s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(2) { animation-delay: -1.0s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(3) { animation-delay: -0.9s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(4) { animation-delay: -0.8s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(5) { animation-delay: -0.7s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(6) { animation-delay: -0.6s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(1):before { animation-delay: -1.1s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(2):before { animation-delay: -1.0s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(3):before { animation-delay: -0.9s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(4):before { animation-delay: -0.8s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(5):before { animation-delay: -0.7s; }\r\n  .sk-chase-dot[_ngcontent-%COMP%]:nth-child(6):before { animation-delay: -0.6s; }\r\n  @keyframes sk-chase {\r\n    100% { transform: rotate(360deg); } \r\n  }\r\n  @keyframes sk-chase-dot {\r\n    80%, 100% { transform: rotate(360deg); } \r\n  }\r\n  @keyframes sk-chase-dot-before {\r\n    50% {\r\n      transform: scale(0.4); \r\n    } 100%, 0% {\r\n      transform: scale(1.0); \r\n    } \r\n  }\r\n  \r\n  \r\n  @media screen and (min-width: 769px) and (max-width: 1215px) {\r\n    \r\n    .cards[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n    .card[_ngcontent-%COMP%] {\r\n      width: calc(100% - 20px);\r\n    }\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    \r\n    .cards[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n    .card[_ngcontent-%COMP%] {\r\n      width: calc(100% - 20px);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsd0VBQXdFOztJQUV4RSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0VBQ1Y7RUFFQSxxQkFBcUI7RUFFckI7O0lBRUUsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkNBQTZDOztFQUUvQztFQUVBOztJQUVFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sc0RBQXNEO0VBQ3hEO0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw2REFBNkQ7RUFDL0Q7RUFFQSw2QkFBNkIsc0JBQXNCLEVBQUU7RUFDckQsNkJBQTZCLHNCQUFzQixFQUFFO0VBQ3JELDZCQUE2QixzQkFBc0IsRUFBRTtFQUNyRCw2QkFBNkIsc0JBQXNCLEVBQUU7RUFDckQsNkJBQTZCLHNCQUFzQixFQUFFO0VBQ3JELDZCQUE2QixzQkFBc0IsRUFBRTtFQUNyRCxvQ0FBb0Msc0JBQXNCLEVBQUU7RUFDNUQsb0NBQW9DLHNCQUFzQixFQUFFO0VBQzVELG9DQUFvQyxzQkFBc0IsRUFBRTtFQUM1RCxvQ0FBb0Msc0JBQXNCLEVBQUU7RUFDNUQsb0NBQW9DLHNCQUFzQixFQUFFO0VBQzVELG9DQUFvQyxzQkFBc0IsRUFBRTtFQUU1RDtJQUNFLE9BQU8seUJBQXlCLEVBQUU7RUFDcEM7RUFFQTtJQUNFLFlBQVkseUJBQXlCLEVBQUU7RUFDekM7RUFFQTtJQUNFO01BQ0UscUJBQXFCO0lBQ3ZCLEVBQUU7TUFDQSxxQkFBcUI7SUFDdkI7RUFDRjtFQUNBLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1g7SUFDRSxTQUFTO0lBQ1Q7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtFQUNGIiwiZmlsZSI6InByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiBjYWxjKDIwJSAtIDIwcHgpO1xyXG4gICAgbWFyZ2luOiA5cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTVhZmMwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICB9XHJcbiAgLmltZyB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIC5sb2FkaW5ne1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBsb2RpbmcgYW5pbWF0aW9uICovXHJcbiAgXHJcbiAgLnNrLWNoYXNlIHtcclxuICAgIFxyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb246IHNrLWNoYXNlIDIuNXMgaW5maW5pdGUgbGluZWFyIGJvdGg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnNrLWNoYXNlLWRvdCB7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDsgXHJcbiAgICBhbmltYXRpb246IHNrLWNoYXNlLWRvdCAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7IFxyXG4gIH1cclxuICBcclxuICAuc2stY2hhc2UtZG90OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMGY0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBhbmltYXRpb246IHNrLWNoYXNlLWRvdC1iZWZvcmUgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoOyBcclxuICB9XHJcbiAgXHJcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XHJcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IC0xLjBzOyB9XHJcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IC0wLjlzOyB9XHJcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNCkgeyBhbmltYXRpb24tZGVsYXk6IC0wLjhzOyB9XHJcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNSkgeyBhbmltYXRpb24tZGVsYXk6IC0wLjdzOyB9XHJcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNikgeyBhbmltYXRpb24tZGVsYXk6IC0wLjZzOyB9XHJcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMSk6YmVmb3JlIHsgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgfVxyXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDIpOmJlZm9yZSB7IGFuaW1hdGlvbi1kZWxheTogLTEuMHM7IH1cclxuICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCgzKTpiZWZvcmUgeyBhbmltYXRpb24tZGVsYXk6IC0wLjlzOyB9XHJcbiAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNCk6YmVmb3JlIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC44czsgfVxyXG4gIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDUpOmJlZm9yZSB7IGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cclxuICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCg2KTpiZWZvcmUgeyBhbmltYXRpb24tZGVsYXk6IC0wLjZzOyB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzay1jaGFzZSB7XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzay1jaGFzZS1kb3Qge1xyXG4gICAgODAlLCAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzay1jaGFzZS1kb3QtYmVmb3JlIHtcclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTsgXHJcbiAgICB9IDEwMCUsIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApOyBcclxuICAgIH0gXHJcbiAgfVxyXG4gIC8qIGxvZGluZyBhbmltYXRpb24gKi9cclxuICAvKiB0YXBsZXQgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEyMTVweCkge1xyXG4gICAgLyogc2hvcCAqL1xyXG4gICAgLmNhcmRzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8qIHNob3AgKi9cclxuICAgIC5jYXJkcyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prodacts',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "VraU":
/*!*****************************************************!*\
  !*** ./src/app/products/jacket/jacket.component.ts ***!
  \*****************************************************/
/*! exports provided: JacketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JacketComponent", function() { return JacketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "vuCO");
/* harmony import */ var _productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productsnav/productsnav.component */ "KNyi");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "CJFX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/shop", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function JacketComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, "url(" + item_r1.img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.price, " EGP");
} }
class JacketComponent {
    constructor(_prodactsService) {
        this._prodactsService = _prodactsService;
        this.prodacts = [];
        this.mycategory = [];
        this.error = [];
    }
    ngOnInit() {
        this.pathname = window.location.pathname.substring(1);
        this._prodactsService.getProdacts().subscribe((data) => {
            this.prodacts = data;
            let result = data.filter(obj => {
                return obj.category === this.pathname;
            });
            this.mycategory = result;
        }, (err) => {
            this.error = err;
        });
    }
}
JacketComponent.ɵfac = function JacketComponent_Factory(t) { return new (t || JacketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"])); };
JacketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JacketComponent, selectors: [["app-jacket"]], decls: 4, vars: 1, consts: [[1, "cards"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "img", 3, "ngStyle"], [1, "shopcontent"], [1, "is-size-5"], [1, "is-size-5", "has-text-info"]], template: function JacketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-productsnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JacketComponent_a_3_Template, 7, 8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mycategory);
    } }, directives: [_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__["ProductsnavComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYWNrZXQuY29tcG9uZW50LmNzcyJ9 */", ".cards[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: row wrap;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        width: calc(20% - 20px);\n        margin: 9px;\n        border: 1px solid #95afc0;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n        text-align: center;\n        padding: 5px 0;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        height: 250px;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JacketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jacket',
                templateUrl: './jacket.component.html',
                styleUrls: ['./jacket.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"] }]; }, null); })();


/***/ }),

/***/ "WLUK":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_products_products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/products/products-routing.module */ "QoiG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _t_shirt_t_shirt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t-shirt/t-shirt.component */ "HsBO");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _suit_suit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./suit/suit.component */ "JPMA");
/* harmony import */ var _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shoes/shoes.component */ "N82d");
/* harmony import */ var _shirt_shirt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shirt/shirt.component */ "tex7");
/* harmony import */ var _pants_pants_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pants/pants.component */ "jQ65");
/* harmony import */ var _jacket_jacket_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jacket/jacket.component */ "VraU");
/* harmony import */ var _coat_coat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coat/coat.component */ "qluc");
/* harmony import */ var _blazer_blazer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blazer/blazer.component */ "9FFt");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/products.component */ "VWvK");
/* harmony import */ var _products_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../products/productsnav/productsnav.component */ "KNyi");
/* harmony import */ var _products_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../products/carousel/carousel.component */ "CJFX");
/* harmony import */ var _products_prodacts_detail_prodacts_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../products/prodacts-detail/prodacts-detail.component */ "wgHt");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cart/cart.component */ "XWLF");


// import { AppComponent } from '../app.component';


















class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__["IvyCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _products_products_products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_t_shirt_t_shirt_component__WEBPACK_IMPORTED_MODULE_5__["TShirtComponent"],
        _suit_suit_component__WEBPACK_IMPORTED_MODULE_7__["SuitComponent"],
        _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_8__["ShoesComponent"],
        _shirt_shirt_component__WEBPACK_IMPORTED_MODULE_9__["ShirtComponent"],
        _pants_pants_component__WEBPACK_IMPORTED_MODULE_10__["PantsComponent"],
        _jacket_jacket_component__WEBPACK_IMPORTED_MODULE_11__["JacketComponent"],
        _coat_coat_component__WEBPACK_IMPORTED_MODULE_12__["CoatComponent"],
        _blazer_blazer_component__WEBPACK_IMPORTED_MODULE_13__["BlazerComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProdactsComponent"],
        _products_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_15__["ProductsnavComponent"],
        _products_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"],
        _products_prodacts_detail_prodacts_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProdactsDetailComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__["IvyCarouselModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _products_products_products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"]], exports: [_t_shirt_t_shirt_component__WEBPACK_IMPORTED_MODULE_5__["TShirtComponent"],
        _suit_suit_component__WEBPACK_IMPORTED_MODULE_7__["SuitComponent"],
        _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_8__["ShoesComponent"],
        _shirt_shirt_component__WEBPACK_IMPORTED_MODULE_9__["ShirtComponent"],
        _pants_pants_component__WEBPACK_IMPORTED_MODULE_10__["PantsComponent"],
        _jacket_jacket_component__WEBPACK_IMPORTED_MODULE_11__["JacketComponent"],
        _coat_coat_component__WEBPACK_IMPORTED_MODULE_12__["CoatComponent"],
        _blazer_blazer_component__WEBPACK_IMPORTED_MODULE_13__["BlazerComponent"],
        _products_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_15__["ProductsnavComponent"],
        _products_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"],
        _products_prodacts_detail_prodacts_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProdactsDetailComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_t_shirt_t_shirt_component__WEBPACK_IMPORTED_MODULE_5__["TShirtComponent"],
                    _suit_suit_component__WEBPACK_IMPORTED_MODULE_7__["SuitComponent"],
                    _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_8__["ShoesComponent"],
                    _shirt_shirt_component__WEBPACK_IMPORTED_MODULE_9__["ShirtComponent"],
                    _pants_pants_component__WEBPACK_IMPORTED_MODULE_10__["PantsComponent"],
                    _jacket_jacket_component__WEBPACK_IMPORTED_MODULE_11__["JacketComponent"],
                    _coat_coat_component__WEBPACK_IMPORTED_MODULE_12__["CoatComponent"],
                    _blazer_blazer_component__WEBPACK_IMPORTED_MODULE_13__["BlazerComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProdactsComponent"],
                    _products_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_15__["ProductsnavComponent"],
                    _products_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"],
                    _products_prodacts_detail_prodacts_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProdactsDetailComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__["IvyCarouselModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _products_products_products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"]
                ],
                exports: [
                    _t_shirt_t_shirt_component__WEBPACK_IMPORTED_MODULE_5__["TShirtComponent"],
                    _suit_suit_component__WEBPACK_IMPORTED_MODULE_7__["SuitComponent"],
                    _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_8__["ShoesComponent"],
                    _shirt_shirt_component__WEBPACK_IMPORTED_MODULE_9__["ShirtComponent"],
                    _pants_pants_component__WEBPACK_IMPORTED_MODULE_10__["PantsComponent"],
                    _jacket_jacket_component__WEBPACK_IMPORTED_MODULE_11__["JacketComponent"],
                    _coat_coat_component__WEBPACK_IMPORTED_MODULE_12__["CoatComponent"],
                    _blazer_blazer_component__WEBPACK_IMPORTED_MODULE_13__["BlazerComponent"],
                    _products_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_15__["ProductsnavComponent"],
                    _products_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"],
                    _products_prodacts_detail_prodacts_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProdactsDetailComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "XWLF":
/*!*************************************************!*\
  !*** ./src/app/products/cart/cart.component.ts ***!
  \*************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/shop", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function CartComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_1_div_4_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const index_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.mydelete(index_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_1_div_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const index_r5 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.removefromquantty(index_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " -1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_1_div_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const index_r5 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.addtoquantty(index_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " +1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, item_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, "url(" + item_r4.img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4.price, " EGP");
} }
function CartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_1_div_4_Template, 17, 9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Item/s In Cart" + ctx_r0.mylocalStorageQty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mylocalStorageCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Tolal Price" + ctx_r0.mylocalStorageTolalPrice, " ");
} }
function CartComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "your cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shop Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor() {
        this.edited = false;
        this.mylocalStorageCard = JSON.parse(localStorage.getItem('cart'));
        this.mylocalStorageTolalPrice = JSON.parse(localStorage.getItem('totalprice'));
        this.mylocalStorageQty = JSON.parse(localStorage.getItem('qty'));
    }
    ngOnInit() {
    }
    addtoquantty(index) {
        const myclickdObject = this.mylocalStorageCard[index];
        myclickdObject.quantity++;
        this.mylocalStorageQty++;
        this.mylocalStorageTolalPrice =
            +this.mylocalStorageTolalPrice + +myclickdObject.price;
        // save localStorage
        this.savelocalstorage();
    }
    removefromquantty(index) {
        const myclickdObject = this.mylocalStorageCard[index];
        myclickdObject.quantity--;
        this.mylocalStorageQty--;
        this.mylocalStorageTolalPrice =
            +this.mylocalStorageTolalPrice + -myclickdObject.price;
        if (myclickdObject.quantity === 0) {
            this.mylocalStorageCard.splice(index, 1);
        }
        // save localStorage
        this.savelocalstorage();
    }
    mydelete(index) {
        const myclickdObject = this.mylocalStorageCard[index];
        this.mylocalStorageCard.splice(index, 1);
        this.mylocalStorageTolalPrice =
            +this.mylocalStorageTolalPrice + -myclickdObject.price * myclickdObject.quantity;
        this.mylocalStorageQty =
            +this.mylocalStorageQty + -myclickdObject.quantity;
        // save localStorage
        this.savelocalstorage();
    }
    savelocalstorage() {
        // localStorage
        localStorage.setItem("totalprice", this.mylocalStorageTolalPrice);
        localStorage.setItem("qty", this.mylocalStorageQty);
        let mystringCart = JSON.stringify(this.mylocalStorageCard); //convert  my array of opject to string to save it on localStorage
        localStorage.setItem("cart", mystringCart); //set cart string
        // // localStorage
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 5, vars: 2, consts: [[4, "ngIf", "ngIfElse"], [1, "empty"], ["elseBlock", ""], [1, "is-size-1"], [1, "cards"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "button", "is-success"], [3, "routerLink"], [1, "img", 3, "ngStyle"], [1, "shopcontent"], [1, "is-size-5"], [1, "is-size-5", "has-text-info"], [1, "buttons"], [1, "button", "is-danger", 3, "click"], [1, "button", "is-warning", 3, "click"], [1, "is-size-2"], ["src", "../../../assets/img/empty-cart-png.webp", "alt", ""], ["routerLink", "/shop", "routerLinkActive", "active", 1, "button"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_1_Template, 10, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_ng_template_3_Template, 5, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mylocalStorageQty != 0 && ctx.mylocalStorageQty != null)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */", ".empty[_ngcontent-%COMP%] {\n        \n        display: none;\n\n        \n    }\n\n    .buttons[_ngcontent-%COMP%] {\n        display: block;\n        padding: 5px 0;\n        background-color: cornsilk;\n    }\n\n    .cards[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: row wrap;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        width: calc(50% - 20px);\n        margin: 9px;\n        border: 1px solid #95afc0;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n        text-align: center;\n        padding: 5px 0;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        height: 100px;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "x0d2");
/* harmony import */ var _my_hero_my_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-hero/my-hero.component */ "qjCB");
/* harmony import */ var _my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-footer/my-footer.component */ "ucDN");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.module */ "WLUK");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-form/login-form.component */ "5P1i");
/* harmony import */ var _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sign-up-form/sign-up-form.component */ "0OIs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










// import { UsersModule } from './users/users.module';





// import { ProductsRoutingModule } from './products/products/products-routing.module'
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["IvyCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            // UsersModule,
            _products_products_module__WEBPACK_IMPORTED_MODULE_10__["ProductsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
            // ProductsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_6__["MyNavComponent"],
        _my_hero_my_hero_component__WEBPACK_IMPORTED_MODULE_7__["MyHeroComponent"],
        _my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_8__["MyFooterComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
        _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"],
        _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__["SignUpFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["IvyCarouselModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        // UsersModule,
        _products_products_module__WEBPACK_IMPORTED_MODULE_10__["ProductsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        // ProductsRoutingModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_6__["MyNavComponent"],
                    _my_hero_my_hero_component__WEBPACK_IMPORTED_MODULE_7__["MyHeroComponent"],
                    _my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_8__["MyFooterComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                    _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"],
                    _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__["SignUpFormComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["IvyCarouselModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    // UsersModule,
                    _products_products_module__WEBPACK_IMPORTED_MODULE_10__["ProductsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
                    // ProductsRoutingModule
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jQ65":
/*!***************************************************!*\
  !*** ./src/app/products/pants/pants.component.ts ***!
  \***************************************************/
/*! exports provided: PantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantsComponent", function() { return PantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "vuCO");
/* harmony import */ var _productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productsnav/productsnav.component */ "KNyi");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "CJFX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/shop", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function PantsComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, "url(" + item_r1.img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.price, " EGP");
} }
class PantsComponent {
    constructor(_prodactsService) {
        this._prodactsService = _prodactsService;
        this.prodacts = [];
        this.mycategory = [];
        this.error = [];
    }
    ngOnInit() {
        this.pathname = window.location.pathname.substring(1);
        this._prodactsService.getProdacts().subscribe((data) => {
            this.prodacts = data;
            let result = data.filter(obj => {
                return obj.category === this.pathname;
            });
            this.mycategory = result;
        }, (err) => {
            this.error = err;
        });
    }
}
PantsComponent.ɵfac = function PantsComponent_Factory(t) { return new (t || PantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"])); };
PantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PantsComponent, selectors: [["app-pants"]], decls: 4, vars: 1, consts: [[1, "cards"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "img", 3, "ngStyle"], [1, "shopcontent"], [1, "is-size-5"], [1, "is-size-5", "has-text-info"]], template: function PantsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-productsnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PantsComponent_a_3_Template, 7, 8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mycategory);
    } }, directives: [_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__["ProductsnavComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW50cy5jb21wb25lbnQuY3NzIn0= */", ".cards[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: row wrap;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        width: calc(20% - 20px);\n        margin: 9px;\n        border: 1px solid #95afc0;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n        text-align: center;\n        padding: 5px 0;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        height: 250px;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pants',
                templateUrl: './pants.component.html',
                styleUrls: ['./pants.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"] }]; }, null); })();


/***/ }),

/***/ "qjCB":
/*!**********************************************!*\
  !*** ./src/app/my-hero/my-hero.component.ts ***!
  \**********************************************/
/*! exports provided: MyHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHeroComponent", function() { return MyHeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MyHeroComponent {
    constructor() {
        this.title = 'Angular Store';
    }
    ngOnInit() {
    }
}
MyHeroComponent.ɵfac = function MyHeroComponent_Factory(t) { return new (t || MyHeroComponent)(); };
MyHeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyHeroComponent, selectors: [["app-my-hero"]], decls: 53, vars: 1, consts: [[1, "myhero"], [1, "center", "myherocontent"], [1, "heroH1"], [1, "heroP", "is-size-3"], ["routerLink", "/shop", "routerLinkActive", "active"], [1, "columns", "is-variable", "is-1-mobile", "is-0-tablet", "is-3-desktop", "is-8-widescreen", "is-2-fullhd", "is-gapless"], [1, "column"], [1, "offer", "offertwo"], [1, "secondSection"], [1, "dad"], [1, "child", "content"], [1, "title"], [1, "subtitle"], [1, "child"], [1, "darikdiv"], ["src", "../../assets/img/hero/1.jpg", 1, "img"], ["src", "../../assets/img/hero/Untitled-1.png", 1, "imgsid1"], [1, "offer", "offerone"], [1, "level", "statistics", "columns", "is-variable", "is-1-mobile", "is-0-tablet", "is-3-desktop", "is-8-widescreen", "is-2-fullhd", "is-gapless"], [1, "level-item", "has-text-centered"], [1, "heading"]], template: function MyHeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquam doloribus? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "456K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "456K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1oZXJvLmNvbXBvbmVudC5jc3MifQ== */", ".myhero[_ngcontent-%COMP%] {\n    background-image: url('../../assets/img/hero/91443.png');\n    height: 100vh;\n    background-size: cover;\n    background-position: center center;\n    margin-top: -50px;\n\n  }\n\n  .myherocontent[_ngcontent-%COMP%] {\n    font-family: 'Caveat Brush', cursive;\n    color: #fff;\n  }\n\n  .heroP[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .heroH1[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n\n  .dad[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n  }\n\n  .secondSection[_ngcontent-%COMP%] {\n    position: relative;\n\n  }\n\n  .imgsid1[_ngcontent-%COMP%] {\n\n    position: absolute;\n    left: -195px;\n    bottom: 150px;\n    z-index: -1;\n    transform: rotateZ(270deg);\n    width: 34%;\n  }\n\n  .child.content[_ngcontent-%COMP%] {\n    width: 500px\n  }\n\n  .darikdiv[_ngcontent-%COMP%] {\n    position: relative;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  }\n\n  .img[_ngcontent-%COMP%] {\n    position: absolute;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    right: 35px;\n    bottom: 35px;\n  }\n\n  .darikdiv[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 500px;\n    background-color: #005075;\n  }\n\n  .myherocontent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px 20px;\n    font-size: 25px;\n    color: #fff;\n    background-color: transparent;\n    border-radius: 5px;\n    border: 3px solid #fff;\n  }\n\n  .myherocontent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    \n    background-color: #37452c;\n    border: none;\n    transition: 0.35s;\n  }\n\n\n\n  .statistics[_ngcontent-%COMP%] {\n\n    background-size: contain;\n    \n    background-position: center center;\n    \n    padding: 100px 0;\n    margin-top: 25px;\n  }\n\n  .statistics[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    \n  }\n\n  .heroImg[_ngcontent-%COMP%] {\n    height: 500px;\n    background-size: cover;\n    background-position: center center;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  }\n\n  .one[_ngcontent-%COMP%] {\n    background-image: url('../../assets/img/hero/7.JPG');\n\n  }\n\n  .offer[_ngcontent-%COMP%] {\n\n    \n    \n    height: 100px;\n    max-width: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center center;\n    \n  }\n\n  .offertwo[_ngcontent-%COMP%] {\n    background-image: url('../../assets/img/hero/Meeza-HP-Strip-en.jpg');\n    \n    margin: 100px 0;\n  }\n\n  .offerone[_ngcontent-%COMP%] {\n    background-image: url('../../assets/img/hero/Countdown-web-en.gif');\n    margin-top: 100px;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyHeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-hero',
                templateUrl: './my-hero.component.html',
                styleUrls: ['./my-hero.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qluc":
/*!*************************************************!*\
  !*** ./src/app/products/coat/coat.component.ts ***!
  \*************************************************/
/*! exports provided: CoatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoatComponent", function() { return CoatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "vuCO");
/* harmony import */ var _productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productsnav/productsnav.component */ "KNyi");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "CJFX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/shop", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function CoatComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, "url(" + item_r1.img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.price, " EGP");
} }
class CoatComponent {
    constructor(_prodactsService) {
        this._prodactsService = _prodactsService;
        this.prodacts = [];
        this.mycategory = [];
        this.error = [];
    }
    ngOnInit() {
        this.pathname = window.location.pathname.substring(1);
        this._prodactsService.getProdacts().subscribe((data) => {
            this.prodacts = data;
            let result = data.filter(obj => {
                return obj.category === this.pathname;
            });
            this.mycategory = result;
        }, (err) => {
            this.error = err;
        });
    }
}
CoatComponent.ɵfac = function CoatComponent_Factory(t) { return new (t || CoatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"])); };
CoatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoatComponent, selectors: [["app-coat"]], decls: 4, vars: 1, consts: [[1, "cards"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "img", 3, "ngStyle"], [1, "shopcontent"], [1, "is-size-5"], [1, "is-size-5", "has-text-info"]], template: function CoatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-productsnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CoatComponent_a_3_Template, 7, 8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mycategory);
    } }, directives: [_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__["ProductsnavComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2F0LmNvbXBvbmVudC5jc3MifQ== */", ".cards[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: row wrap;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        width: calc(20% - 20px);\n        margin: 9px;\n        border: 1px solid #95afc0;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n        text-align: center;\n        padding: 5px 0;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        height: 250px;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-coat',
                templateUrl: './coat.component.html',
                styleUrls: ['./coat.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"] }]; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tex7":
/*!***************************************************!*\
  !*** ./src/app/products/shirt/shirt.component.ts ***!
  \***************************************************/
/*! exports provided: ShirtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShirtComponent", function() { return ShirtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "vuCO");
/* harmony import */ var _productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productsnav/productsnav.component */ "KNyi");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/carousel.component */ "CJFX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/shop", a1]; };
const _c1 = function (a0) { return { "backgroundImage": a0 }; };
function ShirtComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, "url(" + item_r1.img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.price, " EGP");
} }
class ShirtComponent {
    constructor(_prodactsService) {
        this._prodactsService = _prodactsService;
        this.prodacts = [];
        this.mycategory = [];
        this.error = [];
    }
    ngOnInit() {
        this.pathname = window.location.pathname.substring(1);
        this._prodactsService.getProdacts().subscribe((data) => {
            this.prodacts = data;
            let result = data.filter(obj => {
                return obj.category === this.pathname;
            });
            this.mycategory = result;
        }, (err) => {
            this.error = err;
        });
    }
}
ShirtComponent.ɵfac = function ShirtComponent_Factory(t) { return new (t || ShirtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"])); };
ShirtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShirtComponent, selectors: [["app-shirt"]], decls: 4, vars: 1, consts: [[1, "cards"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "img", 3, "ngStyle"], [1, "shopcontent"], [1, "is-size-5"], [1, "is-size-5", "has-text-info"]], template: function ShirtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-productsnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShirtComponent_a_3_Template, 7, 8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mycategory);
    } }, directives: [_productsnav_productsnav_component__WEBPACK_IMPORTED_MODULE_2__["ProductsnavComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlydC5jb21wb25lbnQuY3NzIn0= */", ".cards[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: row wrap;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        width: calc(20% - 20px);\n        margin: 9px;\n        border: 1px solid #95afc0;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n        text-align: center;\n        padding: 5px 0;\n    }\n\n    .img[_ngcontent-%COMP%] {\n        height: 250px;\n        background-size: contain;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShirtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shirt',
                templateUrl: './shirt.component.html',
                styleUrls: ['./shirt.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"] }]; }, null); })();


/***/ }),

/***/ "ucDN":
/*!**************************************************!*\
  !*** ./src/app/my-footer/my-footer.component.ts ***!
  \**************************************************/
/*! exports provided: MyFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFooterComponent", function() { return MyFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MyFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyFooterComponent.ɵfac = function MyFooterComponent_Factory(t) { return new (t || MyFooterComponent)(); };
MyFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyFooterComponent, selectors: [["app-my-footer"]], decls: 15, vars: 0, consts: [[1, "footer"], [1, "content", "has-text-centered"], ["href", "https://www.amradelata.com/"]], template: function MyFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "angularStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Amradelata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ". The source code is licensed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". The website content is licensed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CC BY NC SA 4.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-footer',
                templateUrl: './my-footer.component.html',
                styleUrls: ['./my-footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products/products.component */ "VWvK");
/* harmony import */ var _products_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/cart/cart.component */ "XWLF");
/* harmony import */ var _my_hero_my_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-hero/my-hero.component */ "qjCB");
/* harmony import */ var _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/login-form/login-form.component */ "5P1i");
/* harmony import */ var _app_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/sign-up-form/sign-up-form.component */ "0OIs");









const routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'shop', component: _products_products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProdactsComponent"] },
    { path: 'login', component: _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"] },
    { path: 'signup', component: _app_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_6__["SignUpFormComponent"] },
    { path: 'Home', component: _my_hero_my_hero_component__WEBPACK_IMPORTED_MODULE_4__["MyHeroComponent"] },
    { path: 'cart', component: _products_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
// PageNotFoundComponent
const routingComponents = [_products_products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProdactsComponent"], _my_hero_my_hero_component__WEBPACK_IMPORTED_MODULE_4__["MyHeroComponent"], _products_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"], _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"], _app_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_6__["SignUpFormComponent"]];


/***/ }),

/***/ "vuCO":
/*!**********************************************!*\
  !*** ./src/app/products/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProdactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdactsService", function() { return ProdactsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ProdactsService {
    constructor(http) {
        this.http = http;
    }
    getProdacts() {
        return this.http.get("https://vue-e-commerce-databse.herokuapp.com/products")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandeler) // handle the error
        );
    }
    errorHandeler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
ProdactsService.ɵfac = function ProdactsService_Factory(t) { return new (t || ProdactsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProdactsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdactsService, factory: ProdactsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdactsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "wgHt":
/*!***********************************************************************!*\
  !*** ./src/app/products/prodacts-detail/prodacts-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProdactsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdactsDetailComponent", function() { return ProdactsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "vuCO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "backgroundImage": a0 }; };
function ProdactsDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdactsDetailComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addTocrd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "url(" + ctx_r0.singleProduct[0].img_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.singleProduct[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.singleProduct[0].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.singleProduct[0].price + " EGP");
} }
class ProdactsDetailComponent {
    constructor(_prodactsService, route) {
        this._prodactsService = _prodactsService;
        this.route = route;
        this.singleProduct = [];
        this.prodacts = [];
        this.mylocalStorageCard = JSON.parse(localStorage.getItem('cart'));
        this.mylocalStorageTolalPrice = JSON.parse(localStorage.getItem('totalprice'));
        this.mylocalStorageQty = JSON.parse(localStorage.getItem('qty'));
        this.error = [];
    }
    ngOnInit() {
        // console.log(this.mylocalStorageCard)
        let id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.prodactid = id;
        this._prodactsService.getProdacts().subscribe((data) => {
            this.prodacts = data;
            let result = data.filter(obj => {
                return obj.id === this.prodactid;
            });
            this.singleProduct = result;
        }, (err) => {
            this.error = err;
        });
    }
    savelocalstorage() {
        // localStorage
        localStorage.setItem("totalprice", this.mylocalStorageTolalPrice);
        localStorage.setItem("qty", this.mylocalStorageQty);
        let mystringCart = JSON.stringify(this.mylocalStorageCard); //convert  my array of opject to string to save it on localStorage
        localStorage.setItem("cart", mystringCart); //set cart string
        // // localStorage
    }
    addTocrd() {
        if (this.mylocalStorageCard === null ||
            this.mylocalStorageCard.length === 0) {
            //   if this first item in my cart
            this.mylocalStorageCard = [];
            this.singleProduct[0].quantity = 1;
            this.mylocalStorageCard.push(this.singleProduct[0]);
            this.mylocalStorageTolalPrice =
                +this.mylocalStorageTolalPrice + +this.singleProduct[0].price;
            this.mylocalStorageQty++;
            // savelocalStorage
            this.savelocalstorage();
            // savelocalStorage
        }
        else if (this.mylocalStorageCard != null &&
            this.mylocalStorageCard.length > 0) {
            //if this the new item but not the first in cart
            let mystringCartFromLocalStorage = localStorage.getItem("cart"); //get my string cart from localStorage
            let myObject = JSON.parse(mystringCartFromLocalStorage); // return my sting to array of objects
            console.log(this.mylocalStorageCard);
            const findInMylocalStorageCard = this.mylocalStorageCard.find(
            //search in mylocalStorageCard array of my cliked item
            item => item.id === this.singleProduct[0].id);
            if (findInMylocalStorageCard != undefined) {
                //if this item in my cart. do not add it again  add to qty ++
                findInMylocalStorageCard.quantity++;
                this.mylocalStorageQty++;
                this.mylocalStorageTolalPrice =
                    +this.mylocalStorageTolalPrice + +findInMylocalStorageCard.price;
                // savelocalStorage
                this.savelocalstorage();
                // savelocalStorage
            }
            else {
                //if i have items in my cart but state selected item not found
                this.singleProduct[0].quantity = 1; //add new key quantity = 1
                myObject.push(this.singleProduct[0]); //push this item to my local storedg cart
                this.mylocalStorageCard = myObject; //add my local storedg cart to my cart opject
                this.mylocalStorageTolalPrice =
                    +this.mylocalStorageTolalPrice + +this.singleProduct[0].price;
                this.mylocalStorageQty++;
                // savelocalStorage
                this.savelocalstorage();
                // savelocalStorage
            }
        }
    }
}
ProdactsDetailComponent.ɵfac = function ProdactsDetailComponent_Factory(t) { return new (t || ProdactsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProdactsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdactsDetailComponent, selectors: [["app-prodacts-detail"]], decls: 1, vars: 1, consts: [["class", "singleproduct", 4, "ngFor", "ngForOf"], [1, "singleproduct"], [1, "halfdev"], [1, "singlimg", 3, "ngStyle"], [1, "singlecontent"], [1, "is-size-3"], [1, "is-size-6"], [1, "price", "is-size-3"], ["routerLink", "/cart", 1, "button", "is-success", 3, "click"]], template: function ProdactsDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProdactsDetailComponent_div_0_Template, 13, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.singleProduct);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".btn[_ngcontent-%COMP%] {\r\n  margin: 50px 0 !important;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n.contenir[_ngcontent-%COMP%] {\r\n  padding: 0 100px;\r\n}\r\n.price[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n.halfdev[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  padding-top: 100px;\r\n}\r\n.singleproduct[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  height: 65vh;\r\n}\r\n.singlimg[_ngcontent-%COMP%] {\r\n  \r\n  height: 400px;\r\n  width: 500px;\r\n  margin-top: 50px;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  margin-right: 100px;\r\n}\r\n.singlecontent[_ngcontent-%COMP%]{\r\n  width: 500px;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .singleproduct[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n  .singlimg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto;\r\n    text-align: center;\r\n    background-size: cover;\r\n    height: 350px;\r\n    background-position: center center;\r\n  }\r\n  .halfdev[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    padding-top: 0;\r\n  }\r\n  .contenir[_ngcontent-%COMP%] {\r\n    padding: 0 15px;\r\n  }\r\n  .price[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    display: block;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2RhY3RzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJwcm9kYWN0cy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luOiA1MHB4IDAgIWltcG9ydGFudDtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRlbmlyIHtcclxuICBwYWRkaW5nOiAwIDEwMHB4O1xyXG59XHJcbi5wcmljZSB7XHJcbiAgXHJcbiAgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaGFsZmRldiBoMSB7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcbi5zaW5nbGVwcm9kdWN0IHtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2NXZoO1xyXG59XHJcbi5zaW5nbGltZyB7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwMDsgKi9cclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxufVxyXG4uc2luZ2xlY29udGVudHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNpbmdsZXByb2R1Y3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zaW5nbGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB9XHJcbiAgLmhhbGZkZXYgaDEge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIC5jb250ZW5pciB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG4gIC5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdactsDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prodacts-detail',
                templateUrl: './prodacts-detail.component.html',
                styleUrls: ['./prodacts-detail.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProdactsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "x0d2":
/*!********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.ts ***!
  \********************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MyNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyNavComponent.ɵfac = function MyNavComponent_Factory(t) { return new (t || MyNavComponent)(); };
MyNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyNavComponent, selectors: [["app-my-nav"]], decls: 17, vars: 0, consts: [[1, "level"], [1, "level-item", "has-text-centered"], ["routerLink", "/Home", "routerLinkActive", "active"], ["routerLink", "/shop", "routerLinkActive", "active"], ["src", "../../assets/img/logo/logo.png", "alt", "logo", 2, "height", "50px"], ["routerLink", "/cart", "routerLinkActive", "active"], ["routerLink", "/login", 1, "link", "is-info"], ["routerLink", "/signup", 1, "link", "is-info"]], template: function MyNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SHOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Log In/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #0000005d;\r\n    \r\n\r\n  }\r\n\r\n  a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-weight: bolder;\r\n    text-shadow: black;\r\n    text-shadow: -1px 5px 4px rgba(0,0,0,1);\r\n  }\r\n\r\n  a[_ngcontent-%COMP%]:hover {\r\n    color:#37452c\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFOztjQUVVO0lBQ1YsMkJBQTJCO0lBQzNCLHVCQUF1Qjs7RUFFekI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRTtFQUNGIiwiZmlsZSI6Im15LW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgbmF2IHtcclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1ZDtcclxuICAgIC8qIHotaW5kZXg6IDk5OTk5OTk5OyAqL1xyXG5cclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggNXB4IDRweCByZ2JhKDAsMCwwLDEpO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjojMzc0NTJjXHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-nav',
                templateUrl: './my-nav.component.html',
                styleUrls: ['./my-nav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map